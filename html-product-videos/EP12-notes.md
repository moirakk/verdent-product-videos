# EP12 · Message Anywhere

## v004 · faster rhythm and stronger depth

User feedback: more 3D and a quicker pace. Runtime drops from 21 to 18 seconds. Phone body/back shell total depth grows to about 54 units, workspace body to 44 and message card to 26. Stronger oblique poses, darker side materials, camera parallax and deeper curved travel make the physical separation visible. The message rises clear of the workspace before turning; the returning reply travels in front of the moving phone. Phone movement waits for the returning card rather than crossing its face.

Send/expand, completion/turn and return/phone movement overlap more closely. The project-stage hold is shorter, while the final result keeps a readable hold before the logo. Title/caption timing removes the previous double-text overlap. All spatial curves remain continuous and all moving anchors remain exact. The v003 snapshot remains unchanged. Review v004 individually; EP09 remains skipped.

v003 is the individual 21-second film following the user's approval of EP11 v003. EP09 remains explicitly skipped. EP12 v001 and v002 preserve earlier unapproved batch drafts.

## Feature and story

Official source checked 2026-10-22: https://www.verdent.ai/docs/verdent-manager/core-features/instant-messaging

A Telegram bot is already connected and paired with Manager. The user sends one specific request: update the Daylight homepage headline to “Make room for calm.” The same physical message card leaves the phone, unfolds into a project task, turns to show completion, and returns as a reply in the same conversation. This episode focuses on remote delegation and the return channel rather than replaying app creation or publishing.

Supported channels in the docs are Telegram, Slack and Feishu. Bot creation, credentials and pairing are prerequisites. The footer explicitly marks the paired Telegram bot. The film uses one channel to keep the idea clear; it does not demonstrate setup or promise that an unconfigured bot works immediately.

## Motion and validation

White/green materials, real extruded bodies, phone rear shell and side buttons, a raised channel strip, short two-line kinetic typography and the supplied logo continue the established series style. Spatial tracks are cubic Hermite with shared velocities. One persistent message follows curved paths between moving phone/workspace anchors; no scene resets or object replacement. Its physical reverse side carries the reply.

The task well is raised clear of the workspace label plane to eliminate coplanar depth flicker. Task check marks use explicit transparent-layer ordering. The date/calendar story from EP11 is not reused.

`tests/ep12-verify.cjs` checks three viewport sizes, text overflow, persistent identities, drawing bounds, both device docks, velocity joins, adjacent-frame differences, deterministic repeated frames, complete playback (18 seconds in v004) and logo hold. Screenshots are manually reviewed at request, send, task, turn, return and final phone states. Browser timing statistics are diagnostic and machine-specific.

All messages, project progress and UI are authored illustrations. No message was sent to an actual account, no external channel was connected, and no real project was changed. UI turnaround and task execution are compressed for the film.
