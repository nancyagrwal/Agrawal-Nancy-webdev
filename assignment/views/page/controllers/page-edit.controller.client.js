/**
 * Created by nancy on 5/28/2017.
 */
(function() {
    angular
        .module("WAM")
        .controller("pageEditController", pageEditController);


    function pageEditController($routeParams, pageService,$location) {
        var model = this;
        model.userId = $routeParams["userId"];
        model.websiteId = $routeParams["websiteId"];
        model.pageId = $routeParams["pageId"];
        model.deletePage = deletePage();
        model.updatePage = updatePage();
        model.createPage = createPage();
        model.profile = profile();
        model.newPage = newPage;
        model.openPage= openPage;
        model.editPage = editPage;
        model.back = back;


        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);
            model.page = pageService.findPageById(model.websiteId);
        }
        init();


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

        function deletePage() {
            pageService.deletePage(model.pageId)
                .then(function (response) {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                }, function (error) {
                    console.log("Error: Unable to delete page");
                });
        }

        function updatePage(page) {
            pageService.updatePage(model.pageId, page)
                .then(function (response) {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                }, function (error) {
                    console.log("Error: Unable to update the page");
                });
        }

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