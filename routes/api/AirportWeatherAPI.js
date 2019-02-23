const BASEURL = 'https://api.flightstats.com/flex/weather/rest/v1/json/all/';
//              "https://api.flightstats.com/flex/weather/rest/v1/json/all/JFK?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52"
let APPID = '359b0593';
APPID = `appId=${APPID}`;
let APPKEY = '7391440a35325ac00e3ce0e14f4e7b52';
APPKEY = `appKey=${APPKEY}`;
const APPCRED = `?${APPID}&${APPKEY}`;

module.exports = {
    search: function (Airport) {

        const totalURL = BASEURL + Airport + APPCRED;
        return totalURL;

    }
};