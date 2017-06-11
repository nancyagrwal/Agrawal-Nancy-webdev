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
        model.backToPageFromEdit = backToPageFromEdit;
        model.newPage = newPage;
        model.goToWidgets = goToWidgets;
        model.backToPage = backToPage;
        model.updatePage = updatePage;
        model.deletePage = deletePage;




        function init() {
            pageService
                .findAllPagesForWebsite(model.websiteId)
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

        function updatePage(page) {
            pageService.updatePage(model.pageId, page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
     function backToPageFromEdit()
        {
           $location.url("/user/" + model.userId + "/website/" + model.websiteId +"/page");
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