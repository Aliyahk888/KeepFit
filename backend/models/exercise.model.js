const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  height: { type: Number, required: true },
  weight: {type: Number, required: true},
  calorie_intake: {type: Number, required:true},
  exercise_type: { type: String, required: true },
  calorie_loss: {type: Number, required: true},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;