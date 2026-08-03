"""Numerical models used by Moiré Optics Lab.

The functions in this module are independent of Streamlit so they can be
reused in notebooks, tests, scientific scripts, or other interfaces.
"""

from __future__ import annotations

from dataclasses import dataclass
from math import atan2, ceil, degrees, hypot
from typing import Literal

import numpy as np
from scipy.ndimage import gaussian_filter, map_coordinates


Array = np.ndarray
Waveform = Literal["binary", "sinusoidal"]
Interpolation = Literal["nearest", "bilinear"]


@dataclass(frozen=True)
class AliasResult:
    """Two-dimensional spatial-frequency aliasing result."""

    input_fx: float
    input_fy: float
    alias_fx: float
    alias_fy: float
    input_magnitude: float
    alias_magnitude: float
    alias_angle_deg: float
    nyquist_x: float
    nyquist_y: float


def coordinate_grid(size: int, extent: float = 1.0) -> tuple[Array, Array]:
    """Return a centered square two-dimensional coordinate grid."""
    if size < 2:
        raise ValueError("size must be at least 2")
    if extent <= 0:
        raise ValueError("extent must be positive")

    axis = np.linspace(-extent / 2.0, extent / 2.0, size, endpoint=False)
    return np.meshgrid(axis, axis)


def line_grating(
    size: int,
    period_px: float,
    angle_deg: float = 0.0,
    phase_rad: float = 0.0,
    duty_cycle: float = 0.5,
    waveform: Waveform = "binary",
) -> Array:
    """Generate a normalized periodic line grating with values from 0 to 1."""
    if size < 2:
        raise ValueError("size must be at least 2")
    if period_px <= 0:
        raise ValueError("period_px must be positive")
    if not 0 < duty_cycle < 1:
        raise ValueError("duty_cycle must be between 0 and 1")
    if waveform not in {"binary", "sinusoidal"}:
        raise ValueError(f"unsupported waveform: {waveform}")

    yy, xx = np.indices((size, size), dtype=float)
    theta = np.deg2rad(angle_deg)
    coordinate = xx * np.cos(theta) + yy * np.sin(theta)
    phase = 2.0 * np.pi * coordinate / period_px + phase_rad

    if waveform == "sinusoidal":
        return 0.5 + 0.5 * np.cos(phase)

    normalized_phase = np.mod(phase, 2.0 * np.pi) / (2.0 * np.pi)
    return (normalized_phase < duty_cycle).astype(float)


def combine_gratings(
    grating_1: Array,
    grating_2: Array,
    mode: Literal["multiply", "average", "minimum"] = "multiply",
) -> Array:
    """Combine two normalized gratings using a stated display rule."""
    if grating_1.shape != grating_2.shape:
        raise ValueError("gratings must have the same shape")

    if mode == "multiply":
        return grating_1 * grating_2
    if mode == "average":
        return 0.5 * (grating_1 + grating_2)
    if mode == "minimum":
        return np.minimum(grating_1, grating_2)
    raise ValueError(f"unsupported combination mode: {mode}")


def estimate_moire_period(
    period_1_px: float,
    period_2_px: float,
    relative_angle_deg: float,
) -> float:
    """Estimate the beat period from two spatial-frequency vectors.

    The first grating is aligned with the x-axis and the second is rotated by
    ``relative_angle_deg``. The returned value is in pixels.
    """
    if period_1_px <= 0 or period_2_px <= 0:
        raise ValueError("periods must be positive")

    f1 = 1.0 / period_1_px
    f2 = 1.0 / period_2_px
    theta = np.deg2rad(relative_angle_deg)

    delta_fx = f1 - f2 * np.cos(theta)
    delta_fy = -f2 * np.sin(theta)
    delta_f = hypot(delta_fx, delta_fy)

    if delta_f < 1e-12:
        return float("inf")
    return 1.0 / delta_f


def periodic_signal_target(
    size: int,
    cycles_per_fov: float,
    angle_deg: float,
    low_value: float = 0.0,
    high_value: float = 1.0,
    phase_rad: float = 0.0,
    waveform: Waveform = "sinusoidal",
    add_background_gradient: bool = False,
) -> Array:
    """Create a continuous periodic field sampled on a high-resolution grid.

    ``cycles_per_fov`` is the number of periods across the modeled field of
    view. A sinusoid is the default because its single spatial frequency makes
    the Nyquist comparison unambiguous. A binary waveform is included to show
    how harmonics make practical sampling more complex.
    """
    if size < 2:
        raise ValueError("size must be at least 2")
    if cycles_per_fov <= 0:
        raise ValueError("cycles_per_fov must be positive")
    if high_value <= low_value:
        raise ValueError("high_value must be greater than low_value")
    if waveform not in {"binary", "sinusoidal"}:
        raise ValueError(f"unsupported waveform: {waveform}")

    x, y = coordinate_grid(size, extent=1.0)
    theta = np.deg2rad(angle_deg)
    projected = x * np.cos(theta) + y * np.sin(theta)
    phase = 2.0 * np.pi * cycles_per_fov * projected + phase_rad

    if waveform == "sinusoidal":
        pattern = 0.5 + 0.5 * np.cos(phase)
    else:
        pattern = (np.cos(phase) >= 0).astype(float)

    field = low_value + (high_value - low_value) * pattern
    if add_background_gradient:
        field = field + 0.12 * (high_value - low_value) * (0.55 * x + 0.45 * y)
    return field


