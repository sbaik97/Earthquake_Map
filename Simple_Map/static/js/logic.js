// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([40.7, -94.5], 4);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v10',
	accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
L.marker([34.0522, -118.2437]).addTo(myMap);

// Create a circle and pass in some initial options
L.circle([34.0522, -118.2437], {
  color: "red",
  fillColor: "none",
  fillOpacity: 0.75,
  radius: 30000
}).addTo(myMap);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(myMap);
});


