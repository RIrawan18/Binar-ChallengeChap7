const { room } = require('../models');
const sequelize = require('sequelize');

module.exports = {
  index: (req, res) => {
    room.findAll().then((room) => {
      res.render('room/viewRoom', {
        room,
      });
    });
  },
  destruct: (req, res) => {
    room.destroy({ where: { id: req.params.id } }).then(() => {
      room.destroy({ where: { id: req.params.id } });
      res.redirect('/room');
    });
  },

  create: (req, res) => {
    room
      .create({
        nama_room: req.body.nama_room,
        id_player_1: req.loggedInUser.id,
      })
      .then((room) => {
        res.json(room);
      });
  },

  fight: (req, res) => {
    const { id_player_2, move_player_1, move_player_2 } = req.body;
    const userId = req.loggedInUser.id;

    room
      .findOne({ where: { id: req.params.id } })
      .then((resultFindOne) => {
        let resultFindOneUser1 = resultFindOne.dataValues.move_player_1;
        let resultFindOneUser2 = resultFindOne.dataValues.move_player_2;

        if (userId % 2 === 0) {
          if (resultFindOneUser2 === null || resultFindOneUser2.length < 3) {
            room
              .update(
                {
                  id_player_2: userId,
                  move_player_2: sequelize.fn(
                    'array_append',
                    sequelize.col('move_player_2'),
                    move_player_2
                  ),
                },
                { where: { id: req.params.id }, returning: true }
              )
              .then((updateRoom) => {
                console.log('berhasil');
                res.status(200).json({ updateRoom });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } else if (userId % 2 !== 0) {
          if (resultFindOneUser1 === null || resultFindOneUser1.length < 3) {
            room
              .update(
                {
                  move_player_1: sequelize.fn(
                    'array_append',
                    sequelize.col('move_player_1'),
                    move_player_1
                  ),
                },
                { where: { id: req.params.id }, returning: true }
              )
              .then((result) => {
                res.status(200).json({ result });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
