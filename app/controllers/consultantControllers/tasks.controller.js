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

    }

    controllerFn.$inject = ['$scope', 'StoreService', '$state', 'MissionsService'];
    angular.module('app').controller("TasksController", controllerFn);
}