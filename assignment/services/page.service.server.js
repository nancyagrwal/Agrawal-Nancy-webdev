
module.exports = function(app, model) {
    var pageModel = model.pageModel;

    /*
     var pages = [
     {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
     {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Epsum"},
     {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"},
     {"_id": "123", "name": "Post 1", "websiteId": "567", "description": "Lorem"},
     {"_id": "432", "name": "Post 2", "websiteId": "567", "description": "Epsum"},
     {"_id": "543", "name": "Post 3", "websiteId": "567", "description": "Lorem"},
     {"_id": "123", "name": "Post 4", "websiteId": "456", "description": "Epaum"}
     ];
     */


    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);


    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        model
            .pageModel
            .createPage(websiteId, page)
            .then(function (page) {
                res.send(page)
            }, function (error) {
                res.sendStatus(400);
            });


        /* page.websiteId = websiteId;
         pages.push(page);
         return res.json(pages);*/
    }


    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .pageModel
            .findAllPagesForWebsite(websiteId)
            .then(function (pages) {
                    res.send(pages)
                },
                function (error) {
                    res.sendStatus(404);
                });
        /* var pagesList = [];
         for (var p in pages) {
         if (pages[p].websiteId == req.params.websiteId) {
         pagesList.push(pages[p]);
         }
         }
         res.json(pagesList);
         return;*/
    }

    function findPageById(req, res) {
        pageId = req.params.pageId;
        model
            .pageModel
            .findPageById(pageId)
            .then(function (page) {
                res.send(page);
            }, function (error) {
                res.sendStatus(404);
            });

        /*for (var p in pages) {

         if (pages[p]._id == pageId) {

         res.send(pages[p]);
         return;
         }
         }
         return res.sendStatus(404);*/
    }


    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        model
            .pageModel
            .updatePage(pageId, page)
            .then(function (resp) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(400);
            });
        /*for (var p in pages) {
         if (pages[p]._id == pageId) {
         pages[p] = page;
         res.send(pages[p]);
         return;
         }
         }
         res.sendStatus(404);*/
    }


    function deletePage(req, res) {
        var pageId = req.params.pageId;

        model
            .pageModel
            .deletePage(pageId)
            .then(function (resp) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(400);
            });

        /*for (var p in pages) {
         if (pages[p]._id == pageId) {
         pages.splice(p, 1);
         res.send(pages);
         return;
         }
         }
         return res.sendStatus(404);
         }*/
    }
}