'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', () => {
	console.log("Database connected...");
});

module.exports = db;