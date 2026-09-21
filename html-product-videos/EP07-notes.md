# EP07: Deep Research

33-second portrait autoplay film. White/green lighting, dimensional materials, short headlines, supplied Verdent logo, and final-frame hold retain the series identity. Starting with v003, choreography is deliberately distinct from EP06: do not reuse its book entrance and vertical card procession. EP06 is provisionally approved and must remain unchanged.

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

- 0-3.4s: The research question changes proportion into source A on the same physical surface. The search symbol travels to the source reference.
- 3.4-9.9s: A, B, and C take turns in the foreground; the camera follows the handoffs.
- 9.9-15s: The same source meshes align into a three-column comparison using shortest-angle rotations. Units appear above the comparison.
- 15-21s: Tool B turns over to reveal the unknown cost while the side panels fold away. The follow-up question is unframed.
- 21-29.5s: Tool B's reverse expands and changes material into the final report. It never exits or shrinks away. Sources remain printed on this surface.
- 29.5-33s: Actual supplied Verdent logo, then hold.

## Versions and Verification

v001: Initial Deep Research film. Source: EP07-deep-research.html.

v002: Stronger physical depth. The opening cover hinges around its spine to reveal an inside research path. Solid panels have separate face/edge materials and thicker bevels; source pages have independent depth planes, raised reference badges, and two additional backing sheets that separate during comparison. Camera parallax and transition tilts are stronger, then settle for reading. Comparison rows have more clearance. The final report gathers onto a layered paper backing. Content, 33-second timing, and final logo are unchanged.

v002 verification: Full 33-second playback passed, followed by the expanded 25-boundary continuity regression. All three viewport checks, canvas bounds, text overflow, source-data assertions, assets, and final hold passed without browser errors. Reviewed the hinged-cover, comparison-transition, settled source rows, and small-screen final report screenshots.

v003: Choreography rebuild in response to repeated entrances/transitions feeling homogeneous. Removes the book, stacked rows, pop-up gap card, and floating reference chips. Introduces sequential orbital source browsing, a hinged three-column comparison, a reverse-side reveal, and a geometrically curled report sheet that unrolls. Source data, factual uncertainty, example disclosure, duration, and logo are unchanged.

v003 verification: Passed full 33-second playback, 26 continuity boundaries, source-data assertions, three viewport sizes, text overflow checks, canvas pixel/bounds checks, asset loading, and logo hold. Reviewed carousel, accordion, reverse-side question, partially unrolled report, and final report screenshots. Shortened the focus headline after detecting a width overflow. No browser errors remained.

v004: User found v003's animation weaker and specifically identified disconnected transitions. Replaces object substitution with persistent-surface handoffs: the input is source A, and the unknown-cost surface itself expands into the report. Removes the separate rolled report. Tightens source-browsing timing, follows the source handoffs with the camera, and uses shortest-angle source alignment. Content, disclosure, 33-second duration, and ending logo remain unchanged. This is a revision for user review, not an approved style baseline.

v004 verification includes explicit persistent-object identity and nonzero-scale assertions across both handoffs, in addition to desktop/mobile screenshots, pixel bounds, transition continuity, source data, and logo hold. Full playback passed. Source text stays visible through front-facing rotations, and replacement text is introduced sooner to reduce blank-face intervals.

Verification passed at 1280x900, 390x844, and 320x568. Reviewed settled and intermediate frames; adjusted reference-tab spacing beneath the final report. Source data assertions, 21 adjacent-frame continuity checks, nonblank/in-bounds canvas samples, asset loading, browser error checks, and final-logo hold passed. The initial full 33-second playback also completed successfully; final spacing changes were then regression-tested.

Test with `PLAYWRIGHT_MODULE=/path/to/playwright node tests/ep07-verify.cjs`. Checks source data, text overflow, browser errors, assets, canvas content/bounds, transition continuity, and final hold across desktop and portrait viewports. Screenshots are written under the system temporary directory. Set `FULL_PLAYBACK=1` to play the full film.

Next snapshot: `node save-version.cjs v005 "Description" EP07-deep-research.html`.
