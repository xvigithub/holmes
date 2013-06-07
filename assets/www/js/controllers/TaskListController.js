angular.module('HolmesApp')
    .controller('TaskListController', function ($scope, $location) {

        var tasks = [{
            id: 1,
            applicantName: 'Applicant 01',
            address: 'Address 01',
            taskStatus: 0
        },
         {
             id: 2,
             applicantName: 'Applicant 02',
             address: 'Address 02',
             taskStatus: 3
         },
         {
             id: 3,
             applicantName: 'Applicant 03',
             address: 'Address 03',
             taskStatus: 1
         },
         {
             id: 4,
             applicantName: 'Applicant 04',
             address: 'Address 04',
             taskStatus: 3
         }];

        function init() {
            $scope.tasks = [];
            angular.forEach(tasks, function (task) {
                switch (task.taskStatus) {
                    case 0: task['color'] = 'badge-info'; break;
                    case 1: task['color'] = 'badge-success'; break;
                    case 3: task['color'] = 'badge-warning'; break;
                }
                $scope.tasks.push(task);
            });
            window.localStorage.setItem('lsTasks', angular.toJson($scope.tasks));
        }

        $scope.selectTask = function (taskId) {
            window.localStorage.setItem('lsTaskId', taskId);
            $location.path('/tasks/' + taskId);
        };

        $scope.signOut = function () {
            $location.path('/');
        };

        init();
    });