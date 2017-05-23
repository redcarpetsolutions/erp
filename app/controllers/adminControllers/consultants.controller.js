'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, ConsultantsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function (m) {
            $state.go('consultantDetails', { id: m.id });
        }

        $scope.add = function () {
            ConsultantsService.add($scope.consultant);
            $state.go('consultants');
        }
        $scope.edit = function () {
            ConsultantsService.update($scope.consultant.id, $scope.consultant);
            $state.go('consultants');
        }


        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'consultants') {
                $scope.consultants = ConsultantsService.getAll();
            }

            if ($state.current.name == 'consultantAdd') {
                // $scope.consultants = ConsultantsService.getAll();
                // $scope.selected = ConsultantsService.getById(2);
                // $scope.mission = new Object();
                // $scope.mission.startDate = new Date();
                // $scope.mission.endDate = new Date();
                // $scope.mission.team = new Array();
                // $scope.mission.leader = ConsultantsService.getById(1);
            }

            if ($state.current.name == 'consultantEdit') {
                $scope.consultant = ConsultantsService.getById($stateParams.id);
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'ConsultantsService', '$state', '$stateParams'];
    angular.module('app').controller("ConsultantsController", controllerFn);
}