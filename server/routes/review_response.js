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


//리뷰 리스폰스 put, review_like++, rvr_userid, rvr_reviewid body로 받음

function responseReview(req, res) {
    var rvrinfo = req.body,

        result = {
        review_id   : null,
        status      : null,
        reason      : null
        },

        preventDuplication = {
            rvr_userid      : rvrinfo.rvr_userid,
            rvr_reviewid    : rvrinfo.rvr_reviewid
        },

        value = {
        review_like     : 0,
        review_bad      : 0,
        review_report   : 0
        },

        reviewIdMatched = {
        review_id : rvrinfo.rvr_reviewid
        };

    models.Review_Response.findAll({where:preventDuplication}).then(function (response) {
        // 리스폰스 중복방지
        if(response.length > 0) {
            result.status = 'F';
            result.reason = 'Duplicate responses';
            res.status(200).json(result);
        }
        else{
            models.Review_Response.create(rvrinfo)
            models.Review.findAll({where: reviewIdMatched}).then(function(review){
                if      (rvrinfo.rvr_like == 1)     {value.review_like   = review[0].dataValues.review_like + 1}
                else if (rvrinfo.rvr_bad == 1)      {value.review_bad    = review[0].dataValues.review_bad + 1}
                else if (rvrinfo.rvr_report == 1)   {value.review_report = review[0].dataValues.review_report + 1}

                models.Review.update(value, {where: reviewIdMatched}).then(function () {
                    result.review_id = rvr_rid;
                    result.status = 'S';
                    res.status(200).json(result);
                }, function (err) {
                    result.status = 'F';
                    result.reason = err;
                    res.status(400).json(result);
                })
            })
        }
    })
}


// // 리뷰 좋아요 취소 put, review_like --, rvr_userid, rvr_reviewid body로 받음,
// function deresponseReview(req, res){
//     var rvrinfo = req.body;
//     var review_id = rvrinfo.rvr_reviewid;
//     var result = {
//         review_id : null,
//         status : null,
//         reason : null
//     };
//     models.Review_Response.destroy({where : {rvr_userid : rvrinfo.rvr_userid, rvr_reviewid : rvrinfo.rvr_reviewid}}).then(function(){
//             models.Review.findById(review_id).then(function(review) {
//                 if (rvrinfo.rvr_like == 1){return review.decrement('review_like', {by: 1});}
//                 else if (rvrinfo.rvr_bad == 1){return review.decrement('review_bad', {by: 1});}
//                 else if (rvrinfo.rvr_report == 1){return review.decrement('review_report', {by: 1});}
//             }).then(function(){
//                 res.status(200);
//                 result.review_id = review_id;
//                 result.status = 'S';
//                 res.json(result);
//             }, function(err){
//                 res.status(400);
//                 result.status = 'F';
//                 result.reason = 'response failed';
//                 res.json(result);
//             })
//         }, function(err){
//             result.status = 'F';
//             result.reason = 'delete review_response failed';
//             res.json(result);
//         }
//     )
// }

// 리뷰 좋아요 취소 put, review_like --, rvr_userid, rvr_reviewid body로 받음,
function deresponseReview(req, res) {
    var rvrinfo = req.body,

        result = {
            review_id   : null,
            status      : null,
            reason      : null
        },

        preventDuplication = {
            rvr_userid      : rvrinfo.rvr_userid,
            rvr_reviewid    : rvrinfo.rvr_reviewid
        },

        value = {
            review_like     : 0,
            review_bad      : 0,
            review_report   : 0
        },

        reviewIdMatched = {
            review_id : rvrinfo.rvr_reviewid
        };

    models.Review_Response.findAll({where:preventDuplication}).then(function (response) {
        // 리스폰스 중복방지
        if(response.length == 0) {
            result.status = 'F';
            result.reason = 'Duplicate responses';
            res.status(200).json(result);
        }
        else {
            models.Review_Response.destroy({where: {rvr_reviewid: rvrinfo.rvr_reviewid}})
            models.Review.findAll({where: reviewIdMatched}).then(function (review) {
                if      (rvrinfo.rvr_like == 1)     {value.review_like      = review[0].dataValues.review_like - 1}
                else if (rvrinfo.rvr_bad == 1)      {value.review_bad       = review[0].dataValues.review_bad - 1}
                else if (rvrinfo.rvr_report == 1)   {value.review_report    = review[0].dataValues.review_report - 1}

                models.Review.update(value, {where: reviewIdMatched}).then(function () {
                    result.review_id = rvrinfo.rvr_reviewid;
                    result.status = 'S';
                    res.status(200).json(result);
                }, function (err) {
                    result.status = 'F';
                    result.reason = err;
                    res.status(400).json(result);
                })
            })
        }
    })
}



module.exports = router;