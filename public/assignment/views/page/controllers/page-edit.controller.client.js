(function () {
    angular
        .module('WebAppMaker')
        .controller('pageEditController', pageEditController);
    
    function pageEditController($routeParams,
                                $location,
                                pageService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams.pageId;

        function init() {
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(renderThePages);
            pageService
                .findPageById(model.pageId)
        .then(function (response) {
                model.page = response;
            });
        }

        init();

        function renderThePages(pages) {
            model.pages = pages;
        }


        model.updatePage = updatePage;
        model.deletePage = deletePage;


        function updatePage(page) {
            pageService.updatePage(model.pageId, page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
    }
})();