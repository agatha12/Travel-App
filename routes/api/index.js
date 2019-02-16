const router = require("express").Router();
const itiRoute = require("./itineraryRoute");
const getFlightAPIRoute = require("./getFlightAPIRoute")

router.use("/itinerary", itiRoute);
router.use("/getflight", getFlightAPIRoute);


module.exports = router