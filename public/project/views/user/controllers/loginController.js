(function () {
    angular
        .module('Travelator')
        .controller('loginController', loginController);
    
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
                .findUserCredentials(username, password)
                .then(function (found) {
                    if(found !== null) {
                        $location.url('/user/' + found._id);
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }
})();