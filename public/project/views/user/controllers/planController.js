(function () {
    angular
        .module('Travelator')
        .controller('planController', planController);

    function planController($location,
                               $routeParams,
                            searchServices, ClientSideServices) {
        var model = this;
        model.searchFlights = searchFlights;
        model.placePlan = placePlan;
        model.userId = $routeParams['userId'];
        model.goBackToProfile = goBackToProfile;

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

        function searchFlights(from, to, arrival, departure) {
            // alert('ok');
            searchServices.searchFlights(from, to, arrival, departure).then(function (flightData) {
               // console.log(flightData);
                model.offerData = flightData;
                // alert(model.offerData);
            });
        }

        function placePlan(validFromDate,validTillDate,offerId,fromCity,toCity,departureDate,returnDate,realFare,discountedFare,userId)
             {

            /*if (offerId === null || offerId === '' || typeof offerId === 'undefined') {
                model.error = 'Select the airline!';
                return;
            }
*/
            if (fromCity === '' || fromCity === null || typeof fromCity === 'undefined') {
                model.error = "Flying from  is required";
                return;
            }

            if (toCity === null || typeof toCity === 'undefined' || toCity === '') {
                model.error = "flying to is required";
                return;
            }

            if (departureDate === '' || departureDate === null || typeof departureDate === 'undefined') {
                model.error = "correct departure date is required";
                return;
            }

            if (returnDate === null || typeof returnDate === 'undefined' || returnDate === '') {
                model.error = "correct return Date is required";
                return;
            }

            ClientSideServices
                     .findUserById(model.userId)
                     .then(renderUser);


                 function renderUser (user) {
                     model.user = user;


                     searchServices
                         .findPlan(validFromDate, validTillDate, offerId, fromCity, toCity, departureDate, returnDate, realFare, discountedFare, model.userId)
                         .then(
                             function () {
                                 model.error = "sorry, Plan already Exists";
                             },
                             function () {
                                 var newPlan = {

                                     offerId: offerId,
                                     realFare: realFare,
                                     discountedFare: discountedFare,
                                     validFromDate: validFromDate,
                                     validTillDate: validTillDate,
                                     fromCity: fromCity,
                                     toCity: toCity,
                                     departureDate: departureDate,
                                     returnDate: returnDate,
                                     offeredBy: model.user.username
                                 };

                                 return searchServices
                                     .placePlan(newPlan, model.userId);
                             }
                         )
                         .then(function (plan) {
                             model.message = "Plan Created!";
                             //    $location.url('/user/' + model.userId);
                         });

                 }

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


            function goBackToProfile()
        {
            $location.url("/user/"+ model.userId);
        }
    }
})();