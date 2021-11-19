// Sets up models to be used in the database. Set up using mongoose to connect to mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameschema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
    required: "date needed"
  },
  round: [
    {
      number: {
        type: Number,
        required: true
      },

      battletactic: {
        type: String,
      },

      duration: {
        type: Number,
      },

      heroicaction: {
        type: String,
      },

      victorypoints: {
        type: Number,
        required: true
      },

      monsterslain: {
        type: Boolean,
      },
    }
  ]

});

const Game = mongoose.model("Game", gameschema);

module.exports = Game;