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
        name:"Atlanta",
        iataCode: "ATL"
    },{
        name:"Chicago",
        iataCode: "ORD"
    },{
        name:"Los Angeles",
        iataCode: "LAX"
    },{
        name:"Dallas-Fort Worth",
        iataCode: "DFW"
    },{
        name:"Denver",
        iataCode: "DEN"
    },{
        name:"New York",
        iataCode: "JFK"
    },{
        name:"San Francisco",
        iataCode: "SFO"
    },{
        name:"Charlotte",
        iataCode: "CLT"
    },{
        name:"Las Vegas",
        iataCode: "LAS"
    },{
        name:"Phoenix",
        iataCode: "PHX"
    },{
        name:"Houston",
        iataCode: "IAH"
    },{
        name:"Miami",
        iataCode: "MIA"
    },{
        name:"Orlando",
        iataCode: "MCO"
    },{
        name:"Newark",
        iataCode: "EWR"
    },{
        name:"Seattle",
        iataCode: "SEA"
    },{
        name:"Minneapolis",
        iataCode: "MSP"
    },{
        name:"Detroit",
        iataCode: "DTW"
    }];


var states = [

    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

var cities = [
    {
        city:"Atlanta",
        cityCode: "ATL"
    },{
        city:"Chicago",
        cityCode: "ORD"
    },{
        city:"Los Angeles",
        cityCode: "LAX"
    },{
        city:"Dallas-Fort Worth",
        cityCode: "DFW"
    },{
        city:"Denver",
        cityCode: "DEN"
    },{
        city:"New York",
        cityCode: "JFK"
    },{
        city:"San Francisco",
        cityCode: "SFO"
    },{
        city:"Charlotte",
        cityCode: "CLT"
    },{
        city:"Las Vegas",
        cityCode: "LAS"
    },{
        city:"Phoenix",
        cityCode: "PHX"
    },{
        city:"Houston",
        cityCode: "IAH"
    },{
        city:"Miami",
        cityCode: "MIA"
    },{
        city:"Orlando",
        cityCode: "MCO"
    },{
        city:"Newark",
        cityCode: "EWR"
    },{
        city:"Seattle",
        cityCode: "SEA"
    },{
        city:"Minneapolis",
        cityCode: "MSP"
    },{
        city:"Detroit",
        cityCode: "DTW"
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
        offeredBy:"Adriana Black: Wiz Tech"
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
        offeredBy:"Adriana Black: Wiz Tech"

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
    searchedSource: "Thar",
    searchedDestination: "Cairo",
    searchedThemes: "Deserts",
    budget: "4000"

}];

var flightResults =[
    {
        _id: 1,
        flightComp: "Lufthansa",
        flightNo: "LU234",
        elapsedTime: "1 hr 30 min",
        totalFare: 456,
        offeredBy: "Lufthansa",
        discountPercent: 'None',
        netValue: 456
    },
    {
        _id: 2,
        flightComp: "Emirates",
        flightNo: "EM876",
        elapsedTime: "1 hr 45 min",
        totalFare: 456,
        offeredBy: "Emirates",
        discountPercent: 15,
        netValue: 248
    }
];

var themeResults = [
    {
        destination: "city1",
        airlineCode: "air1",
        lowestFare: 123,
        lowestNonStopfare: 12,
        nonStopAirline: "Lufthansa"
    }
    ,
    {
        destination: "city2",
        airlineCode: "air2",
        lowestFare: 456,
        lowestNonStopfare: 56,
        nonStopAirline: "Emirates"
    }];

app.get('/api/project/user/:userId/search', findAllThemesForUser);
//app.get('/api/project/user/:userId/search', findAllAirportsForUser);
app.get('/api/project/user/:userId/makePlan',findAllCities);
app.get('/api/project/user/:userId/makePlan/offer',findPlan);
app.post('/api/project/user/:userId/makePlan',placePlan);
app.get('/api/project/user/:userId/offers',findAllOffers);
app.get('/api/project/user/:userId/getData',findAllData);
app.post('api/project/user/:userId/search/storeFlight' , storeUserFlightData);
app.post('api/project/user/:userId/search/storeTheme' , storeUserThemeData);

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
            console.log("find plan SERVER...." +
                offer.validFromDate + "," +
                offer.validTillDate+ "," +
                offer.offerId+ "," +
                offer.fromCity+ "," +
                offer.toCity + "," +
                offer.departureDate + "," +
                offer.returnDate+ "," +
                offer.realFare+ "," +
                offer.discountedFare);

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
     var results=cities;
    res.json(results);

}

function findAllOffers(req, res) {
    var results=offers;
    res.json(results);
    return;
}
function findAllData(req,res){
    var criteria = req.query.criteria ;
    var userId = req.query.userId;
    if(criteria === "Theme")
    {
        var results=themeResults;
        res.json(themeResults);
    }

    if(criteria === "Destination City" || "Origin City"  || "Budget")
    {
        var results=flightResults;
        res.json(flightResults);
    }

}

function placePlan(req, res) {
    var offer = req.body;
    offer._id = (new Date()).getTime() + "";
    offers.push(offer);
    res.json(offer);
}


function storeUserThemeData(req,res) {
    var themeData = req.body;
    themeData._id = (new Date()).getTime() + "";
    for (var theme in themeData) {
        themeResults.push(themeData[theme]);
    }
    // themeResults.push(user);
    res.json(themeResults);
}

function storeUserFlightData(req,res)
{
    var flightData = req.body;
    console.log(req.body);
    flightData._id = (new Date()).getTime() + "";
    for (var flight in flightData) {
        flightResults.push(flightData[flight]);
    }
    res.json(flightData);

}

/*function findAllAirportsForUser(req, res) {
     var results1 = [];
        for (var v in airports) {
            results1.push(airports[v]);
        }
        res.json(results1);
    }*/

