const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const photoSchema = new Schema({
    albumName: { type: String, required: true },
    photos: { type: Array },
    userName: {type: String, required: true}
   
});

const Photo = mongoose.model("photo", photoSchema);

module.exports = Photo