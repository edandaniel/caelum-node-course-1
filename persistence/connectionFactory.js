var mysql = require('mysql');var con = require('../persistencia/connectionFactory')();

module.exports = function(){
  return mysql.createConnection({
    host:'localhost',
    database:'cdc',
    user:'root',
    password:''
});
