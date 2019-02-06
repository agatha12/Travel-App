const router = require("express").Router();
const itiRoute = require("./itineraryRoute");

router.use("/itinerary", itiRoute);

module.exports = router