'use strict'
var config = require('./config.json');

module.exports = function () {
    function serviceFn($http) {
        this.login = function (user) {
            return $http.post(config.url + "/users/login", user);
        }
        this.register = function (user) {
            return $http.post(config.url + "/users/login", user);
        }
    }

    serviceFn.$inject = ['$http'];
    angular.module('app').service("AuthService", serviceFn);
}