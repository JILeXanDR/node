var orm = require('orm');

var connection = null;

function setup(db, cb) {
    require('./user')(orm, db);

    return cb(null, db);
}

module.exports = function (cb) {
    if (connection) return cb(null, connection);

    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) return cb(err);

        connection = db;
        db.settings.set('instance.returnAllErrors', true);
        setup(db, cb);
    });
};