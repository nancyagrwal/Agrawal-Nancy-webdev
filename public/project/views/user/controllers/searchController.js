/**
 * Created by nancy on 6/7/2017.
 */

(function () {
    angular
        .module('Travelator')
        .controller('searchController', searchController);

    function searchController($location, searchServices,$routeParams) {

        var model = this;
        model.userId = $routeParams['userId'];
        model.selectTheme = selectTheme;
        model.goBackToProfile = goBackToProfile;
        model.searchFlight= searchFlight;

         function init() {
            /*searchServices
                .findAllAirportsForUser(model.userId)
                .then(renderTheAirports);
*/
            searchServices
                .findAllThemesForUser(model.userId)
                .then(renderTheThemes);

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
            model.theme = theme;
        }

        function goBackToProfile()
        {
            $location.url("/user/"+ model.userId);
        }

        function searchFlight(budget, location, departureDate, returnDate, theme , userId) {
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

            searchServices
                .findFlightsFromTo(location, "" , returnDate, departureDate)
                .then(function (flightData) {
                    if (flightData !== null) {
                        //  console.log(found);
                        model.data = flightData;
                        $location.url('/user/:userId/search/results');
                    } else {
                        model.message = "Please change your options!";
                    }
                });
        }
   }
}
)();



