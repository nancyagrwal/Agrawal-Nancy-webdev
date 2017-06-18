/**
 * Created by nancy on 6/7/2017.
 */

module.exports = function(app, model) {
    var ProjectUserModel = model.ProjectUserModel;

//var app = require('../../express');


var datas=[
    {
    "Quotes": [
        {
            "QuoteId": 1,
            "MinPrice": 381,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    470
                ],
                "OriginId": 68033,
                "DestinationId": 42833,
                "DestinationName" : "Paris",
                "DepartureDate": "2017-02-03T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    470
                ],
                "OriginId": 42833,
                "DestinationId": 68033,
                "DepartureDate": "2017-02-06T00:00:00"
            },
            "QuoteDateTime": "2016-11-09T21:20:00"
        },
    ],
    "Places": [
        {
            "PlaceId": 837,
            "Name": "United Arab Emirates",
            "Type": "Country",
            "SkyscannerCode": "AE"
        },
    ],
    "Carriers": [
        {
            "CarrierId": 29,
            "Name": "Mombasa Air Safari"
        },
        {
            "CarrierId": 173,
            "Name": "Silver Airways"
        },
    ],
    "Currencies": [
        {
            "Code": "EUR",
            "Symbol": "€",
            "ThousandsSeparator": " ",
            "DecimalSeparator": ",",
            "SymbolOnLeft": false,
            "SpaceBetweenAmountAndSymbol": true,
            "RoundingCoefficient": 0,
            "DecimalDigits": 2
        }
    ]
}];

app.get('/api/project/user/:userId/search/results', searchFlight);

function searchFlight(req,res){
    var dataSet = [];
    for (var v in datas) {
        dataSet.push(datas[v]);
    }
    res.json(dataSet);
}
}