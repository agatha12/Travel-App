const router = require("express").Router();
const itiRoute = require("./itineraryRoute");
const getFlightAPIRoute = require("./getFlightAPIRoute");
const getAirportAPIRoute = require("./getAirportAPIRoute");
const getHotelAPIRoute = require("./getHotelAPIRoute")
const photoRoute = require("./photoRoute")


router.use("/itinerary", itiRoute);
router.use("/getflight", getFlightAPIRoute);
router.use("/getairportweather", getAirportAPIRoute);
router.use("/gethotel", getHotelAPIRoute);
router.use("/photos", photoRoute)



module.exports = router;