import math

import numpy as np
import pytest

from moire_physics import (
    alias_vector_2d,
    area_sample,
    combine_gratings,
    detector_sample,
    enlarge_detector_image,
    estimate_moire_period,
    line_grating,
    periodic_signal_target,
    wrap_alias_frequency,
)


def test_equal_gratings_have_infinite_moire_period():
    assert math.isinf(estimate_moire_period(10.0, 10.0, 0.0))


def test_close_parallel_periods_generate_large_moire_period():
    assert np.isclose(estimate_moire_period(10.0, 9.5, 0.0), 190.0)


def test_line_grating_has_expected_shape_and_range():
    image = line_grating(128, 12.0, angle_deg=4.0)
    assert image.shape == (128, 128)
    assert image.min() >= 0.0
    assert image.max() <= 1.0


def test_line_grating_rejects_unknown_waveform():
    with pytest.raises(ValueError, match="unsupported waveform"):
        line_grating(32, 8.0, waveform="triangle")  # type: ignore[arg-type]


def test_combine_gratings_shape():
    first = line_grating(64, 8.0)
    second = line_grating(64, 9.0, angle_deg=2.0)
    assert combine_gratings(first, second, mode="multiply").shape == first.shape


def test_periodic_signal_respects_requested_range():
    field = periodic_signal_target(
        256,
        cycles_per_fov=40.0,
        angle_deg=5.0,
        low_value=-2.0,
        high_value=3.0,
    )
    assert field.shape == (256, 256)
    assert field.min() >= -2.0
    assert field.max() <= 3.0


def test_area_sampling_preserves_a_uniform_field():
    field = np.full((127, 131), 2.5)
    samples = area_sample(field, output_rows=48, output_cols=64)
    assert samples.shape == (48, 64)
    assert np.allclose(samples, 2.5)


def test_detector_sampling_shape():
    scene = periodic_signal_target(256, cycles_per_fov=40.0, angle_deg=5.0)
    filtered, samples = detector_sample(
        scene,
        detector_rows=48,
        detector_cols=64,
        optical_sigma_px=1.0,
    )
    assert filtered.shape == scene.shape
    assert samples.shape == (48, 64)


def test_display_enlargement_has_exact_requested_shape():
    enlarged = enlarge_detector_image(np.arange(12.0).reshape(3, 4), 128)
    assert enlarged.shape == (128, 128)


def test_alias_frequency_wraps_into_nyquist_interval():
    result = alias_vector_2d(
        cycles_per_fov=70.0,
        angle_deg=0.0,
        detector_rows=96,
        detector_cols=96,
    )
    assert abs(result.alias_fx) <= result.nyquist_x
    assert abs(result.alias_fy) <= result.nyquist_y
    assert np.isclose(result.alias_magnitude, 26.0)


def test_nyquist_boundary_uses_a_half_open_interval():
    assert wrap_alias_frequency(48.0, 96.0) == -48.0
