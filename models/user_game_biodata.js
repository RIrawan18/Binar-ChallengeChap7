'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    static associate(models) {
      user_game_biodata.belongsTo(models.user_game, {as: 'user_game', foreignKey: 'user_id', sourceKey: 'id' });
    }
  };
  user_game_biodata.init({
    user_id: DataTypes.INTEGER,
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_biodata',
  });
  return user_game_biodata;
};