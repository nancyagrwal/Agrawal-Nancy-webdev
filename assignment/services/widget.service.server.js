module.exports = function(app, model) {
    var widgetModel = model.widgetModel;
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

    /*var widgets = [
     { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
     { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
     { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
     "url": "http://lorempixel.com/400/200/"},
     { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
     { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
     { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
     "url": "https://youtu.be/AM2Ivdi9c4E" },
     { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
     ];*/

    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.put("/api/page/:pageId/widget", reorderWidget);


    function createWidget(req, res) {

        var pageId = req.params['pageId'];
        var widget = req.body;
        model
            .widgetModel
            .createWidget(pageId, widget)
            .then(
                function (widget) {
                    res.send(widget);
                },
                function (error) {
                    console.log(error);
                    res.sendStatus(400);
                }
            );

       /* widget._id = (new Date().getTime()) + "";
        widget.pageId = pageId;
        widgets.push(widget);
        res.json(widget);*/
    }

    function findAllWidgetsForPage(req, res) {

        var pageId = req.params['pageId'];
        model
            .widgetModel
            .findAllWidgetsForPage(pageId)
            .then(
                function (widgets) {
                    res.send(widgets);
                }, function (error) {
                    res.sendStatus(404);
                }
            );
       /* var widget = [];
        for (var w in widgets) {
            if (widgets[w].pageId === pageId) {
                widget.push(widgets[w]);
            }
        }
        res.json(widget);*/
    }

    function findWidgetById(req, res) {

        var widgetId = req.params['widgetId'];
        model
            .widgetModel
            .findWidgetById(widgetId)
            .then(
                function (widget) {
                    res.send(widget);
                }, function (error) {
                    res.sendStatus(404);
                }
            );
        /*for (var w in widgets) {
            if (widgets[w]._id === widgetId) {
                res.json(widgets[w]);
                return;
            }
        }
        res.json(null);*/
    }

    function updateWidget(req, res) {

        var widgetId = req.params['widgetId'];
        var widget = req.body;
        model
            .widgetModel
            .updateWidget(widgetId, widget)
            .then(
                function (resp) {
                    res.send(resp);
                }, function (error) {
                    res.sendStatus(400);
                }
            );
        /*for (var w in widgets) {
            if (widgets[w]._id === widgetId) {
                widgets[w] = widget;
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);*/
    }

    function deleteWidget(req, res) {

        var widgetId = req.params['widgetId'];
        model
            .widgetModel
            .deleteWidget(widgetId)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );
       /* var index = -1;
        for (var w in widgets) {
            if (widgets[w]._id === widgetId) {
                index = w;
            }
        }
        if (index != -1) {
            widgets.splice(index, 1);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }*/

    }


    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        // var width = req.body.width;
        var myFile = req.file;
        // var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        // var path = myFile.path;         // full path of uploaded file
        // var destination = myFile.destination;  // folder where file is saved to
        // var size = myFile.size;
        // var mimeType = myFile.mimetype;
        var redirectURL = req.body.redirectURL;
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var url = '/assignment/#!/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + widgetId;
        var widget = {
            url: "/assignment/uploads/" + filename
        };
        model
            .widgetModel
            .updateWidget(widgetId, widget)
            .then(function (resp) {
                res.redirect(url);
            }, function (error) {
                res.sendStatus(400);
            });
    }

       function reorderWidget(req, res) {
        var startIndex = req.query['initial'];
        var stopIndex = req.query['final'];
        var pageId = req.params['pageId'];
        model
            .widgetModel
            .reorderWidgets(initial, final, pageId)
            .then(function (resp) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(400);
            });

       /* var initial_widgets = widgets;
        var wdgts = [];
        //widgets=wdgts;
        var index1 = 0;
        var index2 = 0;
        for (var w in widgets) {
            if (widgets[w].pageId === pageId) {
                wdgts.push(widgets[w]);
            }
        }

        var widget = wdgts[startIndex];
        wdgts.splice(startIndex, 1);
        wdgts1 = wdgts.slice(0, stopIndex);
        wdgts2 = wdgts.slice(stopIndex, wdgts.length);
        wdgts1.push(widget);
        wdgts1 = wdgts1.concat(wdgts2);
        var finalWidget = [];
        var index = 0;
        while (index2 < initial_widgets.length) {
            if (initial_widgets[index2] === wdgts1[index1]) {
                finalWidget[index++] = initial_widgets[index2];
                index1++;
                index2++;
            }
            else if (wdgts1.indexOf(initial_widgets[index2]) === -1) {
                finalWidget[index++] = initial_widgets[index2++];
            }
            else if (wdgts1.indexOf(initial_widgets[index2]) >= 0) {
                finalWidget[index++] = wdgts1[index1++];
                index2++;
            }
        }
        widgets = finalWidget;
        res.json(widgets);*/
    }

}