(function () {
    angular
        .module('Travelator')
        .controller('registerController', registerController);
    
    function registerController($location, ClientSideServices) {

        var model = this;

        model.register = register;

        function register(username, password, password2,userType) {

            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if(password !== password2 || password === null || typeof password === 'undefined') {
                model.error = "passwords must match";
                return;
            }

            if(userType === null || typeof userType === 'undefined' || userType === ''){
                model.error="please select a user type you want to register as";
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
                            userType:userType
                        };
                        return ClientSideServices
                            .createUser(newUser);
                    }
                )
                .then(function (user) {
                    $location.url('/user/' + user._id);
                });


        }
    }
})();