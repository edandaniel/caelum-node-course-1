module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos');
  });

  app.get('/produtos', function(req,res){

    //connection
    var con = require('../persistencia/connectionFactory')();
    //dao = data access object
    var dao = require('../persistencia/ProdutoDao')(con);
    dao.lista(function(){
      function(erros,resultado,colunas){
        dao.lista(function())
        res.render('lista',{produtos:resultado});
      });
    });
    con.end();
  });
}
