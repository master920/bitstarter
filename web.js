var express = require('express');
var app = express();
var content:
var data;

app.use(express.logger());

fs.readFileSync("index.html", function read(err, data) {
    if (err) {
	throw err;
    }
buf = new Buffer(data);
content = buf.toString(data);

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
