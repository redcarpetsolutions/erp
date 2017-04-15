'use strict';

module.exports = function () {
    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: './views/directives/toolbar.direcive.html'
        }
    }
    angular.module('app').directive('toolbar', direvtiveFN);
}