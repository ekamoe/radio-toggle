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

/* callback function template
map.on('load', function() {
// how do i define the text inside the map-overlay?
});
*/
