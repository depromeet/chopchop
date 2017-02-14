'use strict'

// review 모델 정의

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Review_Response", {
        rvr_id : {type : DataTypes.INTEGER,
                  primaryKey : true, autoIncrement: true, allowNull : false},
        rvr_reviewid : {type: DataTypes.INTEGER, allowNull : false},
        rvr_like : {type: DataTypes.INTEGER},
        rvr_bad : {type: DataTypes.INTEGER},
        rvr_report : {type: DataTypes.INTEGER}
    });
    
    	  }, {
		    classMethods: {
		    	//salt 생성
		    	createSalt : function(){
		    		return crypto.randomBytes(32).toString('hex');
		    	},
		    	//비밀번호 해시 생성
		    	createHashPwd : function(pwd,salt){
		    		var key = crypto.pbkdf2Sync(pwd, salt, 100000, 32, 'sha256');
		    		return key.toString('hex');
		    	}
		    },
            classMethods : {},
		    tableName: 'user',
		    freezeTableName: true,
		    underscored: true,
		    timestamps: false
		  });
};