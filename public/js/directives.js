app.directive('carnageNick', function () {

    var generateNickTemplate = function () {

        var templateHtml = '' +
            '<span class="nick">' +
            '<a class="align"><img alt="" class="align" src="http://img.carnage.ru/i/align{{align}}.gif"></a> ' +
            '<a class="clan"><img alt="Клан" class="clan" src="http://img.carnage.ru/i/klan/{{clan}}.gif"></a>' +
            '<b class="name">{{name}}</b> ' +
            '<span class="level">[{{level}}]</span> ' +
            '<a class="info" target="_blank" href="http://sarkel.carnage.ru/inf.pl?user={{name}}"><img alt="" class="sex" src="http://img.carnage.ru/i/inf{{sex}}.gif"></a>' +
            '</span>';

        return templateHtml;

    };

    return {
        restrict: 'E',
        scope: {
            name: '@',
            align: '@',
            clan: '@',
            level: '@',
            sex: '@'
        },
        transclude: false,
        template: generateNickTemplate()
    };
});

app.directive('carnageAnimals', function () {

    return {
        restrict: 'E',
        scope: {
            animals: '='
        },
        link: function (scope, iElm, iAttrs) {
            scope.animals = eval(scope.animals) || [];
        },
        controller: function ($scope) {

            var x = [
                {"name": "Лошадь", "level": false, "type": "mount", "num": 10},
                {"name": "Виверна", "level": 10, "type": "pet", "num": 7}
            ];

            $scope.getAnimalImage = function (animal) {
                animal = {"name": "Лошадь", "level": false, "type": "mounts", "num": 10};

                var imageUrl = 'http://img.carnage.ru/i/animals/' + animal.type + '/' + animal.num + '_small.jpg';

                var image = '<img title="image" src="' + imageUrl + '">';

                return image;
            };
        },
        template: '<span ng-repeat="animal in animals track by $index">{{getAnimalImage(animal)}}</span>'
    };
});