(function () {
    angular
        .module('WAM')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams.websiteId;
        model.deleteWebsite = deleteWebsite;
        model.newWebsite = newWebsite();
        model.profile = profile();
        model.openWebsite = openWebsite;
        model.editWebsite= editWebsite;
        model.back = back;

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
            model.website = websiteService.findWebsiteById(model.websiteId);
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

        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url('/user/'+model.userId+'/website');
        }

        function updateWebsite(websiteId,website) {
            websiteService.updateWebsite(websiteId,website);
            $location.url('/user/'+model.userId+'/website');
        }

    }
})();