import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'
import Camera from '@arcgis/core/Camera'

const map = new Map({
  basemap: "osm/blueprint",
})

// const mapView = new MapView({
//   map: map,
//   center: [13.4, 52.5],
//   zoom: 5,
//   container: 'viewDiv'
// })

const sceneView = new SceneView({
  map: map,
  center: [13.4, 52.5],
  zoom: 5,
  container: 'viewDiv'
})

const cam = new Camera({
  position: [13.392154, 52.512202, 300],
  tilt: 60
})

sceneView.on('click', () => sceneView.goTo(cam))
