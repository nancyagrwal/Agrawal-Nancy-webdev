/**
 * Created by nancy on 5/28/2017.
 */
(function() {
    angular
        .module("WAM")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, PageService) {
        var vm = this;
        model.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.profile = profile;
        vm.newPage = newPage;
        vm.openPage= openPage;
        vm.editPage = editPage;
        vm.back = back;

        function init() {
            PageService
                .findPagesByWebsiteId(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error(function(error) {
                    console.log("Error: Cant get pages for the website");
                })
        }
        init();

        function profile() {
            $location.url("/user/"+vm.userId);
        }

        function newPage() {
            $location.url("/user/"+ vm.userId + "/website/"+vm.websiteId+"/page/new");
        }

        function openPage(page) {
            $location.url("/user/"+ vm.userId + "/website/"+vm.websiteId+"/page/"+page._id + "/widget");
        }
        function editPage(page) {
            $location.url("/user/"+ vm.userId +"/website/"+vm.websiteId+"/page/"+page._id);
        }

        function back() {
            $location.url("/user/"+vm.userId+"/website");
        }
    }


})();