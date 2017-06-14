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
            findPlan:findPlan
           // findAllAirportsForUser: findAllAirportsForUser
        };
        return api;

        function findPlan(validFromDate,validTillDate,offerId, fromCity,toCity,departureDate,returnDate,realFare,discountedFare,userId) {
            console.log("find plan client...." + validFromDate + "," + validTillDate+ "," +offerId+ "," + fromCity+ "," +
                toCity + "," + departureDate + "," +returnDate+ "," +realFare+ "," +discountedFare+ "," +userId);
            var url = "/api/project/user/" + userId + "/makePlan/offer?"
            + "validFromDate=" + validFromDate
            + '&validTillDate=' + validTillDate
            + '&offerId=' + offerId
            + '&fromCity=' + fromCity
            + '&toCity=' + toCity
            + '&departureDate=' + departureDate
            + '&returnDate=' + returnDate
            + '&realFare=' + realFare
            + '&discountedFare=' + discountedFare;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function searchThemes(budget,location,departureDate,returnDate,theme,userId) {
            console.log(theme.name);
            var themeName=theme.name.toUpperCase();
            var url = "https://api.test.sabre.com/v2/shop/flights/fares?origin="+location+"&departuredate="+departureDate+"&returndate="+returnDate+"&theme="+themeName+"&maxfare="+budget+"&pointofsalecountry=US";
            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQKzRifh5FszlRIbwrnxI9iu4HspWxBncj6r66iSpWtT3Ah0M3luAADAW37+rXnNe74IE5q7ye+fq6G/qIQzka2yMHBq9IogrlsZ33tDyzcx7qc3rsTZKNUbzOgJXdnCIFOkzBSzcWwqwGYyY2xUDxPnenb3LPqoZKR0/4FqlFmKwZr/E2+PNy5Iwakijds8/KJYY+O8P6Q3VRqjE0RoZrfzu/Xyjmf95Ovvz0RnXCCNaSuVXo2EMmYRStPGUJgRDNgLBm+5yXMKhVm3Z6kVvlmOZUD5q+vh1JNRjBKbZH5uw/IB/lyE7SZC';
            return $http.get(url)
                .then(function (response) {
                    //  console.log(response.data)
                    var themeFlightData=[];
                    var flData=response.data;
                    for(i=0;i<flData.FareInfo.length;i++){
                        var desintation=flData.FareInfo[i].DestinationLocation;
                        var airlineCode=flData.FareInfo[i].LowestFare.AirlineCodes[0];
                        var lowestFare=flData.FareInfo[i].LowestFare.Fare;
                        var lowestNonStopfare=flData.FareInfo[i].LowestNonStopFare.Fare;
                        var nonStopAirlinecode=flData.FareInfo[i].LowestNonStopFare.AirlineCodes[0];
                        var rslt={destination:desintation,airlineCode:airlineCode,lowestFare:lowestFare,lowestNonStopfare:lowestNonStopfare,nonStopAirline:nonStopAirlinecode};
                        themeFlightData.push(rslt);
                    }
                    //storing the flight search data:
                    var url = "/api/project/user/"+ userId +"/search/storeTheme";
                    return $http.post(url, themeFlightData)
                        .then(function (response) {
                            return response.data;
                        });


                    return themeFlightData;
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
            console.log(themeFlightData);
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

        function findAllCities(userId){
            var url="/api/project/user/"+userId+"/makePlan";
            //  console.log(userId);
            return $http.get(url)
                .then(function(response){
                    //alert('ok');
                    //console.log(response.data);
                    return response.data;
                });
        }

        function searchFlights(fromCity,toCity,departureDate,arrivalDate,userId){
           /*var url='https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=LAX&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US';
*/
            var url='https://api.test.sabre.com/v1/shop/flights?origin='+fromCity+'&destination='+toCity+'&departuredate='+departureDate+'&returndate='+arrivalDate+'&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US';
            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQKzRifh5FszlRIbwrnxI9iu4HspWxBncj6r66iSpWtT3Ah0M3luAADAW37+rXnNe74IE5q7ye+fq6G/qIQzka2yMHBq9IogrlsZ33tDyzcx7qc3rsTZKNUbzOgJXdnCIFOkzBSzcWwqwGYyY2xUDxPnenb3LPqoZKR0/4FqlFmKwZr/E2+PNy5Iwakijds8/KJYY+O8P6Q3VRqjE0RoZrfzu/Xyjmf95Ovvz0RnXCCNaSuVXo2EMmYRStPGUJgRDNgLBm+5yXMKhVm3Z6kVvlmOZUD5q+vh1JNRjBKbZH5uw/IB/lyE7SZC';


            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQKzRifh5FszlRIbwrnxI9iu4HspWxBncj6r66iSpWtT3Ah0M3luAADAW37+rXnNe74IE5q7ye+fq6G/qIQzka2yMHBq9IogrlsZ33tDyzcx7qc3rsTZKNUbzOgJXdnCIFOkzBSzcWwqwGYyY2xUDxPnenb3LPqoZKR0/4FqlFmKwZr/E2+PNy5Iwakijds8/KJYY+O8P6Q3VRqjE0RoZrfzu/Xyjmf95Ovvz0RnXCCNaSuVXo2EMmYRStPGUJgRDNgLBm+5yXMKhVm3Z6kVvlmOZUD5q+vh1JNRjBKbZH5uw/IB/lyE7SZC';
            return $http.get(url)
                .then(function (response){
                  //  console.log(response.data);
                    var flData=response.data;
                    //flData.push(response.data);
                    var flightData=[];
                    var FlightComp=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.Code;
                    var FlightNo=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber;
                    var ElapsedTime=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime;
                    var TotalFare=flData.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount;
                    var plans={_id:1,flightComp:FlightComp,flightNo:FlightNo,elapsedTime:ElapsedTime,totalFare:TotalFare,offeredBy:'',discountPercent:0.0,netValue:0.0 };
                    flightData.push(plans);

                    //storing the theme search data:
                    var url = "/api/project/user/"+ userId +"/search/storeFlight";
                    return $http.post(url, flightData)
                        .then(function (response) {
                            return response.data;
                        });



                    return flightData;
                });
        }
        function findAllOffers(userId){
            var url='/api/project/user/'+userId+'/offers';
            return $http.get(url)
                .then(function(response){
                 //   console.log(response.data);
                    return response.data;
                });
        }
        function findAllData(userId){
            var url='/api/project/user/'+userId+'/getData';
            return $http.get(url)
                .then(function(response){
                  //  console.log(response.data);
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


