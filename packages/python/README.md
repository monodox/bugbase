# bugbase

Bugbase is an open-source CLI for scanning dependencies for known CVEs, detecting exposed secrets, and surfacing AI-powered predictive security signals.

## Status

This package is currently an early scaffold. The published package metadata and CLI entry point are in place, while the scanning logic is still under active development.

## Installation

```bash
pip install bugbase
```

## Usage

```bash
bugbase scan
bugbase auth
bugbase bounties
```

Or run directly:

```bash
python -m bugbase.cli
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

From the `packages/python` directory:

```bash
pip install -e .
python -m pytest
```

## Project Structure

```
packages/python/
├── src/bugbase/
│   ├── __init__.py
│   ├── cli.py              # argparse entry point
│   ├── commands/
│   │   ├── auth.py         # API credential configuration
│   │   ├── scan.py         # Main scan workflow
│   │   └── bounties.py     # Scored findings view
│   ├── scanners/
│   │   ├── cve.py          # CVE dependency scanner
│   │   ├── secrets.py      # Secret detection scanner
│   │   └── ai.py           # AI predictive scanner
│   ├── reporters/
│   │   ├── terminal.py     # Human-readable output
│   │   └── json_reporter.py # Machine-readable output
│   ├── api.py              # Ritza API client
│   ├── config.py           # Local configuration
│   └── constants.py        # Severity mappings
├── .env.example
├── LICENSE
└── pyproject.toml
```

## License

MIT — see [LICENSE](./LICENSE).

## Links

- Repository: [github.com/monodox/bugbase](https://github.com/monodox/bugbase)
- Site: [ritza.monodox.com](https://ritza.monodox.com)
