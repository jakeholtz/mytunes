// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.on('enqueue', function(e) {
  		// var entry = new SongQueueEntryView();
  		this.render();
  	});
  	this.on('add', this.render());
  	this.on('remove', this.render());
  },

  render: function() {

    return this.$el;
  }

});