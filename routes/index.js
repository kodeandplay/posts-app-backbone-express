var express = require('express');
var router = express.Router();
var PostModel = require('../models/post');
var redis = require('redis');

// By default, redis.createClient will use 127.0.0.1 and 6379 
// as the hostname and port respectively. If you have a different 
// host/port you can supply them as following:
// redis.createClient(port, host, options)
var redisClient = redis.createClient();
redisClient.on('connect', function() {
  console.log('Redis Client Connection: ok');
});



// /* GET home page. */
// router.get('/', function(req, res, next) {

// 	var start = new Date();

//  	PostModel.find({}, function(err, posts) {

//  		console.log('Total:', new Date() - start);

// 	  	res.render('index', { 
// 	  		title: 'Express',
// 	  		posts:  posts
// 		});

// 		// Save to redis
// 		redisClient.set('backbone_posts', JSON.stringify(posts));
// 	});
// });

/* GET home page. */
router.get('/', function(req, res, next) {

	var start = new Date();

 	redisClient.get('backbone_posts', function(err, posts) {

 		console.log('Total:', new Date() - start);

 		res.render('index', { 
	  		title: 'Express',
	  		posts:  JSON.parse(posts)
		});

 	});

});

module.exports = router;
