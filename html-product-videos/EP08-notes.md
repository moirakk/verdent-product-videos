# EP08: Create Image — PNG storyboard implementation

Current review revision: v004. Runtime: 32 seconds. This is a single-episode review, not an approved baseline. EP09–EP13 remain paused drafts.

The user authorized the revised storyboard, then emphasized matching earlier videos. Visual references: Manager v009 and EP06 v003. Retains the white background, green palette, short two-line typography, bevels, physical depth, restrained lights, coordinated camera movement, and supplied logo ending.

## Feature scope

Official references checked 2026-10-22:
- https://www.verdent.ai/docs/verdent-manager/core-features/image-tool
- https://www.verdent.ai/docs/verdent-manager/core-features/design-mode

An existing daylight welcome page needs one illustration. The user describes a seedling image, the image is generated, saved as a PNG in the project, then used in the original page. This does not repeat Design First's direction selection, screen planning, or app construction. The later insertion is an editorial use example, not a claim of a native one-click replacement feature.

The image is a real transparent raster asset created for this film with built-in image_gen; see assets/ep08-image-provenance.md for the exact prompt. It is not a real Verdent run or screen recording. Generation time is compressed. No three-dimensional model generation is depicted; the image is always a plane carrying the same PNG.

## Timing and physical continuity

- 0–4: existing welcome page, with a reserved image location.
- 4–8: the same media frame lifts out, retaining the app-local pose at the handoff, with a short image brief.
- 8–16: brief clears, short generation wait, image fades into the retained frame. Hold for viewing.
- 16–23: the PNG name and project path appear under the same image.
- 23–29: the frame follows the same continuous path back into the original welcome page; page layout and controls remain unchanged.
- 28.9–32: actual supplied Verdent logo and final hold.

The app, media frame, and image retain their object identities throughout the film. Frame rails resize with physical bevels. Faces are separated from geometry caps by an explicit depth gap. Transparent materials retain fixed blending and depth-write modes. The PNG opacity is continuous; no frame or surface is swapped at the handoff.

## History

- v001: rejected batch draft, preserved unchanged.
- v002: rejected batch 3D study, not approved; continuity failed.
- v003: rejected sculpture trial, preserved before this rebuild; not approved and continuity did not pass.
- v004: implementation of the revised PNG storyboard, for user review.

## Verification

`tests/ep08-verify.cjs` checks desktop (1280×900), mobile (390×844), and small (320×568) layouts, text overflow, canvas bounds, permanent object identities, 2 ms adjacent frames at 0.1 s intervals, repeated identical-time rendering, asset/browser errors, complete 32-second playback, and logo hold. Screenshots and results are written to the configured QA_DIR.

Do not run the previous batch generator on this episode. Edit this standalone HTML individually after user review.

Final v004 checks passed: three viewport sizes, 14 sampled frames per viewport, persistent app/frame/image identities, nonblank in-bounds canvas, adjacent-frame mean RGB delta maximum 0.511/255 (limit 1), identical-frame delta 0, full 32-second playback, and final hold. Browser and asset errors: none. These checks do not replace the user's visual review.
