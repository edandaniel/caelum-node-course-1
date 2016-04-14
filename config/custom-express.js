var exp = require('express');

module.exports = function(){
  var app = exp();
  app.set('view engine','jade');
  app.use(exp.static('./public')); //pra poder usar css local e talzs
  var bp = require('body-parser');
  app.use(bp.urlencoded({extended:true}));
  app.use(bp.json());

  //pra garantir que todas conexoes se fechem, processa todos requests e fecha
  app.use(function(req,res,next){
    var CF = require('../persistence/ConnectionFactory');
    var conn = new CF().getConnection();
    app.set('connection'.conn);
    next();
    conn.end();
  });
  //rotas ou controlers
  require('../routes/produtos')(app);
  return app;
};
