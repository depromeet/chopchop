/**
 * Created by yujajin on 27/03/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();
var models = require('../models');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// 리뷰 좋아요
router.put('/reviewsLike',   responseReview);

// 리뷰 좋아요 취소
router.put('/reviewsUnlike', deresponseReview);

// 리뷰 좋아요 put, review_like++, rvr_userid, rvr_reviewid body로 받음
function responseReview(req, res){
    var rvrinfo = req.body;
    var review_id = rvrinfo.rvr_reviewid;

    var result = {
        review_id : null,
        status    : null,
        reason    : null
    };

    //body로 받은 rvr_userid, rvr_reviewid 가 review_response 테이블에 있을때 막음

    if      (rvrinfo.rvr_like == 1)     {rvrinfo.rvr_bad = 0; rvrinfo.rvr_report = 0;}
    else if (rvrinfo.rvr_bad == 1)      {rvrinfo.rvr_like = 0; rvrinfo.rvr_report = 0;}
    else if (rvrinfo.rvr_report == 1)   {rvrinfo.rvr_like = 0; rvrinfo.rvr_bad = 0;}

    models.Review_Response.create(rvrinfo).then(function(){
            models.Review.findById(review_id).then(function(review) {
                if      (rvrinfo.rvr_like == 1)     {return review.increment('review_like', {by: 1});}
                else if (rvrinfo.rvr_bad == 1)      {return review.increment('review_bad', {by: 1});}
                else if (rvrinfo.rvr_report == 1)   {return review.increment('review_report', {by: 1});}
            }).then(function(){
                res.status(200);
                result.review_id = review_id;
                result.status = 'S';
                res.json(result);
            }, function(err){
                res.status(400);
                result.status = 'F';
                result.reason = 'response failed';
                res.json(result);
            })
        }, function(err){
            result.status = 'F';
            result.reason = 'Create review_response failed';
            res.json(result);
        }
    )
}

// 리뷰 좋아요 취소 put, review_like --, rvr_userid, rvr_reviewid body로 받음,
function deresponseReview(req, res){
    var rvrinfo = req.body;
    var review_id = rvrinfo.rvr_reviewid;
    var result = {
        review_id : null,
        status : null,
        reason : null
    };
    models.Review_Response.destroy({where : {rvr_userid : rvrinfo.rvr_userid, rvr_reviewid : rvrinfo.rvr_reviewid}}).then(function(){
            models.Review.findById(review_id).then(function(review) {
                if (rvrinfo.rvr_like == 1){return review.decrement('review_like', {by: 1});}
                else if (rvrinfo.rvr_bad == 1){return review.decrement('review_bad', {by: 1});}
                else if (rvrinfo.rvr_report == 1){return review.decrement('review_report', {by: 1});}
            }).then(function(){
                res.status(200);
                result.review_id = review_id;
                result.status = 'S';
                res.json(result);
            }, function(err){
                res.status(400);
                result.status = 'F';
                result.reason = 'response failed';
                res.json(result);
            })
        }, function(err){
            result.status = 'F';
            result.reason = 'delete review_response failed';
            res.json(result);
        }
    )
}

module.exports = router;