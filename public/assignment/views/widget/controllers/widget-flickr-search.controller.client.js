/**
 * Created by nancy on 6/6/2017.
 */
(function (){
    angular
        .module('WebAppMaker')
        .controller('FlickrImageSearchController', FlickrImageSearchController);

    function FlickrImageSearchController($routeParams, FlickerService, widgetService,$location){
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];

        widgetService.findWidgetById(model.widgetId)
            .then(renderWidget, errorWidget);

        model.searchPhotos= searchPhotos;
        model.selectPhoto = selectPhoto;

        function selectPhoto(photo) {

            model.widget.url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "s.jpg";
            widgetService.updateWidget(model.widgetId, model.widget)
                .then(redirectWidget, errorWidget);

        }
        function redirectWidget() {
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+model.widgetId);
        }

        function searchPhotos(searchText) {
            FlickerService
                .searchPhotos(searchText)
                .then(function(response) {
                    //console.log(response.data);
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });

        }

        function renderWidget(widget) {
            model.widget = widget;
        }

        function errorWidget(widget) {
            model.message = "Error!";
        }

    }
})();