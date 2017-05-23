'use strict'


module.exports = function() {

    var commerciaux = [{
        id: 1,
        firstName: "Salma",
        lastName: "Khemis",
        salary: "300",
        payment: "daily",
        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
    }];

    function serviceFn() {
        this.getAll = function() {
            return commerciaux;
        }

        function getIndex(id) {
            for (var i = 0; i < commerciaux.length; i++) {
                if (commerciaux[i].id == id) {
                    return i;
                }
            }
        }

        function remove(index) {
            commerciaux.splice(index, 1);
        }
        this.getById = function(id) {
            return commerciaux[getIndex(id)];
        }
        this.add = function(comercial) {
            commerciaux.push(comercial);
        }
        this.update = function(id, comercial) {
            remove(getIndex(id));
            commerciaux.push(comercial);
        }
    }

    angular.module('app').service("CommerciauxService", serviceFn);
}