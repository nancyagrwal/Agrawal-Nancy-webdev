/**
 * Created by nancy on 6/14/2017.
 */

(function () {
    angular
        .module('Travelator')
        .controller('loginController', loginController)
        .controller('profileController',profileController)
        .controller('userListController',userListController)
        .controller('userEditController',userEditController)
        .controller('registerController',registerController);


    function loginController($location, ClientSideServices) {

        var model = this;
        model.login = login;
        model.register = register;

        function register()
        {
            $location.url("/register");
        }

        function login(username, password) {

            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Please enter Username!';
                return;
            }

            if(password === null || password === '' || typeof password === 'undefined') {
                model.error = "Please enter Passwords!";
                return;
            }

           /* ClientSideServices
                .findUserByCredentials(username, password)*/

           // security code:
            ClientSideServices
                .login(username,password)
                .then(function (found) {
                    if(found !== null) {
                       // $location.url('/user/' + found._id);
                        $location.url('/profile');
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }

    function profileController(currentLoggedInUser, $location,
                               $routeParams,
                               ClientSideServices) {
        var model = this;
        model.userId = currentLoggedInUser._id;

        model.user = currentLoggedInUser;
        //model.userId = $routeParams['userId'];
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.addUserRed =addUserRed;
        model.updateUserPage=updateUserPage;

          /*ClientSideServices
            .findUserById(model.userId)
            .then(renderUser, userError);
*/
        function init() {

            renderUser(currentLoggedInUser);
            ClientSideServices
                .findUsers()
                .then(function (users) {
                    model.users = users;
                });
        }
        init();



        function deleteUser(user) {
            ClientSideServices
                .deleteUser(model.userId)
              //  .deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                   // $location.url('/');
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
            ClientSideServices
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
                    ClientSideServices
                        .updateUser(model.userId,user)
                        .then(function () {
                            model.message = "Profile updated successfully";
                        });
                });

        }

      /*  function updateUser(user) {
            ClientSideServices
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User update was successful";
                })
        }*/


        function renderUser (user) {
            model.user = user;
            model.nonAdmin=true;

            model.username = model.user.username;
            model.firstName = model.user.firstName;
            model.email = model.user.email;
            model.lastName = model.user.lastName;

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
            if(model.user.userType.toString()== 'Administrator'){

                model.nonAdmin=false;
                model.admin=true;
            }
        }

        function updateUserPage() {

            ClientSideServices
                .findAllUsers()
                .then(function(response){
                    allUsers=response;
                });
            $location.url('/user/viewUser');

        }


        function addUserRed(){
            $location.url('/user/addUser');
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
        model.registerAdmin = registerAdmin;

        function registerAdmin(username, password, password2, userType) {

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
                            .registerUser(newUser);
                    }
                )
                .then(function (user) {
                    model.message="User Added!";
                });


        }

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
                       /* return ClientSideServices
                            .createUser(newUser);*/
                        return ClientSideServices
                            .registerUser(newUser);
                    }
                )
                .then(function (user) {
                    $location.url('/profile');
                  //  $location.url('/user/' + user._id);
                });


        }
    }

    function userListController(currentLoggedInUser,$location,ClientSideServices,$routeParams){
        var model=this;
        model.userId = currentLoggedInUser._id;
        model.user = currentLoggedInUser;
        model.goBack = goBack;



        function init(){
            model.userData=allUsers;
             ClientSideServices
                .findUserById(model.userId)
                .then(function(response){
                    model.user=response;
                });
        }

        init();

        function renderWebsites (websites) {
            model.websites = websites;
        }

        function goBack()
        {
            $location.url("/user/viewUser");
        }





    }

    function userEditController(currentLoggedInUser,$location,ClientSideServices,$routeParams){
        var model=this;
        model.userId = currentLoggedInUser._id;
        model.user = currentLoggedInUser;

        function init() {
            ClientSideServices
                .findAllUsers()
                .then(function (response) {
                    model.websites = response.data;
                }, function (error) {
                    console.log("Error: Unable to find any users");
                });
            ClientSideServices
                .findUserById(model.userId)
                .then(function (response) {
                    model.website = response.data;
                }, function (error) {
                    console.log("Error: Unable to find website for user");
                });
        }
        init();

        function updateUser(user) {

            ClientSideServices
                .updateUser(model.userId, user)
                .then(function (response) {
                    $location.url("/user/viewUser");
                }, function (error) {
                    console.log("Error: Unable to update user");
                });
        }


        function deleteUser(userId) {
            ClientSideServices
                .deleteUser(userId)
                .then(function () {
                    $location.url('/user/viewUser');
                });
        }

        model.profile = profile;
        model.editUser = editUser;
        model.back=back;

        function profile() {
            $location.url("/profile");
        }


        function editUser(user) {
            $location.url("/user/editUser/"+user._id);
        }

        function back() {
            $location.url("/user/viewUser/");
        }


    }


})();
