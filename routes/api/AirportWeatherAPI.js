const BASEURL = 'https://api.flightstats.com/flex/weather/rest/v1/json/all/';
//              "https://api.flightstats.com/flex/weather/rest/v1/json/all/JFK?appId=359b0593&appKey=7391440a35325ac00e3ce0e14f4e7b52"
let APPID = '2a633fa8';
APPID = `appId=${APPID}`;
let APPKEY = 'a17f32fde5d1f23deb93952dccb6987c';
APPKEY = `appKey=${APPKEY}`;
const APPCRED = `?${APPID}&${APPKEY}`;

module.exports = {
    search: function (Airport) {

        const totalURL = BASEURL + Airport + APPCRED;
        return totalURL;

    }
};