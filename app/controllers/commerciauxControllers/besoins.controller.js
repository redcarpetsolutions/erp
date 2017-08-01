'use strict'


module.exports = function () {

    function controllerFn($scope, DialogService, BesoinsService, $state, $stateParams, UsersService, StoreService, PropositionService) {
        $scope.interact = true;

        $scope.proposer = function (id) {
            $state.go('commercialbesoinsprop', { id: id });
        }
        $scope.$watch('$viewContentLoaded', function () {
            if ($state.current.name == 'commercialbesoins') {
                BesoinsService.getAll().then(function (response) {
                    $scope.besoins = response.data;
                });
            }
            if ($state.current.name == 'commercialbesoinsprop') {
                BesoinsService.getById($stateParams.id).then(function (response) {
                    $scope.besoin = response.data;
                });
                UsersService.getAllConsultant().then(function (data) {
                    $scope.consultants = data;
                });
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
                    consultant: $scope.consultant,
                    user: StoreService.getCurrentUser(),
                    need : $scope.besoin
                }
                var verif = true;
                for (var j = 0; j < $scope.besoin.propositions.length; j++) {
                    if ($scope.besoin.propositions[j].consultant.id === $scope.consultant.id) {
                        verif = false;
                        break;
                    }
                }
                if (verif) {
                    PropositionService.add(proposition).then(function(response){
                        $scope.besoin.propositions.push(response.data);
                    });
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
                    PropositionService.remove(c.id);
                }
            }
        }
    }

    controllerFn.$inject = ['$scope', 'DialogService', 'BesoinsService', '$state', '$stateParams', 'UsersService', 'StoreService', 'PropositionService'];
    angular.module('app').controller("CommerciauxBesoinsController", controllerFn);
}