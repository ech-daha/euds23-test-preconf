import{ah as s,ai as m,ak as l,am as f,aq as h,bq as w}from"./index-d3195b17.js";import{N as x}from"./DynamicLayerView3D-17c2200e.js";import{j as g}from"./commonProperties-90280f28.js";import{o as P}from"./ExportWMSImageParameters-4cd39970.js";import"./LayerView3D-a56b7f9b.js";import"./projectExtentUtils-a172dfcf.js";import"./ImageMaterial-fe54e4a8.js";import"./LayerView-dc602069.js";import"./RefreshableLayerView-764810f6.js";import"./ElevationInfo-a4c4c4eb.js";const v=r=>{let e=class extends r{initialize(){this.exportImageParameters=new P({layer:this.layer})}destroy(){this.exportImageParameters=f(this.exportImageParameters)}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:i}=this;if(!t)return Promise.reject(new h("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:o}=i;if(!o)return Promise.reject(new h("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const n=this.createFetchPopupFeaturesQuery(t);if(!n)return Promise.resolve([]);const{extent:p,width:a,height:u,x:d,y}=n;if(!(p&&a&&u))throw new h("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:u});return i.fetchFeatureInfo(p,a,u,d,y)}};return s([m()],e.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],e.prototype,"exportImageVersion",null),s([m()],e.prototype,"layer",void 0),s([m(g)],e.prototype,"timeExtent",void 0),e=s([l("esri.layers.mixins.WMSLayerView")],e),e};let c=class extends v(x){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>{var r;return(r=this.exportImageParameters)==null?void 0:r.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(r){const e=this.findExtentInfoAt(r),t=e.extent,i=new w(t[0],t[1],t[2],t[3],this._spatialReference),o=e.imageSize,n=o.width,p=o.height,a=i.width/n;return{extent:i,width:n,height:p,x:Math.round((r.x-i.xmin)/a),y:Math.round((i.ymax-r.y)/a)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};c=s([l("esri.views.3d.layers.WMSLayerView3D")],c);const _=c;export{_ as default};
