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
 *	GET /boards
 *  return list of boards
 */
router.get('/', function(req, res) {
  var result={};
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
    res.status(500).send('Something is broken!');
  });
});

/**
 *  GET /boards/{board_id}
 */
router.get('/:board_id', function(req, res) {
  var pBoardID = req.params.board_id;
  var result = {};

  models.Board.find({
    attributes: ["board_id", "board_name"],
    where: {
      board_id: pBoardID
    }
  })
  .then(function(boards) {
    console.log(boards);
    console.log(boards[0]);
    result["board_id"] = boards.board_id;
    result["board_name"] = boards.board_name; 

    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    res.status(500).send('Something is broken!');
  });
});

/**
 *  POST /boards
 *  create 1 board.
 */
router.post('/', function(req, res) {
  var board = req.body.board;

  var result = {};

  models.Board.create(board)
  .then(function(boards) {
    result["id"] = boards.board_id;
    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    res.status(500).send('Something is broken!');
  });
});

/**
 *  PUT /boards/{board_id}
 */
router.put('/', function(req, res) {
  res.status(200);
  res.send('PUT /boards/{board_id}');
});

/**
 *  DELETE /board/:{board_id}
 */
router.delete('/', function(req, res) {
  res.status(200);
  res.send('DELETE /board/{board_id}');
});

module.exports = router;
