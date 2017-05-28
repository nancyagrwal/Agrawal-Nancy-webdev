
(function() {
    angular
        .module("WAM")
        .service("pageService", PageService);

    function pageService($http) {

        var pages =
            [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ];

        var api = {
            createPage: createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        var websiteURL = "/api/website/";
        var pageURL = "/api/page/";

        return api;

        function createPage(websiteId, page) {
            pages._id = (new Date()).getTime() + "";
            pages.websiteId = websiteId;
            pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            for(var u in pages) {
                if(pages[u].websiteId === websiteId)
                    return pages[u];
            }
            return null;

        }

        function findPageById(pageId) {
            for(var u in pages) {
                if(pages[u]._id === pageId)
                    return pages[u];
            }
            return null;
        }

        function updatePage(pageId, page) {

            for(var u in pages) {
                if(pages[u]._id === pageId)
                     pages[u] = page;
            }
            }

        function deletePage(pageId) {
            var page = findPageById(pageId);
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }
    }
})();
