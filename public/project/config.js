(function () {
    angular
        .module('Travelator')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home1.html'
               })
            .when('/login', {
                templateUrl: 'views/user/templates/login.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: 'views/user/templates/register.html',
                controller: 'registerController',
                controllerAs: 'model'
            })


            /*.when('/user/:userId', {
             templateUrl: 'views/user/templates/profile.html',
             controller: 'profileController',
             controllerAs: 'model',
             resolve:{
             currentLoggedInUser:checkLoggedIn
             }
             })*/


            .when('/profile',{
                templateUrl : 'views/user/templates/profile.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }
            })

            .when('/search', {
            templateUrl: 'views/user/templates/search.html',
            controller: 'searchController',
            controllerAs: 'model'
                /*resolve:{
                    currentLoggedInUser:checkLoggedIn
                }*/
        })

            .when('/user/search', {
                templateUrl: 'views/user/templates/search.html',
                controller: 'searchController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }

            })

            .when('/user/:userId/search/results', {
                templateUrl: 'views/user/templates/results.html',
                controller: 'resultController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }
            })
            .when('/user/makePlan', {
                templateUrl: 'views/user/templates/plan.html',
                controller: 'planController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }
            })
            .when('/user/offers', {
                templateUrl: 'views/user/templates/offers.html',
                controller: 'offerController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }
            })
            .when('/user/getData', {
                templateUrl: 'views/user/templates/userData.html',
                controller: 'dataController',
                controllerAs: 'model',
                resolve:{
                    currentLoggedInUser:checkLoggedIn
                }
            });

    }

    function checkLoggedIn($q,ClientSideServices,$location) {
        var deferred = $q.defer();
        ClientSideServices
            .checkLoggedIn()
            .then(function (response) {
                if(response === '0'){
                    deferred.reject();
                    $location.url('/login');
                }else{
                    deferred.resolve(response);
                }
            });
        return deferred.promise;
    }

})();


