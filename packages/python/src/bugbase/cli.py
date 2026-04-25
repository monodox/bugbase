"""CLI entry point for Bugbase."""

import argparse
import sys

from bugbase.commands.auth import auth
from bugbase.commands.scan import scan
from bugbase.commands.bounties import bounties


def build_parser():
    parser = argparse.ArgumentParser(
        prog="bugbase",
        description="Bugbase CLI for CVE scanning, secret detection, and predictive security analysis.",
    )
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("auth", help="Configure API credentials")
    subparsers.add_parser("scan", help="Run the main scan workflow")
    subparsers.add_parser("bounties", help="View scored findings")

    return parser


COMMANDS = {
    "auth": auth,
    "scan": scan,
    "bounties": bounties,
}


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command is None:
        parser.print_help()
        sys.exit(0)

    handler = COMMANDS.get(args.command)
    if handler is None:
        parser.print_help()
        sys.exit(1)

    result = handler()
    print(result)
