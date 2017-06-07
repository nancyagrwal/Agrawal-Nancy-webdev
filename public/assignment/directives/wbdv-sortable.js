
(function () {
    angular
        .module('wbdvDirectives',['ngRoute'])
        .directive('wbdvSortable', wbdvSortable);

    function wbdvSortable() {

    };

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

    function jgaSortableController(WidgetService, $routeParams) {
        var vm = this;
        vm.sort = sort;

        function sort(initial, final) {
            var pageId = $routeParams.pid;
            WidgetService.sortWidgetsForPage(initial, final, pageId);
        }
    }
})();
