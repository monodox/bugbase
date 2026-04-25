async function runScanTool(input) {
  return {
    target: input.target,
    findings: [],
    score: 100,
    format: input.format || "json"
  };
}

module.exports = {
  runScanTool
};

