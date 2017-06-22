'use strict'


module.exports = function() {

    var propositions = [];

    function serviceFn() {
        this.getAll = function() {
            return propositions;
        }

        function getIndex(id) {
            for (var i = 0; i < propositions.length; i++) {
                if (propositions[i].id == id) {
                    return i;
                }
            }
        }

        function remove(index) {
            propositions.splice(index, 1);
        }
        this.getById = function(id) {
            return propositions[getIndex(id)];
        }
        this.add = function(besoin) {
            propositions.push(besoin);
        }
        this.update = function(id, besoin) {
            remove(getIndex(id));
            propositions.push(besoin);
        }

        this.getByClient = function(id) {
            return propositions;
        }
    }

    angular.module('app').service("PropositionService", serviceFn);
}