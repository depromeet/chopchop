var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();
var model      = require('../models');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/**	
 *  GET /user        		
 */
router.get('/', function(req, res) {
  // 'SELECT user_name FROM tbl_user'
  res.send('GET /user');
});

/**
 *  POST /user 
 */
router.post('/', upload.array(), function(req, res) {
  // 'INSERT INTO tbl_user SET ?'
  res.send('POST /user');
});

/**
 *  POST /user/login
 */
router.post('/login', function(req, res) {
  res.send('POST /user/login');
});

/**
 *  POST /user/logout
 */
router.post('/logout', function(req, res) {
  res.send('POST /user/logout');
});

/**
 *  PUT /user/{user_id}
 */
router.put('/', function(req, res) {
  // 'UPDATE tbl_user SET ? WHERE user_id= ?'
  res.send('PUT /user/{user_id}');
});

/**
 *  DELETE /user/{user_id}
 */
router.delete('/', function(req, res) {
  // 'DELETE FROM tbl_user WHERE user_id = ?'
  res.send('DELETE /user/{user_id}');
});

module.exports = router;

