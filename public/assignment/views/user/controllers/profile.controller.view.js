(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);
    
    function profileController(currentUser,$location,
                               $routeParams,
                               userService) {
        var model = this;

        //model.userId = $routeParams['userId'];
        model.userId = currentUser._id;
        model.user = currentUser;
        model.updateUser = updateUser;
        model.deleteProfile = deleteProfile;
        model.fetchWebistes = fetchWebistes;
        model.logout = logout;

        function init() {
            // userService
            //     .findUserById(model.userId)
            //     // This is a promise or callback function which is executed once it gets a successful message from
            //     // the server.
            //     .then(renderUser, userError);
            renderUser(currentUser);
            userService
                .findUsers()
                .then(function (users) {
                    model.users = users;
                });
        }
        init();


        // model.user = userService.findUserById(model.userId);
        /*userService
            .findUserById(model.userId)
            .then(renderUser, userError);

        */

        function deleteProfile() {
            userService
                .deleteUser(model.userId)
                //.deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                }, function () {
                    model.error = "Unable to unregister you";
                });
        }

        function updateUser(user) {
            model.error = "";
            model.message = "";
            if(model.username === "") {
                model.error = "You must have a username";
                return;
            }
            userService
                .findUserById(model.userId)
                .then(function (getUser) {
                    user = {
                        _id:model.userId,
                        password:getUser.password,
                        username: model.username,
                        firstName: model.firstName,
                        lastName: model.lastName,
                        email: model.email
                    };
                    userService
                        .updateUser(model.userId,user)
                        .then(function () {
                            model.message = "Profile updated successfully";
                        });
                });

        }


           /* userService
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User update was successful";
                })*/


        function renderUser(user) {
            model.user = user;
            model.username = model.user.username;
            model.firstName = model.user.firstName;
            model.email = model.user.email;
            model.lastName = model.user.lastName;
        }

        function userError(error) {
            model.error = "User not found";
        }

        function  fetchWebistes()
        {
            //$location.url("/user/"+ model.userId + "/website");
            $location.url("/user/website");
        }

        function  logout()
        {
            userService
                .logout()
                .then(function () {
                    $location.url('/login');
                })
        }
    }
})();