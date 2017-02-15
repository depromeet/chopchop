var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

var models = require('../models');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/*	GET review listing. 
		GET /review        		
*/
router.get('/', function(req, res) {
  console.log('GET /review');
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
  res.send('GET /review');
});

/*	POST /user 
*/
router.post('/', upload.array(), function(req, res) {
  // check if token is valid
	
  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
});

/* PUT /user/{user_id}
*/
router.put('/', function(req, res) {
  // check if token is valid

  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
	//res.send('PUT /user!!!!!!!!!');
});

/* DELETE /user/:{user_id}
*/
router.delete('/', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

module.exports = router;
