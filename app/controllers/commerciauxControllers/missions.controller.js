'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, MissionsService, $state, $stateParams) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('commercialmissionsdetails', { id: m.id });
        }

        

        $scope.removeMembre = function (id) {
            $scope.mission.team.splice(getMemberIndex(id), 1);
        }

        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'commercialmissions') {
                MissionsService.getAllValidated().then(function (data) {
                    $scope.missions = data;
                });
            }
            if ($state.current.name == 'commercialmissionsDetails') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("CommercialMissionsController", controllerFn);
}