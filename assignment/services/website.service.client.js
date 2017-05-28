(function () {
    angular
        .module('WAM')
        .service('websiteService', websiteService);
    
    function websiteService() {

        this.findWebsiteByUser = findWebsiteByUser;
        this.findWebsiteById = findWebsiteById;
        this.deleteWebsite = deleteWebsite;
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            findWebsitesByUser : findWebsiteByUser,
        findWebsiteById : findWebsiteById,
        deleteWebsite : deleteWebsite,
        createWebsite : createWebsite,
        updateWebsite : updateWebsite,
        deleteWebsite : deleteWebsite
        };

        var websiteURL = "/api/website/";
        var userURL = "/api/user/";

        return api;

        function createWebsite(userId,website) {
            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            websites.push(website);
        }

        function deleteWebsite(websiteId) {
            var website = findWebsiteById(websiteId);
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }
        
        function findWebsiteById(websiteId) {
            for(var v in websites) {
                if(websites[v]._id === websiteId)
                    return websites[v];}
            return null;
        }

        function findWebsitesByUser(userId) {
            for(var v in websites) {
                if(websites[v].developerId === userId)
                    return websites[v];}
            return null;
        }

        function updateWebsite(websiteId, website) {

            for (var v in websites) {
                if (websites[v]._id === websiteId)
                    websites[v] = website;
            }
        }

        function deleteWebsite(websiteId) {

            var website = findWebsiteById(websiteId);
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }

    }
})();