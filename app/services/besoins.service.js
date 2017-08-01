'use strict'
var config = require('./config.json');


module.exports = function () {
    var besoins = [];

    function serviceFn($http, $q) {

        this.getAll = function () {
            return $http.get(config.url + "/needs");
        }

        this.getByClient = function (id) {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/needs").then(function (response) {
                    var needs = response.data;
                    var ret = new Array();
                    needs.forEach(function (m) {
                        if (m.client.id === id) {
                            ret.push(m);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        function getIndex(id) {
            for (var i = 0; i < besoins.length; i++) {
                if (besoins[i].id == id) {
                    return i;
                }
            }
        }
        this.getById = function (id) {
            return $http.get(config.url + "/needs/" + id);
        }
        this.add = function (besoin) {
            return $http.post(config.url + "/needs", besoin);

        }
        this.update = function (id, besoin) {
            return $http.put(config.url + "/needs/" + id, besoin);
        }
    }
    serviceFn.$inject = ['$http', '$q'];

    angular.module('app').service("BesoinsService", serviceFn);
}