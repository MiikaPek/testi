// Ota express käyttöön
const express = require("express");
const app =express();

// Ota mongoose käyttöön
const mongoose = require("mongoose");

// Ota MongoDB käyttöön
const mongodb = require("mongodb");

// Ota bodyparser käyttöön
const bodyparser = require("body-parser");

// Aseta määritykset express-palvelimelle
// Ota käyttöön public-tiedosto
app.use(express.static("public"));
    // Ota käyttöön bodyparser
app.use(bodyParser.urlencoded({extended:false}));

// Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});