'use strict'


module.exports = function() {

    function controllerFn($scope, DialogService, $state) {
        $scope.interact = true;


        $scope.login = function() {
            if ($scope.user.username == "admin" && $scope.user.password == "admin") {
                localStorage.sk_user = JSON.stringify({
                    id: 1,
                    firstName: "Salma",
                    lastName: "Khemis",
                    salary: "300",
                    payment: "daily",
                    role: 'admin',
                    picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
                });
                $state.go("missions");
            } else if ($scope.user.username == "client" && $scope.user.password == "client") {
                localStorage.sk_user = JSON.stringify({
                    id: 1,
                    firstName: "Salma",
                    lastName: "Khemis",
                    salary: "300",
                    payment: "daily",
                    role: 'client',
                    picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
                });
                $state.go("profile");
            } else if ($scope.user.username == "comercial" && $scope.user.password == "comercial") {
                localStorage.sk_user = JSON.stringify({
                    id: 1,
                    firstName: "Salma",
                    lastName: "Khemis",
                    salary: "300",
                    payment: "daily",
                    role: 'comercial',
                    picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
                });
                $state.go("commercialbesoins");
            } else {
                DialogService.alert('Erreur', 'Mauvais Login ou Mot De Passe', 'Ok');
            }
        }
        

    }

    controllerFn.$inject = ['$scope', 'DialogService', '$state'];
    angular.module('app').controller("AuthenticationController", controllerFn);
}