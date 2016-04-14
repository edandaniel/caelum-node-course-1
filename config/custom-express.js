var exp = require('express');

module.exports = function(){
  var app = exp();
  app.set('view engine','jade');
  //app.use(express.static('./public'));
  require('../routes/produtos')(app);
  return app;
};
