'use strict'


module.exports = function() {
    var counter = 3;
    var missions = [{
            id: 1,
            title: "Consulting France",
            objective: "Trouvez une mine d'or dans les iles des caraibs (qui sont aparament en france)",
            startDate: new Date(),
            endDate: new Date(),
            method: "Scrum",
            technology: "Angular",
            leader: {
                id: 1,
                firstName: "Salma",
                lastName: "Khemis",
                salary: "300",
                payment: "daily",
                picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
            },
            team: [{
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
            }],
            tasks: [{
                    title: "Do Stuff",
                    description: "I don't know at this point",
                    state: "DOING",
                    startDate: new Date(),
                    endDate: new Date(),
                    responsible: {
                        id: 3,
                        firstName: "Emna",
                        lastName: "Khemis",
                        salary: "100",
                        payment: "daily",
                        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-1/10645271_10203814886804607_5720282964011063521_n.jpg?oh=954f64e6236b4c29b27d269b3edfbdec&oe=5975A525"
                    }
                },
                {
                    title: "I Said Do Stuff",
                    description: "I don't know at this point",
                    state: "TODO",
                    startDate: new Date(),
                    endDate: new Date(),
                    responsible: {
                        id: 1,
                        firstName: "Salma",
                        lastName: "Khemis",
                        salary: "300",
                        payment: "daily",
                        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Consulting Tunisie",
            objective: "Trouvez une mine d'or dans les iles des caraibs (qui sont aparament en Tunisie)",
            startDate: new Date(),
            endDate: new Date(),
            method: "Scrum",
            technology: "Angular",
            leader: {
                id: 1,
                firstName: "Salma",
                lastName: "Khemis",
                salary: "300",
                payment: "daily",
                picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/17021563_10210372323757483_3670622109916565036_n.jpg?oh=48af05b5efa56778c90a3956784b652d&oe=59BC0FE4"
            },
            team: [{
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
            }],
            tasks: [{
                    title: "Do Stuff",
                    description: "I don't know at this point",
                    state: "DOING",
                    startDate: new Date(),
                    endDate: new Date(),
                    responsible: {
                        id: 2,
                        firstName: "Malek",
                        lastName: "Said",
                        salary: "30",
                        payment: "hourly",
                        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-8/s960x960/16178402_10202488179121941_5677368452909218528_o.jpg?oh=60afd9aa6336b86271165b416cbff4ab&oe=59AF42EC"
                    }
                },
                {
                    title: "I Said Do Stuff",
                    description: "I don't know at this point",
                    state: "TODO",
                    startDate: new Date(),
                    endDate: new Date(),
                    responsible: {
                        id: 5,
                        firstName: "Ghalia Ouderni",
                        lastName: "Chaaban",
                        salary: "80",
                        payment: "hourly",
                        picture: "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-1/c282.0.960.960/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?oh=57ada7d2849f049e21875297ebc70e07&oe=59A7C66A"
                    }
                }
            ]
        }
    ]

    function serviceFn() {
        this.getAll = function() {
            return missions;
        }

        function getIndex(id) {
            for (var i = 0; i < missions.length; i++) {
                if (missions[i].id == id) {
                    return i;
                }
            }
        }

        function remove(index) {
            missions.splice(index, 1);
        }
        this.getById = function(id) {
            return missions[getIndex(id)];
        }

        this.add = function(mission) {
            mission.id = counter;
            counter += 1;
            missions.push(mission);
        }

        this.update = function(id, mission) {
            remove(getIndex(id));
            missions.push(mission);
        }

    }

    angular.module('app').service("MissionsService", serviceFn);
}