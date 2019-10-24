var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('visitor/index');
});

router.post('/', function(request, response){

	//console.log(request.body);

	if(request.body.uname == request.body.password){
		//response.render('home/index');
		response.redirect('/home');
	}else{
		response.send('invalid username/password');		
	}

});

module.exports = router;