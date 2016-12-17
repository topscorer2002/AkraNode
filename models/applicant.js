var connection = require('../connection');
var applicant_id;

function applicant() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from applicant', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };



this.getposition = function(req, res) {
  //get data from the request
  	connection.acquire(function(err, con) {
        con.query('SELECT position FROM job_experience WHERE applicant_id = ?',        
               req.query.applicant_id, function(err, result) {
            if (err) {
                res.send({msg: 'Fehler'});
            } else 
                //callback(null, rows[0].id);
            res.send(result);
        });
	});
};

///Zeigt Status zum jeweiligen Bewerber an
/*this.getapplicantstatus = function(req, res) {
  //get data from the request
  	connection.acquire(function(err, con) {
        con.query('SELECT applicant_status_id FROM applicant_has_status WHERE applicant_id = ?',        
               req.query.applicant_id, function(err, result) {
            if (err) {
                res.send({msg: 'Fehler'});
            } else 
            var applicant_status_id = result;

          connection.acquire(function(err, com) {
        	com.query('SELECT applicant_status FROM applicant_status WHERE applicant_status_id = ?',   
               	applicant_status_id, function(err, result) {
            		if (err) {
                		res.send({msg: 'Fehler'});
            	} 	else 
                //callback(null, rows[0].id);
            	res.send(result);  //----> Fehler!!! alle Status statt einzelwert zurück...warum?! 
        	});
		});
        });
	});
};*/


///Zeigt Status zum jeweiligen Bewerber an
this.getapplicantbystatus = function(req, res) {
  //get data from the request
  	connection.acquire(function(err, con) {
        con.query("SELECT a.*, s.applicant_status FROM applicant_status as s inner join applicant_has_status as h on s.applicant_status_id = h.applicant_status_id inner join applicant as a on h.applicant_id = a.applicant_id WHERE h.applicant_status_id = ?",        
               req.query.applicant_status_id, function(err, rows, result) {
            if (err) {
                res.send(err);
            } else 
            //applicant_id = result;

            res.json(rows);
        	});
    	});
  	};
  }

            //var arr = rows.map( function(el) { return el.applicant_id; });

            //applicant.getapplicantbyId = function(id, resp) {
         	/*	 connection.acquire(function(err, con) {


        			con.query('SELECT * FROM applicant WHERE applicant_id =?', rows[1],   
               			 function(err, rows, result) {
            				if (err) {
                				//resp.send({msg: 'Fehler2'});
                				resp.send({msg: "SQL Error"});
            			} 	else 
                		//callback(null, rows[0].id);
                		
            			resp.json(result);  //----> Fehler!!! alle Status statt einzelwert zurück...warum?!
            			//resp.send(result); 
        			});
				});
      		};*/

            //applicant.getapplicantbyId(applicant_id, res);
        //});
	//});


//module.exports = new Todo();
module.exports = new applicant();