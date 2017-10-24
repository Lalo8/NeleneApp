const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const STATUSES = [ 'entrepreneur', 'incubatorMember','investor'];

const userSchema = new Schema({
	username: String,
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	status: {
		type: String,
		enum: STATUSES,
		default: 'entrepreneur',
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
});



userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
