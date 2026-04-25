# AGENTS.md

## Package Overview

`bugbase` (Python) is the pip-installable package for Bugbase. It mirrors the Node CLI and owns command dispatch, scanner orchestration, reporting, local configuration, and API client integration.

## Directory Guidance

- `src/bugbase/cli.py`: CLI entry point using argparse
- `src/bugbase/commands`: user-facing commands such as auth, scan, and bounties
- `src/bugbase/scanners`: CVE, secret, and AI-driven scanning logic
- `src/bugbase/reporters`: output formatters for terminal and JSON
- `src/bugbase/api.py`: Ritza API client logic
- `src/bugbase/config.py`: local configuration and key storage
- `src/bugbase/constants.py`: shared constants and severity mappings

## Package Commands

Run these from the `packages/python` directory:

- `pip install -e .`: install in editable mode for development
- `python -m pytest`: run tests (once test structure is introduced)
- `bugbase`: run the CLI after install

## Coding Guidelines

- Target Python 3.10+ compatible code
- Use standard library modules where possible
- Keep functions small and focused
- Keep command modules thin and move scanner-specific logic into `scanners/`
- Keep reporter modules presentation-focused and avoid business logic there
- Use type hints where they add clarity

## Testing Expectations

- Add tests for new command behavior, output formatting, and failure cases
- Use pytest as the test runner
- Validate both human-readable and JSON output paths when changing reporting code

## Security Notes

- Never print secrets in logs, terminal output, snapshots, or fixtures
- Sanitize API error handling so credentials are not exposed
- Be careful with dependency scanning sources and rate-limited external APIs
- Keep local key storage behavior explicit and documented

## Change Management

- If you add new CLI flags, update package docs and examples
- If you add new environment variables, update root `.env.example`
- If you restructure commands or scanners, keep the folder layout intuitive
