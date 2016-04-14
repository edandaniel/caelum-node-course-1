var ProdutoDaoAbobrinha = require('../persistence/ProdutoDao');

module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos/lista');
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

  app.post('/produtos',function(req,res){
    var produto = req.body;
    var dao = new ProdutoDaoAbobrinha( app.get('connection') );
    dao.salva(produto, function(erros){
      res.redirect('/produtos');
    });
  });

  app.get('/produtos/novo', function(req,res){
    var con = new ConnectionFactory().getConnection();
    var dao = new ProdutoDaoAbobrinha(con);//dao = data access object
    dao.lista(function(erros,resultado,colunas){
        res.render('form');
    });
    con.end();
  });


}
