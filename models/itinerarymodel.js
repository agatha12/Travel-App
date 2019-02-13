const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const itinerarySchema = new Schema({
    passengername: { type: String, required: true },
    flightnumber: { type: String, required: true },
    airport: { type: String, required: true },
    destination: { type: String, required: true },
    firstDepDate: { type: Date, default: Date.now, required: true },
    firstDepTime: { type: String, required: true },
    firstarrivalDate: { type: Date, default: Date.now, required: true },
    firstarrivalTime: { type: String, required: true },
    hotelName: { type: String, required: true },
    checkinTime: { type: String, required: true },
    checkoutTime: { type: String, required: true },
    seconddepDate: { type: Date, default: Date.now },
    seconddepTime: { type: String, required: true },
    secondarrivalDate: { type: Date, default: Date.now },
    secondarrivalTime: { type: String, required: true }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);



module.exports = Itinerary