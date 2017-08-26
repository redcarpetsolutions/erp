'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, $state, AuthService, StoreService) {
        $scope.interact = true;


        $scope.login = function () {
            AuthService.login($scope.user).then((response) => {
                let user = response.data;

                localStorage.sk_user = JSON.stringify(
                    user
                );
                StoreService.setCurrentUser(user);
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
        $scope.user = {};
        $scope.photo = function (response) {
            $scope.user.picture = response.data.filename;
            DialogService.alert("Succes", "Photo Envoyer Avec Success", "ok")
        }
        $scope.register = function () {
            if ($scope.password === $scope.user.password && $scope.user.password && $scope.user.email) {
                $scope.user.role = "client";
                AuthService.register($scope.user).then((response) => {
                    $state.go("login");
                });
            } else {
                DialogService.alert("Erreur", "Les deux mot de passe doivent correspondre", "ok");
            }
        }

    }

    controllerFn.$inject = ['$scope', 'DialogService', '$state', 'AuthService', 'StoreService'];
    angular.module('app').controller("AuthenticationController", controllerFn);
}