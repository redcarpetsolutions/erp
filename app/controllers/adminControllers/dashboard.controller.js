'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService) {
        $scope.interact = true;


        $scope.login = function () {
            if ($scope.user == "khemis") {

            } else if ($scope.user == "khaled") {

            } else {
                DialogService.alert('Erreur','Mauvais Login ou Mot De Passe','Ok');
            }
        }

    }

    controllerFn.$inject = ['$scope', 'DialogService'];
    angular.module('app').controller("DashboardController", controllerFn);
}