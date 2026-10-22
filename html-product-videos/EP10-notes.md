# EP10: Publish — individual episode

Current review revision: v005, 21 seconds. The user explicitly skipped video generation and requested continuing to publishing. EP08 v005 remains unchanged. Other new episodes remain paused.

## Feature boundary

Source checked 2026-10-22:
https://www.verdent.ai/docs/verdent-manager/core-features/cloud-projects-and-publishing

The episode starts with an already working Cloud project, configures an address and visibility, shows publishing progress, returns a live address, and opens the same application on another device. It does not repeat app construction from EP02 or imply direct uploading of a local folder. The existing EP02 booking preview image is reused to retain continuity in the fictional product.

All views and states are editorial illustrations, not a precise recording or an actual deployment. The example URL studio-demo.verdent.app is printed as an example, not claimed to be published or available. Resource checks and deployment time are compressed. The film does not claim a real reservation backend, payment handling, data synchronization, or automatic responsive behavior for all generated apps. The phone shows an illustrative layout of the same booking content.

## Motion

- 0–3: the existing booking application in a Cloud preview, tilted into view.
- 3–7: the original address object lifts out and expands into publishing settings; the application remains behind it.
- 7–12: the same address object contracts, while Scan / Build / Publish progress appears below the retained application.
- 12–16: that address returns to its exact browser-local location; the app is marked live and the status settles.
- 16–23.5: the phone emerges from depth. The same address object travels from the browser to the phone's exact local address-field position, while a printed address remains on the desktop. Hold on both devices.
- 23.5–27: supplied Verdent logo and ending hold.

Materials, typography, lighting, easing and pacing follow EP08 v005 / earlier approved series direction. The app, address and phone retain their object identities. Address translation and quaternion interpolation derive from exact device-local coordinates. Faces remain separated from the geometry caps; opacity and scale envelopes are continuous; transparency modes do not toggle.

## History

- v001: preserved rejected batch draft, not approved.
- v002: preserved paused batch geometry study before the individual rebuild, not approved.
- v003: individual Publish rebuild using the existing booking application, for user review.

Do not run the former batch generator over this episode. Edit individually after user review. Next snapshot: v004.

## Verification

`tests/ep10-verify.cjs` checks desktop 1280×900, mobile 390×844, small 320×568, text overflow, canvas bounds, permanent object identities, exact browser/phone handoff anchors, adjacent-time pixel differences, repeated-time stability, assets, browser errors, full 27-second playback, and final logo hold. Visual checks include intermediate settings and phone-entry frames.

Final v003 verification passed: three viewport sizes, 14 sampled frames each, browser/address/phone object identity, both address anchor errors {'startError': 0, 'endError': 0}, in-bounds nonblank canvas, adjacent-frame mean RGB maximum 0.646/255 (limit 1), repeated-frame delta 0, full 27-second playback, final hold, and zero browser/asset errors. This is a review candidate, not an approved baseline.


## v004 — faster and more dimensional

The user requested substantially quicker pacing and stronger 3D. v003 is preserved unchanged. v004 shortens 27 seconds to 21 (about 22% shorter), with beats 0–2.2, 2.2–5.2, 5.2–9, 9–12, 12–18, then an 18–21 logo ending. Text entry and all motion/status envelopes are retimed together.

The browser body grows from 20 to 42 depth units with a structural sage back shell, the address object from 9 to 19, and the handset from 25 to 38. Edge materials have more defined highlights. Browser entrance turns farther from the side; settings bring the address farther forward while the browser recedes; the phone arrives from deeper space with a more pronounced turn; the address follows a deeper curved handoff. Exact device-local anchors, persistent identities, fixed blending modes, quintic easing, and safe face/geometry depth separation remain.

The final result holds on both devices for approximately 3.8 seconds before the ending. Geometry changes provide the depth, rather than decorative overlays. The content and existing app asset remain unchanged.

Final v004 checks passed: three viewport sizes, persistent app/address/phone identity, browser and phone anchor errors {'startError': 0, 'endError': 2.0097183471152322e-14}, in-bounds canvas, adjacent-frame maximum RGB mean delta 0.808/255 (limit 1), repeated-time delta 0, full 21-second playback and ending hold, and zero browser/asset errors.


## v005 — continuous choreography rather than isolated scene poses

The user found v004's frame transitions insufficiently fluid. Runtime remains 21 seconds; this revision changes choreography, title transitions and rendering cost.

- Browser position, orientation and scale follow time-aware cubic Hermite tracks. Intermediate knots preserve velocity; short readable holds remain at the result.
- The address setting surface follows a moving depth track during reading and collapse. Its original browser anchor and final phone anchor remain exact.
- The full-size phone peels from behind the opaque browser along a cubic spatial path, with coordinated roll and turn. It no longer grows from zero scale.
- The same address travels along a cubic Bezier arc toward the moving handset. Width/height contraction is delayed until docking, retaining a readable URL during flight.
- Publishing progress begins before the settings finish clearing. Its tray and the success badge overlap their anticipation and settling movements.
- Titles and captions use persistent layers with overlapping exit/entry, avoiding DOM replacement at beat boundaries.
- Shadow maps are reduced to 512 with matching blur radius and six blur samples, reducing GPU work while preserving the established soft shadow treatment. Shadows still update with geometry, not on a separate low-frequency timer.

Final v005 checks passed: three viewport sizes; permanent object IDs; anchor errors {'startError': 0, 'endError': 0}; maximum finite-difference velocity join delta 0.0275; maximum adjacent-frame mean RGB delta 0.547/255; repeated-time delta 0; full 21-second playback; logo hold; zero asset/browser errors. Test-browser RAF sampling: mean 11.98 ms, 95th percentile 17.30 ms, 0 intervals above 50 ms. These are local test-browser measurements, not a guarantee across hardware or a substitute for user review.
