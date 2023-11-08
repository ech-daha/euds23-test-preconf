import{ah as s,ai as o,ak as d,de as M,ao as k,am as _,fa as R,av as f,az as U,as as T,aq as $}from"./index-a1cac181.js";import{o as C}from"./StreamFeatureManager-5d1a3f88.js";import{createConnection as x}from"./createConnection-f9d069f8.js";import{r as E}from"./EventedSet-a40b05a3.js";import{b as G}from"./Query-8ec96004.js";import{E as j}from"./FeatureLikeLayerView3D-1bce699c.js";import{n as V}from"./LayerView3D-3cbda063.js";import{u as L}from"./LayerView-8ac51c6c.js";import{d as F}from"./FeatureFilter-22854955.js";import"./query-0260ec48.js";import"./pbfQueryUtils-13f6e3b7.js";import"./pbf-16158dc0.js";import"./queryZScale-f8e7b210.js";import"./dehydratedFeatureComparison-0d28d135.js";import"./queryForSymbologySnapping-4bf445c2.js";import"./elevationInfoUtils-38658fef.js";import"./hash-6f442295.js";import"./diffUtils-ef6bbcbf.js";import"./UniqueValueRenderer-3d9243c5.js";import"./ColorStop-2602b4bf.js";import"./colorRamps-b2150d6f.js";import"./Graphics3DObjectStates-7c6ad957.js";import"./jsonUtils-46c07947.js";import"./DictionaryLoader-4dd3c670.js";import"./FieldsIndex-6b49ca64.js";import"./UnknownTimeZone-ab7c6b01.js";import"./heatmapUtils-2351b1fb.js";import"./defaults-06f3d090.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-865d3f13.js";import"./PooledRBush-6417eb86.js";import"./quickselect-29477ff4.js";import"./popupUtils-ef16fd02.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-161e756d.js";import"./WhereClause-94ad22d7.js";import"./TimeOnly-d19fd4d4.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-886070e6.js";import"./utils-5dc09d08.js";import"./generateRendererUtils-d73d141f.js";import"./FeatureSet-444cbc0f.js";import"./FeatureStore-2c50987b.js";import"./BoundsStore-4bb1f6f0.js";import"./projectExtentUtils-b0efc861.js";const N=2500;let p=class extends U{getObjectId(){return this.objectId}};s([o({type:Number,json:{read:!0}})],p.prototype,"objectId",void 0),p=s([d("esri.layers.graphics.controllers.StreamGraphic")],p);let z=class{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t)}get size(){return this._idToGraphic.size}},a=class extends M(k){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new E,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=_(this.connection),this.store=_(this.store),this.graphics.clear(),this.removeAllHandles()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:e,layerView:t}=this,{spatialReference:l,definitionExpression:c,geometryDefinition:h,objectIdField:u,timeInfo:g,purgeOptions:v,maxReconnectionAttempts:I,maxReconnectionInterval:S,customParameters:w}=e,b=e.geometryType?R.toJSON(e.geometryType):null,O=l,m=t.view.spatialReference,P={geometry:h,where:c};this.clear(),this._set("connection",x(e.parsedUrl,O,m,b,P,I,S,w??void 0)),this._outSpatialReference=m.toJSON(),this.store=new z(this._onUpdate.bind(this)),this.featuresManager=new C(this.store,u,g.toJSON(),v);const y="startup-watches";this.removeHandles(y),this.addHandles([e.on("send-message-to-socket",n=>this.connection.sendMessageToSocket(n)),e.on("send-message-to-client",n=>this.connection.sendMessageToClient(n)),this.connection.on("data-received",n=>this._onFeature(n)),this.connection.on("message-received",n=>this._onWebSocketMessage(n)),f(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],y),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=p.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const l=performance.now(),c=l-t;if(c>N){t=l;const h=Math.round(this._updateInfo.client/(c/1e3)),u=Math.round(this._updateInfo.websocket/(c/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:h,websocket:u})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};s([o()],a.prototype,"isPaused",void 0),s([o({constructOnly:!0})],a.prototype,"layer",void 0),s([o({constructOnly:!0})],a.prototype,"layerView",void 0),s([o()],a.prototype,"connection",void 0),s([o({readOnly:!0})],a.prototype,"updating",null),a=s([d("esri.layers.graphics.controllers.StreamController")],a);const B=r=>{let e=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...t){super(...t),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(t){t?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],e.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],e.prototype,"connectionStatus",null),s([o({type:F})],e.prototype,"filter",void 0),e=s([d("esri.layers.mixins.StreamLayerView")],e),e};let i=class extends B(j(V(L))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=T.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles(f(()=>this.suspended,r=>{this.controller&&this._onSuspendedChange(r)}))}get connectionError(){var e,t;const r=(t=(e=this.controller)==null?void 0:e.connection)==null?void 0:t.errorString;return r?new $("stream-controller",r):null}createQuery(){return new G({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(r,e){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(r),e==null?void 0:e.signal)}get _streamConnectionStatus(){var r,e;return((e=(r=this.controller)==null?void 0:r.connection)==null?void 0:e.connectionStatus)??"disconnected"}createController(){return new a({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var r;(r=this.controller)==null||r.pauseStream()}_doResume(){var r;(r=this.controller)==null||r.resumeStream()}};s([o({readOnly:!0})],i.prototype,"updatePolicy",void 0),s([o({readOnly:!0})],i.prototype,"connectionError",null),s([o()],i.prototype,"controller",void 0),s([o({readOnly:!0})],i.prototype,"hasZ",void 0),s([o({readOnly:!0})],i.prototype,"hasM",void 0),s([o({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=s([d("esri.views.3d.layers.StreamLayerView3D")],i);const Ve=i;export{Ve as default};