'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function(m) {
            $state.go('besoinsDetails', { id: m.id });
        }
        $scope.edit = function() {
            BesoinsService.update($scope.besoin.id, $scope.besoin);
            $state.go('besoins');
        }




        $scope.$watch('$viewContentLoaded', function() {
            if ($state.current.name == 'besoins') {
                $scope.besoins = BesoinsService.getAll();
            }
            if ($state.current.name == 'besoinsEdit') {
                $scope.besoin = BesoinsService.getById($stateParams.id);
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams'];
    angular.module('app').controller("BesoinsController", controllerFn);
}