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
    //Index
    $stateProvider.state('index', {
        url: '/',
        templateUrl: "views/index.view.html"
    });
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: "views/profile.view.html"
    });
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: "views/dashboard.view.html"
    });




    ///////////////////////////////Client Routing
    ///Besoins
    $stateProvider.state('clientbesoins', {
        url: '/besoins',
        templateUrl: "views/client/besoins/besoins.view.html"
    });
    $stateProvider.state('clientbesoinsAdd', {
        url: '/besoins/add',
        templateUrl: "views/client/besoins/add.view.html"
    });
    $stateProvider.state('clientbesionsEdit', {
        url: '/besoins/:id/edit',
        templateUrl: "views/client/besoins/edit.view.html"
    });
    $stateProvider.state('clientmissions', {
        url: '/missions',
        templateUrl: "views/client/missions/missions.view.html"
    });
    $stateProvider.state('clientmissionsdetails', {
        url: '/missions/:id',
        templateUrl: "views/client/missions/details.view.html"
    });
    


    ///////////////////////////////Consultant Routing
    ///Besoins
    $stateProvider.state('commercialbesoins', {
        url: '/commercial/besoins',
        templateUrl: "views/comercial/besoins/besoins.view.html"
    });
    $stateProvider.state('commercialbesoinsprop', {
        url: '/commercial/besoins/:id',
        templateUrl: "views/comercial/besoins/proposition.view.html"
    });
    ///Consultant
    $stateProvider.state('commercialconsultants', {
        url: '/commercial/comercial',
        templateUrl: "views/comercial/consultants/consultants.view.html"
    });
    //Missions
    $stateProvider.state('commercialmissions', {
        url: '/commercial/missions',
        templateUrl: "views/comercial/missions/missions.view.html"
    });
    $stateProvider.state('commercialmissionsdetails', {
        url: '/commercial/missions/:id',
        templateUrl: "views/comercial/missions/details.view.html"
    });



    ///////////////////////////////Admin Routing
    ///Missions
    $stateProvider.state('missions', {
        url: '/admin/missions',
        templateUrl: "views/admin/missions/missions.view.html"
    });
    $stateProvider.state('missionAdd', {
        url: '/admin/missions/add',
        templateUrl: "views/admin/missions/add.view.html"
    });
    $stateProvider.state('missionDetails', {
        url: '/admin/missions/:id',
        templateUrl: "views/admin/missions/details.view.html"
    });
    $stateProvider.state('missionEdit', {
        url: '/admin/missions/:id/edit',
        templateUrl: "views/admin/missions/edit.view.html"
    });
    ///Consultant
    $stateProvider.state('consultants', {
        url: '/admin/consultants',
        templateUrl: "views/admin/consultants/consultants.view.html"
    });
    $stateProvider.state('consultantAdd', {
        url: '/admin/consultants/add',
        templateUrl: "views/admin/consultants/add.view.html"
    });
    $stateProvider.state('consultantEdit', {
        url: '/admin/consultants/:id/edit',
        templateUrl: "views/admin/consultants/edit.view.html"
    });
    ///Commerciaux
    $stateProvider.state('commerciaux', {
        url: '/admin/commerciaux',
        templateUrl: "views/admin/commerciaux/commerciaux.view.html"
    });
    $stateProvider.state('commerciauxAdd', {
        url: '/admin/commerciaux/add',
        templateUrl: "views/admin/commerciaux/add.view.html"
    });
    $stateProvider.state('commerciauxEdit', {
        url: '/admin/commerciaux/:id/edit',
        templateUrl: "views/admin/commerciaux/edit.view.html"
    });

    ///Besoins
    $stateProvider.state('besoins', {
        url: '/admin/besoins',
        templateUrl: "views/admin/besoins/besoins.view.html"
    });
    $stateProvider.state('besoinsEdit', {
        url: '/admin/besoins/:id/edit',
        templateUrl: "views/admin/besoins/edit.view.html"
    });

    $urlRouterProvider.otherwise('/');
}
configFn.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];


angular.module('app', ['ngMaterial', 'ui.router']).config(configFn);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Services
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./services/dialog.service.js')();
require('./services/missions.service.js')();
require('./services/consultant.service.js')();
require('./services/commerciaux.service.js')();
require('./services/besoins.service.js')();
require('./services/store.service.js')();
require('./services/proposition.service.js')();



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Directives
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./directives/menu.directive.js')();
require('./directives/toolbar.directive.js')();



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Controllers
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require('./controllers/directivesControllers/menu.controller.js')();
require('./controllers/auth.controller.js')();
require('./controllers/profile.controller.js')();

require('./controllers/adminControllers/dashboard.controller.js')();
require('./controllers/adminControllers/missions.controller.js')();
require('./controllers/adminControllers/consultants.controller.js')();
require('./controllers/adminControllers/commerciaux.controller.js')();
require('./controllers/adminControllers/besoins.controller.js')();

require('./controllers/clientControllers/missions.controller.js')();
require('./controllers/clientControllers/besoins.controller.js')();

require('./controllers/commerciauxControllers/besoins.controller.js')();
require('./controllers/commerciauxControllers/consultants.controller.js')();
require('./controllers/commerciauxControllers/missions.controller.js')();