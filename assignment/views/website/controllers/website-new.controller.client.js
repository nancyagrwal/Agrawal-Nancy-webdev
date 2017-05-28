(function () {
    angular
        .module('WAM')
        .controller('websiteNewController', websiteNewController);
    
    function websiteNewController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.createWebsite = createWebsite;
        model.newWebsite = newWebsite();
        model.profile = profile();
        model.openWebsite = openWebsite;
        model.editWebsite= editWebsite;
        model.back = back;


        function init() {
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
        }
        init();

        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/'+model.userId+'/website');
        }
        function profile() {
            $location.url("/user/"+vm.userId);
        }

        function newWebsite() {
            $location.url("/user/"+ vm.userId + "/website/new");
        }

        function openWebsite(website) {
            $location.url("/user/"+ vm.userId + "/website/"+website._id + "/page");
        }
        function editWebsite(website) {
            $location.url("/user/"+ vm.userId +"/website/"+website._id);
        }

        function back() {
            $location.url("/user/"+vm.userId);
        }

    }
})();