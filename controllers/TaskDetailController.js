angular.module('HolmesApp')
.controller('TaskDetailController', function ($scope) {
    function init() {
        var taskId = window.localStorage.getItem('lsTaskId');
        var tasksFromLocalStorage = window.localStorage.getItem('lsTasks');

        angular.forEach(angular.fromJson(tasksFromLocalStorage), function (task) {
            if (task.id == taskId) {
                $scope.selectedTask = {
                    id: task.id,
                    applicantName: task.applicantName,
                    address: task.address,
                    taskStatus: task.taskStatus
                };
            }
        });
    }

    $scope.start = function () {
        $('#myModal').modal('show');
    };

    $scope.back = function () {
        window.history.back();
    };

    init();
});