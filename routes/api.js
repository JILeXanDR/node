var express = require('express');
var router = express.Router();
var orm = require('orm');

router.get('/api', function (req, res, next) {
    res.send('Api server!');
});

router.get('/api/characters', function (req, res, next) {

    var characters = [
        {id: 1, name: 'JILeXanDR', level: 12}
    ];

    res.send(characters);
});

router.get('/api/random', function (req, res, next) {

    var time = 0;

    while (time < 1000000) {
        time++;
    }

    res.send(Math.random() * 999999999 + '');
});

module.exports = router;