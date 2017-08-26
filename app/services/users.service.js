'use strict'

var config = require('./config.json');

module.exports = function () {
    function serviceFn($http,$q) {
        this.getAllConsultant=function(){
            return $q(function(resolve,reject){
                $http.get(config.url+"/users").then(function (response) {
                    var users = response.data;
                    var ret = new Array();
                    users.forEach(function (u) {
                        if (u.role==="consultant") {
                            ret.push(u);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.getAllCommercials=function(){
            return $q(function(resolve,reject){
                $http.get(config.url+"/users").then(function (response) {
                    var users = response.data;
                    var ret = new Array();
                    users.forEach(function (u) {
                        if (u.role==="comercial") {
                            ret.push(u);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.getAllEmployees=function(){
            return $q(function(resolve,reject){
                $http.get(config.url+"/users").then(function (response) {
                    var users = response.data;
                    var ret = new Array();
                    users.forEach(function (u) {
                        if (u.role==="consultant" || u.role==="commercial") {
                            ret.push(u);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.getAllAdmins=function(){
            return $q(function(resolve,reject){
                $http.get(config.url+"/users").then(function (response) {
                    var users = response.data;
                    var ret = new Array();
                    users.forEach(function (u) {
                        if (u.role==="admin") {
                            ret.push(u);
                        }
                    }, this);
                    resolve(ret);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
        this.getAll = function(){
            return $http.get(config.url+"/users");
        }

        this.get = function(id){
            return $http.get(config.url+"/users/"+id);
        }

        this.add = function (user) {
            return $http.post(config.url + "/users", user);
        }

        this.update = function (id, user) {
            return $http.put(config.url + "/users/" + id, user);
        }

        this.delete = function (id) {
            return $http.delete(config.url + "/users/" + id);
        }
        this.addPointage = function (p) {
            return $http.post(config.url + "/users/pointage",p);
        }
        this.removePointage = function (id) {
            return $http.delete(config.url + "/users/pointage/" + id);
        }
    }
    serviceFn.$inject=['$http','$q']
    angular.module('app').service("UsersService", serviceFn);
}