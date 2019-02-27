import axios from "axios";

export default {
    //GETs api weather info
    searchAirportWeather: function (query) {
        return axios.get("/api/getairportweather", { params: query });
    },
    
    searchFlight: function (query) {
        return axios.get("/api/getflight", { params: query });
    },

    searchHotel: function(query) {
        return axios.post("/api/gethotel");
    },

    getForms: function () {
        return axios.get("/api/itinerary");
    },

    // Gets the form with given id
    getForm: function (id) {
        return axios.get("/api/itinerary/" + id);
    },

    getPass: function (id) {
        return axios.get("/api/itinerary/pass/" + id);
    },

    deleteForm: function (id) {
        return axios.delete("/api/itinerary/" + id);
    },

    // Saves a itinerary form to Database
    saveForm: function (formData) {
        return axios.post("/api/itinerary", formData)
    }
};