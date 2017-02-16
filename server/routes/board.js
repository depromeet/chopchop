var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();

var models     = require('../models');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/**
 *  GET board listing. 
 *	GET /board        		
 */
router.get('/', function(req, res) {
  res.status(200);
  res.send('GET /board');
  // check if token is valid

  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
});

/**
 *  POST /board
 */
router.post('/', upload.array(), function(req, res) {
  res.status(200);
  res.send('POST /board');
  // check if token is valid
	
  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
});

/**
 *  PUT /board/{board_id}
 */
router.put('/', function(req, res) {
  res.status(200);
  res.send('PUT /board/{board_id}');
  // check if token is valid

  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
	//res.send('PUT /user!!!!!!!!!');
});

/**
 *  DELETE /board/:{board_id}
 */
router.delete('/', function(req, res) {
  res.status(200);
  res.send('DELETE /board/{board_id}');
  // check if token is valid

  // check if parameter(req.body) is valid
	
  // send query to sql server

  // send result to client
});

module.exports = router;
