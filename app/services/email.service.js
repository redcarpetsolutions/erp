'use strict'


module.exports = function () {
    let url = "https://redcarpet-thegate.herokuapp.com/emails";
    function serviceFn($http) {
        this.send = function (to, subject, content) {
            return $http.post(url, {
                'to': to,
                'from': "salma.khemis@esprit.tn",
                'subject': subject,
                'content': content,
                'target': 'app',
                'username': 'default'
            });
        }
        $http.get(url);
    }

    serviceFn.$inject = ['$http'];
    angular.module('app').service("EmailService", serviceFn);
}