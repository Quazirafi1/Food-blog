var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/index', function(request, response){
	response.render("admin/index");
});


router.get('/edit/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		console.log("cat");
		response.render('admin/edit', result);
	});
	
});

router.get('/delete', function(request, response){
	userModel.getAll(function(results){
			if(request.cookies['username'] != null){
				response.render('admin/delete', {users: results});		
			}else{
				response.redirect('/logout');
			}
		});
});

router.get('/del/:id', function(request, response){
	userModel.get(request.params.id, function(result){
		response.render('admin/del', result);
	});
});

router.post('/del/:id', function(request, response){

	var user = {
		id: request.params.id
	};
	
	userModel.delete2(user, function(status){	
		if(status){
			userModel.delete(user, function(status){
				if(status)
				{
					response.redirect('/admin/delete');
				}
				else
				{
					response.redirect('/admin/del'+request.params.id);
				}
			});
			//response.redirect("/user/userList");
		}else{
			response.redirect("/employee/del"+request.params.id);	
		}
	});
});

module.exports = router;



