'use strict'
var config = require('./config.json');


module.exports = function () {

    function serviceFn($http) {
        this.add = function (proposition) {
            return $http.post(config.url + "/propositions", proposition);
        }
        this.remove = function (id) {
            return $http.delete(config.url + "/propositions/" + id);
        }
    }

    serviceFn.$inject = ['$http'];
    angular.module('app').service("PropositionService", serviceFn);
}