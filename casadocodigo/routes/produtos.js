module.exports = function (app) {
  app.get('/', function(req,res){
    res.redirect('/produtos');
  });

  app.get('/produtos', function(req,res){
    res.render('lista');
    //res.send();
  });
}
