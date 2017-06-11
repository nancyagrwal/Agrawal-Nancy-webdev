module.exports = function(app, model) {
    var websiteModel = model.websiteModel;

    /*
     var websites = [
     {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
     {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
     {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
     {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
     {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
     {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
     {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
     ];*/

    app.get('/api/website/:websiteId', findWebsiteById);
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.post('/api/user/:userId/website', createWebsite);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);


    function updateWebsite(req, res) {
        var website = req.body;
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .updateWebsite(websiteId, website)
            .then(function (resp) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(404);
            });

        /*for (var u in websites) {
            if (websites[u]._id === req.params.websiteId) {
                for (var v in website) {
                    if (website[v]._id === req.params.websiteId) {

                        websites[u] = website[v];
                        res.sendStatus(200);
                        return;
                    }
                }
            }
        }
        res.sendStatus(404);*/
    }


    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .deleteWebsite(websiteId)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );


      /*  for (var w in websites) {
            if (websites[w]._id === websiteId) {
                websites.splice(w, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);*/
    }


    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(
                function (websites) {
                    res.send(websites);
                },
                function (error) {
                    res.sendStatus(404);
                }
            );

        /* for (var v in websites) {
            if (websites[v]._id === websiteId) {
                res.send(websites[v]);
                return;
            }
        }
        res.sendStatus(404);*/
    }


    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;
        model
            .websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function (websites) {
                    res.send(websites);
                },
                function (error) {
                    res.sendStatus(404);
                }
            );

       /* var results = [];
        for (var v in websites) {
            if (websites[v].developerId === req.params.userId) {
                results.push(websites[v]);
            }
        }
        res.json(results);*/
    }


    function createWebsite(req, res) {
        var website = req.body;
        var userId = req.params.userId;
        model
            .websiteModel
            .createWebsite(userId, website)
            .then(
                function (newWebsite) {
                    res.send(newWebsite);
                },
                function (error) {
                    res.sendStatus(400);
                }
            );


       /* website._id = (new Date()).getTime() + "";
        websites.push(website);
        res.json(website);*/
    }
}