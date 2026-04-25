const { toolDefinitions } = require("./schema");
const { runScanTool } = require("./tools/scan");
const { runSecretsTool } = require("./tools/secrets");
const { runPredictTool } = require("./tools/predict");

const toolHandlers = {
  scan: runScanTool,
  secrets: runSecretsTool,
  predict: runPredictTool
};

async function listTools() {
  return toolDefinitions;
}

async function callTool(name, input = {}) {
  const handler = toolHandlers[name];

  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  return handler(input);
}

async function createServer() {
  return {
    listTools,
    callTool
  };
}

async function main() {
  const server = await createServer();
  const tools = await server.listTools();

  console.log(
    JSON.stringify(
      {
        name: "@monodox/bugbase-mcp-server",
        status: "ready",
        tools: tools.map((tool) => tool.name)
      },
      null,
      2
    )
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = {
  createServer,
  listTools,
  callTool
};

