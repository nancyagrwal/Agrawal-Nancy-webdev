(function (){
    angular
        .module('WebAppMaker')
        .controller('FlickrImageSearchController', FlickrImageSearchController);

    function FlickrImageSearchController($routeParams, FlickrService, widgetService,$location){
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
        model.searchPhotos= searchPhotos;
        model.selectPhoto = selectPhoto;

        function selectPhoto(photo) {

            model.widget.url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "s.jpg";
            var widgetImage={
                _id: model.widget._id,
                widgetType: model.widget.widgetType,
                url: model.widget.url
            };
            widgetService.updateWidget(model.widgetId, widgetImage)
                    .then(redirectWidget, errorWidget);


        }
        function redirectWidget() {
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+model.widgetId);
        }

        function searchPhotos(searchText) {
            FlickrService
                .searchPhotos(searchText)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });

        }

        model.searchImage = searchImage;

        function renderWidget(widget) {
            model.widget = widget;
        }

        function errorWidget(widget) {
            model.message = "Error!";
        }

        function searchImage()
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget/" + model.widgetId +"/search");
        }

    }
})();

