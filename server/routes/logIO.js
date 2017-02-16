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
 *  POST /login
 */
router.post('/', function(req, res) {
  
});

/**
 *  GET /logout
 */
router.get('/', function(req, res) {
  
});

module.exports = router;

