
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Board", {
        board_id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement: true, allowNull : false},
        board_name : {type:DataTypes.STRING, allowNull : false},
        board_img : {type : DataTypes.STRING(50)},
        board_catagory : {type : DataTypes.INTEGER},
        board_popular : {type : DataTypes.INTEGER},
        board_uid : {type : DataTypes.INTEGER},
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
		    tableName: 'board',
		    freezeTableName: true,
		    underscored: true,
		    timestamps: false
		  });    
};