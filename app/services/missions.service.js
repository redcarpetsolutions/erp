'use strict'
var config = require('./config.json');

module.exports = function () {
    var counter = 3;
    var missions = new Array();
    function serviceFn($http, $q) {
        this.getAll = function () {
            return $http.get(config.url + "/missions");
        }
        this.getAllValidated = function () {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/missions").then(function (response) {
                    var missions = response.data;
                    var ret = new Array();
                    missions.forEach(function (m) {
                        if (m.validated) {
                            ret.push(m);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.getAllNonValidated = function () {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/missions").then(function (response) {
                    var missions = response.data;
                    var ret = new Array();
                    missions.forEach(function (m) {
                        if (!m.validated) {
                            ret.push(m);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.get = function (id) {
            return $http.get(config.url + "/missions/" + id);
        }

        this.getByUser = function (id) {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/missions").then(function (response) {
                    var missions = response.data;
                    var ret = new Array();
                    missions.forEach(function (m) {
                        
                        if (m.client && m.client.id === id) {
                            ret.push(m);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }

        this.getByConsultant = function (id) {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/missions").then(function (response) {
                    var missions = response.data;
                    var ret = new Array();
                    missions.forEach(function (m) {
                        if (m.leader && m.leader.id === id) {
                            ret.push(m);
                        }
                        if (m.team) {
                            m.team.forEach((t) => {
                                if (t.id === id) {
                                    ret.push(m);
                                }
                            });
                        }
                    });
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }

        this.getByCommercial = function (id) {
            return $q(function (resolve, reject) {
                $http.get(config.url + "/missions").then(function (response) {
                    var missions = response.data;
                    var ret = new Array();
                    missions.forEach(function (m) {
                        if (m.commercials) {
                            m.commercials.forEach((t) => {
                                if (t.id === id) {
                                    ret.push(m);
                                }
                            });
                        }
                    });
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }


        this.add = function (mission) {
            return $http.post(config.url + "/missions", mission);
        }

        this.update = function (id, mission) {
            return $http.put(config.url + "/missions/" + id, mission);
        }

        this.delete = function (id) {
            return $http.delete(config.url + "/missions/" + id);
        }

    }
    serviceFn.$inject = ['$http', '$q'];

    angular.module('app').service("MissionsService", serviceFn);
}