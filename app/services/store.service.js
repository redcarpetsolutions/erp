'use strict'


module.exports = function () {
    var currentUser = { "id": 2, "email": "ghalia@gmail.com", "password": "client", "firstName": "Ghalia", "lastName": "Ouderni", "salary": 1000, "payment": "daily", "picture": null, "experience": 5, "role": "client", "skills": [], "missions": null };

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