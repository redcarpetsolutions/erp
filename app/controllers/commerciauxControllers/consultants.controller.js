'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, $state, $stateParams) {
        $scope.interact = true;

        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'commercialconsultants') {
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                });
            }

        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', '$state', '$stateParams'];
    angular.module('app').controller("ComercialConsultantController", controllerFn);
}