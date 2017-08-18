'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, MissionsService, $state, $stateParams) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('missionDetails', { id: m.id });
        }

        $scope.add = function () {
            MissionsService.add($scope.mission);
            $state.go('missionDetails', { id: $scope.mission.id });
        }
        $scope.edit = function () {
            MissionsService.update($scope.mission.id, $scope.mission);
            $state.go('missionDetails', { id: $scope.mission.id });
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

        ///Task Management
        function getTaskIndex(title) {
            if ($scope.mission.tasks) {
                for (var i = 0; i < $scope.mission.tasks.length; i++) {
                    if ($scope.mission.tasks[i].title == title) {
                        return i;
                    }
                }
            }
            return -1;
        }
        $scope.addTask = function () {
            var idx = getTaskIndex($scope.task.title);
            if (idx === -1 && $scope.task.title) {
                $scope.mission.tasks.push($scope.task);
            } else {
                DialogService.alert('Erreur', "Une autre tache a deja ce titre", "OK")
            }
        }


        $scope.removeTask = function (title) {
            $scope.mission.tasks.splice(getTaskIndex(title), 1);
        }




        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'missions') {
                MissionsService.getAllValidated().then(function (data) {
                    $scope.missions = data;
                });
            }

            if ($state.current.name == 'missionAdd') {
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                    $scope.selected = $scope.consultants[0];
                });
                $scope.mission = new Object();
                $scope.mission.startDate = new Date();
                $scope.mission.endDate = new Date();
                $scope.mission.team = new Array();
            }

            if ($state.current.name == 'missionDetails') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                });
            }

            if ($state.current.name == 'missionEdit') {
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                    $scope.selected = $scope.consultants[0];
                });
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("MissionsController", controllerFn);
}