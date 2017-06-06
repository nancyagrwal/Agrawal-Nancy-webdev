var express = require('express');
var app = express();

//Node.js is configured to parse JSON from the HTTP body
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require("./test/app.js")(app);
require("./assignment/app.js")(app);

var port = process.env.PORT || 3000;

var ipadress = process.env.ipadress;

app.listen(port,ipadress);


