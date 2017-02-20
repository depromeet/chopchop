var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();
var router     = express.Router();
var models     = require('../models');
var jwt        = require('jsonwebtoken');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

/**
 *  GET /user
 */
router.get('/', function(req, res) {
  // 'SELECT user_name FROM tbl_user'
  result = {};
  result["users"] = [];
  models.User.findAll({
    // add conditional statement here

  }).then(function(users) {
    for (var i=0; i<users.length; i++) {
      result["users"][i] = users[i].dataValues;
    }
    res.status(200);
    res.json(result);
  }).catch(function (err) {
    // handle error;
    if(err) {
      console.log('error! : GET /user');
      res.status(500)
      res.send('Something is broken!');
    }
  });
});

/**
 *  POST /user
 */
router.post('/', function(req, res) {
  // 'INSERT INTO tbl_user SET ?'
  var data = req.body.user;

  models.User.create(data)
  .then(function(user) {
    // you can now access the newly created task via the variable task
    var result = {};
    result["id"] = user.user_id;
    res.status(200);
    res.json(result);
  })
  .catch(function(err) {
    // handle error
    if(err=='') {
    }
    if(err) {
      console.log('error! : POST /user');
      res.status(500);
      res.send('Something is broken');
    }
  });
});

/**
 *  POST /user/login
 */
router.post('/login', function(req, res) {
  var sess = req.session;
  var username = req.body.username;
  var password = req.body.password;

  const secret = req.app.get('jwt-secret');
  models.User.find({
    attributes: ['user_email', 'user_password'],
    where: {
      user_email : username
    }
  }).then(function(user) {
    // username is not found
    if(!user) {
      throw 'username is not fonund';
    }
    // username is found && password is correct
    if(user.user_password == password) {
      // add session
      jwt.sign(
        {
          username: username,
        },
        secret,
        {
          expiresIn: '7d',
          issuer: 'chopchoping.com',
          subject: 'userInfo'
        }, (err, token) => {
          token
        })

      res.status(200);
      // res.send('login success');
      res.json({
        message: 'login success',
        token
      })

    }
    // username is found && password is not correct
    else {
      throw 'password is not correct';
    }
  }).catch(function(err) {
    if(err) {
      res.status(500);
      res.send(err);
      //res.send('Something is broken!')
    }
  });
});

/**
 *  POST /user/logout
 */
router.post('/logout', function(req, res) {
  // delete session
  res.status(200);
  res.send('POST /user/logout');
});

/**
 *  PUT /user/{user_id}
 */
router.put('/', function(req, res) {
  // 'UPDATE tbl_user SET ? WHERE user_id= ?'
  res.status(200);
  res.send('PUT /user/{user_id}');
});

/**
 *  DELETE /user/{user_id}
 */
router.delete('/', function(req, res) {
  // 'DELETE FROM tbl_user WHERE user_id = ?'
  res.status(200);
  res.send('DELETE /user/{user_id}');
});

module.exports = router;
