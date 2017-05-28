
(function() {
    angular
        .module("WAM")
        .service("pageService", pageService);

    function pageService() {

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
            deletePage: deletePage,
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

            var results = [];

            for (var v in pages) {
                if (pages[v].websiteId === websiteId) {
                    pages[v].created = new Date();
                    pages[v].accessed = new Date();
                    results.push(pages[v]);
                }
            }

            return results;
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
