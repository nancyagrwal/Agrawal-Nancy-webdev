(function() {
    angular
        .module("WAM")
        .controller("NewPageController", NewPageController);


    function NewPageController($location, $routeParams, pageService) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams["widgetId"];
        model.profile = profile;
        model.newPage = newPage;
        model.openPage= openPage;
        model.editPage = editPage;
        model.back = back;
        model.createPage = createPage;

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId)
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

        function createPage(page) {
            if (page) {
                pageService.createPage(model.websiteId, page)
                    .then(function (response) {
                        $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                    }, function (error) {
                        console.log("Error: Unable to create the page");
                    });
            } else {
                console.log("Error invalid page name entered");
            }
        }
    }

})();