var app = app || {};

// Render a single post
app.PostView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click .delete': 'deletePost'
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},
	deletePost: function(e) {
		this.model.destroy();
	},
	template: _.template( $('#post-template').html() ),
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}
});