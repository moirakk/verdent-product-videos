# EP06: Document Analysis

32-second portrait autoplay film, preserving the shared Three.js materials, two-line headlines, white/green palette, source clarity, and supplied Verdent logo. Playback holds on the last frame, following the EP05 continuity repair.

## Verified Feature Scope

Official source checked on 2026-09-21:
https://www.verdent.ai/changelog

- The February 12, 2026 release describes enhanced native support for reading and processing PDF, PPT, Excel, and Word files and a model supporting document summarization.
- The August 26, 2026 release states that document processing is surfaced in the interface.

The film illustrates reading a document, extracting key information, summarizing it, and identifying an explicitly unresolved item. Page references show provenance in this example; they are not a claim that Verdent has a particular native citation button, clickable source viewer, or guaranteed page-reference format. No exhaustive risk detection, legal review, or automatic assignment is promised.

## Example Content

EP06-example-excerpts.md records the fictional passages depicted in the animation. The screen labels the document as illustrative. This is not a recording of a real Verdent run or a complete supplied 40-page PDF.

- Page 04: The planned launch date is October 12.
- Page 18: Launch channels are email and the website.
- Page 27: The support owner has not yet been assigned.

The final brief preserves these details and page labels. Confirming the support owner is a proposed next step, not an action already performed. The planned date is not relabeled as a confirmed commitment.

## Story and Motion

- 0-3s: A beveled paper stack introduces the forty-page launch plan.
- 3-6.5s: Ask for a summary and outstanding questions.
- 6.5-11s: Source excerpts unfold and relevant lines are highlighted.
- 11-17s: Each excerpt becomes a concise finding with its page reference.
- 17-22.8s: Focus on the unresolved owner; retain other findings as thumbnails and show the suggested follow-up.
- 22.8-29s: Findings gather into one source-linked launch brief.
- 29-32s: Supplied Verdent logo and closing line, then hold.

Objects enter and leave through continuous scale/position curves. Finding textures cross over only after the source text clears. Secondary text fades during the focus movement to avoid visible words passing behind the selected card. Shader transparency modes do not toggle during playback; shadows update with geometry.

## Verification and Versions

- v001: Initial film. Source: EP06-document-analysis.html.
- v002: Hinged book cover reveals an inside contents page; separated paper edges make document depth visible. Excerpts lift with staggered backing sheets, page-reference badges settle above the surface, and the open question moves forward before gathering into the final brief. A restrained camera arc accompanies extraction; reading holds remain still. Duration and factual content are unchanged.
- Desktop 1280x900, mobile 390x844, and small-screen 320x568: checked asset loads, page errors, text overflow, canvas pixel bounds, settled compositions, and transition frames.
- `tests/ep06-continuity.cjs` compares adjacent frames around transition boundaries, asserts the example answers/page references, and checks final-logo hold. Set `PLAYWRIGHT_MODULE` to an installed Playwright module if needed; `EP06_URL` can select a snapshot. `FULL_PLAYBACK=1` runs the full film before the tail assertion.

Next version: `node save-version.cjs v003 "Description" EP06-document-analysis.html`.
