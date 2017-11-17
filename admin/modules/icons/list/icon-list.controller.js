
(function() {
    'use strict'
    angular.module('admin-module.icon')
        .controller('iconListController', IconListController);

    IconListController.$inject = [];

    function IconListController() {
        'use strict'

        var vm = this;
        vm.header = "David Tram"
    }
})();