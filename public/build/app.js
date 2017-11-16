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
            url: '/home',
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
    'use strict';

    angular.module('project.home').controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ['$uibModalInstance'];

    function ModalInstanceCtrl($uibModalInstance) {
        var vm = this;
        vm.header = 'David';
    };
})();
'use strict';

(function () {
    angular.module('project.home').controller('homeController', HomeController);

    HomeController.$inject = ['$uibModal'];

    function HomeController($uibModal) {
        var vm = this;

        vm.open = _open;

        function _open() {
            var modalInstance = $uibModal.open({
                templateUrl: '/public/modules/home/delete-modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalCtrl',
                backdrop: true,
                size: "sm"
                // resolve: {
                //     strategy: function () {
                //         return strategy;
                //     }
                // }
            });
            // .result
            //     .then(deleteModalSuccess)
            //     .catch(cancelDelete);
        }
    }
})();