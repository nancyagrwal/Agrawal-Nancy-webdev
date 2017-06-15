/**
 * Created by nancy on 6/15/2017.
 */


module.exports = function(app, model) {
    var UserModel1 = model.UserModel1;
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});


    app.get('/api/user/:userId', findUserById);
    app.get('/api/user', findUserByCredentials);
    app.get('/api/user', findUserByUsername);
    app.post('/api/user', createUser);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);
    app.post ("/api/upload", upload.single('myFile'), uploadImage);


    function uploadImage(req, res) {

        var myFile = req.file;
        var filename = myFile.filename;     // new file name in upload folder
        var redirectURL = req.body.redirectURL;
        var userId = req.body.userId;
        var url = '/project/#!/user/' + userId;
        var user = {
            profilePicture: "/project/uploads/" + filename
        };
        model
            .UserModel1
            .updateUser(userId, user)
            .then(function (resp) {
                res.redirect(url);
            }, function (error) {
                res.sendStatus(400);
            });
    }



    function deleteUser(req, res) {
        var userId = req.params.userId;
        model
            .UserModel1
            .deleteUser(userId)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );

    }

    function updateUser(req, res) {
        var user = req.body;
        var userId = req.params.userId;
        model
            .UserModel1
            .updateUser(userId, user)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );


    }

    function createUser(req, res) {
        var user = req.body;
        model
            .UserModel1
            .createUser(user)
            .then(function (resp) {
                res.send(resp)
            }, function (error) {
                res.sendStatus(400);
            });

    }


    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        model
            .UserModel1
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


    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        model
            .UserModel1
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

    }

    function findUserById(req, res) {
        var userId = req.params['userId'];
        model
            .UserModel1
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


    }
};