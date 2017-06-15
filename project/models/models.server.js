module.exports = function () {

    var connectionString = 'mongodb://localhost/test';
    var mongoose =  require('mongoose');

    if(process.env.MLAB_DB_USERNAME) {
        connectionString = process.env.MLAB_DB_URL_INIT +
       process.env.MLAB_DB_USERNAME + ":" +
       process.env.MLAB_DB_PASSWORD +
       process.env.MLAB_DB_URL_END + '/' +
       process.env.MLAB_DB_NAME;
    }
    mongoose.connect(connectionString);

    var userModel1 = require('./user/user.model.server')();

    var model = {
        userModel1: userModel1
    };


    userModel1.setModel(model);
    return model;
};
