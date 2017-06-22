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
  var result = {};
  result["restaurants"] = [];

  models.Restaurant.findAll()
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
// router.get('/:res_id', function(req, res) {
//   var result = {};
//   var pResID = req.params.res_id;
//
//   models.Restaurant.find({
//     attributes: ["res_id", "res_name", "res_img", "res_phonenum", "res_address", "res_score"],
//     where: {
//       res_id : pResID
//     }
//   })
//   .then(function(restaurants) {
//     result["res_id"] = restaurnats.res_id;
//     result["res_name"] = restaurnats.res_name;
//     result["res_img"] = restaurnats.res_img;
//     result["res_phonenum"] = restaurnats.res_phonenum;
//     result["res_address"] = restaurnats.res_address;
//     result["res_score"] = restaurnats.res_score;
//
//     res.status(200).json(result);
//   })
//   .catch(function(err) {
//     res.status(500).send('Something is broken!');
//   });
// });

router.get('/:res_id', function(req, res) {
    var result = {};
    var pResID = req.params.res_id;

    models.Restaurant.findById(pResID)
        .then(function(restaurants) {
          if(restaurants == null){
            res.status(400).send('There is no restaurants');
          } else {
              result["res_id"] = restaurants.res_id;
              result["res_name"] = restaurants.res_name;
              result["res_img"] = restaurants.res_img;
              result["res_phonenum"] = restaurants.res_phonenum;
              result["res_address"] = restaurants.res_address;
              result["res_score"] = restaurants.res_score;
              res.status(200).json(result);
          }
        })
        .catch(function(err) {
            res.status(500).send('Something is broken!');
        });
});

//별점 조회
router.get('/score/:res_id',function(req, res) {
    var result = {},
        pResID = req.params.res_id;

    models.Restaurant.findById(pResID).then(function(restaurants){
        if(restaurants == null){
            res.status(200).send('There is no restaurants');
        }
        else{
            result.status = 'S';
            result.score = restaurants.res_score;
            res.status(200).json(result);
        }
    }, function(err){
        result.status = 'F';
        result.reason = err;
        res.status(400).json(result);
    })
})

/**
 *	POST /restaurants
 */
router.post('/', function(req, res) {
  var result = {};
  var data = req.body;

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
 * 	PUT /restaurants/:res_id
 */
router.put('/:res_id', function(req, res) {
    var result  = {};
    var pResID  = req.params.res_id;
    var resInfo = req.body;

    models.Restaurant.update(resInfo,
        {where : {res_id : pResID}})
        .then(function(){
          result["res_id"] = pResID;
          res.status(200);
          res.json(result);
        })
        .catch(function(err){
          res.status(500).send('Something is broken!');
        });
});

/** 
 *	DELETE /restaurants/:res_id
 */
router.delete('/:res_id', function(req, res) {
  var result = {};
  var pResId = req.params.res_id;

  models.Restaurant.destroy({where: {res_id : pResId}})
      .then(function(restaurant){
        if(restaurant == null){
          res.status(400).send('There is no restaurant');
        }else{
          result["res_id"] = pResId;
          res.status(200);
          res.json(result);
        }
      }).catch(function(err){
        res.status(500).send('response error');
  })

});
module.exports = router;

