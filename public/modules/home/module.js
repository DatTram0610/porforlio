(function() {
    angular.module('project.home', ['ui.router'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {

        $stateProvider.state('app.home', {
            url: '/',
            views: {
                'content@app': {
                    templateUrl: '/public/modules/home/home.html',
                    controller: 'homeController as homeCtrl'
                },
                'footer@app': {
                    templateUrl: '/public/modules/home/footer.html',
                    controller: 'homeController as homeCtrl'
                }
            }
        })
    }
})();