
(function (){
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController)

    function widgetListController($routeParams, widgetService, $sce){
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];



        function init() {
            widgetService.findWidgetsByPageId(model.pageId)
                .then(renderWidgets, errorWidget);
        }

        init();

        //event handlers
        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;

        function renderWidgets(widgets) {
            model.widgets = widgets;
        }
        function errorWidget() {
            model.message = "Error!"
        }
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
            // scrubbing the html
            return $sce.trustAsHtml(html);
        }
    }
})();