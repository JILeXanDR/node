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

        $scope.message = '...';

        cfpLoadingBar.start();

        $http.get('/api/random')
            .success(function (response) {
                cfpLoadingBar.complete();
                $scope.message = response;
            });
    };

    $scope.remove = function (row) {

        var index = $scope.characters.indexOf(row);

        $scope.characters.splice(index, 1);
    };
}]);