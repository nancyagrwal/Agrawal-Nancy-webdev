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

    var editUserDetails=[];
    var allUsers=[];


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
                        username: model.user.username,
                        firstName: model.user.firstName,
                        lastName: model.user.lastName,
                        email: model.user.email,
                        profilePicture: model.user.profilePicture
                    };
                    ClientSideServices
                       // .updateUser(model.userId,user)
                        .updateProfileUser(model.userId,user)
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
            if(model.user.userType.toString()=== 'Administrator'){

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
        model.profile = profile;
        model.editUser = editUser;
        model.back=back;


        function init(){


             ClientSideServices
                .findUserById(model.userId)
                .then(function(response){
                    model.user=response;
                });

                ClientSideServices
                    .findAllUsers()
                    .then(function(response){
                        model.userData=response;
                    });
                $location.url('/user/viewUser');

            }
        init();

        function profile() {
            $location.url("/profile");
        }


        function editUser(user) {
            editUserDetails=user;
            $location.url("/user/editUser/");
        }

        function back() {
            $location.url("/user/viewUser/");
        }


        function goBack()
        {
            $location.url("/profile");
        }
    }

    function userEditController(currentLoggedInUser,$location,ClientSideServices,$routeParams){
        var model=this;
        model.userId = currentLoggedInUser._id;
        model.user = currentLoggedInUser;
        model.updateUser=updateUser;
        model.deleteUser=deleteUser;



        function init() {
            model.userDetails=editUserDetails;
            ClientSideServices
                .findAllUsers()
                .then(function (response) {
                    model.userData = response.data;
                }, function (error) {
                    console.log("Error: Unable to find any users");
                });
            ClientSideServices
                .findUserById(model.userId)
                .then(function (response) {
                    model.user = response.data;
                }, function (error) {
                    console.log("Error: Unable to find user");
                });
        }
        init();


        function updateUser(userDetails) {


            ClientSideServices
                .updateUser(userDetails._id, userDetails)
                .then(function (response) {
                    $location.url("/user/viewUser");
                }, function (error) {
                    console.log("Error: Unable to update user");
                });
        }


        function deleteUser(userDetails) {
            ClientSideServices
                .deleteUser(userDetails._id)
                .then(function () {
                    var index=allUsers.indexOf(userDetails);
                    allUsers.splice(index,1);
                    $location.url('/user/viewUser');
                });
        }



    }


})();
