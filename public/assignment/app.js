

(function () {
    angular
        .module('WebAppMaker', ['ngRoute']);
})();


module.exports = function(app) {
    require("./services/ServerSide Services/user.service.server.js")(app);
    require("./services/ServerSide Services/website.service.server.js")(app);
    require("./services/ServerSide Services/page.service.server.js")(app);
    require("./services/ServerSide Services/widget.service.server.js")(app);
};

