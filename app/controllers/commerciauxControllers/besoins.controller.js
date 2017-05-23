'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams) {
        $scope.interact = true;
        $scope.$watch('$viewContentLoaded', function() {
            if ($state.current.name == 'comercialbesoins') {
                $scope.besoins = BesoinsService.getAll();
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams'];
    angular.module('app').controller("CommerciauxBesoinsController", controllerFn);
}