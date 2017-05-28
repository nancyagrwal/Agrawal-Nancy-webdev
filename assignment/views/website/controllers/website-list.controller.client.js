(function () {
    angular
        .module('WAM')
        .controller('websiteListController', websiteListController);
    
    function websiteListController($routeParams, websiteService) {
        var model = this;
        model.profile = profile();
        model.newWebsite = newWebsite();
        model.openWebsite = openWebsite;
        model.editWebsite= editWebsite;
        model.back = back;


        model.userId = $routeParams['userId'];

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
        }
        init();

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