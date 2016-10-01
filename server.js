var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'index1.html'));
});


app.get('/ui/file1.css', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'file1.css'));
});

var names = [];
app.get('/submit-name', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/ui/article1.html', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'article1.html'));
});

app.get('/ui/article2.html', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'article2.html'));
});

app.get('/ui/article3.html', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'article3.html'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

