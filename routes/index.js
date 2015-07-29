var express = require('express');
var router = express.Router();
var PostModel = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {

 	PostModel.find({}, function(err, posts) {

	  	res.render('index', { 
	  		title: 'Express',
	  		posts:  posts
		});
	});
});

module.exports = router;
