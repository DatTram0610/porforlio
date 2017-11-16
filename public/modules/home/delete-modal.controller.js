(function () {
    'use strict'
    angular.module('project.home')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl)

    ModalInstanceCtrl.$inject = ['$uibModalInstance']

    function ModalInstanceCtrl($uibModalInstance) {
        var vm = this;
        vm.header = 'David';
    };
})();
