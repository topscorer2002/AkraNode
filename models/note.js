var connection = require('../connection');

function note() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from note', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(note, res) {
    connection.acquire(function(err, con) {
      con.query('insert into note set ?', note, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Note creation failed'});
        } else {
          res.send({status: 0, message: 'Note created successfully'});
        }
      });
    });
  };

  this.update = function(note, res) {
    connection.acquire(function(err, con) {
      con.query('update note set ? where note_id = ?', [note, note.note_id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Note update failed'});
        } else {
          res.send({status: 0, message: 'Note updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from note where note_id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };

}

//module.exports = new Todo();
module.exports = new note();