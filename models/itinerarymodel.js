const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const itinerarySchema = new Schema({
    passengername: { type: String, required: false },
    flightnumber: { type: String, required: false },
    airport: { type: String, required: false },
    destination: { type: String, required: false },
    firstDepDate: { type: Date, default: Date.now, required: false },
    firstDepTime: { type: String, required: false },
    firstarrivalDate: { type: Date, default: Date.now, required: false },
    firstarrivalTime: { type: String, required: false },
    checkinDate: { type: Date, default: Date.now, required: false },
    hotelName: { type: String, required: false },
    checkinTime: { type: String, required: false },
    checkoutDate: { type: Date, default: Date.now, required: false },
    checkoutTime: { type: String, required: false },
    listActivity: { type: String, required: false },
    activityDate : { type: Date, default: Date.now, required: false },
    activityTime: { type: String, required: false },
    seconddepDate: { type: Date, default: Date.now, required: false },
    seconddepTime: { type: String, required: false },
    secondarrivalDate: { type: Date, default: Date.now, required: false },
    secondarrivalTime: { type: String, required: false }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);



module.exports = Itinerary