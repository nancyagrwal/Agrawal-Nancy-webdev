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


    }
}
)();



