var app = require('./config/custom-express')();

var server = app.listen(3000, function(){
  console.log('Servidor on 3000 foot');
});

var socketIO = require('socket.io');
var io = socketIO(server);

app.set('io',io);
