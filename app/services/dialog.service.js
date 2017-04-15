'use strict'


module.exports = function () {

    function serviceFn($mdDialog) {
        this.alert = function (title, content, button) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title(title)
                    .textContent(content)
                    .ok(button)
            );
        }
    }

    serviceFn.$inject = ['$mdDialog'];
    angular.module('app').service("DialogService", serviceFn);
}