var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

var models = require('../models');


// 댓글 작성
router.post('/comments',regisComment);

// 댓글 조회
router.get('/comments/:idx',function(req, res){
    var result = {};
    result["review_comment"] = [];
    var review_id = req.params.idx;

    models.Review_Comment.findAll({where : {rc_reviewid : review_id}}).then(function(ret){
        for(var i =0; i<ret.length; i++){
            result["review_comment"][i] = ret[i].dataValues;
        }
        res.status(200);
        res.json(result);
    })
        .catch(function(err){
            res.status(500);
            res.send('Someting is broken!');
        });
});

/*
 // 댓글 수정
 router.put('/comments/:idx',modifyComment);
 */

// 댓글 삭제
router.delete('/comments/:idx', deleteComment);

// 댓글 작성, body로 rc_reviewid, rc_userid 받음
function regisComment(req, res){
    var commentinfo = req.body;
    var result = {
        rc_id  : null,
        status : null,
        reason : null
    };
    models.Review_Comment.create(commentinfo).then(function(ret){
        result.rc_id = ret.rc_id;
        result.status = 'S';
        res.json(result);
    }, function(err){
        result.status = 'F';
        result.reason = 'create failed';
        res.json(result);
    })
}

/*
 // 댓글 수정,
 function modifyComment(req, res){

 }
 */

// 댓글 삭제, params로 rc_id 받음
function deleteComment(req, res){
    var rc_id = req.params.idx;
    var result = {
        status : null,
        reason : null,
    };
    models.Review_Comment.destroy({where: {rc_id : rc_id}}).then(function(ret) {
        if(ret == 1) {
            result.status = 'S';
            res.json(result);
        }
        else {
            res.status(400);
            result.status = 'F';
            result.reason = 'No review to delete';
            res.json(result);
        }
    }, function(err) {
        console.log(err);
        result.status = 'F';
        result.reason = err.message;
        res.json(result);
    })
}

module.exports = router;