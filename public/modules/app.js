
(function() {
    'use strict'
    angular.module('project', [
        // 3rd party
        'ui.router', 
        'project.test',
        'project.home'

    ])
    .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();