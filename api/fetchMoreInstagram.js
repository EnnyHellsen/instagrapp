const axios = require('axios');

module.exports = (req, res) => {

    const nextUrl = req.body;
    console.log(nextUrl);

    axios.get(nextUrl)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}