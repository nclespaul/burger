// Importing dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Set up the port
var port = process.env.PORT || 3000;

var app = express();

// Send out the static content
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method = DELETE
app.use(methodOverride('_method'));

// Use Handlebars as our view engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Importing routes for the server
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Initialize the port listener
app.listen(port);