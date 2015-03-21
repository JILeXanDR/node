var express = require('express');
var router = express.Router();
var orm = require('orm');

var Character = require('./../models/character');

router.get('/', function (req, res, next) {

    orm.connect("mysql://root:@127.0.0.1/node", function (err, db) {
        if (err) throw err;

        //console.log(Character.getAll());

        db.driver.execQuery('SELECT * FROM characters', function (err, data) {
            res.render('site/index', {items: data});
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

module.exports = router;