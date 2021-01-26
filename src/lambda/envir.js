exports.handler = async (event, context) => {
  console.log("here");
  const key = process.env.API_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: key,
    }),
  };
};
