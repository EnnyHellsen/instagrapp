const axios = require('axios');

module.exports = (req, res) => {

  axios.get('https://api.instagram.com/v1/users/self/media/recent?access_token=7165710768.1677ed0.0d9aa78c95374dfebe4da25a6690f899')
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