var controllers = require('./controllers');

module.exports = function (app) {
    app.get('/game', controllers.game.main);
};