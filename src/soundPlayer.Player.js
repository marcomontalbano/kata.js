;;

var soundPlayer = soundPlayer || {};

soundPlayer.Player = function() {
};

soundPlayer.Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

soundPlayer.Player.prototype.pause = function() {
  this.isPlaying = false;
};

soundPlayer.Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

soundPlayer.Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};
