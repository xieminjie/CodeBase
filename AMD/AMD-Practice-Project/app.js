var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('Views'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/Views/html/index.html');
});
app.get('/data',function(req,res){
	fs.readFile('data.json', 'utf8', function (err, data) {
		if(data){
			res.send(JSON.parse(data));
		}
	});
});
app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});