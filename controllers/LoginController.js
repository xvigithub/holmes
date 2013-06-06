angular.module('HolmesApp')
    .controller('LoginController', function ($scope, $location) {
        $scope.login = function () {
            $location.path('/tasks');
        };
    });