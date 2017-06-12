/**
 * Created by Nancy on 6/12/2017.
 */
(function () {
    angular
        .module('Travelator')
        .controller('dataController', dataController);

    function dataController($location,
                             $routeParams,
                             searchServices) {
        var model = this;
        model.userId = $routeParams['userId'];
        // model.user = userService.findUserById(model.userId);
        function init(){
            searchServices
                .findAllData(model.userId)
                .then(renderData);
        }
        init();
        function renderData(response){
            model.searchData=response;
        }

        model.goBackToProfile = goBackToProfile;
        function goBackToProfile()
        {
            $location.url("/user/"+ model.userId);
        }


    }
})();