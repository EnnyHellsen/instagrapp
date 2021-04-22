const axios = require('axios');
require('dotenv').config();

const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN
const airtableApiKey = process.env.AIRTABLE_API_KEY

exports.handler = async function (event, context, callback) {

  await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${instagramToken}&limit=10`)
    .then(response => {
      return response
    })
    .then(r => {
      const instagramData = r.data.data;
      const processedItems = [];

      instagramData.forEach(item => {
        // If the item isn't tagged with #norahellsen we return early and don't it put into the array
        const isPortfolioItem = item.caption.includes("#norahellsen")
        if (!isPortfolioItem) {
          return
        }

        processedItems.push(
          {
            "fields": {
              "id": item.id,
              "media_url": item.media_url,
              "media_type": item.media_type,
              "caption": item.caption,
            }
          });
      });

      const finalizedData = { "records": processedItems };

      const postToAirtable = async () => {
        await axios.post('https://api.airtable.com/v0/appM7gpEv2n0HnBuy/Table%201', finalizedData,
          {
            'headers': {
              'Authorization': `Bearer ${airtableApiKey}`,
              'Content-Type': 'application/json',
            }
          })
          .then(response => {
            return response
          })
          .then(r => {
            console.log('success posting all that data!')
          })
          .catch(error => {
            console.log(error);
          });
      }

      postToAirtable();

    })
    .catch(error => {
      console.log(error);
    });

  return {
    statusCode: 200,
    body: "Data sent to Airtable"
  }
}



