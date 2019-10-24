var db = require('./db')
var db1 = require('./db')
var db2 = require('./db')
var x;
module.exports = {

	/*getById: function(id, callback){

			var sql = "SELECT id, username, password, name, phone FROM users,employee where users.id="+id+" and users.id=employee.eid";
			db.getResults(sql, function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	
	validate: function(user, callback){
		console.log(user.username);
		console.log(user.password);
		var sql ="select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "SELECT id, username, password, name, phone FROM users,employee where users.id=employee.eid";
		
		db.getResults(sql, function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){
		var v;
		var sql ="insert into users values('', '"+ user.username+"', '"+user.password+"')";
		db1.execute(sql, function(status){
			callback(status);
		});
		
	},
	insert1: function(user, callback){
		var v;
		
		var sq2 ="SELECT id FROM users ORDER BY ID DESC LIMIT 1";
		db.getResults(sq2, function(result){
			//console.log(result[0].id);
			var v=result[0].id;
			console.log(v);
			x=v;
			callback(true);	
		});
	},
	insert2: function(user, callback){
		
		console.log(user.name);
		console.log(user.phone);
		console.log(x);
		var sq3 ="insert into employee values('"+x+"', '"+user.name+"', '"+user.phone+"')";
		
		db2.execute(sq3, function(status){
			callback(status);
		});
		
	},
	update: function(user, callback){
		var sql ="update users set username='"+ user.username+"', password='"+user.password+"' where id="+user.id;
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	update2: function(user, callback){
		var sql ="update employee set name='"+ user.name+"', phone='"+user.phone+"' where eid="+user.id;
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(user, callback){
		var sql = "delete from users where id="+user.id;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete2: function(user, callback){
		var sql = "delete from employee where eid="+user.id;
		db.execute(sql, function(status){
			callback(status);
		});
	}*/
}



