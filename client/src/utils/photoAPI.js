import axios from "axios";

export default {
    // getForms: function () {
    //     return axios.get("/api/itinerary");
    // },


    getAlbums: function (id) {
        return axios.get("/api/photos/" + id);
    },

    // getPass: function (id) {
    //     return axios.get("/api/itinerary/pass/" + id);
    // },

    // deleteForm: function (id) {
    //     return axios.delete("/api/itinerary/" + id);
    // },

    createAlbum: function (formData) {
        return axios.post("/api/photos", formData)
    },
    
    updateForm: function (id, photo) {
        return axios.put("/api/photos/" + id , photo)
    }
};