# EP07: Deep Research

33-second portrait autoplay film. White/green lighting, dimensional paper, continuous camera movement at transitions, short headlines, supplied Verdent logo, and final-frame hold follow the accepted EP06 v003 direction. EP06 is provisionally approved and must remain unchanged.

## Verified Capability Scope

Official sources checked on 2026-09-21:

- https://www.verdent.ai/changelog : The August 26, 2026 entry surfaces research report capabilities in the interface. The February 12 entry mentions deep research among a supported model's strengths.
- https://www.verdent.ai/security : The websearch section describes queries returning relevant URLs.
- User-provided product screenshot: Deep Research is a visible home-screen entry.

The animation illustrates research, comparison, and report synthesis. It is not a recording of the app and does not promise an exact native citation UI, a guaranteed number of sources, live pricing verification, comprehensive search, guaranteed factual accuracy, or concurrent agents. Source cards, comparison rows, and bracketed references are editorial representations of the workflow.

## Example and Provenance

All tools, pages, and prices are fictional, explicitly marked on screen. Reserved `.example` addresses are not real commercial URLs. No real research run or price recommendation is claimed.

| Source | Fictional page | Monthly base price, USD per seat | Email reminders |
| --- | --- | --- | --- |
| [1] | tool-a.example/pricing | 12 | Included |
| [2] | tool-b.example/pricing | 18 | Paid add-on; price not listed |
| [3] | tool-c.example/pricing | 24 | Included |

The supported conclusion is only that Tool A has the lowest listed base price among these three example plans. Tool B's total price with reminders remains unknown. The film preserves this uncertainty and tells the viewer to verify live pricing before choosing. It does not claim Tool A is universally the best tool.

## Structure

- 0-3s: A dimensional research dossier and layered source pages.
- 3-6s: Ask to compare pricing for three scheduling tools.
- 6-11.5s: Three browser-like source pages unfold in depth and become readable.
- 11.5-17s: Pages reorganize into comparison rows with the same monthly, per-seat basis.
- 17-23s: Isolate the unlisted add-on price; preserve an open question.
- 23-29.5s: Gather findings into a research brief; source-reference tabs dock beneath it.
- 29.5-33s: Actual supplied Verdent logo, then hold.

## Versions and Verification

v001: Initial Deep Research film. Source: EP07-deep-research.html.

v002: Stronger physical depth. The opening cover hinges around its spine to reveal an inside research path. Solid panels have separate face/edge materials and thicker bevels; source pages have independent depth planes, raised reference badges, and two additional backing sheets that separate during comparison. Camera parallax and transition tilts are stronger, then settle for reading. Comparison rows have more clearance. The final report gathers onto a layered paper backing. Content, 33-second timing, and final logo are unchanged.

v002 verification: Full 33-second playback passed, followed by the expanded 25-boundary continuity regression. All three viewport checks, canvas bounds, text overflow, source-data assertions, assets, and final hold passed without browser errors. Reviewed the hinged-cover, comparison-transition, settled source rows, and small-screen final report screenshots.

Verification passed at 1280x900, 390x844, and 320x568. Reviewed settled and intermediate frames; adjusted reference-tab spacing beneath the final report. Source data assertions, 21 adjacent-frame continuity checks, nonblank/in-bounds canvas samples, asset loading, browser error checks, and final-logo hold passed. The initial full 33-second playback also completed successfully; final spacing changes were then regression-tested.

Test with `PLAYWRIGHT_MODULE=/path/to/playwright node tests/ep07-verify.cjs`. Checks source data, text overflow, browser errors, assets, canvas content/bounds, transition continuity, and final hold across desktop and portrait viewports. Screenshots are written under the system temporary directory. Set `FULL_PLAYBACK=1` to play the full film.

Next snapshot: `node save-version.cjs v003 "Description" EP07-deep-research.html`.
