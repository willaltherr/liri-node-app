//Must create own .env file
require("dotenv").config();

//Access to the npm's
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//Access to command line arguments
var [node, file, ...args] = process.argv;

//Pull Mr. Nobody film if no command line after "movie-this"
if (args[0] === "movie-this") {
  if (args[1] === undefined) {
    getMovie("Mr.+Nobody");
  }
  else {
    getMovie(args.slice(1).join("+"));
  }
};

//Pull The Sign song if no command line after "spotify-this-song"
if (args[0] === "spotify-this-song") {
  if (argv[1] === undefined) {
    spotifySong("The Sign");
  }
  else {
    var songTitle = args.slice(1).join(" ");
    spotifySong(songTitle);
  }
};
