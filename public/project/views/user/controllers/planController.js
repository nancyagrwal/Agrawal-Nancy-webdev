(function () {
    angular
        .module('Travelator')
        .controller('planController', planController);

    function planController($location,
                               $routeParams,
                            searchServices) {
        var model = this;
        model.findFlightsFromTo = findFlightsFromTo;
        model.placePlan = placePlan;
        model.userId = $routeParams['userId'];
        // model.user = userService.findUserById(model.userId);
        function init() {
            //alert(model.userId);
            searchServices.findAllCities(model.userId)
                .then(renderCities);
   }

        init();
        function renderCities(response) {
            // alert(response);
            model.cities = response;

        }

        function findFlightsFromTo(from, to, arrival, departure) {
            // alert('ok');
            searchServices.findFlightsFromTo(from, to, arrival, departure).then(function (flightData) {
                console.log(flightData);
                model.offerData = flightData;
                // alert(model.offerData);
            });
        }

        function placePlan(validFromDate,validTillDate,offerId,fromCity,toCity,departureDate,returnDate,realFare,discountedFare,userId)
             {

           /* if (offerId === null || offerId === '' || typeof offerId === 'undefined') {
                model.error = 'offerId is required';
                return;
            }

            if (fromCity === '' || fromCity === null || typeof fromCity === 'undefined') {
                model.error = "fromCity is required";
                return;
            }

            if (toCity === null || typeof toCity === 'undefined' || toCity === '') {
                model.error = "toCity is required";
                return;
            }*/

           /* if (departureDate === '' || departureDate === null || typeof departureDate === 'undefined') {
                model.error = "departure is required";
                return;
            }

            if (returnDate === null || typeof returnDate === 'undefined' || returnDate === '') {
                model.error = "returnDate is required";
                return;
            }*/

            searchServices
                .findPlan(validFromDate,validTillDate,offerId,fromCity,toCity,departureDate,returnDate,realFare,discountedFare,model.userId)
                .then(
                    function () {
                        model.error = "sorry, Plan already Exists";
                    },
                    function () {
                        var newPlan = {

                            offerId: offerId,
                            fromCity: fromCity,
                            toCity: toCity,
                            departureDate: departureDate,
                            returnDate: returnDate,
                            validFromDate:validFromDate,
                            validTillDate:validTillDate,
                            realFare:realFare,
                            discountedFare:discountedFare

                        };
                        return searchServices
                            .placePlan(newPlan,model.userId);
                    }
                )
                .then(function (plan) {
                    $location.url('/user/' + model.userId + "/makePlan/");
                });


            /*function placePlan(offerId,fromCity,toCity,departure,returnDate){
             model.offerId='';
             model.fromCity='';
             model.toCity='';
             model.departureDate='';
             model.returnDate='';
             model.discount=0;
             }
             */
        }
    }
})();