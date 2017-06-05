(function () {
    angular
        .module('WebAppMaker')
        .service('websiteService', websiteService);

    function websiteService($http) {
        this.createWebsite = createWebsite;
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        /*var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Facebook Description" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Tweeter Description" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Gizmodo Description" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Go Description" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Tic Tac Toe Description" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Checkers Description" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Chess Description" }
        ];
*/
        function createWebsite(userId, website) {
            var url = '/api/user/' + userId +'/website';
            return $http.post(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllWebsitesForUser(userId) {
            var url = '/api/user/'+ userId +'/website';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }



})();