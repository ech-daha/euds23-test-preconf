import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import SceneLayer from '@arcgis/core/layers/SceneLayer'
import Camera from '@arcgis/core/Camera'
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer'

const layer = new FeatureLayer({ url: 'https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/Berliner_Mauer/FeatureServer/0' })
const layer1 = new FeatureLayer({ url: 'https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/Berliner_Mauer/FeatureServer/1' })
const layer2 = new FeatureLayer({ url: 'https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/Berliner_Mauer/FeatureServer/2' })
const layer3 = new FeatureLayer({ url: 'https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/Berliner_Mauer/FeatureServer/3' })

const scLayer = new SceneLayer({ url: 'https://tiles.arcgis.com/tiles/jUpNdisbWqRpMo35/arcgis/rest/services/Berlin_3D/SceneServer' })

// const basemap = new VectorTileLayer({
//   url: 'arcgis/midcentury'
// })

const map = new Map({
  basemap: "osm/blueprint",
  // layers: [layer, layer1, layer2, layer3, scLayer]
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
