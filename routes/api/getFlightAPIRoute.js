const router = require("express").Router();
const axios = require("axios");
const FlightAPI = require('./FlightAPI.js')

// const itiControlller = require("../../controllers/iticontroller");
// const Flight = require("./FlightAPI")

// Matches with "/api/itinerary"
router.get("/", (req, res) => {
    const {airline,flNumber,year,month,day,depAirport} = req.query;
    console.log(airline,flNumber,year,month,day,depAirport)
    const flightStatusResponse =  FlightAPI.search(airline,flNumber,year,month,day,depAirport)
    console.log(flightStatusResponse)
    axios
    // .get("https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/3750/arr/2019/2/17?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52&utc=false")
    .get(flightStatusResponse)
    // .get("http://www.recipepuppy.com/api/")
    .then(({ data }) => res.json(data))
    // .then(res  => {(
    // res.json(res.data)
    //   // res.json(results)
    //   )})
    // .then((res)=> res.send())
    .catch(err => res.status(422).json(err));
//  )
});
  module.exports = router;
  