/**
 * Created by nancy on 6/7/2017.
 */

(function () {
        angular
            .module('Travelator')
            .controller('dataController', dataController)
            .controller('resultController', resultController);

        function resultController($location, searchServices,$routeParams) {

            var model = this;
            model.userId = $routeParams['userId'];
            model.goBackToSearch = goBackToSearch;

            function init() {
               searchServices
                            .searchFlights(model.userId)
                            .then(function (found) {
                                  if (found !== null) {

                                    model.data = found;
                                    $location.url('/user/:userId/search/results');
                                } else {
                                    model.message = "Please work on your options!";
                                }
                            });
                   }

            init();

            function goBackToSearch()
            {
                $location.url("/user/"+ model.userId +"/search");
            }

        }

        function dataController(currentLoggedInUser,$location,
                                $routeParams,
                                searchServices) {
            var model = this;
            model.userId = currentLoggedInUser._id;
            model.user = currentLoggedInUser;
           // model.userId = $routeParams['userId'];
            model.searchData =searchData;


            // model.user = userService.findUserById(model.userId);
            /* function init(){
             searchServices
             .findAllData(model.userId)
             .then(renderData);
             }
             init();*/

            function searchData(userId, criteria)
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