def area_sample(field: Array, output_rows: int, output_cols: int) -> Array:
    """Numerically average a field over each rectangular sampling aperture.

    The high-resolution array is interpreted as values at pixel centres. Each
    output value is the mean of an evenly spaced sub-grid over its aperture.
    This is a finite-area approximation, unlike point sampling at the aperture
    centre.
    """
    if field.ndim != 2:
        raise ValueError("field must be a 2-D array")
    if output_rows < 2 or output_cols < 2:
        raise ValueError("output dimensions must be at least 2")

    source_rows, source_cols = field.shape
    sub_rows = max(1, ceil(source_rows / output_rows))
    sub_cols = max(1, ceil(source_cols / output_cols))

    row_positions = (
        (np.arange(output_rows * sub_rows) + 0.5)
        * source_rows
        / (output_rows * sub_rows)
        - 0.5
    )
    col_positions = (
        (np.arange(output_cols * sub_cols) + 0.5)
        * source_cols
        / (output_cols * sub_cols)
        - 0.5
    )
    cc, rr = np.meshgrid(col_positions, row_positions)
    fine_samples = map_coordinates(field, [rr, cc], order=1, mode="nearest")

    return fine_samples.reshape(output_rows, sub_rows, output_cols, sub_cols).mean(
        axis=(1, 3)
    )


def detector_sample(
    scene: Array,
    detector_rows: int,
    detector_cols: int,
    optical_sigma_px: float = 0.0,
    noise_std: float = 0.0,
    seed: int = 7,
) -> tuple[Array, Array]:
    """Apply pre-sampling blur, finite-area sampling, and optional noise.

    ``optical_sigma_px`` is expressed in high-resolution grid pixels. The
    finite sampling aperture is modeled by :func:`area_sample`.
    """
    if scene.ndim != 2:
        raise ValueError("scene must be a 2-D array")
    if detector_rows < 2 or detector_cols < 2:
        raise ValueError("detector dimensions must be at least 2")
    if optical_sigma_px < 0:
        raise ValueError("optical_sigma_px cannot be negative")
    if noise_std < 0:
        raise ValueError("noise_std cannot be negative")

    filtered_scene = (
        gaussian_filter(scene, sigma=optical_sigma_px, mode="reflect")
        if optical_sigma_px > 0
        else scene.copy()
    )
    samples = area_sample(filtered_scene, detector_rows, detector_cols)

    if noise_std > 0:
        rng = np.random.default_rng(seed)
        samples = samples + rng.normal(0.0, noise_std, size=samples.shape)

    return filtered_scene, samples


def enlarge_detector_image(
    detector_image: Array,
    output_size: int,
    interpolation: Interpolation = "nearest",
) -> Array:
    """Resize output for display without changing the underlying sample values."""
    if detector_image.ndim != 2:
        raise ValueError("detector_image must be 2-D")
    if output_size < 2:
        raise ValueError("output_size must be at least 2")
    if interpolation not in {"nearest", "bilinear"}:
        raise ValueError(f"unsupported interpolation: {interpolation}")

    row_coords = np.linspace(0, detector_image.shape[0] - 1, output_size)
    col_coords = np.linspace(0, detector_image.shape[1] - 1, output_size)
    cc, rr = np.meshgrid(col_coords, row_coords)
    order = 0 if interpolation == "nearest" else 1
    return map_coordinates(detector_image, [rr, cc], order=order, mode="nearest")


def wrap_alias_frequency(frequency: float, sampling_frequency: float) -> float:
    """Wrap a frequency into the half-open principal interval [-fs/2, fs/2)."""
    if sampling_frequency <= 0:
        raise ValueError("sampling_frequency must be positive")
    return (
        (frequency + sampling_frequency / 2.0) % sampling_frequency
        - sampling_frequency / 2.0
    )


def alias_vector_2d(
    cycles_per_fov: float,
    angle_deg: float,
    detector_rows: int,
    detector_cols: int,
) -> AliasResult:
    """Calculate the fundamental alias vector in two-dimensional sampling.

    The modeled field of view has normalized width and height equal to one;
    detector columns and rows therefore act as sampling frequencies in samples
    per field of view.
    """
    if cycles_per_fov < 0:
        raise ValueError("cycles_per_fov cannot be negative")
    if detector_rows < 2 or detector_cols < 2:
        raise ValueError("detector dimensions must be at least 2")

    theta = np.deg2rad(angle_deg)
    fx = cycles_per_fov * np.cos(theta)
    fy = cycles_per_fov * np.sin(theta)

    alias_fx = wrap_alias_frequency(fx, float(detector_cols))
    alias_fy = wrap_alias_frequency(fy, float(detector_rows))
    alias_magnitude = hypot(alias_fx, alias_fy)
    alias_angle = degrees(atan2(alias_fy, alias_fx)) if alias_magnitude > 0 else 0.0

    return AliasResult(
        input_fx=float(fx),
        input_fy=float(fy),
        alias_fx=float(alias_fx),
        alias_fy=float(alias_fy),
        input_magnitude=float(cycles_per_fov),
        alias_magnitude=float(alias_magnitude),
        alias_angle_deg=float(alias_angle),
        nyquist_x=float(detector_cols / 2.0),
        nyquist_y=float(detector_rows / 2.0),
    )
