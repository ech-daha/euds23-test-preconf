import{ah as i,ai as r,ak as m,hi as v,aH as w,bq as S,fV as O,cA as F,cD as b,dq as q,gs as I,b2 as N,cf as _,el as J,aq as h}from"./index-a1cac181.js";import C from"./FeatureLayer-0e0c57d1.js";import{d as P}from"./FeatureSet-444cbc0f.js";import{l as j}from"./clientSideDefaults-3df88923.js";import{b as l}from"./Query-8ec96004.js";import"./UniqueValueRenderer-3d9243c5.js";import"./ColorStop-2602b4bf.js";import"./diffUtils-ef6bbcbf.js";import"./colorRamps-b2150d6f.js";import"./jsonUtils-46c07947.js";import"./DictionaryLoader-4dd3c670.js";import"./FieldsIndex-6b49ca64.js";import"./UnknownTimeZone-ab7c6b01.js";import"./heatmapUtils-2351b1fb.js";import"./MultiOriginJSONSupport-9addf1b7.js";import"./FeatureLayerBase-8013eb8f.js";import"./commonProperties-7ade9483.js";import"./ElevationInfo-1c41bf4e.js";import"./featureLayerUtils-9cc96c71.js";import"./featureQueryAll-ec4a11be.js";import"./AttachmentQuery-c73fbbfb.js";import"./RelationshipQuery-25c3c532.js";import"./LayerFloorInfo-039148db.js";import"./serviceCapabilitiesUtils-91567898.js";import"./editsZScale-d6a84b25.js";import"./queryZScale-f8e7b210.js";import"./APIKeyMixin-fb65fce7.js";import"./ArcGISService-377485dc.js";import"./BlendLayer-d14012f0.js";import"./jsonUtils-9ebed520.js";import"./CustomParametersMixin-50d5a4c8.js";import"./EditBusLayer-525e2b98.js";import"./FeatureEffectLayer-b5512874.js";import"./FeatureEffect-01234d29.js";import"./FeatureFilter-22854955.js";import"./FeatureReductionLayer-a16eba95.js";import"./FeatureReductionSelection-02d3f160.js";import"./LabelClass-f01c9855.js";import"./defaults-06f3d090.js";import"./defaultsJSON-59981e75.js";import"./MD5-715f37cd.js";import"./OperationalLayer-381cacc8.js";import"./OrderedLayer-2db1a879.js";import"./PortalLayer-806db449.js";import"./portalItemUtils-bd3ade0c.js";import"./ScaleRangeLayer-47bc8cb3.js";import"./TemporalLayer-a67ca634.js";import"./FeatureTemplate-40f36ca2.js";import"./FeatureType-baed6dd6.js";import"./fieldProperties-8bc1b40a.js";import"./labelingInfo-c32eb8fe.js";import"./versionUtils-abea1fa8.js";import"./styleUtils-5179403f.js";import"./TopFeaturesQuery-61f4fc16.js";import"./popupUtils-87764fa9.js";import"./interfaces-f1f22245.js";import"./QueryEngineCapabilities-85c4f1d0.js";let n=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:o,timeExtent:a}=await this._connection.invoke("refresh",e);return o&&(this.sourceJSON.extent=o),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:o.count,extent:S.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await O("CSVSourceWorker",{strategy:F("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:a,latitudeField:y,longitudeField:f,spatialReference:u,timeInfo:d}=this.loadOptions,p=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:a==null?void 0:a.map(g=>g.toJSON()),latitudeField:y,longitudeField:f,spatialReference:u==null?void 0:u.toJSON(),timeInfo:d==null?void 0:d.toJSON()}},{signal:t});this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([m("esri.layers.graphics.sources.CSVSource")],n);function c(t,e){throw new h(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let s=class extends C{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=N.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(_).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){var o,a;return e.showLabels!=null?e.showLabels:!!((a=(o=e.layerDefinition)==null?void 0:o.drawingInfo)!=null&&a.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=J(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(o=>{if(o!=null&&o.features)for(const a of o.features)a.layer=a.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new h("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return c(this,"csv-layer:save")}async saveAs(t,e){return c(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),i([b("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),i([r()],s.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],s.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),i([r({json:{read:q,write:{isRequired:!0,ignoreOrigin:!0,writer:I}}})],s.prototype,"url",null),s=i([m("esri.layers.CSVLayer")],s);const Dt=s;export{Dt as default};