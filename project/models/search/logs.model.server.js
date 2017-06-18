module.exports = function() {
    var mongoose = require('mongoose');
    var PlanSchema = require('./logs.schema.server')();
    var UserModel3 = mongoose.model('UserModel3', PlanSchema);


    var api = {
        insertLogs: insertLogs,
        findAllData:findAllData
    };

    return api;
    var model = {};

    function insertLogs(data) {
        return UserModel3
            .create(data);
    }

    function findAllData(type){
        console.log('*8888**');
        return UserModel3
            .find({type:type})
    }
}