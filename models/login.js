var connection = require('../connection');

  
function login() {
    this.post = function(req, res) {
    connection.acquire(function(err, con) {
      con.query("SELECT * from user where username='"+req.username+ "' and password='"+req.password+"'", 
      	function(err, rows, fields) {
        con.release();
      		if (!err) {
          		if (rows.length > 0){
              		res.send({msg: 'Thanks, login info is correct'});
          		}
          		else {
              		res.send({msg:'user is not valid'});
          		}
      		}
      		else {
          		res.send({msg:'error cannot execute query'});
      		}
      });
    });
  };
 }

//module.exports = new Todo();
module.exports = new login();