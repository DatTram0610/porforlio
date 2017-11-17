

(function() {
    'use strict'
    angular.module('admin-module.home', ['ui.router'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict'
        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                'content@app': {
                    templateUrl: '/admin/modules/home/home.html',
                    controller: 'homeController as homeCtrl'
                }
            }
        })
    }
})();