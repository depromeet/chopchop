var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();

//var pool       = require('./../db/mysql');
var model      = require('../models');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/**
 *  GET /restaurant     
 *  listing all restaurants   		
 */
router.get('/', function(req, res) {
  res.status(200);
  res.send('GET /restaurant');  
});

/**
 *	GET /restaurant/:res_id
 */
router.get('/:res_id', function(req, res) {
  res.status(200);
  res.send('GET /restaurant/:res_id');  
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/**
 *	POST /restaurant 
 */
router.post('/', upload.array(), function(req, res) {
  res.status(200);
  res.send('POST /restaurant');  
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/**
 * 	PUT /restaurant/{res_id}
 */
router.put('/', function(req, res) {
  res.status(200);
  res.send('PUT /restaurant');  
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

/** 
 *	DELETE /restaurant
 */
router.delete('/', function(req, res) {
  res.status(200);
  res.send('DELETE /restaurant');  
	// check if token is valid
	
	// check if parameter(req.body) is valid
	
	// send query to sql server

	// send result to client
});

module.exports = router;

