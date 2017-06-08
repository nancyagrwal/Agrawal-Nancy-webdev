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


        function selectTheme(theme)
        {
            model.theme = theme;
        }


    }
}
)();



