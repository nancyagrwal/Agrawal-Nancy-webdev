module.exports = function () {
    var mongoose =  require('mongoose');
    var LogSchema = mongoose.Schema(
        {
            searchDate:{type:Date, default:Date.now()},
            origin:String,
            destination:String,
            fare:Number,
            airlines:String,
            tax:Number,
            type:String,
            budget:Number,
            theme:String,
            stopsFrom:Number,
            stopsTo:Number

        }, {
            collection:"log"
        });
    return LogSchema;
};
