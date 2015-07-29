var express = require('express'),
	PostModel = require('../models/post'),
	router = express.Router()

// base url: '/api'
router.get('/', function(req, res) {

	PostModel.find({}, function(err, docs) {

		if(err) {
			console.log('Error:', err);
			return res.status(404).send(new Error('Could not find posts.'));
		}

		res.send(docs);
	});

});

router.delete('/:id', function(req, res) {
	var postID = req.params.id;
	PostModel.remove({_id: postID}, function(err, result) {
		res.send('success');
	});
});

router.post('/', function(req, res) {
	var post = new PostModel(req.body);

	post.save(function(err, doc) {
		if(err) {
			console.log('Error:', err);
			return res.status(404).send(new Error('Could not save.'));
		}

		res.send(doc.toJSON());
	});

});












module.exports = router;