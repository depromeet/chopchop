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

/*	GET user listing. 
		GET /user        		
*/
router.get('/', function(req, res) {
  // res.send('respond with a resoruce');

  pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  console.log('pool.getConnection() 오류 발생함. ');
		  console.dir(err);
		  return;
		}
		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);

		var exec = conn.query('SELECT user_name FROM tbl_user', function(err, result) {
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

/*	POST /user 
*/
router.post('/', upload.array(), function(req, res) {

	pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  return;
		}

		console.log('데이터베이스 연결 스레드 아이디 : ' + conn.threadId);
	
		var data = {
			user_email   : req.body.email, 
			user_tokenid : '',
			user_name    : req.body.realname, 
			user_nickname: req.body.nickname, 
			user_gender  : req.body.gender, 
			user_age     : req.body.age, 
			user_address : '', 
			user_rank    : '' 
		};

		var exec = conn.query('INSERT INTO tbl_user SET ?', data, function(err, result) {
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

/* PUT /user/{user_id}
*/
router.put('/', function(req, res) {
	//res.send('PUT /user!!!!!!!!!');
	console.log('PUT /user');

	pool.getConnection(function(err, conn) {
		if(err) {
		  conn.release();
		  return;
		}
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

	});

});

/* DELETE /user/:{user_id}
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

		var exec = conn.query('DELETE FROM tbl_user WHERE user_id = ?', data, function(err, result) {
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