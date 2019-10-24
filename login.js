var express = require('express');
var router = express.Router();
var userModel = require('./../models/user-model');
router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.uname,
		password: request.body.password
	};

	userModel.validate(user, function(status){
		console.log(status);
		if(status==0){
			response.cookie('username', request.body.uname);
			//console.log(getCookie(request.body.username))	;
			//console.log(request.cookie[request.body.uname]);
			//console.log(request.body.uname);
			//response.redirect('/admin/index');
			var x= request.body.uname;
			response.render('admin/index', {user});
		}
		else if(status==1){
			response.cookie('username', request.body.username);
			var x= request.body.uname;
			response.render('admin/index', {user});
		}
		else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;