/**
 * Created by nancy on 6/15/2017.
 */


module.exports = function(app, model) {
    var UserModel1 = model.userModel1;
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

    //Listen for incoming http requests

    app.get('/api/project/user/:userId', findUserById);
    app.get('/api/project/user' , findUserByCredentials);
    app.get('/api/project/userRegister', findUserByUsername);
    app.post('/api/project/user', createUser);
    app.put('/api/project/user/:userId', updateUser);
    app.delete('/api/project/user/:userId', deleteUser);
    app.post ('/api/project/upload', upload.single('myFile'), uploadImage);


    function uploadImage(req, res) {

        var myFile = req.file;
        var filename = myFile.filename;     // new file name in upload folder
        var redirectURL = req.body.redirectURL;
        var userId = req.body.userId;
        var url = '/project/#!/user/' + userId;
        var user = {
            profilePicture: "/project/uploads/" + filename
        };
        UserModel1
            .updateUser(userId, user)
            .then(function (resp) {
                res.redirect(url);
            }, function (error) {
                res.sendStatus(400);
            });
    }



    function deleteUser(req, res) {
        console.log('deleteUser');
        var userId = req.params.userId;
        UserModel1
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
        console.log('updateUser');
        var user = req.body;
        var userId = req.params.userId;
        UserModel1
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
        console.log('createUser');
        UserModel1
            .createUser(user)
            .then(function (resp) {
                res.send(resp)
            }, function (error) {
                res.sendStatus(400);
            });

    }


    function findUserByCredentials(req, res) {
        console.log('findUserByCredentials');
        var username = req.query.username;
        var password = req.query.password;

        UserModel1
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
        console.log('findUserByUsername');
        var username = req.query.username;
     //   var password = req.query.password;

        UserModel1
            .findUserByUsername(username)
            .then(
                function (user) {
                    console.log(user);
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
        console.log('findUserById');
        var userId = req.params['userId'];
        UserModel1
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
}