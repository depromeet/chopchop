var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

var pool = require('./../db/mysql');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/*	
		GET /restaurant     
		listing all restaurants   		
*/
router.get('/', function(req, res) {
	console.log('GET /restaurant');

  pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}
		
		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);

		var exec = conn.query('SELECT * FROM tbl_restaurant', function(err, result) {
			conn.release();
			console.log('실행 대상 SQL : ' + exec.sql);

			if(err) {
				console.log('SQL 실행 시 오류 발생함. ');
				console.dir(err);
				return;
			}
			console.log(result);
			res.json(result);
		});
	});
});

/*	
		GET /restaurant     
		listing all restaurants   		
*/
router.get('/:res_id', function(req, res) {
	console.log('GET /restaurant/:res_id');

  pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}
		
		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);

		var exec = conn.query('SELECT * FROM tbl_restaurant WHERE res_id=?', req.params.res_id, function(err, result) {
			conn.release();
			console.log('실행 대상 SQL : ' + exec.sql);

			if(err) {
				console.log('SQL 실행 시 오류 발생함. ');
				console.dir(err);
				return;
			}
			console.log(result);
			res.json(result);
		});
	});
});

/*	
		POST /restaurant 
*/
router.post('/', upload.array(), function(req, res) {
	console.log('POST /restaurant');

	pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}

		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);
	
		var data = {
			res_name     : req.body.name, 
			res_img      : req.body.img,
			res_phonenum : req.body.phonenum,
			res_freenote : req.body.freenote,
			res_address  : req.body.address,
			res_xypoint  : req.body.xypoint,
			res_score    : req.body.score
		};

		var exec = conn.query('INSERT INTO tbl_restaurant SET ?', data, function(err, result) {
			conn.release();
			console.log('실행 대상 SQL : ' + exec.sql);

			if(err) {
				console.log('SQL 실행 시 오류 발생함. ');
				console.dir(err);
				return;
			}
			console.log(result);
			res.json(result);
		});
  });
});

/* 
		PUT /restaurant/{res_id}
*/
router.put('/', function(req, res) {
	console.log('PUT /restaurant');

	pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}

		/*
		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);

		var data = [
			{
				user_email   : req.body.email, 
				user_tokenid : '',
				user_name    : req.body.realname, 
				user_nickname: req.body.nickname, 
				user_gender  : req.body.gender, 
				user_age     : req.body.age, 
				user_address : '', 
				user_rank    : '' 
			}, 
			req.body.id
		];
	
		var exec = conn.query('UPDATE tbl_user SET ? WHERE user_id= ?', data, function(err, result) {
			conn.release();
			console.log('실행 대상 SQL : ' + exec.sql);

			if(err) {
				console.log('SQL 실행 시 오류 발생함. ');
				console.dir(err);
				return;
			}
			console.log(result);
			res.json(result);
		});
		*/
	});
});

/* 
		DELETE /restaurant
*/
router.delete('/', function(req, res) {

	pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}

		var data = [req.body.id];

		var exec = conn.query('DELETE FROM tbl_restaurant WHERE res_id = ?', data, function(err, result) {
			conn.release();
			console.log('실행 대상 SQL : ' + exec.sql);

			if(err) {
				console.log('SQL 실행 시 오류 발생함. ');
				console.dir(err);
				return;
			}
			res.send(result);
		});
	});
});

module.exports = router;
