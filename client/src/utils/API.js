import axios from "axios";

export default {
    
    getForms: function() {
        return axios.get("/api/itinerary");
    },

    // Gets the form with given id
    getForm: function (id) {
        return axios.get("/api/itinerary/" + id);
    },
    
    deleteForm: function (id) {
        return axios.delete("/api/itinerary/" + id);
    },

    // Saves a itinerary form to Database
    saveForm: function (formData) {
        return axios.post("/api/itinerary", formData)
    }
};