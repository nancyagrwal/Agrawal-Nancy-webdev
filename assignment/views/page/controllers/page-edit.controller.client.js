/**
 * Created by nancy on 5/28/2017.
 */
(function() {
    angular
        .module("WAM")
        .controller("EditPageController", EditPageController);


    function EditPageController($location, $routeParams, PageService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.profile = profile;
        model.newPage = newPage;
        model.openPage= openPage;
        model.editPage = editPage;
        model.back = back;
        model.createPage = createPage;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            PageService
                .findPageById(model.websiteId)
                .success(function (page) {
                    model.page = page.data;
                })
                .error(function(error) {
                    console.log("Error: Cant get page for the website");
                });

            PageService
                .findPagesByWebsiteId(model.websiteId)
                .success(function (pages) {
                    model.pages = pages.data;
                })
                .error(function(error) {
                    console.log("Error: Cant get pages for the website");
                });
        }
        init();

        function profile() {
            $location.url("/user/"+model.userId);
        }

        function newPage() {
            $location.url("/user/"+ model.userId + "/website/"+model.websiteId+"/page/new");
        }

        function openPage(page) {
            $location.url("/user/"+ model.userId + "/website/"+model.websiteId+"/page/"+page._id + "/widget");
        }
        function editPage(page) {
            $location.url("/user/"+ model.userId +"/website/"+model.websiteId+"/page/"+page._id);
        }

        function back() {
            $location.url("/user/"+model.userId+"/website");
        }

        function createPage(page) {
            if (page) {
                PageService.createPage(model.websiteId, page)
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
            PageService.deletePage(model.pageId)
                .then(function (response) {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                }, function (error) {
                    console.log("Error: Unable to delete page");
                });
        }

        function updatePage(page) {
            PageService.updatePage(model.pageId, page)
                .then(function (response) {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                }, function (error) {
                    console.log("Error: Unable to update the page");
                });
        }
    }
})();