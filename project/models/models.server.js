module.exports = function () {

    var connectionString = 'mongodb://127.0.0.1:27017/projectDb';

    if(process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
        var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds033123.mlab.com:33123/heroku_6lh609hz'; // user yours
    }

    var mongoose =  require('mongoose');
    mongoose.connect(connectionString);
    mongoose.Promise = require('q').Promise;

    var ProjectUserModel = require('./user/user.model.server')();
    var PlanModel= require('./search/plan.model.server')();
    var LogsModel= require('./search/logs.model.server')();

    var model = {
        ProjectUserModel: ProjectUserModel,
        PlanModel: PlanModel,
        LogsModel:LogsModel
    };


    ProjectUserModel.setModel(model);
    PlanModel.setModel(model);
    LogsModel.setModel(model);
    return model;
};
