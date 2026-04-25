# Contributing

Thanks for contributing to Bugbase.

Repository: `https://github.com/monodox/bugbase`
Site: `https://ritza.monodox.com`

## Development Setup

1. Install Node.js 20 or later.
2. Clone the repository.
3. Install dependencies with `npm install`.
4. Copy `.env.example` values into `.env.local` as needed for local development.

## Workflow

1. Create a branch for your change.
2. Keep changes scoped and focused.
3. Add or update tests when behavior changes.
4. Run the local checks before opening a pull request.

## Pull Requests

- Describe the problem and the fix clearly
- Link relevant issues when applicable
- Include test coverage or explain why tests were not added
- Keep documentation in sync with behavior changes

## Project Areas

- Node CLI commands live in `packages/node/src/commands`
- Node scanners live in `packages/node/src/scanners`
- Node output formatters live in `packages/node/src/reporters`
- Python CLI commands live in `packages/python/src/bugbase/commands`
- Python scanners live in `packages/python/src/bugbase/scanners`
- Python output formatters live in `packages/python/src/bugbase/reporters`

## Reporting Issues

Use GitHub issues for bugs, feature requests, and documentation gaps.

For sensitive security issues, follow the process in `SECURITY.md`.

For general contributor questions, use `hello@monodox.com`.
