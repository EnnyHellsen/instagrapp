const axios = require('axios');
require('dotenv').config();

const token = process.env.INSTAGRAM_ACCESS_TOKEN

module.exports = (req, res) => {
  const maxId = req.body;

  axios.get(`https://api.instagram.com/v1/users/7165710768/media/recent?access_token=${token}&count=20&max_id=${maxId}`)
    .then(response => {
      const data = {
        data: response.data.data,
        pagination: {
          next_max_id: response.data.pagination.next_max_id ? response.data.pagination.next_max_id : null
        }
      }
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
}