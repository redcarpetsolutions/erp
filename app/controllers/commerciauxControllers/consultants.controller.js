'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, $state, $stateParams) {
        $scope.interact = true;

        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'commercialconsultants') {
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                    $scope.display = $scope.consultants;
                });
            }

        });

        ///Filter
        $scope.filter = "";
        $scope.exp = "";
        $scope.display = new Array();
        $scope.filterUsers = function () {
            $scope.display = new Array();
            $scope.consultants.forEach(function (e) {
                if ((e.firstName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1 ||
                    e.lastName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1) &&
                    (
                        (e.experience < 2 && $scope.exp === "junior") ||
                        (e.experience >= 2 && e.experience < 4 && $scope.exp === "confirmer") ||
                        (e.experience >= 4 && $scope.exp === "senior") ||
                        ($scope.exp === "")

                    )
                ) {
                    $scope.display.push(e);
                } else {
                    if (e.skills) {
                        for (let i = 0; i < e.skills.length; i++) {
                            if ((e.skills[i].title.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1)) {
                                $scope.display.push(e);
                                break;
                            }
                        }
                    }
                }
            });
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', '$state', '$stateParams'];
    angular.module('app').controller("ComercialConsultantController", controllerFn);
}