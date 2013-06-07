angular.module('HolmesApp', [])
    .config(function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'login.html'
        })
        .when('/tasks', {
            controller: 'TaskListController',
            templateUrl: 'tasklist.html'
        })
        .when('/tasks/:taskId', {
            controller: 'TaskDetailController',
            templateUrl: 'taskdetail.html'
        });
    });