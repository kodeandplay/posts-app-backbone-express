var app = app || {};

$(document).ready(function() {

	app.appView = new app.AppView();
	app.posts.reset(bootstrapPosts);
	// app.posts.fetch();

});