'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, MissionsService, $state, $stateParams,$sce,StoreService) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('commercialmissionsDetails', { id: m.id });
        }

        

        $scope.removeMembre = function (id) {
            $scope.mission.team.splice(getMemberIndex(id), 1);
        }

        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'commercialmissions') {
                MissionsService.getByCommercial(StoreService.getCurrentUser().id).then(function (data) {
                    $scope.missions = data;
                });
            }
            if ($state.current.name == 'commercialmissionsDetails') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                    $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB2BAeujrcRfD1MDCCcfTan2i7-y0TR2E8&q=" + $scope.mission.adresse);
                    
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'MissionsService', '$state', '$stateParams','$sce','StoreService'];
    angular.module('app').controller("CommercialMissionsController", controllerFn);
}