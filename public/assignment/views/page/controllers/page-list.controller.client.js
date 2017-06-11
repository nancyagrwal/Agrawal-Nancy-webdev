(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);
    
    function pageListController($routeParams,
                                pageService,$location) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.goBackToWebsites = goBackToWebsites;
        model.newPage = newPage;
        model.goToWidgets = goToWidgets;
        model.backToPage =backToPage;



        function init() {
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (response) {
                    model.pages = response;
                });
        }

        init();

        function renderPages (pages) {
            model.pages = pages;
        }


        function goBackToWebsites () {
            $location.url("/user/" + model.userId +"/website");
            model.pages = pages;
        }

        function newPage()
        {
            $location.url("/user/" + model.userId + "/website/" + model.websiteId +"/page/new");
        }

        function goToWidgets(page)
        {
            $location.url("/user/" +model.userId + "/website/" +model.websiteId +"/page/" + page._id + "/widget");
        }

        function backToPage(page)
        {
            $location.url("/user/" + model.userId +"/website/" + model.websiteId +"/page/" + page._id);
        }
         }
})();



