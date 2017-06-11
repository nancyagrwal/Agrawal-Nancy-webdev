(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteListController', websiteListController);
    
    function websiteListController($routeParams,
                                   websiteService, $location) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.fetchUser = fetchUser;
        model.newWebsite = newWebsite;
        model.fetchPages = fetchPages;
        model.backToWebsites = backToWebsites;

        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderWebsites);
        }
        init();

        function renderWebsites (websites) {
            model.websites = websites;
        }

        function fetchUser()
        {
            $location.url("/user/"+ model.userId);
        }

        function newWebsite()
        {
            $location.url("/user/"+ model.userId +"/website/new");
        }

         function fetchPages(website)
        {
            $location.url("/user/"+ model.userId +"/website/" + website._id +"/page");
        }

         function backToWebsites(website)
        {
            $location.url("/user/"+ model.userId +"/website/" + website._id);
        }

    }
})();