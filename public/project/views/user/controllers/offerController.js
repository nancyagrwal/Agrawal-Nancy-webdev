(function () {
    angular
        .module('Travelator')
        .controller('offerController', offerController);

    function offerController($location,
                            $routeParams,
                            searchServices) {
        var model = this;
        model.userId = $routeParams['userId'];

        function init(){
            searchServices
                .findAllOffers(model.userId)
                .then(renderOffer);
        }
        init();
        function renderOffer(response){
            model.plans=response;
        }

       model.goBackToProfile = goBackToProfile;
        function goBackToProfile()
        {
            $location.url("/user/"+ model.userId);
        }
    }
})();