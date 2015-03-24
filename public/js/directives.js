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

    var generateTemplate = function () {

        var templateHtml = '';

        templateHtml += '<span ng-repeat="animal in animals track by $index">';

        templateHtml += 'wefwef';

        templateHtml += '</span>';

        return templateHtml;
    };

    return {
        restrict: 'E',
        scope: {
            animals: '&animals'
        },
        link: function (scope, iElm, iAttrs) {
            var x = eval(scope.animals());
            console.log(x);
            // x == {name:"Umur", id:1}
        },
        //link: function (scope, elm, attrs, ctrl) {
        //    scope[attrs.model] = attrs.animals;
        //    console.log(eval(attrs.animals));
        //},
        template: generateTemplate()
    };
});