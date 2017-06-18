
module.exports = function() {
    var mongoose = require('mongoose');
    var UserProjectSchema = require('./user.schema.server')();
    var UserModel1 = mongoose.model('UserModel1', UserProjectSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserByFacebookId:findUserByFacebookId,
        updateUser: updateUser,
        deleteUser: deleteUser,
        setModel: setModel
    };

    return api;
    var model = {};

    function findUserByGoogleId(googleId) {
        return UserModel1
            .findOne({'google.id':googleId});
    }

    function findUserByFacebookId(facebookId) {
        return UserModel1
            .findOne({'facebook.id': facebookId});
    }

    function createUser(user) {
        return UserModel1
            .create(user);
    }

    function findUserByCredentials(username, password) {

        return UserModel1
            .findOne({username:username, password:password});
    }

    function findUserByUsername(username) {

        console.log('findUserByUsername');
        return UserModel1
            .findOne({username:username});
    }


    function findUserById(userId) {
        return UserModel1.findById(userId);
    }

    function updateUser(userId, user) {
        return UserModel1
            .update(
                {
                    _id: userId
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email
                }
            );
    }

    function deleteUser(userId) {
        return UserModel1
            .remove(
                {
                    _id:userId
                });
    }

    function setModel(_model) {
        model = _model;
    }

};