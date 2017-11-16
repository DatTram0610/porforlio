(function () {
    angular.module('project.home')
        .controller('homeController', HomeController);

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
            })
            // .result
            //     .then(deleteModalSuccess)
            //     .catch(cancelDelete);
        }


    }
})();