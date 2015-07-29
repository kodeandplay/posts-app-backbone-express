var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#blog',

	events: {
		'submit #newpost': 'newPostSubmit'
	},

	newPostSubmit: function(e) {
		e.preventDefault(); 
		var attrs = {
			title: this.$('[name="title"]').val(),
			content: this.$('[name="content"]').val(),
			posted: new Date()
		}
		app.posts.create(attrs); 
		this.$('[type="text"]').val('')	

	},

	initialize: function() {
		this.listenTo(app.posts, 'add', this.addOne);
		this.listenTo(app.posts, 'reset', this.addAll);
	},

	addOne: function( model ) {
		var view = new app.PostView({ model: model });
		this.$('#posts').append( view.render().el );
	},

	addAll: function() {
		this.$('#posts').empty();
		app.posts.each(this.addOne, this)
	}
});














