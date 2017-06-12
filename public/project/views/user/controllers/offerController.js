(function () {
    angular
        .module('Travelator')
        .controller('offerController', offerController);

    function offerController($location,
                            $routeParams,
                            searchServices) {
        var model = this;
        model.userId = $routeParams['userId'];
        // model.user = userService.findUserById(model.userId);
        function init(){
            searchServices
                .findAllOffers(model.userId)
                .then(renderOffer);
        }
        init();
        function renderOffer(response){
            model.plans=response;
        }


    }
})();