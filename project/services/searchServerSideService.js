/**
 * Created by nancy on 6/7/2017.
 */

var app = require('../../express');

var themes = [{
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

var airports = [{
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

app.get('/api/project/user/:userId/search', findAllThemesForUser);
app.get('/api/project/user/:userId/search', findAllAirportsForUser);


function findAllThemesForUser(req, res) {
    var results = [];
    for (var v in themes) {
          results.push(themes[v]);
        }

    res.json(results);
}

function findAllAirportsForUser(req, res) {
     var results = [];
        for (var v in airports) {
            results.push(airports[v]);
        }
        res.json(results);
    }


