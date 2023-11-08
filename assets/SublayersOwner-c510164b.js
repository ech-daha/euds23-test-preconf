import{ah as s,ai as n,cD as g,bq as z,b2 as Y,ak as k,bI as ee,ca as J,dg as u,dz as Q,bG as $,cc as W,c1 as te,al as re,aq as S,k2 as ie,cA as ae,k3 as se,b7 as E,cw as le,au as U,ef as oe,bB as P,aF as ne,cy as F,dQ as pe,fa as R,cE as ye,fr as V,cv as w,cW as ue,fL as G,fu as de,dt as L,hi as ce,b9 as fe,av as he,aw as be,iI as me}from"./index-d3195b17.js";import{I as ge,y as Se}from"./commonProperties-90280f28.js";import{c as H}from"./portalItemUtils-859fdbc0.js";import"./UniqueValueRenderer-9d6d8506.js";import{m as Ie,u as ve}from"./jsonUtils-7c9a64a6.js";import{m as we}from"./MultiOriginJSONSupport-9c569f95.js";import{x as Ee}from"./QueryTask-4961029b.js";import{n as Le}from"./FeatureType-16cea36d.js";import{Z as xe}from"./FieldsIndex-a5446f2b.js";import{C as Oe}from"./LabelClass-e4e56038.js";import{c as Te}from"./labelingInfo-0364027f.js";import{p as De}from"./LayerFloorInfo-ce13956b.js";import{a as Fe}from"./serviceCapabilitiesUtils-9fb1a794.js";import{c as q,b as _e,K}from"./Query-f1607220.js";import{c as Pe}from"./AttachmentQuery-e6115c82.js";import{p as Ae}from"./popupUtils-410f0696.js";import{o as Ve}from"./sublayerUtils-d9ee91a7.js";const et=r=>{let e=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(t,i){const a=i.capabilities&&i.capabilities.split(",").map(Z=>Z.toLowerCase().trim());if(!a)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,p=l!=="tile"&&!!i.supportsDynamicLayers,y=a.includes("query"),d=a.includes("map"),c=!!i.exportTilesAllowed,b=a.includes("tilemap"),I=a.includes("data"),x=l!=="tile"&&(!i.tileInfo||p),O=l!=="tile"&&(!i.tileInfo||p),f=l!=="tile",h=i.cimVersion&&ee.parse(i.cimVersion),T=(h==null?void 0:h.since(1,4))??!1,D=(h==null?void 0:h.since(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:c,supportsIdentify:y,supportsQuery:I,supportsTileMap:b},exportMap:d?{supportsArcadeExpressionForLabeling:T,supportsSublayersChanges:f,supportsDynamicLayers:p,supportsSublayerVisibility:x,supportsSublayerDefinitionExpression:O,supportsCIMSymbols:D}:null,exportTiles:c?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let a=i.currentVersion;return a||(a=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),a}async fetchRelatedService(t){const i=this.portalItem;if(!i||!H(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},t).then(l=>l.find(p=>p.type==="Feature Service")??null,()=>null));const a=await this._relatedFeatureServicePromise;return J(t),a?{itemId:a.id,url:a.url}:null}async fetchSublayerInfo(t,i){var y;const{source:a}=t;if(this!=null&&this.portalItem&&this.type==="tile"&&(a==null?void 0:a.type)==="map-layer"&&H(this.portalItem)&&t.originIdOf("url")<u.SERVICE){const d=await this.fetchRelatedService(i);d&&(t.url=Q(d.url,a.mapLayerId.toString()),t.layerItemId=d.itemId)}const{url:l}=t;let p;if(a.type==="data-layer")p=(await $(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&t.originIdOf("url")>u.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(l),c=((y=W(l))==null?void 0:y.sublayer)??a.mapLayerId;p=d.get(c)}catch{}else{let d=t.id;(a==null?void 0:a.type)==="map-layer"&&(d=a.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return p}async fetchAllLayersAndTables(t){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,t)}async _fetchAllLayersAndTablesFromService(t,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const a=W(t),l=te(this._allLayersAndTablesMap,a==null?void 0:a.url.path,()=>$(Q(a==null?void 0:a.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const d=new Map;for(const c of y.data.layers)d.set(c.id,c);return{result:d}},y=>({error:y}))),p=await l;if(J(i),"result"in p)return p.result;throw p.error}};return s([n({readOnly:!0})],e.prototype,"capabilities",void 0),s([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),s([n({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),s([n({type:z})],e.prototype,"fullExtent",void 0),s([n(ge)],e.prototype,"id",void 0),s([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),s([n(Se)],e.prototype,"popupEnabled",void 0),s([n({type:Y})],e.prototype,"spatialReference",void 0),s([n({readOnly:!0})],e.prototype,"version",void 0),s([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=s([k("esri.layers.mixins.ArcGISMapService")],e),e};var A;function M(r){return r!=null&&r.type==="esriSMS"}function j(r,e,t){var a;const i=this.originIdOf(e)>=L(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((a=t.layer)==null?void 0:a.type)==="map-image"&&(t.writeSublayerStructure||i)}}function C(r,e,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&(t.origin&&this.originIdOf(e)>=L(t.origin)||this._isOverridden(e))}}function m(r,e,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function _(r,e,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(e)>=L(t.origin))}}let Me=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let o=A=class extends we(re(ce)){constructor(r){super(r),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(r){return this.addResolvingPromise((async()=>{const{layer:e,url:t}=this;if(!e&&!t)throw new S("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=e?await e.fetchSublayerInfo(this,r):(await $(t,{responseType:"json",query:{f:"json"},...r})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(r,e){e=e.layerDefinition||e;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:a},data:{supportsAttachment:l}}=Fe(e,this.url);return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:l},query:{supportsFormatPBF:a}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get effectiveScaleRange(){const{minScale:r,maxScale:e}=this;return{minScale:r,maxScale:e}}readMaxScaleRange(r,e){return{minScale:(e=e.layerDefinition||e).minScale??0,maxScale:e.maxScale??0}}get fieldsIndex(){return new xe(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??Me++}set id(r){var e,t,i;this._get("id")!==r&&(((i=(t=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:t.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,e,t,i){r&&r.length&&(e.layerDefinition={drawingInfo:{labelingInfo:r.map(a=>a.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){this._set("layer",r),this.sublayers&&this.sublayers.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,e){var t;return e.minScale||((t=e.layerDefinition)==null?void 0:t.minScale)||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,e){var t;return e.maxScale||((t=e.layerDefinition)==null?void 0:t.maxScale)||0}readObjectIdFieldFromService(r,e){if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,e){var i;const t=e.layerDefinition;return 1-.01*(((t==null?void 0:t.transparency)!=null?t.transparency:(i=t==null?void 0:t.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(r,e,t,i){e.layerDefinition={drawingInfo:{transparency:100-100*r}}}writeParent(r,e){this.parent&&this.parent!==this.layer?e.parentLayerId=ie(this.parent.id):e.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{spatialReference:r}=this.layer,e="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:i}=this,a=ae("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF),l=((p=t==null?void 0:t.operations)==null?void 0:p.supportsQueryAttachments)??!1;return new Ee({url:this.url,pbfSupported:a,fieldsIndex:i,gdbVersion:e,sourceSpatialReference:r,queryAttachmentsSupported:l})}set renderer(r){if(r){for(const e of r.getSymbols())if(se(e)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new q({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return le(U.ofType(A),r)}writeSublayers(r,e,t){var i;(i=this.sublayers)!=null&&i.length&&(e[t]=this.sublayers.map(a=>a.id).toArray().reverse())}readTitle(r,e){var t;return((t=e.layerDefinition)==null?void 0:t.name)??e.name}readTypeIdField(r,e){let t=(e=e.layerDefinition||e).typeIdField;if(t&&e.fields){t=t.toLowerCase();const i=e.fields.find(a=>a.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const r=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!r)return null;if(this._lastParsedUrl=r,(e==null?void 0:e.type)==="map-layer")return`${r.path}/${e.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${oe(t)}`}set url(r){this._overrideIfSome("url",r)}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,e,t,i){e[t]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=P(this),e=new A;return P(e).store=r.clone(v),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(r){return Ae(this,r)}createQuery(){return new _e({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var a;if(this.hasOwnProperty("sublayers"))return null;const r=(await ne(()=>import("./FeatureLayer-9d9dc92b.js"),["assets/FeatureLayer-9d9dc92b.js","assets/index-d3195b17.js","assets/index-8ff8146e.css","assets/UniqueValueRenderer-9d6d8506.js","assets/ColorStop-c5e9d853.js","assets/diffUtils-b5203f5e.js","assets/colorRamps-86452aa8.js","assets/jsonUtils-7c9a64a6.js","assets/DictionaryLoader-64b435d8.js","assets/FieldsIndex-a5446f2b.js","assets/UnknownTimeZone-03c4b711.js","assets/heatmapUtils-7081b352.js","assets/MultiOriginJSONSupport-9c569f95.js","assets/FeatureLayerBase-7e08d69e.js","assets/commonProperties-90280f28.js","assets/ElevationInfo-a4c4c4eb.js","assets/featureLayerUtils-cd670376.js","assets/featureQueryAll-14a16abc.js","assets/Query-f1607220.js","assets/AttachmentQuery-e6115c82.js","assets/RelationshipQuery-4dd9c00d.js","assets/LayerFloorInfo-ce13956b.js","assets/serviceCapabilitiesUtils-9fb1a794.js","assets/editsZScale-9375ef27.js","assets/queryZScale-130e9ed5.js","assets/FeatureSet-f7a1380d.js","assets/APIKeyMixin-0a457011.js","assets/ArcGISService-797262a1.js","assets/BlendLayer-c5b75f55.js","assets/jsonUtils-b73a148b.js","assets/CustomParametersMixin-26e67f7d.js","assets/EditBusLayer-2e5cb13a.js","assets/FeatureEffectLayer-cdff10fa.js","assets/FeatureEffect-3c293895.js","assets/FeatureFilter-dc6e76e7.js","assets/FeatureReductionLayer-5568b414.js","assets/FeatureReductionSelection-032b9aed.js","assets/LabelClass-e4e56038.js","assets/defaults-01cfa0fb.js","assets/defaultsJSON-59981e75.js","assets/MD5-715f37cd.js","assets/OperationalLayer-f6884624.js","assets/OrderedLayer-64155c3a.js","assets/PortalLayer-e38eb8f2.js","assets/portalItemUtils-859fdbc0.js","assets/ScaleRangeLayer-8e8ce7ef.js","assets/TemporalLayer-2d2fe295.js","assets/FeatureTemplate-a5bbc341.js","assets/FeatureType-16cea36d.js","assets/fieldProperties-a11e9ef9.js","assets/labelingInfo-0364027f.js","assets/versionUtils-a0e52a88.js","assets/styleUtils-6d92eebb.js","assets/TopFeaturesQuery-271d35f7.js","assets/popupUtils-410f0696.js","assets/interfaces-f1f22245.js"])).default,{layer:e,url:t}=this;let i;if(t&&this.originIdOf("url")>u.SERVICE)i=new r({url:t});else{if(!(e!=null&&e.parsedUrl))throw new S("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const l=e.parsedUrl;i=new r({url:l.path}),l&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(e==null?void 0:e.refreshInterval)!=null&&(i.refreshInterval=e.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=F(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=F(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=F(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=F(this.renderer)),((a=this.source)==null?void 0:a.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),i}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){const{typeIdField:e,types:t}=this;if(!e||!r)return null;const i=r.attributes?r.attributes[e]:void 0;if(i==null)return null;let a=null;return t==null||t.some(l=>{const{id:p}=l;return p!=null&&(p.toString()===i.toString()&&(a=l),!!a)}),a}getFieldDomain(r,e){const t=e==null?void 0:e.feature,i=this.getFeatureType(t);if(i){const a=i.domains&&i.domains[r];if(a&&a.type!=="inherited")return a}return this._getLayerDomain(r)}async queryAttachments(r,e){var b,I;await this.load(),r=Pe.from(r);const t=this.capabilities;if(!((b=t==null?void 0:t.data)!=null&&b.supportsAttachment))throw new S("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:a,globalIds:l,num:p,size:y,start:d,where:c}=r;if(!((I=t==null?void 0:t.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(y==null?void 0:y.length)>0||p||d||c))throw new S("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);if(!(a!=null&&a.length||l!=null&&l.length||c))throw new S("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);return this.queryTask.executeAttachmentQuery(r,e)}async queryFeatures(r=this.createQuery(),e){var i,a;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new S("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new S("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(r,{...e,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(a=this.layer)==null?void 0:a.apiKey}});if(t!=null&&t.features)for(const l of t.features)l.sourceLayer=this;return t}toExportImageJSON(r){var l,p;const e={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=pe(r,this.definitionExpression);t!=null&&(e.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((y,d)=>(y[d]=this.originIdOf(d),y),{});if(Object.keys(i).some(y=>i[y]>u.SERVICE)){const y=e.drawingInfo={};if(i.renderer>u.SERVICE&&(y.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(y.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&((p=this.labelingInfo)!=null&&p.some(c=>!c.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=Te(this.labelingInfo,R.toJSON(this.geometryType))),y.showLabels=!0,y.labelingInfo=d.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer}))}else y.showLabels=!1;i.opacity>u.SERVICE&&(y.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(y.renderer)}return e}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,e=>{var t;e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||((t=e.outline)!=null&&t.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,e){if(r){const t=("uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:null)??[];for(const i of t)M(i.symbol)&&e(i.symbol);"symbol"in r&&M(r.symbol)&&e(r.symbol),"defaultSymbol"in r&&M(r.defaultSymbol)&&e(r.defaultSymbol)}}_setAndNotifyLayer(r,e){var y,d,c,b;const t=this.layer,i=this._get(r);let a,l;switch(r){case"definitionExpression":case"floorInfo":a="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":a="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":a="supportsDynamicLayers",l="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(a&&((c=(d=(y=this.layer)==null?void 0:y.capabilities)==null?void 0:d.exportMap)==null?void 0:c[a])===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${a}'`);if(l&&((b=this.capabilities)==null?void 0:b.exportMap[l])===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${l}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,e),p!=="service"&&i!==e&&t&&t.emit&&t.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,e){e&&(e.forEach(t=>{t.parent=null,t.layer=null}),this.removeAllHandles()),r&&(r.forEach(t=>{t.parent=this,t.layer=this.layer}),this.addHandles([r.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),r.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),r.on("before-changes",t=>{var a,l,p;const i=(p=(l=(a=this.layer)==null?void 0:a.capabilities)==null?void 0:l.exportMap)==null?void 0:p.supportsSublayersChanges;i==null||i||(E.getLogger(this).error(new S("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(r,e){const{layer:t,declaredClass:i}=this;E.getLogger(i).error(new S("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${t==null?void 0:t.id}'`,{reason:e,sublayer:this,layer:t}))}_getLayerDomain(r){const e=this.fieldsIndex.get(r);return e?e.domain:null}};o.test={isMapImageLayerOverridePolicy:r=>r===m||r===j,isTileImageLayerOverridePolicy:r=>r===C},s([n({readOnly:!0})],o.prototype,"capabilities",void 0),s([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),s([n()],o.prototype,"defaultPopupTemplate",null),s([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],o.prototype,"definitionExpression",null),s([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),s([g("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),s([n({type:[ye],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),s([n({readOnly:!0})],o.prototype,"fieldsIndex",null),s([n({type:De,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),s([n({type:z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),s([n({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],o.prototype,"geometryType",void 0),s([n({type:String})],o.prototype,"globalIdField",void 0),s([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),s([n({type:V,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),s([n({value:null,type:[Oe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:m}}})],o.prototype,"labelingInfo",null),s([w("labelingInfo")],o.prototype,"writeLabelingInfo",null),s([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:m}}})],o.prototype,"labelsVisible",null),s([n({value:null})],o.prototype,"layer",null),s([n({type:String,json:{write:{overridePolicy:C}}})],o.prototype,"layerItemId",void 0),s([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:_}}})],o.prototype,"legendEnabled",void 0),s([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),s([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"minScale",null),s([g("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),s([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"maxScale",null),s([g("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),s([n({type:String})],o.prototype,"objectIdField",void 0),s([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),s([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:m}}})],o.prototype,"opacity",null),s([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),s([w("opacity")],o.prototype,"writeOpacity",null),s([n({json:{type:V,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:m}}})],o.prototype,"parent",void 0),s([w("parent")],o.prototype,"writeParent",null),s([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:_,writer(r,e,t){e[t]=!r}}}})],o.prototype,"popupEnabled",void 0),s([n({type:ue,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:_}}})],o.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],o.prototype,"queryTask",null),s([n({types:Ie,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m},origins:{"web-scene":{types:ve,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m}}}}})],o.prototype,"renderer",null),s([n({types:{key:"type",base:null,typeMap:{"data-layer":K,"map-layer":q}},cast(r){if(r){if("mapLayerId"in r)return G(q,r);if("dataSource"in r)return G(K,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:m}}})],o.prototype,"source",null),s([n()],o.prototype,"sourceJSON",void 0),s([n({value:null,json:{type:[V],write:{target:"subLayerIds",allowNull:!0,overridePolicy:m}}})],o.prototype,"sublayers",null),s([de("sublayers")],o.prototype,"castSublayers",null),s([w("sublayers")],o.prototype,"writeSublayers",null),s([n({type:String,json:{name:"name",write:{overridePolicy:_}}})],o.prototype,"title",void 0),s([g("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),s([n({type:String})],o.prototype,"typeIdField",void 0),s([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),s([g("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),s([n({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),s([n({type:String,json:{name:"layerUrl",write:{overridePolicy:C}}})],o.prototype,"url",null),s([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:m}}})],o.prototype,"visible",null),s([w("visible")],o.prototype,"writeVisible",null),o=A=s([k("esri.layers.support.Sublayer")],o);const B=o,je=E.getLogger("esri.layers.TileLayer");function Ce(r,e){const t=[],i={};return r&&r.forEach(a=>{const l=new B;if(l.read(a,e),i[l.id]=l,a.parentLayerId!=null&&a.parentLayerId!==-1){const p=i[a.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(l)}else t.unshift(l)}),t}const N=U.ofType(B);function X(r,e){r&&r.forEach(t=>{e(t),t.sublayers&&t.sublayers.length&&X(t.sublayers,e)})}const tt=r=>{let e=class extends r{constructor(...t){super(...t),this.allSublayers=new fe({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.addHandles(he(()=>this.sublayers,(i,a)=>this._handleSublayersChange(i,a),be))}destroy(){this.allSublayers.destroy()}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:a}=this,l=L(i.origin);if(l<u.SERVICE||(a[l]={context:i,visibleLayers:t.visibleLayers||a[l].visibleLayers,layers:t.layers||a[l].layers},l>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:y}=this.createSublayersForOrigin("web-document"),d=P(this);d.setDefaultOrigin(y),this._set("sublayers",new N(p)),d.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=L(t==="web-document"?"web-map":t);let a=u.SERVICE,l=this.sublayersSourceJSON[u.SERVICE].layers,p=this.sublayersSourceJSON[u.SERVICE].context,y=null;const d=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(f=>f<=i);for(const f of d){const h=this.sublayersSourceJSON[f];Ve(h.layers)&&(a=f,l=h.layers,p=h.context,h.visibleLayers&&(y={visibleLayers:h.visibleLayers,context:h.context}))}const c=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(f=>f>a&&f<=i);let b=null;for(const f of c){const{layers:h,visibleLayers:T,context:D}=this.sublayersSourceJSON[f];h&&(b={layers:h,context:D}),T&&(y={visibleLayers:T,context:D})}const I=Ce(l,p),x=new Map,O=new Set;if(b)for(const f of b.layers)x.set(f.id,f);if(y!=null&&y.visibleLayers)for(const f of y.visibleLayers)O.add(f);return X(I,f=>{b&&f.read(x.get(f.id),b.context),y&&f.read({defaultVisibility:O.has(f.id)},y.context)}),{origin:me(a),sublayers:new N({items:I})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(a=>{a.parent=null,a.layer=null}),this.removeHandles("sublayers-owner")),t&&(t.forEach(a=>{a.parent=this,a.layer=this}),this.addHandles([t.on("after-add",({item:a})=>{a.parent=this,a.layer=this}),t.on("after-remove",({item:a})=>{a.parent=null,a.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(t.on("before-changes",a=>{je.error(new S("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),a.preventDefault()}),"sublayers-owner"))}};return s([n({readOnly:!0})],e.prototype,"allSublayers",void 0),s([n({readOnly:!0,type:U.ofType(B)})],e.prototype,"serviceSublayers",void 0),s([n({value:null,type:N,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),s([n({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),e=s([k("esri.layers.mixins.SublayersOwner")],e),e};export{tt as E,B as X,et as f};
