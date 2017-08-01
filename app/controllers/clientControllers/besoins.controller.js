'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams, StoreService) {
        $scope.interact = true;

        $scope.add = function () {
            $scope.besoin.client = StoreService.getCurrentUser();
            $scope.besoin.date = new Date();
            BesoinsService.add($scope.besoin).then(function () {
                $state.go('clientbesoins');
            });
        }

        $scope.details = function (m) {
            $state.go('clientbesoinsDetails', { id: m.id });
        }

        $scope.edit = function (id) {
            BesoinsService.update($scope.besoin.id, $scope.besoin).then(function () {
                $state.go('clientbesoins');
            });
        }


        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'clientbesoins') {
                BesoinsService.getByClient(StoreService.getCurrentUser().id).then(function (data) {
                    $scope.besoins = data;
                });
            }
            if ($state.current.name == 'clientbesionsEdit') {
                BesoinsService.getById($stateParams.id).then(function (response) {
                    $scope.besoin = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams', 'StoreService'];
    angular.module('app').controller("ClientBesoinsController", controllerFn);
}