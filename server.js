var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./lib/db');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(require('./routes/api'));

app.get('*',(req,res)=> { res.sendFile(path.join(__dirname+'/dist/index.html'));

})

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Listening to port " + port);
});