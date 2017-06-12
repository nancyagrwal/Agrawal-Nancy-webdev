(function () {
    angular
        .module('Travelator')
        .controller('profileController', profileController);
    
    function profileController($location,
                               $routeParams,
                               ClientSideServices) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        // model.user = userService.findUserById(model.userId);
        ClientSideServices
            .findUserById(model.userId)
            .then(renderUser, userError);

        function deleteUser(user) {
            ClientSideServices
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/');
                }, function () {
                    model.error = "Unable to unregister you";
                });
        }

        function updateUser(user) {
            ClientSideServices
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User update was successful";
                })
        }

        function renderUser (user) {
            model.user = user;

            if (model.user.userType.toString()=== 'Commercial') {
                model.comm = "true";
                //alert('ok');
            }
            if(model.user.userType.toString() === 'Business User') {
                model.bizUser ="true";
                //alert('oki');
            }
            if(model.user.userType.toString() === 'Researcher') {
                // alert('okiee');
                model.resUser = "true";
            }
        }

        /*function renderUser (user) {
            model.user = user;
        }*/

        function userError(error) {
            model.error = "User not found";
        }
    }
})();