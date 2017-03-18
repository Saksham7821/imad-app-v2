var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
'article_one':{
title: 'Article One | Saksham Srivastava',
heading: 'Article One',
date:'18th March, 2017',
content:`
  <p>
            This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            
        </p>
        <p>
            This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            
        </p>
        <p>
            This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            
        </p>
`
},
'article_two':{
title: 'Article Two | Saksham Srivastava',
heading: 'Article Two',
date:'17th March, 2017',
content:`
  <p>
            This is the content for my second article.
        </p>
        `
},
'article_three':{
title: 'Article Three | Saksham Srivastava',
heading: 'Article Third',
date:'16th March, 2017',
content:`
  <p>
            This is the content for my third article.
        </p>
        
`
}
    
};
function createTemplate(data)
{
    var date=data.date;
    var content=data.content;
    var title=data.title;
    var heading=data.heading;
var htmltemplate=
    `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        
        <h3>${heading}</h3>
        <div>${date}</div>
        
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;

return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));

    
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
