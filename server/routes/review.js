var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

var pool = require('./../db/mysql');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/*	GET review listing. 
		GET /review        		
*/
router.get('/', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
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
