(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);
    
    function loginController($location, userService) {

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

            var found = userService.findUserByCredentials(username, password);
            
            if(found !== null) {
                $location.url('/user/' + found._id);
            } else {
                model.error = "Invalid Username and Password.";
            }
        }
    }
})();