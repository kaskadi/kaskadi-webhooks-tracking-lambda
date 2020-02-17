const token = process.env.YSWS_TOKEN

module.exports.handler = async (event) => {
  const eventBody = JSON.parse(event.body)
  if (eventBody.token !== token) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Unauthorized.'
      })
    }
  }
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
