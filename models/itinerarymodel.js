const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const itinerarySchema = new Schema({
    passengername: { type: String, required: true },
    flightnumber: { type: String, required: false },
    airport: { type: String, required: false },
    destination: { type: String, required: false },
    startDate: { type: Date, default: Date.now, required: false },
    endDate: { type: Date, default: Date.now, required: false },
    firstDepDate: { type: Date, default: Date.now, required: false },
    firstDepTime: { type: String, required: false },
    firstarrivalDate: { type: Date, default: Date.now, required: false },
    firstarrivalTime: { type: String, required: false },
    hotelList: { type: Array, required: false },
    activityList: { type: Array, required: false},
    seconddepDate: { type: Date, default: Date.now, required: false },
    seconddepTime: { type: String, required: false },
    secondarrivalDate: { type: Date, default: Date.now, required: false },
    secondarrivalTime: { type: String, required: false }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary