exports.handler = async (event, context) => {
  const key = process.env.SEND_GRID_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({
      key,
    }),
  };
};
