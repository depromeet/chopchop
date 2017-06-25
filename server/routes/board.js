var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();
var models     = require('../models');

// 전체 방 조회
router.get('/', function(req, res) {
  var result = {};
  var data = {};
  result.boards = [];

  if('limit' in req.query) data.limit = Number(req.query.limit);
  else data.limit = 5;

  var qOrder = req.query.order=='true' ? true : false;
  var qDesc = req.query.desc=='true' ? true : false;

  if(qOrder) {
    data.order = [['board_popular']];
    if(qDesc) data.order[0].push('DESC');
  }

  models.Board.findAll(data)
    .then(function(boards) {
      for (var i = 0; i < boards.length; i++) {
        result.boards[i] = boards[i].dataValues;
      }
      res.status(200).json(result);
    }).catch(function(err) {
      // res.status(500).send('Something is broken!');
      res.status(500).send(err.message);
    });
});

// 특정 방 조회
router.get('/:idx', certainBoard);

// 방 팔로우
router.put('/', followBoard);

// 방 팔로우 취소
router.put('/cancel', unfollowBoard);

// 인기 방 조회
// router.get('/popular',popularBoard);

// 팔로우 된 방 조회
router.get('/followed/:idx', specialBoard);



/*function entireBoard(req, res){

 }*/

// 특정 방 조회 get, board_id params로 받음
function certainBoard(req, res) {
  var idx = req.params.idx;
  var result = {
    status: null,
    reason: null,
    board: null
  };
  models.Board.findById(idx)
    .then(function(ret) {
      if (ret == null) {
        result.status = 'F';
        result.reason = 'not found board';
        res.status(400).json(result);
      } else {
        console.log(ret);
        result.status = 'S';
        result.board = ret;
        res.status(200).json(result);
      }
    })
    .catch(function(err) {
      console.log(err);
      result.status = 'F';
      result.reason = err.message;
      res.status(500).json(result);
    });
}

// 방 팔로우 put, bf_userid, bf_boardid body로 받음
function followBoard(req, res) {
  var bfinfo = req.body;
  var board_id = req.body.bf_boardid;
  var result = {
    board_id: null,
    status: null,
    reason: null
  };
  models.Board.sequelize.query('UPDATE board SET board_popular = board_popular + 1 WHERE board_id = ?', {
    replacements: [board_id]
  }).then(function(ret1) {
    models.Board_Follow.create(bfinfo).then(function(ret2) {
      result.board_id = board_id;
      result.status = 'S';
      res.status(200).json(result);
    }, function(err2) {
      result.status = 'F';
      result.reason = 'board_follow update failed';
      res.status(400).json(result);
    })
  }, function(err1) {
    console.log(err1);
    result.status = 'F';
    result.reason = 'Follow failed';
    res.status(400).json(result);
  });
}

// 방 팔로우 취소 put, bf_userid, bf_boardid body로 받음
function unfollowBoard(req, res) {
  var bfinfo = req.body;
  var board_id = req.body.bf_boardid;
  var result = {
    board_id: null,
    status: null,
    reason: null
  };
  models.Board.sequelize.query('UPDATE board SET board_popular = board_popular - 1 WHERE board_id = ?', {
    replacements: [board_id]
  }).then(function(ret1) {
    models.Board_Follow.destroy({
      where: {
        bf_userid: bfinfo.bf_userid,
        bf_boardid: bfinfo.bf_boardid
      }
    }).then(function(ret2) {
      result.board_id = board_id;
      result.status = 'S';
      res.status(200).json(result);
    }, function(err2) {
      result.status = 'F';
      result.reason = 'board_follow update failed';
      res.status(400).json(result);
    })
  }, function(err1) {
    console.log(err1);
    result.status = 'F';
    result.reason = 'Follow failed';
    res.status(400).json(result);
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
function specialBoard(req, res) {
  var result = {
    status: null,
    reason: null,
    board: null
  };
  var board_id = [];
  var user_id = req.params.idx;

  models.Board_Follow.findAll({
    where: {
      bf_userid: user_id
    }
  }).then(function(ret1) {
    for (var i = 0; i < ret1.length; i++) {
      board_id[i] = ret1[i].bf_boardid;
    }
    console.log('board id is');
    console.log(board_id);

    models.Board.findAll({
      where: {
        board_id: board_id
      }
    }).then(function(ret2) {
      if (ret2 == null) {
        result.status = 'F';
        result.reason = 'not found board';
        res.status(400).json(result);
      } else {
        result.status = 'S';
        result.board = ret2;
        res.status(200).json(result);
      }
    }, function(err1) {
      console.log(err1);
      result.status = 'F';
      result.reason = 'Failed check board';
      res.status(400).json(result);
    })
  }, function(err2) {
    console.log(err2);
    result.status = 'F';
    result.reason = 'Failed check board_follow';
    res.status(400).json(result);
  });
}

module.exports = router;
