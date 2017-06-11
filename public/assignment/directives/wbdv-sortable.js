
(function () {
    angular
        .module('wbdvDirectives',['ngRoute'])
        .directive('wbdvSortable', wbdvSortable);


    function wbdvSortable() {
        var initial = null;
        var final = null;
        function link(scope, element) {
            element
                .sortable({
                    start: function(event, ui) {
                        initial = ui.item.index();
                    },
                    stop: function(event, ui) {
                        final = ui.item.index();
                        scope.jgaSortableController.sort(initial, final);
                    }
                });
        }
        return {
            link: link,
            controller: jgaSortableController,
            controllerAs: 'jgaSortableController'
        }
    }

    function jgaSortableController(widgetService, $routeParams) {
        var model = this;
        model.sort = sort;

        function sort(initial, final) {
            var pageId = $routeParams.pid;
            widgetService.reorderWidget(initial, final, pageId);
        }
    }
})();
