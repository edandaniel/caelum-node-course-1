var exp = require('express');

module.exports = function(){
  var app = exp();
  app.set('view engine','jade');
  app.use(exp.static('./public')); //pra poder usar css local e talzs
  var bp = require('body-parser');
  app.use(bp.urlencoded({extended:true}));
  //rotas ou controlers
  require('../routes/produtos')(app);
  return app;
};
