
(function(){
    angular.module('admin-module.home')
        .controller('homeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        'use strict'
        var vm = this;
    }
})();