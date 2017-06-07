
(function () {
    angular
        .module('Travelator')
        .controller('homeController', homeController);


    function homeController($location) {
        var model = this;

        model.images = [
            { "src": "travel1.jpg", "alt": "First Image" },
            { "src": "travel2.jpg", "alt": "Second image" },
            { "src": "travel3.jpg", "alt": "Third image" },
            { "src": "travel4.jpg", "alt": "Fourth image" }
        ];
    }});
