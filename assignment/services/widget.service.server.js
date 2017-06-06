var app = require('../../express');


var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../public/assignment/uploads'});

app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.post('/api/assignment/page/:pageId/widget', createWidget);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/widget/:widgetId', deleteWidget);
app.post ("/api/assignment/upload", upload.single('myFile'), uploadImage);

var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var resultSet = [];
    for( var w in widgets){
        if (widgets[w].pageId === pageId) {
            resultSet.push(widgets[w]);
        }
    }
    if(resultSet){
        res.json(resultSet);
        return;
    }
    res.sendStatus(404);

}

function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    if (widget){
        res.json(widget);
        return;
    }
    res.sendStatus(404);
}

function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget._id  = (new Date()).getTime() + "";
    widget.pageId = pageId;
    widgets.push(widget);
    res.send(widget);
}

function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for(var w in widgets){
        if (widgets[w]._id == widgetId){
            widgets[w] = widget;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    var index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.sendStatus(200);
}

function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    console.log(myFile);
    //widget = getWidgetById(widgetId);
    var widget = null;
    for(var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widget=widgets[w];
            break;
        }
    }
    widget.url = '/assignment/uploads/'+filename;
    var callbackUrl   = "/assignment/index.html#!/user/" + userId + "/website/" + websiteId + "/page/"
        + pageId + "/widget/" + widgetId;
    res.redirect(callbackUrl);
}