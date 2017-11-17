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
    'admin-module.layout', 'admin-module.home', 'admin-module.icon']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('admin-module.home', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict';

        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                'content@app': {
                    templateUrl: '/admin/modules/home/home.html',
                    controller: 'homeController as homeCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('admin-module.icon', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict';

        $stateProvider.state('app.icon', {
            url: '/icon',
            abstract: true
        }).state('app.icon.list', {
            url: '/list',
            views: {
                'content@app': {
                    templateUrl: '/admin/modules/icons/list/icon-list.html',
                    controller: 'iconListController as iconListCtrl'
                }
            }
        });
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
                    templateUrl: '/admin/modules/layout/layout.tpl.html'
                }
            }
        });
    }
})();
'use strict';

(function () {
    angular.module('admin-module.home').controller('homeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        'use strict';

        var vm = this;
    }
})();
"use strict";
'use strict';

(function () {
    'use strict';

    angular.module('admin-module.icon').controller('iconListController', IconListController);

    IconListController.$inject = [];

    function IconListController() {
        'use strict';

        var vm = this;
        vm.header = "David Tram";
    }
})();