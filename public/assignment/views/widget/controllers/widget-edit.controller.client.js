(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetEditController',widgetEditController);
    
    function widgetEditController($routeParams, $location, widgetService) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];


        function init() {
            widgetService.findWidgetById(model.widgetId)
                .then(renderWidget, errorWidget);
        }

        init();

        //event handlers
        model.widgetUrl = widgetUrl;
        model.editHeading = editHeading;
        model.deleteWidget=deleteWidget;
        model.editImage=editImage;
        model.editHtml = editHtml,
        model.editText = editText,
        model.editYouTube=editYouTube;


        function widgetUrl(widget) {
            if(widget) {
                var url;
              /*  if (widget.widgetType === 'HTML')
                    url = 'views/widget/templates/widget-header-edit.view.client.html';
                else*/
                    url = 'views/widget/templates/widget-' + widget.widgetType.toLowerCase() + '-edit.view.client.html';
                return url;
            }
        }

        function editHeading() {
            var widgetHeading={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                pageId: model.pageId,
                size: model.widget.size,
                text: model.widget.text
            };
            widgetService.updateWidget(model.widgetId,widgetHeading)
                .then(redirectWidget, errorWidget);
        }

        function editText() {
            var widgetText={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                pageId: model.pageId,
                text: model.widget.text,
                rows: model.widget.rows
            };
            widgetService.updateWidget(model.widgetId,widgetText)
                .then(redirectWidget, errorWidget);
        }

        
        function deleteWidget() {
            widgetService.deleteWidget(model.widgetId)
                .then(redirectWidget, errorWidget);
        }

        function editImage() {
            var widgetImage={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                text: model.widget.text,
                pageId: model.pageId,
                width:model.widget.width,
                url: model.widget.url
            };
            widgetService.updateWidget(model.widgetId,widgetImage)
                .then(redirectWidget, errorWidget);
        }

        function editHtml() {
            var widgetHtml={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                pageId: model.pageId,
                width:model.widget.width,
                size: model.widget.size,
                text: model.widget.text
            };
            widgetService.updateWidget(model.widgetId,widgetHtml)
                .then(redirectWidget, errorWidget);
        }

        function editYouTube() {
            var widgetYouTube={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                pageId: model.pageId,
                width:model.widget.width,
                url: model.widget.url
            };
            widgetService.updateWidget(model.widgetId,widgetYouTube)
                .then(redirectWidget, errorWidget);;
        }

        function renderWidget(widget) {
            model.widget = widget;
            model.width = model.widget.width;
        }
        function errorWidget() {
            model.message = "Error!"
        }
        function redirectWidget() {
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
        }

        model.goToWidget = goToWidget;
        model.logout = logout;
        model.searchImage = searchImage;

        function goToWidget()
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget");
        }

        function logout()
        {
            $location.url("/user/" + model.userId);
        }

        function searchImage()
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget/" + model.widgetId +"/search");
        }




    }
})();