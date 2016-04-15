var PromocaoDao = require('../persistence/PromocaoDao');

module.exports = function (app) {
  app.get('/admin/promocao', function(req,res){
    var dao = new PromocaoDao( app.get('connection') );
    dao.lista(function(erros,resultado){
      res.format({
          json:function(){
            res.json(resultado);
          },
          html: function(){
            res.render('promocao',{produtos:resultado});
          }
      });
    });
  });

  app.post('/admin/promocao',function(req,res){
    var produto = req.body;
    //valida
    req.assert('id','Opa, alguma coisa errada ai, nao consegui achar esse livro').notEmpty();
    //req.assert('id','Sem hackear, parça').notZero();
    var erros_v = req.validationErrors(); //erros validacao
    if (erros_v){
      console.log(erros_v);
      //necessario para o jade, jade nao processa callback no render = EJS
      var erros_v_cb = []; //recebe retorno do callback
      erros_v.forEach(function(erro){
        erros_v_cb.push({msg:erro.msg,value:erro.value});
      });
      //no EJ dava pra enviar direto a var erros e processar com callback lá
      res.status(400).render('promocao',{errs:erros_v_cb});
      return;
    }
    
    //dao redirect
    var dao = new PromocaoDao( app.get('connection') );
    dao.altera(produto, function(erros){
      //testes
      if(erros){
        res.status(500).send();
        console.log(erros);
        return;
      }
      //
      res.redirect('/admin/promocao');
    });
  });
}
