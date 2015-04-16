var express = require('express');
var router = express.Router();
var orm = require('orm');

var user = require('./../models/user');

router.get('/', function (req, res, next) {
    res.render('site/index');
});

router.get('/characters', function (req, res, next) {

    orm.connect("mysql://root:@127.0.0.1/node", function (err, db) {
        if (err) throw err;

        db.driver.execQuery('SELECT * FROM characters', function (err, data) {
            res.render('characters/main', {items: data});
        });

    });
});

router.get('/characters/add', function (req, res, next) {

    orm.connect("mysql://root:@127.0.0.1/node", function (err, db) {
        if (err) throw err;

        db.driver.execQuery('SELECT * FROM characters', function (err, data) {
            res.render('characters/add', {items: data});
        });

    });
});

router.get('/login', function (req, res, next) {
    res.render('site/login');
});

router.post('/login', function (req, res, next) {
    res.send(req.body);
});

router.get('/logout', function (req, res, next) {
    res.render('site/logout');
});

router.get('/register', function (req, res, next) {
    res.render('site/register');
});

router.get('/about', function (req, res, next) {
    res.render('site/about');
});

router.get('/game', function (req, res, next) {
    res.render('site/game');
});

module.exports = router;