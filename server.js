var app = require('./express');
var bodyParser = require('body-parser');
app.use(bodyParser.json());//For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(app.express.static(__dirname + '/public'));
require ("./test/app.js")(app);
require('./assignment/app');
require('./project/app');
var port = process.env.PORT || 3000;
app.listen(port);
