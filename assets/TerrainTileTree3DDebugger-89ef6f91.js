import{av as s,ag as i,aj as t,aK as n,ah as l,ak as o}from"./index-f98984bd.js";import{d as p}from"./TileTreeDebugger-ee507ec3.js";let r=class extends p{constructor(e){super(e),this.enablePolygons=!1}initialize(){s(()=>this.enabled,e=>this.view.basemapTerrain.renderPatchBorders=e,i)}getTiles(){const e=this.view.basemapTerrain.spatialReference!=null?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(a=>({...a,geometry:t.fromExtent(n(a.extent,e))}))}};r=l([o("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],r);export{r as TerrainTileTree3DDebugger};