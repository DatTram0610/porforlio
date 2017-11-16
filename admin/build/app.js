/* global $ angular */
'use strict';

$(function () {
    angular.bootstrap(document, ['admin-module']);
});
'use strict';

(function () {
    'use strict';

    angular.module('admin-module', [
    // 3rd party
    'ui.router', 'ui.bootstrap',

    // Site modules
    'admin-module.layout']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('admin-module.layout', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict';

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