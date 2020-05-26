// General map JS:
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWthbW9lIiwiYSI6ImNqd283d3I3bjBsd2g0OHFwMzZmMmVzdDgifQ.GMRjUJnvLt1dZ86nIvMtqw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/ekamoe/ck9m6v5md1yho1ipk1gyvac0y", // begins with zoom switch style
  center: [-20, 35], // includes Hawaii
  zoom: 1.75,
  minZoom: 1.25,
  maxZoom: 16, // to navigate neighborhoods
});

// Radio button menu
var layerList = document.getElementById("menu");
var inputs = layerList.getElementsByTagName("input");

function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle("mapbox://styles/ekamoe/" + layerId);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

// Mapbox code for zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

// Mapbox code for legend overlays
map.on("load", function () {
  // gcc layer
  var layers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var colors = [
    "#fde725",
    "#bcdf27",
    "#7ad251",
    "#43bf70",
    "#22a884",
    "#20908d",
    "#29788e",
    "#345f8d",
    "#404387",
    "#482475",
    "#440154",
  ];
  // ssp layer
  var secondLayers = ["0-0.13", "0.14-0.28", "0.29-0.42", "0.43-1"];
  var secondColors = ["#f0f921", "#ef7b51", "#99149f", "#0d0887"];

  // loop to populate legends
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement("div");
    var key = document.createElement("span");
    key.className = "legend-key";
    key.style.backgroundColor = color;

    var value = document.createElement("span");
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
  for (i = 0; i < secondLayers.length; i++) {
    var secondLayer = secondLayers[i];
    var secondColor = secondColors[i];
    var item = document.createElement("div");
    var key = document.createElement("span");
    key.className = "legend-second-key";
    key.style.backgroundColor = secondColor;

    var value = document.createElement("span");
    value.innerHTML = secondLayer; // is this the problem?
    item.appendChild(key);
    item.appendChild(value);
    secondLegend.appendChild(item);
  }
});

//  Display lat-lng on mouse click
map.on("click", function (e) {
  document.getElementById("info").innerHTML =
    // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.lngLat.wrap());
});
