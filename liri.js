//Must create own .env file
require("dotenv").config();

//Access to the npm's
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotifyKeys = require("./keys.js");
var spotify = new Spotify(spotifyKeys.spotify);

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
  if (args[1] === undefined) {
    spotifySong("The Sign");
  }
  else {
    var songTitle = args.slice(1).join(" ");
    spotifySong(songTitle);
  }
};

//Command line "do-what-it-says" random.txt will perform one of two functions
if (args[0] === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function (error, data) {

    //Provide error message for errors
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

//Pulls 5 tracks from Spotify
function spotifySong(songName) {
  spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data) {
    if(err) {
      return console.log('Error occurred: ' + err);
    }

    data.tracks.items.forEach(function (element) {
      console.log("");
      console.log(`Artist: ${element.artist[0].name}`);
      console.log(`Song: ${songName}`);
      console.log(`Spotify Preview Link: ${element.preview_url}`);
      console.log(`Album: ${element.album.name}`);
    });
  })
};

//Movie function to pull OMDB's database
function getMovie(movieName) {
  axios
    .get(`http://www.omdbapi.com/?t=${movieName}&apikey=dbb2860a`)
    .then(function (movie) {
      console.log("");
      console.log(`Title: ${movie.data.Title}`);
      console.log(`Released: ${movie.data.Year}`);
      console.log(`IMDB Rating: ${movie.data.Ratings[0].Value}`);
      console.log(`Rotten Tomatoes Rating: ${movie.data.Ratings[1].Value}`);
      console.log(`Produced in: ${movie.data.Country}`);
      console.log(`Language in: ${movie.data.Language}`);
      console.log(`Plot: ${movie.data.Plot}`);
      console.log(`Starring: ${movie.data.Actors}`);
    })
    .catch(function (err) {
      console.log(err);
    });
};

