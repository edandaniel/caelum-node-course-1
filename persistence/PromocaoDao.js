// constructor function
function PromocaoDao(connection){
  this._connection = connection;
}

//protoype mantem o metodo/funcao quando se da new na classe e cria um obj
PromocaoDao.prototype.lista = function(callback){
  this._connection.query('select id, titulo from produtos',callback);
}

PromocaoDao.prototype.altera = function(produto,callback){
  this._connection.query('update produtos set preco = preco - 2.50 where id=?;',produto.id,callback);
}

PromocaoDao.prototype.busca1 = function(produto,callback){
  debugger;
  this._connection.query('select titulo from produtos where id=?;',produto.id,callback);
  debugger;
}
module.exports = PromocaoDao;
