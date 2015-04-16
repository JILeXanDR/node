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
            res.send(201, data);
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

        var generateRandomValue = function (max) {
            var randomValue = Math.round(Math.random() * max / 100);
            var value = randomValue;

            var differencePoints = max.toString().length - randomValue.toString().length;

            for (var i = 0; i < differencePoints; i++) {
                value = 'x' + value.toString();
            }

            return value;
        };

        var response = {
            message: 'Random value',
            value: generateRandomValue(999999),
            timestamp: Math.round(new Date().getTime() / 1000)
        };

        res.status(200).end(response);
    }
);

router.get('/api/game/turn', function (req, res, next) {

        var prizes = [
            {id: 1, value: 1, name: 'Дополнительных 5 попыток'},
            {id: 2, value: 1, name: 'Дополнительных 3 попытки'},
            {id: 3, value: 1, name: 'Дополнительная 1 попытка'},
            {id: 4, value: 1, name: 'К сожалению Вы ничего не выиграли'}
        ];

        var index = Math.floor(Math.random() * prizes.length);

        var prize = prizes[index];

        var response = {
            prize: prize,
            try: 20
        };

        res.status(200).send(response);
    }
);

module.exports = router;