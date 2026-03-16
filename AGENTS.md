# Repository Notes

- This repository uses Bun. Prefer Bun commands for installs and scripts (for example: `bun install`, `bun run <script>`) instead of npm commands.

# UI Guidelines

- Always prefer using Tailwind utility classes for styling. Never write custom CSS.
- Do not use Tailwind padding or margin utility classes on timeline components in `registry/timeline`.
- Build timeline spacing with grid layout primitives instead: column/row tracks, `gap-*`, subgrid, or explicit spacer rows.

# Validation

When you are done working on the task, the last thing to do to clean up is to run formatting and linting to ensure that your code is clean and consistent with the rest of the codebase. You can do this by running the following commands:

```sh
bun run lint
bun run check
```
