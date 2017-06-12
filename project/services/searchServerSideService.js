/**
 * Created by nancy on 6/7/2017.
 */

var app = require('../../express');

var themes = [
    {
    name: "Beach",
    image: "/images/beach.jpg"
},{
    name: "Historic",
    image: "/images/historic.jpg"
},{
    name: "Mountains",
    image: "/images/mountains.jpg"
},{
    name: "Romantic",
    image: "/images/romantic.jpg"
},{
    name: "Outdoors",
    image: "/images/outdoors.jpg"
},{
    name: "Skiing",
    image: "/images/skiing.jpg"
},{
    name: "Theme Park",
    image: "/images/themepark.jpg"
},{
    name: "Shopping",
    image: "/images/shopping.png"
},{
    name: "Natural Parks",
    image: "/images/naturalpark.jpg"
},{
    name: "Disney",
    image: "/images/disney.jpg"
},{
    name: "Carribean",
    image: "/images/carribean.jpg"
},{
    name: "Gambling",
    image: "/images/gambling.jpg"
}];

var airports = [
    {
    name:"London Heathrow",
    iataCode: "LHR"
},{
    name:"London Gatwick",
    iataCode: "LGW"
},{
    name:"Manchester",
    iataCode: "MAN"
},{
    name:"London Stansted",
    iataCode: "STN"
},{
    name:"London Luton",
    iataCode: "LTN"
},{
    name:"Edimburgh",
    iataCode: "EDI"
},{
    name:"Birmingham",
    iataCode: "BHX"
},{
    name:"Glasgow",
    iataCode: "GLA"
},{
    name:"Bristol",
    iataCode: "BRS"
},{
    name:"Newcastle",
    iataCode: "NCL"
},{
    name:"East Midlands",
    iataCode: "EMA"
},{
    name:"Belfast International",
    iataCode: "BFS"
},{
    name:"London City",
    iataCode: "LCY"
},{
    name:"Liverpool",
    iataCode: "LPL"
},{
    name:"Aberdeen",
    iataCode: "ABZ"
},{
    name:"Leeds Bradford",
    iataCode: "LBA"
},{
    name:"Belfast City",
    iataCode: "BHD"
},{
    name:"Southampton",
    iataCode: "SOU"
},{
    name:"Jersey",
    iataCode: "JER"
},{
    name:"Cardiff",
    iataCode: "CWL"
},{
    name:"London Southend Airport",
    iataCode: "SEN"
}];

var cities = [
    {
    city:"London",
    cityCode: "LHR"
},{
    city:"Manchester",
    cityCode: "MAN"
},{
    city:"London Stansted",
    cityCode: "STN"
},{
    city:"Edimburgh",
    cityCode: "EDI"
},{
    city:"Birmingham",
    cityCode: "BHX"
},{
    city:"Glasgow",
    cityCode: "GLA"
},{
    city:"Bristol",
    cityCode: "BRS"
},{
    city:"Newcastle",
    cityCode: "NCL"
},{
    city:"East Midlands",
    cityCode: "EMA"
},{
    city:"Belfast International",
    cityCode: "BFS"
},{
    city:"Liverpool",
    cityCode: "LPL"
},{
    city:"Aberdeen",
    cityCode: "ABZ"
},{
    city:"Leeds Bradford",
    cityCode: "LBA"
},{
    city:"Belfast City",
    cityCode: "BHD"
},{
    city:"Southampton",
    cityCode: "SOU"
},{
    city:"Jersey",
    cityCode: "JER"
},{
    city:"Cardiff",
    cityCode: "CWL"
}];

var offers=[
    {
        _id:"1",
        offerId:"VIRGIN AMERICA",
        realFare:"327 USD",
        discountedFare:"267 USD",
        validFromDate:"06-12-2017",
        validTillDate:"06-30-2017",
        fromCity:"London",
        toCity:"Manchester",
        departureDate:"06-12-2017",
        returnDate:"06-12-2017",
        offeredBy:"Adriana Black"
},{
        _id:"2",
        offerId:"Lufthansa",
        realFare:"317 USD",
        discountedFare:"207 USD",
        validFromDate:"06-12-2017",
        validTillDate:"06-30-2017",
        fromCity:"London",
        toCity:"Brihjh",
        departureDate:"06-12-2017",
        returnDate:"06-12-2017",
        offeredBy:"Adriana Black"

}];

var searchData=[
    {
    searchedOnDate: "07-06-2017",
    searchedSource: "Boston",
    searchedDestination: "New Castle",
    searchedThemes: "Romantic,Casino,Mountains",
    budget: "1000"
},{
    searchedOnDate: "07-05-2017",
    searchedSource: "Kanpur",
    searchedDestination: "Cairo",
    searchedThemes: "Deserts",
    budget: "4000"

}];

app.get('/api/project/user/:userId/search', findAllThemesForUser);
//app.get('/api/project/user/:userId/search', findAllAirportsForUser);
app.get('/api/project/user/:userId/makePlan',findAllCities);
app.get('/api/project/user/:userId/makePlan/offer',findPlan);
app.post('/api/project/user/:userId/makePlan',placePlan);
app.get('/api/project/user/:userId/offers',findAllOffers);
app.get('/api/project/user/:userId/getData',findAllData);

function findPlan(req, res) {
    var   offerId =req.query.offerId;
    var    fromCity = req.query.fromCity;
    var    toCity =req.query.toCity;
    var    departureDate =req.query.departureDate;
    var    returnDate=req.query.returnDate;
    var    validFromDate =req.query.validFromDate;
    var    validTillDate =req.query.validTillDate;
    var   realFare =req.query.realFare;
    var   discountedFare =req.query.discountedFare;
    if (offerId && fromCity && departureDate && discountedFare && realFare && returnDate && toCity && validFromDate && validTillDate) {
        for (var u in offers) {
            var offer = offers[u];
            if (offer.offerId === offerId && offer.fromCity === fromCity && offer.toCity === toCity && offer.departureDate === departureDate
            && offer.returnDate === returnDate && offer.validFromDate === validFromDate && offer.validTillDate === validTillDate &&
                offer.realFare === realFare && offer.discountedFare === discountedFare) {
                res.json(offer);
                return;
            }
        }
        res.sendStatus(404);
        return;

    }
    else {
        res.json(offers);
    }
}


function findAllThemesForUser(req, res) {
    var results = [];
  /*  for (var v in themes) {
          results.push(themes[v]);
        }*/
    results = [themes , airports];
    res.json(results);
}


function findAllCities(req, res){
    console.log('****');
    var results=cities;
    res.json(results);

}

function findAllOffers(req, res) {
    var results=offers;
    console.log("===")
    res.json(results);
    console.log(results);
    return;
}
function findAllData(req,res){
    var results=searchData;
    res.json(searchData);
}

function placePlan(req, res) {
    var offer = req.body;
    offer._id = (new Date()).getTime() + "";
    offers.push(offer);
    res.json(offer);
}

/*function findAllAirportsForUser(req, res) {
     var results1 = [];
        for (var v in airports) {
            results1.push(airports[v]);
        }
        res.json(results1);
    }*/


