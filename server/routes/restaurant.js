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

/*	
  GET /restaurant     
  listing all restaurants   		
*/
router.get('/', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/*	
	GET /restaurant     
	listing all restaurants   		
*/
router.get('/:res_id', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/*	
	POST /restaurant 
*/
router.post('/', upload.array(), function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/* 
	PUT /restaurant/{res_id}
*/
router.put('/', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/* 
	DELETE /restaurant
*/
router.delete('/', function(req, res) {
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

module.exports = router;
