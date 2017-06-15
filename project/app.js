/*
require('./services/ServerSideUserServices');
require('./services/searchServerSideService');
require('./services/resultsServerSide');

*/

// WILL BE THE DATABSE CODE .... UPPER CODE WILL BE REMOVED


module.exports = function(app) {
    var models = require("./models/models.server")();
    require("./services/user.service.server.js")(app, models);
    require("./services/searchServerSideService.js")(app, models);
    require("./services/resultsServerSide.js")(app, models);
    };


