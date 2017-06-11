(function () {
    angular
        .module('WebAppMaker')
        .service('pageService', pageService);

    function pageService($http) {
        this.createPage = createPage;
        this.findAllPagesForWebsite = findAllPagesForWebsite;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;
        this.findPageByWebsiteId= findPageByWebsiteId;

        /*var pages = [
         { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Post 1 title" },
         { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Post 2 title" },
         { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Post 3 title" }
         ];*/

        function createPage(page,websiteId) {
            var url = '/api/website/' + websiteId + '/page';
            return $http.post(url, page)
                .then(function (response) {
                    return response.data;
                });
        }

        function findPageByWebsiteId(websiteId) {
            var url = "/api/website/" + websiteId + "/page";
            return $http.get(url)
                .then(function (response) {
                    // console.log(response);
                    return response.data;
                });
        }

        function findAllPagesForWebsite(websiteId) {

            var url = '/api/website/' + websiteId + '/page';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }



        function findPageById(pageId) {
            var url = '/api/page/' + pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updatePage(pageId, page) {
            var url = '/api/page/'+ pageId;
            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                });
        }


        function deletePage(pageId) {
            var url = '/api/page/' + pageId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();