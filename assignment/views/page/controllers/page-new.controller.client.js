(function() {
    angular
        .module("WAM")
        .controller("NewPageController", NewPageController);


    function NewPageController($location, $routeParams, PageService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams["wid"];
        model.profile = profile;
        model.newPage = newPage;
        model.openPage= openPage;
        model.editPage = editPage;
        model.back = back;
        model.createPage = createPage;

        function init() {
            PageService
                .findPagesByWebsiteId(model.websiteId)
                .success(function (pages) {
                    model.pages = pages;
                })
                .error(function(error) {
                    console.log("Error: Cant get pages for the website");
                })
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
    }

})();