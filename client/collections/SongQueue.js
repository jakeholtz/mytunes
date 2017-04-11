// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
	this.on('add', function() {
		if (this.at(1) === undefined) {
			this.playFirst();
		}
	});

	this.on('dequeue', function() {
		this.remove();
		this.playFirst();
	});

	this.on('ended', function() {
		this.shift();
		!this.at(0) ? null : this.playFirst();
	})

  },

  playFirst: function() {
  	this.at(0).play();
  },
});