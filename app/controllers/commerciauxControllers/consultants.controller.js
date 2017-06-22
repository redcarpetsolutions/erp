'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, ConsultantsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.$watch('$viewContentLoaded', function() {

            if ($state.current.name == 'commercialconsultants') {
                $scope.consultants = ConsultantsService.getAll();
            }

        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'ConsultantsService', '$state', '$stateParams'];
    angular.module('app').controller("ComercialConsultantController", controllerFn);
}