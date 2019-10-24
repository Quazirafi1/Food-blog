//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var homepage = require('./controllers/homepage');
var login = require('./controllers/login');
//var register = require('./controllers/register');
var registration = require('./controllers/registration');
var admin = require('./controllers/admin');
var member = require('./controllers/member');
var app = express();


	//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/homepage', homepage);
app.use('/login', login);
app.use('/admin', admin);
app.use('/member', member);
app.use('/registration', registration);

//ROUTER
app.get('/', function(request, response){
	response.send('index page!');
});

app.get('/test/your/:name/:id', function(request, response){
	var id = request.params.id;
	var name = request.params.name;
	response.send(id+" "+name);

});



//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});