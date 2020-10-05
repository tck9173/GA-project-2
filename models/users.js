'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Crops, { foreignKey: "userId"});
      Users.belongsToMany(models.Users, {
        through:"Friend",
        as: 'Friends',
        foreignKey: "userId1",
        otherKey: "userId2"
      })
    }
  };
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};