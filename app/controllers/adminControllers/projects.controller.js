'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, MissionsService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function (m) {
            $state.go('projectsDetails', { id: m.id });
        }

        $scope.valider = function () {
            $scope.project.validated = true;
            UsersService.get($scope.project.client_id).then((response)=>{
                EmailService.send(e.email, "Projet " + $scope.mission.title, "Un Administrateur vien de valider votre projet, vous pouvez consulter les membres de l'equipe sur notre plateform");
            })
            MissionsService.update($scope.project.id, $scope.project).then(function () {
                $state.go('missionEdit', { id: $scope.project.id });
            });
        }

        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'projects') {
                MissionsService.getAllNonValidated().then(function (data) {
                    $scope.projects = data;
                });
            }
            if ($state.current.name == 'projectsDetails') {
                MissionsService.get($stateParams.id).then(function (response) {
                    $scope.project = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', 'MissionsService', '$state', '$stateParams'];
    angular.module('app').controller("ProjectsController", controllerFn);
}