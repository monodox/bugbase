# bugbase

`bugbase` is an open-source security CLI built by the Ritza team. It is designed to make vulnerability hunting part of the normal developer workflow by scanning codebases for known CVEs, exposed secrets, and AI-powered predictive security risks before those issues reach production.

Unlike tools that stop at raw findings, Bugbase is intended to score and rank issues so developers get a clearer, more motivating picture of a repository's security health. It is built to run locally and in CI, with no account, dashboard, or hosted setup required for the core workflow.

- Repository: [github.com/monodox/bugbase](https://github.com/monodox/bugbase)
- Site: [ritza.monodox.com](https://ritza.monodox.com)

## Overview

Bugbase is being developed as a lightweight, developer-first tool for security checks that fit naturally into local development and automated pipelines.

The intended workflow is simple:

1. Run Bugbase against a project locally or in CI.
2. Detect dependency vulnerabilities, exposed secrets, and predictive AI security signals.
3. Score and rank findings so the output is actionable, comparable, and easy to prioritize.
4. Use the results in terminal output, JSON pipelines, or MCP-connected agent workflows.

## Planned Capabilities

- Dependency scanning for known CVEs using vulnerability data sources such as OSV and NVD
- Secret detection for accidentally exposed credentials, tokens, and sensitive values
- AI-powered predictive analysis for issues that may not yet appear in public databases
- Human-readable terminal reporting for developer workflows
- Machine-readable JSON reporting for CI and automation
- Local scoring and ranking of findings to provide a gamified security-health view
- MCP server support so agent tools can call Bugbase programmatically

## Current Repository Status

This repository currently contains an initial scaffold for the monorepo, CLI package, MCP server package, project policies, and contribution docs.

The codebase is not yet a complete production implementation. The repository structure is in place so core scanning logic, reporting, and integrations can be developed cleanly without reworking the layout later.

## Monorepo Structure

```text
bugbase/
|-- .github/workflows/ci.yml
|-- packages/
|   |-- node/
|   |   |-- bin/
|   |   `-- src/
|   |-- python/
|   |   `-- src/
|   `-- mcp-server/
|       `-- src/
|-- AGENTS.md
|-- CHANGELOG.md
|-- CODE_OF_CONDUCT.md
|-- CONTRIBUTING.md
|-- ROADMAP.md
|-- SECURITY.md
`-- package.json
```

## Packages

### `packages/node`

The CLI package is the main user-facing application.

It currently includes placeholders for:

- command modules under `src/commands`
- scanner modules under `src/scanners`
- reporter modules under `src/reporters`
- configuration, constants, and API helpers

Planned command areas include:

- `auth`: configure API credentials when integrations require them
- `scan`: run the main scan workflow
- `bounties`: existing scaffold name that may be renamed as scoring and ranking behavior is finalized

### `packages/python`

The Python package is the pip-installable equivalent of the Node CLI.

It currently includes placeholders for:

- command modules under `src/bugbase/commands`
- scanner modules under `src/bugbase/scanners`
- reporter modules under `src/bugbase/reporters`
- configuration, constants, and API helpers

### `packages/mcp-server`

The MCP server package is intended to expose Bugbase functionality as tools for MCP-compatible clients such as Claude Desktop, Cursor, and other agent environments.

The current scaffold includes:

- a simple server-style entry point
- tool handler modules for `scan`, `secrets`, and `predict`
- shared tool metadata and input/output schemas

This package is currently a local scaffold, not a full production MCP transport integration.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Install

```bash
npm install
```

### Local Environment

The repository includes an example environment file:

```bash
.env.example
```

Current variables:

- `RITZA_API_KEY`: API key for Ritza-connected integrations when needed
- `RITZA_API_URL`: base URL for Ritza API access
- `BUGBASE_ENV`: runtime environment indicator
- `BUGBASE_OUTPUT`: preferred default output format

For local development:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Then fill in any values required for the workflow you are developing.

## Development Commands

From the repository root:

```bash
npm install
npm test
```

Run package-specific tests:

```bash
npm run test --workspace @monodox/bugbase
npm run test --workspace @monodox/bugbase-mcp-server
```

Start the MCP server scaffold:

```bash
npm run start --workspace @monodox/bugbase-mcp-server
```

Install the Python package in editable mode:

```bash
pip install -e packages/python
```

At the moment, some package scripts are placeholders because the repository is still at scaffold stage.

## Intended CLI Workflow

The CLI package is being structured around a few core flows.

### Scan

The main `scan` path is intended to:

- inspect project dependencies for known CVEs
- search the working tree for exposed secrets
- run predictive AI analysis
- aggregate results into a unified severity and scoring model
- render terminal or JSON output

### Secrets

Secret scanning is intended to identify accidentally committed credentials and other sensitive values without leaking the matched secret contents in logs or reports.

### Predictive Analysis

The AI-driven path is intended to add higher-signal, forward-looking analysis for risky patterns that may not already be mapped to public CVEs.

## CI Usage

Bugbase is intended to work well in CI so repositories can enforce baseline security checks during pull requests and branch builds.

The repository already contains a starter workflow at:

- [ci.yml](D:\Projects\bugbase\.github\workflows\ci.yml)

As implementation matures, the CLI is expected to support:

- non-zero exit codes for failing security thresholds
- JSON output for machine parsing
- severity and score-based filtering
- repository and monorepo-friendly execution patterns

## MCP Usage

The MCP package is designed for agent integrations that want to call Bugbase programmatically.

Planned tool surface:

- `scan`: run the full Bugbase analysis flow
- `secrets`: run secret scanning only
- `predict`: run predictive AI analysis only

The current package README is here:

- [packages/mcp-server/README.md](D:\Projects\bugbase\packages\mcp-server\README.md)

## Security Notes

- Do not commit real API keys, tokens, or local secrets
- Use `.env.local` for local-only overrides
- Treat MCP input as untrusted once the server transport is implemented
- Avoid printing raw secrets in terminal output, logs, fixtures, or snapshots
- Follow [SECURITY.md](D:\Projects\bugbase\SECURITY.md) for sensitive vulnerability reporting

Security contact:

- `security@monodox.com`

## Contributing

Contributions are welcome. Keep changes focused, document user-facing behavior changes, and update tests when behavior changes.

Before opening a pull request:

1. Install dependencies.
2. Run the relevant package tests.
3. Update docs when commands, environment variables, or workflows change.
4. Avoid mixing unrelated changes in a single pull request.

Project contribution docs:

- [CONTRIBUTING.md](D:\Projects\bugbase\CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](D:\Projects\bugbase\CODE_OF_CONDUCT.md)
- [SECURITY.md](D:\Projects\bugbase\SECURITY.md)
- [ROADMAP.md](D:\Projects\bugbase\ROADMAP.md)

General questions:

- `hello@monodox.com`

## Agent Guidance

This repository includes agent instructions to help coding agents work effectively in the monorepo.

- Root instructions: [AGENTS.md](D:\Projects\bugbase\AGENTS.md)
- Node CLI package instructions: [packages/node/AGENTS.md](D:\Projects\bugbase\packages\node\AGENTS.md)
- Python CLI package instructions: [packages/python/AGENTS.md](D:\Projects\bugbase\packages\python\AGENTS.md)
- MCP package instructions: [packages/mcp-server/AGENTS.md](D:\Projects\bugbase\packages\mcp-server\AGENTS.md)

## Roadmap Snapshot

Near-term work currently includes:

- command routing
- API key configuration flow
- dependency scanning against OSV and NVD
- secret scanning rules
- terminal and JSON reporting
- local scoring and ranking output
- CI-oriented flags and exit code controls

Longer-term direction is documented in [ROADMAP.md](D:\Projects\bugbase\ROADMAP.md).

## License

Bugbase is released under the MIT License.

- [LICENSE](D:\Projects\bugbase\LICENSE)
