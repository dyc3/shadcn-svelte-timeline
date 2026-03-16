# Repository Notes

- This repository uses Bun. Prefer Bun commands for installs and scripts (for example: `bun install`, `bun run <script>`) instead of npm commands.
- Do not use Tailwind padding or margin utility classes on timeline components in `registry/timeline`.
- Build timeline spacing with grid layout primitives instead: column/row tracks, `gap-*`, subgrid, or explicit spacer rows.
