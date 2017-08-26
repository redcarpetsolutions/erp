'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, MissionsService, $state, $stateParams, StoreService, $sce) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('clientprojectsDetails', { id: m.id });
        }
        $scope.mission = {};
        $scope.add = function () {
            $scope.mission.client = StoreService.getCurrentUser();
            $scope.mission.validated = false;
            $scope.mission.type = "externe";
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

        $scope.saved = function (response) {
            console.log(response);
            $scope.mission.path = "http://localhost:18080/erp-web/api/upload/" + response.data.filename;
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
                    $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB2BAeujrcRfD1MDCCcfTan2i7-y0TR2E8&q=" + $scope.mission.adresse);

                })
            }
            if ($state.current.name == 'clientprojectsEdit') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                })
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'MissionsService', '$state', '$stateParams', 'StoreService', '$sce'];
    angular.module('app').controller("ClientProjectsController", controllerFn);
}