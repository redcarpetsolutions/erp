'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, MissionsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.edit = function () {
            MissionsService.update($scope.mission.id, $scope.mission).then(function () {
                $state.go('commercialprojects');
            });
        }

        /// Team Management
        function getMemberIndex(id) {
            for (var i = 0; i < $scope.mission.team.length; i++) {
                if ($scope.mission.team[i].id == id) {
                    return i;
                }
            }
            return -1;
        }
        $scope.addMembre = function () {
            var idx = getMemberIndex($scope.selected.id);
            if (idx === -1 && $scope.selected.id != $scope.mission.leader.id) {
                $scope.mission.team.push($scope.selected);
            } else {
                DialogService.alert('Erreur', "Cette Personne fais deja partie de l'equipe", "OK")
            }
        }
        $scope.removeMembre = function (id) {
            $scope.mission.team.splice(getMemberIndex(id), 1);
        }


        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'commercialprojects') {
                MissionsService.getAllNonValidated().then(function (data) {
                    $scope.missions = data;
                });
            }
            if ($state.current.name == 'commercialprojectsEdit') {
                MissionsService.get($stateParams.id).then(function (response) {
                    UsersService.getAllConsultant().then(function (data) {
                        $scope.consultants = data;
                    });
                    $scope.mission = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("CommercialProjectsController", controllerFn);
}