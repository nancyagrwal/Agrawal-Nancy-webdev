(function () {
    angular
        .module("WAM")
        .service("widgetService", widgetService);


    function widgetService() {

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "https://i.kinja-img.com/gawker-media/image/upload/s--UE7cu6DV--/c_scale,fl_progressive,q_80,w_800/xoo0evqxzxrrmrn4ayoq.jpg"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Anker’s kevlar-reinforced PowerLine cables are <a href="http://gear.lifehacker.com/your-favorite-lightning-cables-anker-powerline-and-pow-1782036601" target="_blank" rel="noopener">far and away our readers’ top choice for charging their gadgets</a>, and you can save on several models today, including some from the nylon-wrapped PowerLine+ collection. I use these cables every single day, and I’ve never had one fray or stop working. Just be sure to note the promo codes below.<br></p>'},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];


        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById:findWidgetById,
            updateWidget: updateWidget,
            deleteWidget:deleteWidget,
                 };

        var pageURL = "/api/page/";
        var widgetURL = "/api/widget/";

        return api;

        function createWidget(pageId, widget) {
            widgets._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);

        }

        function findWidgetsByPageId(pageId) {
            for(var u in widgets) {
                if(widgets[u].pageId === pageId)
                    return widgets[u];
            }
            return null;
        }

        function findWidgetById(widgetId) {
            for(var w in widgets) {
                if(widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            for(var u in widgets) {
                if(widgets[u]._id === widgetId)
                    widgets[u] = widget;
            }
        }

        function deleteWidget(widgetId) {
            var widget = findWidgetById(widgetId);
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }


}
})();