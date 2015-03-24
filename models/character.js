var orm = require('orm');

orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
    if (err) throw err;

    var Character = db.define('character',
        {
            id: {type: 'integer', key: true},
            name: {type: 'text'},
            level: {type: 'number'}
        },
        {
            methods: {
                getName: function () {
                    return this.name;
                }
            }
        });

    Character.getAll = function (callback) {
        this.find(callback);
    }

});

module.exports = orm;