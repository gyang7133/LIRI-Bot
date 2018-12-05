//Read and set ant environmental variables with the dotnv package
require('dotenv').config();

//Initial Node Packages
const Spotify = require('node-spotify-api');
const fs = require('fs');



//Import API Keys froms key.js file
let key = require("./keys.js");

//Set arguments that will be used by the pap to retrieve data from APIs

let input1 = process.argv[2];
let input2 = process.argv[3];

const findConcert = function(){
    
}

//Initiate switch commands

switch (input1) 
{
    case 'concert-this':
    findConcert();
    break;

    case 'spotify-this-song':
    findSpotify();
    break;

    case 'movie-this':
    findMovie();
    break;

    case 'do-what-it-says':
    toDo();
    break;

}
