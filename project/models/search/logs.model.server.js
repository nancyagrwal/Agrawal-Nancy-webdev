module.exports = function() {
    var mongoose = require('mongoose');
    var LogSchema = require('./logs.schema.server')();
    var LogsModel = mongoose.model('LogsModel', LogSchema);


    var api = {
        insertLogs: insertLogs,
        findAllData:findAllData,
        setModel:setModel
    };

    return api;
    var model = {};

    function insertLogs(data) {
        return LogsModel
            .create(data);
    }

    function findAllData(type){
        return LogsModel
            .find({type:type})
    }
    function setModel(_model) {
        model = _model;
    }

}