(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteNewController', websiteNewController);
    
    function websiteNewController(currentUser,$routeParams,
                                   $location,
                                   websiteService) {
        var model = this;
        model.userId = currentUser._id;
        model.user = currentUser;
       // model.userId = $routeParams['userId'];
        model.createWebsite = createWebsite;
        model.backToWebsites = backToWebsites;
        model.newWebsite = newWebsite;
        model.goBack= goBack;
        model.fetchPages = fetchPages;

        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderWebsites);

        }
        init();


        function renderWebsites (websites) {
            model.websites = websites;
        }


        function createWebsite(website) {

            if(website === null || typeof website === 'undefined') {
                model.error = 'Website name and description is required.';
                return;
            }

            if(website.name === null || website.name === '' || typeof website.name === 'undefined') {
                model.error = 'Website name is required.';
                return;
            }

            if(website.description === null || website.description === '' || typeof website.description === 'undefined') {
                model.error = 'Website description is required.';
                return;
            }

            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/website');
        }

               function newWebsite()
        {
            $location.url("/user/website/new");
        }

        function fetchPages(website)
        {
            $location.url("/user/"+ model.userId +"/website/" + website._id +"/page");
        }

        function goBack()
        {
            $location.url("/user/website")
        }

        function backToWebsites(website)
        {
            $location.url("/user/website/" + website._id);
        }



    }
})();