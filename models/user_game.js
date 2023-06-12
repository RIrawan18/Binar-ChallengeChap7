'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    static associate(models) {
      user_game.hasOne(models.user_game_biodata, {
        as: 'user_game_biodata',
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      user_game.hasMany(models.user_game_history, {
        as: 'user_game_history',
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
    }
  }
  user_game.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6],
            msg: 'password at less 6 characters',
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user_game',
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return user_game;
};
