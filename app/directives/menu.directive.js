'use strict';

module.exports = function () {
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: './views/directives/menu.directive.html'
        }
    }
    angular.module('app').directive('menu', direvtiveFN);
}