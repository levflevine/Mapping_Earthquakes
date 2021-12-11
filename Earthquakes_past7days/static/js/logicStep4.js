// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection",
// "features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

  // Grabbing our GeoJSON data.
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function (feature, layer) {
//       console.log(layer);
//       layer.bindPopup(feature.properties.name);}})
//         .addTo(map);



  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {radius: city.population/100000,
//         color: 'orange',
//         fillcolor: '#ffffa1'
    
    
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
// });
  
// L.circle([34.0522, -118.2437], {
//     radius: 100, 
//     color: 'orange',
//     fillcolor: '#ffffa1'
//  }).addTo(map);

//  L.circleMarker([34.0522, -118.2437], {radius:10, color:'black', fillcolor: '#ffffa1'}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "satelliteStreets": satelliteStreets
  };

  // Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
    Earthquakes: earthquakes
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
 
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  // We turn each feature into a circleMarker on the map.
pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
    style: styleInfo,

    onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
          }

      }).addTo(earthquakes);
    });

earthquakes.addTo(map);

function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
};

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  };

      // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
};

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/levflevine/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/levflevine/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/levflevine/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

//Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1, 
  fillColor:'yellow',
  opacity: 0.5
};

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, 
        {style: myStyle,
        onEachFeature: function (feature, layer) {
        console.log(layer);
        layer.bindPopup("Neighborhood: " + feature.properties.AREA_NAME);}}
        )
          
    .addTo(map);
});