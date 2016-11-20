var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'nusrathyasin',
    databse: 'nusrathyasin',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'index.html'));
});

function hash (input) {
    var hashed = crypto.pbkdf25ync(input,salt,10000,512, 'sha512');
    return hashed;
}

app.get('/hash/:input', function(req,res) {
    var hashedString = hash(req.params.input,'this-is-same-random-string');
    res.send(hashedString);
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test', function(err,result){
        if(err) {
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result,rows));
        }
    });
});

app.get('/ui/file1.css', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'file1.css'));
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
var names = [];
app.get('/submit-name', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

