var exp = require('express');

module.exports = function(){
  var app = exp();
  app.set('view engine','jade');
  app.use(exp.static('./public')); //pra poder usar css local e tal
  require('../routes/produtos')(app);
  return app;
};
