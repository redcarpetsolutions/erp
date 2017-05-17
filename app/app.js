'use strict'

require('angular');
require('angular-material');
require('angular-ui-router');
require('angular-material/angular-material.css');
require('./style.css');

function configFn($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// Theme de l'application
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('teal')
        .warnPalette('red')
        .backgroundPalette('grey');
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// Routing de l'application
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: "views/login.view.html"
    });

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: "views/dashboard.view.html"
    });
    ///Missions
    $stateProvider.state('missions', {
        url: '/admin/missions',
        templateUrl: "views/missions/missions.view.html"
    });
    $stateProvider.state('missionAdd', {
        url: '/admin/missions/add',
        templateUrl: "views/missions/add.view.html"
    });
    $stateProvider.state('missionDetails', {
        url: '/admin/missions/:id',
        templateUrl: "views/missions/details.view.html"
    });
    $stateProvider.state('missionEdit', {
        url: '/admin/missions/:id/edit',
        templateUrl: "views/missions/edit.view.html"
    });
    ///Consultant
    $stateProvider.state('consultants', {
        url: '/admin/consultants',
        templateUrl: "views/consultants/consultants.view.html"
    });
    $stateProvider.state('consultantAdd', {
        url: '/admin/consultants/add',
        templateUrl: "views/consultants/add.view.html"
    });
    $stateProvider.state('consultantEdit', {
        url: '/admin/consultants/:id/edit',
        templateUrl: "views/consultants/edit.view.html"
    });

    $urlRouterProvider.otherwise('/login');
}
configFn.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];


angular.module('app', ['ngMaterial', 'ui.router']).config(configFn);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Services
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./services/dialog.service.js')();
require('./services/missions.service.js')();
require('./services/consultant.service.js')();



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Directives
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./directives/menu.directive.js')();
require('./directives/toolbar.directive.js')();



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Controllers
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./controllers/auth.controller.js')();
require('./controllers/dashboard.controller.js')();
require('./controllers/missions.controller.js')();
require('./controllers/consultants.controller.js')();