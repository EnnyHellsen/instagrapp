const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

exports.handler = function (event, context, callback) {
  // your server-side functionality

  axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`)
    .then(response => {
      return response
    })
    .then(r => {
      // console.log(r.data.data)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(r.data.data)
        // body: JSON.stringify(r)
      });
    })
    .catch(error => {
      console.log(error);
    });
}



