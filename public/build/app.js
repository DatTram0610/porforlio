/* global $ angular */
'use strict';

$(function () {
    angular.bootstrap(document, ['project']);
});
'use strict';

(function () {
    'use strict';

    angular.module('project', [
    // 3rd party
    'ui.router', 'ui.bootstrap',

    // Site modules
    'project.test', 'project.home']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    angular.module('project.home', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {

        $stateProvider.state('app.home', {
            url: '/',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/home/home.html',
                    controller: 'homeController as homeCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('project.test', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        'use strict';

        $stateProvider.state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: '/public/modules/layout/layout.tpl.html'
                }
            }
        });
    }
})();
'use strict';

(function () {
    angular.module('project.home').controller('homeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
    }
})();