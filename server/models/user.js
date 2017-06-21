var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
	name: {type: String, minlength: 2}
}, {timestamps: true});
mongoose.model('User', UserSchema);