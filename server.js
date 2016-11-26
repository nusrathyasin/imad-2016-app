var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
    user: 'nusrathyasin',
    database: 'nusrathyasin',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'spmeRandomSecretValue',
    cookie:{ maxAgge: 1000 * 60 * 60 * 24 * 30}
}));

//////


function createTemplate(data)
{
    var title=data.title;
    var link=data.link;
    var content=data.content;
    var htmltemplate=`
      <!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Vivaldi">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Viner Hand ITC">
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
         <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
<style>
body{
  margin:auto;
  width:95%;
}
             
#cat{
  background:url("http://ailievski.com/wp-content/uploads/2014/11/bp_background_2_blue1.jpg");
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  }
.wrapper{
  padding:15px;
  font-family: "Vivaldi";
  
  color:white;
}
.header{
  color:white;
  font-size:25px;
}
.box{
display:flex;
margin-left:70px;
margin-right:70px;
}
.box1{
  margin:1%;
  height:250px;
  width:250px;
  border-radius:20px;
  border:3px solid grey;
  padding-left:20px;
  padding-bottom:4px;
  padding-right:20px;
  color:white;
}
.box2{
 margin:1%;
 height:250px;
 width:250px;
 border-radius:20px;
 border:3px solid grey;
 padding-left:20px;
 padding-bottom:4px;
 padding-right:20px;
 color:white;
}
.box3{
  width:250px;
  margin:1%;
  height:250px;
  border-radius:20px;
  border:3px solid grey;
  padding-left:20px;
  padding-bottom:4px;
  padding-right:20px;
  color:white;
}

.comment{
  border:3px solid grey;
  color:white;
  width:90%;
  height:auto;
  padding-top:20px;
}
.commentbox{
    border:1px dotted white;
    color:white;
    width:70%;
    height:auto;
    border-radius:10px;
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;
}
.like{
  position:fixed;
  bottom:10px;
  right:0;
  margin-right:20px;
 }
.tog{
  display:none;
  position:fixed;
  right:0;
  bottom:80px;
  margin-right:20px;
  background:black;
  border:3px solid grey;
  height:210px;
  width:200px;
  color:white;
  padding-left:10px; 
  
}
#borderr{
 border:3px solid grey;
  height:80px;
  width:90px;
  border-radius:20%;
}
#count1{
 font-size:45px;
}
#login{
 font-family:Viner Hand ITC;
 float:right;
 color:white;
 margin-right:40px;
}
@media screen and (min-width: 300px){
.box1, .box2, .box3{
 margin-left:0px !important;
 margin-right:0px;
 width:auto;
}
}
</style>
<script>
    $(document).ready(function(){
    $("#likeme").click(function(){
        $(".tog").toggle(1000);
    });
});
</script>
</head>
        
<body id="cat">
   <div id="login"></div>     
     <div class="wrapper">
        <h1><font size="20"<b>NusrathYasin</b></font></h1>
     </div>
   <div class="container">
     <div class="header">
        <center>
         <a href="http://nusrathyasin.imad.hasura-app.io/" class="btn btn-default btn-lg">HOME <span class="glyphicon glyphicon-home"></span> </a>
        <div class="btn-group">
        <button type="button" class="btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown">MY ARTICLES <span class="glyphicon glyphicon-list-alt"></span>  <span class="caret"> </span></button>
         <ul class="dropdown-menu" role="menu">
         <li> <a href="/ui/article1.html" target="_blank">ARTICLE1 </a></li>
         <li><a href="/ui/article2.html" target="_blank" >ARTICLE2 </a> </li>
         <li><a href="/ui/article3.html" >ARTICLE3 </a> </li>
         </ul>
        </div>
        <a href="#about" class="btn btn-default btn-lg">ABOUT<span class="glyphicon glyphicon-user"></span></a>
        <a href="#contact" class="btn btn-default btn-lg">CONTACT <span class="glyphicon glyphicon-envelope"></span></a>
        </center>
<hr>
   </div>
  <div id="about">
      <center>
    <img src="https://thumbs.dreamstime.com/x/asian-girl-cartoon-character-black-straight-hair-light-skin-draw-retro-comic-style-42012649.jpg" class="img-circle" width="204" height="200"/>
        <h3 style="font-family:Viner Hand ITC;color:white">Hi! I am Nusrath.This is my WebSite. <br>
   <font size="3" color="white">Thanks to IMAD team <img src="/ui/madi.png" height="70"/> for conducting this course and giving such a wonderful opportunity.</font></h3>
      </center>
     
 <div class="box"> 

    <div class="row">
	
<div class="col-md-4">
<div class="box1">
  <h3><u>OBJECTIVE</u></h3>
            <p><i>Surfing and knowing new things alone can't make us to lift up.<br><br>Develop our knowledge and must execute it.</i></p>
        </div></div>
		<div class="col-md-4">
        <div class="box2">
          <h3><u>QUALIFICATION</u></h3>
          <p><i>FRESHER-B.E Graduate</i></p>
                 </div></div>
				 <div class="col-md-4">
        <div class="box3">
            <h3><u>PROGRAMMING SKILLS</u></h3>
            <p><i>HTML,CSS,Bootstrap,Jquery and interested in Animation. </i></p>
      </div> </div>
	
	  </div>
	    
	  </div>
	 
    </div>
    
<hr>

<hr>
<div class="like">
  <input id="likeme" type="image" title="Click me" class="img-circle" src="http://hdwallpaper2013.com/wp-content/uploads/2013/02/Facebook-Like-Logo-Pictures-HD-Wallpaper-1080x607.jpg" width="60" height="50" alt="Like"  />
  

</div>
<div class="tog">
  <h5>If you like this page.Hit 'Like' button.</h5>
  <center>
  <div id="borderr">
      <span id="count1"> 0</span> 
  </div><br>
    <button id="counter1"> <font color="black">LIKE <span class="glyphicon glyphicon-thumbs-up"></font> </button></center> 
</div>

<div id="contact">
<h2 style="font-family:Viner Hand ITC;color:white;margin-left:20px"><font size="5">Contact </font></h2> 
<a href="https://twitter.com/" target="_blank" blank="_blank" class="header" ><font color="white"> </font>
       <img src="https://cdn3.iconfinder.com/data/icons/social-icons-5/607/Twitterbird.png" width="50" height="50"/></a>  
      <a href="https://www.gmail.com" target="_blank" class="header"><img src="http://creativebits.org/files/gmail-logo-flying-new.png" width="50" height="50"/></a> 
      <a href="https://www.facebook.com/" target="_blank" class="header"> <img src="http://www.freeiconspng.com/uploads/facebook-logo-4.png" width="50" height="50"/></a>
</div>     
  <h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
          </div>
          
<br><br>

<ul class="pager">
  <li class="next"><a href="/ui/article1.html">Next</a></li>
</ul>
<br>
<h6 align="center"><font size="2" color="white">Designed by Nusrath</font></h6>

</div>

        <script type="text/javascript" src="/ui/article.js"></script>
        <script type="text/javascript" src="/ui/main.js"> </script>

       
    </body>
</html>
        `;
    return htmltemplate;
}
//////

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'index.html'));
});

