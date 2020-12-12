// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([37.6213, -122.3790], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
	accessToken: API_KEY
}).addTo(myMap);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red"
  }).addTo(myMap);

// Coordinates for each point to be used in the polyline.
let lines = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(lines, {
  color: "yellow"
  }).addTo(myMap);