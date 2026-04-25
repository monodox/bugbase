# @monodox/bugbase

Bugbase is an open-source CLI for scanning dependencies for known CVEs, detecting exposed secrets, and surfacing AI-powered predictive security signals.

## Status

This package is currently an early scaffold. The published package metadata and CLI entry point are in place, while the scanning logic is still under active development.

## Installation

```bash
npm install -g @monodox/bugbase
```

Or run without installing:

```bash
npx @monodox/bugbase
```

## Usage

```bash
bugbase scan
bugbase auth
bugbase bounties
```

## Configuration

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `RITZA_API_KEY` | API key for Ritza integrations | |
| `RITZA_API_URL` | Base URL for Ritza API | `https://api.ritza.co` |
| `BUGBASE_ENV` | Runtime environment | `development` |
| `BUGBASE_OUTPUT` | Default output format (`terminal` or `json`) | `terminal` |

## Development

From the monorepo root:

```bash
npm install
npm run test --workspace @monodox/bugbase
```

## Project Structure

```
packages/node/
├── bin/bugbase.js          # CLI entry point
├── src/
│   ├── commands/
│   │   ├── auth.js         # API credential configuration
│   │   ├── scan.js         # Main scan workflow
│   │   └── bounties.js     # Scored findings view
│   ├── scanners/
│   │   ├── cve.js          # CVE dependency scanner
│   │   ├── secrets.js      # Secret detection scanner
│   │   └── ai.js           # AI predictive scanner
│   ├── reporters/
│   │   ├── terminal.js     # Human-readable output
│   │   └── json.js         # Machine-readable output
│   ├── api.js              # Ritza API client
│   ├── config.js           # Local configuration
│   └── constants.js        # Severity mappings
├── .env.example
├── LICENSE
└── package.json
```

## License

MIT — see [LICENSE](./LICENSE).

## Links

- Repository: [github.com/monodox/bugbase](https://github.com/monodox/bugbase)
- Site: [ritza.monodox.com](https://ritza.monodox.com)
