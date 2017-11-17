
(function() {
    'use strict'
    angular.module('admin-module.icon', ['ui.router'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict'
        $stateProvider
            .state('app.icon', {
                url: '/icon',
                abstract: true
            })
            .state('app.icon.list', {
                url: '/list',
                views: {
                    'content@app': {
                        templateUrl: '/admin/modules/icons/list/icon-list.html',
                        controller: 'iconListController as iconListCtrl'
                    }
                }
            })
    }
})();