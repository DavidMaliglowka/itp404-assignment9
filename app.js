require('dotenv').config();
var express = require('express');
var app = express();
var yelp = require('./api/yelp');

app.get('/search', function (request, response) {
	yelp.search({
		term: request.query.term,
		location: request.query.location
	}).then(function(results){
		response.json(results)
	});
});

app.listen(3500);
