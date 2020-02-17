module.exports.handler = async (event) => {
  console.log(event.body)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Webhook data received!'
    })
  }
}
