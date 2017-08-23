'use strict'


module.exports = function () {

    function controllerFn($scope, StoreService, $state, MissionsService) {
        $scope.user = StoreService.getCurrentUser();
        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'consultantTasks') {
                MissionsService.getByConsultant(StoreService.getCurrentUser().id).then(function (data) {
                    $scope.missions = data;
                });
            }
        });
        $scope.next = function (m, t) {
            if (t.state === "To Do") {
                t.state = "Doing";
            }
            else if (t.state === "Doing") {
                t.state = "Done";
            }
            MissionsService.update(m.id, m);
        }
    }

    controllerFn.$inject = ['$scope', 'StoreService', '$state', 'MissionsService'];
    angular.module('app').controller("TasksController", controllerFn);
}