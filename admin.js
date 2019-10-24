var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/index', function(request, response){
	response.render("admin/index");
});
/*
router.post('/register', function(request, response){

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
	
});

router.get('/see', function(request, response){
		
		userModel.getAll(function(results){
			if(request.cookies['username'] != null){
				response.render('employee/see', {users: results});		
			}else{
				response.redirect('/logout');
			}
		});	
});

router.get('/edit/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render('employee/edit', result);
	});
	
});

router.post('/edit/:id', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
		name: request.body.name,
		phone: request.body.phone,
		id: request.params.id
	};

	userModel.update(user, function(status){
		
		if(status){
			userModel.update2(user, function(status){
				if(status)
				{
					response.redirect('/employee/see');
				}
				else
				{
					response.redirect('/employee/edit'+request.params.id);
				}
			});
			//response.redirect('/employee/see');
		}else{
			response.redirect('/employee/edit'+request.params.id);
		}
	});
	
});

router.get('/delete/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render('employee/delete', result);
	});
});

router.post('/delete/:id', function(request, response){

	var user = {
		id: request.params.id
	};
	
	userModel.delete2(user, function(status){	
		if(status){
			userModel.delete(user, function(status){
				if(status)
				{
					response.redirect('/employee/see');
				}
				else
				{
					response.redirect('/employee/delete'+request.params.id);
				}
			});
			//response.redirect("/user/userList");
		}else{
			response.redirect("/employee/delete"+request.params.id);	
		}
	});
});
/*
router.get('/details/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render("user/details", result);
	})
});*/

module.exports = router;



