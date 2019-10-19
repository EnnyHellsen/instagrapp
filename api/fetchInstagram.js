const Instagram = require('node-instagram').default; //uninstall this

const axios = require('axios');

module.exports = (req, res) => {

  axios.get('https://api.instagram.com/v1/users/self/media/recent', {
    params: {
      access_token: '7165710768.1677ed0.0d9aa78c95374dfebe4da25a6690f899',
      count: 20,
    }
  })
    .then(function (response) {
      res.send(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });
}