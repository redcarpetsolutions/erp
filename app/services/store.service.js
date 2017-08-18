'use strict'


module.exports = function () {
    let currentUser = JSON.parse(localStorage.sk_user);
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