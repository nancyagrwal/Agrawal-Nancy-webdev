(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.updateWebsiteDetails = {};
        model.deleteWebsite = deleteWebsite;
        model.updateWebsite = updateWebsite;


        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderWebsites);


            websiteService
                .findWebsiteById(model.websiteId)
                .then(function displayWebsiteContentForEdit(response) {
                    model.updateWebsiteDetails.name = response.name;
                    model.updateWebsiteDetails.description = response.description;
                });
        }
        init();

        function renderWebsites(websites) {
            model.websites = websites;
        }





        function updateWebsite() {
            for(var v in model.websites){
                if (model.websites[v]._id === model.websiteId){
                   model.websites[v].name = model.updateWebsiteDetails.name;
                    model.websites[v].description = model.updateWebsiteDetails.description;

                }
            }
            websiteService
                .updateWebsite(model.websiteId, model.websites)
                .then(function () {
                    model.message = "Website update was successful";
                });
        }


       function deleteWebsite(websiteId) {
            websiteService
                .deleteWebsite(websiteId)
                .then(function () {
                    $location.url('/user/'+model.userId+'/website');
                });
        }

    }
})();