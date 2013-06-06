angular.module('HolmesApp', [])
    .config(function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'partials/login.html'
        })
        .when('/tasks', {
            controller: 'TasksListController',
            templateUrl: 'partials/tasklist.html'
        })
        .when('/tasks/:taskId', {
            controller: 'TaskDetailController',
            templateUrl: 'partials/taskdetail.html'
        });
    });