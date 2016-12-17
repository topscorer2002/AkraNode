//var todo = require('./models/todo');
var user = require('./models/user');
var applicant = require('./models/applicant');
var note = require('./models/note');
var login = require('./models/login');

module.exports = {
  configure: function(app) {
  

    //User Requests
    app.get('/user/', function(req, res) {
      user.get(res);
    });

    ////////////////////Applicant Requests

    app.get('/applicant/', function(req, res) {
      applicant.get(res);
    });

    //Positionen zum Bewerber finden
    app.get('/applicant/getposition/', function(req, res) {
      applicant.getposition(req, res);
    });
    //Bewerber mit Status x finden
    app.get('/applicant/getapplicantbystatus/', function(req, res) {
      applicant.getapplicantbystatus(req, res);
    });

    ////////////Note Requests
    app.get('/note/', function(req, res) {
      note.get(res);
    });

    app.post('/note/', function(req, res) {
      note.create(req.body, res);
    });

    app.put('/note/', function(req, res) {
      note.update(req.body, res);
    });

    app.delete('/note/:id/', function(req, res) {
      note.delete(req.params.id, res);
    });

    //login Request
    app.post('/login/', function(req, res) {
      login.post(req.body, res);
    });

    
  }
};