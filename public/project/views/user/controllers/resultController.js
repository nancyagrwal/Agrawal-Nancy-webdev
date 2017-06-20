/**
 * Created by nancy on 6/7/2017.
 */

(function () {
        angular
            .module('Travelator')
            .controller('dataController', dataController);


         function dataController(currentLoggedInUser,$location,
                                $routeParams,
                                searchServices) {
            var model = this;
            model.userId = currentLoggedInUser._id;
            model.user = currentLoggedInUser;
           // model.userId = $routeParams['userId'];
            model.searchOfferData =searchOfferData;


            // model.user = userService.findUserById(model.userId);
            /* function init(){
             searchServices
             .findAllData(model.userId)
             .then(renderData);
             }
             init();*/

            function searchOfferData(userId, criteria)
            {
                searchServices
                    .findAllData(model.userId,criteria)
                    .then(renderData);
            }

            function renderData(response){
                model.searchData=response;
            }

            model.goBackToProfile = goBackToProfile;
            function goBackToProfile()
            {
                $location.url("/profile");
            }


        }
    }
)();



