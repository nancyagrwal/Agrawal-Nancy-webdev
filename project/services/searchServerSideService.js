module.exports = function(app, model) {
    var PlanModel = model.PlanModel;
    var LogsModel = model.LogsModel;

//var app = require('../../express');

    var themes = [
        {
            name: "Beach",
            image: "/images/beach.jpg"
        }, {
            name: "Historic",
            image: "/images/historic.jpg"
        }, {
            name: "Mountains",
            image: "/images/mountains.jpg"
        }, {
            name: "Romantic",
            image: "/images/romantic.jpg"
        }, {
            name: "Outdoors",
            image: "/images/outdoors.jpg"
        }, {
            name: "Skiing",
            image: "/images/skiing.jpg"
        }, {
            name: "Theme Park",
            image: "/images/themepark.jpg"
        }, {
            name: "Shopping",
            image: "/images/shopping.png"
        }, {
            name: "Natural Parks",
            image: "/images/naturalpark.jpg"
        }, {
            name: "Disney",
            image: "/images/disney.jpg"
        }, {
            name: "Carribean",
            image: "/images/carribean.jpg"
        }, {
            name: "Gambling",
            image: "/images/gambling.jpg"
        }];

    var airports = [
        {
            name: "Atlanta",
            iataCode: "ATL"
        }, {
            name: "Chicago",
            iataCode: "ORD"
        }, {
            name: "Los Angeles",
            iataCode: "LAX"
        }, {
            name: "Dallas-Fort Worth",
            iataCode: "DFW"
        }, {
            name: "Denver",
            iataCode: "DEN"
        }, {
            name: "New York",
            iataCode: "JFK"
        }, {
            name: "San Francisco",
            iataCode: "SFO"
        }, {
            name: "Charlotte",
            iataCode: "CLT"
        }, {
            name: "Las Vegas",
            iataCode: "LAS"
        }, {
            name: "Phoenix",
            iataCode: "PHX"
        }, {
            name: "Houston",
            iataCode: "IAH"
        }, {
            name: "Miami",
            iataCode: "MIA"
        }, {
            name: "Orlando",
            iataCode: "MCO"
        }, {
            name: "Newark",
            iataCode: "EWR"
        }, {
            name: "Seattle",
            iataCode: "SEA"
        }, {
            name: "Minneapolis",
            iataCode: "MSP"
        }, {
            name: "Detroit",
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
    var airlineCodeMap=[
        {
            "iata":"0A",
            "name":"Amber Air"
        },
        {
            "iata":"0B",
            "name":"Blue Air"
        },
        {
            "iata":"0D",
            "name":"Darwin Airline"
        },
        {
            "iata":"2B",
            "name":"Aerocondor"
        },
        {
            "iata":"2C",
            "name":"SNCF"
        },
        {
            "iata":"2E",
            "name":"Smokey Bay Air"
        },
        {
            "iata":"2I",
            "name":"Star Peru"
        },
        {
            "iata":"2J",
            "name":"Air Burkina"
        },
        {
            "iata":"2K",
            "name":"Aerolineas Galapagos"
        },
        {
            "iata":"2L",
            "name":"Helvetic Airways"
        },
        {
            "iata":"2M",
            "name":"Moldavian Airlines"
        },
        {
            "iata":"2N",
            "name":"Nextjet"
        },
        {
            "iata":"2O",
            "name":"Island Air Service"
        },
        {
            "iata":"2P",
            "name":"Air Philippines"
        },
        {
            "iata":"2Q",
            "name":"Avitrans Nordic"
        },
        {
            "iata":"2U",
            "name":"Sun dOr International Air"
        },
        {
            "iata":"2W",
            "name":"Welcome Air"
        },
        {
            "iata":"2Y",
            "name":"Air Andaman"
        },
        {
            "iata":"2Z",
            "name":"TTA"
        },
        {
            "iata":"3B",
            "name":"Job Air"
        },
        {
            "iata":"3C",
            "name":"Regionsair"
        },
        {
            "iata":"3E",
            "name":"Multi-Aero, Inc. d/b/a Air Choice One"
        },
        {
            "iata":"3F",
            "name":"Pacific Airways Inc"
        },
        {
            "iata":"3H",
            "name":"Air Inuit"
        },
        {
            "iata":"3I",
            "name":"Aerolineas Del Sur"
        },
        {
            "iata":"3K",
            "name":"Jetstar Asia"
        },
        {
            "iata":"3L",
            "name":"Intersky Luftfahrt"
        },
        {
            "iata":"3M",
            "name":"Gulfstream"
        },
        {
            "iata":"3O",
            "name":"Air Arabia Maroc"
        },
        {
            "iata":"3P",
            "name":"Tiara Air Aruba"
        },
        {
            "iata":"3R",
            "name":"Gromov Airline"
        },
        {
            "iata":"3S",
            "name":"Air Antilles Express"
        },
        {
            "iata":"3T",
            "name":"Turan Air"
        },
        {
            "iata":"3U",
            "name":"Sichuan Airlines"
        },
        {
            "iata":"3W",
            "name":"EuroManx"
        },
        {
            "iata":"3Y",
            "name":"Kartika Airlines"
        },
        {
            "iata":"3Z",
            "name":"Everts Air"
        },
        {
            "iata":"3?",
            "name":"Moskovia airlines"
        },
        {
            "iata":"4C",
            "name":"Aires"
        },
        {
            "iata":"4D",
            "name":"Air Sinai"
        },
        {
            "iata":"4E",
            "name":"Tanana Air Service"
        },
        {
            "iata":"4G",
            "name":"Gazprom Avia"
        },
        {
            "iata":"4H",
            "name":"United Airways Bangladesh"
        },
        {
            "iata":"4J",
            "name":"Somon Air"
        },
        {
            "iata":"4K",
            "name":"Kenn Borek Air"
        },
        {
            "iata":"4L",
            "name":"Euroline"
        },
        {
            "iata":"4M",
            "name":"LAN Argentina"
        },
        {
            "iata":"4N",
            "name":"Air North"
        },
        {
            "iata":"4O",
            "name":"Interjet"
        },
        {
            "iata":"4Q",
            "name":"Safi Airways"
        },
        {
            "iata":"4R",
            "name":"Hamburg International"
        },
        {
            "iata":"4T",
            "name":"Belair Airlines"
        },
        {
            "iata":"4U",
            "name":"Germanwings"
        },
        {
            "iata":"4V",
            "name":"Lignes Aeriennes Congolaises"
        },
        {
            "iata":"4W",
            "name":"Warbelow"
        },
        {
            "iata":"4Y",
            "name":"Flight Alaska"
        },
        {
            "iata":"5C",
            "name":"NatureAir"
        },
        {
            "iata":"5G",
            "name":"Skyservice Airlines"
        },
        {
            "iata":"5H",
            "name":"Five Forty Aviation"
        },
        {
            "iata":"5J",
            "name":"Cebu Air"
        },
        {
            "iata":"5L",
            "name":"Aerosur"
        },
        {
            "iata":"5M",
            "name":"FlyMontserrat"
        },
        {
            "iata":"5N",
            "name":"Nordavia"
        },
        {
            "iata":"5O",
            "name":"Europe Airpost"
        },
        {
            "iata":"5P",
            "name":"Aerolinea Principal"
        },
        {
            "iata":"5Q",
            "name":"BQB Air"
        },
        {
            "iata":"5R",
            "name":"Karthago Airlines"
        },
        {
            "iata":"5T",
            "name":"Canadian North"
        },
        {
            "iata":"5U",
            "name":"Royal Belau Airways"
        },
        {
            "iata":"5V",
            "name":"Lviv Airlines"
        },
        {
            "iata":"5W",
            "name":"Astraeus"
        },
        {
            "iata":"5Y",
            "name":"Express Rail Link"
        },
        {
            "iata":"5Z",
            "name":"Bismillah Airlines"
        },
        {
            "iata":"5?",
            "name":"Odessa Air"
        },
        {
            "iata":"6A",
            "name":"Aviacsa"
        },
        {
            "iata":"6C",
            "name":"Air Timor"
        },
        {
            "iata":"6E",
            "name":"IndiGo Air"
        },
        {
            "iata":"6F",
            "name":"MAT Airways"
        },
        {
            "iata":"6G",
            "name":"Gulfstream Connection"
        },
        {
            "iata":"6H",
            "name":"Israir Airlines"
        },
        {
            "iata":"6I",
            "name":"Fly 6ix"
        },
        {
            "iata":"6J",
            "name":"Jubba Airways"
        },
        {
            "iata":"6K",
            "name":"KyrgyzTransAvia"
        },
        {
            "iata":"6L",
            "name":"Aklak Air"
        },
        {
            "iata":"6N",
            "name":"Nordic Airways"
        },
        {
            "iata":"6P",
            "name":"Gryphon Airlines"
        },
        {
            "iata":"6Q",
            "name":"Cham Wings Airlines"
        },
        {
            "iata":"6R",
            "name":"Alrosa"
        },
        {
            "iata":"6S",
            "name":"Kato Airline"
        },
        {
            "iata":"6T",
            "name":"Air Mandalay Ltd"
        },
        {
            "iata":"6V",
            "name":"Mars RK"
        },
        {
            "iata":"6W",
            "name":"Saratov Air"
        },
        {
            "iata":"6Y",
            "name":"SMARTLYNX AIRLINES Ltd"
        },
        {
            "iata":"6Z",
            "name":"Euro-Asia Air"
        },
        {
            "iata":"7C",
            "name":"Jeju Airlines"
        },
        {
            "iata":"7D",
            "name":"Donbass Aero"
        },
        {
            "iata":"7E",
            "name":"Sylt Air Gmbh"
        },
        {
            "iata":"7F",
            "name":"First Air"
        },
        {
            "iata":"7G",
            "name":"Star Flyer"
        },
        {
            "iata":"7H",
            "name":"Era Aviation"
        },
        {
            "iata":"7I",
            "name":"Insel Air International"
        },
        {
            "iata":"7J",
            "name":"Tajik Air"
        },
        {
            "iata":"7K",
            "name":"Kogalym Avia"
        },
        {
            "iata":"7L",
            "name":"Aerocaribbean"
        },
        {
            "iata":"7M",
            "name":"Mayair, S.A. de C.V."
        },
        {
            "iata":"7N",
            "name":"National Airways"
        },
        {
            "iata":"7P",
            "name":"Air Castilla"
        },
        {
            "iata":"7R",
            "name":"Rusline Air"
        },
        {
            "iata":"7V",
            "name":"Federal Airlines (Pty) Ltd"
        },
        {
            "iata":"7W",
            "name":"Wind Rose"
        },
        {
            "iata":"7Z",
            "name":"Halcyonair Cabo Verde Airways S.A."
        },
        {
            "iata":"8B",
            "name":"Business Air Centre Co"
        },
        {
            "iata":"8D",
            "name":"Servant Air, Inc."
        },
        {
            "iata":"8E",
            "name":"Bering Air"
        },
        {
            "iata":"8F",
            "name":"STP Airways"
        },
        {
            "iata":"8G",
            "name":"Girjet"
        },
        {
            "iata":"8J",
            "name":"Jet4You.Com"
        },
        {
            "iata":"8L",
            "name":"Lucky Air Co. Ltd."
        },
        {
            "iata":"8M",
            "name":"Myanmar Airways"
        },
        {
            "iata":"8N",
            "name":"Barents Airlink"
        },
        {
            "iata":"8O",
            "name":"West Coast Air"
        },
        {
            "iata":"8P",
            "name":"Pacific Coastal Airlines"
        },
        {
            "iata":"8Q",
            "name":"Onur Air"
        },
        {
            "iata":"8R",
            "name":"TRIP Linhas Aereas S.A."
        },
        {
            "iata":"8T",
            "name":"Air Tindi Ltd"
        },
        {
            "iata":"8U",
            "name":"Afriqiyah Airways"
        },
        {
            "iata":"8V",
            "name":"Wright Air Service"
        },
        {
            "iata":"8W",
            "name":"Private Wings"
        },
        {
            "iata":"9B",
            "name":"Accesrail"
        },
        {
            "iata":"9C",
            "name":"Spring Airlines"
        },
        {
            "iata":"9D",
            "name":"Toumai Air Tchad"
        },
        {
            "iata":"9E",
            "name":"Pinnacle Airlines"
        },
        {
            "iata":"9F",
            "name":"Eurostar"
        },
        {
            "iata":"9G",
            "name":"9G Rail Ltd"
        },
        {
            "iata":"9H",
            "name":"Dutch Antilles Express"
        },
        {
            "iata":"9J",
            "name":"Dana Airlines Ltd"
        },
        {
            "iata":"9K",
            "name":"Cape Air"
        },
        {
            "iata":"9L",
            "name":"Colgan Airlines"
        },
        {
            "iata":"9M",
            "name":"Central Mountain Air"
        },
        {
            "iata":"9O",
            "name":"National Airways Cameroon"
        },
        {
            "iata":"9R",
            "name":"Satena"
        },
        {
            "iata":"9U",
            "name":"Air Moldova"
        },
        {
            "iata":"9V",
            "name":"Avior Airlines"
        },
        {
            "iata":"9W",
            "name":"Jet Airways"
        },
        {
            "iata":"9X",
            "name":"New Axis Airways"
        },
        {
            "iata":"9Y",
            "name":"Air Kazakstan"
        },
        {
            "iata":"A0",
            "name":"L'Avion"
        },
        {
            "iata":"A2",
            "name":"Astra Airlines"
        },
        {
            "iata":"A3",
            "name":"Aegean Airlines"
        },
        {
            "iata":"A4",
            "name":"Aerocon"
        },
        {
            "iata":"A5",
            "name":"Airlinair"
        },
        {
            "iata":"A6",
            "name":"Air Alps Aviation"
        },
        {
            "iata":"A7",
            "name":"Air Comet"
        },
        {
            "iata":"A8",
            "name":"Benin Golf Air"
        },
        {
            "iata":"A9",
            "name":"Georgian Airways"
        },
        {
            "iata":"AA",
            "name":"American Airlines"
        },
        {
            "iata":"AB",
            "name":"Air Berlin"
        },
        {
            "iata":"AC",
            "name":"Air Canada"
        },
        {
            "iata":"AD",
            "name":"Azul Airlines"
        },
        {
            "iata":"AE",
            "name":"Mandarin Airlines"
        },
        {
            "iata":"AF",
            "name":"Air France"
        },
        {
            "iata":"AH",
            "name":"Air Algerie"
        },
        {
            "iata":"AI",
            "name":"Nacil Air India"
        },
        {
            "iata":"AJ",
            "name":"Aerocontractors"
        },
        {
            "iata":"AK",
            "name":"Airasia"
        },
        {
            "iata":"AM",
            "name":"Aeromexico"
        },
        {
            "iata":"AO",
            "name":"Avianova"
        },
        {
            "iata":"AP",
            "name":"Air One"
        },
        {
            "iata":"AQ",
            "name":"Aloha Airlines"
        },
        {
            "iata":"AR",
            "name":"Aerolineas Argentinas"
        },
        {
            "iata":"AS",
            "name":"Alaska Airlines"
        },
        {
            "iata":"AT",
            "name":"Royal Air Maroc"
        },
        {
            "iata":"AU",
            "name":"Austral Lineas Aereas"
        },
        {
            "iata":"AV",
            "name":"Avianca"
        },
        {
            "iata":"AW",
            "name":"Africa World Airlines Limited"
        },
        {
            "iata":"AX",
            "name":"American Connection"
        },
        {
            "iata":"AY",
            "name":"Finnair"
        },
        {
            "iata":"AZ",
            "name":"Alitalia"
        },
        {
            "iata":"B2",
            "name":"Belavia"
        },
        {
            "iata":"B3",
            "name":"Bellview Airlines"
        },
        {
            "iata":"B5",
            "name":"East African Safari Air"
        },
        {
            "iata":"B6",
            "name":"JetBlue"
        },
        {
            "iata":"B7",
            "name":"Uni Air"
        },
        {
            "iata":"B8",
            "name":"Eritrean Airlines"
        },
        {
            "iata":"B9",
            "name":"Iran Air Tours"
        },
        {
            "iata":"BA",
            "name":"British Airways"
        },
        {
            "iata":"BB",
            "name":"Seaborne Airlines"
        },
        {
            "iata":"BC",
            "name":"Skymark Airlines"
        },
        {
            "iata":"BD",
            "name":"BMI"
        },
        {
            "iata":"BE",
            "name":"Flybe"
        },
        {
            "iata":"BF",
            "name":"Vincent Aviation"
        },
        {
            "iata":"BG",
            "name":"Biman Airlines"
        },
        {
            "iata":"BH",
            "name":"Hawkair"
        },
        {
            "iata":"BI",
            "name":"Royal Brunei"
        },
        {
            "iata":"BJ",
            "name":"Nouvelair"
        },
        {
            "iata":"BK",
            "name":"Okay Airways"
        },
        {
            "iata":"BL",
            "name":"Pacific Airlines"
        },
        {
            "iata":"BN",
            "name":"Bahrain Air"
        },
        {
            "iata":"BP",
            "name":"Air Botswana"
        },
        {
            "iata":"BR",
            "name":"Eva Air"
        },
        {
            "iata":"BS",
            "name":"British International"
        },
        {
            "iata":"BT",
            "name":"Air Baltic"
        },
        {
            "iata":"BU",
            "name":"SAS Norway"
        },
        {
            "iata":"BV",
            "name":"Blue Panorama Air"
        },
        {
            "iata":"BW",
            "name":"Caribbean Airlines"
        },
        {
            "iata":"BX",
            "name":"Coast Air"
        },
        {
            "iata":"C3",
            "name":"ICAR Airlines"
        },
        {
            "iata":"C4",
            "name":"Alma De Mexico"
        },
        {
            "iata":"C5",
            "name":"CommutAir"
        },
        {
            "iata":"C7",
            "name":"Rico Linhas Aereas"
        },
        {
            "iata":"C8",
            "name":"CRONOSAIR"
        },
        {
            "iata":"C9",
            "name":"Cirrus Airlines"
        },
        {
            "iata":"CA",
            "name":"Air China"
        },
        {
            "iata":"CB",
            "name":"Scotairways"
        },
        {
            "iata":"CC",
            "name":"Macair Airlines"
        },
        {
            "iata":"CE",
            "name":"Nationwide Air"
        },
        {
            "iata":"CF",
            "name":"City Airline"
        },
        {
            "iata":"CG",
            "name":"Airlines PNG"
        },
        {
            "iata":"CH",
            "name":"Bemidji Airlines"
        },
        {
            "iata":"CI",
            "name":"China Airlines"
        },
        {
            "iata":"CJ",
            "name":"China Northern Airlines"
        },
        {
            "iata":"CL",
            "name":"Lufthansa CityLine"
        },
        {
            "iata":"CM",
            "name":"Copa Airlines"
        },
        {
            "iata":"CN",
            "name":"Islands Nationair"
        },
        {
            "iata":"CO",
            "name":"Continental Airlines"
        },
        {
            "iata":"CQ",
            "name":"Sunshine Express Airlines"
        },
        {
            "iata":"CT",
            "name":"Civil Air Transport"
        },
        {
            "iata":"CU",
            "name":"Cubana"
        },
        {
            "iata":"CW",
            "name":"Air Marshall Islands"
        },
        {
            "iata":"CX",
            "name":"Cathay Pacific"
        },
        {
            "iata":"CY",
            "name":"Cyprus Airways"
        },
        {
            "iata":"CZ",
            "name":"China Southern Airlines"
        },
        {
            "iata":"D2",
            "name":"Severstal Air"
        },
        {
            "iata":"D3",
            "name":"Daallo Airlines"
        },
        {
            "iata":"D4",
            "name":"Alidaunia"
        },
        {
            "iata":"D6",
            "name":"Inter Air"
        },
        {
            "iata":"D7",
            "name":"Airasia X"
        },
        {
            "iata":"D9",
            "name":"Aeroflot-Don"
        },
        {
            "iata":"DB",
            "name":"Brit Air"
        },
        {
            "iata":"DC",
            "name":"Golden Air"
        },
        {
            "iata":"DD",
            "name":"Nok Air"
        },
        {
            "iata":"DE",
            "name":"Condor"
        },
        {
            "iata":"DG",
            "name":"South East Asian Airlines"
        },
        {
            "iata":"DH",
            "name":"Asia Sahand Airlines"
        },
        {
            "iata":"DI",
            "name":"DBA"
        },
        {
            "iata":"DJ",
            "name":"Virgin Blue"
        },
        {
            "iata":"DL",
            "name":"Delta Air Lines"
        },
        {
            "iata":"DN",
            "name":"Air Deccan"
        },
        {
            "iata":"DO",
            "name":"Air Vallee"
        },
        {
            "iata":"DR",
            "name":"Air Link"
        },
        {
            "iata":"DT",
            "name":"Taag"
        },
        {
            "iata":"DU",
            "name":"Hemus Air"
        },
        {
            "iata":"DV",
            "name":"Jsc Aircompany Scat"
        },
        {
            "iata":"DX",
            "name":"Danish Air Transport"
        },
        {
            "iata":"DY",
            "name":"Norwegian Air"
        },
        {
            "iata":"DZ",
            "name":"Djibouti Air"
        },
        {
            "iata":"E0",
            "name":"Eos Airlines"
        },
        {
            "iata":"E3",
            "name":"Domodedovo Airlines"
        },
        {
            "iata":"E4",
            "name":"Eastok Avia"
        },
        {
            "iata":"E5",
            "name":"Samara Airlines"
        },
        {
            "iata":"E8",
            "name":"JSC Semeyavia"
        },
        {
            "iata":"EA",
            "name":"European Air Express"
        },
        {
            "iata":"EC",
            "name":"Avialeasing"
        },
        {
            "iata":"EE",
            "name":"Aero Airlines"
        },
        {
            "iata":"EF",
            "name":"Far Eastern Air"
        },
        {
            "iata":"EG",
            "name":"Japan Asia Airways"
        },
        {
            "iata":"EI",
            "name":"Aer Lingus"
        },
        {
            "iata":"EJ",
            "name":"New England Airlines"
        },
        {
            "iata":"EK",
            "name":"Emirates"
        },
        {
            "iata":"EL",
            "name":"Air Nippon"
        },
        {
            "iata":"EN",
            "name":"Air Dolomiti"
        },
        {
            "iata":"EO",
            "name":"Hewa Bora Airways"
        },
        {
            "iata":"EP",
            "name":"Iran Aseman Airlines"
        },
        {
            "iata":"EQ",
            "name":"TAME Linea Aerea del Ecuador"
        },
        {
            "iata":"ET",
            "name":"Ethiopian Airlines"
        },
        {
            "iata":"EU",
            "name":"Chengdu Airlines"
        },
        {
            "iata":"EW",
            "name":"Eurowings"
        },
        {
            "iata":"EY",
            "name":"Etihad Airways"
        },
        {
            "iata":"EZ",
            "name":"Sun Air Of Scandinavia"
        },
        {
            "iata":"F2",
            "name":"SafariLink"
        },
        {
            "iata":"F5",
            "name":"Fly540 S.A"
        },
        {
            "iata":"F7",
            "name":"Flybaboo"
        },
        {
            "iata":"F9",
            "name":"Frontier Airlines"
        },
        {
            "iata":"FB",
            "name":"Bulgaria Air"
        },
        {
            "iata":"FC",
            "name":"Finncomm Airlines"
        },
        {
            "iata":"FD",
            "name":"Thai Airasia"
        },
        {
            "iata":"FE",
            "name":"Far Eastern Air Transport"
        },
        {
            "iata":"FG",
            "name":"Ariana Afghan Airlines"
        },
        {
            "iata":"FI",
            "name":"Icelandair"
        },
        {
            "iata":"FJ",
            "name":"Air Pacific"
        },
        {
            "iata":"FL",
            "name":"Airtran Airways"
        },
        {
            "iata":"FM",
            "name":"Shanghai Airlines"
        },
        {
            "iata":"FN",
            "name":"Regional Air Lines"
        },
        {
            "iata":"FO",
            "name":"Felix Airways"
        },
        {
            "iata":"FP",
            "name":"Freedom Air"
        },
        {
            "iata":"FQ",
            "name":"Brindabella Airlines"
        },
        {
            "iata":"FR",
            "name":"Ryanair"
        },
        {
            "iata":"FS",
            "name":"ItAli Airlines"
        },
        {
            "iata":"FT",
            "name":"Siem Reap Airways Intl"
        },
        {
            "iata":"FV",
            "name":"GTK Rossia"
        },
        {
            "iata":"FW",
            "name":"IBEX Airlines"
        },
        {
            "iata":"FY",
            "name":"Firefly"
        },
        {
            "iata":"FZ",
            "name":"Flydubai"
        },
        {
            "iata":"G0",
            "name":"Ghana Intl Airlines"
        },
        {
            "iata":"G3",
            "name":"Gol Transportes Aereos"
        },
        {
            "iata":"G4",
            "name":"Allegiant Air LLC"
        },
        {
            "iata":"G8",
            "name":"Go Air"
        },
        {
            "iata":"G9",
            "name":"Air Arabia"
        },
        {
            "iata":"GA",
            "name":"Garuda Indonesia"
        },
        {
            "iata":"GE",
            "name":"Transasia Airways"
        },
        {
            "iata":"GF",
            "name":"Gulf Air"
        },
        {
            "iata":"GI",
            "name":"Itek Air"
        },
        {
            "iata":"GJ",
            "name":"Eurofly"
        },
        {
            "iata":"GL",
            "name":"Air Greenland"
        },
        {
            "iata":"GQ",
            "name":"Big Sky Airlines"
        },
        {
            "iata":"GR",
            "name":"Aurigny Air"
        },
        {
            "iata":"GS",
            "name":"TianJin Airlines"
        },
        {
            "iata":"GT",
            "name":"GB Airways"
        },
        {
            "iata":"GU",
            "name":"Aviateca"
        },
        {
            "iata":"GV",
            "name":"Grant Aviation, Inc."
        },
        {
            "iata":"GW",
            "name":"Kuban Airlines"
        },
        {
            "iata":"GY",
            "name":"Gabon Airlines"
        },
        {
            "iata":"GZ",
            "name":"Air Rarotonga"
        },
        {
            "iata":"H2",
            "name":"Sky Airline"
        },
        {
            "iata":"H3",
            "name":"Harbour Air"
        },
        {
            "iata":"H4",
            "name":"Heli Securite"
        },
        {
            "iata":"H7",
            "name":"Eagle Air"
        },
        {
            "iata":"H8",
            "name":"Dalavia"
        },
        {
            "iata":"H9",
            "name":"Pegasus Airlines"
        },
        {
            "iata":"HA",
            "name":"Hawaiian Airlines"
        },
        {
            "iata":"HB",
            "name":"Homer Air"
        },
        {
            "iata":"HD",
            "name":"Hokkaido International Airlines"
        },
        {
            "iata":"HE",
            "name":"LGW"
        },
        {
            "iata":"HF",
            "name":"Hapagfly"
        },
        {
            "iata":"HG",
            "name":"Niki"
        },
        {
            "iata":"HH",
            "name":"Taban Air"
        },
        {
            "iata":"HI",
            "name":"Papillon Airways"
        },
        {
            "iata":"HM",
            "name":"Air Seychelles"
        },
        {
            "iata":"HO",
            "name":"Juneyao Airlines"
        },
        {
            "iata":"HR",
            "name":"Hahn Air"
        },
        {
            "iata":"HS",
            "name":"Svenska Air"
        },
        {
            "iata":"HT",
            "name":"Aeromist-Kharkov"
        },
        {
            "iata":"HU",
            "name":"Hainan Airlines"
        },
        {
            "iata":"HV",
            "name":"Transavia.com"
        },
        {
            "iata":"HW",
            "name":"North-Wright Airways Ltd."
        },
        {
            "iata":"HX",
            "name":"Hong Kong Airlines"
        },
        {
            "iata":"HY",
            "name":"Uzbekistan Airways"
        },
        {
            "iata":"HZ",
            "name":"SAT Airlines"
        },
        {
            "iata":"I2",
            "name":"Munich Airlines"
        },
        {
            "iata":"I3",
            "name":"ATA Airlines"
        },
        {
            "iata":"I4",
            "name":"International AirLink"
        },
        {
            "iata":"I5",
            "name":"Compagnie Aerienne Mali"
        },
        {
            "iata":"I7",
            "name":"Paramount Airways"
        },
        {
            "iata":"I8",
            "name":"Izhavia"
        },
        {
            "iata":"I9",
            "name":"Air Italy"
        },
        {
            "iata":"IA",
            "name":"Iraqi Airways"
        },
        {
            "iata":"IB",
            "name":"Iberia"
        },
        {
            "iata":"IC",
            "name":"Nacil Indian Airline"
        },
        {
            "iata":"IE",
            "name":"Solomon Airlines"
        },
        {
            "iata":"IF",
            "name":"Islas Airways"
        },
        {
            "iata":"IG",
            "name":"Meridiana"
        },
        {
            "iata":"IH",
            "name":"Falcon Air"
        },
        {
            "iata":"IK",
            "name":"Imair Airline"
        },
        {
            "iata":"IN",
            "name":"Macedonian Airlines"
        },
        {
            "iata":"IP",
            "name":"Atyrau Aue Joly"
        },
        {
            "iata":"IQ",
            "name":"Augsburg Airways"
        },
        {
            "iata":"IR",
            "name":"Iran Air"
        },
        {
            "iata":"IS",
            "name":"Island Airlines, Inc."
        },
        {
            "iata":"IT",
            "name":"Kingfisher Airlines"
        },
        {
            "iata":"IV",
            "name":"Wind Jet"
        },
        {
            "iata":"IX",
            "name":"Air India Express"
        },
        {
            "iata":"IY",
            "name":"Yemenia Airways"
        },
        {
            "iata":"IZ",
            "name":"Arkia"
        },
        {
            "iata":"J0",
            "name":"Jetlink Express"
        },
        {
            "iata":"J2",
            "name":"Azerbaijan Airlines"
        },
        {
            "iata":"J3",
            "name":"Northwestern Air"
        },
        {
            "iata":"J4",
            "name":"Jet For You"
        },
        {
            "iata":"J5",
            "name":"Alaska Seaplane Service L.L.C."
        },
        {
            "iata":"J6",
            "name":"Avcom"
        },
        {
            "iata":"J7",
            "name":"Centre-Avia Airlines"
        },
        {
            "iata":"J8",
            "name":"Berjaya Air"
        },
        {
            "iata":"J9",
            "name":"Jazeera Airways"
        },
        {
            "iata":"JA",
            "name":"B&H Airlines"
        },
        {
            "iata":"JB",
            "name":"Helijet International"
        },
        {
            "iata":"JD",
            "name":"Beijing Capital Airlines"
        },
        {
            "iata":"JE",
            "name":"Mango"
        },
        {
            "iata":"JH",
            "name":"Fuji Dream Airlines"
        },
        {
            "iata":"JJ",
            "name":"Tam Linhas Aereas"
        },
        {
            "iata":"JK",
            "name":"Spanair"
        },
        {
            "iata":"JL",
            "name":"Japan Airlines"
        },
        {
            "iata":"JM",
            "name":"Air Jamaica"
        },
        {
            "iata":"JN",
            "name":"Avia-Jaynar"
        },
        {
            "iata":"JO",
            "name":"Jalways"
        },
        {
            "iata":"JP",
            "name":"Adria Airways"
        },
        {
            "iata":"JQ",
            "name":"Jetstar"
        },
        {
            "iata":"JR",
            "name":"Joy Air"
        },
        {
            "iata":"JS",
            "name":"Air Koryo"
        },
        {
            "iata":"JT",
            "name":"Lion Air"
        },
        {
            "iata":"JU",
            "name":"Jat Airways"
        },
        {
            "iata":"JV",
            "name":"Bearskin Airlines"
        },
        {
            "iata":"JX",
            "name":"Nice Helicopteres"
        },
        {
            "iata":"JY",
            "name":"Air Turks "
        },
        {
            "iata":"JZ",
            "name":"Skyways Ab"
        },
        {
            "iata":"K2",
            "name":"Eurolot"
        },
        {
            "iata":"K3",
            "name":"Taquan Air Services"
        },
        {
            "iata":"K5",
            "name":"Wings Of Alaska SeaPort Airline"
        },
        {
            "iata":"K6",
            "name":"Bravo Air Congo"
        },
        {
            "iata":"K7",
            "name":"Air KBZ"
        },
        {
            "iata":"K8",
            "name":"Zambia Skyways"
        },
        {
            "iata":"K9",
            "name":"TonleSap Airlines"
        },
        {
            "iata":"KA",
            "name":"Dragonair"
        },
        {
            "iata":"KB",
            "name":"Druk Air"
        },
        {
            "iata":"KC",
            "name":"Air Astana"
        },
        {
            "iata":"KD",
            "name":"KD Avia"
        },
        {
            "iata":"KE",
            "name":"Korean Air"
        },
        {
            "iata":"KF",
            "name":"Blue1"
        },
        {
            "iata":"KG",
            "name":"Aerogaviota"
        },
        {
            "iata":"KH",
            "name":"Kyrgyz Air"
        },
        {
            "iata":"KI",
            "name":"Kuban Airlines"
        },
        {
            "iata":"KJ",
            "name":"BMED"
        },
        {
            "iata":"KK",
            "name":"Atlasjet Airlines"
        },
        {
            "iata":"KL",
            "name":"KLM"
        },
        {
            "iata":"KM",
            "name":"Air Malta"
        },
        {
            "iata":"KN",
            "name":"China United Airlines"
        },
        {
            "iata":"KO",
            "name":"KHors"
        },
        {
            "iata":"KQ",
            "name":"Kenya Airways"
        },
        {
            "iata":"KR",
            "name":"Comores Aviation"
        },
        {
            "iata":"KS",
            "name":"Penair"
        },
        {
            "iata":"KT",
            "name":"Katmai Air LLC"
        },
        {
            "iata":"KU",
            "name":"Kuwait Airways"
        },
        {
            "iata":"KV",
            "name":"Kavminvody Avia"
        },
        {
            "iata":"KW",
            "name":"Wataniya Airways"
        },
        {
            "iata":"KX",
            "name":"Cayman Airways"
        },
        {
            "iata":"KY",
            "name":"Kunming Airlines"
        },
        {
            "iata":"L3",
            "name":"LTU"
        },
        {
            "iata":"L5",
            "name":"Lufttransport As"
        },
        {
            "iata":"L6",
            "name":"Tbilaviamsheni"
        },
        {
            "iata":"L9",
            "name":"Belle Air Europe"
        },
        {
            "iata":"LA",
            "name":"Lan Airlines"
        },
        {
            "iata":"LF",
            "name":"Flynordic"
        },
        {
            "iata":"LG",
            "name":"Luxair"
        },
        {
            "iata":"LH",
            "name":"Lufthansa"
        },
        {
            "iata":"LI",
            "name":"Liat"
        },
        {
            "iata":"LJ",
            "name":"Jin Air"
        },
        {
            "iata":"LM",
            "name":"Livingston"
        },
        {
            "iata":"LN",
            "name":"Libyan Airlines"
        },
        {
            "iata":"LO",
            "name":"LOT Polish Airlines"
        },
        {
            "iata":"LP",
            "name":"LAN Peru"
        },
        {
            "iata":"LR",
            "name":"Lacsa"
        },
        {
            "iata":"LS",
            "name":"Jet2.com"
        },
        {
            "iata":"LT",
            "name":"LTU"
        },
        {
            "iata":"LV",
            "name":"Albanian Airlines"
        },
        {
            "iata":"LW",
            "name":"Pacific Wings"
        },
        {
            "iata":"LX",
            "name":"Swiss"
        },
        {
            "iata":"LY",
            "name":"El Al"
        },
        {
            "iata":"LZ",
            "name":"Belle Air"
        },
        {
            "iata":"M2",
            "name":"AIR MANAS"
        },
        {
            "iata":"M3",
            "name":"North Flying As"
        },
        {
            "iata":"M5",
            "name":"Kenmore Air"
        },
        {
            "iata":"M6",
            "name":"Meta Linhas Aereas"
        },
        {
            "iata":"M7",
            "name":"MAS AIR"
        },
        {
            "iata":"M9",
            "name":"Motor-Sich JSC"
        },
        {
            "iata":"MA",
            "name":"Malev"
        },
        {
            "iata":"MD",
            "name":"Air Madagascar"
        },
        {
            "iata":"ME",
            "name":"Middle East Airlines"
        },
        {
            "iata":"MF",
            "name":"Xiamen Airlines"
        },
        {
            "iata":"MH",
            "name":"Malaysia Airlines"
        },
        {
            "iata":"MI",
            "name":"Silkair"
        },
        {
            "iata":"MJ",
            "name":"Mihin Lanka"
        },
        {
            "iata":"MK",
            "name":"Air Mauritius"
        },
        {
            "iata":"ML",
            "name":"Air Mediterranee"
        },
        {
            "iata":"MM",
            "name":"Soc Aero De Medellin"
        },
        {
            "iata":"MN",
            "name":"Comair"
        },
        {
            "iata":"MO",
            "name":"Calm Air International"
        },
        {
            "iata":"MP",
            "name":"Martinair"
        },
        {
            "iata":"MS",
            "name":"Egyptair"
        },
        {
            "iata":"MU",
            "name":"China Eastern Airlines"
        },
        {
            "iata":"MW",
            "name":"Maya Island Air"
        },
        {
            "iata":"MX",
            "name":"Mexicana"
        },
        {
            "iata":"MY",
            "name":"Maxjet Airways"
        },
        {
            "iata":"MZ",
            "name":"Saereo S.A"
        },
        {
            "iata":"N2",
            "name":"Dagestan Airlines"
        },
        {
            "iata":"N3",
            "name":"Omskavia"
        },
        {
            "iata":"N4",
            "name":"Trans Air Benin"
        },
        {
            "iata":"N5",
            "name":"Norfolk Air"
        },
        {
            "iata":"N6",
            "name":"Alpine Air Private Ltd."
        },
        {
            "iata":"N7",
            "name":"Lagun Air"
        },
        {
            "iata":"N9",
            "name":"Kabo Air"
        },
        {
            "iata":"NA",
            "name":"North American Airlines"
        },
        {
            "iata":"NC",
            "name":"National Jet Systems"
        },
        {
            "iata":"ND",
            "name":"Sky Wings Airlines"
        },
        {
            "iata":"NF",
            "name":"Air Vanuatu"
        },
        {
            "iata":"NG",
            "name":"Lauda Air"
        },
        {
            "iata":"NH",
            "name":"All Nippon Airways"
        },
        {
            "iata":"NI",
            "name":"PGA-Portug_lia Airlines"
        },
        {
            "iata":"NK",
            "name":"Spirit Airlines"
        },
        {
            "iata":"NL",
            "name":"Shaheen Air International"
        },
        {
            "iata":"NM",
            "name":"Manx2"
        },
        {
            "iata":"NN",
            "name":"VIM Airlines"
        },
        {
            "iata":"NQ",
            "name":"Air Japan"
        },
        {
            "iata":"NR",
            "name":"Max Air"
        },
        {
            "iata":"NS",
            "name":"Hebei Airlines"
        },
        {
            "iata":"NT",
            "name":"Binter Canarias"
        },
        {
            "iata":"NU",
            "name":"Japan Transocean Air"
        },
        {
            "iata":"NW",
            "name":"Northwest Airlines"
        },
        {
            "iata":"NX",
            "name":"Air Macau"
        },
        {
            "iata":"NY",
            "name":"Air Iceland"
        },
        {
            "iata":"NZ",
            "name":"Air New Zealand"
        },
        {
            "iata":"O2",
            "name":"Oceanic Airlines"
        },
        {
            "iata":"O4",
            "name":"Antrak Air"
        },
        {
            "iata":"O6",
            "name":"OceanAir"
        },
        {
            "iata":"O7",
            "name":"Ozjet"
        },
        {
            "iata":"OA",
            "name":"Olympic Airlines"
        },
        {
            "iata":"OB",
            "name":"Boliviana de Aviacion - BoA"
        },
        {
            "iata":"OC",
            "name":"Oriental Air Bridge Co., Ltd. (ORC)"
        },
        {
            "iata":"OF",
            "name":"Air Finland"
        },
        {
            "iata":"OG",
            "name":"One Two Go Airlines"
        },
        {
            "iata":"OK",
            "name":"Czech Airlines"
        },
        {
            "iata":"OL",
            "name":"Olt Ostfriesische Lufttr"
        },
        {
            "iata":"OM",
            "name":"Miat Mongolian Airlines"
        },
        {
            "iata":"ON",
            "name":"Our Airline"
        },
        {
            "iata":"OP",
            "name":"Chalk Ocean Airways"
        },
        {
            "iata":"OR",
            "name":"Arkefly"
        },
        {
            "iata":"OS",
            "name":"Austrian"
        },
        {
            "iata":"OT",
            "name":"Aeropelican Air Services"
        },
        {
            "iata":"OU",
            "name":"Croatia Airlines"
        },
        {
            "iata":"OV",
            "name":"Estonian Air"
        },
        {
            "iata":"OX",
            "name":"Orient Thai Airlines"
        },
        {
            "iata":"OY",
            "name":"Andes Lineas Aereas"
        },
        {
            "iata":"OZ",
            "name":"Asiana Airlines"
        },
        {
            "iata":"P0",
            "name":"Proflight Commuter Services"
        },
        {
            "iata":"P2",
            "name":"AirKenya Express"
        },
        {
            "iata":"P3",
            "name":"Passaredo"
        },
        {
            "iata":"P4",
            "name":"Aero Lineas Sosa"
        },
        {
            "iata":"P5",
            "name":"Aerorepublica"
        },
        {
            "iata":"P6",
            "name":"Pascan Aviation Inc."
        },
        {
            "iata":"P8",
            "name":"Pantanal Linhas Aereas"
        },
        {
            "iata":"P9",
            "name":"Perm Airlines"
        },
        {
            "iata":"PB",
            "name":"Provincial Airlines"
        },
        {
            "iata":"PC",
            "name":"Air Fiji"
        },
        {
            "iata":"PD",
            "name":"Porter Airlines Inc."
        },
        {
            "iata":"PE",
            "name":"Peoples Vienna Line"
        },
        {
            "iata":"PG",
            "name":"Bangkok Airways"
        },
        {
            "iata":"PJ",
            "name":"Air Saint Pierre"
        },
        {
            "iata":"PK",
            "name":"Pakistan International Airlines"
        },
        {
            "iata":"PL",
            "name":"Southern Air Charter"
        },
        {
            "iata":"PM",
            "name":"Pamir Airways"
        },
        {
            "iata":"PN",
            "name":"China West Air"
        },
        {
            "iata":"PR",
            "name":"Philippine Airlines"
        },
        {
            "iata":"PS",
            "name":"Ukraine Intl Airlines"
        },
        {
            "iata":"PU",
            "name":"Pluna"
        },
        {
            "iata":"PV",
            "name":"Saint Barth Commuter"
        },
        {
            "iata":"PW",
            "name":"Precision Air"
        },
        {
            "iata":"PX",
            "name":"Air Niugini"
        },
        {
            "iata":"PY",
            "name":"Surinam Airways"
        },
        {
            "iata":"PZ",
            "name":"Tam Mercosur"
        },
        {
            "iata":"Q2",
            "name":"Maldivian"
        },
        {
            "iata":"Q3",
            "name":"Anguilla Air Services"
        },
        {
            "iata":"Q4",
            "name":"Starlink Aviation"
        },
        {
            "iata":"Q5",
            "name":"40 Mile Air"
        },
        {
            "iata":"Q6",
            "name":"Skytrans"
        },
        {
            "iata":"Q7",
            "name":"SkyBahamas"
        },
        {
            "iata":"Q8",
            "name":"Trans Air Congo"
        },
        {
            "iata":"QB",
            "name":"Georgian National Air"
        },
        {
            "iata":"QC",
            "name":"Air Corridor"
        },
        {
            "iata":"QF",
            "name":"Qantas Airways"
        },
        {
            "iata":"QG",
            "name":"Global Aviation"
        },
        {
            "iata":"QH",
            "name":"Kyrgyzstan Air"
        },
        {
            "iata":"QI",
            "name":"Cimber Air"
        },
        {
            "iata":"QK",
            "name":"Air Canada Jazz"
        },
        {
            "iata":"QL",
            "name":"LASER Airlines"
        },
        {
            "iata":"QM",
            "name":"Air Malawi"
        },
        {
            "iata":"QP",
            "name":"Airkenya Aviation"
        },
        {
            "iata":"QR",
            "name":"Qatar Airways"
        },
        {
            "iata":"QS",
            "name":"Smart Wings"
        },
        {
            "iata":"QU",
            "name":"East African Airlines"
        },
        {
            "iata":"QV",
            "name":"Lao Airlines"
        },
        {
            "iata":"QW",
            "name":"Blue Wings"
        },
        {
            "iata":"QX",
            "name":"Horizon Air"
        },
        {
            "iata":"QZ",
            "name":"PT Indonesia Airasia"
        },
        {
            "iata":"R2",
            "name":"Orenair"
        },
        {
            "iata":"R3",
            "name":"Yakutia Air"
        },
        {
            "iata":"R4",
            "name":"STC Russia"
        },
        {
            "iata":"R6",
            "name":"Danu Oro Transportas"
        },
        {
            "iata":"R7",
            "name":"Aserca"
        },
        {
            "iata":"RA",
            "name":"Royal Nepal Airlines"
        },
        {
            "iata":"RB",
            "name":"Syrian Arab Airlines"
        },
        {
            "iata":"RC",
            "name":"Atlantic Airways"
        },
        {
            "iata":"RE",
            "name":"Aer Arann"
        },
        {
            "iata":"RG",
            "name":"VRG Linhas Aereas Sa"
        },
        {
            "iata":"RH",
            "name":"Robin Hood Aviation"
        },
        {
            "iata":"RI",
            "name":"Mandala Airlines"
        },
        {
            "iata":"RJ",
            "name":"Royal Jordanian"
        },
        {
            "iata":"RK",
            "name":"REGION-AVIA"
        },
        {
            "iata":"RL",
            "name":"Royal Falcon"
        },
        {
            "iata":"RO",
            "name":"Tarom"
        },
        {
            "iata":"RQ",
            "name":"Kam Air"
        },
        {
            "iata":"RT",
            "name":"Rak Airways"
        },
        {
            "iata":"RU",
            "name":"TCI Skyking Ltd"
        },
        {
            "iata":"RV",
            "name":"Caspian Airlines"
        },
        {
            "iata":"RX",
            "name":"Regent Airways"
        },
        {
            "iata":"RZ",
            "name":"SANSA Airlines"
        },
        {
            "iata":"S0",
            "name":"Slok Air International"
        },
        {
            "iata":"S2",
            "name":"Jet Lite"
        },
        {
            "iata":"S3",
            "name":"Santa Barbara Airlines"
        },
        {
            "iata":"S4",
            "name":"SATA International"
        },
        {
            "iata":"S5",
            "name":"Shuttle America"
        },
        {
            "iata":"S6",
            "name":"Sun Air"
        },
        {
            "iata":"S7",
            "name":"S7"
        },
        {
            "iata":"S9",
            "name":"Starbow Airlines"
        },
        {
            "iata":"SA",
            "name":"South African Airways"
        },
        {
            "iata":"SB",
            "name":"Aircalin"
        },
        {
            "iata":"SC",
            "name":"Shandong Airlines Co., Ltd."
        },
        {
            "iata":"SD",
            "name":"Sudan Airways"
        },
        {
            "iata":"SE",
            "name":"XL Airways France"
        },
        {
            "iata":"SF",
            "name":"Tassili Airlines"
        },
        {
            "iata":"SG",
            "name":"SpiceJet"
        },
        {
            "iata":"SH",
            "name":"Sharp Airlines"
        },
        {
            "iata":"SI",
            "name":"Blue Islands"
        },
        {
            "iata":"SJ",
            "name":"Sriwijaya Air"
        },
        {
            "iata":"SK",
            "name":"Scandinavian Airlines"
        },
        {
            "iata":"SL",
            "name":"Solenta Aviation"
        },
        {
            "iata":"SM",
            "name":"Spirit of Manila Airlines"
        },
        {
            "iata":"SN",
            "name":"Brussels Airlines"
        },
        {
            "iata":"SO",
            "name":"SALSA d"
        },
        {
            "iata":"SP",
            "name":"SATA Air Acores"
        },
        {
            "iata":"SQ",
            "name":"Singapore Airlines"
        },
        {
            "iata":"SS",
            "name":"Corsair"
        },
        {
            "iata":"SU",
            "name":"Aeroflot"
        },
        {
            "iata":"SV",
            "name":"Saudi Arabian Airlines"
        },
        {
            "iata":"SW",
            "name":"Air Namibia"
        },
        {
            "iata":"SX",
            "name":"Skybus Airlines"
        },
        {
            "iata":"SY",
            "name":"Sun Country"
        },
        {
            "iata":"T3",
            "name":"Eastern Airways"
        },
        {
            "iata":"T4",
            "name":"TRIP Linhas Aereas"
        },
        {
            "iata":"T5",
            "name":"Turkmenistan Airlines"
        },
        {
            "iata":"T6",
            "name":"Tavrey Aircompany"
        },
        {
            "iata":"T7",
            "name":"Twin Jet"
        },
        {
            "iata":"TA",
            "name":"Taca Intl Airlines"
        },
        {
            "iata":"TC",
            "name":"Air Tanzania"
        },
        {
            "iata":"TD",
            "name":"Atlantis European Airway"
        },
        {
            "iata":"TE",
            "name":"FlyLAL"
        },
        {
            "iata":"TF",
            "name":"Malmo Aviation"
        },
        {
            "iata":"TG",
            "name":"Thai Airways Intl"
        },
        {
            "iata":"TJ",
            "name":"Tradewind Aviation"
        },
        {
            "iata":"TK",
            "name":"Turkish Airlines"
        },
        {
            "iata":"TL",
            "name":"Airnorth Regional"
        },
        {
            "iata":"TM",
            "name":"Lam Mozambique"
        },
        {
            "iata":"TN",
            "name":"Air Tahiti Nui"
        },
        {
            "iata":"TO",
            "name":"Transavia.com France"
        },
        {
            "iata":"TP",
            "name":"TAP Portugal"
        },
        {
            "iata":"TQ",
            "name":"Tandem Aero"
        },
        {
            "iata":"TR",
            "name":"Tiger Airways"
        },
        {
            "iata":"TS",
            "name":"Air Transat"
        },
        {
            "iata":"TT",
            "name":"Tiger Airways Australia"
        },
        {
            "iata":"TU",
            "name":"Tunisair"
        },
        {
            "iata":"TV",
            "name":"Tibet Airlines"
        },
        {
            "iata":"TW",
            "name":"T"
        },
        {
            "iata":"TX",
            "name":"Air Caraibes"
        },
        {
            "iata":"TY",
            "name":"Air Caledonie"
        },
        {
            "iata":"TZ",
            "name":"ATA Airlines"
        },
        {
            "iata":"U2",
            "name":"EasyJet"
        },
        {
            "iata":"U3",
            "name":"Avies Air Company"
        },
        {
            "iata":"U4",
            "name":"PMT Air"
        },
        {
            "iata":"U5",
            "name":"USA 3000"
        },
        {
            "iata":"U6",
            "name":"Ural Airlines"
        },
        {
            "iata":"U7",
            "name":"Air Uganda"
        },
        {
            "iata":"U8",
            "name":"Armavia"
        },
        {
            "iata":"U9",
            "name":"Tatarstan Air"
        },
        {
            "iata":"UA",
            "name":"United Airlines"
        },
        {
            "iata":"UB",
            "name":"Myanma Airways"
        },
        {
            "iata":"UD",
            "name":"Hex Air"
        },
        {
            "iata":"UE",
            "name":"Nasair"
        },
        {
            "iata":"UF",
            "name":"UM Air"
        },
        {
            "iata":"UG",
            "name":"Sevenair"
        },
        {
            "iata":"UH",
            "name":"US Helicopter Corp"
        },
        {
            "iata":"UJ",
            "name":"Almasria Universal Airlines"
        },
        {
            "iata":"UL",
            "name":"Srilankan Airlines"
        },
        {
            "iata":"UM",
            "name":"Air Zimbabwe"
        },
        {
            "iata":"UN",
            "name":"Transaero"
        },
        {
            "iata":"UO",
            "name":"Hong Kong Express Airways"
        },
        {
            "iata":"UP",
            "name":"Bahamasair"
        },
        {
            "iata":"UQ",
            "name":"O Connor Airlines"
        },
        {
            "iata":"UR",
            "name":"UT Air"
        },
        {
            "iata":"US",
            "name":"US Airways"
        },
        {
            "iata":"UT",
            "name":"UT Air"
        },
        {
            "iata":"UU",
            "name":"Air Austral"
        },
        {
            "iata":"UV",
            "name":"Helicopteros Del Sureste"
        },
        {
            "iata":"UX",
            "name":"Air Europa"
        },
        {
            "iata":"UY",
            "name":"Cameroon Airlines"
        },
        {
            "iata":"UZ",
            "name":"Buraq Air"
        },
        {
            "iata":"V0",
            "name":"Conviasa"
        },
        {
            "iata":"V2",
            "name":"Vision Airlines"
        },
        {
            "iata":"V3",
            "name":"Carpatair"
        },
        {
            "iata":"V4",
            "name":"Vieques Air Link"
        },
        {
            "iata":"V5",
            "name":"Danube Wings"
        },
        {
            "iata":"V6",
            "name":"VIP S.A."
        },
        {
            "iata":"V7",
            "name":"Air Senegal"
        },
        {
            "iata":"V8",
            "name":"Iliamna Air Taxi"
        },
        {
            "iata":"VA",
            "name":"V Australia"
        },
        {
            "iata":"VB",
            "name":"VivaAerobus"
        },
        {
            "iata":"VC",
            "name":"Strategic Airlines Pty Ltd"
        },
        {
            "iata":"VE",
            "name":"Avensa"
        },
        {
            "iata":"VF",
            "name":"Valuair"
        },
        {
            "iata":"VG",
            "name":"VLM Airlines"
        },
        {
            "iata":"VH",
            "name":"Aeropostal"
        },
        {
            "iata":"VK",
            "name":"Virgin Nigeria"
        },
        {
            "iata":"VM",
            "name":"Viaggio Air"
        },
        {
            "iata":"VN",
            "name":"Vietnam Airlines"
        },
        {
            "iata":"VO",
            "name":"Tyrolean Airways"
        },
        {
            "iata":"VQ",
            "name":"Viking Hellas Airlines"
        },
        {
            "iata":"VR",
            "name":"Tacv Cabo Verde Airlines"
        },
        {
            "iata":"VS",
            "name":"Virgin Atlantic"
        },
        {
            "iata":"VT",
            "name":"Air Tahiti"
        },
        {
            "iata":"VU",
            "name":"Air Ivoire"
        },
        {
            "iata":"VV",
            "name":"Aerosvit Airlines"
        },
        {
            "iata":"VW",
            "name":"Aeromar"
        },
        {
            "iata":"VX",
            "name":"Virgin America "
        },
        {
            "iata":"VY",
            "name":"Vueling Airlines"
        },
        {
            "iata":"VZ",
            "name":"Velvet Sky"
        },
        {
            "iata":"W2",
            "name":"Canadian Western Air"
        },
        {
            "iata":"W3",
            "name":"Arik Air"
        },
        {
            "iata":"W4",
            "name":"LC Busre"
        },
        {
            "iata":"W5",
            "name":"Mahan Airlines"
        },
        {
            "iata":"W6",
            "name":"Wizz Air"
        },
        {
            "iata":"W7",
            "name":"Sayakhat Airlines"
        },
        {
            "iata":"W9",
            "name":"Air Bagan"
        },
        {
            "iata":"WA",
            "name":"KLM Cityhopper"
        },
        {
            "iata":"WB",
            "name":"Rwandair Express"
        },
        {
            "iata":"WC",
            "name":"Islena Airlines"
        },
        {
            "iata":"WF",
            "name":"Wideroe"
        },
        {
            "iata":"WH",
            "name":"Webjet Linhas Aereas"
        },
        {
            "iata":"WJ",
            "name":"Air Labrador"
        },
        {
            "iata":"WK",
            "name":"Edelweiss Air"
        },
        {
            "iata":"WL",
            "name":"Aeroperlas"
        },
        {
            "iata":"WM",
            "name":"Windward Island Airways"
        },
        {
            "iata":"WN",
            "name":"Southwest Airlines"
        },
        {
            "iata":"WP",
            "name":"Island Air"
        },
        {
            "iata":"WR",
            "name":"JSC Aviaprad"
        },
        {
            "iata":"WS",
            "name":"Westjet"
        },
        {
            "iata":"WT",
            "name":"Wasaya Airways LP"
        },
        {
            "iata":"WU",
            "name":"Wizz Air Ukraine"
        },
        {
            "iata":"WW",
            "name":"bmibaby"
        },
        {
            "iata":"WX",
            "name":"Cityjet"
        },
        {
            "iata":"WY",
            "name":"Oman Air"
        },
        {
            "iata":"X3",
            "name":"TUIfly"
        },
        {
            "iata":"X4",
            "name":"Air Excursions, LLC"
        },
        {
            "iata":"X7",
            "name":"Air Service"
        },
        {
            "iata":"X9",
            "name":"City Star Airlines"
        },
        {
            "iata":"XC",
            "name":"KD Air"
        },
        {
            "iata":"XE",
            "name":"Expressjet Airlines"
        },
        {
            "iata":"XF",
            "name":"Vladivostok Air"
        },
        {
            "iata":"XK",
            "name":"CCM Airlines"
        },
        {
            "iata":"XL",
            "name":"LAN Ecuador"
        },
        {
            "iata":"XM",
            "name":"Alitalia Express"
        },
        {
            "iata":"XP",
            "name":"Xtra Airways"
        },
        {
            "iata":"XQ",
            "name":"Sun Express"
        },
        {
            "iata":"XR",
            "name":"Skywest Airlines"
        },
        {
            "iata":"XU",
            "name":"African Express Airways"
        },
        {
            "iata":"XV",
            "name":"BVI Airways"
        },
        {
            "iata":"XW",
            "name":"Sky Express"
        },
        {
            "iata":"XY",
            "name":"Al-Khayala"
        },
        {
            "iata":"Y0",
            "name":"Yellow Airtaxi"
        },
        {
            "iata":"Y1",
            "name":"Taymir"
        },
        {
            "iata":"Y4",
            "name":"Volaris"
        },
        {
            "iata":"Y5",
            "name":"Asia Wings"
        },
        {
            "iata":"Y7",
            "name":"NordStar"
        },
        {
            "iata":"Y8",
            "name":"Passaredo Linhas Aereas"
        },
        {
            "iata":"Y9",
            "name":"Kish Air"
        },
        {
            "iata":"YC",
            "name":"Yamal Air"
        },
        {
            "iata":"YD",
            "name":"Mauritania Airways"
        },
        {
            "iata":"YG",
            "name":"South Airlines"
        },
        {
            "iata":"YI",
            "name":"Air Sunshine"
        },
        {
            "iata":"YK",
            "name":"Cyprus Turkish Airlines"
        },
        {
            "iata":"YL",
            "name":"Yamal Airlines"
        },
        {
            "iata":"YM",
            "name":"Montenegro Airlines"
        },
        {
            "iata":"YN",
            "name":"Air Creebec (1994) Inc."
        },
        {
            "iata":"YO",
            "name":"Heli Air Monaco"
        },
        {
            "iata":"YQ",
            "name":"Polet Airlines"
        },
        {
            "iata":"YR",
            "name":"Scenic Airlines"
        },
        {
            "iata":"YS",
            "name":"Regional"
        },
        {
            "iata":"YT",
            "name":"Yeti Airlines"
        },
        {
            "iata":"YU",
            "name":"Euroatlantic Airways"
        },
        {
            "iata":"YV",
            "name":"Mesa Airlines"
        },
        {
            "iata":"YW",
            "name":"Air Nostrum"
        },
        {
            "iata":"YX",
            "name":"Midwest Airlines"
        },
        {
            "iata":"Z2",
            "name":"Zestair"
        },
        {
            "iata":"Z3",
            "name":"PM Air LLC"
        },
        {
            "iata":"Z4",
            "name":"Puma Air"
        },
        {
            "iata":"Z5",
            "name":"GMG Airlines"
        },
        {
            "iata":"Z6",
            "name":"Dnieproavia"
        },
        {
            "iata":"Z8",
            "name":"Amaszonas"
        },
        {
            "iata":"ZA",
            "name":"Interavia Airlines"
        },
        {
            "iata":"ZB",
            "name":"Monarch Airlines"
        },
        {
            "iata":"ZE",
            "name":"Lineas Azteca"
        },
        {
            "iata":"ZF",
            "name":"Athens Airways"
        },
        {
            "iata":"ZH",
            "name":"Shenzhen Airlines"
        },
        {
            "iata":"ZI",
            "name":"Aigle Azur"
        },
        {
            "iata":"ZJ",
            "name":"Zambezi airlines"
        },
        {
            "iata":"ZK",
            "name":"Great Lakes Aviation"
        },
        {
            "iata":"ZL",
            "name":"Regional Express"
        },
        {
            "iata":"ZN",
            "name":"NAYSA"
        },
        {
            "iata":"ZO",
            "name":"Central Air Transport Services (CATS)"
        },
        {
            "iata":"ZU",
            "name":"Bashkortostan Air"
        },
        {
            "iata":"ZV",
            "name":"Zagros Airlines"
        },
        {
            "iata":"ZY",
            "name":"Sky Airlines"
        }
    ];
    var citiesDataUS =[
        { city: "Column1", cityCode: "Column3" },
        { city: "Birmingham", cityCode: "BHM" },
        { city: "Dothan", cityCode: "DHN" },
        { city: "Huntsville", cityCode: "HSV" },
        { city: "Mobile", cityCode: "MOB" },
        { city: "Montgomery", cityCode: "MGM" },
        { city: "ALASKA", cityCode: null },
        { city: "Anchorage", cityCode: null },
        { city: "Anchorage", cityCode: "MRI" },
        { city: "Anchorage", cityCode: "ANC" },
        { city: "Aniak", cityCode: "ANI" },
        { city: "Barrow", cityCode: "BRW" },
        { city: "Bethel", cityCode: "BET" },
        { city: "Cordova", cityCode: "CDV" },
        { city: "Deadhorse Prudhoe Bay", cityCode: "SCC" },
        { city: "Dillingham", cityCode: "DLG" },
        { city: "Fairbanks", cityCode: "FAI" },
        { city: "Galena", cityCode: "GAL" },
        { city: "Gustavus", cityCode: "GST" },
        { city: "Homer", cityCode: "HOM" },
        { city: "Hoonah", cityCode: "HNH" },
        { city: "Juneau", cityCode: "JNU" },
        { city: "Kenai", cityCode: "ENA" },
        { city: "Ketchikan", cityCode: "KTN" },
        { city: "King Salmon", cityCode: "AKN" },
        { city: "Kodiak", cityCode: "ADQ" },
        { city: "Kotzebue", cityCode: "OTZ" },
        { city: "Nome", cityCode: "OME" },
        { city: "Petersburg", cityCode: "PSG" },
        { city: "Sitka", cityCode: "SIT" },
        { city: "St. Mary's", cityCode: "KSM" },
        { city: "Unalakleet", cityCode: "UNK" },
        { city: "Unalaska", cityCode: "DUT" },
        { city: "Valdez", cityCode: "VDZ" },
        { city: "Wrangell", cityCode: "WRG" },
        { city: "Yakutat", cityCode: "YAK" },
        { city: "ARIZONA", cityCode: null },
        { city: "Bullhead City", cityCode: "IFP" },
        { city: "Flagstaff", cityCode: "FLG" },
        { city: "Grand Canyon \/ Tusayan", cityCode: "GCN" },
        { city: "Mesa", cityCode: "AZA" },
        { city: "Page", cityCode: "PGA" },
        { city: "Peach Springs", cityCode: "GCW" },
        { city: "Phoenix", cityCode: "PHX" },
        { city: "Tucson", cityCode: "TUS" },
        { city: "Yuma", cityCode: "YUM" },
        { city: "ARKANSAS", cityCode: null },
        { city: "Fayetteville", cityCode: "XNA" },
        { city: "Fort Smith", cityCode: "FSM" },
        { city: "Little Rock", cityCode: "LIT" },
        { city: "Texarkana", cityCode: "TXK" },
        { city: "CALIFORNIA", cityCode: null },
        { city: "Arcata \/ Eureka", cityCode: "ACV" },
        { city: "Bakersfield", cityCode: "BFL" },
        { city: "Burbank", cityCode: "BUR" },
        { city: "Carlsbad", cityCode: "CLD" },
        { city: "Chico", cityCode: "CIC" },
        { city: "Crescent City", cityCode: "CEC" },
        { city: "Fresno", cityCode: "FAT" },
        { city: "Long Beach", cityCode: "LGB" },
        { city: "Los Angeles", cityCode: "LAX" },
        { city: "Mammoth Lakes", cityCode: "MMH" },
        { city: "Modesto", cityCode: "MOD" },
        { city: "Monterey", cityCode: "MRY" },
        { city: "Oakland", cityCode: "OAK" },
        { city: "Ontario", cityCode: "ONT" },
        { city: "Palm Springs", cityCode: "PSP" },
        { city: "Redding", cityCode: "RDD" },
        { city: "Sacramento", cityCode: "SMF" },
        { city: "San Diego", cityCode: "SAN" },
        { city: "San Francisco", cityCode: "SFO" },
        { city: "San Jose", cityCode: "SJC" },
        { city: "San Luis Obispo", cityCode: "SBP" },
        { city: "Santa Ana", cityCode: "SNA" },
        { city: "Santa Barbara", cityCode: "SBA" },
        { city: "Santa Maria", cityCode: "SMX" },
        { city: "Santa Rosa", cityCode: "STS" },
        { city: "Stockton", cityCode: "SCK" },
        { city: "COLORADO", cityCode: null },
        { city: "Aspen", cityCode: "ASE" },
        { city: "Colorado Springs", cityCode: "COS" },
        { city: "Denver", cityCode: "DEN" },
        { city: "Durango", cityCode: "DRO" },
        { city: "Eagle", cityCode: "EGE" },
        { city: "Grand Junction", cityCode: "GJT" },
        { city: "Gunnison", cityCode: "GUC" },
        { city: "Hayden", cityCode: "HDN" },
        { city: "Montrose", cityCode: "MTJ" },
        { city: "CONNECTICUT", cityCode: null },
        { city: "Hartford", cityCode: "BDL" },
        { city: "New Haven", cityCode: "HVN" },
        { city: "DELAWARE", cityCode: null },
        { city: "Wilmington", cityCode: "ILG" },
        { city: "FLORIDA", cityCode: null },
        { city: "Daytona Beach", cityCode: "DAB" },
        { city: "Fort Lauderdale", cityCode: "FLL" },
        { city: "Fort Myers", cityCode: "RSW" },
        { city: "Gainesville", cityCode: "GNV" },
        { city: "Jacksonville", cityCode: "JAX" },
        { city: "Key West", cityCode: "EYW" },
        { city: "Melbourne", cityCode: "MLB" },
        { city: "Miami", cityCode: "MIA" },
        { city: "Orlando", cityCode: "MCO" },
        { city: "Orlando\/Sanford", cityCode: "SFB" },
        { city: "Panama City Beach", cityCode: "ECP" },
        { city: "Pensacola", cityCode: "PNS" },
        { city: "Punta Gorda", cityCode: "PGD" },
        { city: "Sarasota \/ Bradenton", cityCode: "SRQ" },
        { city: "St. Augustine", cityCode: "UST" },
        { city: "St. Petersburg\/Clearwater", cityCode: "PIE" },
        { city: "Tallahassee", cityCode: "TLH" },
        { city: "Tampa", cityCode: "TPA" },
        { city: "Valparaiso", cityCode: "VPS" },
        { city: "West Palm Beach", cityCode: "PBI" },
        { city: "GEORGIA", cityCode: null },
        { city: "Albany", cityCode: "ABY" },
        { city: "Atlanta", cityCode: "ATL" },
        { city: "Augusta", cityCode: "AGS" },
        { city: "Brunswick", cityCode: "BQK" },
        { city: "Columbus", cityCode: "CSG" },
        { city: "Savannah", cityCode: "SAV" },
        { city: "Valdosta", cityCode: "VLD" },
        { city: "HAWAII", cityCode: null },
        { city: "Hilo, Hawaii", cityCode: "ITO" },
        { city: "Honolulu, Oahu", cityCode: "HNL" },
        { city: "Kahului, Maui", cityCode: "OGG" },
        { city: "Kailua-Kona, Hawaii", cityCode: "KOA" },
        { city: "Kaunakakai, Molokai", cityCode: "MKK" },
        { city: "Lanai City, Lanai", cityCode: "LNY" },
        { city: "Lihue, Kauai", cityCode: "LIH" },
        { city: "IDAHO", cityCode: null },
        { city: "Boise", cityCode: "BOI" },
        { city: "Hailey", cityCode: "SUN" },
        { city: "Idaho Falls", cityCode: "IDA" },
        { city: "Lewiston", cityCode: "LWS" },
        { city: "Pocatello \/ Arbon Valley", cityCode: "PIH" },
        { city: "Twin Falls", cityCode: "TWF" },
        { city: "ILLINOIS", cityCode: null },
        { city: "Belleville", cityCode: "BLV" },
        { city: "Bloomington \/ Normal", cityCode: "BMI" },
        { city: "Champaign \/ Urbana", cityCode: "CMI" },
        { city: "Chicago", cityCode: "ORD" },
        { city: "Chicago", cityCode: "MDW" },
        { city: "Marion", cityCode: "MWA" },
        { city: "Moline", cityCode: "MLI" },
        { city: "Peoria", cityCode: "PIA" },
        { city: "Quincy", cityCode: "UIN" },
        { city: "Rockford", cityCode: "RFD" },
        { city: "Springfield", cityCode: "SPI" },
        { city: "INDIANA", cityCode: null },
        { city: "Evansville", cityCode: "EVV" },
        { city: "Fort Wayne", cityCode: "FWA" },
        { city: "Indianapolis", cityCode: "IND" },
        { city: "South Bend", cityCode: "SBN" },
        { city: "IOWA", cityCode: null },
        { city: "Cedar Rapids", cityCode: "CID" },
        { city: "Des Moines", cityCode: "DSM" },
        { city: "Dubuque", cityCode: "DBQ" },
        { city: "Sioux City", cityCode: "SUX" },
        { city: "Waterloo", cityCode: "ALO" },
        { city: "KANSAS", cityCode: null },
        { city: "Garden City", cityCode: "GCK" },
        { city: "Manhattan", cityCode: "MHK" },
        { city: "Wichita", cityCode: "ICT" },
        { city: "KENTUCKY", cityCode: null },
        { city: "Cincinnati\/Covington", cityCode: "CVG" },
        { city: "Lexington", cityCode: "LEX" },
        { city: "Louisville", cityCode: "SDF" },
        { city: "Owensboro", cityCode: "OWB" },
        { city: "Paducah", cityCode: "PAH" },
        { city: "LOUISIANA", cityCode: null },
        { city: "Alexandria", cityCode: "AEX" },
        { city: "Baton Rouge", cityCode: "BTR" },
        { city: "Lafayette", cityCode: "LFT" },
        { city: "Lake Charles", cityCode: "LCH" },
        { city: "Monroe", cityCode: "MLU" },
        { city: "New Orleans", cityCode: "MSY" },
        { city: "Shreveport", cityCode: "SHV" },
        { city: "MAINE", cityCode: null },
        { city: "Bangor", cityCode: "BGR" },
        { city: "Portland", cityCode: "PWM" },
        { city: "Presque Isle", cityCode: "PQI" },
        { city: "Rockland", cityCode: "RKD" },
        { city: "MARYLAND", cityCode: null },
        { city: "Baltimore \/ Glen Burnie", cityCode: "BWI" },
        { city: "Salisbury", cityCode: "SBY" },
        { city: "Hagerstown", cityCode: "HGR" },
        { city: "MASSACHUSETTS", cityCode: null },
        { city: "Boston", cityCode: "BOS" },
        { city: "Hyannis", cityCode: "HYA" },
        { city: "Nantucket", cityCode: "ACK" },
        { city: "Provincetown", cityCode: "PVC" },
        { city: "Vineyard Haven", cityCode: "MVY" },
        { city: "Worcester", cityCode: "ORH" },
        { city: "MICHIGAN", cityCode: null },
        { city: "Alpena", cityCode: "APN" },
        { city: "Beaver Island", cityCode: null },
        { city: "Detroit \/ Romulus", cityCode: "DTW" },
        { city: "Escanaba", cityCode: "ESC" },
        { city: "Flint", cityCode: "FNT" },
        { city: "Grand Rapids", cityCode: "GRR" },
        { city: "Hancock \/ Calumet", cityCode: "CMX" },
        { city: "Iron Mountain \/ Kingsford", cityCode: "IMT" },
        { city: "Kalamazoo \/ Battle Creek", cityCode: "AZO" },
        { city: "Lansing", cityCode: "LAN" },
        { city: "Marquette \/ Gwinn", cityCode: "MQT" },
        { city: "Muskegon", cityCode: "MKG" },
        { city: "Pellston", cityCode: "PLN" },
        { city: "Saginaw", cityCode: "MBS" },
        { city: "Sault Ste. Marie", cityCode: "CIU" },
        { city: "Traverse City", cityCode: "TVC" },
        { city: "MINNESOTA", cityCode: null },
        { city: "Bemidji", cityCode: "BJI" },
        { city: "Brainerd", cityCode: "BRD" },
        { city: "Duluth", cityCode: "DLH" },
        { city: "Hibbing", cityCode: "HIB" },
        { city: "International Falls", cityCode: "INL" },
        { city: "Minneapolis", cityCode: "MSP" },
        { city: "Rochester", cityCode: "RST" },
        { city: "St. Cloud", cityCode: "STC" },
        { city: "MISSISSIPPI", cityCode: null },
        { city: "Columbus \/ West Point \/ Starkville", cityCode: "GTR" },
        { city: "Gulfport \/ Biloxi", cityCode: "GPT" },
        { city: "Hattiesburg \/ Laurel", cityCode: "PIB" },
        { city: "Jackson", cityCode: "JAN" },
        { city: "MISSOURI", cityCode: null },
        { city: "Columbia", cityCode: "COU" },
        { city: "Joplin", cityCode: "JLN" },
        { city: "Kansas City", cityCode: "MCI" },
        { city: "Springfield", cityCode: "SGF" },
        { city: "St. Louis", cityCode: "STL" },
        { city: "MONTANA", cityCode: null },
        { city: "Billings", cityCode: "BIL" },
        { city: "Bozeman", cityCode: "BZN" },
        { city: "Butte", cityCode: "BTM" },
        { city: "Great Falls", cityCode: "GTF" },
        { city: "Helena", cityCode: "HLN" },
        { city: "Kalispell", cityCode: "FCA" },
        { city: "Missoula", cityCode: "MSO" },
        { city: "NEBRASKA", cityCode: null },
        { city: "Grand Island", cityCode: "GRI" },
        { city: "Kearney", cityCode: "EAR" },
        { city: "Lincoln", cityCode: "LNK" },
        { city: "Omaha", cityCode: "OMA" },
        { city: "Scottsbluff", cityCode: "BFF" },
        { city: "NEVADA", cityCode: null },
        { city: "Boulder City", cityCode: "BLD" },
        { city: "Elko", cityCode: "EKO" },
        { city: "Las Vegas", cityCode: "LAS" },
        { city: "Reno", cityCode: "RNO" },
        { city: "NEW HAMPSHIRE", cityCode: null },
        { city: "Lebanon", cityCode: "LEB" },
        { city: "Manchester", cityCode: "MHT" },
        { city: "Portsmouth", cityCode: "PSM" },
        { city: "NEW JERSEY", cityCode: null },
        { city: "Atlantic City", cityCode: "ACY" },
        { city: "Trenton", cityCode: "TTN" },
        { city: "Newark", cityCode: "EWR" },
        { city: "NEW MEXICO", cityCode: null },
        { city: "Albuquerque", cityCode: "ABQ" },
        { city: "Farmington", cityCode: "FMN" },
        { city: "Hobbs", cityCode: "HOB" },
        { city: "Roswell", cityCode: "ROW" },
        { city: "Santa Fe", cityCode: "SAF" },
        { city: "NEW YORK", cityCode: null },
        { city: "Albany", cityCode: "ALB" },
        { city: "Binghamton", cityCode: "BGM" },
        { city: "Buffalo", cityCode: "BUF" },
        { city: "Elmira \/ Corning", cityCode: "ELM" },
        { city: "Islip", cityCode: "ISP" },
        { city: "Ithaca", cityCode: "ITH" },
        { city: "New York", cityCode: "JFK" },
        { city: "New York", cityCode: "LGA" },
        { city: "Newburgh", cityCode: "SWF" },
        { city: "Niagara Falls", cityCode: "IAG" },
        { city: "Plattsburgh", cityCode: "PBG" },
        { city: "Rochester", cityCode: "ROC" },
        { city: "Syracuse", cityCode: "SYR" },
        { city: "Watertown", cityCode: "ART" },
        { city: "White Plains", cityCode: "HPN" },
        { city: "NORTH CAROLINA", cityCode: null },
        { city: "Asheville", cityCode: "AVL" },
        { city: "Charlotte", cityCode: "CLT" },
        { city: "Fayetteville", cityCode: "FAY" },
        { city: "Greensboro", cityCode: "GSO" },
        { city: "Greenville", cityCode: "PGV" },
        { city: "Jacksonville", cityCode: "OAJ" },
        { city: "New Bern", cityCode: "EWN" },
        { city: "Raleigh", cityCode: "RDU" },
        { city: "Wilmington", cityCode: "ILM" },
        { city: "NORTH DAKOTA", cityCode: null },
        { city: "Bismarck", cityCode: "BIS" },
        { city: "Dickinson", cityCode: "DIK" },
        { city: "Fargo", cityCode: "FAR" },
        { city: "Grand Forks", cityCode: "GFK" },
        { city: "Minot", cityCode: "MOT" },
        { city: "Williston", cityCode: "ISN" },
        { city: "OHIO", cityCode: null },
        { city: "Akron \/ Canton", cityCode: "CAK" },
        { city: "Cincinnati", cityCode: "LUK" },
        { city: "Cleveland", cityCode: "CLE" },
        { city: "Columbus", cityCode: "CMH" },
        { city: "Columbus", cityCode: "LCK" },
        { city: "Dayton", cityCode: "DAY" },
        { city: "Toledo", cityCode: "TOL" },
        { city: "Youngstown \/ Warren", cityCode: "YNG" },
        { city: "OKLAHOMA", cityCode: null },
        { city: "Lawton", cityCode: "LAW" },
        { city: "Oklahoma City", cityCode: "OKC" },
        { city: "Tulsa", cityCode: "TUL" },
        { city: "OREGON", cityCode: null },
        { city: "Eugene", cityCode: "EUG" },
        { city: "Klamath Falls", cityCode: "LMT" },
        { city: "Medford", cityCode: "MFR" },
        { city: "North Bend", cityCode: "OTH" },
        { city: "Portland", cityCode: "PDX" },
        { city: "Redmond", cityCode: "RDM" },
        { city: "PENNSYLVANIA", cityCode: null },
        { city: "Allentown", cityCode: "ABE" },
        { city: "Erie", cityCode: "ERI" },
        { city: "Harrisburg \/ Middletown", cityCode: "MDT" },
        { city: "Latrobe", cityCode: "LBE" },
        { city: "Philadelphia", cityCode: "PHL" },
        { city: "Pittsburgh", cityCode: "PIT" },
        { city: "State College", cityCode: "SCE" },
        { city: "Wilkes-Barre \/ Scranton", cityCode: "AVP" },
        { city: "Williamsport", cityCode: "IPT" },
        { city: "RHODE ISLAND", cityCode: null },
        { city: "Block Island \/ New Shoreham", cityCode: "BID" },
        { city: "Providence \/ Warwick", cityCode: "PVD" },
        { city: "Westerly", cityCode: "WST" },
        { city: "SOUTH CAROLINA", cityCode: null },
        { city: "Charleston", cityCode: "CHS" },
        { city: "Columbia", cityCode: "CAE" },
        { city: "Florence", cityCode: "FLO" },
        { city: "Greer", cityCode: "GSP" },
        { city: "Hilton Head Island", cityCode: "HHH" },
        { city: "Myrtle Beach", cityCode: "MYR" },
        { city: "SOUTH DAKOTA", cityCode: null },
        { city: "Aberdeen", cityCode: "ABR" },
        { city: "Pierre", cityCode: "PIR" },
        { city: "Rapid City", cityCode: "RAP" },
        { city: "Sioux Falls", cityCode: "FSD" },
        { city: "TENNESSEE", cityCode: null },
        { city: "Bristol \/ Johnson City \/ Kingsport", cityCode: "TRI" },
        { city: "Chattanooga", cityCode: "CHA" },
        { city: "Knoxville", cityCode: "TYS" },
        { city: "Memphis", cityCode: "MEM" },
        { city: "Nashville", cityCode: "BNA" },
        { city: "TEXAS", cityCode: null },
        { city: "Abilene", cityCode: "ABI" },
        { city: "Amarillo", cityCode: "AMA" },
        { city: "Austin", cityCode: "AUS" },
        { city: "Beaumont \/ Port Arthur", cityCode: "BPT" },
        { city: "Brownsville", cityCode: "BRO" },
        { city: "College Station", cityCode: "CLL" },
        { city: "Corpus Christi \/ Kingsville", cityCode: "CRP" },
        { city: "Dallas", cityCode: "DAL" },
        { city: "Dallas-Fort Worth", cityCode: "DFW" },
        { city: "Del Rio", cityCode: "DRT" },
        { city: "El Paso", cityCode: "ELP" },
        { city: "Fort Hood \/ Killeen \/ Temple", cityCode: "GRK" },
        { city: "Harlingen", cityCode: "HRL" },
        { city: "Houston", cityCode: "IAH" },
        { city: "Houston", cityCode: "HOU" },
        { city: "Laredo", cityCode: "LRD" },
        { city: "Longview", cityCode: "GGG" },
        { city: "Lubbock", cityCode: "LBB" },
        { city: "McAllen", cityCode: "MFE" },
        { city: "Midland", cityCode: "MAF" },
        { city: "San Angelo", cityCode: "SJT" },
        { city: "San Antonio", cityCode: "SAT" },
        { city: "Tyler", cityCode: "TYR" },
        { city: "Waco", cityCode: "ACT" },
        { city: "Wichita Falls", cityCode: "SPS" },
        { city: "UTAH", cityCode: null },
        { city: "Provo", cityCode: "PVU" },
        { city: "Salt Lake City", cityCode: "SLC" },
        { city: "St. George \/ Beaver", cityCode: "SGU" },
        { city: "Wendover", cityCode: "ENV" },
        { city: "VERMONT", cityCode: null },
        { city: "Burlington", cityCode: "BTV" },
        { city: "VIRGINIA", cityCode: null },
        { city: "Charlottesville", cityCode: "CHO" },
        { city: "Lynchburg", cityCode: "LYH" },
        { city: "Newport News", cityCode: "PHF" },
        { city: "Norfolk", cityCode: "ORF" },
        { city: "Richmond", cityCode: "RIC" },
        { city: "Roanoke", cityCode: "ROA" },
        { city: "Staunton \/ Waynesboro \/ Harrisonburg", cityCode: "SHD" },
        { city: "Washington, D.C. \/ Arlington County", cityCode: "DCA" },
        { city: "Washington, D.C. \/ Dulles \/ Chantilly", cityCode: "IAD" },
        { city: "WASHINGTON", cityCode: null },
        { city: "Bellingham", cityCode: "BLI" },
        { city: "Friday Harbor", cityCode: "FRD" },
        { city: "Pasco", cityCode: "PSC" },
        { city: "Port Angeles", cityCode: "CLM" },
        { city: "Pullman \/ Moscow, Idaho", cityCode: "PUW" },
        { city: "Seattle", cityCode: "BFI" },
        { city: "Seattle \/ Tacoma (SeaTac)", cityCode: "SEA" },
        { city: "Spokane", cityCode: "GEG" },
        { city: "Walla Walla", cityCode: "ALW" },
        { city: "Wenatchee", cityCode: "EAT" },
        { city: "Yakima", cityCode: "YKM" },
        { city: "WEST VIRGINIA", cityCode: null },
        { city: "Charleston", cityCode: "CRW" },
        { city: "Clarksburg", cityCode: "CKB" },
        { city: "Huntington", cityCode: "HTS" },
        { city: "Lewisburg", cityCode: "LWB" },
        { city: "Morgantown", cityCode: "MGW" },
        { city: "WISCONSIN", cityCode: null },
        { city: "Appleton", cityCode: "ATW" },
        { city: "Eau Claire", cityCode: "EAU" },
        { city: "Green Bay", cityCode: "GRB" },
        { city: "La Crosse", cityCode: "LSE" },
        { city: "Madison", cityCode: "MSN" },
        { city: "Milwaukee", cityCode: "MKE" },
        { city: "Mosinee", cityCode: "CWA" },
        { city: "Rhinelander", cityCode: "RHI" },
        { city: "WYOMING", cityCode: null },
        { city: "Casper", cityCode: "CPR" },
        { city: "Cheyenne", cityCode: "CYS" },
        { city: "Cody", cityCode: "COD" },
        { city: "Gillette", cityCode: "GCC" },
        { city: "Jackson", cityCode: "JAC" },
        { city: "Riverton", cityCode: "RIW" },
        { city: "Rock Springs", cityCode: "RKS" },
        { city: "Sheridan", cityCode: "SHR" },
        { city: "AMERICAN SAMOA", cityCode: null },
        { city: "Pago Pago, Tutuila", cityCode: "PPG" },
        { city: "GUAM", cityCode: null },
        { city: "Agana  Tamuning", cityCode: "GUM" },
        { city: "NORTHERN MARIANAS", cityCode: null },
        { city: "Obyan, Saipan Island", cityCode: "SPN" },
        { city: "Rota Island", cityCode: "ROP" },
        { city: "PUERTO RICO", cityCode: null },
        { city: "Aguadilla", cityCode: "BQN" },
        { city: "Ceiba", cityCode: "NRR" },
        { city: "Ponce", cityCode: "PSE" },
        { city: "San Juan  Carolina", cityCode: "SJU" },
        { city: "San Juan  Miramar", cityCode: "SIG" },
        { city: "Vieques", cityCode: "VQS" },
        { city: "U.S. VIRGIN ISLANDS", cityCode: " " },
        { city: "Charlotte Amalie, St. Thomas", cityCode: "STT" },
        { city: "Christiansted, St. Croix", cityCode: "STX" }
    ];

    var cities = [
        {
            city: "Atlanta",
            cityCode: "ATL"
        }, {
            city: "Chicago",
            cityCode: "ORD"
        }, {
            city: "Los Angeles",
            cityCode: "LAX"
        }, {
            city: "Dallas-Fort Worth",
            cityCode: "DFW"
        }, {
            city: "Denver",
            cityCode: "DEN"
        }, {
            city: "New York",
            cityCode: "JFK"
        }, {
            city: "San Francisco",
            cityCode: "SFO"
        }, {
            city: "Charlotte",
            cityCode: "CLT"
        }, {
            city: "Las Vegas",
            cityCode: "LAS"
        }, {
            city: "Phoenix",
            cityCode: "PHX"
        }, {
            city: "Houston",
            cityCode: "IAH"
        }, {
            city: "Miami",
            cityCode: "MIA"
        }, {
            city: "Orlando",
            cityCode: "MCO"
        }, {
            city: "Newark",
            cityCode: "EWR"
        }, {
            city: "Seattle",
            cityCode: "SEA"
        }, {
            city: "Minneapolis",
            cityCode: "MSP"
        }, {
            city: "Detroit",
            cityCode: "DTW"
        }];

    var offers = [
        {
            _id: "1",
            offerId: "VIRGIN AMERICA",
            realFare: "327 USD",
            discountedFare: "267 USD",
            validFromDate: "06-12-2017",
            validTillDate: "06-30-2017",
            fromCity: "London",
            toCity: "Manchester",
            departureDate: "06-12-2017",
            returnDate: "06-12-2017",
            offeredBy: "Adriana Black: Wiz Tech"
        }, {
            _id: "2",
            offerId: "Lufthansa",
            realFare: "317 USD",
            discountedFare: "207 USD",
            validFromDate: "06-12-2017",
            validTillDate: "06-30-2017",
            fromCity: "London",
            toCity: "Brihjh",
            departureDate: "06-12-2017",
            returnDate: "06-12-2017",
            offeredBy: "Adriana Black: Wiz Tech"

        }];

    var searchData = [
        {
            searchedOnDate: "07-06-2017",
            searchedSource: "Boston",
            searchedDestination: "New Castle",
            searchedThemes: "Romantic,Casino,Mountains",
            budget: "1000"
        }, {
            searchedOnDate: "07-05-2017",
            searchedSource: "Thar",
            searchedDestination: "Cairo",
            searchedThemes: "Deserts",
            budget: "4000"

        }];

    var flightResults = [
        {
            _id: 0,
            tripData: {
                carrierCode: "AA",
                ticketType: "eTicket",
                upStopCount: 1,
                downStopCount: 1,
                upflightDetails: [
                    {
                        arrAirport: "BNA",
                        arrDateTime: "2017-07-07@10:23:00",
                        arrTimeZone: -5,
                        departureAirport: "CLT",
                        departureDateTime: "2017-07-07@09:50:00",
                        departureTimeZone: -4,
                        flightNo: 5242,
                        elapsedTime: 93,
                        airLineCode: "AA",
                        airLineName: "PSA AIRLINES AS AMERICAN EAGLE"
                    }

                ],
                downFlightDetails: [
                    {
                        arrAirport: "BNA",
                        arrDateTime: "2017-07-07@10:23:00",
                        arrTimeZone: -5,
                        departureAirport: "CLT",
                        departureDateTime: "2017-07-07@09:50:00",
                        departureTimeZone: -4,
                        flightNo: 5242,
                        elapsedTime: 93,
                        airLineCode: "AA",
                        airLineName: "PSA AIRLINES AS AMERICAN EAGLE"
                    }

                ]
            },
            cabinData: [
                {cabinType: "Y"},
                {cabinType: "Y"}

            ],
            bookingCodes: [
                {
                    bookingCode: "N",
                    content: "NVAIZNN3"
                },
                {
                    bookingCode: "Q",
                    content: "QVAJZNN3"
                }

            ],
            faresDetails: {
                baseFare: 223.26,
                taxes: [
                    {
                        amount: 16.74,
                        type: "US1",
                        currency: "USD"
                    },
                    {
                        amount: "16.40",
                        type: "ZP",
                        currency: "USD"
                    }

                ],
                totalTax: 60.84,
                totalFare: "284.10"
            },
            offeredBy: "",
            discountedFare: 0,
            nonRefundable: true
        }
    ];

    var themeResults = [

        {
            _id: 1,
            theme: "ROMANTIC",
            destination: "ATL",
            departDateTime: "2017-07-07T00:00:00",
            returnDateTime: "2017-07-10T00:00:00",
            distance: 397,
            pricePerMile: 0.27,
            lowestFares: {
                airlineCodes: [
                    {0: "NK", 1: "BC"}
                ],
                fare: 223.26
            },


            lowestFaresNonStop: [
                {airLineCode: "NK", fare: 223.26},
                {airLineCode: "BC", fare: 53.26}
            ]
        }
    ];

    app.get('/api/project/user/:userId/search', findAllThemesForUser);
//app.get('/api/project/user/:userId/search', findAllAirportsForUser);
    app.get('/api/project/user/:userId/makePlan', findAllCities);
    app.get('/api/project/user/:userId/findPlan', findPlan);
    app.post('/api/project/user/:userId/makePlan', placePlan);
    app.get('/api/project/user/:userId/offers', findAllOffers);
    app.get('/api/project/user/:userId/getData', findAllData);
    app.post('/api/project/user/:userId/search/storeFlight', storeUserFlightData);
    app.post('/api/project/user/:userId/search/storeTheme', storeUserThemeData);
    app.get('/api/project/user/:userId/search/airlinecode',findAirlinename);
    app.get('/api/project/user/:userId/fetchCity', findAllCitiesUS);

    function findPlan(req, res) {
        var offerId = req.query.offerId;
        var fromCity = req.query.fromCity;
        var toCity = req.query.toCity;
        var departureDate = req.query.departureDate;
        var returnDate = req.query.returnDate;
        var validFromDate = req.query.validFromDate;
        var validTillDate = req.query.validTillDate;
        var realFare = req.query.realFare;
        var discountedFare = req.query.discountedFare;
        var airLines=req.query.airLines;
        var offeredBy=req.query.offeredBy;
        if (offerId && fromCity && departureDate && discountedFare && realFare && returnDate && toCity && validFromDate && validTillDate) {
            var plans={
                offerId:offerId,
                offeredBy:offeredBy,
                fromCity:fromCity,
                toCity:toCity,
                departureDate:departureDate,
                returnDate:returnDate,
                validFromDate:validFromDate,
                validTillDate:validTillDate,
                airLines:airLines
            };
            console.log('**********');
            model.PlanModel
                .findPlan(plans)
                .then(function(resp){
                    console.log(resp);
                    if(resp==null){
                        res.sendStatus(400);
                    }
                    else{
                        res.json(resp);
                    }
                },function(error){
                    res.send(400);
                });


        }

    }

    function findAllThemesForUser(req, res) {
        var results = [];
        /*  for (var v in themes) {
         results.push(themes[v]);
         }*/
        results = [themes, airports];
        res.json(results);
    }


    function findAllCities(req, res) {
        var results = cities;
        res.json(results);

    }

    function findAllCitiesUS(req, res) {
        var results = citiesDataUS;
        res.json(results);

    }

    function findAllOffers(req, res) {
        model.PlanModel
          .findAllOffers()
          .then(function(resp){
              res.json(resp);
          },function(error){
              res.sendStatus(400);
          })
    }

    function findAllData(req, res) {
        var criteria = req.query.criteria;
        var userId = req.query.userId;
        if (criteria === "Theme" || "Budget") {
            model.LogsModel
                .findAllData("T")
                .then(function(resp){
                    res.json(resp);
                });
        }

        if (criteria === "Destination City" || "Origin City") {
            model.LogsModel
                .findAllData("F")
                .then(function(resp){
                    console.log(resp);
                    res.json(resp);
                });
        }

    }

    function placePlan(req, res) {

        var offer = req.body;
       // offer._id = (new Date()).getTime() + "";
        model.PlanModel
            .insertPlan(offer)
            .then(function (resp) {
                res.send(resp)
            }, function (error) {
                res.sendStatus(400);
            });
    }


    function storeUserThemeData(req, res) {
        var themeData=req.body;
        console.log(themeData);
        for (var u in themeData){
            var themes=themeData[u];
            var log ={
                origin:themes.origin,
                destination:themes.destination,
                fare:themes.lowestFareWS,
                taxes:0,
                noOfStopsfrom:-1,
                noOfStopsTo:-1,
                budget:themes.budget,
                airlines:themes.lowestFares[0].airLineCode,
                type:'T',
                theme :themes.theme
            };
            model.LogsModel
                .insertLogs(log)
                .then(function(resp){

                });

        }
        res.sendStatus(200);
    }

    function storeUserFlightData(req, res) {
        var flightData=req.body;
        for (var u in flightData){
            var plans=flightData[u];
            var log ={
                origin:plans.tripData.upflightDetails[0].arrAirport,
                destination:plans.tripData.downFlightDetails[0].arrAirport,
                fare:plans.faresDetails.totalFare,
                tax:plans.faresDetails.totalTax,
                stopsFrom:plans.tripData.upStopCount,
                stopsTo:plans.tripData.downStopCount,
                budget:0,
                airlines:plans.tripData.carrierCode,
                type:'F',
                theme :'ALL'

            };
            model.LogsModel
                .insertLogs(log)
                .then(function(resp){

                });

        }
        res.sendStatus(200);

    }
    function findAirlinename(req,res){
        console.log('*********');

        res.json(airlineCodeMap);
    }

    /*function findAllAirportsForUser(req, res) {
     var results1 = [];
     for (var v in airports) {
     results1.push(airports[v]);
     }
     res.json(results1);
     }*/

}