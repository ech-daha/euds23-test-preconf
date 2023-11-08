import{hi as H,de as U,aq as f,bq as B,aj as K,fV as X,cA as Y,b7 as S,il as L,ah as o,ki as ee,az as R,cw as te,ai as n,ak as E,au as q,ao as ie,fk as re,cT as se,b2 as oe,aH as ae,cf as ne,d5 as I,el as le,dz as P,i8 as x,i4 as ue,cc as pe,i5 as de,fQ as ye,aF as G,dQ as ce,bG as he,i9 as me,cD as y,kj as fe,cv as $,gn as A,cy as D,cW as ge,fu as be,bd as we,kk as ve}from"./index-f98984bd.js";import"./UniqueValueRenderer-0ba6f39b.js";import{o as _e,m as Fe,u as Te}from"./jsonUtils-3fd42b6a.js";import{m as Se}from"./MultiOriginJSONSupport-07371992.js";import{D as Ie,y as Ee}from"./FeatureLayerBase-5df3ecf3.js";import{i as $e}from"./editsZScale-979e1a3c.js";import{t as N}from"./queryZScale-8a8c1736.js";import{d as V}from"./FeatureSet-92899ce5.js";import{i as De}from"./APIKeyMixin-565e8950.js";import{l as je}from"./ArcGISService-feefb171.js";import{a as Oe}from"./BlendLayer-f3dfe804.js";import{o as Ce}from"./CustomParametersMixin-07b75f5b.js";import{F as qe}from"./EditBusLayer-f09d109d.js";import{p as Me}from"./FeatureEffectLayer-aeb4266c.js";import{c as Le}from"./FeatureReductionLayer-e7965b59.js";import{u as Re}from"./OperationalLayer-86d30f51.js";import{c as Pe}from"./OrderedLayer-57ea10ed.js";import{j as xe}from"./PortalLayer-5687d519.js";import{t as Ge}from"./ScaleRangeLayer-b9e2a44e.js";import{a as Ae,d as Ne}from"./TemporalLayer-820083a2.js";import{I as Je,m as ke,b as Ve,c as Qe,C as We,y as ze,p as Ze}from"./commonProperties-cf103846.js";import{Q as He,T as Ue,R as Be,M as Ke,D as Xe,m as Ye,w as et,b as tt,g as it,x as rt,j as st,I as ot,q as at,F as nt,A as lt,O as ut,P as pt,E as dt,S as yt,f as J}from"./featureLayerUtils-c1c8e799.js";import{p as Q}from"./FeatureTemplate-42477554.js";import{n as W}from"./FeatureType-edefebf7.js";import{s as ct}from"./fieldProperties-bd7f7c74.js";import{C as ht}from"./LabelClass-ab553abc.js";import{i as j}from"./labelingInfo-d628b28b.js";import{a as mt}from"./serviceCapabilitiesUtils-8b449217.js";import{e as ft}from"./versionUtils-c696d155.js";import{b as gt,K as bt}from"./Query-1e9b8ba4.js";import{t as wt}from"./styleUtils-f115952f.js";import{S as _}from"./TopFeaturesQuery-7aa01666.js";import{p as vt}from"./popupUtils-7ec270f8.js";import{A as F}from"./interfaces-f1f22245.js";import"./ColorStop-ab19399c.js";import"./diffUtils-543f87e1.js";import"./colorRamps-c32ea79a.js";import"./DictionaryLoader-2818156e.js";import"./FieldsIndex-c41cf585.js";import"./UnknownTimeZone-84b675dd.js";import"./heatmapUtils-887124d2.js";import"./LayerFloorInfo-874b7061.js";import"./jsonUtils-4b7f2e2a.js";import"./FeatureEffect-a9ab10be.js";import"./FeatureFilter-c5e02129.js";import"./FeatureReductionSelection-347fa0d6.js";import"./MD5-715f37cd.js";import"./portalItemUtils-0786d38f.js";import"./ElevationInfo-bdf2211b.js";import"./featureQueryAll-e839fed5.js";import"./AttachmentQuery-cce46b40.js";import"./RelationshipQuery-1de976d9.js";import"./defaults-b79344d9.js";import"./defaultsJSON-59981e75.js";let _t=0,g=class extends H.LoadableMixin(U(q)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);N(e,this.layer.spatialReference,i);const r=V.fromJSON(i);if(!this._requiresClientGraphicMapping())return r;const s=this.layer.objectIdField;for(const l of r.features){const u=l.attributes[s],c=this._idToClientGraphic.get(u);c&&(l.geometry=c.geometry)}return r.geometryType=this.layer.geometryType,r}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new f("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return N(e,this.layer.spatialReference,i),i}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:B.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new f("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let i=null;const r=[],s=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=p=>"objectId"in p&&p.objectId!=null?p.objectId:"attributes"in p&&p.attributes[t]!=null?p.attributes[t]:null;if(e.addFeatures&&(i=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const p of e.deleteFeatures){const m=l(p);m!=null&&r.push(m)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const p of e.updateFeatures)if(s.push(this._serializeFeature(p)),u){const m=l(p);m!=null&&u.set(m,p)}}$e(i?i.features:null,s,this.layer.spatialReference);const{fullExtent:c,featureEditResults:d}=await this._connection.invoke("applyEdits",{adds:i?i.features:[],updates:s,deletes:r});return this.fullExtent=c,i&&i.finish(d.uidToObjectId),this._updateClientGraphicIds(u,d),this._createEditsResult(d)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const i=[];for(const{geometry:r}of e)r==null||r.type!=="mesh"||r.hasExtent||r.loaded||i.push(r.load({signal:t}));i.length&&await Promise.all(i)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const i of t.updateResults){if(!i.success)continue;const r=e.get(i.objectId);r!=null&&this._addIdToClientGraphic(r)}for(const i of t.deleteResults)i.success&&this._idToClientGraphic.delete(i.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,i=new Array(e.length);let r=null;for(let l=0;l<e.length;l++){const u=e[l],c=this._serializeFeature(u);r||u.geometry==null||(r=u.geometry.type),i[l]=c,t.set(`${c.uid}`,u)}const s=this;return{features:i,inferredGeometryType:r,finish(l){const u=s.sourceJSON.objectIdField;for(const c in l){const d=l[c],p=t.get(c);p&&(p.attributes||(p.attributes={}),d===-1?delete p.attributes[u]:p.attributes[u]=d,s._addIdToClientGraphic(p))}}}}_addIdToClientGraphic(e){var r;if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,i=(r=e.attributes)==null?void 0:r[t];i!=null&&this._idToClientGraphic.set(i,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e),r=(_t++).toString();return i?{uid:r,geometry:i.toJSON(),attributes:t}:{uid:r,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?K.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await X("MemorySourceWorker",{strategy:Y("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:i,objectIdField:r,hasM:s,hasZ:l,timeInfo:u,dateFieldsTimeZone:c}=this.layer,d=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const p=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",w=>{S.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const m={features:p.features,fields:t==null?void 0:t.map(w=>w.toJSON()),geometryType:L.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&s,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:r,spatialReference:d?null:i&&i.toJSON(),timeInfo:(u==null?void 0:u.toJSON())??null,dateFieldsTimeZone:c},b=await this._connection.invoke("load",m,{signal:e});for(const w of b.warnings)S.getLogger(this.layer).warn("#load()",`${w.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:w});b.featureErrors.length&&S.getLogger(this.layer).warn("#load()",`Encountered ${b.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:b.featureErrors});const M=b.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(p.inferredGeometryType)&&(M.geometryType=L.toJSON(p.inferredGeometryType)),this.sourceJSON=M,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),p.finish(b.assignedObjectIds)}};o([ee({Type:R,ensureType:te(R)})],g.prototype,"itemType",void 0),o([n()],g.prototype,"type",void 0),o([n({constructOnly:!0})],g.prototype,"layer",void 0),o([n({readOnly:!0})],g.prototype,"_workerGeometryType",null),o([n()],g.prototype,"sourceJSON",void 0),g=o([E("esri.layers.graphics.sources.MemorySource")],g);let v=class extends ie{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};o([n()],v.prototype,"updating",void 0),o([n()],v.prototype,"status",void 0),v=o([E("esri.layers.support.PublishingInfo")],v);const Ft=v,z="esri.layers.mixins.PublishableLayer",Tt=Symbol(z),St=e=>{var t;let i=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const r=this._get("publishingInfo");if(r)return r;const s=new Ft;return this._checkPublishingStatus(s),s}_checkPublishingStatus(r){let u=0;const c=async p=>{let m;r.updating=!0;try{m=await this.fetchPublishingStatus()}catch{m="unavailable"}m!=="published"&&m!=="unavailable"||(r.status==="publishing"&&this.refresh(),d.remove()),r.status=m,r.updating=!1,d.removed||(u=setTimeout(c,p,p+125))},d={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>d.remove()),c(250),this.addHandles(d)}};return t=Tt,o([n({readOnly:!0,clonable:!1})],i.prototype,"publishingInfo",null),i=o([E(z)],i),i},h="FeatureLayer",Z="esri.layers.FeatureLayer",It=S.getLogger(Z);function T(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function k(e){return e&&e instanceof q}const O=ct();function C(e,t,i){const r=!!(i!=null&&i.writeLayerSchema);return{enabled:r,ignoreOrigin:r}}let a=class extends Ie(Le(Me(St(qe(Oe(Pe(Ae(Ge(re(je(Re(xe(Se(Ce(De(se(we))))))))))))))))){constructor(...e){super(...e),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=oe.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=ae(async(t,i,r)=>{const{save:s,saveAs:l}=await G(()=>import("./featureLayerUtils-b23fa9ec.js"),["assets/featureLayerUtils-b23fa9ec.js","assets/index-f98984bd.js","assets/index-8ff8146e.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-e68272cf.js","assets/jsonContext-f8c99680.js","assets/portalItemUtils-0786d38f.js","assets/saveAPIKeyUtils-291a3b9d.js","assets/fetchService-81d1c393.js","assets/lazyLayerLoader-0d1cfee5.js"]);switch(t){case F.SAVE:return s(this,i);case F.SAVE_AS:return l(this,r,i)}})}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var r;const t=e!=null?e.signal:null;if((r=this.portalItem)!=null&&r.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(s=>this.initLayerProperties(s))),Promise.resolve(this);const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(ne).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const s=await this._fetchFirstValidLayerId(t);s!=null&&(this.layerId=s)}if(!this.url&&!this._hasMemorySource())throw new f("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>He(this,"load",e));return this.addResolvingPromise(i),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,mt(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return!(this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,i){return this._readEditingEnabled(t,!0,i)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,i,r){this._writeEditingEnabled(e,t,!0,r)}get effectiveEditingEnabled(){return Ue(this)}readIsTable(e,t){return(t=(t==null?void 0:t.layerDefinition)??t).type==="Table"||!t.geometryType}writeIsTable(e,t,i,r){r!=null&&r.writeLayerSchema&&I(i,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Be(t.layerDefinition||t)}readObjectIdField(e,t){return Ke(t.layerDefinition||t)}get parsedUrl(){const e=le(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=P(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=P(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){var s;t=t.layerDefinition||t;const r=(s=t.drawingInfo)==null?void 0:s.renderer;if(r){const l=_e(r,t,i)??void 0;return l||It.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),l}return Xe(t,i)}set source(e){const t=this._get("source");t!==e&&(k(t)&&this._resetMemorySource(t),k(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof q?new g({layer:this,items:e}):e:null}readSource(e,t){const i=V.fromJSON(t.featureSet);return new g({layer:this,items:(i==null?void 0:i.features)??[]})}readTemplates(e,t){const i=t.editFieldsInfo,r=i==null?void 0:i.creatorField,s=i==null?void 0:i.editorField;return e=e==null?void 0:e.map(l=>Q.fromJSON(l)),this._fixTemplates(e,r),this._fixTemplates(e,s),e}readTitle(e,t){var s,l,u;const i=((s=t.layerDefinition)==null?void 0:s.name)??t.name,r=t.title||((l=t.layerDefinition)==null?void 0:l.title);if(i){const c=(u=this.portalItem)==null?void 0:u.title;if(this.sublayerTitleMode==="item-title")return this.url?ue(this.url,i):i;let d=i;if(!d&&this.url){const p=pe(this.url);p!=null&&(d=p.title)}return d?(this.sublayerTitleMode==="item-title-and-service-name"&&c&&c!==d&&(d=c+" - "+d),de(d)):void 0}if(this.sublayerTitleMode==="item-title"&&r)return r}readTitleFromWebMap(e,t){var i;return t.title||((i=t.layerDefinition)==null?void 0:i.name)}readTypeIdField(e,t){let i=(t=t.layerDefinition||t).typeIdField;if(i&&t.fields){i=i.toLowerCase();const r=t.fields.find(s=>s.name.toLowerCase()===i);r&&(i=r.name)}return i}readTypes(e,t){e=(t=t.layerDefinition||t).types;const i=t.editFieldsInfo,r=i==null?void 0:i.creatorField,s=i==null?void 0:i.editorField;return e==null?void 0:e.map(l=>(l=W.fromJSON(l),this._fixTemplates(l.templates,r),this._fixTemplates(l.templates,s),l))}readVisible(e,t){var i;return((i=t.layerDefinition)==null?void 0:i.defaultVisibility)!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){return Ye(this,e,t,h)}async updateAttachment(e,t,i){return et(this,e,t,i,h)}async applyEdits(e,t){return tt(this,e,t)}async uploadAssets(e,t){return it(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return vt(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await ye(G(()=>import("./FeatureLayerSource-2fe18882.js"),["assets/FeatureLayerSource-2fe18882.js","assets/index-f98984bd.js","assets/index-8ff8146e.css","assets/External-dd4245dc.js","assets/editingSupport-99a5a134.js","assets/EditBusLayer-f09d109d.js","assets/clientSideDefaults-d458c92a.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/defaultsJSON-59981e75.js","assets/QueryTask-f385994d.js","assets/Query-1e9b8ba4.js","assets/executeForIds-a1af2364.js","assets/query-b09d79d5.js","assets/pbfQueryUtils-ba5efcd9.js","assets/pbf-48104b28.js","assets/queryZScale-8a8c1736.js","assets/executeQueryJSON-f7169fc1.js","assets/FeatureSet-92899ce5.js","assets/executeQueryPBF-f0396c8a.js","assets/featureLayerUtils-c1c8e799.js","assets/featureQueryAll-e839fed5.js","assets/jsonUtils-3fd42b6a.js","assets/UniqueValueRenderer-0ba6f39b.js","assets/ColorStop-ab19399c.js","assets/diffUtils-543f87e1.js","assets/colorRamps-c32ea79a.js","assets/DictionaryLoader-2818156e.js","assets/FieldsIndex-c41cf585.js","assets/UnknownTimeZone-84b675dd.js","assets/heatmapUtils-887124d2.js","assets/AttachmentQuery-cce46b40.js","assets/RelationshipQuery-1de976d9.js","assets/editsZScale-979e1a3c.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=rt(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,i=ce(this.definitionExpression,t);return e.where=i||"1=1",e}async deleteAttachments(e,t){return st(this,e,t,h)}async fetchRecomputedExtents(e){return ot(this,e,h)}getFeatureType(e){const{typeIdField:t,types:i}=this;if(!t||!e)return null;const r=e.attributes?e.attributes[t]:void 0;if(r==null)return null;let s=null;return i==null||i.some(l=>{const{id:u}=l;return u!=null&&(u.toString()===r.toString()&&(s=l),!!s)}),s}getFieldDomain(e,t){const i=t==null?void 0:t.feature,r=this.getFeatureType(i);if(r){const s=r.domains&&r.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return at(this,e,t,h)}async queryFeatures(e,t){const i=await this.load(),r=await i.source.queryFeatures(gt.from(e)??i.createQuery(),t);if(r!=null&&r.features)for(const s of r.features)s.layer=s.sourceLayer=i;return r}async queryObjectIds(e,t){return nt(this,e,t,h)}async queryFeatureCount(e,t){return lt(this,e,t,h)}async queryExtent(e,t){return ut(this,e,t,h)}async queryRelatedFeatures(e,t){return pt(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return dt(this,e,t,h)}async queryTopFeatures(e,t){var l;const{source:i,capabilities:r}=await this.load();if(!i.queryTopFeatures||!((l=r==null?void 0:r.query)!=null&&l.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopFeatures capability");const s=await i.queryTopFeatures(_.from(e),t);if(s!=null&&s.features)for(const u of s.features)u.layer=u.sourceLayer=this;return s}async queryTopObjectIds(e,t){const{source:i,capabilities:r}=await this.load();if(!i.queryTopObjectIds||!(r!=null&&r.query.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopObjectIds capability");return i.queryTopObjectIds(_.from(e),t)}async queryTopFeaturesExtent(e,t){var s;const{source:i,capabilities:r}=await this.load();if(!i.queryTopExtents||!((s=r==null?void 0:r.query)!=null&&s.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopExtents capability");return i.queryTopExtents(_.from(e),t)}async queryTopFeatureCount(e,t){var s;const{source:i,capabilities:r}=await this.load();if(!i.queryTopCount||!((s=r==null?void 0:r.query)!=null&&s.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryFeatureCount capability");return i.queryTopCount(_.from(e),t)}read(e,t){const i=e.featureCollection;if(i){this.resourceInfo=e;const r=i.layers;r&&r.length===1&&(super.read(r[0],t),i.showLegend!=null&&super.read({showLegend:i.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:i,layerContainerType:r,messages:s}=t;if(this.dynamicDataSource)return s==null||s.push(T(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((i==="web-map"||i==="web-scene")&&r!=="tables")return s==null||s.push(T(this,`a table source can only be written to tables, not ${r}`)),null;if(this._hasMemorySource())return s==null||s.push(T(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(i==="web-map"||i==="web-scene")&&r==="tables")return s==null||s.push(T(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new f(h,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&(((t=this.source)==null?void 0:t.type)==="memory"||ft(this,e))}async save(e){return this._debouncedSaveOperations(F.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,t,e)}_readEditingEnabled(e,t,i){var s;let r=(s=e.layerDefinition)==null?void 0:s.capabilities;return r?this._hasEditingCapability(r):(r=e.capabilities,t&&(i==null?void 0:i.origin)==="web-map"&&!this._hasMemorySource()&&r?this._hasEditingCapability(r):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,i,r){var s,l;if(!e){const u=(l=(s=this.capabilities)==null?void 0:s.operations)!=null&&l.supportsSync?"Query,Sync":"Query";I("layerDefinition.capabilities",u,t),i&&!(r!=null&&r.writeLayerSchema)&&(t.capabilities=u)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return he(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const i=t.data;if(i)return this.findFirstValidLayerId(i)})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),x(this.renderer,this.fieldsIndex),me(this.timeInfo,this.fieldsIndex),wt(this,{origin:"service"})}async hasDataChanged(){return yt(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,i;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||(i=this.fields)!=null&&i.some(r=>r.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(i=>{var s;const r=(s=i.prototype)==null?void 0:s.attributes;r&&t&&delete r[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new f("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new f("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};o([y("service","capabilities")],a.prototype,"readCapabilities",null),o([n({json:{origins:{"web-scene":{write:!1}},write:!0}})],a.prototype,"charts",void 0),o([n({readOnly:!0})],a.prototype,"createQueryVersion",null),o([n({json:{read:{source:"layerDefinition.copyrightText"}}})],a.prototype,"copyright",void 0),o([n({json:{read:{source:"layerDefinition.displayField"}}})],a.prototype,"displayField",void 0),o([n({types:fe,readOnly:!0})],a.prototype,"defaultSymbol",void 0),o([n({type:bt})],a.prototype,"dynamicDataSource",void 0),o([n({type:Boolean})],a.prototype,"editingEnabled",null),o([y(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],a.prototype,"readEditingEnabled",null),o([y("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],a.prototype,"readEditingEnabledFromWebMap",null),o([$(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabled",null),o([$("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabledToWebMap",null),o([n({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),o([n({...O.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:C}}}}})],a.prototype,"fields",void 0),o([n(O.fieldsIndex)],a.prototype,"fieldsIndex",void 0),o([n({type:Ee,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"formTemplate",void 0),o([n({json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:C,writer(e,t,i){const r=e?J.toJSON(e):null;r&&I(i,r,t)}}}},read:{source:"layerDefinition.geometryType",reader:J.read}}})],a.prototype,"geometryType",void 0),o([n({json:{read:{source:"layerDefinition.hasM"}}})],a.prototype,"hasM",void 0),o([n({json:{read:{source:"layerDefinition.hasZ"}}})],a.prototype,"hasZ",void 0),o([n(Je)],a.prototype,"id",void 0),o([n({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"infoFor3D",void 0),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],a.prototype,"isTable",void 0),o([y("service","isTable",["type","geometryType"]),y("isTable",["layerDefinition.type","layerDefinition.geometryType"])],a.prototype,"readIsTable",null),o([$("web-map","isTable")],a.prototype,"writeIsTable",null),o([n(ke)],a.prototype,"labelsVisible",void 0),o([n({type:[ht],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:j,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:j,write:{enabled:!0,layerContainerTypes:A}}},name:"layerDefinition.drawingInfo.labelingInfo",read:j,write:!0}})],a.prototype,"labelingInfo",void 0),o([n((()=>{const e=D(Ve);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,i,r){I(r,ve(t),i)}}},e})())],a.prototype,"opacity",void 0),o([n(Qe)],a.prototype,"legendEnabled",void 0),o([n({type:["show","hide"],json:(()=>{const e=D(We.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],a.prototype,"listMode",void 0),o([y("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdField",null),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:C}}}}})],a.prototype,"objectIdField",void 0),o([y("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdField",null),o([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),o([n(O.outFields)],a.prototype,"outFields",void 0),o([n({readOnly:!0})],a.prototype,"parsedUrl",null),o([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([n(ze)],a.prototype,"popupEnabled",void 0),o([n({type:ge,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),o([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),o([n({types:Fe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:Te,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:A,overridePolicy:(e,t,i)=>({ignoreOrigin:i==null?void 0:i.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,i)=>({ignoreOrigin:i==null?void 0:i.writeLayerSchema})}}})],a.prototype,"renderer",null),o([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],a.prototype,"readRenderer",null),o([n()],a.prototype,"resourceInfo",void 0),o([n((()=>{const e=D(Ze);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],a.prototype,"screenSizePerspectiveEnabled",void 0),o([n({clonable:!1})],a.prototype,"source",null),o([be("source")],a.prototype,"castSource",null),o([y("portal-item","source",["featureSet"]),y("web-map","source",["featureSet"])],a.prototype,"readSource",null),o([n({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],a.prototype,"spatialReference",void 0),o([n({type:Number})],a.prototype,"subtypeCode",void 0),o([n({type:[Q]})],a.prototype,"templates",void 0),o([y("templates",["editFieldsInfo","creatorField","editorField","templates"])],a.prototype,"readTemplates",null),o([n({type:Ne})],a.prototype,"timeInfo",void 0),o([n()],a.prototype,"title",void 0),o([y("service","title",["name"]),y("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],a.prototype,"readTitle",null),o([y("web-map","title",["layerDefinition.name","title"])],a.prototype,"readTitleFromWebMap",null),o([n({type:String})],a.prototype,"sublayerTitleMode",void 0),o([n({json:{read:!1}})],a.prototype,"type",void 0),o([n({type:String})],a.prototype,"typeIdField",void 0),o([y("service","typeIdField"),y("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),o([n({type:[W]})],a.prototype,"types",void 0),o([y("service","types",["types"]),y("types",["layerDefinition.types"])],a.prototype,"readTypes",null),o([n({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],a.prototype,"visible",void 0),o([y("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],a.prototype,"readVisible",null),a=o([E(Z)],a);const Ei=a;export{Ei as default};