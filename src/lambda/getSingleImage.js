const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

exports.handler = function (event, context, callback) {

  console.log(event, context);

  const mediaId = event.headers;

  axios.get(`https://graph.instagram.com/17889489064797712?fields=id,caption,media_url&access_token=${token}`)
    .then(response => {
      return response
    })
    .then(r => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(r.data.data)
      });
    })
    .catch(error => {
      console.log(error);
    });
}
