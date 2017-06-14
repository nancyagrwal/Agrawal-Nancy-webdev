/**
 * Created by nancy on 6/14/2017.
 */

(function () {
    angular
        .module('Travelator')
        .controller('loginController', loginController)
        .controller('profileController',profileController)
        .controller('registerController',registerController);


    function loginController($location, ClientSideServices) {

        var model = this;

        model.login = login;

        function login(username, password) {

            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Please enter Username!';
                return;
            }

            if(password === null || password === '' || typeof password === 'undefined') {
                model.error = "Please enter Passwords!";
                return;
            }

            ClientSideServices
                .findUserByCredentials(username, password)
                .then(function (found) {
                    if(found !== null) {
                        $location.url('/user/' + found._id);
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }

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

    function registerController($location, ClientSideServices) {

        var model = this;

        model.register = register;

        function register(username, password, password2, userType) {

            if (username === null || username === '' || typeof username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if (password !== password2 || password === null || typeof password === 'undefined') {
                model.error = "passwords must match";
                return;
            }

            if (userType === null || typeof userType === 'undefined' || userType === '') {
                model.error = "please select a user type you want to register as";
                return;
            }

            ClientSideServices
                .findUserByUsername(username)
                .then(
                    function () {
                        model.error = "sorry, that username is taken";
                    },
                    function () {
                        var newUser = {
                            username: username,
                            password: password,
                            userType: userType
                        };
                        return ClientSideServices
                            .createUser(newUser);
                    }
                )
                .then(function (user) {
                    $location.url('/user/' + user._id);
                });


        }
    }})();
