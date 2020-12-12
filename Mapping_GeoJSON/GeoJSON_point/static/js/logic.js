// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
}).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
"type":"Feature",
"properties":{
"id":"3469",
"name":"San Francisco International Airport",
"city":"San Francisco",
"country":"United States",
"faa":"SFO",
"icao":"KSFO",
"alt":"13",
"tz-offset":"-8",
"dst":"A",
"tz":"America/Los_Angeles"},
"geometry":{
"type":"Point",
"coordinates":[-122.375,37.61899948120117]}}
]};


// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//   console.log(feature);
//   return L.marker(latlng)
//   .bindPopup("<h2>" + feature.properties.name +  "</h2><hr> <h3>" + feature.properties.city + ", " + feature.properties.country +  "</h3>");
//   }
//   }).addTo(map);

L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2> Airport code: " + feature.properties.faa +  "</h2><hr><h3>Airport name: " + feature.properties.name +  "</h3>");
  }
  }).addTo(map);