
(function () {
    'use strict'
    angular.module('admin-module', [
        // 3rd party
        'ui.router',
        'ui.bootstrap',

        // Site modules
        'admin-module.layout',
        'admin-module.home', 
        'admin-module.icon'
        ]).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();