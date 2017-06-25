var express = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();
var models     = require('../models');

/**
 *  GET /restaurants
 *  listing all restaurants
 */
router.get('/', function(req, res) {
  var data = {};
  data.limit = 10;
  if('limit' in req.query) data.limit = Number(req.query.limit);
  if('offset' in req.query) data.offset = Number(req.query.offset);

  var result = {};
  result.values = [];

  models.Restaurant.findAll(data)
  .then(function(restaurants) {
    for(var i=0; i<restaurants.length; i++) {
      result.values[i] = restaurants[i];
    }
    res.status(200).json(result);
  })
  .catch(function(err) {
    res.status(500).send(err.message);
  });
});

/**
 *	GET /restaurants/:res_id
 */
router.get('/:res_id', function(req, res) {
  var result = {};

  models.Restaurant.find({
    // attributes: ["res_id", "res_name", "res_img", "res_phonenum", "res_address", "res_score"],
    where: {
      res_id : req.params.res_id,
    },
  })
  .then(function(restaurants) {
    if(!restaurants)
      res.status(400).send('not found');
    else
      res.status(200).json(restaurants);
  })
  .catch(function(err) {
    res.status(500).send('Something is broken!');
  });
});

/**
 *	POST /restaurants
 */
router.post('/', function(req, res) {
  var result = {};
  var data = req.body.restaurant;

  models.Restaurant.create(data)
  .then(function(restaurant) {
    result["res_id"] = restaurant.res_id;
    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    res.status(500).send('Something is broken!');
  });
});

/**
 * 	PUT /restaurants/{res_id}
 */
router.put('/', function(req, res) {
  res.status(200);
  res.send('PUT /restaurant');
});

/**
 *	DELETE /restaurants
 */
router.delete('/', function(req, res) {
    res.status(200);
    res.send('DELETE /restaurant');
});
module.exports = router;
