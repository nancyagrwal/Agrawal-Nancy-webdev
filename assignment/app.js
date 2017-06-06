/*(function () {
    angular.module('WAM', ['ngRoute']);
})();*/


module.exports = function(app) {
    require("./services/user.services.server.js")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.services.server.js")(app);
    require("./services/widget.service.server.js")(app);
};



