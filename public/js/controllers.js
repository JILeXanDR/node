app.controller('mainCtrl', ['$scope', '$http', 'cfpLoadingBar', function ($scope, $http, cfpLoadingBar) {

    $scope.getMessage = function () {

        cfpLoadingBar.start();

        $http.get('/api/characters')
            .success(function (response) {
                $scope.characters = response;
            });

        $scope.message = 'message';
    };

    $scope.getRandom = function () {

        //cfpLoadingBar.start();

        $http.get('/api/random')
            .success(function (response) {
                $scope.message = response;
            });
    };
}]);

app.controller('characterCtrl', ['$scope', '$http', 'cfpLoadingBar', function ($scope, $http, cfpLoadingBar) {

    $scope.add = function (character) {
        $http.post('/api/characters/create', character)
            .success(function () {
                alert('Вы добавили нового персонажа');
            })
            .error(function () {
                alert('Ошибка при добавлении');
            });
    };

    $scope.getCharacters = function () {
        cfpLoadingBar.start();

        $http.get('/api/characters')
            .success(function (response) {
                $scope.characters = response;
            });
    };

    $scope.customizeLocation = function (city, location) {

        var template = '';

        if (!city) {
            city = '';
        }

        if (!location) {
            location = 'off-line';
        }

        template = city + '(' + location + ')';

        return template;
    };

    $scope.newCharacter = function () {

        cfpLoadingBar.start();

        $http.post('/api/characters/create')
            .success(function (response) {
                $scope.characters.push({});
            });
    };

    $scope.animals = [];
    $scope.licences = [
        {type: 1},
        {type: 1},
        {type: 1}
    ];

    $scope.runes = [
        {
            type: 1,
            expireTime: '10 мин.'
        }
    ];

    var horse = {
        name: 'Лошадь',
        level: false,
        type: 'mount',
        num: 10
    };

    var viva = {
        name: 'Виверна',
        level: 10,
        type: 'pet',
        num: 7
    };

    $scope.debug = function (value) {
        console.log(value);
    };

    $scope.rrr = function (data) {

        if (data == undefined) {
            return [];
        }

        return data;
    };

    $scope.animals.push(horse);
    $scope.animals.push(viva);

    $scope.timestampParse = function (timestamp) {
        console.log(timestamp);
        var range = Date.now() - timestamp;
        return Math.floor(range / 1000)
    };

    $scope.remove = function (row) {

        var index = $scope.characters.indexOf(row);
        cfpLoadingBar.start();

        $http.delete('/api/characters/' + row.id + '/delete')
            .success(function (response) {
                $scope.characters.splice(index, 1);
            });
    };

    $scope.update = function (row) {
        cfpLoadingBar.start();

        $http.put('/api/characters/' + row.id + '/update', {})
            .success(function (response) {
                var index = $scope.characters.indexOf(row);
                $scope.characters[index] = response;
            });
    };
}]);

app.controller('gameCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.try = 20;

    $scope.turn = function () {

        $http.get('/api/game/turn')
            .success(function (response) {
                $scope.try = response.try;
                $scope.prize = response.prize;
            });
    };
}]);