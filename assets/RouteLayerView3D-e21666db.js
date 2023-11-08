import{ag as c,ar as h,am as m,b9 as y,au as d,av as u,as as g,ah as i,ai as o,ak as f}from"./index-f98984bd.js";import{m as b,c as O,C as _,T as v,j as I,S as w,O as S}from"./Stop-99daabf7.js";import{n as V}from"./LayerView3D-bc80d1da.js";import{O as G}from"./GraphicsProcessor-49839958.js";import{l as C}from"./projectExtentUtils-bb06fe9a.js";import{r as P}from"./EventedSet-a3a46361.js";import{u as R}from"./LayerView-39e64104.js";import"./diffUtils-543f87e1.js";import"./Query-1e9b8ba4.js";import"./Graphics3DObjectStates-2cff93d9.js";import"./UniqueValueRenderer-0ba6f39b.js";import"./ColorStop-ab19399c.js";import"./colorRamps-c32ea79a.js";import"./jsonUtils-3fd42b6a.js";import"./DictionaryLoader-2818156e.js";import"./FieldsIndex-c41cf585.js";import"./UnknownTimeZone-84b675dd.js";import"./heatmapUtils-887124d2.js";import"./defaults-b79344d9.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-efa83b89.js";import"./PooledRBush-66768df8.js";import"./quickselect-894cc62b.js";import"./popupUtils-2ec3eae4.js";function $(e){return e instanceof b||e instanceof O||e instanceof _||e instanceof v||e instanceof I||e instanceof w||e instanceof S}let r=class extends V(R){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new P,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new G({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),c),this.addResolvingPromise(C(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.addHandles(h(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this._updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.addHandles([u(()=>t.geometry,(s,a)=>{this._updateGraphic(t,"geometry",s,a)}),u(()=>t.symbol,(s,a)=>{this._updateGraphic(t,"symbol",s,a)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((s=this.processor)==null?void 0:s.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){return(t==null?void 0:t.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return $(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&s.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,a){var l;const p=this._byObjectID.get(e);p[t]=s,n.graphic=p,n.property=t,n.oldValue=a,n.newValue=s,(l=this.processor)==null||l.graphicsCore.graphicUpdateHandler(n)}};i([o()],r.prototype,"_routeItems",null),i([o()],r.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],r.prototype,"legendEnabled",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0})],r.prototype,"processor",void 0),i([o({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),r=i([f("esri.views.3d.layers.RouteLayerView3D")],r);const n={graphic:null,property:null,oldValue:null,newValue:null},te=r;export{te as default};