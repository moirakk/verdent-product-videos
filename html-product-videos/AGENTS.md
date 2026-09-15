# Version preservation

- Read `SERIES.md` before working on any episode. The user approved Manager v009 as the visual baseline for future topics. Preserve its archived files unchanged.

- Before changing an episode, verify its current HTML and assets are preserved in a version snapshot. If not, save a new numbered snapshot first.
- After completing and verifying a user-visible revision, save a new numbered snapshot with `node save-version.cjs vNNN "Description"`.
- Never overwrite or edit files inside `versions/`. Each version contains its own HTML and assets.
- Preview version snapshots using their distinct URLs; a query string on the live HTML is not a saved version.
- Keep the user's existing work and unrelated repository files untouched.
- The user explicitly wants GitHub to retain every revision. After each completed update, commit the scoped changes with a clear description and push to the configured GitHub remote. This is standing authorization; do not ask again for routine version synchronization.
- Report the saved version and whether GitHub synchronization succeeded. Never describe a local-only commit as synchronized.
