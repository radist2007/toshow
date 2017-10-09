var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var session = require('express-session');
var MongoStore = require('connect-mongo');
// var cookieParser = require('cookieParser');
// var async = require('async');
var favicon = require('express-favicon');

// var common = require('./common');
var myconfig = require('./myconfig');

var app = express();

app.use(favicon(__dirname + '/public/img/icons/favicon.ico'));

var handlebars = require('express-handlebars').create({
	defaultLayout: 'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
		}
	}
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || myconfig.port);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var sessionStore = require('./lib/sessionStore');
app.use(session({
    secret: myconfig.session.secret,
    key: myconfig.session.key,
    cookie: myconfig.session.cookie,
    store: sessionStore,
    proxy: true,//ПОЛНОМОЧИЕ  Будет использоваться заголовок «X-Forwarded-Proto».
    resave: true,//перезаписывает в хранилище даже если сеанс никогда не изменялся
    saveUninitialized: true
}));

require('./routes')(app);

//************************* 404 ***********************************
app.use(function(req, res){
    res.locals.metatitle = '404 Ничего не найдено';
    res.locals.pagenoindex = 'yes';//_________________________________
    res.status(404).render('404');
});

app.listen(app.get('port'), function(){
	console.log(' ---------------------------------> START');
	console.log( 'Express started on http://localhost:' +
			app.get('port') + ';' + ' press Ctrl-C to terminate.' );
});