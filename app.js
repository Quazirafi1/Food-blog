//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
//var expSession = require('express-session');
//var cookieParser = require('cookie-parser');
//var login = require('./controllers/login');
//var home = require('./controllers/home');
//var logout = require('./controllers/logout');
//var employee = require('./controllers/employee');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
//app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
//app.use(cookieParser());
//app.use('/login', login);
//app.use('/home', home);
//app.use('/employee', employee);
//app.use('/logout', logout);


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