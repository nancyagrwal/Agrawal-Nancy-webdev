(function(){
    angular
        .module('WebAppMaker')
        .factory('widgetService', widgetService); // It uses factory design pattern

    function widgetService () {

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

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget : updateWidget,
            deleteWidget : deleteWidget
        };
        return api;

        function createWidget (pageId, widget) {
            widget._id = (new Date()).getTime() + "";
            widget.created = new Date();
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }

        function findWidgetsByPageId (pageId) {
            var results = [];
            for(var w in widgets) {
                if(widgets [w].pageId === pageId) {
                    results.push(widgets [w]);
                }
            }
            return results;
        }

        function findWidgetById(widgetId) {
            for(var w in widgets ) {
                if(widgets [w]._id === widgetId)
                    return widgets [w];
            }
            return null;
        }

        function updateWidget (widgetId, widget) {
            for(var u in widgets) {
                if(widgets[u]._id === widgetId)
                    widgets[u] = widget;
            }
        }

        function deleteWidget(widgetId) {
            var widget = findWidgetById(widgetId);
            var index = widgets .indexOf(widget);
            widgets .splice(index, 1);
        }
    }
})();