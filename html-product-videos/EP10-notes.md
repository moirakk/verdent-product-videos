# EP10: Publish — individual episode

Current review revision: v003, 27 seconds. The user explicitly skipped video generation and requested continuing to publishing. EP08 v005 remains unchanged. Other new episodes remain paused.

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
