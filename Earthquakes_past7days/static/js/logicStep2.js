
// Accessing the airport GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the radius of the earthquake marker based on its
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
  return 1;
  }
  return magnitude * 4;
  }

// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
    console.log(data);
  
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(data)
      return L.circleMarker(latlng)
    },
    // We set the style for each circleMarker using our styleInfo function
    style: styleInfo

  }).addTo(map);
});


// // Grabbing our GeoJSON data.
// d3.json(earthquakeData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//   console.log(feature);
//   return L.marker(latlng)
//   .bindPopup("<h2> Airport code: " + feature.properties.faa +  "</h2><hr><h3>Airport name: " + feature.properties.name +  "</h3>");
//   }
//   }).addTo(map);
// });
// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//   console.log(feature);
//   return L.marker(latlng)
//   .bindPopup("<h2>" + feature.properties.name +  "</h2><hr> <h3>" + feature.properties.city + ", " + feature.properties.country +  "</h3>");
//   }
//   }).addTo(map);

// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2> Airport code: " + feature.properties.faa +  "</h2><hr><h3>Airport name: " + feature.properties.name +  "</h3>");
//   }
//   }).addTo(map);