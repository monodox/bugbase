async function runPredictTool(input) {
  return {
    target: input.target,
    predictions: [],
    context: input.context || null
  };
}

module.exports = {
  runPredictTool
};
