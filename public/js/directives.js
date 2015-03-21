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