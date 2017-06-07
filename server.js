var app = require('./express');
// var app = express();
// var app = require('express');

//Loads the body-parser library
var bodyParser = require('body-parser');
app.use(bodyParser.json());//For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));

require ("./test/app.js");
// require ("./test/app.js");
require('./assignment/app');


var port = process.env.PORT || 3000;

app.listen(port);
