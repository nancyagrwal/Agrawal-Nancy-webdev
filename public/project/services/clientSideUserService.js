(function(){
    angular
        .module('Travelator')
        .factory('ClientSideServices', ClientSideServices);
    
    function ClientSideServices($http) {

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser,
            // added for security:
            login:login,
            logout:logout,
            registerUser: registerUser,
            findUsers:findUsers,
            checkLoggedIn:checkLoggedIn,
            findAllUsers:findAllUsers,
            updateProfileUser:updateProfileUser

        };
        return api;

        function findAllUsers(){
            var url='/api/project/allUsers';
            return $http.get(url)
                .then(function(response){
                    return response.data;
                });
        }

        function findUsers() {
            var url = '/api/project/user';
            return $http.get(url)
                .then(function (response){
                    return response.data;
                })
        }

        function registerUser(user) {
            var url = "/api/project/register";
            return $http.post(url,user)
                .then(function (response) {
                    return response.data;
                })

        }

        function checkLoggedIn() {
            var url = "/api/project/checkLoggedIn";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function logout() {
            var url = "/api/project/logout";
            return $http.post(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function login(username,password) {
            var url = "/api/project/login";
            var credentials = {
                username:username,
                password:password
            };
            return $http.post(url, credentials)
                .then(function (response) {
                    return response.data;
                });
        }


        function findUserByUsername(username) {
            var url = "/api/project/userRegister?username=" + username;
             return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/project/user?username=" + username + "&password=" + password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }


        function findUserById(userId) {
            var url = "/api/project/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function createUser(user) {
            var url = "/api/project/user";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }


        function updateProfileUser(userId, user) {
            var url = "/api/project/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }



        function updateUser(userId, user) {
            var url = "/api/project/user?userId=" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            var url = "/api/project/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();