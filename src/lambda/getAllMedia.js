const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

exports.handler = async function (event, context, callback) {
  let instagramData = ""

  await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}&limit=10`)
    .then(response => {
      return response
    })
    .then(r => {
      instagramData = r.data.data
        ? r.data.data
        : [{ id: "test-id", media_url: "test-image", caption: "test-caption" }, { id: "test-id", media_url: "test-image", caption: "test-caption" }]
    })
    .catch(error => {
      console.log(error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify(instagramData)
  }
}



