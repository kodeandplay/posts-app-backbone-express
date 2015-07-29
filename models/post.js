var mongoose = require('mongoose');

var Schema = mongoose.Schema({
	title: String,
	content: String,
	posted: Date
});

module.exports = mongoose.model('PostModel', Schema, 'posts');