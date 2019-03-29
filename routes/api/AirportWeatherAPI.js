const BASEURL = 'https://api.flightstats.com/flex/weather/rest/v1/json/all/';
//              "https://api.flightstats.com/flex/weather/rest/v1/json/all/JFK?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52"
let APPID = '006f4a0b';
APPID = `appId=${APPID}`;
let APPKEY = 'ca412afaa3550eeaf31bd77196adae66';
APPKEY = `appKey=${APPKEY}`;
const APPCRED = `?${APPID}&${APPKEY}`;

module.exports = {
    search: function (Airport) {

        const totalURL = BASEURL + Airport + APPCRED;
        return totalURL;

    }
};