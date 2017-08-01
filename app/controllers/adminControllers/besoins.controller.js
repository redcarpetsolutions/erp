'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function (m) {
            $state.go('besoinsDetails', { id: m.id });
        }
        $scope.edit = function () {
            BesoinsService.update($scope.besoin.id, $scope.besoin).then(function () {
                $state.go('besoins');
            });
        }




        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'besoins') {
                BesoinsService.getAll().then(function (response) {
                    $scope.besoins = response.data;
                });
            }
            if ($state.current.name == 'besoinsDetails') {
                BesoinsService.getById($stateParams.id).then(function(response){
                    $scope.besoin = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams'];
    angular.module('app').controller("BesoinsController", controllerFn);
}