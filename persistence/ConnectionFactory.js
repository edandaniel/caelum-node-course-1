var mysql = require('mysql');

function ConnectionFactory(){
};

ConnectionFactory.prototype.getConnection = function(){
  return mysql.createConnection({
    host:'localhost',
    database:'cdc',
    user:'root',
    password:''
  });
};

module.exports = ConnectionFactory;
