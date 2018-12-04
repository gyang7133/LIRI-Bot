//Read and set ant environmental variables with the dotnv package
require('dotenv').config();

//Inits Packages
const Spotify = require('node-spotify-api');

//Import API Keys froms key.js file
let key = require("./keys.js");

//Set arguments that will be used by the pap to retrieve data from APIs

let input1 = process.argv[2];
let input2 = process.argv[3];


//Initiate commands