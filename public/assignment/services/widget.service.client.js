(function () {
    angular
        .module('WebAppMaker')
        .service('widgetServices', widgetServices);

    function widgetServices($http) {

        //Declare the API for a quick glance of all the functions
        var api = {
            createWidget: createWidget,
            findWidgetById: findWidgetById,
            findWidgetByPageId: findWidgetByPageId,
            updateWidget: updateWidget,
            findWidgetTypeById: findWidgetTypeById,
            deleteWidget: deleteWidget
        };
        return api;


        //Random Number Generator for ID
        function threeDigitRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }


        function createWidget(pageId, widget) {
            widgetId = threeDigitRandomNum(100, 1000);

            //Embedding it in the widget
            widget._id = widgetId;
            widget.pageId = pageId;

            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.post(url, widget)
                .then(function (response) {
                    return response.data;
                });
        }


        // findWidgetById(widgetId) - retrieves the widget in local widgets array
        // whose _id matches the widgetId parameter
        function findWidgetById(widgetId) {
            // console.log("Widget id rx at client service" + widgetId);
            var url = "/api/assignment/widget/" + widgetId;
            // console.log($http.get(url));
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    // console.log(error);
                })

        }


        // findWidgetsByPageId(pageId) - retrieves the widgets in local widgets array
        // whose pageId matches the parameter pageId
        function findWidgetByPageId(pageId) {
            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }


        //Finds the widget Type based on widgetId
        function findWidgetTypeById(widgetId) {
            for (var w in widgets) {
                var widget = widgets[w];
                if (widget._id === widgetId) {
                    return widget.widgetType;
                }
            }
            return null;
        }


        // updateWidget(widgetId, widget) - updates the widget in local widgets array
        // whose _id matches the widgetId parameter
        function updateWidget(widgetId, widget) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.put(url, widget)
                .then(function (response) {
                    return response.data;
                });

        }//END OF UPDATE WIDGET FUNCTION


        // deleteWidget(widgetId) - removes the widget from local widgets array
        // whose _id matches the widgetId parameter
        function deleteWidget(widgetId) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }


    }//End of function widgetServices
})();