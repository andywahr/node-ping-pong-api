const request = require('request');

const get = () => async (req, res, next) => {

    var responseBody = await (new Promise(
        (resolve, reject) => {
            var options = {
                url: process.env.URL + "/api/v1/proxy",
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            request.post(options, function (err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        }));

    res.status(200).send(responseBody);
};

module.exports = {
    get
};