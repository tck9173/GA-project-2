'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crops.belongsTo(models.Users, {foreignKey: "userId"});
    }
  };
  Crops.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    quality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Crops',
  });
  return Crops;
};