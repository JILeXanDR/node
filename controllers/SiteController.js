var orm = require('orm');

module.exports = {
    index: function (req, res, next) {
        console.log(req);
        res.send(200, "User not found");
    }
};