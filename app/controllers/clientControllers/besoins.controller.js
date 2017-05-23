'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.add = function() {
            BesoinsService.add($scope.besoin);
            $state.go('clientbesoins');
        }

        $scope.details = function(m) {
            $state.go('clientbesoinsDetails', { id: m.id });
        }

        $scope.edit = function(id) {
            BesoinsService.update($scope.besoin.id, $scope.besoin);
            $state.go('clientbesoins');
        }


        $scope.$watch('$viewContentLoaded', function() {
            if ($state.current.name == 'clientbesoins') {
                $scope.besoins = BesoinsService.getByClient(1);
            }
            if ($state.current.name == 'clientbesionsEdit') {
                $scope.besoin = BesoinsService.getById($stateParams.id);
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams'];
    angular.module('app').controller("ClientBesoinsController", controllerFn);
}