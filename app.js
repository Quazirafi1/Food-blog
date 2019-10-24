//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var homepage = require('./controllers/homepage');
var login = require('./controllers/login');
//var register = require('./controllers/register');
var registration = require('./controllers/registration');
var app = express();


	//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use('/homepage', homepage);
app.use('/login', login);
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