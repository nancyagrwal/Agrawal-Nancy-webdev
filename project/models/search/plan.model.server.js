
module.exports = function() {
    var mongoose = require('mongoose');
    var PlanSchema = require('./plan.schema.server')();
    var PlanModel = mongoose.model('PlanModel', PlanSchema);




    var api = {
       insertPlan:insertPlan,
        findPlan:findPlan,
        findAllOffers:findAllOffers,
        setModel:setModel
    };

    return api;
    var model = {};

    function insertPlan(plan) {
        return PlanModel
            .create(plan);
    }

    function findPlan(plan) {
        console.log(plan.offerId);
            return PlanModel
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
        return PlanModel
            .find();
    }
    function setModel(_model) {
        model = _model;
    }

}
