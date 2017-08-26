'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, UsersService, $state, $stateParams) {
        $scope.interact = true;

        $scope.details = function (m) {
            $state.go('employeeDetails', { id: m.id });
        }

        $scope.add = function () {
            UsersService.add($scope.employee).then(function () {
                $state.go('employee');
            });
        }
        $scope.edit = function () {
            UsersService.update($scope.employee.id, $scope.employee).then(function () {
                $state.go('employee');
            });
        }
        $scope.employeeDelete = function (id) {
            UsersService.delete(id).catch(err => {
                DialogService.alert("Erreur", "Ce consultant fais partie d'une Mission", "OK");
            });
        }

        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'employee') {
                UsersService.getAll().then(function (response) {
                    $scope.employees = response.data;
                    $scope.display = $scope.employees;
                });
            }

            if ($state.current.name == 'employeeAdd') { }

            if ($state.current.name == 'employeeEdit') {
                UsersService.get($stateParams.id).then(function (response) {
                    $scope.employee = response.data;
                    $scope.display = $scope.employees;
                });
            }
        });

        $scope.photo = function (response) {
            $scope.employee.picture = "http://localhost:18080/erp-web/api/upload/" + response.data.filename;
        }
        $scope.cv = function (response) {
            $scope.employee.cv = "http://localhost:18080/erp-web/api/upload/" + response.data.filename;
        }

        ///Filter
        $scope.filter = "";
        $scope.role = "";
        $scope.exp = "";
        $scope.display = new Array();
        $scope.filterUsers = function () {
            $scope.display = new Array();
            $scope.employees.forEach(function (e) {
                if ((e.firstName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1 ||
                    e.lastName.toLowerCase().indexOf($scope.filter.toLowerCase()) !== -1) &&
                    (e.role === $scope.role || $scope.role === "") &&
                    (
                        (e.experience < 2 && $scope.exp === "junior") ||
                        (e.experience >= 2 && e.experience < 4 && $scope.exp === "confirmer") ||
                        (e.experience >= 4 && $scope.exp === "senior") ||
                        ($scope.exp === "")

                    )
                ) {
                    $scope.display.push(e);

                }
            });
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', '$state', '$stateParams'];
    angular.module('app').controller("EmployeeController", controllerFn);
}