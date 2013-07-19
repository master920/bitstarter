fs = require('fs');
var express = require('express');
var app = express();
var data;

app.use(express.logger());

data = fs.readFileSync("index.html", "utf8");
buf = new Buffer(data);
buf.write(data);


app.get('/', function(request, response) {
  response.send(buf.toString("utf8",0,28));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
