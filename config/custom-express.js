var exp = require('express');

module.exports = function(){
  var app = exp();
  app.set('view engine','jade');
  require('../routes/produtos')(app);
  return app;
};
