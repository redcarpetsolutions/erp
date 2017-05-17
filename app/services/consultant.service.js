'use strict'


module.exports = function() {

    var consultants = [{
            id: 1,
            firstName: "Salma",
            lastName: "Khemis",
            salary: "300",
            payment: "daily",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
        },
        {
            id: 2,
            firstName: "Malek",
            lastName: "Said",
            salary: "30",
            payment: "hourly",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-8/s960x960/16178402_10202488179121941_5677368452909218528_o.jpg?oh=60afd9aa6336b86271165b416cbff4ab&oe=59AF42EC"
        }, {
            id: 3,
            firstName: "Emna",
            lastName: "Khemis",
            salary: "100",
            payment: "daily",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-1/10645271_10203814886804607_5720282964011063521_n.jpg?oh=954f64e6236b4c29b27d269b3edfbdec&oe=5975A525"
        }, {
            id: 4,
            firstName: "Farah",
            lastName: "Ouennich",
            salary: "80",
            payment: "hourly",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-1/c282.0.960.960/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?oh=57ada7d2849f049e21875297ebc70e07&oe=59A7C66A"

        }, {
            id: 5,
            firstName: "Ghalia Ouderni",
            lastName: "Chaaban",
            salary: "80",
            payment: "hourly",
            picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-1/c282.0.960.960/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?oh=57ada7d2849f049e21875297ebc70e07&oe=59A7C66A"
        }
    ];

    function serviceFn() {
        this.getAll = function() {
            return consultants;
        }

        function getIndex(id) {
            for (var i = 0; i < consultants.length; i++) {
                if (consultants[i].id == id) {
                    return i;
                }
            }
        }

        function remove(index) {
            consultants.splice(index, 1);
        }
        this.getById = function(id) {
            return consultants[getIndex(id)];
        }
        this.add = function(consultant) {
            consultants.push(consultant);
        }
        this.update = function(id, consultant) {
            remove(getIndex(id));
            consultants.push(consultant);
        }
    }

    angular.module('app').service("ConsultantsService", serviceFn);
}