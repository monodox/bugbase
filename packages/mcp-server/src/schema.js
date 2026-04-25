const toolDefinitions = [
  {
    name: "scan",
    description: "Run a full Bugbase security scan across supported checks.",
    inputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description: "Path or identifier to scan."
        },
        format: {
          type: "string",
          enum: ["terminal", "json"],
          default: "json"
        }
      },
      required: ["target"],
      additionalProperties: false
    },
    outputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string"
        },
        findings: {
          type: "array"
        },
        score: {
          type: "number"
        }
      },
      required: ["target", "findings", "score"],
      additionalProperties: true
    }
  },
  {
    name: "secrets",
    description: "Run Bugbase secret detection against a target path.",
    inputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description: "Path or identifier to scan."
        }
      },
      required: ["target"],
      additionalProperties: false
    },
    outputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string"
        },
        findings: {
          type: "array"
        }
      },
      required: ["target", "findings"],
      additionalProperties: true
    }
  },
  {
    name: "predict",
    description: "Run AI-assisted predictive security analysis for a target.",
    inputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description: "Path or identifier to analyze."
        },
        context: {
          type: "string",
          description: "Optional project context for predictive analysis."
        }
      },
      required: ["target"],
      additionalProperties: false
    },
    outputSchema: {
      type: "object",
      properties: {
        target: {
          type: "string"
        },
        predictions: {
          type: "array"
        }
      },
      required: ["target", "predictions"],
      additionalProperties: true
    }
  }
];

module.exports = {
  toolDefinitions
};

