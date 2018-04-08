'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warranty = sequelize.define('Warranty', {
    name: DataTypes.STRING,
    ocr_text: DataTypes.STRING
  }, {});
  Warranty.associate = function(models) {
    // associations can be defined here
  };
  return Warranty;
};