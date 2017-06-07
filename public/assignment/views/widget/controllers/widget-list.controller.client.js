(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);

    function widgetListController($sce,
                                  $routeParams,
                                  widgetService) {

        var model = this;
        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];


        function init() {
            widgetService
                .findWidgetByPageId(model.pageId)
                .then(function (response) {
                    model.widgets = response;
                                 });
        }
        init();


        function widgetUrl(widget) {
            var url = 'views/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl) {
            var embedUrl = "https://www.youtube.com/embed/";
            var linkUrlParts = linkUrl.split('/');
            embedUrl += linkUrlParts[linkUrlParts.length - 1];
            return $sce.trustAsResourceUrl(embedUrl);
        }
        
        function trust(html) {

            return $sce.trustAsHtml(html);
        }
    }
})();