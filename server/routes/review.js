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

// 리뷰 작성
router.post('/reviews', regisReview);

// 좋아요 한 리뷰 조회
router.get('/reviewPerfer/:idx', perferReview);

// 한 식당에 대한 리뷰 조회
router.get('/reviewRes/:idx', resReview)

// 인기 리뷰 조회(전체조회)
router.get('/reviews', popularReview);

// 방 안에서의 리뷰 조회 params로 방 번호를 받음
router.get('/reviewinBoard/:idx', function(req, res) {
    var result = {};
    result["reviews"] = [];

    console.log(result);
    var idx = req.params.idx;


    models.Review.findAll({where: {review_boardid : idx}})
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

// 특정 리뷰 조회
router.get('/reviews/:idx', certainReviewinfo);

// 리뷰 삭제
router.delete('/reviews/:idx', deleteReview);

// 리뷰 작성
router.post('/reviews', regisReview);

// 리뷰 수정
router.put('/reviews/:idx', modifyReview);

// 리뷰 작성 post, body
function regisReview(req, res){
    var reviewinfo = req.body,
        result = {
        review_id : null,
        status : null,
        reason : null
        },

        res_score = null,
        res_name = null;

    models.Review.create(reviewinfo).then(function(ret){
        res_score = reviewinfo.review_score;
        res_name  = reviewinfo.review_resname;
        console.log(res_score);
        console.log(res_name);
        models.Restaurant.update({res_score: res_score},{where:{res_name : res_name}}).then(function(){
            result.review_id = ret.review_id;
            result.status = 'S';
            res.status(200).json(result);
        }, function(err){
            result.status = 'F';
            result.reason = err;
            res.status(400).json(result);
        })
    })
}

// 좋아요 한 리뷰 조회
function perferReview(req, res){
    var result = {
        review : null,
        status : null,
        reason : null
        },

        user_id = req.params.idx,
        review_id = [];

    models.Review_Response.findAll({where: {rvr_userid : user_id}}).then(function(response){
        for(var i =0; i<response.length; i++){
            review_id[i] = response[i].dataValues.rvr_reviewid;
        }
        models.Review.findAll({where: {review_id : review_id}}).then(function(review){
            if(review == null){
                result.status = 'F';
                result.reason = 'not find review';
                res.status(200).json(result);
            }
            else {
                result.review = review;
                result.status = 'S';
                res.status(200).json(result);
            }
        }, function(errOfReviewFind){
            result.status = 'F';
            result.reason = errOfReviewFind;
            res.status(400).json(result);
        })
    }, function(errOfResponse){
        result.status = 'F';
        result.reason = errOfResponse;
        res.status(400).json(result);
    })
}

// 한 식당에 대한 리뷰 조회
function resReview(req, res){
    var result = {
        review : null,
        status : null,
        reason : null
        },

        resId = req.params.idx;

    models.Review.findAll({where: {review_resid: resId}}).then(function(review){
        if(review == null){
            result.status = 'F';
            result.reason = 'not find review';
            res.status(200).json(result);
        }
        else{
            result.review = review;
            result.status = 'S';
            res.status(200).json(result);
        }
    },function(err){
        result.status = 'F';
        result.reason = err;
        res.status(400).json(result);
    })

}


//인기 리뷰 조회 get
function popularReview(req, res){
    var result = {
        reason : null,
        review : null
    };

    models.Review.sequelize.query('select * from review order by review_like desc').then(function(ret){
        if(ret == null) {
            res.status(400);
            result.status = 'F';
            result.reason = 'not find board';
            res.json(result);
        } else {
            console.log(ret[0]);
            result.status = 'S';
            result.review = ret[0];
            res.json(result);
        }
    }, function(err) {
        console.log(err);
        res.status(400);
        result.status = 'F';
        result.reason = err.message;
        res.json(result);
    })
}

// 특정 리뷰 조회 , get, params로 review_id 받음
function certainReviewinfo(req, res){
    var idx = req.params.idx;
    var result = {
        status : null,
        reason : null,
        review : null
    };
    models.Review.findById(idx).then(function(ret) {
        if(ret == null){
            res.status(400);
            result.status = 'F';
            result.reason = 'not find review';
            res.json(result);
        } else{
            console.log(ret);
            result.status = 'S';
            result.review = ret;
            res.json(result);
        }
    }, function(err) {
        console.log(err);
        res.status(400);
        result.status = 'F';
        result.reason = err.message;
        res.json(result);
    })
}

// 리뷰 삭제 delete, params로 user_id
function deleteReview(req, res) {
    var idx = req.params.idx;
    var result = {
        status : null,
        reason : null,
        review : null
    };

    models.Review.destroy({where: {review_id : idx}}).then(function(ret) {
        if(ret == 1) {
            console.log(ret);
            result.status = 'S';
            result.review = ret;
            res.json(result);
        }
        else {
            res.status(400);
            result.status = 'F';
            result.reason = 'No review to delete';
            result.status = 'S';
            res.json(result);
        }
    }, function(err) {
        console.log(err);
        result.status = 'F';
        result.reason = err.message;
        res.json(result);
    })
}

// 리뷰 수정 put params로 review_id 받음, body로 수정 내용 받음
function modifyReview(req, res){
    var review_id = req.params.idx;
    var reviewinfo = req.body;
    var result = {
        review_id : null,
        status    : null,
        reason    : null
    };

    models.Review.update(reviewinfo, {where : {review_id : review_id}}).then(function () {
        result.status = 'S';
        result.review_id = review_id;
        res.json(result);
    }, function(err) {
        result.status = 'F';
        result.reason = err.message;
        res.json(result);
    })
}

module.exports = router;
