const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.AIRTABLE_API_KEY

exports.handler = async function (event, context, callback) {
  let data = "";

  await axios.get('https://api.airtable.com/v0/appM7gpEv2n0HnBuy/Table%201?maxRecords=3&view=Grid%20view',
    {
      'headers': {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response
    })
    .then(r => {
      console.log(r.data.records)
      data = r.data.records
    })
    .catch(error => {
      console.log(error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}



