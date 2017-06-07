/**
 * Created by nancy on 6/7/2017.
 */

(function() {
    angular
        .module('Travelator')
        .factory('searchServices', searchServices);

    function searchServices($http) {


        var api = {
            findFlights: findFlights,
            findAllThemesForUser: findAllThemesForUser,
            findAllAirportsForUser: findAllAirportsForUser
        };
        return api;

        function findFlights(depDate, arrDate, budget, location, theme) {
            var url = "/api/project/user";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllThemesForUser(){
        var url = "/api/project/user";
        return $http.get(url)
            .then(function (response) {
                return response.data;
            });

    }

        function findAllAirportsForUser(){
            var url = "/api/project/user";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }

    }
}
)();


