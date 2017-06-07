(function () {
    angular
        .module('WebAppMaker')
        .service('widgetServices', widgetServices);

    function widgetServices($http) {


        var api = {
            createWidget: createWidget,
            findWidgetById: findWidgetById,
            findWidgetByPageId: findWidgetByPageId,
            updateWidget: updateWidget,
            findWidgetTypeById: findWidgetTypeById,
            deleteWidget: deleteWidget
        };
        return api;



        function createWidget(pageId, widget) {
            widgetId = pageId;
             widget._id = widgetId;
            widget.pageId = pageId;

            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.post(url, widget)
                .then(function (response) {
                    return response.data;
                });
        }


       function findWidgetById(widgetId) {

            var url = "/api/assignment/widget/" + widgetId;

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                          })

        }



        function findWidgetByPageId(pageId) {
            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }


                function findWidgetTypeById(widgetId) {
            for (var w in widgets) {
                var widget = widgets[w];
                if (widget._id === widgetId) {
                    return widget.widgetType;
                }
            }
            return null;
        }


        function updateWidget(widgetId, widget) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.put(url, widget)
                .then(function (response) {
                    return response.data;
                });

        }
        function deleteWidget(widgetId) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }


    }
})();