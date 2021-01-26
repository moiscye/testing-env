exports.handler = async (event, context) => {
  const key = process.env.API_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({
      key,
    }),
  };
};
