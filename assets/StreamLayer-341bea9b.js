import{ah as t,ai as r,ak as I,cx as F,fk as P,cT as E,b2 as x,aH as k,aq as d,cf as A,i8 as f,b7 as O,aF as v,fa as y,aM as D,bG as C,cE as N,i9 as U,bq as L,fr as g,cW as V,cD as w,cy as G,bd as M}from"./index-a1cac181.js";import"./UniqueValueRenderer-3d9243c5.js";import{o as J,m as q,u as z}from"./jsonUtils-46c07947.js";import{m as W}from"./MultiOriginJSONSupport-9addf1b7.js";import{l as H}from"./ArcGISService-377485dc.js";import{a as Q}from"./BlendLayer-d14012f0.js";import{o as Y}from"./CustomParametersMixin-50d5a4c8.js";import{p as Z}from"./FeatureEffectLayer-b5512874.js";import{c as B}from"./FeatureReductionLayer-a16eba95.js";import{u as K}from"./OperationalLayer-381cacc8.js";import{j as X}from"./PortalLayer-806db449.js";import{t as ee}from"./ScaleRangeLayer-47bc8cb3.js";import{a as te}from"./TemporalLayer-a67ca634.js";import{m as ie,c as re,S as oe,T as se,y as ne,p as ae,d as pe}from"./commonProperties-7ade9483.js";import{D as le}from"./featureLayerUtils-9cc96c71.js";import{s as de}from"./fieldProperties-8bc1b40a.js";import{C as me}from"./LabelClass-f01c9855.js";import{i as ce}from"./labelingInfo-c32eb8fe.js";import{t as ue}from"./styleUtils-5179403f.js";import{b as ye}from"./Query-8ec96004.js";import{p as he}from"./popupUtils-87764fa9.js";import{h as fe}from"./ElevationInfo-1c41bf4e.js";import{A as c}from"./interfaces-f1f22245.js";import"./ColorStop-2602b4bf.js";import"./diffUtils-ef6bbcbf.js";import"./colorRamps-b2150d6f.js";import"./DictionaryLoader-4dd3c670.js";import"./FieldsIndex-6b49ca64.js";import"./UnknownTimeZone-ab7c6b01.js";import"./heatmapUtils-2351b1fb.js";import"./jsonUtils-9ebed520.js";import"./FeatureEffect-01234d29.js";import"./FeatureFilter-22854955.js";import"./FeatureReductionSelection-02d3f160.js";import"./MD5-715f37cd.js";import"./portalItemUtils-bd3ade0c.js";import"./featureQueryAll-ec4a11be.js";import"./AttachmentQuery-c73fbbfb.js";import"./RelationshipQuery-25c3c532.js";import"./defaults-06f3d090.js";import"./defaultsJSON-59981e75.js";var h;let l=h=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=h=t([I("esri.layers.support.PurgeOptions")],l);const $=l,b=de();function S(e,o){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends B(Z(Q(te(ee(P(H(K(X(W(Y(E(M)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=k(async(o,s,a)=>{const{save:n,saveAs:p}=await v(()=>import("./streamLayerUtils-5bdf41b5.js"),["./streamLayerUtils-5bdf41b5.js","./utils-1e8eb5eb.js","./index-a1cac181.js","./index-8ff8146e.css","./originUtils-cfe4feaf.js","./multiOriginJSONSupportUtils-c978f4c3.js","./jsonContext-c4023ffa.js","./portalItemUtils-bd3ade0c.js","./saveAPIKeyUtils-c8a9e333.js"],import.meta.url);switch(o){case c.SAVE:return n(this,s);case c.SAVE_AS:return p(this,a,s)}})}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(A).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){var n;o=o.layerDefinition||o;const a=(n=o.drawingInfo)==null?void 0:n.renderer;if(a){const p=J(a,o,s)||void 0;return p||O.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),p}return le(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([v(()=>import("./createConnection-f9d069f8.js"),["./createConnection-f9d069f8.js","./index-a1cac181.js","./index-8ff8146e.css","./query-0260ec48.js","./pbfQueryUtils-13f6e3b7.js","./pbf-16158dc0.js","./queryZScale-f8e7b210.js","./Query-8ec96004.js"],import.meta.url),this.load()]),s=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:R=0,maxReconnectionInterval:T=20,spatialReference:j=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,j,s,{geometry:p,where:n},R,T,a??void 0),_=D([this.on("send-message-to-socket",u=>m.sendMessageToSocket(u)),this.on("send-message-to-client",u=>m.sendMessageToClient(u))]);return m.once("destroy",_.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new ye;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,o){return this._debouncedSaveOperations(c.SAVE_AS,o,e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(p=>p.type==="oid"))==null?void 0:s.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new N({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ue(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:fe})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:L,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:y.apiValues,json:{read:{reader:y.read}}})],i.prototype,"geometryType",void 0),t([r(ie)],i.prototype,"labelsVisible",void 0),t([r({type:[me],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ce},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(re)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(oe)],i.prototype,"maxScale",void 0),t([r(se)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(ne)],i.prototype,"popupEnabled",void 0),t([r({type:V,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:$})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:q,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:z,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=G(ae);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:x,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(pe)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const ot=i;export{ot as default};
