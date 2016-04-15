var ProdutoDaoAbobrinha = require('../persistence/ProdutoDao');

module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos/');
  });

  app.get('/produtos', function(req,res){
    var dao = new ProdutoDaoAbobrinha( app.get('connection') );
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
  });

  app.post('/produtos',function(req,res){
    var produto = req.body;
    //valida
    req.assert('titulo','Titulo é obrigatorio!').notEmpty();
    req.assert('preco','Preço é obrigatorio um numero!').isFloat();
    var erros = req.validationErrors();
    if (erros){
      console.log(erros);
      //necessario para o jade, jade nao processa callback no render = EJS
      var errosSend = [];
      erros.forEach(function(erro){
        errosSend.push({msg:erro.msg,value:erro.value});
      });
      //no EJ dava pra enviar direto a var erros e processar com callback lá
      res.status(400).render('form',{errs:errosSend});
      return;
    }
    //dao redirect
    var dao = new ProdutoDaoAbobrinha( app.get('connection') );
    dao.salva(produto, function(erros){
      res.redirect('/produtos');
    });
  });

  app.get('/produtos/novo', function(req,res){
    var dao = new ProdutoDaoAbobrinha( app.get('connection') );
    dao.lista(function(erros,resultado,colunas){
        res.render('form',{produtos:{}});
    });
  });
}
