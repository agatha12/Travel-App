const router = require("express").Router();
const axios = require("axios");
const AirportWeatherAPI = require('./AirportWeatherAPI')

// Matches with "/api/getairportweather"
router.get("/", (req, res) => {
    const { airport } = req.query;
    console.log(airport)
    const aiportWeatherResponse = AirportWeatherAPI.search(airport)
    console.log(aiportWeatherResponse)
    axios
        .get(aiportWeatherResponse)
        .then(({ data }) => res.json(data))
        .catch(err => res.status(422).json(err));
});
module.exports = router;