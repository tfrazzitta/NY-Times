// Here we will utilize the axios library to perform GET/POST requests
// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper functions for making API Calls
var routes = {

  // This function serves our purpose of running the query to geolocate.
  NYapi: function() {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  

  getArticles: function() {
    return axios.get("/find");
  },

  postArticles: function(location) {
    return axios.post("/save", { location: location });
  }
 
  deleteArticles:function(){
    return axios.delete("/delete/:id")
  }
};


module.exports = routes;
