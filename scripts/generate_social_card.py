"""Regenerate the 1200x630 social card used by the og:image tag.

Link previews on LinkedIn, Slack and X are laid out at a 1.91:1 ratio, so the
near-square README figure would be centre-cropped and lose two of its panels.
This script renders a dedicated card at the correct ratio.

Two choices here are deliberate and worth stating.

First, the gratings are coarser than the ones used on the site. A social card is
displayed at roughly 500 px wide inside a feed, a further 2.4x downscale on top
of whatever the platform already applies. Fine gratings would beat against that
resampling and turn to mush - the exact effect this project is about - so the
periods are chosen so that the beat envelope, which is the actual subject,
survives the reduction even if the carrier does not.

Second, the layout is verified rather than eyeballed: the script measures the
rendered text and fails if it would collide with the panels, so a future edit to
the wording cannot silently produce an overlapping card.

Run from the repository root:
    python scripts/generate_social_card.py
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
import numpy as np

from moire_physics import (  # noqa: E402
    combine_gratings,
    detector_sample,
    enlarge_detector_image,
    line_grating,
    periodic_signal_target,
)

# Palette taken from styles.css so the card matches the site.
INK = "#0f1c2c"
ACCENT = "#e85c47"
AMBER = "#f2a34b"
PAPER = "#eaf2fb"
MUTED = "#93a9c2"

CARD_W, CARD_H = 1200, 630
DPI = 100
PANEL_SIDE = 250
PANEL_GAP = 26
PANEL_LEFT = 0.515
PANEL_BOTTOM = 0.225
TEXT_CLEARANCE = 24  # px that must stay free between the words and the panels
OUTPUT = ROOT / "assets" / "social-card.png"


SUPERSAMPLE = 4


def area_mean(field: np.ndarray, factor: int) -> np.ndarray:
    """Integrate each block instead of picking one point out of it.

    Matplotlib's bilinear filter only reads a 2x2 neighbourhood, so it already
    aliases at a 2x reduction. Rendering above the target size and averaging the
    blocks is the same correction applied to the browser canvases.
    """
    n = field.shape[0] // factor
    return field[: n * factor, : n * factor].reshape(n, factor, n, factor).mean(axis=(1, 3))


def superposition_panel(size: int = PANEL_SIDE) -> np.ndarray:
    """Two gratings at 20 degrees. The woven beat is the subject.

    A period of 120 px across a 1000 px render is about 8 carrier cycles, which
    lands near 12 px per cycle once a feed shows the card at 500 px wide. Finer
    gratings were tried first and collapsed into noise at that size.
    """
    big = size * SUPERSAMPLE
    first = line_grating(big, 120.0, waveform="sinusoidal")
    second = line_grating(big, 120.0, angle_deg=20.0, waveform="sinusoidal")
    return area_mean(combine_gratings(first, second, mode="multiply"), SUPERSAMPLE)


def aliased_panel(size: int = PANEL_SIDE) -> np.ndarray:
    """26 cycles/FOV read by a 24x24 detector: well above its Nyquist of 12.

    The fundamental folds to roughly 5.6 cycles, wide enough to stay legible
    after the feed reduction while still obviously being a false pattern.
    """
    scene = periodic_signal_target(
        size * SUPERSAMPLE, cycles_per_fov=26.0, angle_deg=12.0, waveform="sinusoidal"
    )
    _, samples = detector_sample(
        scene, detector_rows=24, detector_cols=24, optical_sigma_px=1.2 * SUPERSAMPLE
    )
    return enlarge_detector_image(samples, size, interpolation="nearest")


def build(strict: bool = True) -> Path:
    fig = plt.figure(figsize=(CARD_W / DPI, CARD_H / DPI), dpi=DPI)
    fig.patch.set_facecolor(INK)

    # Warm glow behind the panels, echoing the site's background image. Built
    # from the accent colour directly rather than from a colormap, so it cannot
    # drift towards a hue that is not in the palette.
    backdrop = fig.add_axes([0, 0, 1, 1], zorder=0)
    rows, cols = np.mgrid[0:CARD_H, 0:CARD_W]
    radial = np.exp(-(((cols - 900) / 480) ** 2 + ((rows - 300) / 400) ** 2))
    glow = np.zeros((CARD_H, CARD_W, 4))
    glow[..., 0], glow[..., 1], glow[..., 2] = 0.910, 0.361, 0.278  # ACCENT
    glow[..., 3] = radial * 0.30
    backdrop.imshow(glow, aspect="auto", interpolation="bilinear")
    backdrop.set_axis_off()

    # ---- left column: the words -------------------------------------------
    words = [
        fig.text(0.052, 0.815, "I N T E R A C T I V E   O P T I C S   L A B",
                 color=AMBER, fontsize=13, fontweight="bold", va="center"),
        fig.text(0.052, 0.680, "Moiré Optics Lab", color=PAPER,
                 fontsize=40, fontweight="bold", va="center"),
        fig.text(0.052, 0.530,
                 "Spatial beats, sampling and aliasing,\nexplored in real time.",
                 color="#c8d9ec", fontsize=19, va="center", linespacing=1.5),
        fig.text(0.052, 0.345,
                 "Sinusoidal and binary gratings\n"
                 "Two-dimensional Nyquist folding\n"
                 "Bilingual EN / PT-BR",
                 color=MUTED, fontsize=13.5, va="center", linespacing=1.75),
        fig.text(0.052, 0.135, "rafaheul.github.io/moire-optics-lab",
                 color=ACCENT, fontsize=16.5, fontweight="bold", va="center"),
    ]

    # ---- right column: two square panels ----------------------------------
    width = PANEL_SIDE / CARD_W
    height = PANEL_SIDE / CARD_H
    panels = (
        ("Superposition", superposition_panel(), "gray"),
        ("Aliased sampling", aliased_panel(), "viridis"),
    )
    captions = []
    for index, (label, data, cmap) in enumerate(panels):
        x = PANEL_LEFT + index * (width + PANEL_GAP / CARD_W)
        ax = fig.add_axes([x, PANEL_BOTTOM, width, height], zorder=2)
        # The arrays are already at the panel's pixel size, so no resampling.
        ax.imshow(data, cmap=cmap, interpolation="nearest")
        ax.set_axis_off()
        captions.append(
            fig.text(x + width / 2, PANEL_BOTTOM + height + 0.052, label,
                     color=PAPER, fontsize=14, fontweight="bold",
                     ha="center", va="center")
        )

    # ---- verify the layout instead of trusting it -------------------------
    fig.canvas.draw()
    renderer = fig.canvas.get_renderer()
    panel_edge = PANEL_LEFT * CARD_W
    widest = max(
        (t.get_window_extent(renderer).x1, t.get_text().splitlines()[0])
        for t in words
    )
    clearance = panel_edge - widest[0]
    report = (
        f"coluna de texto termina em {widest[0]:.0f} px (linha mais larga: "
        f"{widest[1][:34]!r})\npaineis comecam em {panel_edge:.0f} px\n"
        f"folga: {clearance:.0f} px"
    )
    if clearance < TEXT_CLEARANCE:
        message = f"texto invade os paineis.\n{report}"
        if strict:
            plt.close(fig)
            raise SystemExit(message)
        print("AVISO:", message)
    else:
        print(report)

    lowest_caption = min(c.get_window_extent(renderer).y0 for c in captions)
    panel_top = (PANEL_BOTTOM + height) * CARD_H
    print(f"legenda dos paineis {lowest_caption - panel_top:.0f} px acima do topo do painel")

    fig.savefig(OUTPUT, dpi=DPI, facecolor=fig.get_facecolor())
    plt.close(fig)
    return OUTPUT


if __name__ == "__main__":
    print("wrote", build())
