# Manager animation versions

Each numbered folder is a self-contained snapshot with HTML, assets, and a timestamped checksum record. Saved versions must not be overwritten.

## Saved versions

- v009: Stronger kinetic typography, avatar selection bounce, unfolding plan cards, typed goal, and layered result reveal. Runtime: 32 seconds.
- v008: Two-line advertising headlines, timed keyword reveals, simplified supporting text, and a shorter final brand line. Runtime: 32 seconds.
- v007: Stronger motion, 3D Manager opening, continuous tools-to-goal shot, kinetic typography, animated task flow, and custom Manager fields. Runtime: 32 seconds.

## Earlier history

The original HTML is preserved in Git commit `8b34c6e`.
The earlier preview URLs using `?v=motion2` through `?v=motion6` pointed to the same live file. They were cache labels, not independent version snapshots. Those intermediate HTML states were not separately archived at the time.

## Save a revision

Run `node save-version.cjs v008 "Description"` from the parent directory, using the next unused number. The script refuses to overwrite an existing version.
