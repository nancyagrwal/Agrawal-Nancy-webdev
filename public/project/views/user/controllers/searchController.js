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
       // model.searchFlight = searchFlight;



        function init() {
            searchServices
                .findAllAirportsForUser(model.userId)
                .then(renderTheAirports);

            searchServices
                .findAllThemesForUser(model.userId)
        .then(renderTheThemes);

        }

        init();

        function renderTheThemes(themes) {
            model.themes = themes;
        }

        function renderTheAirports(airports) {
            model.airports = airports;
        }


       /* function searchFlight(depDate, arrDate, budget, location, theme) {

            if (depDate === null || depDate === '' || typeof depDate === 'undefined') {
                model.error = 'Please enter Departure Date!';
                return;
            }

            if (arrDate === null || arrDate === '' || typeof arrDate === 'undefined') {
                model.error = "Please enter Arrival Date!";
                return;
            }

            searchServices
                .findFlights(depDate, arrDate, budget, location, theme)
                .then(function (found) {
                    if (found !== null) {
                        model.showDat = false;
                        model.data = found;
                      //  $location.url('/user/' + found._id);
                    } else {
                        model.message = "sorry";
                    }
                });
        }*/
    }
}
)();



