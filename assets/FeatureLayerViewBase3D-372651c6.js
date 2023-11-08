import{b2 as S,iw as k,cE as H,az as U,jv as N,ah as o,ai as l,ak as g,ao as v,ca as J,gb as z,lh as L,am as M,b7 as Y,av as C,aB as P,aJ as D,bD as T,bo as V,bH as K,le as Q,li as W,lf as j,lj as X,lk as ee,ll as q,lm as E,aq as _,ln as te,as as b,ag as A,ar as re,lo as se,aA as ie}from"./index-d3195b17.js";import{I as ae,E as oe,T as ne}from"./FeatureLikeLayerView3D-03a1afad.js";import{n as le}from"./LayerView3D-a56b7f9b.js";import{E as ue,c as ce}from"./query-a21fc717.js";import{r as pe}from"./EventedSet-433a35e5.js";import{j as de}from"./commonProperties-90280f28.js";import{w as he}from"./FeatureEffect-3c293895.js";import{d as ye}from"./FeatureFilter-dc6e76e7.js";import{o as Z}from"./floorFilterUtils-080a7cd2.js";import{b as G}from"./Query-f1607220.js";import{p as O,n as me}from"./popupUtils-bd97abe1.js";import{u as fe}from"./LayerView-dc602069.js";import{a as ge}from"./RefreshableLayerView-764810f6.js";class Fe{constructor(r){this._controller=r,this._handle=new be(e=>r.schedule(e))}destroy(){this._handle.destroy()}invoke(r,e){return r.buffer&&r.buffer.byteLength!==0?(r.options.sourceSpatialReference&&r.options.sourceSpatialReference instanceof S&&(r.options={...r.options,sourceSpatialReference:r.options.sourceSpatialReference.toJSON()}),this._handle.invoke(r,e).then(s=>{let i=0,a=0;const p=S.fromJSON(s.spatialReference);s.spatialReference=p;const n=async c=>{if(s.fields){for(;i<s.fields.length;)if(s.fields[i]=H.fromJSON(s.fields[i]),i++,c.madeProgress())return this._controller.reschedule(u=>n(u))}for(;a<s.features.length;){const u=s.features[a];if(++a,u.uid=U.generateUID(),u.geometry!=null&&(u.geometry.spatialReference=p,we(u.geometry),c.madeProgress()))return this._controller.reschedule(h=>n(h))}return s};return this._controller.schedule(c=>n(c))})):Promise.resolve(null)}}function we(t){switch(t.type){case"polyline":t.paths.reduce((r,e)=>r+e.length,0)<N&&(t.paths=t.hasZ||t.hasM?t.paths.map(r=>r.map(e=>[e[0],e[1],e[2]])):t.paths.map(r=>r.map(e=>[e[0],e[1]])));break;case"polygon":t.rings.reduce((r,e)=>r+e.length,0)<N&&(t.rings=t.hasZ||t.hasM?t.rings.map(r=>r.map(e=>[e[0],e[1],e[2]])):t.rings.map(r=>r.map(e=>[e[0],e[1]])))}}let be=class extends k{constructor(r){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},r)}},f=class extends v{constructor(t){super(t)}get queryFeaturesDehydrated(){var i;const t=this.layer.capabilities,r=t&&t.query,e=r&&r.supportsFormatPBF,s=this.layer.parsedUrl;if(e){this._decoder==null&&(this._decoder=new Fe(this.controller));const a={sourceSpatialReference:((i=this.layer.spatialReference)==null?void 0:i.toJSON())??null,applyTransform:!0,maxStringAttributeLength:1024};return(p,n)=>ue(s,p,"pbf",this._createRequestOptions(n)).then(c=>(J(n),this._decoder!=null?this._decoder.invoke({buffer:c.data,options:a},n.signal):Promise.reject(z())))}return(a,p)=>ce(s,a,this.layer.spatialReference,this._createRequestOptions(p)).then(n=>L(n.data))}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}destroy(){this._decoder=M(this._decoder)}_createRequestOptions(t){return{...t,query:{...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query}}}};o([l({constructOnly:!0})],f.prototype,"layer",void 0),o([l({constructOnly:!0})],f.prototype,"controller",void 0),o([l({readOnly:!0})],f.prototype,"queryFeaturesDehydrated",null),f=o([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],f);let F=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.layer.queryFeatures(t,r)}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}};o([l({constructOnly:!0})],F.prototype,"layer",void 0),o([l({readOnly:!0})],F.prototype,"queryFeaturesDehydrated",null),F=o([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],F);let x=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.layer.queryFeatures(t,r)}};o([l({constructOnly:!0})],x.prototype,"layer",void 0),x=o([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],x);let w=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.source.queryFeaturesJSON(t,r).then(L,e=>{if(e&&e.name==="query-features-json:unsupported")return this.layer.queryFeatures(t,r);throw e})}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}};function _e(t,r){return t.type==="feature"&&t.source.type==="feature-layer"?t.infoFor3D!=null?new F({layer:t}):new f({layer:t,controller:r}):t.type==="feature"&&t.source.type==="memory"||t.type==="csv"||t.type==="geojson"||t.type==="oriented-imagery"||t.type==="wfs"?new w({layer:t,source:t.source}):t.type==="ogc-feature"?new x({layer:t}):null}o([l({constructOnly:!0})],w.prototype,"layer",void 0),o([l({constructOnly:!0})],w.prototype,"source",void 0),w=o([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],w);class xe{constructor(r){this._memoryCache=null,this._capabilities=null;const e=r.layerView.layer;this._layerView=r.layerView,this.objectIdField=e.objectIdField,this.globalIdField="globalIdField"in e?e.globalIdField:null,this._returnZ=r.returnZ,this._returnM=r.returnM;const s=this._layerView.view.resourceController;this.query=_e(e,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(`fl-${e.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=M(this._memoryCache),this.query.destroy()}createQuery(){const r=this._layerView.layer.createQuery();return r.outFields=this._layerView.availableFields,r.returnZ=this._returnZ,r.returnM=this._returnM,r.outSpatialReference=this.tilingScheme.spatialReference,r}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const r=this._layerView.view.resourceController;return r?r.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=ae(this._layerView.layer)),this._capabilities}logFetchError(r,e){r.error("#fetchTile()",this._layerView.layer,(e==null?void 0:e.message)??e)}}const B="esri.views.layers.FeatureLayerView",R=Y.getLogger(B),ve=t=>{let r=class extends t{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([C(()=>{var s;const e=this.layer;return[(s=e==null?void 0:e.elevationInfo)==null?void 0:s.featureExpressionInfo,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),P),D(()=>{var e;return(e=this.view)==null?void 0:e.floors},"change",()=>this._handleRequiredFieldsChange()),D(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:e,layer:{fieldsIndex:s},requiredFields:i}=this;return"outFields"in e&&e.outFields?T(s,[...V(s,e.outFields),...i]):T(s,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){R.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},s=this.filter!=null?this.filter.createQuery(e):new G(e);if(this.layer.type==="feature"){const i=Z(this);i!=null&&(s.where=s.where?`(${s.where}) AND (${i})`:i)}return this.timeExtent!=null&&(s.timeExtent=s.timeExtent!=null?s.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),s}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new G(e)}queryFeatures(e,s){throw new Error("missing implementation")}queryObjectIds(e,s){throw new Error("missing implementation")}queryFeatureCount(e,s){throw new Error("missing implementation")}queryExtent(e,s){throw new Error("missing implementation")}async fetchPopupFeatures(e,s){const i=this.validateFetchPopupFeatures(s);if(i)throw i;return this.fetchClientPopupFeatures(s)}_loadArcadeModules(e){var s;return(s=e.expressionInfos)!=null&&s.length||Array.isArray(e.content)&&e.content.some(i=>i.type==="expression")?K():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:s,layer:{fieldsIndex:i,objectIdField:a}}=this,p="renderer"in s&&s.renderer,n="orderBy"in s&&s.orderBy,c="featureReduction"in s?s.featureReduction:null,u=new Set,h=await Promise.allSettled([p?p.collectRequiredFields(u,i):null,Q(u,s),e?W(u,s):null,this.filter!=null?j(u,s,this.filter):null,this.featureEffect!=null?j(u,s,this.featureEffect.filter):null,c?X(u,s,c):null,n?ee(u,s,n):null]);if("timeInfo"in s&&s.timeInfo&&this.timeExtent&&q(u,s.fieldsIndex,[s.timeInfo.startField,s.timeInfo.endField]),s.type==="feature"&&(s.floorInfo&&q(u,s.fieldsIndex,[s.floorInfo.floorField]),e&&s.infoFor3D!=null&&(s.globalIdField==null&&R.error("globalIdField missing on 3DObjectFeatureLayer"),q(u,s.fieldsIndex,[s.globalIdField]))),s.type==="subtype-group"){E(u,i,s.subtypeField);const y=s.sublayers.map(I=>{var $;return Promise.all([($=I.renderer)==null?void 0:$.collectRequiredFields(u,i),Q(u,I)])});await Promise.allSettled(y)}for(const y of h)y.status==="rejected"&&R.error(y.reason);E(u,i,a),e&&"displayField"in s&&s.displayField&&E(u,i,s.displayField);const m=Array.from(u).sort();this._set("requiredFields",m)}validateFetchPopupFeatures(e){if(e==null)return null;for(const s of e.clientGraphics??[]){const i=s.layer;if("popupEnabled"in i&&!i.popupEnabled)return new _("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if(s.isAggregate){const a="featureReduction"in i?i.featureReduction:null;if(!(a&&"popupTemplate"in a&&a.popupEnabled&&a.popupTemplate))return new _("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i&&!O(i,e))return new _("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}async fetchClientPopupFeatures(e){const s=e!=null?e.clientGraphics:null;if(!s||s.length===0)return[];const i=new Array(s.length),a=new Map,p=await this.createPopupQuery(e);for(let n=0;n<s.length;n++){const c=s[n];if(c.isAggregate){i[n]=c;continue}const u=c.layer;if(!("popupEnabled"in u))continue;const h=V(this.layer.fieldsIndex,p.outFields),m=O(u,e);if(m==null)continue;const y=await this._loadArcadeModules(m);y&&y.arcadeUtils.hasGeometryOperations(m)||!te(h,c)?a.set(c.getObjectId(),{graphic:c,index:n}):i[n]=c}if(this.layer.type==="stream"||a.size===0)return i.filter(Boolean);p.objectIds=Array.from(a.keys());try{const n=await this.layer.queryFeatures(p);for(const c of n.features){const{graphic:{geometry:u},index:h}=a.get(c.getObjectId());c.geometry||(c.geometry=u),i[h]=c}}catch{}return i.filter(Boolean)}async createPopupQuery(e){const s=this.layer.createQuery(),i=new Set;let a=!1;const p=e!=null&&e.clientGraphics?e.clientGraphics.map(n=>n.layer):[this.layer];for(const n of p){if(!("popupEnabled"in n))continue;const c=O(n,e);if(c==null)continue;const u=await this._loadArcadeModules(c),h=u&&u.arcadeUtils.hasGeometryOperations(c);a=!(this.layer.geometryType!=="point"&&!h);const m=await me(this.layer,c);for(const y of m)i.add(y)}if(s.returnGeometry=a,s.returnZ=a,s.returnM=a,s.outFields=Array.from(i),s.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const n=Z(this);n!=null&&(s.where=s.where?`(${s.where}) AND (${n})`:n)}return s}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}};return o([l()],r.prototype,"_updatingRequiredFieldsPromise",void 0),o([l({readOnly:!0})],r.prototype,"availableFields",null),o([l({readOnly:!0})],r.prototype,"dataUpdating",void 0),o([l({type:he})],r.prototype,"featureEffect",null),o([l({type:ye})],r.prototype,"filter",void 0),o([l(de)],r.prototype,"timeExtent",void 0),o([l()],r.prototype,"layer",void 0),o([l({type:Number})],r.prototype,"maximumNumberOfFeatures",null),o([l({readOnly:!0,type:Boolean})],r.prototype,"maximumNumberOfFeaturesExceeded",null),o([l({readOnly:!0})],r.prototype,"requiredFields",void 0),o([l()],r.prototype,"suspended",void 0),o([l()],r.prototype,"view",void 0),r=o([g(B)],r),r};let d=class extends ge(oe(ve(le(fe)))){constructor(t){super(t),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.addHandles(C(()=>this._updatingRequiredFieldsPromise,t=>this._updatingHandles.addPromise(t),P))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=M(this._fetcherContext)}get maximumNumberOfFeatures(){var t;return((t=this.controller)==null?void 0:t.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(t){this._set("maximumNumberOfFeatures",t),this.controller&&(this.controller.maximumNumberOfFeatures=t)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,s;let t=0;if((e=this.controller)!=null&&e.updating){const i=this.controller.updatingRemaining,a=Math.max(this.controller.updatingTotal,this._controllerTotal);a>0&&(t=(a-i)/a,this._controllerTotal=a)}let r=0;if((s=this.processor)!=null&&s.updating){const i=this.processor.updatingRemaining,a=Math.max(i,this._processorTotal);a>0&&(r=(a-i)/a,this._processorTotal=a)}return .5*(t+r)}get updatePolicy(){if(!this.controller)return b.ASYNC;switch(this.controller.mode){case"snapshot":{const t=qe.get(this.layer.geometryType);return t==null||this.controller.serviceDataCount>t?b.ASYNC:b.SYNC}case"tiles":return b.ASYNC}}get hasZ(){const t=this.layer,r=t.capabilities&&t.capabilities.data;return!(!r||!r.supportsZ)&&("returnZ"in t&&t.returnZ!=null?t.returnZ:r.supportsZ)}get hasM(){const t=this.layer,r=t.capabilities&&t.capabilities.data;return!(!r||!r.supportsM)&&"returnM"in t&&t.returnM!=null&&t.returnM}setVisibility(t,r){var e;(e=this.processor)==null||e.setObjectIdVisibility(t,r)}createQuery(){return super.createQuery()}queryFeatures(t,r){const e=()=>super.queryFeatures(t,r);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(t),e):e()}beforeSetController(t){t.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new xe({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const t=new ne({layerView:this,context:this._fetcherContext,graphics:new pe,extent:this.clippingExtent});return this._updatingHandles.add(()=>t.serviceDataExtent,r=>{this.processor&&(this.processor.dataExtent=r)},A),this.addHandles(C(()=>this.suspended,r=>{r?t.suspend():t.resume()},P)),this._updatingHandles.add(()=>{var r;return(r=this.processor)==null?void 0:r.displayFeatureLimit},r=>t.displayFeatureLimit=r,A),this.addHandles(re(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),t}async doRefresh(t){t&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.refreshFilter()}get usedMemory(){var t,r;return(((t=this.processor)==null?void 0:t.usedMemory)??0)+(((r=this.controller)==null?void 0:r.memoryForUnusedFeatures)??0)}get unloadedMemory(){var i,a,p,n;const t=((i=this.processor)==null?void 0:i.unprocessedMemoryEstimate)??0,r=((a=this.controller)==null?void 0:a.expectedFeatureDiff)??0,e=((p=this.processor)==null?void 0:p.loadedFeatures)??0,s=e+r>0?e/(e+r):1;return t+r*(((n=this.processor)==null?void 0:n.usedMemoryPerFeature)??0)*s}get ignoresMemoryFactor(){var t;return(t=this.controller)==null?void 0:t.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(t,r){await this._validateQueryFeaturesMesh(t);const e=await r();if(t!=null&&t.outStatistics||this.graphics3DProcessor==null)return e;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,a=[];for(const p of e.features)if(p.geometry){const n=i.get(p.attributes[s]);n&&(p.geometry=se(n.graphic.geometry),a.push(p))}else a.push(p);return e.features=a,e}async _validateQueryFeaturesMesh(t){if(!t)return;const r=s=>{throw new _("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},e=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of e)t[s]!=null&&r(s);"returnM"in t&&t.returnM&&r("returnM"),"returnCentroid"in t&&t.returnCentroid&&r("returnCentroid"),t.outSpatialReference==null||t.outSpatialReference.equals(this.view.spatialReference)||r("outSpatialReference")}get performanceInfo(){var s,i,a,p;const t=(s=this.controller)==null?void 0:s.displayFeatureLimit,r=t!=null?t.averageSymbolComplexity:void 0,e=r!=null?`f:${r.verticesPerFeature},v:${r.verticesPerCoordinate}`:"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:((i=this.controller)==null?void 0:i.mode)??"n/a",symbolComplexity:e,nodes:((a=this.controller)==null?void 0:a.tileDescriptors.length)??0,...((p=this.controller)==null?void 0:p.performanceInfo)??{storedFeatures:0,totalVertices:0}}}get test(){var t;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:(t=this.controller)==null?void 0:t.graphics}}};o([l()],d.prototype,"layer",void 0),o([l()],d.prototype,"controller",void 0),o([l()],d.prototype,"_controllerTotal",void 0),o([l()],d.prototype,"_processorTotal",void 0),o([l()],d.prototype,"maximumNumberOfFeatures",null),o([l()],d.prototype,"maximumNumberOfFeaturesExceeded",null),o([l(ie)],d.prototype,"updatingProgress",void 0),o([l({readOnly:!0})],d.prototype,"updatingProgressValue",null),o([l({readOnly:!0})],d.prototype,"updatePolicy",null),o([l({readOnly:!0})],d.prototype,"hasZ",null),o([l({readOnly:!0})],d.prototype,"hasM",null),o([l()],d.prototype,"suspendResumeExtentMode",void 0),d=o([g("esri.views.3d.layers.FeatureLayerViewBase3D")],d);const qe=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),je=d;export{je as _};
