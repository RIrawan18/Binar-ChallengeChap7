'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    static associate(models) {
      user_game_history.belongsTo(models.user_game, {as: 'user_game_history', foreignKey: 'user_id', sourceKey: 'id' });
    }
  };
  user_game_history.init({
    user_id: DataTypes.INTEGER,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};