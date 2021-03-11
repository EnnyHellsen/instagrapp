const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

exports.handler = function (event, context, callback) {

  axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}&limit=10`)
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



