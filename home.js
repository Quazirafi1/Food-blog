var express = require('express');

var router = express.Router();

router.get('/', function(request, response){

	var data ={
		id: '12-11111-1',
		name:'XYZ',
		age:23,
		anotherobj: {
			test: 'obj2'
		}
	};

	response.render('home/index', data);
});

module.exports = router;
