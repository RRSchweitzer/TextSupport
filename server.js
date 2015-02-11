var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 8787;
var cors = require('cors');
var twilio = require('twilio')('AC7d8dfe34d12227b26856aa1fd48852ae', 'ea3aefcee047545db33518c1fa4a9cb6');
var Firebase = require('firebase');

var ref = new Firebase('https://textsupport2.firebaseio.com/numbers/help')

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/support/messages', function(req, res){
	twilio.sendMessage({
		to: req.body.number, 
  	from: '+13473310363',
  	body: req.body.body
	},function(err, responseData) { 
    	if (!err) { 
        	console.log(responseData.from); 
        	console.log(responseData.body);
        	res.status(200).json(responseData)
        	ref.child(responseData.to).set(responseData)
        }
        else {
        	console.log("There was an error", err)
        	res.status(400).send();
        }
  });
})



app.listen(port, function(){
	console.log('Now listening on port: ' + port);
})