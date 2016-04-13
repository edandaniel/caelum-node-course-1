var mysql = require('mysql');

module.exports = function(){
  return mysql.createConnection({
    host:'localhost',
    database:'cdc',
    user:'root',
    password:''
});
