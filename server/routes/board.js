var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();

var models     = require('../models');

/*
 // 전체 방 조회
 router.get('/boards',entireBoard);
 */

// 전체 방 조회
router.get('/boards', function(req, res) {
    var result = {};
    result["boards"] = [];

    models.Board.findAll()
        .then(function(boards) {
            for(var i=0; i<boards.length; i++) {
                result["boards"][i] = boards[i].dataValues;
            }
            res.status(200);
            res.json(result);
        })
        .catch(function(err) {
            res.status(500);
            res.send('Something is broken!');
        });
});

// 특정 방 조회
router.get('/boards/:idx',certainBoard);

// 방 팔로우
router.put('/boards',followBoard);

// 방 팔로우 취소
router.put('/boardsCancel', unfollowBoard)

// 인기 방 조회
router.get('/boardsPopular',popularBoard);

// 팔로우 된 방 조회
router.get('/boardsFollowed/:idx',specialBoard);

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

/*function entireBoard(req, res){

 }*/

// 특정 방 조회 get, board_id params로 받음
function certainBoard(req, res){
    var idx = req.params.idx;
    var result = {
        status : null,
        reason : null,
        board  : null
    };
    models.Board.findById(idx).then(function(ret) {
        if(ret == null){
            res.status(400);
            result.status = 'F';
            result.reason = 'not find board';
            res.json(result);
        } else{
            console.log(ret);
            result.status = 'S';
            result.board = ret;
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

// 방 팔로우 put, bf_userid, bf_boardid body로 받음
function followBoard(req, res){
    var bfinfo = req.body;
    var board_id = req.body.bf_boardid;
    var result = {
        board_id : null,
        status   : null,
        reason   : null
    };
    models.Board.sequelize.query('update board set board_popular = board_popular + 1 where board_id = ?',{replacements : [board_id]}).then(function(ret1){
        models.Board_Follow.create(bfinfo).then(function(ret2){
            res.status(200);
            result.board_id = board_id;
            result.status = 'S';
            res.json(result);
        }, function(err2){
            res.status(400);
            result.status = 'F';
            result.reason = 'board_follow update failed';
            res.json(result);
        })
    }, function(err1){
        console.log(err1);
        result.status = 'F';
        result.reason = 'Follow failed';
        res.json(result);
    })
}

// 방 팔로우 취소 put, bf_userid, bf_boardid body로 받음
function unfollowBoard(req, res){
    var bfinfo = req.body;
    var board_id = req.body.bf_boardid;
    var result = {
        board_id : null,
        status   : null,
        reason   : null
    };
    models.Board.sequelize.query('update board set board_popular = board_popular - 1 where board_id = ?',{replacements : [board_id]}).then(function(ret1){
        models.Board_Follow.destroy({where : {bf_userid : bfinfo.bf_userid, bf_boardid : bfinfo.bf_boardid}}).then(function(ret2){
            res.status(200);
            result.board_id = board_id;
            result.status = 'S';
            res.json(result);
        }, function(err2){
            res.status(400);
            result.status = 'F';
            result.reason = 'board_follow update failed';
            res.json(result);
        })
    }, function(err1){
        console.log(err1);
        result.status = 'F';
        result.reason = 'Follow failed';
        res.json(result);
    })
}

// 인기 방 조회 get, 3개
function popularBoard(req, res){
    var result = {
        reason : null,
        board : null
    };

    console.log('check before query');
    models.Board.sequelize.query('select * from board order by board_popular desc limit 3;').then(function(ret){
        if(ret == null) {
            res.status(400);
            result.status = 'F';
            result.reason = 'not find board';
            res.json(result);
        } else {
            console.log(ret[0]);
            result.status = 'S';
            result.board = ret[0];
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

/*
 // 팔로우 된 방 조회 params로 userid 받음
 function specialBoard(req, res){
 var result = {
 reason : null,
 board  : null
 };
 var user_id = req.params.idx;
 models.Board_Follow.sequelize.query('select * from board_follow where bf_userid = ?', {replacements : [user_id]}).then(function(ret1){

 for(var i=0; i<ret1.length; i++){
 ret1[i].bf_boardid
 }
 var board_id = bf.bf_boardid;
 console.log(board_id);
 models.Board.findById(board_id).then(function(ret2){
 if(ret2 == null){
 res.status(200);
 result.status = 'F';
 result.reason = 'not find board';
 res.json(result);
 }
 else{
 result.status = 'S';
 result.board = ret2;
 res.json(result);
 }
 }, function(err1) {
 res.status(400);
 result.status = 'F';
 result.reason = 'Add follow failed'
 })
 })
 }
 */

// 팔로우 된 방 조회 params로 userid 받음
function specialBoard(req, res){
    var result = {
        status : null,
        reason : null,
        board  : null
    };
    var board_id = [];
    var user_id = req.params.idx;
    models.Board_Follow.findAll({where : {bf_userid : user_id}}).then(function(ret1){
        for(var i = 0; i < ret1.length; i++){
            board_id[i] = ret1[i].bf_boardid;
        }
        console.log("board id is");
        console.log(board_id);

        models.Board.findAll({where : {board_id: board_id} }).then(function(ret2){
            if(ret2 == null) {
                res.status(400);
                result.status = 'F';
                result.reason = 'not find board';
                res.json(result);
            } else {
                result.status = 'S';
                result.board  = ret2;
                res.json(result);
            }
        }, function(err1) {
            console.log(err1);
            res.status(400);
            result.status = 'F';
            result.reason = "Failed check board";
            res.json(result);
        })
    }, function(err2){
        console.log(err2);
        res.status(400);
        result.status = 'F';
        result.reason = "Failed check board_follow";
        res.json(result);
    })
}

module.exports = router;
