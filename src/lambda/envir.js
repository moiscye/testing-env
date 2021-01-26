const contextualEnvVar = (v) => {
  const currentContext = process.env.CONTEXT;
  const formattedContext = currentContext.replace("-", "_").toUpperCase();
  return process.env[`${formattedContext}_${v}`];
};

exports.handler = async (_) => {
  console.log("here");
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: contextualEnvVar("API_KEY"),
    }),
  };
};
