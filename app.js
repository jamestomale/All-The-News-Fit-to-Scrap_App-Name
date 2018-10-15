var express = require('express');
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
import mongoose from 'mongoose';
var bodyParser = require('body-parser')
const cheerio = require('cheerio');
const $ = cheerio.load('<ul id="fruits">...</ul>');
var request = require('request');


var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"; 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);