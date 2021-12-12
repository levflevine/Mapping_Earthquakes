# Mapping Earthquakes

## Overview of the Project

### Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

### Tasks

To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

### Approach

1. Retrieve the coordinates and magnitudes of the earthquakes, as well as tectonic plate from the GeoJSON data. 
2. Use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

### Deliverables: 

1. Add Tectonic Plate Data
2. Add Major Earthquake Data
3. Add an Additional Map

### Tools and Data Sources

#### Tools

- JavaScript
- D3.json() Library
- Leaflet library
- HTML
- CSS

#### Data Sources

- [Tectonic Plate Data](https://github.com/fraxen/tectonicplates)

- [All Earthquakes in the Past 7 days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

- [All Major Earthquakes (>4.5 magnitude) in the Past 7 days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)

## Results

### Published Map

[https://levflevine.github.io/Mapping_Earthquakes/](https://levflevine.github.io/Mapping_Earthquakes/)

### Map - All Layer Groups

![Map-1](/Resources/Map-1.png)

### Map - Major Earthquakes Layer Group

![Map-2](/Resources/Map-2.png)

### Map - Tectonic Plate Layer Group

![Map-3](/Resources/Map-3.png)