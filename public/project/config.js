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
            .when('/search', {
            templateUrl: 'views/user/templates/search.html',
            controller: 'searchController',
            controllerAs: 'model'
        })

            .when('/user/:userId/search', {
                templateUrl: 'views/user/templates/search.html',
                controller: 'searchController',
                controllerAs: 'model'
            })

            .when('/user/:userId', {
                templateUrl: 'views/user/templates/profile.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            .when('/user/:userId/search/results', {
                templateUrl: 'views/user/templates/results.html',
                controller: 'resultController',
                controllerAs: 'model'
            })
            .when('/user/:userId/makePlan', {
                templateUrl: 'views/user/templates/plan.html',
                controller: 'planController',
                controllerAs: 'model'
            })
            .when('/user/:userId/offers', {
                templateUrl: 'views/user/templates/offers.html',
                controller: 'offerController',
                controllerAs: 'model'
            })
            .when('/user/:userId/getData', {
                templateUrl: 'views/user/templates/userData.html',
                controller: 'dataController',
                controllerAs: 'model'
            })

    }
})();
