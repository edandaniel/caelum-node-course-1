var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.write('Bienvenido, amigo!');
  res.send();
});

app.get('/produtos', function(req,res){
  res.render('lista');
  res.send();
});

var server = app.listen(3000, function(){
  console.log('Servidor escala porta',server.address().port,'teste');
});

app.set('view engine','jade');
