var express = require('express');
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
 *  GET /restaurants
 *  listing all restaurants
 */
router.get('/', function(req, res) {
  var qLimit = Number(req.query.limit);
  if(!qLimit) {
    qLimit = 1;
  }

  var result = {};
  result["restaurants"] = [];

  models.Restaurant.findAll({
    limit : qLimit,
  })
  .then(function(restaurants) {
    for(var i=0; i<restaurants.length; i++) {
      result["restaurants"][i] = restaurants[i].dataValues;
    }
    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    res.status(500);
    res.send('Something is broken!');
  });
});

/**
 *	GET /restaurants/:res_id
 */
router.get('/:res_id', function(req, res) {
  var result = {};
  var pResID = req.params.res_id;

  models.Restaurant.find({
    attributes: ["res_id", "res_name", "res_img", "res_phonenum", "res_address", "res_score"],
    where: {
      res_id : pResID
    }
  })
  .then(function(restaurants) {
    result["res_id"] = restaurnats.res_id;
    result["res_name"] = restaurnats.res_name;
    result["res_img"] = restaurnats.res_img;
    result["res_phonenum"] = restaurnats.res_phonenum;
    result["res_address"] = restaurnats.res_address;
    result["res_score"] = restaurnats.res_score;

    res.status(200).json(result);
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
