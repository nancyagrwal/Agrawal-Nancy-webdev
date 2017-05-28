
(function() {
    angular
        .module("WAM")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService,$location) {
        var model = this;
        model.userId = $routeParams["userId"];
        model.websiteId = $routeParams["websiteId"];
        model.profile = profile();
        model.newPage = newPage;
        model.openPage= openPage;
        model.editPage = editPage;
        model.back = back;


        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);

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