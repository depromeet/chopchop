
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Restaurant", {
        res_id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement: true, allowNull : false},
        res_name : {type:DataTypes.STRING, allowNull : false},
        res_img : {type : DataTypes.STRING(50)},
        res_phonenum : {type : DataTypes.STRING(20)},
        res_freenote : {type : DataTypes.STRING(100)},
        res_address : {type : DataTypes.STRING(50)},
        review_score : {type : DataTypes.INTEGER}
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
		    tableName: 'review',
		    freezeTableName: true,
		    underscored: true,
		    timestamps: false
		  });    
};