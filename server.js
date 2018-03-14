var express = require('express');
var morgan = require('morgan');
var path=require('path');

var app = express();
app.use(morgan('combined'));
var projector= {
    
     'projector1' :  {
title:'projector1',
heading:'projector1',
date:'oct 10 1986',
content: `  <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>   `

},
 'projector2' :{  title:'projector2',
heading:'proj2',
date:'dec 10 1986',
content: `  <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>   `

},
 'projector3' :{title:'projector3',
heading:'proj3',
date:'nov 10 1986',
content: `  <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>
    <p>
        A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. A virtual retinal display, or retinal projector, is a projector that projects an image directly on the retina instead of using an external projection screen.
    </p>   `

},
};
function createtemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content = data.content;
var htmltemplate=`<html>
<head>
    <title>
    ${title}
        </title>
        <meta name="viewport content="width-device-width,initial-scale=1"/>
        
        <link href="/ui/style.css" rel="stylesheet" />
        
</head>
    <body>
  <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        </hr>
        <h3>
        ${heading}
        </h3>
<div>
${date}
</div>
<div>
    ${content}
</div>
</body>
</html>
';
return htmltemplate;

}
var counter=0;
app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});
app.get('/:projectorname',function(req,res){
var    projectorname=req.params.projectorname
    res.send( createtemplate (projector[projectorname]));
});


app.get('/', function (req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
  app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
