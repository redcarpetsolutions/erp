'use strict'


module.exports = function () {
    var currentUser = {
        id: 1,
        firstName: "Salma",
        lastName: "Khemis",
        salary: "300",
        payment: "daily",
        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
    };

    function serviceFn() {
        this.setCurrentUser = function (user) {
            currentUser = user;
        }
        this.getCurrentUser = function () {
            return currentUser;
        }
    }

    angular.module('app').service("StoreService", serviceFn);
}