var crypto = require('crypto');

/**
 *  Define a model of user table. 
 */
module.exports = function(sequelize, DataTypes) {
  console.log('models/user.js')
	return sequelize.define("User", {
	  user_id       : { type : DataTypes.INTEGER(15), primaryKey : true, allowNull : false },
	  user_email    : { type : DataTypes.STRING(64), allowNull : false },
	  user_tokenid  : { type : DataTypes.STRING(30), allowNull : false },
    user_name     : { type : DataTypes.STRING(30), allowNull : false },
    user_nickname : { type : DataTypes.STRING(30), allowNull : false },
    user_gender   : { type : DataTypes.INTEGER(30), allowNull : false },
    user_age      : { type : DataTypes.INTEGER(30), allowNull : false },
    user_address  : { type : DataTypes.STRING(30) },
    user_rank     : { type : DataTypes.INTEGER(30) }, 
    user_password : { type : DataTypes.STRING(30) }
	}, {
		classMethods: {
		  //salt 생성
		  createSalt : function() {
		    return crypto.randomBytes(32).toString('hex');
		  },
		  //비밀번호 해시 생성
		  createHashPwd : function(pwd,salt) {
		    var key = crypto.pbkdf2Sync(pwd, salt, 100000, 32, 'sha256');
		    		return key.toString('hex');
		  }
		},
		tableName: 'user',
		freezeTableName: true,
		underscored: true,
		timestamps: false
  });
};

