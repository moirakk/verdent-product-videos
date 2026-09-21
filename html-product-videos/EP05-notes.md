# EP05: Data Analysis

32-second portrait autoplay film. Shared visual system: white background, green accents, kinetic two-line titles, real Three.js depth, soft shadows, and supplied Verdent logo.

## Verified feature scope

Official reference checked on 2026-09-21:
https://www.verdent.ai/docs/verdent/getting-started/overview

The Data Analysis section describes importing data, asking a business question in natural language, processing data, generating charts, interpreting results, and producing analysis reports. The film depicts those capabilities with an illustrative CSV, not an exact recording of Verdent's interface or an actual customer result.

## Story and timing

- 0-3s: Dimensional weekly signup bars introduce the result.
- 3-6.5s: Ask what changed in signups last week and attach a CSV.
- 6.5-10.5s: Six weekly records align into a readable table.
- 10.5-15s: Table rows condense as six bars rise to their data-driven heights.
- 15-19s: Earlier weeks recede; W5 and W6 move forward for comparison.
- 19-24.2s: Break the total decline into paid, organic, and direct channels.
- 24.2-29s: Findings gather into a report with a separate investigation step.
- 29-32s: Supplied Verdent logo and closing line.

## Data integrity

Source example: EP05-sample-data.csv. This fictional dataset is embedded in the HTML for self-contained snapshots. The film visibly labels it as illustrative.

- W5: organic 400 + direct 200 + paid 600 = 1,200.
- W6: organic 420 + direct 210 + paid 330 = 960.
- Net change: -240 / 1,200 = -20%.
- Paid change: -270; other channels: +30; total: -240.
- Chart bars start at zero and share a common scale within each comparison.

The report describes an observed channel contribution, not a proven cause. Checking campaign and spend changes is a proposed investigation, not a claim that those changes occurred. No fabricated confidence score or guaranteed causal diagnosis is used.

## Verification and versions

- v001: Initial complete film. Source: EP05-data-analysis.html.
- Tested at desktop 1280x900, mobile 390x844, and small-screen 320x568.
- Checked page errors, missing resources, text overflow, canvas occupancy and bounds, changing frames, and autoplay.
- Arithmetic assertions verify totals, percentage change, and channel contributions.
- Inspected table alignment, chart, comparison, channel breakdown, report, and intermediate transition frames. Report copy appears after the old channel text clears.
- Preview server moved to port 8768 because the old 8767 service returned empty responses. Earlier files and versions remain unchanged.

- v002: Increased bar depth from 24 to 38 units, differentiated side materials, oblique-to-front camera movement, stronger row-fold and column rise, and raised channel metric modules. An animated wireframe shows the missing 240 signups above W6 without changing either bar value. Repositioned grid planes behind geometry and separated comparison summary from bar labels. Retains 32-second timing and the same data. Desktop/mobile/small-screen rendering, arithmetic, and autoplay checks passed.

- v003: Continuity repair. Table rows, channel cards, raised metrics, and report now enter and leave at zero scale instead of appearing or disappearing at full size. Grid/header visibility follows its opacity envelope. Bars retain an opaque material pass and grow their depth continuously, avoiding transparency-pass changes. Shadows update with the animated geometry rather than at a separate 24 Hz cadence. Headline easing has continuous endpoints. The 32-second film holds on the logo instead of jumping back to its opening.
- Regression: compare frames 2 ms apart at scene boundaries with `tests/ep05-continuity.cjs`. Requires Playwright (`PLAYWRIGHT_MODULE` can specify a local installation); `EP05_URL` optionally selects a saved version. Mean RGB delta threshold is 1/255, intended to catch hard cuts rather than certify all motion quality. A complete playback also reached 32 seconds with no page errors or frame intervals above 100 ms in the test browser; performance varies by device.

Next version: `node save-version.cjs v004 "Description" EP05-data-analysis.html`.
