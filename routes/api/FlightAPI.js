
var axios = require('axios');

const BASEURL = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/';
// https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/
// AA/3750/arr/2019/2/3?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52&utc=false&airport=BOS
// https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/3750/arr/2019/2/17?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52&utc=false&airport=BOS
// https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/3750/arr/2019/2/17?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52&utc=false&airport=BOS

let APPID = '006f4a0b';
APPID = `appId=${APPID}`;
let APPKEY = 'ca412afaa3550eeaf31bd77196adae66';
APPKEY = `appKey=${APPKEY}`;
const UTC = '&utc=false';
const APPCRED = `?${APPID}&${APPKEY}${UTC}`;

module.exports = {
  search: function (airline, flNumber, year, month, day, depAirport) {

    const flightName = `${airline}/${flNumber}`;
    const date = `${year}/${month}/${day}`;
    const query = `${flightName}/dep/${date}`;
    const startAirport = `&airport=${depAirport}`


    // console.log(BASEURL + query + APPCRED);
    const totalURL = BASEURL + query + APPCRED + startAirport;
    return totalURL;

     }
    };
