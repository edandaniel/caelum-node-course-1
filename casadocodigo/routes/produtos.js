module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos');
  });

  app.get('/produtos', function(req,res){

    //connection
    var con = require('../persistencia/connectionFactory');

    //query
    con.query('select * from produtos',function(erros,resultado,colunas){
      res.render('lista',{produtos:resultado});
    })
    //res.send();
  });
}
