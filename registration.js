var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();


router.get('/', function(request, response){
	response.render("registration/index");
});

router.post('/', function(request, response){

	var user = {
		type:request.body.type,
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
							response.redirect('/registration');
						}
						else
						{
							response.redirect('/registration');
						}
					});
				}
				else
				{
					response.redirect('/registration');
				}
			});
		}else{
			console.log("came else");
			response.redirect('/registration');
		}
	});
	
});

module.exports = router;



