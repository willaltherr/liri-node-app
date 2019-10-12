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

//Command line "do-what-it-says" random.txt will perform one of two functions
if (args[0] === "do-what-it-says") {
  fs.feadFile("random.txt", "utf8", function (error, data) {

    // Provide error message for errors
    if (error) {
      return console.log(error);
    }

    dataArr = data.split(",");
    if (dataArr[0] === "movie-this") {
      if (dataArr[1] === undefined) {
        getMovie("Mr.+Nobody")
      }
      else {
        getMovie(dataArr[1].split().join("+"))
      }
    };

    if (dataArr[0] === "spotify-this-song") {
      if (dataArr[1] === undefined) {
        spotifySong("The Sign")
      }
      else {
        spotifySong(dataArr[1])
      }
    };
  });
};

