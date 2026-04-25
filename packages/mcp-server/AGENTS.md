# AGENTS.md

## Package Overview

`@bugbase/mcp-server` exposes Bugbase capabilities as MCP tools for agent clients.

## Directory Guidance

- `src/index.js`: server bootstrap and request dispatch
- `src/tools`: individual MCP tool handlers
- `src/schema.js`: tool metadata and input/output schema definitions

## Coding Guidelines

- Keep transport-specific code thin and isolated in `src/index.js`
- Keep each tool module focused on one capability
- Reuse shared schema definitions instead of duplicating tool contracts
- Prefer plain JavaScript objects for schema metadata unless a package-level schema library is introduced intentionally

## Testing Expectations

- Add tests for tool registration, request validation, and handler output once behavior is implemented
- Verify that tool names, descriptions, and schemas remain in sync

## Security Notes

- Never log secrets returned by scans
- Treat MCP inputs as untrusted and validate them before execution
- Avoid exposing filesystem access beyond the intended scan scope

