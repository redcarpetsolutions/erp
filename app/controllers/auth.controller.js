'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, $state, AuthService) {
        $scope.interact = true;


        $scope.login = function () {
            AuthService.login($scope.user).then((response) => {
                let user = response.data;

                localStorage.sk_user = JSON.stringify(
                    user
                );
                if (user.role === "admin") {
                    $state.go("missions");
                } else if (user.role === "client") {
                    $state.go("clientbesoins");
                } else if (user.role === "comercial") {
                    $state.go("commercialmissions");
                } else if (user.role === "consultant") {
                    $state.go("consultantTasks");
                } 
            });
        }

    }

    controllerFn.$inject = ['$scope', 'DialogService', '$state', 'AuthService'];
    angular.module('app').controller("AuthenticationController", controllerFn);
}