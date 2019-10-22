const axios = require('axios');

module.exports = (req, res) => {
  const maxId = req.body;

  axios.get(`https://api.instagram.com/v1/users/7165710768/media/recent?access_token=7165710768.1677ed0.0d9aa78c95374dfebe4da25a6690f899&count=20&max_id=${maxId}`)
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