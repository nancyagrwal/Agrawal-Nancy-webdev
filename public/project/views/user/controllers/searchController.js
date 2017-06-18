/**
 * Created by nancy on 6/7/2017.
 */

(function () {
    angular
        .module('Travelator')
        .controller('searchController', searchController)
        .controller('offerController', offerController)
        .controller('planController', planController);

    function searchController(currentLoggedInUser,$location, searchServices,$routeParams) {

        var model = this;
        model.userId = currentLoggedInUser._id;
        model.user = currentLoggedInUser;
       // model.userId = $routeParams['userId'];
        model.selectTheme = selectTheme;
        model.goBackToProfile = goBackToProfile;
        model.searchThemes= searchThemes;
        model.searchFlights = searchFlights;
        model.setHideShow = setHideShow;
        var airLineData=[];


         function init() {
            /*searchServices
                .findAllAirportsForUser(model.userId)
                .then(renderTheAirports);
*/

            searchServices
                .findAllThemesForUser(model.userId)
                .then(renderTheThemes);

            searchServices
                .findAirlineData(model.userId)
                .then(function(response){

                });
             searchServices
                 .findAllCitiesUS(model.userId)
                 .then(function(response){

                 });

        }

        init();

        function renderTheThemes(response) {
            model.themes = response[0];
            model.airports = response[1];
        }

       /* function renderTheAirports(airports) {
            model.airports = airports;
        }*/


        function selectTheme(theme)
        {
           // console.log(theme);
            model.theme = theme;
        }

        function goBackToProfile()
        {
            $location.url("/profile");
        }


        //simple flight search:
        function searchFlights(location,toCity,departureDate,returnDate,userId)
        {
            if (toCity === null || toCity === '' || typeof toCity === 'undefined') {
                model.error = 'Destination city is required';
                return;
            }

            if (location === '' || location === null || typeof location === 'undefined') {
                model.error = "flying From is required";
                return;
            }

            if (departureDate === '' || departureDate === null || typeof departureDate === 'undefined') {
                model.error = "correct departure is required";
                return;
            }

            if (returnDate === null || typeof returnDate === 'undefined' || returnDate === '') {
                model.error = "correct returnDate is required";
                return;
            }

            searchServices
                .searchFlights(location, toCity, departureDate , returnDate, model.userId)
                .then(function (found) {
                    if (found !== null) {

                        model.simpleData = found;
                        model.showFlightDiv=true;

                        model.showThemeDiv=false;

                        //   $location.url('/user/:userId/search/results');
                    } else {
                        model.message = "Please change your options!";
                    }
                });
        }


        // for theme based search
            function searchThemes(budget, location, departureDate, returnDate, theme , userId) {
            if (budget === null || budget === '' || typeof budget === 'undefined') {
                model.error = 'budget is required';
                return;
            }

            if (location === '' || location === null || typeof location === 'undefined') {
                model.error = "flying From is required";
                return;
            }

           if (departureDate === '' || departureDate === null || typeof departureDate === 'undefined') {
                model.error = "correct departure is required";
                return;
            }

            if (returnDate === null || typeof returnDate === 'undefined' || returnDate === '') {
                model.error = "correct returnDate is required";
                return;
            }

                if (theme === null || typeof theme === 'undefined' || theme === '') {
                    model.error = "theme is required";
                    return;
                }


            searchServices
                .searchThemes(budget, location, departureDate , returnDate,  theme, model.userId)
                .then(function (flightData) {
                    if (flightData !== null) {

                        model.data = flightData;
                        model.showThemeDiv=true;
                        model.showFlightDiv=false;
                     //   $location.url('/user/:userId/search/results');
                    } else {
                        model.message = "Please change your options!";
                    }
                });
        }

        function setHideShow()
        {
            model.showSwitch = true;
            model.showBudget=true;
            model.showFlyingTo= true;
            model.showTheme = true;
            model.showFlightSearchButton = true;
            model.showThemeSearchButton = true;

        }
   }


        function offerController(currentLoggedInUser,$location,
                                 $routeParams,
                                 searchServices) {
            var model = this;
            model.userId = currentLoggedInUser._id;
            model.user = currentLoggedInUser;
           // model.userId = $routeParams['userId'];

            function init(){
                searchServices
                    .findAirlineData();
                searchServices
                    .findAllCitiesUS();

                searchServices
                    .findAllOffers(model.userId)
                    .then(renderOffer);
            }
            init();
            function renderOffer(response){
                var offers=response;
                model.plans=response;
            }

            model.goBackToProfile = goBackToProfile;
            function goBackToProfile()
            {
                $location.url("/profile");
            }
        }


        function planController(currentLoggedInUser,$location,
                                $routeParams,
                                searchServices, ClientSideServices) {
            var model = this;
            model.searchFlights = searchFlights;
            model.placePlan = placePlan;
            model.userId = currentLoggedInUser._id;
            model.user = currentLoggedInUser;
            //model.userId = $routeParams['userId'];
            model.goBackToProfile = goBackToProfile;
            model.fetchFare=fetchFare;
            model.offerDiscount=offerDiscount;
            var cityData=[];
            var airLines='';

            function init() {
                //alert(model.userId);
                searchServices.findAllCities(model.userId)
                    .then(renderCities);

                searchServices.findAllCitiesUS(model.userId)
                    .then(function (response) {
                        cityData=response;
                    });
            }

            init();
            function renderCities(response) {
                // alert(response);
                model.cities = response;

            }

            function searchFlights(from, to, arrival, departure,userId) {
                // alert('ok');
                searchServices.searchFlights(from, to, arrival, departure,model.userId).then(function (flightData) {

                    model.offerData = flightData;
                    // alert(model.offerData);
                });
            }
            function fetchFare(plans){
                for(var u in plans){
                    if(plans[u].bookingList === model.offerId){
                        model.realFare=plans[u].faresDetails.baseFare;
                        airLines=plans[u].tripData.carrierCode;

                    }
                }

            }
            function  offerDiscount(discount,fare) {
                var discounted=(discount /100)*fare;
                model.discountedFare=fare-discounted;
                
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
                        .findPlan(validFromDate, validTillDate, offerId, fromCity, toCity, departureDate, returnDate, realFare, discountedFare, model.userId,model.user.username,airLines)
                        .then(
                            function (response) {
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
                                    offeredBy: model.user.username,
                                    airLines:airLines
                                };

                                return searchServices
                                    .placePlan(newPlan, model.userId)
                                    .then(function (plan) {
                                        model.message = "Plan Created!";
                                        //    $location.url('/user/' + model.userId);
                                    });
                            }
                        );

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
                $location.url("/profile");
            }
        }

}
)();



