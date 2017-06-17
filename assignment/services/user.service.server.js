
module.exports = function(app, model) {
    var userModel = model.userModel;
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    var googleConfig = {
        clientID: process.env.GOOGLE_CLIENT_ID,//"50624278738-fl28qob44pj8vba6diflflfqkkpmiq2d.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, //PRQOZJPPTCUwbtxE0JfeIlCO",
        callbackURL: process.env.GOOGLE_CALLBACK_URL //http://localhost:3000/auth/google/callback"
    };

    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENT_ID,//"1910908232491447",
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET, //"f76f5e4ca579e271506e3554f1cc52ec",
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL //"http://localhost:3000/auth/facebook/callback"
    };


//Listen for incoming http requests
    app.get('/api/user/:userId', findUserById);
    app.get('/api/user', findUserByCredentials);
    app.get('/api/checkLoggedIn',checkLoggedIn);
   // app.get('/api/user', findUserByUsername);
    app.post('/api/user', createUser);
    app.post('/api/register' ,register);
    app.post('/api/logout',logout);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);
    app.post  ('/api/login', passport.authenticate('local'), login);
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['profile', 'email'] }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/assignment/index.html#!/profile',
            failureRedirect: '/assignment/index.html#!/login'
        }));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/assignment/index.html#!/profile',
            failureRedirect: '/assignment/index.html#!/login'
            }));



    passport.use(new GoogleStrategy(googleConfig, googleStrategy));


    function googleStrategy(token, refreshToken, profile, done) {
        userModel
            .findUserByGoogleId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var email = profile.emails[0].value;
                        var emailParts = email.split("@");
                        var newGoogleUser = {
                            username:  emailParts[0],
                            firstName: profile.name.givenName,
                            lastName:  profile.name.familyName,
                            email:     email,
                            google: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return userModel.createUser(newGoogleUser);
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

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    function facebookStrategy(token, refreshToken, profile, done) {
        userModel
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
                        return userModel.createUser(newFacebookUser);
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


    function register(req,res) {
        var user = req.body;

        userModel
            .createUser(user)
            .then(function (user) {
                req
                    .login(user,function (status) {
                        res.send(status);
                    });
            });
    }

    function logout(req, res) {
        // removes the user from the session by invalidating the cookie
        req.logOut();
        res.sendStatus(200);
    }

    function checkLoggedIn(req,res) {
        // if the current user is currently logged in, then send the user
        if(req.isAuthenticated()) {

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
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }


    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username,password)
            .then(
                function(user) {
                    if (!user) {
                        // if error then return null, else return false implying that the user is not an object
                        return done(null, false);
                    }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function login(req,res) {
        res.json(req.user);
    }

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
        if (username && password) {
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
                    }
                );
        }

        if(username)
        {

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
                    }
                );
        }

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