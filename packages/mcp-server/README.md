# @monodox/bugbase-mcp-server

MCP server scaffold for exposing Bugbase security analysis through MCP-compatible clients such as Claude Desktop, Cursor, and other agent environments.

## What it exposes

- `scan`: run the full Bugbase scan flow
- `secrets`: run secret detection only
- `predict`: run AI-assisted predictive analysis

## Development

From the repository root:

```bash
npm install
npm run test --workspace @monodox/bugbase-mcp-server
```

To start the package directly:

```bash
npm run start --workspace @monodox/bugbase-mcp-server
```

## Connection Notes

This package is currently a lightweight scaffold. The entry point exports tool definitions and a simple dispatcher that can later be wired to a full MCP SDK transport.

Typical MCP client integration will require:

- launching this package as a local process
- connecting over stdio or another supported transport
- registering the tool definitions from `src/schema.js`

## File Layout

- `src/index.js`: package entry point and server scaffold
- `src/tools/scan.js`: full-project scan tool
- `src/tools/secrets.js`: secret-detection tool
- `src/tools/predict.js`: predictive AI analysis tool
- `src/schema.js`: shared MCP tool metadata and schemas

