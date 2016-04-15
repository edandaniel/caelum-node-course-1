var app = require('../../config/custom-express')();
var reqDoST = require('supertest')(app);

describe('ProdutoRota',function(){
  it('lista produtos com html', function (done) {
    reqDoST.get('/produtos')
           .set('Accept','text/html')
           .expect('Content-Type',/html/)git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA' \
           .expect(200,done); //status
  });

  it('não adiciona produto sem título', function (terminou) {
    reqDoST.post('/produtos')
           .send({'titulo':'',descricao:'xpto','preco':'33'})
           .expect(400,terminou);
  });

  it('não adiciona produto com preço vazio', function (terminou) {
    reqDoST.post('/produtos')
           .send({'titulo':'hola que tal?',descricao:'xpto','preco':''})
           .expect(400,terminou);
  });

  it('não adiciona produto com preço vazio e sem titulo', function (terminou) {
    reqDoST.post('/produtos')
           .send({'titulo':'',descricao:'xpto','preco':''})
           .expect(400,terminou);
  });

  it('adiciona e flooda o banco de dados em produção', function (terminou) {
    reqDoST.post('/produtos')
           .send({'titulo':'bancodedadosquesedaneeuqueromaisequeohdexploda',descricao:'opa isso dai me parece legal ein, o banco de dados enche','preco':'2020202020220200.20'})
           .expect(400,terminou);
  });

});
