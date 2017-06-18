
(function (){
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController)

    function widgetListController($routeParams, widgetService, $sce, $location){
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];
        model.goBackToPages = goBackToPages;
        model.logout = logout;
        model.newWidget =newWidget;
        model.goToWidget = goToWidget;
        model.goForth = goForth;

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


        function goBackToPages() {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page");

        }

        function newWidget()
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget/new");
        }

        function goToWidget()
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget/" + model.widgetId);

        }

        function goForth(widget)
        {
            $location.url("/user/" + model.userId +"/website/" +model.websiteId + "/page/" + model.pageId +"/widget/" + widget._id);

        }

        function logout()
        {
            $location.url("/profile");

        }
    }
})();