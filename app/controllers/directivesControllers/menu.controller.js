'use strict'


module.exports = function() {
    function controllerFn($scope, $state) {
        $scope.logout = function() {
            localStorage.removeItem("sk_user");
            $state.go('index');
        }
        $scope.$watch('$viewContentLoaded', function() {
            if (localStorage.sk_user) {
                var user = JSON.parse(localStorage.sk_user);
                if (user.role != undefined) {
                    $scope.userType = user.role;
                    $scope.loggedin = true;
                } else {
                    $scope.userType = 'client';
                    $scope.loggedin = false;
                }
            } else {
                $scope.userType = 'client';
                $scope.loggedin = false;
            }
        });
    }

    controllerFn.$inject = ['$scope', '$state'];
    angular.module('app').controller("MenuController", controllerFn);
}