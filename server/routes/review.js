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
 *  GET /reviews        		
 *  reviews listing. 
 */
router.get('/', function(req, res) {
  var result = {};
  result["reviews"] = [];

  models.Review.findAll()
  .then(function(reviews) {
    for(var i=0; i<reviews.length; i++) {
      result["reviews"][i] = reviews[i].dataValues;
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
 *  GET /reviews/:{review_id}
 */
router.get('/:review_id', function(req, res) {
  var result = {};
  var pReviewID = req.params.review_id;

  models.Review.find({
    attributes: ["review_id", "review_uid", "review_username", "review_nickname", "review_resid", "review_resname", "review_resadd", "review_score", "review_story", "review_img", "review_like", "review_bad", "review_report", "review_comment"],
    where: {
      review_id : pReviewID
    }
  })
  .then(function(reviews) {
    /*
    result["review_id"] = reviews.review_id;
    result["review_uid"] = reviews.review_uid;
    result["review_username"] = reviews.review_username;
    result["review_resid"] = reviews.review_resid;
    result["review_resname"] = reviews.review_resname;
    result["review_score"] = reviews.review_score;
    result["review_story"] = reviews.review_story;
    result["review_img"] = reviews.review_img;
    result["review_like"] = reviews.revuew_like;
    */
    res.status(200);
    res.json(reviews);
  })
  .catch(function(err) {
    res.status(500).send('Something is broken!');
  });
});

/**
 *  POST /reviews
 */
router.post('/', function(req, res) {
  var result = {};
  var data = req.body.review;

  models.Review.create(data)
  .then(function(reviews) {
    result["review_id"] = reviews.review_id;

    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    res.status(500);
    res.send('Something is broken!');
  });
});

/**
 *  PUT /reviews/{review_id}
 */
router.put('/', function(req, res) {
  
});

/** 
 * DELETE /reviews/{review_id} 
 */
router.delete('/', function(req, res) {

});

module.exports = router;

