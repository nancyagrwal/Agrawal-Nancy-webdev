
module.exports = function() {
    var mongoose = require('mongoose');
    var PlanSchema = require('./plan.schema.server')();
    var UserModel2 = mongoose.model('UserModel2', PlanSchema);




    var api = {
       insertPlan:insertPlan,
        findPlan:findPlan,
        findAllOffers:findAllOffers
    };

    return api;
    var model = {};

    function insertPlan(plan) {
        return UserModel2
            .create(plan);
    }

    function findPlan(plan) {
        console.log(plan.offerId);
            return UserModel2
            .findOne({
                offerId: plan.offerId,
                offeredBy: plan.offeredBy,
                fromCity: plan.fromCity,
                toCity: plan.toCity,
                departureDate: plan.departureDate,
                returnDate: plan.returnDate,
                validFromDate:plan.validFromDate,
                validTillDate:plan.validTillDate
            });
    }

    function findAllOffers(){
        return UserModel2
            .find();
    }
}
