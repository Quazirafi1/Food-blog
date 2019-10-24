var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();


router.get('/', function(request, response){
	response.render("registration/index");
});

/*router.post('/register', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
		name: request.body.name,
		phone: request.body.phone
	};

	userModel.insert(user, function(status){
		
		if(status){
			console.log("came if");
			//response.redirect('/employee/register');
			userModel.insert1(user, function(status){
				
				if(status)
				{
					console.log("came if 2");
					//response.redirect('/employee/register');
					userModel.insert2(user, function(status){
						if(status){
							console.log("came if 3");
							response.redirect('/employee/register');
						}
						else
						{
							response.redirect('/employee/register');
						}
					});
				}
				else
				{
					response.redirect('/employee/register');
				}
			});
		}else{
			console.log("came else");
			response.redirect('/employee/register');
		}
	});
	
});*/

module.exports = router;



