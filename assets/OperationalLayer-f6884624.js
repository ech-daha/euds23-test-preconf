import{ah as n,ai as l,cD as G,cv as s,gn as d,ak as v,go as b,gp as w,aq as c,dw as A}from"./index-d3195b17.js";import{C as T,g as h}from"./commonProperties-90280f28.js";const g={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},u={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},I={ArcGISFeatureLayer:!0},M={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":g,"web-map/basemap":u,"web-map/tables":I,"link-chart/operational-layers":{...g,LinkChartLayer:!0},"link-chart/basemap":u,"link-chart/tables":I,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}},$=m=>{let r=class extends m{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(a,e,i){var t;return((t=i==null?void 0:i.portalItem)==null?void 0:t.type)==="Group Layer"?void 0:a}writeListMode(a,e,i,t){(t&&t.layerContainerType==="ground"||a&&b(this,i,{},t))&&(e[i]=a)}writeOperationalLayerType(a,e,i,t){a&&(t==null?void 0:t.layerContainerType)!=="tables"&&(e.layerType=a)}writeTitle(a,e){e.title=a??"Layer"}read(a,e){e&&(e.layer=this),w(this,a,i=>super.read(a,i),e)}write(a,e){var S,L;if(!this.persistenceEnabled)return null;if(e!=null&&e.origin){const y=`${e.origin}/${e.layerContainerType||"operational-layers"}`,o=M[y];let p=!!(o!=null&&o[this.operationalLayerType]);if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&y==="web-scene/operational-layers"&&(p=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&y==="web-map/operational-layers"&&(p=!1),!p)return(S=e.messages)==null||S.push(new c("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${y}'`,{layer:this})),null}const i=super.write(a,{...e,layer:this}),t=!!e&&!!e.messages&&!!e.messages.filter(y=>y instanceof c&&y.name==="web-document-write:property-required").length;return A(i==null?void 0:i.url)?((L=e==null?void 0:e.messages)==null||L.push(new c("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&t?null:i}beforeSave(){}};return n([l({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),n([G("id",["id"])],r.prototype,"readId",null),n([l(T)],r.prototype,"listMode",void 0),n([s("listMode")],r.prototype,"writeListMode",null),n([l({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:d}}}}})],r.prototype,"operationalLayerType",void 0),n([s("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),n([l(h)],r.prototype,"opacity",void 0),n([l({type:Boolean,readOnly:!1})],r.prototype,"persistenceEnabled",void 0),n([l({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),n([s("title"),s(["web-scene"],"title")],r.prototype,"writeTitle",null),n([l({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:d}}},name:"visibility",write:!0}})],r.prototype,"visible",void 0),r=n([v("esri.layers.mixins.OperationalLayer")],r),r};export{$ as u};
