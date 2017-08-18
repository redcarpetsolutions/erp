'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, $state, $stateParams,UsersService) {
        // $scope.interact = true;

        // $scope.details = function(m) {
        //     $state.go('besoinsDetails', { id: m.id });
        // }
        // $scope.edit = function() {
        //     BesoinsService.update($scope.besoin.id, $scope.besoin);
        //     $state.go('besoins');
        // }


        $scope.$watch('$viewContentLoaded', function() {
            if ($state.current.name == 'profile') {
                $scope.user = JSON.parse(localStorage.sk_user);
            }
            // if ($state.current.name == 'besoinsEdit') {
            //     $scope.besoin = BesoinsService.getById($stateParams.id);
            // }
        });

        $scope.photo=function(response){
            $scope.user.picture = response.data.filename;
            UsersService.update($scope.user.id,$scope.user);
            DialogService.alert("Succes", "Photo Modifier Avec Success","ok")
        }

        $scope.cv=function(response){
            $scope.user.cv = response.data.filename;
            UsersService.update($scope.user.id,$scope.user);
            DialogService.alert("Succes", "CV Modifier Avec Success","ok")
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', '$state', '$stateParams','UsersService'];
    angular.module('app').controller("ProfileController", controllerFn);
}