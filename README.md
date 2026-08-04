# Moiré Optics Lab

[![Verify](https://github.com/Rafaheul/moire-optics-lab/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaheul/moire-optics-lab/actions/workflows/ci.yml)

**Moiré Optics Lab** is a bilingual interactive laboratory for exploring
geometric Moiré patterns, spatial-frequency vectors, and sampling aliasing.

The interface runs entirely in the browser. Sliders redraw the canvases on the
next animation frame, so changing a grating period or orientation feels direct
rather than waiting for a server-side rerun.

The optional **3D WebGL view** loads only when opened. It turns the same live
combined pattern into a height-and-color surface, so the Grid 1, Grid 2,
waveform, and combination controls remain the single source of truth. Three.js
is served from this repository rather than a CDN, so the page has no runtime
dependency on a third party and works offline.

![Application preview](assets/preview.png)

## What it demonstrates

- **Geometric Moiré:** two line gratings, adjustable periods and relative
  orientation, with a spatial-frequency beat estimate.
- **Sampling and aliasing:** a periodic field can fold into a lower apparent
  frequency when sampled above the Nyquist limit.
- **The Nyquist boundary itself:** exactly at the limit there are only two
  samples per cycle, and the result depends on phase. The lab reports that case
  separately instead of calling it safe.
- **Two-dimensional reasoning:** a frequency-space view shows the input and
  aliased fundamental vectors against the Nyquist region.
- **Bilingual interaction:** English and Português-BR, including a collapsible
  left navigation rail that keeps the section icons available.

## Classroom use

Start with the sinusoidal waveform, the default for both primary experiments.
It makes the fundamental spatial-frequency relationships easier to see before
introducing the extra harmonics of binary lines. The `?` buttons give students a
concise explanation of each control, and Theory provides a guided sequence of
definitions, formulas, experiments, applications, and cautions. A prominent page
guide beside each section title distinguishes geometric pattern overlap from
sampling and aliasing before students begin changing controls. Every slider also
has a synchronized numeric field for precise values. The Theory section treats
aliasing in a dedicated lesson, including spatial examples, the time-domain
wagon-wheel analogy, and mitigation strategies.

## Run locally

No frontend installation and no network access are required. From the
repository root:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000). A local server is needed
because the 3D view uses ES modules, which browsers refuse to load over
`file://`. The `--bind 127.0.0.1` keeps the directory off the local network.
Stop the server with `Ctrl+C`.

## A short guided experiment

1. Open **Sampling & aliasing** from the left rail.
2. Keep the grid at `96 × 96` and set the signal frequency to `70 cycles/FOV`.
   Compare the continuous field, the sampled output, and the frequency-space
   view. The fundamental is above Nyquist and folds to a lower apparent
   frequency.
3. Now set the frequency to `48 cycles/FOV`, exactly the Nyquist limit of that
   grid, and the pre-sampling blur to `0`. Sweep the phase control from `0` to
   `90` degrees: the sampled pattern loses all of its contrast and comes back.
   Two samples per cycle is not enough, and what the grid records depends on
   where the samples happen to land.
4. Raise the sampling grid, or apply pre-sampling blur, and watch the alias
   vector move in frequency space.

## How the sampling model works

The lab is about sampling, so its own sampling deserves to be stated precisely.

- The **continuous field** panel is evaluated above its display resolution and
  area-averaged down, so the reference panel is never itself aliased. For the
  same reason the frequency control stops at 110 cycles/FOV: a 256-sample canvas
  cannot honestly display a fundamental above 128 cycles/FOV, and a reference
  that lies is worse than no reference.
- **Detector samples** are taken on a strictly uniform grid, and each sample is
  the average over its aperture rather than a point reading. This is the same
  detector model as `area_sample` in the Python reference.
- **Pre-sampling blur** is a three-pass box filter, which approximates a
  Gaussian. A single box filter has a transfer function with negative lobes: it
  would invert the contrast of some frequencies instead of suppressing them.
  The Python reference uses a true Gaussian.
- The **displayed output** is a zero-order hold of the sample values, so each
  sample becomes a block. It adds no information. Blocks can differ in width
  when the grid does not divide the canvas evenly; that is a display artifact,
  and the sampling grid behind it remains uniform.
- A **binary waveform** contains higher harmonics, which can alias even when its
  fundamental is below the stated Nyquist limit.

## Model boundaries

The browser interface is an educational visual model, not a calibrated
measurement tool. Its units are model units: periods in display pixels and
frequencies in cycles across the displayed field, chosen so relationships are
easy to inspect rather than to represent a specific instrument. It models
geometric superposition of patterns, not coherent wave interference,
propagation, or a particular optical path.

`moire_physics.py` is a framework-independent reference implementation of the
same relationships, covered by unit tests.

## Verify the reference model

Requires Python 3.10 or later.

```bash
python -m venv .venv
```

Activate the environment, then install the reference-model dependencies:

```bash
python -m pip install -e ".[dev]"
python -m pytest
```

## Design notes

Two presentation choices are applications of the lab's own subject.

The page background is a mesh. It is shown at low contrast on purpose, so the
display pixel lattice does not beat against it.

The social card in `assets/` uses gratings far coarser than those on the site.
Link previews are rendered around 500 px wide in a feed, and the first version
of the card, which used the site's own periods, collapsed into noise at that
size. The periods were lowered until the beat envelope survives the smallest
reduction the platform will apply. `scripts/generate_social_card.py` documents
the reasoning and verifies its own layout before writing the file.

## Repository layout

```text
moire-optics-lab/
├── index.html             # Browser application
├── app.js                 # Real-time interaction and canvas drawing
├── styles.css             # Responsive navigation and interface design
├── vendor/                # Three.js, served locally: no CDN at runtime
├── assets/                # Logo, page background, README preview, social card
├── moire_physics.py       # Framework-independent numerical reference model
├── tests/                 # Unit tests for the reference model
├── scripts/               # Reproducible preview and social-card generators
└── .github/workflows/     # Continuous integration
```

## Contributing

Issues and pull requests are welcome. Please keep contributions focused on
clear educational explanations, transparent assumptions, and tests for changes
to the numerical reference model.

## Citation

If this project is useful in teaching material, a demonstration, or a derived
work, please cite it using [`CITATION.cff`](CITATION.cff).

## Development credit

HTML interface developed by Rafael V F Santos, 2026.

## License

Released under the [MIT License](LICENSE).
