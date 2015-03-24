var express = require('express');
var router = express.Router();
var orm = require('orm');

router.get('/api', function (req, res, next) {
    res.send('Api server!');
});

router.get('/api/characters', function (req, res, next) {

    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) throw err;

        db.driver.execQuery('SELECT * FROM characters', function (err, data) {
            res.send(data);
        });

    });
});

router.get('/api/characters/:id', function (req, res, next) {

    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) throw err;

        db.driver.execQuery('SELECT * FROM characters WHERE id=' + req.param('id'), function (err, data) {

            var object = data[0];

            if (!object) {
                res.send({message: 'Not found'});
            }

            if (object.animals) {
                object.animals = JSON.parse(object.animals);
            }

            res.send(data[0]);
        });

    });
});

router.post('/api/characters/create', function (req, res, next) {

    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) throw err;

        db.driver.execQuery('INSERT INTO characters (name) VALUES("name")', function (err, data) {
            res.send(data);
        });

    });
});

router.put('/api/characters/:id/update', function (req, res, next) {
    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) throw err;

        db.driver.execQuery('SELECT * FROM characters WHERE id=' + req.param('id'), function (err, data) {
            res.send(data[0]);
        });

    });
});

router.delete('/api/characters/:id/delete', function (req, res, next) {
    orm.connect('mysql://root:@127.0.0.1/locator-node', function (err, db) {
        if (err) throw err;

        db.driver.execQuery('DELETE FROM characters WHERE id=' + req.param('id'), function (err, data) {
            res.send(data);
        });

    });
});

router.get('/api/random', function (req, res, next) {
    res.send(Math.random() * 999999999 + '');
});

module.exports = router;