//Must create own .env file
require("dotenv").config();

//Access to the npm's
var fs = require("fs");
var moment = require("moment");

var axios = require("axios");
var Spotify = require("node-spotify-api");

var spotifyKeyInfo = require("./keys.js");

// Switch Statement
var userInput = process.argv;
var inputTopic = process.argv[2];


switch (inputTopic){
    case "concert-this":
        bandInfo();
        break;
    
    case "spotify-this-song":
        songInfo();
        break;
    
    case "movie-this":
        movieInfo();
        break;

    case "do-what-it-says":
        doWhatInfo();
        break;
}

