var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req,res){
		console.log('in the index function');
		User.find().exec(function(err, users){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found users")
				res.json(users);
			}
		})
	},
	create: function(req,res){
		console.log("in user create function");
		User.findOne({name: req.body.name}).exec(function(err, foundUser){
			if(foundUser){
				console.log("found a user in the db");
				// adding the user's id to session
				req.session.userId = foundUser._id;
				res.json(foundUser);
			}else{
				console.log("no user found, creating a new one");
				var newUser = new User(req.body);
				newUser.save(function(err, createdUser){
					if(err){
						console.log("something went wrong");
						res.json(err);
					}else{
						console.log("sucessfully added user to db");
						// adding the user's id to session
						req.session.userId = createdUser._id;
						res.json(createdUser);
					}
				})
			}
		})
	},
	getCurrent: function(req, res){
		console.log("in get current user function");
		User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found current user");
				res.json(foundUser);
			}
		})
	}
}