function hash (input,salt) {
    var hashed =  crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function(req,res) {
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
});

app.post('/create-user', function (req, res) {
    var username=req.body.username;
     var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES($1,$2)',[username, dbString],function (err,result){
         if (err){
            res.status(500).send(err.toString());
        }else {
            res.send('User successfully created: '+ username);
        }
        
    });
});
app.post('/login', function (req, res) {
    var username=req.body.username;
     var password=req.body.password;
   
    pool.query('SELECT * FROM "user" WHERE username=$1',[username],function (err,result){
         if (err){
            res.status(500).send(err.toString());
        }else {
            if (result.rows.length===0){
                res.send(403).send('usename/password is invalid');
            }else {
                var dbString=result.rows[0].password;
               var salt=dbString.split('$')[2];
               var hashedPassword=hash(password,salt);
               if(hashedPassword===dbString){
                    req.session.auth = {userId: result.rows[0].id};
               res.send('credentials correct!'); 
               }else {
                    res.send(403).send('usename/password is invalid');
               
               }
            }
           
        }
        
    });
});

app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});
///////
app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id_seq = comment.article_id_seq AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
});

app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});

//////
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
var counter1 = 0;
app.get('/counter1',function(req,res){
    counter1 = counter1 + 1;
    res.send(counter1.toString());
});

var names = [];
app.get('/submit-name', function(req,res){
    var name = req.query.name;                                                                                                            // var firsrname = req.query.firstname;                                                               
    //var today = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
       
        //if(name!==''||firstname!==''){
         //   names.push(firstname);
	names.push(name); 
   //names.push(today);
 
   res.send(JSON.stringify(names));
});



app.get('/ui/homepage.html', function (req, res){
  res.sendFile(path.join(__dirname,'ui', 'homepage.html'));
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


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'main.js'));
});



app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

