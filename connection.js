var mysql = require('mysql');
 
function Connection() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      /*connectionLimit: 100,
      host: '213.238.59.191',
      user: 'studi',
      password: 'jeiGh+o6',
      database: 'schmal'*/
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'schmal',
    port: '3306'


    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}
 
module.exports = new Connection();