(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);
    
    function loginController($location, userService) {

        var model = this;
        model.login = login;
        model.register = register;

        function login(username, password) {

            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Please enter Username!';
                return;
            }

            if(password === null || password === '' || typeof password === 'undefined') {
                model.error = "Please enter Passwords!";
                return;
            }

            userService
                .findUserByCredentials(username, password)
                .then(function (found) {
                    if(found !== null) {
                        $location.url('/user/' + found._id);
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }

        // added for assignment 5
        function register()
        {
            $location.url("/register");
        }
    }
})();