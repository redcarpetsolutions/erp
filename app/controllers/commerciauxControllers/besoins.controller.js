'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams, ConsultantsService, StoreService) {
        $scope.interact = true;

        $scope.proposer = function (id) {
            $state.go('commercialbesoinsprop', { id: id });
        }
        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'commercialbesoins') {
                $scope.besoins = BesoinsService.getAll();
            }
            if ($state.current.name == 'commercialbesoinsprop') {
                $scope.besoin = BesoinsService.getById($stateParams.id);
                $scope.consultants = ConsultantsService.getAll();
            }
        });

        $scope.searchText = "";
        $scope.querySearch = function (query) {
            var ret = new Array();
            var x = new String();
            for (var i = 0; i < $scope.consultants.length; i++) {
                if ($scope.consultants[i].firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1
                    || $scope.consultants[i].lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                    ret.push($scope.consultants[i]);
                }
            }
            return ret;
        }
        $scope.fullName = function (item) {
            return item.firstName + " " + item.lastName;
        }

        $scope.valider = function () {
            if ($scope.consultant) {
                var proposition = {
                    user: StoreService.getCurrentUser(),
                    consultant: $scope.consultant
                }
                if ($scope.besoin.propositions) {
                    var verif = true;
                    for (var j = 0; j < $scope.besoin.propositions.length; j++) {
                        if ($scope.besoin.propositions[j].consultant.id === $scope.consultant.id) {
                            verif = false;
                            break;
                        }
                    }
                    if (verif) {
                        $scope.besoin.propositions.push(proposition);
                        BesoinsService.update($scope.besoin.id, $scope.besoin);
                    }
                } else {
                    $scope.besoin.propositions = new Array();
                    $scope.besoin.propositions.push(proposition);
                    BesoinsService.update($scope.besoin.id, $scope.besoin);
                }
            }
        }

        $scope.canRemove = function (c) {
            if (c.user.id === StoreService.getCurrentUser().id) {
                return true;
            }
            return false;
        }

        $scope.remove = function (c) {
            for (var j = 0; j < $scope.besoin.propositions.length; j++) {
                if ($scope.besoin.propositions[j].consultant.id === c.consultant.id
                    && $scope.besoin.propositions[j].user.id === StoreService.getCurrentUser().id
                ) {
                    $scope.besoin.propositions.splice(j, 1);
                    BesoinsService.update($scope.besoin.id, $scope.besoin);
                }
            }
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams', 'ConsultantsService', 'StoreService'];
    angular.module('app').controller("CommerciauxBesoinsController", controllerFn);
}