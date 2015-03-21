var path = require('path');

var config = {
    db: {
        protocol: "mysql",
        query: {pool: true},
        host: "127.0.0.1",
        database: "node",
        user: "root",
        password: ""
    }
};

module.exports = config;