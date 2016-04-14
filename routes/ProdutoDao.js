module.exports = function(connection){
  this.lista = function(callback){
    return connection.query('select * from produtos',callback);
  }
  this.salva = function(callback,params){
    return connection.query('insert into produtos set ?',produto,callback);
  }
  return this;
}
