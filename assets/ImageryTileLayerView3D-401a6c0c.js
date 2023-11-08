import{ah as n,ai as l,ak as z,aq as I,az as L,da as O,gc as P,gd as _}from"./index-d3195b17.js";import{s as v,v as F}from"./rasterProjectionHelper-a9deb4b9.js";import{n as j}from"./LayerView3D-a56b7f9b.js";import{o as G}from"./TiledLayerView3D-40eeaeb2.js";import{j as k}from"./commonProperties-90280f28.js";import{p as A}from"./popupUtils-bd97abe1.js";import{u as M}from"./LayerView-dc602069.js";import{a as V}from"./RefreshableLayerView-764810f6.js";import{r as W}from"./drapedUtils-43e2ed3f.js";import"./ElevationInfo-a4c4c4eb.js";const $=t=>{let e=class extends t{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return v(this.layer.rasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return F(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(r){return!!v(this.layer.rasterInfo,r)}async fetchPopupFeatures(r,a){const{layer:i}=this;if(!r)throw new I("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:m}=i,y=A(i,a);if(!m||y==null)throw new I("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:m,popupTemplate:y});const o=[],{value:p,magdirValue:s,processedValue:b}=await i.identify(r,{timeExtent:this.timeExtent});let c="";if(p&&p.length){c=i.type==="imagery-tile"&&i.hasStandardTime()&&p[0]!=null?p.map(w=>i.getStandardTimeValue(w)).join(", "):p.join(", ");const d={ObjectId:0},T="Raster.ServicePixelValue";d[T]=(b==null?void 0:b.join(", "))??c,d[T+".Raw"]=c;const x=i.rasterInfo.attributeTable;if(x!=null){const{fields:w,features:E}=x,S=w.find(({name:h})=>h.toLowerCase()==="value"),g=S?E.find(h=>String(h.attributes[S.name])===c):null;if(g)for(const h in g.attributes)g.attributes.hasOwnProperty(h)&&(d[this._rasterFieldPrefix+h]=g.attributes[h])}const R=i.rasterInfo.dataType;R!=="vector-magdir"&&R!=="vector-uv"||(d["Raster.Magnitude"]=s==null?void 0:s[0],d["Raster.Direction"]=s==null?void 0:s[1]);const f=new L(this.fullExtent.clone(),null,d);f.layer=i,f.sourceLayer=f.layer,o.push(f)}return o}};return n([l()],e.prototype,"layer",void 0),n([l(k)],e.prototype,"timeExtent",void 0),n([l()],e.prototype,"view",void 0),n([l()],e.prototype,"fullExtent",null),n([l()],e.prototype,"tileInfo",void 0),n([l({readOnly:!0})],e.prototype,"hasTilingEffects",null),n([l()],e.prototype,"datumTransformation",null),e=n([z("esri.views.layers.ImageryTileLayerView")],e),e};let u=class extends $(V(G(j(M)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new I("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const t=O(()=>{var e,r;return(r=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:r.tilingSchemeLocked}).then(()=>{const e=this.view.basemapTerrain.tilingScheme,r=this.layer.tileInfo,a=["png","png24","png32","jpg","mixed"].includes(r.format)&&e.compatibleWith(r);this.isAlignedMapTile=a;const i=a?r:e.toTileInfo();this.tileInfo=i,this._updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const t=document.createElement("canvas"),e=t.getContext("2d"),[r,a]=this.tileInfo.size;return t.width=r,t.height=a,e.clearRect(0,0,r,a),e.getImageData(0,0,r,a)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){var a,i;const t=this.layer.tileInfo,e=(a=this.tileInfo.lodAt(0))==null?void 0:a.scale,r=(i=this.layer.tileInfo.lodAt(t.lods.length-1))==null?void 0:i.scale;return this.levelRangeFromScaleRange(e,r)}_getfullExtent(){var t;return v(this.layer.rasterInfo,((t=this.view.basemapTerrain)==null?void 0:t.spatialReference)!=null?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(t,e,r,a){const i=this.tileInfo,m=this._canSymbolizeInWebGL(),y={tileInfo:i,requestRawData:m,signal:a.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},o=await this.layer.fetchTile(t,e,r,y);if(o instanceof HTMLImageElement)return o;let p=o==null?void 0:o.pixelBlock;if(p==null)return this._blankTile;if(!m&&(p=await this.layer.applyRenderer(o),p==null))return this._blankTile;const s=new P([t,e,r],p,i.size[0],i.size[1]);return m?(s.symbolizerRenderer=this.layer.symbolizer.rendererJSON,s.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t)),s.transformGrid=o.transformGrid):s.isRendereredSource=!0,s.interpolation=this.layer.interpolation,s.bandIds=this.layer.bandIds,s}_getSymbolizerOptions(t){var r;const e=this.tileInfo.lodAt(t).resolution;return{pixelBlock:null,isGCS:((r=this.view.basemapTerrain)==null?void 0:r.spatialReference)!=null?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:e,y:e},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(t){this._canSymbolizeInWebGL()&&JSON.stringify(t.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(t.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t.lij[0])))}createFetchPopupFeaturesQueryGeometry(t,e){return W(t,e,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){var i,m;const t=_("3d"),{symbolizer:e}=this.layer,r=(m=(i=e.lookup)==null?void 0:i.colormapLut)==null?void 0:m.indexedColormap,a=r&&r.length>4*(t.maxTextureSize||4906);return t.supportsTextureFloat&&e.canRenderInWebGL&&!a}};n([l({readOnly:!0})],u.prototype,"_blankTile",null),n([l({readOnly:!0})],u.prototype,"imageFormatIsOpaque",null),n([l({readOnly:!0})],u.prototype,"hasMixedImageFormats",null),n([l({readOnly:!0})],u.prototype,"dataLevelRange",null),u=n([z("esri.views.3d.layers.ImageryTileLayerView3D")],u);const X=u;export{X as default};
