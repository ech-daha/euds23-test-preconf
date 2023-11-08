import{cP as K,cT as D,al as X,cy as S,d5 as Y,b7 as ee,i8 as te,aq as m,dQ as A,dg as k,ah as i,ai as n,cv as re,cW as ie,cD as $,ak as N,hi as se,fk as ne,au as C,aH as oe,av as ae,aw as le,cf as pe,el as ue,dz as de,i4 as ye,fQ as ce,aF as P,fp as he,i9 as me,dt as x,bd as be}from"./index-d3195b17.js";import{m as Q}from"./MultiOriginJSONSupport-9c569f95.js";import{i as fe}from"./APIKeyMixin-0a457011.js";import{l as ge}from"./ArcGISService-797262a1.js";import{a as ve}from"./BlendLayer-c5b75f55.js";import{o as we}from"./CustomParametersMixin-26e67f7d.js";import{F as Se}from"./EditBusLayer-2e5cb13a.js";import{y as Fe,D as Ie}from"./FeatureLayerBase-7e08d69e.js";import{u as $e}from"./OperationalLayer-f6884624.js";import{j as Oe}from"./PortalLayer-e38eb8f2.js";import{t as Ee}from"./ScaleRangeLayer-8e8ce7ef.js";import{a as Te,d as je}from"./TemporalLayer-2d2fe295.js";import{m as _e,c as Ce,T as Ae,S as Le,y as Pe,I as xe}from"./commonProperties-90280f28.js";import{x as M,Q as Ge,T as Ve,m as qe,w as Re,b as De,j as ke,I as Ne,q as Qe,F as Me,A as Ue,O as He,P as Be,E as ze,S as Je}from"./featureLayerUtils-cd670376.js";import{s as U}from"./fieldProperties-a11e9ef9.js";import{p as We,A as Ze,w as Ke}from"./UniqueValueRenderer-9d6d8506.js";import{p as L}from"./jsonUtils-7c9a64a6.js";import{p as H}from"./FeatureTemplate-a5bbc341.js";import{C as Xe}from"./LabelClass-e4e56038.js";import{i as Ye}from"./labelingInfo-0364027f.js";import{b as B}from"./Query-f1607220.js";import{p as et}from"./popupUtils-410f0696.js";import{c as tt,u as rt,S as it}from"./defaults-01cfa0fb.js";import{e as st}from"./versionUtils-a0e52a88.js";import{A as T}from"./interfaces-f1f22245.js";import"./jsonUtils-b73a148b.js";import"./LayerFloorInfo-ce13956b.js";import"./serviceCapabilitiesUtils-9fb1a794.js";import"./portalItemUtils-859fdbc0.js";import"./ElevationInfo-a4c4c4eb.js";import"./featureQueryAll-14a16abc.js";import"./AttachmentQuery-e6115c82.js";import"./RelationshipQuery-4dd9c00d.js";import"./FieldsIndex-a5446f2b.js";import"./UnknownTimeZone-03c4b711.js";import"./ColorStop-c5e9d853.js";import"./diffUtils-b5203f5e.js";import"./colorRamps-86452aa8.js";import"./DictionaryLoader-64b435d8.js";import"./heatmapUtils-7081b352.js";import"./defaultsJSON-59981e75.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],z={key:"type",base:We,errorContext:"renderer",typeMap:{simple:L,"unique-value":Ze,"class-breaks":Ke}},G=U(),V=K({types:z});let ot=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function at(e){return new L({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return it.clone();case"polyline":return rt.clone();case"polygon":case"multipatch":return tt.clone();default:return null}}function pt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function J(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function ut(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},o=J(e,t);if(o!=null){const{defaultValues:a}=o;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const W="esri.layers.support.SubtypeSublayer";let l=class extends Q(D(X(se))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ot++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:o}=this;let a;if(s){a=[];let p=0;s.forEach(({name:y,alias:c,editable:f,visible:g})=>{var O;if(!g)return;const d=(O=o==null?void 0:o.fields)==null?void 0:O.find(F=>F.name===y);if(!d)return;const b={name:y};let w=!1;c!==d.alias&&(b.alias=c,w=!0),f!==d.editable&&(b.editable=f,w=!0),a.push(b),w&&p++}),p===0&&a.length===s.length&&(a=null)}else a=S(e);a!=null&&a.length&&Y(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:o,subtypeField:a}=e,p=o==null?void 0:o.find(g=>g.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,f=[];for(const g of s){const d=g.clone(),{name:b}=d,w=t==null?void 0:t.find(E=>E.name===b);if(d.visible=!t||!!w,w){const{alias:E,editable:Z}=w;E&&(d.alias=E),Z===!1&&(d.editable=!1)}const O=(y==null?void 0:y[b])??null;d.defaultValue=b===a?r:O;const F=(c==null?void 0:c[b])??null;d.domain=b===a?null:F?F.type==="inherited"?d.domain:F.clone():null,f.push(d)}return f}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(W).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?at(e.geometryType):null}readRendererFromService(e,t,r){var y,c,f;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,o=V(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&pt(o,t.subtypeField)){const g=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));g&&(a=new L({symbol:g.symbol}))}else(o==null?void 0:o.type)!=="simple"||(f=o.visualVariables)!=null&&f.length||(a=o);return a}readRenderer(e,t,r){var a,p,y;const s=(p=(a=t==null?void 0:t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:p.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:V(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ut(this.subtypeCode,t)]}readTitleFromService(e,t){const r=J(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw v("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:o}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:y,title:o}}return et(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=M(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=A(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===k.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const s=e.clone();return s.where=q(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const s=B.from(e)??r.createQuery();return e!=null&&(s.where=q(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([re("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([n({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([n(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),i([n({type:Fe,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([n(I(S(_e)))],l.prototype,"labelsVisible",void 0),i([n({type:[Xe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Ye},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([n(I(S(Ce)))],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],l.prototype,"listMode",void 0),i([n((()=>{const e=S(Ae);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([n((()=>{const e=S(Le);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([n({clonable:!1})],l.prototype,"parent",void 0),i([n(I(S(Pe)))],l.prototype,"popupEnabled",void 0),i([n({type:ie,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([n({types:z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([n({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([$("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([n({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([N(W)],l);const q=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,o):A(o,a)},v=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=l,h="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function R(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=U();let u=class extends Ie(Se(ve(Te(Ee(ne(ge($e(Oe(Q(we(fe(D(be))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(j)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=oe(async(t,r,s)=>{const{save:o,saveAs:a}=await P(()=>import("./featureLayerUtils-88092fbc.js"),["assets/featureLayerUtils-88092fbc.js","assets/index-d3195b17.js","assets/index-8ff8146e.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-8fbe78f9.js","assets/jsonContext-c01001d0.js","assets/portalItemUtils-859fdbc0.js","assets/saveAPIKeyUtils-c4fec724.js","assets/fetchService-4cfe458b.js","assets/lazyLayerLoader-ab422e6e.js"]);switch(t){case T.SAVE:return o(this,r);case T.SAVE_AS:return a(this,s,r)}}),this.addHandles(ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),le))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(pe).then(async()=>{if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ge(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=ue(this.url);return e!=null&&this.layerId!=null&&(e.path=de(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ye(this.url,t):t}async addAttachment(e,t){return qe(this,e,t,h)}async updateAttachment(e,t,r){return Re(this,e,t,r,h)}async applyEdits(e,t){return De(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await ce(P(()=>import("./FeatureLayerSource-d6dafbd9.js"),["assets/FeatureLayerSource-d6dafbd9.js","assets/index-d3195b17.js","assets/index-8ff8146e.css","assets/External-c7152a1b.js","assets/editingSupport-aaea4867.js","assets/EditBusLayer-2e5cb13a.js","assets/clientSideDefaults-d46b8d80.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/defaultsJSON-59981e75.js","assets/QueryTask-4961029b.js","assets/Query-f1607220.js","assets/executeForIds-09d3a8a5.js","assets/query-a21fc717.js","assets/pbfQueryUtils-ebf8de8c.js","assets/pbf-8e41dbab.js","assets/queryZScale-130e9ed5.js","assets/executeQueryJSON-3d0a07ce.js","assets/FeatureSet-f7a1380d.js","assets/executeQueryPBF-6391b275.js","assets/featureLayerUtils-cd670376.js","assets/featureQueryAll-14a16abc.js","assets/jsonUtils-7c9a64a6.js","assets/UniqueValueRenderer-9d6d8506.js","assets/ColorStop-c5e9d853.js","assets/diffUtils-b5203f5e.js","assets/colorRamps-86452aa8.js","assets/DictionaryLoader-64b435d8.js","assets/FieldsIndex-a5446f2b.js","assets/UnknownTimeZone-03c4b711.js","assets/heatmapUtils-7081b352.js","assets/AttachmentQuery-e6115c82.js","assets/RelationshipQuery-4dd9c00d.js","assets/editsZScale-9375ef27.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=M(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=A(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return ke(this,e,t,h)}async fetchRecomputedExtents(e){return Ne(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return he(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Qe(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),s=B.from(e)??r.createQuery(),o=s.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),s.outFields=o);const a=await r.source.queryFeatures(s,t);if(a!=null&&a.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Me(this,e,t,h)}async queryFeatureCount(e,t){return Ue(this,e,t,h)}async queryExtent(e,t){return He(this,e,t,h)}async queryRelatedFeatures(e,t){return Be(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return ze(this,e,t,h)}async save(e){return this._debouncedSaveOperations(T.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,t,e)}write(e,t){var a;const{origin:r,layerContainerType:s,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return o==null||o.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return o==null||o.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(o==null||o.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&st(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new m("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),me(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Je(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([n({readOnly:!0})],u.prototype,"createQueryVersion",null),i([n({readOnly:!0})],u.prototype,"editingEnabled",null),i([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([n({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([n(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([n(xe)],u.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),i([n(_.outFields)],u.prototype,"outFields",void 0),i([n({readOnly:!0})],u.prototype,"parsedUrl",null),i([n({clonable:!1})],u.prototype,"source",null),i([n({type:C.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:o})=>{const a=new j({subtypeCode:o});return a.read(t,r),a});return new(C.ofType(j))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),o=k.PORTAL_ITEM;let a=!0;if(x(s)===o&&x(r.origin)>o){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([n({type:je})],u.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([$("service","title",["name"])],u.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],u.prototype,"type",void 0),u=i([N(dt)],u);const Yt=u;export{Yt as default};
