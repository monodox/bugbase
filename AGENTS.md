# AGENTS.md

## Project Overview

Bugbase is an open-source CLI tool built by the Ritza team. It is designed to make vulnerability hunting part of the normal developer workflow by scanning for known CVEs, exposed secrets, and AI-powered predictive security signals.

This repository is currently a small monorepo with one main package:

- `packages/cli`: the Bugbase command-line application

Every finding is intended to be scored and ranked locally so developers get a clear, gamified view of repository security health without requiring an account or dashboard.

## Repository Layout

- `packages/cli/bin`: CLI entry point
- `packages/cli/src/commands`: top-level CLI commands
- `packages/cli/src/scanners`: scanning engines and integrations
- `packages/cli/src/reporters`: terminal and JSON output adapters
- `.github/workflows`: CI definitions

## Build And Test Commands

Run these commands from the repository root unless a task is scoped to a package.

- `npm install`: install workspace dependencies
- `npm test`: run tests across all workspaces
- `npm run test --workspace @bugbase/cli`: run CLI package tests only

The repository is still in scaffold stage, so some commands may be placeholders until implementation lands.

## Code Style Guidelines

- Use Node.js 20 compatible JavaScript
- Follow the existing CommonJS module style unless the package is intentionally migrated
- Keep functions small and focused
- Reuse existing folders and naming patterns instead of introducing new top-level structure
- Prefer clear return values and explicit module exports
- Keep comments brief and only add them where the code is not obvious

## Testing Instructions

- Add or update tests whenever command behavior, scanner behavior, or output formatting changes
- Keep tests close to the code they validate once a test structure is introduced
- For small changes, prefer focused package-level test runs before broad workspace runs
- If no automated test exists yet, verify behavior manually and note the gap in your final summary

## Security Considerations

- Never commit real API keys, tokens, or secrets
- Use `.env.local` for local development values and keep it out of version control
- Treat secret-scanning logic carefully to avoid logging sensitive matches in plain text
- Do not disclose security vulnerabilities publicly; follow `SECURITY.md`
- Be cautious with external API integrations and vulnerability data providers, and avoid hardcoding credentials or private endpoints

## Contribution And Review Expectations

- Keep changes scoped to the task
- Update documentation when behavior or developer workflow changes
- Preserve backward compatibility for CLI flags and output where practical
- If a change affects CI behavior, call that out explicitly in your summary
- If you add a new command or integration, document where it lives and how it should be tested

## Commit And Pull Request Guidance

- Use clear, imperative commit messages
- Keep pull requests focused on a single change or tightly related set of changes
- Include a short explanation of user-facing impact
- Mention test coverage or explain why tests were not added
- Link related issues when applicable

## Deployment And CI Notes

- CI currently runs through `.github/workflows/ci.yml`
- Prefer changes that work both locally and in CI
- When adding new environment variables, update `.env.example`, documentation, and any workflow configuration that depends on them

## Package-Specific Instructions

This repository includes nested agent instructions. When working inside `packages/cli`, also read `packages/cli/AGENTS.md` and treat the closer file as the source of package-specific guidance.
