
// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/sbaik97/Mapping_Earthquakes/Mapping_Single_Points/Mapping_GeoJSON/GeoJSON_Polygons/static/data/torontoNeighborhoods.json";


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
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor:"yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style:myStyle,
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2> Neighborhood " + feature.properties.AREA_NAME 
      +  "</h2>");
    }
    }).addTo(map);
});


// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     style:myStyle,
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2> Airline " + feature.properties.airline 
//       +  "</h2><hr><h3>Destination: " + feature.properties.dst+  "</h3>");
//     }
//     }).addTo(map);
// });


// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2> Airport code: " + feature.properties.faa +  "</h2><hr><h3>Airport name: " + feature.properties.name +  "</h3>");
//     }
//     }).addTo(map);
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