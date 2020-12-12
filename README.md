# Earthquakes_Mapping
Mapping Earthquakes with GeoJSON and APIs

## Background

United States Geological Survey, or USGS, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

Build a new set of tools that will allow the USGS to visualize their earthquake data. The USGS collects a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Objectives

 - The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

## Software/Tools
 - VS Code, Chrome web browser, github.io, Mapbox API key for custom map applications, JavaScript Object Notation (JSON) data
 - The data is provided by United States Geological Survey [USGS Earthquakes real time data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

## Tasks

 - To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then create the earthquake data in relation to the tectonic plates’ location on the earth, and all the earthquakes with a magnitude greater than 4.5 on the map, and add the data on a third map.

### Task 1: Add Tectonic Plate Data

 -Using the  JavaScript, Leafet.js, and geoJSON data, create the tectonic plate data using d3.json(), the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and add the tectonic plate data to the overlay object with the earthquake data.

 - Codes
    - [HTML File](/Earthquake_Challenge/index.html)

    - [JavaScript File](/Earthquake_Challenge/static/js/logic.js)

    - [CSS File](/Earthquake_Challenge/static/css/style.css)

  - map ![](Images/earthquake_map.png)


  - results : Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. There are more color information in legend, which is in the right bottom of page. And the tectonic layer group variable is added to the map.


### Task 2: Add Major Earthquake Data

The USGS wants to plot a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. Pull in a second data set and visualize it along side the original set of data. Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>

![](Images/fault_lines.png)

* Plot a second data set on the map
* Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently
* Add layer controls to the map

![](Images/earthquake_fault_overlay.png)


### Task 3: Add an Additional Map
