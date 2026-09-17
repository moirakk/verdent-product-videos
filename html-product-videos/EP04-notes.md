# EP04: Create Slides

Visual references: Manager v009, Create App v005, and Design First v004. Portrait autoplay film, 32 seconds.

## Feature verification

Checked on 2026-09-17:
- The user's supplied Verdent homepage screenshot includes the Create Slides entry.
- https://www.verdent.ai/changelog documents PPT slide preview directly within Verdent in v2.13.0.

The six-slide outline and design sequence are illustrative animation content, not a recording of the exact product interface or a guaranteed workflow. No native slide editor, editable export format, speaker notes, or one-click publishing is claimed.

## Story

- 0-3s: A dimensional presentation stack introduces the finished deck.
- 3-6.5s: A brief asks for a six-slide pitch deck for Daylight, a fictional habit tracker.
- 6.5-10.5s: Six story headings become an outline.
- 10.5-16s: Outline strips flip in depth and expand into landscape slides.
- 16-21.5s: Six distinct layouts form a consistent 2-by-3 presentation gallery.
- 21.5-27.8s: Preview selected slides individually while the rest remain stacked behind.
- 27.8-29s: The finished presentation gathers into one deck.
- 29-32s: Supplied Verdent logo and closing line.

Slide topics: Daylight, the problem, the idea, the experience, the plan, and the closing invitation. No business metrics or actual customer outcomes are invented.

## Motion and verification

- Real Three.js slide geometry, beveled edges, depth flips, soft shadows, and continuous object transitions.
- Shared two-line kinetic typography, white space, green accents, and supplied logo treatment.
- Desktop and mobile checks cover settled and intermediate frames, missing assets, page errors, text overflow, nonblank canvas bounds, and rendered state changes.
- v001: Initial complete episode. Source: EP04-create-slides.html.
- v002: Stronger fan-out opening, real raised cover bars, subtle camera orbit, staggered outline catches, curved depth flips, gallery settling, and side-turn page handoffs. Preserves content, readable holds, 32-second duration, and supplied logo ending. Desktop/mobile checks include transition midpoints and canvas bounds; no page errors or text overflow found.

- v003: Reworked motion after v002 feedback. Removed fan-out, overlapping preview stacks, and large side-turns. Opening and preview use one hero slide with a thumbnail rail. Outline moves into the hero layout at 9.1-11.2s; complete headline, body, and graphic layers lift and settle on the cover at 10.8-14.8s; pages expand into the gallery at 14.8-17s. Preview handoffs shrink the outgoing slide before enlarging the next. Preserves 32 seconds, supplied logo, and earlier immutable versions. Desktop/mobile checks found no script errors, asset failures, or text overflow; reviewed assembly and preview transition frames.

Next version command: `node save-version.cjs v004 "Description" EP04-create-slides.html`.
