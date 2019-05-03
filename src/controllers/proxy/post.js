var os = require("os");

const post = () => async (req, res, next) => {
    res.status(200).send('{"machineName":"' + os.hostname() + '"}');
};

module.exports = {
    post
};