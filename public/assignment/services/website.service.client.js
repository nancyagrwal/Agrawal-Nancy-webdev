(function () {
    angular
        .module('WebAppMaker')
        .service('websiteService', websiteService);

    function websiteService($http) {
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.createWebsite = createWebsite;
        this.deleteWebsite = deleteWebsite;
        this.updateWebsite = updateWebsite;



        function updateWebsite(websiteId, websites) {
            var url = "/api/assignment/website/" + websiteId;
            return $http.put(url, websites)
                .then(function (response) {
                    return response.data;

                })
        }


       function deleteWebsite(websiteId) {
            var url = "/api/assignment/website/" + websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }


       function findWebsiteById(websiteId) {
            // console.log("website client " + websiteId);
            var url = "/api/assignment/website/" + websiteId;
            return $http.get(url)
                .then(function (response) {
                    // console.log("website client RESPONSE " + response);
                    return response.data;
                });
        }


        function findAllWebsitesForUser(userId) {
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }


        function createWebsite(website) {
            var url = "/api/assignment/user/" + website.developerId + "/website";
            return $http.post(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

    }
})();