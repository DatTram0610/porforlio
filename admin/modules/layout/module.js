
(function () {
    'use strict'
    angular.module('admin-module.layout', ['ui.router'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict'
        $stateProvider.state('app', {
            abstract: true,
            views: {
                root: {
                    // templateUrl: '/admin/lol.html'
                    templateUrl: '/admin/modules/layout/layout.tpl.html'
                    // \admin\modules\layout\layout.tpl.html
                }
            }
        });
    }
})();