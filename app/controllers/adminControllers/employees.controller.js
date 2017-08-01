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


        $scope.$watch('$viewContentLoaded', function () {

            if ($state.current.name == 'employee') {
                UsersService.getAllEmployees().then(function (data) {
                    $scope.employees = data;
                });
            }

            if ($state.current.name == 'employeeAdd') { }

            if ($state.current.name == 'employeeEdit') {
                UsersService.get($stateParams.id).then(function (response) {
                    $scope.employee = response.data;
                });
            }
        });
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'UsersService', '$state', '$stateParams'];
    angular.module('app').controller("EmployeeController", controllerFn);
}