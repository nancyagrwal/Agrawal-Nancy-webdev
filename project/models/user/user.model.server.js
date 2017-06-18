
module.exports = function() {
    var mongoose = require('mongoose');
    var UserProjectSchema = require('./user.schema.server')();
    var ProjectUserModel = mongoose.model('ProjectUserModel', UserProjectSchema);

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
        return ProjectUserModel
            .findOne({'google.id':googleId});
    }

    function findUserByFacebookId(facebookId) {
        return ProjectUserModel
            .findOne({'facebook.id': facebookId});
    }

    function createUser(user) {
        return ProjectUserModel
            .create(user);
    }

    function findUserByCredentials(username, password) {

        return ProjectUserModel
            .findOne({username:username, password:password});
    }

    function findUserByUsername(username) {
        return ProjectUserModel
            .findOne({username:username});
    }


    function findUserById(userId) {
        return ProjectUserModel.findById(userId);
    }

    function updateUser(userId, user) {
        return ProjectUserModel
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
        return ProjectUserModel
            .remove(
                {
                    _id:userId
                });
    }

    function setModel(_model) {
        model = _model;
    }

};