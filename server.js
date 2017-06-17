var app = require('./express');

// load cookie parse and express session:
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');

app.use(cookieParser());
app.use(session({    secret: process.env.SESSION_SECRET || 'mean',
                     resave: true,
                     saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());//For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(app.express.static(__dirname + '/public'));
//require ("./test/app.js")(app);
require('./assignment/app')(app);
//require('./project/app');
var port = process.env.PORT || 3000;
app.listen(port);
