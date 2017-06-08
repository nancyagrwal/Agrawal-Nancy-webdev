/**
 * Created by nancy on 6/7/2017.
 */

(function () {
        angular
            .module('Travelator')
            .controller('resultController', resultController);

        function resultController($location, searchServices,$routeParams) {

            var model = this;
            model.userId = $routeParams['userId'];

            function init() {
               searchServices
                            .searchFlight(model.userId)
                            .then(function (found) {
                                  if (found !== null) {
                                      console.log(found)
                                    model.data = found;
                                    $location.url('/user/:userId/search/results');
                                } else {
                                    model.message = "Please work on your options!";
                                }
                            });
                   }

            init();


        }
    }
)();



