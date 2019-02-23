const router = require("express").Router();
const itiRoute = require("./itineraryRoute");
const getFlightAPIRoute = require("./getFlightAPIRoute");
const getAirportAPIRoute = require("./getAirportAPIRoute");

router.use("/itinerary", itiRoute);
router.use("/getflight", getFlightAPIRoute);
router.use("/getairportweather", getAirportAPIRoute);



module.exports = router