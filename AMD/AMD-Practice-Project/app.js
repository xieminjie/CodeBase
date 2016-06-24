var express = require('express');
var app = express();


app.use(express.static('Views'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/Views/html/index.html');
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});