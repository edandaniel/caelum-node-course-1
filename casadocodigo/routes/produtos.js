module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos');
  });

  app.get('/produtos', function(req,res){
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host:'localhost',
      database:'cdc',
      user:'root',
      password:''
    });
    //isso nao é bom pra sincrono, faz IO, nao se sabe quanto pode demorar
    //var result = con.query('select * from produtos')

    con.query('select * from produtos',function(erros,resultado,colunas){
      res.render('lista',{produtos:resultado});
    })
    //res.send();
  });
}
