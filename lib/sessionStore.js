
var session = require('express-session');
var mongoose = require('../lib/mongoose');
var mongoStore = require('connect-mongo')(session);

var sessionStore = new mongoStore({mongooseConnection: mongoose.connection});

module.exports = sessionStore;