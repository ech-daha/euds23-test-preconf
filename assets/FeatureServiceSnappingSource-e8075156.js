import{ma as W,mb as J,mc as Z,b6 as q,bO as G,ah as s,ai as a,ak as I,ao as O,md as B,av as _,aw as L,g9 as F,ag as S,me as Q,aI as K,aj as X,aK as Y,af as D,aH as ee,aD as te,hm as ie,fQ as ne,dL as N,fa as se,iw as re,ke as ae,eh as oe,ck as le,fs as de,mf as ue,ca as V,mg as f,aJ as pe,aN as A,aB as he,mh as ce,aC as ye,aF as fe}from"./index-d3195b17.js";import{R as ge,t as _e}from"./DimensionAnalysisView3D-b7e6f467.js";import{m as ve}from"./elevationInfoUtils-656308c0.js";import{a as we,o as me}from"./queryEngineUtils-d5bc4ebe.js";import{d as Se}from"./TileTreeDebugger-9f64e107.js";import"./LineVisualElement-6e71358b.js";import"./LengthDimension-386b476f.js";import"./Segment-4254cf66.js";import"./unitFormatUtils-77671421.js";import"./analysisViewUtils-5ca646c2.js";import"./Factory-b2d94fd4.js";import"./ImageMaterial-fe54e4a8.js";import"./vec4f32-0d1b2306.js";import"./RightAngleQuadVisualElement-ffcffe3a.js";import"./PointVisualElement-e4717ef8.js";import"./Query-f1607220.js";import"./EditGeometryOperations-77876a9d.js";import"./FeatureFilter-dc6e76e7.js";import"./floorFilterUtils-080a7cd2.js";import"./dehydratedFeatureComparison-9341e9bb.js";import"./VertexSnappingCandidate-d800a9e6.js";function b(e,t){return J(t.extent,U),Z(U,q(Ie,e.x,e.y,0))}const U=W(),Ie=G();let y=class extends O{get tiles(){const t=this.tilesCoveringView,n=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((r,i)=>b(n,r)-b(n,i)),t}_scaleEnabled(){return B(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:n}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=n,i=[];for(const{row:o,colFrom:l,colTo:v}of t)for(let d=l;d<=v;d++){const u=n.normalizeCol(d),m=new F(null,r,o,u);this.tileInfo.updateTileInfo(m),i.push(m)}return i}get tileInfo(){var t;return((t=this.view.featuresTilingScheme)==null?void 0:t.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>{var t,n;return(n=(t=this.view)==null?void 0:t.state)==null?void 0:n.viewpoint},()=>this.notifyChange("tilesCoveringView"),L))}};s([a({readOnly:!0})],y.prototype,"tiles",null),s([a({readOnly:!0})],y.prototype,"_scaleEnabled",null),s([a({readOnly:!0})],y.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],y.prototype,"tileInfo",null),s([a({readOnly:!0})],y.prototype,"tileSize",null),s([a({constructOnly:!0})],y.prototype,"view",void 0),s([a({constructOnly:!0})],y.prototype,"layer",void 0),s([a()],y.prototype,"pointOfInterest",void 0),y=s([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],y);let g=class extends O{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const n=e.map(r=>b(t,r));for(let r=1;r<n.length;r++)if(n[r-1]>n[r])return e.sort((i,o)=>b(t,i)-b(t,o)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(He)}get tileInfo(){var e;return((e=this.view.featureTiles)==null?void 0:e.tilingScheme.toTileInfo())??null}get tileSize(){var e;return((e=this.view.featureTiles)==null?void 0:e.tileSize)??256}get _effectivePointOfInterest(){var t;const e=this.pointOfInterest;return e??((t=this.view.pointsOfInterest)==null?void 0:t.focus.location)}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>this.view.featureTiles,e=>{this.removeHandles(j),e&&this.addHandles(e.addClient(),j)},S))}_filterTiles(e){return e==null?[]:e.filter(t=>Math.abs(t.measures.screenRect[3]-t.measures.screenRect[1])>be&&t.measures.visibility===Q.VISIBLE_ON_SURFACE)}};function He({lij:[e,t,n],extent:r}){return new F(`${e}/${t}/${n}`,e,t,n,r)}s([a({readOnly:!0})],g.prototype,"tiles",null),s([a({readOnly:!0})],g.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],g.prototype,"tileInfo",null),s([a({readOnly:!0})],g.prototype,"tileSize",null),s([a({constructOnly:!0})],g.prototype,"view",void 0),s([a()],g.prototype,"pointOfInterest",void 0),s([a()],g.prototype,"_effectivePointOfInterest",null),g=s([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],g);const be=50,j="feature-tiles";let k=class extends Se{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(K(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(i=>{e.set(i.data.id,i.featureCount)}),this._debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const n=i=>{const o=t.get(i),l=e.get(i)??"?";return o?`${o}:${l}
${i}`:`store:${l}
${i}`},r=new Map;return this._debugInfo.storedTiles.forEach(i=>{r.set(i.data.id,i.data)}),this._debugInfo.pendingTiles.forEach(i=>{r.set(i.data.id,i.data)}),Array.from(r.values()).map(i=>({lij:[i.level,i.row,i.col],geometry:X.fromExtent(Y(i.extent,this.view.spatialReference)),label:n(i.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};s([a({constructOnly:!0})],k.prototype,"handle",void 0),k=s([I("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],k);let c=class extends O{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new D,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const n=[];for(const{points:r}of t.pointsInFeatures)for(const{z:i}of r)n.push(i);return{elevations:n,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=ee(async(t,n)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],n)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n))})}destroy(){this._suspendController=te(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new Oe(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var i;const n=this._serviceInfoFromLayer(e.layer);if(n==null)return;const r={configuration:this._convertConfiguration(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(i=e.layer.elevationInfo)==null?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const n=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:n,filter:r,coordinateHelper:i}=e,o={...e,point:ie(n[0],n[1],n[2],i.spatialReference.toJSON()),filter:r==null?void 0:r.toJSON()};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const n={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var l,v,d;const n=this._editId++,r={id:n};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",r,t));const i=await this._updatingHandles.addPromise(ne(e.result,t)),o={id:n,edits:{addedFeatures:((l=i.addedFeatures)==null?void 0:l.map(({objectId:u})=>u).filter(N))??[],deletedFeatures:((v=i.deletedFeatures)==null?void 0:v.map(({objectId:u,globalId:m})=>({objectId:u,globalId:m})))??[],updatedFeatures:((d=i.updatedFeatures)==null?void 0:d.map(({objectId:u})=>u).filter(N))??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;(t=this._suspendController)==null||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){var t,n;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:se.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(n=e.timeInfo)==null?void 0:n.toJSON()}}};s([a({constructOnly:!0})],c.prototype,"schedule",void 0),s([a({constructOnly:!0})],c.prototype,"hasZ",void 0),s([a({constructOnly:!0})],c.prototype,"elevationAlignPointsInFeatures",void 0),s([a({constructOnly:!0})],c.prototype,"queryForSymbologySnapping",void 0),s([a({readOnly:!0})],c.prototype,"updating",null),s([a({readOnly:!0})],c.prototype,"availability",void 0),s([a()],c.prototype,"_workerHandleUpdating",void 0),c=s([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],c);class Oe extends re{constructor(t,n){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:n})}}let w=class extends O{get tiles(){return[new F("0/0/0",0,0,0,ae(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new oe({origin:new le({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new de({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};s([a({readOnly:!0})],w.prototype,"tiles",null),s([a({readOnly:!0})],w.prototype,"tileInfo",null),s([a({readOnly:!0})],w.prototype,"tileSize",null),s([a({constructOnly:!0})],w.prototype,"layer",void 0),s([a()],w.prototype,"pointOfInterest",void 0),w=s([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],w);let p=class extends O{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return(e=this.view)==null?void 0:e.allLayerViews.find(t=>t.layer===this._layer)}get _isSuspended(){var e;return ue(this._layer)&&!this._layer.sublayers.find(t=>t.visible)?!0:!!this.view&&(((e=this._layerView)==null?void 0:e.suspended)!==!1||!this.layerSource.enabled)}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var m,T,C,$,P,E,M,x;const{view:e,_layerView:t,layerSource:n}=this,{layer:r}=n,{fieldsIndex:i,timeInfo:o,floorInfo:l,subtypeField:v}=r,d=t&&"filter"in t?t.filter:null,u=d!=null&&d.where&&d.where!=="1=1"?this._getOrLoadWhereFields(d.where,i):[];if(d!=null&&d.timeExtent&&o){const{startField:h,endField:H}=o,z=((m=i.get(h))==null?void 0:m.name)??h,R=((T=i.get(H))==null?void 0:T.name)??H;z&&u.push(z),R&&u.push(R)}if(e!=null&&e.map&&ge(e.map)&&((C=e.map.utilityNetworks)!=null&&C.find(h=>h.isUtilityLayer(r)))){const h=($=r.fieldsIndex.get("assetGroup"))==null?void 0:$.name,H=(P=r.fieldsIndex.get("assetType"))==null?void 0:P.name;h&&H&&(u.push(h),u.push(H))}if(r&&(l!=null&&l.floorField)&&((E=e==null?void 0:e.floors)!=null&&E.length)){const h=((M=i.get(l.floorField))==null?void 0:M.name)??l.floorField;h&&u.push(h)}if(v){const h=((x=i.get(v))==null?void 0:x.name)??v;h&&u.push(h)}return new Set(u)}get configuration(){const{view:e}=this,t=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new D,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=_e(me)}initialize(){let e;const t=this.view;if(t!=null)switch(t.type){case"2d":this._tilesOfInterest=new y({view:t,layer:this._layer}),e=this._workerHandle=new c;break;case"3d":{const{resourceController:n}=t,r=this._layer;this._tilesOfInterest=new g({view:t}),e=this._workerHandle=new c({schedule:i=>n.immediate.schedule(i),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(i,o)=>{const l=await t.whenLayerView(r);return V(o),l.elevationAlignPointsInFeatures(i,o)},queryForSymbologySnapping:async(i,o)=>{const l=await t.whenLayerView(r);return V(o),l.queryForSymbologySnapping(i,o)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:o}=r;ve(i,o)&&f(e.notifyElevationSourceChange())}),_(()=>r.elevationInfo,()=>f(e.notifyElevationSourceChange()),S),_(()=>{var i,o;return(o=(i=this._layerView)==null?void 0:i.processor)==null?void 0:o.renderer},()=>f(e.notifySymbologyChange()),S),_(()=>{var i;return((i=this._layerView)==null?void 0:i.symbologySnappingSupported)??!1},i=>f(e.setSymbologySnappingSupported(i)),S),pe(()=>{var i;return(i=this._layerView)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}else this._tilesOfInterest=new w({layer:this._layer}),e=this._workerHandle=new c;this.addHandles([A(e)]),f(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>f(e.updateTiles(this._updateTilesParameters,null)),S),this.addHandles([_(()=>this.configuration,n=>f(e.configure(n,null)),L),_(()=>this._outFields,n=>f(e.updateOutFields(n)),S),_(()=>this._isSuspended,n=>f(e.setSuspended(n)),he)]),t!=null&&this.addHandles(_(()=>ce.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,n=>{n&&!this._debug?(this._debug=new k({view:t,handle:e}),this.addHandles(A(this._debug),"debug")):!n&&this._debug&&this.removeHandles("debug")},S)),this.addHandles(this.layerSource.layer.on("apply-edits",n=>{f(e.applyEdits(n,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:n,point:r}=e;this._tilesOfInterest.pointOfInterest=n.arrayToPoint(r);const i=this._memoizedMakeGetGroundElevation(this.view,n.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(o=>we(o,i))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const r=ye(async()=>{const i=await fe(()=>import("./WhereClause-d1f79e4c.js").then(o=>o.W),["assets/WhereClause-d1f79e4c.js","assets/TimeOnly-fd60a1b5.js","assets/index-d3195b17.js","assets/index-8ff8146e.css","assets/UnknownTimeZone-03c4b711.js"]);return this._whereModule=i.WhereClause,this._whereModule});return this._loadWhereModuleTask=r,this._updatingHandles.addPromise(r.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch{return[]}}};s([a({constructOnly:!0})],p.prototype,"spatialReference",void 0),s([a({constructOnly:!0})],p.prototype,"layerSource",void 0),s([a({constructOnly:!0})],p.prototype,"view",void 0),s([a()],p.prototype,"_tilesOfInterest",void 0),s([a({readOnly:!0})],p.prototype,"_updateTilesParameters",null),s([a()],p.prototype,"_layerView",null),s([a()],p.prototype,"_isSuspended",null),s([a({readOnly:!0})],p.prototype,"updating",null),s([a()],p.prototype,"_outFields",null),s([a({readOnly:!0})],p.prototype,"configuration",null),s([a({readOnly:!0})],p.prototype,"availability",null),s([a()],p.prototype,"_loadWhereModuleTask",void 0),s([a()],p.prototype,"_whereModule",void 0),p=s([I("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],p);export{p as FeatureServiceSnappingSource};
