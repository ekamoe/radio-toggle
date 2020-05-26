// General map JS:
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWthbW9lIiwiYSI6ImNqd283d3I3bjBsd2g0OHFwMzZmMmVzdDgifQ.GMRjUJnvLt1dZ86nIvMtqw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/ekamoe/ck9m6v5md1yho1ipk1gyvac0y", // BOTH LAYERS
  //style: "mapbox://styles/ekamoe/ckalq36jf42fs1ikalz03l13t", // GCC ONLY
  //style: "mapbox://styles/ekamoe/ckalq15l941ri1jns3gygtcv3", // SSP ONLY
  center: [-20.531, 30.719], // includes NZ
  zoom: 1.75,
  minZoom: 1.25,
  maxZoom: 16, // to navigate neighborhoods
});

/* radio button menu template*/
var layerList = document.getElementById("menu");
var inputs = layerList.getElementsByTagName("input");

function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle("mapbox://styles/ekamoe/" + layerId);
  /* how to set zoom ranges for all b/c currently the zoom affects all three layers;
  seems like it might need the addSource addLayer options;
  but maybe map.setLayerZoomRange('my-layer', 2, 5); */
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

/* Mapbox code for callback function*/
map.on("load", function () {
  // Mapbox code for legend
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
});
