'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, MissionsService, $state, $stateParams, StoreService) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('clientprojectsDetails', { id: m.id });
        }

        $scope.add = function () {
            $scope.mission.client = StoreService.getCurrentUser();
            MissionsService.add($scope.mission).then(function (response) {
                $state.go('clientprojectsDetails', { id: response.data.id });
            });
        }

        $scope.update = function () {
            MissionsService.update($scope.mission.id, $scope.mission).then(function (response) {
                $state.go('clientprojectsDetails', { id: response.data.id });
            });
        }

        $scope.delete = function () {
            MissionsService.delete($scope.mission.id).then(function (response) {
                $state.go('clientprojects', { id: response.data.id });
            });
        }

        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'clientprojects') {
                MissionsService.getByUser(StoreService.getCurrentUser().id).then(function (data) {
                    $scope.missions = data;
                });
            }
            if ($state.current.name == 'clientprojectsDetails') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                })
            }
            if ($state.current.name == 'clientprojectsEdit') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                })
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'MissionsService', '$state', '$stateParams', 'StoreService'];
    angular.module('app').controller("ClientProjectsController", controllerFn);
}