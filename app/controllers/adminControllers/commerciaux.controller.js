'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, CommerciauxService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function(m) {
            $state.go('CommerciauxDetails', { id: m.id });
        }

        $scope.add = function() {
            CommerciauxService.add($scope.comercial);
            $state.go('commerciaux');
        }
        $scope.edit = function() {
            CommerciauxService.update($scope.comercial.id, $scope.comercial);
            $state.go('commerciaux');
        }


        $scope.$watch('$viewContentLoaded', function() {

            if ($state.current.name == 'commerciaux') {
                $scope.commerciaux = CommerciauxService.getAll();
            }

            if ($state.current.name == 'commerciauxAdd') {}

            if ($state.current.name == 'commerciauxEdit') {
                $scope.comercial = CommerciauxService.getById($stateParams.id);
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'CommerciauxService', '$state', '$stateParams'];
    angular.module('app').controller("CommerciauxController", controllerFn);
}