(function(){
    angular
        .module('Travelator')
        .factory('ClientSideServices', ClientSideServices);
    
    function ClientSideServices($http) {
        /*var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder",   email: "alice@wonder.com"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley",   email: "bob@marley.com"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia",   email: "charly@garcia.com"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi",   email: "jose@annunzi.com" }
        ];*/

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
        return api;

        function findUserById(userId) {
            for(var u in users) {
                if(users[u]._id === userId)
                    return users[u];
            }
            return null;
        }

        function findUserByUsername(username) {
            var url = "/api/project/user?username=" + username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/project/user?username=" + username + '&password=' + password;
            return $http.get(url)
                .then(function (response) {
                    console.log(response.data);
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

        function updateUser(userId, user) {
            var url = "/api/project/user/" + userId;
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