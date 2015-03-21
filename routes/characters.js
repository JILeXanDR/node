var express = require('express');
var router = express.Router();
var orm = require('orm');

router.get('/character', function (req, res, next) {
    res.send({});
});

router.get('/character/:id', function (req, res, next) {
    console.log(req);
    res.send(req + '');
});

router.get('/character/id:/remove', function (req, res, next) {
    res.render('site/login');
});

module.exports = router;