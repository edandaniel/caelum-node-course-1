var ConnectionFactory = require('../persistence/ConnectionFactory');
var ProdutoDaoAbobrinha = require('../persistence/ProdutoDao');

module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos');
  });

  app.get('/produtos', function(req,res){
    var con = new ConnectionFactory().getConnection();
    var dao = new ProdutoDaoAbobrinha(con);//dao = data access object
    dao.lista(function(erros,resultado){
      res.format({
          json:function(){
            res.json(resultado);
          },
          html: function(){
            res.render('lista',{produtos:resultado});
          }
      });
    });
    con.end();
  });
}
