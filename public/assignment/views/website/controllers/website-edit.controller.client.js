(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController(currentUser, $routeParams,
                                   $location,
                                   websiteService) {
        var model = this;
        model.userId = currentUser._id;
        model.user = currentUser;
        //model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.deleteWebsite = deleteWebsite;
        model.updateWebsite = updateWebsite;


        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(function (response) {
                    model.websites = response.data;
                }, function (error) {
                    console.log("Error: Unable to find websites for user");
                });
            websiteService
                .findWebsiteById(model.websiteId)
                .then(function (response) {
                    model.website = response.data;
                }, function (error) {
                    console.log("Error: Unable to find website for user");
                });
        }
        init();

      /*  function renderWebsites(websites) {
            model.websites = websites;
        }
*/


        function updateWebsite(website) {
          /*  for(var v in model.websites){
                if (model.websites[v]._id === model.websiteId){
                   model.websites[v].name = model.updateWebsiteDetails.name;
                    model.websites[v].description = model.updateWebsiteDetails.description;

                }
            }*/
            websiteService
                .updateWebsite(model.websiteId, website)
                .then(function (response) {
                    $location.url("/user/website");
                }, function (error) {
                    console.log("Error: Unable to update website");
                });
        }


       function deleteWebsite(websiteId) {
            websiteService
                .deleteWebsite(websiteId)
                .then(function () {
                    $location.url('/user/website');
                });
        }

        model.profile = profile;
        model.newWebsite = newWebsite;
        model.openWebsite = openWebsite;
        model.editWebsite = editWebsite;
        model.back=back;

        function profile() {
            $location.url("/profile");
        }

        function newWebsite() {
            $location.url("/user/website/new");
        }

        function openWebsite(website) {
            $location.url("/user/website/"+website._id + "/page");
        }
        function editWebsite(website) {
            $location.url("/user/website/"+website._id);
        }

        function back() {
            $location.url("/user/website/");
        }



    }
})();