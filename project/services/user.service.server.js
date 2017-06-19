
module.exports = function(app, model) {
    var ProjectUserModel = model.ProjectUserModel;
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var ProjectGoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    //var FacebookStrategy = require('passport-facebook').Strategy;
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/project/uploads'});


    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    var googleConfig2 = {
        clientID: "50624278738-ok6cie6pfrg51b5u95ocn33d6r6ihq7e.apps.googleusercontent.com",
        clientSecret: "d0LiDHoNh16ovUIPXr23Y3YT",
        callbackURL: "http://agrawal-nancy-webdev.herokuapp.com/authGoogle/callback"
    };

  /*  var facebookConfig = {
        clientID     : process.env.FACEBOOK_PROJECT_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_PROJECT_SECRET_KEY,
        callbackURL  : process.env.FACEBOOK_PROJECT_CALLBACK_URL
    };*/



    //Listen for incoming http requests

    app.get('/api/project/user/:userId', findUserById);
    app.get('/api/project/user' , findUserByCredentials);
    app.get('/api/project/userRegister', findUserByUsername);
    app.get('/api/project/checkLoggedIn',checkLoggedIn);
    app.post('/api/project/user', createUser);
    app.put('/api/project/user', updateUser);
    app.put('/api/project/user/:userId', updateProfileUser);
    app.delete('/api/project/user/:userId', deleteUser);
    app.post ('/api/project/upload', upload.single('myFile'), uploadImage);
    app.get('/api/project/allUsers', findAllUsers);


    // added for security:
    app.post('/api/project/register' ,register);
    app.post('/api/project/logout',logout);
    app.post('/api/project/login', passport.authenticate('local'), login);
    app.get('/authGoogle', passport.authenticate('google', { scope : ['profile', 'email'] }));
   // app.get('/project/auth/facebook', passport.authenticate('facebook', { scope : ['profile', 'email'] }));

    app.get('/authGoogle/callback',
        passport.authenticate('google', {
            successRedirect: '/project/index.html#!/profile',
            failureRedirect: '/project/index.html#!/login'
        }));
    /*app.get('/facebook/auth/project/callback',
        passport.authenticate('facebook', {
            successRedirect: '/project/index.html#!/profile',
            failureRedirect: '/project/index.html#!/login'
        }));*/




    passport.use(new ProjectGoogleStrategy(googleConfig2, projectGoogleStrategy));


    function projectGoogleStrategy(token, refreshToken, profile, done) {
        model.ProjectUserModel
            .findUserByGoogleId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var email = profile.emails[0].value;
                        var emailParts = email.split("@");
                        console.log("emailParts..." + emailParts);
                        var newGoogleUser = {
                            username:  emailParts[0],
                            firstName: profile.name.givenName,
                            lastName:  profile.name.familyName,
                            userType: "Commercial",
                            email:     email,
                            google: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return ProjectUserModel.createUser(newGoogleUser);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){

                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }


    function updateProfileUser(req, res) {
        var user = req.body;
        var userId = req.params.userId;
        model
            .ProjectUserModel
            .updateUser(userId, user)
            .then(
                function (resp) {
                    res.sendStatus(200);
                }, function (error) {
                    res.sendStatus(400);
                }
            );

    }

   /* passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    function facebookStrategy(token, refreshToken, profile, done) {
        model.ProjectUserModel
            .findUserByFacebookId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var email = profile.emails[0].value;
                        var emailParts = email.split("@");
                        var newFacebookUser = {
                            username:  emailParts[0],
                            firstName: profile.name.givenName,
                            lastName:  profile.name.familyName,
                            email:     email,
                            facebook: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return ProjectUserModel.createUser(newFacebookUser);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){

                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }
*/

    function register(req,res) {
        var user = req.body;
        model.ProjectUserModel
            .createUser(user)
            .then(function (user) {
                req
                    .login(user,function (status) {
                        res.send(status);
                    });
            });
    }

    function findAllUsers(req,res) {
        model.ProjectUserModel
            .findAllUsers()
            .then(function (response) {
                    res.json(response);
                },
                function () {
                    res.sendStatus(400);
                });
    }

        function logout(req, res) {
            // removes the user from the session by invalidating the cookie
            req.logOut();
            res.sendStatus(200);
        }

        function checkLoggedIn(req, res) {
            // if the current user is currently logged in, then send the user
            if (req.isAuthenticated()) {

                res.send(req.user);
            }
            else
                res.send('0');
        }

// what we are putting in the cookie
        function serializeUser(user, done) {
            done(null, user);
        }

// we extract the user by finding the user by id by unwrapping the user object from the cookie
        function deserializeUser(user, done) {
            model.ProjectUserModel
                .findUserById(user._id)
                .then(
                    function (user) {
                        done(null, user);
                    },
                    function (err) {
                        done(err, null);
                    }
                );
        }


        function localStrategy(username, password, done) {
            model.ProjectUserModel
                .findUserByCredentials(username, password)
                .then(
                    function (user) {
                        if (!user) {
                            // if error then return null, else return false implying that the user is not an object
                            return done(null, false);
                        }
                        return done(null, user);
                    },
                    function (err) {
                        if (err) {
                            return done(err);
                        }
                    }
                );
        }

        function login(req, res) {
            res.json(req.user);
        }

        function uploadImage(req, res) {
            var myFile = req.file;
            var user = req.body.user;
            var filename = myFile.filename;     // new file name in upload folder
            var path = myFile.path;         // full path of uploaded file
            var destination = myFile.destination;  // folder where file is saved to
            var size = myFile.size;

            model
                .ProjectUserModel
                .findUserById(userId)
                .then(function (uid) {
                    uid.profilePicture = '/project/uploads/' + filename;
                    uid.save();
                    callbackUrl = "/profile";
                    res.redirect(callbackUrl);
                });


            /* model.ProjectUserModel
             .updateUser(userId, user)
             .then(function (resp) {
             res.redirect(url);
             }, function (error) {
             res.sendStatus(400);
             });*/
        }


        function deleteUser(req, res) {

            var userId = req.params.userId;
            model.ProjectUserModel
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
            model.ProjectUserModel
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

            model.ProjectUserModel
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

            if (username && password) {
                model.ProjectUserModel
                    .findUserByCredentials(username, password)
                    .then(
                        function (user) {
                            if (user) {
                                res.send(user);
                            } else {
                                res.sendStatus(404);
                            }
                        }
                    );

            }

            if (username) {

                model
                    .ProjectUserModel
                    .findUserByUsername(username)
                    .then(
                        function (user) {
                            if (user) {

                                res.send(user);
                            } else {

                                res.sendStatus(404);
                            }
                        }
                    );
            }
        }


        function findUserByUsername(req, res) {

            var username = req.query.username;
            var password = req.query.password;

            model.ProjectUserModel
                .findUserByUsername(username)
                .then(
                    function (user) {

                        if (user) {
                            res.send(user);
                        } else {
                            res.sendStatus(404);
                        }
                    }/*,
                     function (error) {
                     res.sendStatus(404);
                     }*/
                );

        }

        function findUserById(req, res) {

            var userId = req.params['userId'];
            model.ProjectUserModel
                .findUserById(userId)
                .then(
                    function (user) {
                        if (user) {
                            res.send(user);
                        } else {
                            res.sendStatus(404);
                        }
                    }/*,
                     function (error) {
                     res.sendStatus(404);
                     }*/
                );
        }


    }
