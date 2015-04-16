module.exports = function (orm, db) {
    var User = db.define('users',
        {
            id: String,
            login: {type: 'text', size: 32},
            password_hash: {type: 'text', size: 32},
            created_at: {type: 'integer'}
        },
        {
            methods: {
                getId: function () {
                    return this.id;
                }
            }
        });

    User.find({}, function (err, rows) {
        console.log(rows);
    });
};