'use strict'


module.exports = function() {

    var besoins = [{
        id: 1,
        title: "Application Angular",
        description: "Developpement d'une application angular",
        date: new Date(),
        user: {
            id: 3,
            firstName: "Emna",
            lastName: "Khemis",
            salary: "100",
            payment: "daily",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-1/10645271_10203814886804607_5720282964011063521_n.jpg?oh=954f64e6236b4c29b27d269b3edfbdec&oe=5975A525"
        }
    }];

    function serviceFn() {
        this.getAll = function() {
            return besoins;
        }

        function getIndex(id) {
            for (var i = 0; i < besoins.length; i++) {
                if (besoins[i].id == id) {
                    return i;
                }
            }
        }

        function remove(index) {
            besoins.splice(index, 1);
        }
        this.getById = function(id) {
            return besoins[getIndex(id)];
        }
        this.add = function(besoin) {
            besoins.push(besoin);
        }
        this.update = function(id, besoin) {
            remove(getIndex(id));
            besoins.push(besoin);
        }

        this.getByClient = function(id) {
            return besoins;
        }
    }

    angular.module('app').service("BesoinsService", serviceFn);
}