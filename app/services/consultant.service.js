'use strict'


module.exports = function () {

    var consultants = [
        {
            id:1,
            firstName: "Khaled",
            lastName: "Romdhane",
            salary: "300",
            payment: "daily",
            picture: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/12072711_10205938433954145_2510480122071916171_n.jpg?oh=fcb3e0cb99cb77378f2e9d9697bc7cdc&oe=598BAC7B"
        },
        {
            id:2,
            firstName: "Mahdi",
            lastName: "Kahia",
            salary: "30",
            payment: "hourly",
            picture: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/16864183_10210664369718443_9008044928972198531_n.jpg?oh=52d7ea6a076df503adf0359b1f0404a5&oe=59564254"
        }, {
            id:3,
            firstName: "Oussama",
            lastName: "Hmidi",
            salary: "100",
            payment: "daily",
            picture: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/17626686_1849087072015524_1450124250890106427_n.jpg?oh=651f288cc7454147a133f5c37c7fcda2&oe=599AEF8F"
        }, {
            id:4,
            firstName: "Yesmine",
            lastName: "Sayah",
            salary: "80",
            payment: "hourly",
            picture: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/15940786_10210693168357640_5183776965096805074_n.jpg?oh=45576ae3c54e1aa94c833180708753e8&oe=598F1BE7"

        }, {
            id:5,
            firstName: "Seif",
            lastName: "Kardous",
            salary: "80",
            payment: "hourly",
            picture: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/12246791_1526675700976238_7599198168473573067_n.jpg?oh=7acde87c0139f77b6e12f7d4b2b1d716&oe=59987DF3"
        }
    ];

    function serviceFn() {
        this.getAll = function () {
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
        this.getById = function (id) {
            return consultants[getIndex(id)];
        }
        this.add = function (consultant) {
            consultants.push(consultant);
        }
        this.update = function (id, consultant) {
            remove(getIndex(id));
            consultants.push(consultant);
        }
    }

    angular.module('app').service("ConsultantsService", serviceFn);
}