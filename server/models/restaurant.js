'use strict'

/**
 *  Define a model of restaurant table.  
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Restaurant", {
    res_id       : { type : DataTypes.INTEGER, primaryKey : true, autoIncrement: true, allowNull : false },
    res_name     : { type : DataTypes.STRING, allowNull : false },
    res_img      : { type : DataTypes.STRING(50) },
    res_freenote : { type : DataTypes.STRING(100) },
    res_address  : { type : DataTypes.STRING(50) },
    res_score    : { type : DataTypes.INTEGER },
    res_popular    : { type : DataTypes.INTEGER, allowNull : false }
  },
  {
    classMethods : {},
		tableName: 'restaurant',
		freezeTableName: true,
		underscored: true,
	  timestamps: false
  });    
};
