const mongoose = require("mongoose");

const TrainingSchema = new mongoose.Schema({
  _id:{
    type: Number,
    required: true,
    unique: true
  },
  bridgeName: {
    type: String,
    required: true,
    maxlength: [50, "buziköcsög"],
  },
  description: {
    type: String,
    maxlength: [3000, "asd adj cigit"],
  },
  isPublicRoad:{
    type: Boolean,
    default: true
  },
  flowKm: {
    type: Number,
  },
  location:{
    type: Number,
    ref: "Locations"
  },
  deliveryDate: {
    type: Date,
    max: [Date.now, "Nem lehet nagyobb a mai dátumnál"],
  },
  pictureUrl: {
    type: String,
    default: "no-photo.jpg"
  },  
});

module.exports = mongoose.model("Training", TrainingSchema, "training");
