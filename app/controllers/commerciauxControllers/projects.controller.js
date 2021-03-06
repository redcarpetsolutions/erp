'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, MissionsService, $state, $stateParams, EmailService) {
        $scope.interact = true;

        $scope.edit = function () {
            MissionsService.update($scope.mission.id, $scope.mission).then(function () {
                UsersService.getAllAdmins().then(data => {
                    data.forEach(e => {
                        EmailService.send(e.email, "Projet " + $scope.mission.title, "un commercial a proposer des consultants pour le projet " + $scope.mission.title)
                    });
                    $state.go('commercialprojects');
                });
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
                    $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB2BAeujrcRfD1MDCCcfTan2i7-y0TR2E8&q=" + $scope.mission.adresse);
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', 'MissionsService', '$state', '$stateParams', "EmailService"];
    angular.module('app').controller("CommercialProjectsController", controllerFn);
}