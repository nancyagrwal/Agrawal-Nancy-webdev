/*

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];
*/
module.exports = function(app, model) {
    var userModel = model.userModel;

//Listen for incoming http requests
    app.get('/api/user/:userId', findUserById);
    app.get('/api/user', findUserByCredentials);
    app.get('/api/user', findUserByUsername);
    app.post('/api/user', createUser);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);


    function deleteUser(req, res) {
        var userId = req.params.userId;
        model
            .userModel
            .deleteUser(userId)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );
        /* for (var u in users) {
         if (users[u]._id === userId) {
         users.splice(u, 1);
         res.sendStatus(200);
         return;
         }
         }
         res.sendStatus(404);*/
    }

    function updateUser(req, res) {
        var user = req.body;
        var userId = req.params.userId;
        model
            .userModel
            .updateUser(userId, user)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );

        /* for (var u in users) {
         if (users[u]._id === req.params.userId) {
         users[u] = user;
         res.sendStatus(200);
         return;
         }
         }
         res.sendStatus(404);
         }*/
    }

    function createUser(req, res) {
        var user = req.body;
        model
            .userModel
            .createUser(user)
            .then(function (resp) {
                res.send(resp)
            }, function (error) {
                res.sendStatus(400);
            });
        /* user._id = (new Date()).getTime() + "";
         users.push(user);
         res.json(user);*/
    }


    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        model
            .userModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {
                    if (user) {
                        res.send(user);
                    } else {
                        res.sendStatus(404);
                    }
                },
                function (error) {
                    res.sendStatus(404);
                }
            );

        /*if (username && password) {

         for (var u in users) {
         var user = users[u];
         if (user.username === username &&
         user.password === password) {

         res.json(user);
         return;
         }
         }
         res.sendStatus(404);
         return;
         }
         else {
         res.json(users);
         }*/
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if (user) {
                        res.send(user);
                    } else {
                        res.sendStatus(404);
                    }
                },
                function (error) {
                    res.sendStatus(404);
                }
            );
        /*  if (username) {
         for (var u in users) {
         var user = users[u];
         if (user.username === username) {
         // res.send(user);
         res.json(user);
         return;
         }
         }
         res.sendStatus(404);
         return;

         }
         else {
         res.json(users);
         }*/
    }

    function findUserById(req, res) {
        var userId = req.params['userId'];
        model
            .userModel
            .findUserById(userId)
            .then(
                function (user) {
                    if (user) {
                        res.send(user);
                    } else {
                        res.sendStatus(404);
                    }
                },
                function (error) {
                    res.sendStatus(404);
                }
            );

      /*  for (var u in users) {
         if (userId === users[u]._id) {
         res.send(users[u]);
         return;
         }
         }
         return res.sendStatus(404);
         }*/
    }
}