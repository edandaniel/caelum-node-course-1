var mysql = require('mysql');

function ConnectionFactory(){
};

ConnectionFactory.prototype.getConnection = function(){
  var config = {
    host:'localhost',
    database:'cdc',
    user:'root',
    password:''};
  if(process.env.NODE_ENV == 'test')
    config.database = 'cdc_test';
    
  return mysql.createConnection(config);
};

module.exports = ConnectionFactory;
