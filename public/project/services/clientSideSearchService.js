/**
 * Created by nancy on 6/7/2017.
 */

(function() {
    angular
        .module('Travelator')
        .factory('searchServices', searchServices);

    function searchServices($http) {


        var api = {
           // findFlights: findFlights,
            findAllThemesForUser: findAllThemesForUser,
            findAllAirportsForUser: findAllAirportsForUser
        };
        return api;

        /*function findFlights(depDate, arrDate, budget, location, theme,userId) {
            var url = "/api/project/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }*/

        function findAllThemesForUser(userId){
        var url = "/api/project/user/" + userId + "/search";
        return $http.get(url)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            });

    }

        function findAllAirportsForUser(userId){
            var url = "/api/project/user/" + userId + "/search";
            return $http.get(url)
                .then(function (response) {
                    console.log("airport data is..." + response.data);
                    return response.data;
                });

        }

    }
}
)();


