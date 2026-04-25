"""JSON reporter for machine-readable output."""

import json


def render_json(results):
    return json.dumps(results, indent=2)
