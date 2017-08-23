'use strict'


module.exports = function () {
    function controllerFn($scope, StoreService, $state, MissionsService, UsersService) {
        $scope.user = StoreService.getCurrentUser();
        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'agenda') {
                MissionsService.getByConsultant(StoreService.getCurrentUser().id).then(function (data) {
                    $scope.missions = data;
                });
            }
        });

        $scope.date = new Date();
        $scope.times = [
            {
                time: 8
            },
            {
                time: 9
            },
            {
                time: 10
            },
            {
                time: 11
            },
            {
                time: 12
            },
            {
                time: 13
            },
            {
                time: 14
            },
            {
                time: 15
            },
            {
                time: 16
            },
            {
                time: 17
            },
            {
                time: 18
            }
        ];
        $scope.cheers = function (p) {
            let css = "";
            $scope.user.pointages.forEach(function (element, i) {
                if (new Date(element.date).getUTCDate() == $scope.date.getUTCDate() && element.time == p.time
                    && new Date(element.date).getMonth() == $scope.date.getMonth()
                ) {
                    css = "background-color:#ff4d4d";
                }
            });
            return css;
        };
        $scope.clicked = function (p) {
            let verif = true;
            for (let i = 0; i < $scope.user.pointages.length; i++) {
                if ($scope.user.pointages[i].time == p.time) {
                    UsersService.removePointage($scope.user.pointages[i].id);
                    $scope.user.pointages.splice(i, 1);
                    localStorage.sk_user = JSON.stringify($scope.user);
                    verif = false;
                    break;
                }
            }
            if (verif) {
                UsersService.addPointage({
                    date: $scope.date,
                    time: p.time,
                    user: $scope.user
                }).then(data => {
                    $scope.user.pointages.push(data.data)
                    localStorage.sk_user = JSON.stringify($scope.user);
                });
            }
        }
    }

    controllerFn.$inject = ['$scope', 'StoreService', '$state', 'MissionsService', 'UsersService'];
    angular.module('app').controller("AgendaController", controllerFn);
}