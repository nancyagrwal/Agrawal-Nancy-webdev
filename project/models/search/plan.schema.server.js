module.exports = function () {
    var mongoose =  require('mongoose');
    var PlanSchema = mongoose.Schema(
        {
            offerId: {type: String, required: true},
            validFromDate: String,
            validTillDate:String,
            fromCity: String,
            toCity: String,
            departureDate:String,
            returnDate:String,
            realFare: Number,
            discountedFare:Number,
            offeredBy:String,
            offerDate:{type:Date ,default: Date.now()},
            airLines:String

        }, {
            collection:"plan"
        });
    return PlanSchema;
};
