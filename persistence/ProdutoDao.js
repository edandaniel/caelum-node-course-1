// constructor function
function ProdutoDao(connection){
  this._connection = connection;
}

//protoype mantem o metodo/funcao quando se da new na classe e cria um obj
ProdutoDao.prototype.lista = function(callback){
  this._connection.query('select * from produtos',callback);
}

ProdutoDao.prototype.salva = function(produto,callback){
  this._connection.query('insert into produtos set ?',produto,callback);
}

module.exports = ProdutoDao;
