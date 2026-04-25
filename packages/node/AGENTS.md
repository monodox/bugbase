# AGENTS.md

## Package Overview

`@monodox/bugbase` is the command-line package for Bugbase. It owns command dispatch, scanner orchestration, reporting, local configuration, and API client integration.

## Directory Guidance

- `bin/bugbase.js`: executable entry point
- `src/commands`: user-facing commands such as auth, scan, and bounties
- `src/scanners`: CVE, secret, and AI-driven scanning logic
- `src/reporters`: output formatters for terminal and JSON
- `src/api.js`: Ritza API client logic
- `src/config.js`: local configuration and key storage
- `src/constants.js`: shared constants and severity mappings

## Package Commands

Run these from the repository root or from this package directory as appropriate.

- `npm run test --workspace @monodox/bugbase`
- `npm test`

The current package scripts are placeholders, so if you introduce real behavior, update the package scripts to match.

## Coding Guidelines

- Keep the CLI package in CommonJS unless there is an explicit migration decision
- Prefer simple modules with named exported functions
- Keep command modules thin and move scanner-specific logic into `src/scanners`
- Keep reporter modules presentation-focused and avoid business logic there
- Avoid coupling output formatting directly to scan execution when a reporter abstraction will do

## Testing Expectations

- Add tests for new command behavior, output formatting, and failure cases
- Validate both human-readable and JSON output paths when changing reporting code
- Cover exit-code behavior when scan results affect CI outcomes

## Security Notes

- Never print secrets in logs, terminal output, snapshots, or fixtures
- Sanitize API error handling so credentials are not exposed
- Be careful with dependency scanning sources and rate-limited external APIs
- Keep local key storage behavior explicit and documented

## Change Management

- If you add new CLI flags, update package docs and examples
- If you add new environment variables, update root `.env.example`
- If you restructure commands or scanners, keep the folder layout intuitive and close to the current conventions
