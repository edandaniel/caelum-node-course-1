// constructor function
function PromocaoDao(connection){
  this._connection = connection;
}

//protoype mantem o metodo/funcao quando se da new na classe e cria um obj
PromocaoDao.prototype.lista = function(callback){
  this._connection.query('select id, titulo from produtos',callback);
}

PromocaoDao.prototype.altera = function(produto,callback){
  console.log(produto);
  this._connection.query('update produtos set preco = preco - 2.50 where id='+produto.id+';',callback);
}

module.exports = PromocaoDao;
