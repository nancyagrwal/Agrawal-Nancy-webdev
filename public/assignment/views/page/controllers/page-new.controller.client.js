(function () {
    angular
        .module('WebAppMaker')
        .controller('pageNewController', pageNewController);
    
    function pageNewController($routeParams,
                               $location,
                               pageService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.createPage = createPage;
        model.backToPageFromNew = backToPageFromNew;
        model.newPage = newPage;
        model.goToWidgets = goToWidgets;
        model.backToPage = backToPage;



        function init() {
            pageService
                .findAllPagesForWebsite(model.websiteId)
                .then(renderPages);

        }
        init();
        function renderPages (pages) {
            model.pages = pages;
        }

        /*  function threeDigitRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }*/



        function createPage(page) {
           /* var page = {
                _id: threeDigitRandomNum(100,1000),
                name: name,
                description: title
            };
*/

            pageService
                .createPage(page,model.websiteId)
                .then(function (response) {
                    console.log(response);
                    if (response) {
                        $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
                    }
                    else {
                        model.error = "Page not created!!"
                    }
                });
        }// End of function createPage



        function backToPageFromNew()
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