const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelUser = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const user = mongoose.model('User', modelUser);
module.exports = user;
