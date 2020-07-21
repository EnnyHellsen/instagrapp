const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

module.exports = (req, res) => {

  axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`)
    .then(response => {
      const data = {
        data: response.data.data,
        pagination: {
          next_max_id: response.data.pagination.next_max_id,
        }
      }
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
}