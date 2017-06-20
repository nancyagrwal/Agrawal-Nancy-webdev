/**
 * Created by nancy on 6/7/2017.
 */

(function() {
    angular
        .module('Travelator')
        .factory('searchServices', searchServices);

    function searchServices($http) {

        var api = {
            searchThemes:searchThemes,
            searchFlights: searchFlights,
            findAllThemesForUser: findAllThemesForUser,
            findAllCities:findAllCities,
            findAllOffers:findAllOffers,
            findAllData:findAllData,
            placePlan:placePlan,
            findPlan:findPlan,
            findAirlineData:findAirlineData,
            findAllCitiesUS:findAllCitiesUS
           // findAllAirportsForUser: findAllAirportsForUser
        };
        return api;

        var airlineData=[];
        var citydata=[];

        function findPlan(validFromDate,validTillDate,offerId, fromCity,toCity,departureDate,returnDate,realFare,discountedFare,userId,username,airLines) {
            var url = "/api/project/user/" + userId + "/findPlan?"
            + "validFromDate=" + validFromDate
            + '&validTillDate=' + validTillDate
            + '&offerId=' + offerId
            + '&fromCity=' + fromCity
            + '&toCity=' + toCity
            + '&departureDate=' + departureDate
            + '&returnDate=' + returnDate
            + '&realFare=' + realFare
            + '&discountedFare=' + discountedFare
            + '&offeredBy=' + username
            + '&airLines='+airLines;
            return $http.get(url)
                .then(function (response) {
                   // console.log(response.data);
                    return response.data;
                });
        }

        function searchThemes(budget,location,departureDate,returnDate,theme,userId) {
            var themeName=theme.name.toUpperCase();
            var url = "https://api.test.sabre.com/v2/shop/flights/fares?origin="+location+"&departuredate="+departureDate+"&returndate="+returnDate+"&theme="+themeName+"&maxfare="+budget+"&pointofsalecountry=US";
            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQIyFpEYc4FRwZLnrXMf5NUEiKsschA9rUbysQjO2VZ0lcDYKtE+AADA+1QHpbnLEr2ctJVLqKsy02TnLgrLt24kYgzPgEw+EPW19MH8L500sm1NW5vU+IryH8aBEYlAgH7rZMdkVYo5lsN9G/WeRa+MUyVWzrxa1kL1I74lmJS9NvTJbE6BCZBraea61XZ/ohE0GAZjlhCRL/aPudYlG+VMCg+KuBNch6FFmOQqmER9Xz1rVRZlsUrMeHJMLL1zaxrJvq0VUUe83AEO9U1lA1HeVW4iGzZbwSPDpmFMA0RtHsIjTcs9/96U';
            return $http.get(url)
                .then(function (response) {
                    var themeFlightData=[];
                    var flData=response.data;
                    var fareInfo=flData.FareInfo;
                    for(var i=0;i<fareInfo.length;i++){
                        var originName='';
                        var destinationName='';
                        var desintation=fareInfo[i].DestinationLocation;
                        for(var u in citydata){
                            if(citydata[u].cityCode ===location){
                                originName=citydata[u].city;
                            }
                            if(citydata[u].cityCode ===desintation){
                                destinationName=citydata[u].city;
                            }
                        }
                        var depDateTime=fareInfo[i].DepartureDateTime;
                        var dateTime=depDateTime.split("T");
                        var date=dateTime[0];
                        var time=dateTime[1];
                        var departDateTime=date+"@"+time;

                        var retDateTime=fareInfo[i].ReturnDateTime;
                        dateTime=retDateTime.split("T");
                        date=dateTime[0];
                        time=dateTime[1];
                        var returnDateTime=date+"@"+time;

                        var distance=fareInfo[i].Distance;
                        var pricePerMile=fareInfo[i].PricePerMile;

                        var lowestFares=[];
                        for(var j=0;j<fareInfo[i].LowestFare.AirlineCodes.length;j++){
                            var airLinecode=fareInfo[i].LowestFare.AirlineCodes[j];
                            airlineName='';
                            for(var u in airlineData){
                                if(airLinecode === airlineData[u].iata){
                                    airlineName=airlineData[u].name;
                                    break;
                                }
                            }
                             airCodes={
                                airLineCode:airlineName+'('+airLinecode+')'
                            };
                            lowestFares.push(airCodes);
                        }
                        var lowestFareWS=fareInfo[i].LowestFare.Fare;

                        var lowestFaresNonStop=[];
                        for(var m=0;m<fareInfo[i].LowestNonStopFare.AirlineCodes.length;m++){
                            airLinecode=fareInfo[i].LowestNonStopFare.AirlineCodes[m];
                            var airlineName='';
                            for(var u in airlineData){
                                if(airLinecode === airlineData[u].iata){
                                    airlineName=airlineData[u].name;
                                    break;
                                }
                            }
                            var airCodes={
                                airLineCode:airlineName+'('+airLinecode+')'
                            };
                            lowestFaresNonStop.push(airCodes);
                        }
                        var lowestFareNS=fareInfo[i].LowestNonStopFare.Fare;
                        var themeSearch={
                            _id : i,
                            theme:themeName,
                            origin:originName+'('+location+')',
                            destination:destinationName+'('+desintation+')',
                            departDateTime:departDateTime,
                            returnDateTime:returnDateTime,
                            distance:distance,
                            pricePerMile:pricePerMile,
                            lowestFares:lowestFares,
                            lowestFaresNonStop:lowestFaresNonStop,
                            lowestFareWS:lowestFareWS,
                            lowestFareNS:lowestFareNS,
                            budget:budget


                        };
                        themeFlightData.push(themeSearch);
                        // console.log(themeFlightData);
                    }
                    //storing the flight search data:
                   // console.log(themeFlightData);
                    var url = "/api/project/user/"+ userId +"/search/storeTheme";
                    $http.defaults.headers.common.Authorization =undefined;
                    return $http.post(url, themeFlightData)
                        .then(function (response) {
                            // return response.data;
                            return themeFlightData;
                        });



                });
        }



        /* function searchFlight(userId) {
             var url = "/api/project/user/" + userId + "/search/results";
             return $http.get(url)
                 .then(function (response) {

                     return response.data;
                 });
         }*/

        function getThemeFlightData(){

            return themeFlightData;
        }


        function findAllThemesForUser(userId){
        var url = "/api/project/user/" + userId + "/search";
        return $http.get(url)
            .then(function (response) {
              //  console.log("themes are" + response[0]);
               // console.log("airports are" + response[1]);
                  return response.data;
            });

    }
        function findAirlineData(userId){
            var url='/api/project/user/'+userId+'/search/airlinecode';
            return $http.get(url)
                .then(function(response){
                    airlineData=response.data;
                });

        }

        function findAllCities(userId){
            var url="/api/project/user/"+userId+"/makePlan";
            //  console.log(userId);
            return $http.get(url)
                .then(function(response){
                    //alert('ok');
                    return response.data;
                });
        }

        function findAllCitiesUS(userId){
            var url="/api/project/user/"+userId+"/fetchCity";
            //  console.log(userId);
            return $http.get(url)
                .then(function(response){
                    //alert('ok');
                    citydata=response.data;
                    return response.data;
                });
        }

        function searchFlights(fromCity,toCity,departureDate,arrivalDate,userId){
            /*var url='https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=LAX&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US';
             */
            var url='https://api.test.sabre.com/v1/shop/flights?origin='+fromCity+'&destination='+toCity+'&departuredate='+departureDate+'&returndate='+arrivalDate+'&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US';
            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQIyFpEYc4FRwZLnrXMf5NUEiKsschA9rUbysQjO2VZ0lcDYKtE+AADA+1QHpbnLEr2ctJVLqKsy02TnLgrLt24kYgzPgEw+EPW19MH8L500sm1NW5vU+IryH8aBEYlAgH7rZMdkVYo5lsN9G/WeRa+MUyVWzrxa1kL1I74lmJS9NvTJbE6BCZBraea61XZ/ohE0GAZjlhCRL/aPudYlG+VMCg+KuBNch6FFmOQqmER9Xz1rVRZlsUrMeHJMLL1zaxrJvq0VUUe83AEO9U1lA1HeVW4iGzZbwSPDpmFMA0RtHsIjTcs9/96U';
            return $http.get(url)
                .then(function (response){

                    var flData=response.data;
                    //flData.push(response.data);

                    var flightData=[];
                    for(var i =0; i < flData.PricedItineraries.length;i++)
                    {
                        var carrierCode=flData.PricedItineraries[i].TPA_Extensions.ValidatingCarrier.Code;
                        var ticketType=flData.PricedItineraries[i].TicketingInfo.TicketType;
                        var upflightDetails=[];
                        var downFlightDetails=[];
                        var upStopCount=flData.PricedItineraries[i].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment.length-1;
                        var downStopCount=flData.PricedItineraries[i].AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment.length-1;

                        var pricingDataJson=flData.PricedItineraries[i].AirItineraryPricingInfo;

                        for(var k=0;k<2;k++)
                        {
                            var upFlDat=flData.PricedItineraries[i].AirItinerary.OriginDestinationOptions.OriginDestinationOption[k].FlightSegment;
                            for(var j=0;j<upFlDat.length;j++)
                            {
                                var arrAirport = upFlDat[j].ArrivalAirport.LocationCode;
                                var arrCityName='';

                                var datetimeData=upFlDat[j].ArrivalDateTime.split("T");
                                var date=datetimeData[0];
                                var time=datetimeData[1];


                                var arrDateTime = date+"@"+time;
                                var arrTimeZone = upFlDat[j].ArrivalTimeZone.GMTOffset;
                                var departureAirport = upFlDat[j].DepartureAirport.LocationCode;
                                var depCityName='';

                                for ( var u in citydata){
                                    if(citydata[u].cityCode === arrAirport){
                                        arrCityName=citydata[u].city;
                                    }
                                    if(citydata[u].cityCode === departureAirport){
                                        depCityName=citydata[u].city;
                                    }
                                }

                                datetimeData=upFlDat[j].DepartureDateTime.split("T");
                                date=datetimeData[0];
                                time=datetimeData[1];

                                var departureDateTime =  date+"@"+time;
                                var departureTimeZone = upFlDat[j].DepartureTimeZone.GMTOffset;
                                var flightNo = upFlDat[j].FlightNumber;
                                var elapsedTime = upFlDat[j].ElapsedTime;
                                var airLineCode = upFlDat[j].OperatingAirline.Code;
                                var airLineName = upFlDat[j].OperatingAirline.CompanyShortName;
                                var airData = {
                                    arrAirport: arrCityName+'('+arrAirport+')',
                                    arrDateTime: arrDateTime,
                                    arrTimeZone: arrTimeZone,
                                    departureAirport: depCityName+'('+departureAirport+')',
                                    departureDateTime: departureDateTime,
                                    departureTimeZone: departureTimeZone,
                                    flightNo: flightNo,
                                    elapsedTime: elapsedTime,
                                    airLineCode: airLineCode,
                                    airLineName: airLineName

                                };
                                if(k === 0)
                                    upflightDetails.push(airData);
                                else
                                    downFlightDetails.push(airData);

                            }

                        }
                        var tripData={
                            carrierCode:carrierCode,
                            ticketType:ticketType,
                            upStopCount:upStopCount,
                            downStopCount:downStopCount,
                            upflightDetails:upflightDetails,
                            downFlightDetails:downFlightDetails
                        };
                        var cabinData=[];
                        for(var l=0;l<pricingDataJson.FareInfos.FareInfo.length;l++){
                            var cabinType=pricingDataJson.FareInfos.FareInfo[l].TPA_Extensions.Cabin.Cabin;
                            var seatsRemaining=pricingDataJson.FareInfos.FareInfo[l].TPA_Extensions.SeatsRemaining.number;
                            var cabinDetails={
                                cabinType:cabinType,
                                seatsRemaining:seatsRemaining
                            };
                            cabinData.push(cabinDetails);
                        }
                        var faresData=[];
                        var fareBreakDown=pricingDataJson.PTC_FareBreakdowns.PTC_FareBreakdown;
                        var nonRefundable=fareBreakDown.Endorsements.NonRefundableIndicator;
                        var bookingCodes=[];
                        var bookingList='';
                        for(j=0;j<fareBreakDown.FareBasisCodes.FareBasisCode.length;j++){
                            var bookingCode=fareBreakDown.FareBasisCodes.FareBasisCode[j].BookingCode;
                            var content=fareBreakDown.FareBasisCodes.FareBasisCode[j].content;
                            bookingList=content+'/'+bookingList;
                            var bookings={
                                bookingCode:bookingCode,
                                content:content
                            };
                            bookingCodes.push(bookings)
                        }
                        var baseFare=fareBreakDown.PassengerFare.BaseFare.Amount;
                       // model.realFare=baseFare;
                        var baseFareCurrency=fareBreakDown.PassengerFare.CurrencyCode;
                        var taxes=[];
                        var taxData=fareBreakDown.PassengerFare.Taxes.Tax;
                        for(var m=0;m<taxData.length;m++){
                            var taxAmt=taxData[m].Amount;
                            var taxType=taxData[m].TaxCode;
                            var taxCurr=taxData[m].CurrencyCode;
                            var allTaxes={
                                amount:taxAmt,
                                type:taxType,
                                currency:taxCurr
                            };
                            taxes.push(allTaxes);
                        }
                        var totalTax=fareBreakDown.PassengerFare.Taxes.TotalTax.Amount;
                        var totalFare=fareBreakDown.PassengerFare.TotalFare.Amount;
                        var faresDetails={
                            baseFare:baseFare,
                            baseFareCurrency:baseFareCurrency,
                            taxes:taxes,
                            totalTax:totalTax,
                            totalFare:totalFare
                        };

                        var plans={
                            _id:i,
                            tripData:tripData,
                            bookingList:bookingList,
                            cabinData:cabinData,
                            bookingCodes:bookingCodes,
                            faresDetails:faresDetails ,
                            offeredBy:'',
                            discountedFare:0.0,
                            nonRefundable:nonRefundable

                        } ;  //console.log(plans);
                        flightData.push(plans);
                    }
                    //storing the theme search data:

                    var urlN = '/api/project/user/'+ userId +'/search/storeFlight';
                    $http.defaults.headers.common.Authorization=undefined;
                    return $http.post(urlN, flightData)
                        .then(function (response) {

                            return flightData;
                        });

                });
        }
        function findAllOffers(userId){
            var url='/api/project/user/'+userId+'/offers';
            return $http.get(url)
                .then(function(response){

                   var offers=response.data;
                   var offersData=[];
                   for(var u in offers){
                       var plan=offers[u];
                       for(var c in citydata){
                           if(citydata[c].cityCode===plan.fromCity){
                               plan.fromCity=citydata[c].city+'('+plan.fromCity+')';

                           }
                           if(citydata[c].cityCode===plan.toCity){
                               plan.toCity=citydata[c].city+'('+plan.toCity+')';

                           }
                       }
                       for(var a in airlineData){
                           if(plan.airLines===airlineData[a].iata){
                               plan.airLines=airlineData[a].name + '('+plan.airLines+')';
                           }
                       }
                       offersData.push(plan);
                   }

                    return offersData;
                });
        }
        function findAllData(userId,criteria){
            var url='/api/project/user/'+userId+"/getData?criteria="+criteria;
            return $http.get(url)
                .then(function(response){

                    return response.data;
                });
        }
        function placePlan(plan,userId)
         {
            var url = "/api/project/user/" + userId + '/makePlan';
            return $http.post(url, plan)
                .then(function (response) {
                    return response.data;
                });
        }

      /*  function findAllAirportsForUser(userId){
            var url = "/api/project/user/" + userId + "/search";
            return $http.get(url)
                .then(function (response) {
                      return response.data;
                });

        }*/

    }
}
)();


