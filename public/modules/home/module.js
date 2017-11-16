(function() {
    angular.module('project.home', ['ui.router'])
        .config(RouteConfig);

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
        })
    }
})();