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


