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
        model.searchThemes= searchThemes;
        model.searchFlights = searchFlights;
        model.setHideShow = setHideShow;


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
           // console.log(theme);
            model.theme = theme;
        }

        function goBackToProfile()
        {
            $location.url("/user/"+ model.userId);
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
                        //  console.log(found);
                        model.simpleData = found;
                        model.showFlightDiv=true;
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
                        //  console.log(found);
                        model.data = flightData;
                        model.showThemeDiv=true;
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
}
)();



