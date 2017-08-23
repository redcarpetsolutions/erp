'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, MissionsService, $state, $stateParams) {
        $scope.interact = true;
        $scope.details = function (m) {
            $state.go('missionDetails', { id: m.id });
        }

        $scope.add = function () {
            $scope.mission.validated = true;
            $scope.mission.type = "interne";
            MissionsService.add($scope.mission).then(function () {
                $state.go('missions');
            });
        }
        $scope.edit = function () {
            MissionsService.update($scope.mission.id, $scope.mission).then(function () {
                $state.go('missionDetails', { id: $scope.mission.id });
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
            $scope.mission.commercials.splice(getMemberIndex(id), 1);
        }

        /// commercial Management
        function getCommercialIndex(id) {
            for (var i = 0; i < $scope.mission.commercials.length; i++) {
                if ($scope.mission.commercials[i].id == id) {
                    return i;
                }
            }
            return -1;
        }
        $scope.addCommercial = function () {
            var idx = getMemberIndex($scope.selected.id);
            if (idx === -1 && $scope.selected.id != $scope.mission.leader.id) {
                $scope.mission.commercials.push($scope.selected);
            } else {
                DialogService.alert('Erreur', "Cette Personne fais deja partie des consultants", "OK")
            }
        }


        $scope.removeCommercial = function (id) {
            $scope.mission.commercials.splice(getMemberIndex(id), 1);
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
            if ($scope.task.responsible) {
                var idx = getTaskIndex($scope.task.title);
                $scope.task.mission = { id: $scope.mission.id };

                if (idx === -1 && $scope.task.title) {
                    $scope.mission.tasks.push($scope.task);
                } else {
                    DialogService.alert('Erreur', "Une autre tache a deja ce titre", "OK")
                }
            } else {
                DialogService.alert('Erreur', "Veuillez choisir un responsable", "OK")
            }

        }


        $scope.removeTask = function (title) {
            $scope.mission.tasks.splice(getTaskIndex(title), 1);
        }


        //File Upload
        $scope.pdf = function (response) {
            $scope.mission.path = "http://localhost:18080/erp-web/api/upload/" + response.data.filename;
        }

        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'missions') {
                MissionsService.getAllValidated().then(function (data) {
                    $scope.missions = data;
                    $scope.display = $scope.missions;
                });
            }

            if ($state.current.name == 'missionAdd') {
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                    $scope.selected = $scope.consultants[0];
                });
                UsersService.getAllCommercials().then(function (data) {
                    $scope.commercials = data;
                    $scope.selected2 = $scope.commercials[0];
                });
                $scope.mission = new Object();
                $scope.mission.startDate = new Date();
                $scope.mission.endDate = new Date();
                $scope.mission.team = new Array();
                $scope.mission.commercials = new Array();
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
                UsersService.getAllCommercials().then(function (data) {
                    $scope.commercials = data;
                    $scope.selected2 = $scope.commercials[0];
                });
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.mission = response.data;
                });
            }
        });

        ///Filter
        $scope.filter = "";
        $scope.display = new Array();
        $scope.type = "";
        $scope.filterUsers = function () {
            $scope.display = new Array();
            $scope.missions.forEach(function (e) {
                if ((e.title.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1 ||
                    e.leader.firstName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1 ||
                    e.leader.lastName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1) &&
                    (e.type === $scope.type || $scope.type === "")
                ) {
                    $scope.display.push(e);
                }
            });
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("MissionsController", controllerFn);
}