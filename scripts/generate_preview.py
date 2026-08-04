"""Regenerate the README preview from the current numerical model.

Run from the repository root:
    python scripts/generate_preview.py
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
os.environ.setdefault("MPLBACKEND", "Agg")
os.environ.setdefault("MPLCONFIGDIR", str(ROOT / ".cache" / "matplotlib"))

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from PIL import Image

from moire_physics import (  # noqa: E402
    alias_vector_2d,
    combine_gratings,
    detector_sample,
    enlarge_detector_image,
    line_grating,
    periodic_signal_target,
)


def main() -> None:
    """Render a compact, reproducible project overview."""
    image_size = 512
    first_grid = line_grating(image_size, 14.0, waveform="sinusoidal")
    second_grid = line_grating(image_size, 15.0, angle_deg=1.5, waveform="sinusoidal")
    moire = combine_gratings(first_grid, second_grid)

    field = periodic_signal_target(
        image_size,
        cycles_per_fov=70.0,
        angle_deg=8.0,
        waveform="sinusoidal",
    )
    filtered, samples = detector_sample(
        field,
        detector_rows=96,
        detector_cols=96,
        optical_sigma_px=1.2,
        noise_std=0.02,
    )
    displayed = enlarge_detector_image(samples, image_size)
    alias = alias_vector_2d(70.0, 8.0, detector_rows=96, detector_cols=96)

    fig, axes = plt.subplots(2, 2, figsize=(14, 10), layout="constrained")
    ax_moire, ax_field, ax_sampled, ax_frequency = axes.flat

    ax_moire.imshow(moire, cmap="gray", interpolation="nearest")
    ax_moire.set_title("Geometric Moiré", fontsize=16, weight="bold")
    ax_moire.set_axis_off()

    ax_field.imshow(filtered, cmap="viridis", interpolation="nearest")
    ax_field.set_title("Continuous periodic field", fontsize=16, weight="bold")
    ax_field.set_axis_off()

    ax_sampled.imshow(displayed, cmap="viridis", interpolation="nearest")
    ax_sampled.set_title("Aperture-averaged sampled output", fontsize=16, weight="bold")
    ax_sampled.set_axis_off()

    x_limit = max(alias.nyquist_x * 1.2, abs(alias.input_fx) * 1.1)
    y_limit = max(alias.nyquist_y * 1.2, abs(alias.input_fy) * 1.1)
    ax_frequency.add_patch(
        Rectangle(
            (-alias.nyquist_x, -alias.nyquist_y),
            2.0 * alias.nyquist_x,
            2.0 * alias.nyquist_y,
            facecolor="#3b82f6",
            edgecolor="#1d4ed8",
            alpha=0.12,
            label="Nyquist region",
        )
    )
    ax_frequency.axhline(0, color="0.45", linewidth=0.8)
    ax_frequency.axvline(0, color="0.45", linewidth=0.8)
    ax_frequency.quiver(
        0,
        0,
        alias.input_fx,
        alias.input_fy,
        angles="xy",
        scale_units="xy",
        scale=1,
        color="#dc2626",
        width=0.008,
        label="Input",
    )
    ax_frequency.quiver(
        0,
        0,
        alias.alias_fx,
        alias.alias_fy,
        angles="xy",
        scale_units="xy",
        scale=1,
        color="#059669",
        width=0.008,
        label="Aliased fundamental",
    )
    ax_frequency.set(
        xlim=(-x_limit, x_limit),
        ylim=(-y_limit, y_limit),
        aspect="equal",
        xlabel="Horizontal frequency (cycles/FOV)",
        ylabel="Vertical frequency (cycles/FOV)",
        title="Frequency-space interpretation",
    )
    ax_frequency.legend(loc="upper right")

    fig.suptitle("Moiré Optics Lab", fontsize=22, weight="bold")
    # 95 dpi gives about 1170 px across, which is already generous for the
    # README column on GitHub. The previous 180 dpi produced a 2210 px file for
    # no visible benefit.
    preview = ROOT / "assets" / "preview.png"
    fig.savefig(preview, dpi=95, bbox_inches="tight")
    plt.close(fig)

    # Matplotlib writes a full-colour PNG, roughly 340 kB for these panels. The
    # figure only ever uses a viridis ramp, a grey ramp and a few flat interface
    # colours, so a 256-entry palette reproduces it with a mean error of about
    # 0.2 of one level out of 255 while cutting the file to well under half.
    # Lossy formats were measured too: WebP at quality 90 lands at a similar
    # size with roughly twenty-five times that error, which is the wrong trade
    # for a figure whose subject is fine periodic detail.
    with Image.open(preview) as raw:
        raw.convert("RGB").quantize(colors=256, method=Image.MEDIANCUT).save(
            preview, "PNG", optimize=True
        )


if __name__ == "__main__":
    main()
