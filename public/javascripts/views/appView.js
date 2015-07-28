var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#blog',
	initialize: function() {
		this.listenTo(app.posts, 'add', this.addOne);
	},
	addOne: function( model ) {
		var view = new app.PostView({ model: model });
		this.$('#posts').append( view.render().el );
	}
});