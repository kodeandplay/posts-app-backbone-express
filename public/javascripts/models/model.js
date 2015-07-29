var app = app || {};

app.PostModel = Backbone.Model.extend({

	idAttribute: '_id', 
	
	defaults: {
		title: '',
		content: '',
		posted: ''
	}

});

app.PostCollection = Backbone.Collection.extend({
	model: app.PostModel,
	url: '/api'
});

app.posts = new app.PostCollection();