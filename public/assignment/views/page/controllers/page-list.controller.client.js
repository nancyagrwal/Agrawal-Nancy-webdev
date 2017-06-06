(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);
    
    function pageListController($routeParams,
                                pageService) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];


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

    }
})();



