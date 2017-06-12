/**
 * Created by nancy on 6/7/2017.
 */

(function() {
    angular
        .module('Travelator')
        .factory('searchServices', searchServices);

    function searchServices($http) {

        var api = {
            searchFlight: searchFlight,
            findAllThemesForUser: findAllThemesForUser,
            findAllCities:findAllCities,
            findFlightsFromTo:findFlightsFromTo,
            findAllOffers:findAllOffers,
            findAllData:findAllData,
            placePlan:placePlan,
            findPlan:findPlan
           // findAllAirportsForUser: findAllAirportsForUser
        };
        return api;

        function findPlan(validFromDate,validTillDate,offerId, fromCity,toCity,departureDate,returnDate,realFare,discountedFare,userId) {
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


        function searchFlight(userId) {
            var url = "/api/project/user/" + userId + "/search/results";
            return $http.get(url)
                .then(function (response) {

                    return response.data;
                });
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

        function findFlightsFromTo(fromCity,toCity,departureDate,arrivalDate){
            var url='https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=LAX&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US';
            $http.defaults.headers.common.Authorization = 'Bearer T1RLAQKzRifh5FszlRIbwrnxI9iu4HspWxBncj6r66iSpWtT3Ah0M3luAADAW37+rXnNe74IE5q7ye+fq6G/qIQzka2yMHBq9IogrlsZ33tDyzcx7qc3rsTZKNUbzOgJXdnCIFOkzBSzcWwqwGYyY2xUDxPnenb3LPqoZKR0/4FqlFmKwZr/E2+PNy5Iwakijds8/KJYY+O8P6Q3VRqjE0RoZrfzu/Xyjmf95Ovvz0RnXCCNaSuVXo2EMmYRStPGUJgRDNgLBm+5yXMKhVm3Z6kVvlmOZUD5q+vh1JNRjBKbZH5uw/IB/lyE7SZC';
            return $http.get(url)
                .then(function (response){
                    // console.log(response.data);
                    var flData=response.data;
                    //flData.push(response.data);
                    var planData=[];
                    var FlightComp=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.CompanyShortName;
                    var FlightNo=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber;
                    var ElapsedTime=flData.PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].ElapsedTime;
                    var TotalFare=flData.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns.PTC_FareBreakdown.PassengerFare.TotalFare.Amount;
                    var plans={_id:1,flightComp:FlightComp,flightNo:FlightNo,elapsedTime:ElapsedTime,totalFare:TotalFare,offeredBy:'',discountPercent:0.0,netValue:0.0 };
                    planData.push(plans);
                    return planData;
                });
        }
        function findAllOffers(userId){
            var url='/api/project/user/'+userId+'/offers';
            return $http.get(url)
                .then(function(response){
                    console.log(response.data);
                    return response.data;
                });
        }
        function findAllData(userId){
            var url='/api/project/user/'+userId+'/getData';
            return $http.get(url)
                .then(function(response){
                    console.log(response.data);
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


