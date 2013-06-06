angular.module('HolmesApp')
    .controller('LoginController', function ($scope) {
        $scope.login = function () {
            window.alert('hello');
        };
    });