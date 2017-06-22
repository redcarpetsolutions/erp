'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, ConsultantsService, MissionsService, $state, $stateParams) {
        $scope.interact = true;
        $scope.details = function(m) {
            $state.go('commercialmissionsdetails', { id: m.id });
        }

        $scope.$watch('$viewContentLoaded', function() {
            if ($state.current.name == 'commercialmissions') {
                $scope.missions = MissionsService.getAll();
            }
            if ($state.current.name == 'commercialmissionsdetails') {
                $scope.mission = MissionsService.getById($stateParams.id);
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'ConsultantsService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("CommercialMissionsController", controllerFn);
}