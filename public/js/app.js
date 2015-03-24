var app = angular.module('myApp', ['chieffancypants.loadingBar', 'ngAnimate', 'timer'])
    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    });