import{m as Ie}from"./TimeOnly-fd60a1b5.js";import{n as N,K as De,X as J,H as L,N as v,a as m,r as p,P,d as b,x as Te,y as fe,Q as ue,A as S,B as U,q as x,U as G,E as Ee,b as M,J as be,v as Ne,c as O,D as xe,S as Ae,T as _,V as X,Y}from"./arcadeUtils-5f52180d.js";import{e as ce,j as Le,q as de,f as Se,c as me,a as Ce,b as ve,d as Pe,g as q,k as Ze,F as Re,T as $e,B as k,h as ke,i as B,L as C,I as ee}from"./featureSetUtils-0fabbea5.js";import{l as Me}from"./portalUtils-80ece0bf.js";import{u as Ue,D as pe}from"./SpatialFilter-0e3c826a.js";import{ce as ye,aO as Oe,cE as W}from"./index-d3195b17.js";import{x as T}from"./WhereClause-d1f79e4c.js";import ne from"./FeatureLayer-9d9dc92b.js";import"./UnknownTimeZone-03c4b711.js";import"./number-6cc0d12d.js";import"./FieldsIndex-a5446f2b.js";import"./hash-6f442295.js";import"./MD5-715f37cd.js";import"./SubtypeGroupLayer-0019ef4e.js";import"./MultiOriginJSONSupport-9c569f95.js";import"./APIKeyMixin-0a457011.js";import"./ArcGISService-797262a1.js";import"./BlendLayer-c5b75f55.js";import"./jsonUtils-b73a148b.js";import"./CustomParametersMixin-26e67f7d.js";import"./EditBusLayer-2e5cb13a.js";import"./FeatureLayerBase-7e08d69e.js";import"./commonProperties-90280f28.js";import"./ElevationInfo-a4c4c4eb.js";import"./featureLayerUtils-cd670376.js";import"./featureQueryAll-14a16abc.js";import"./Query-f1607220.js";import"./jsonUtils-7c9a64a6.js";import"./UniqueValueRenderer-9d6d8506.js";import"./ColorStop-c5e9d853.js";import"./diffUtils-b5203f5e.js";import"./colorRamps-86452aa8.js";import"./DictionaryLoader-64b435d8.js";import"./heatmapUtils-7081b352.js";import"./AttachmentQuery-e6115c82.js";import"./RelationshipQuery-4dd9c00d.js";import"./LayerFloorInfo-ce13956b.js";import"./serviceCapabilitiesUtils-9fb1a794.js";import"./OperationalLayer-f6884624.js";import"./PortalLayer-e38eb8f2.js";import"./portalItemUtils-859fdbc0.js";import"./ScaleRangeLayer-8e8ce7ef.js";import"./TemporalLayer-2d2fe295.js";import"./fieldProperties-a11e9ef9.js";import"./FeatureTemplate-a5bbc341.js";import"./LabelClass-e4e56038.js";import"./defaults-01cfa0fb.js";import"./defaultsJSON-59981e75.js";import"./labelingInfo-0364027f.js";import"./popupUtils-410f0696.js";import"./versionUtils-a0e52a88.js";import"./interfaces-f1f22245.js";import"./executeQueryJSON-3d0a07ce.js";import"./query-a21fc717.js";import"./pbfQueryUtils-ebf8de8c.js";import"./pbf-8e41dbab.js";import"./queryZScale-130e9ed5.js";import"./FeatureSet-f7a1380d.js";import"./executeQueryPBF-6391b275.js";import"./AttachmentInfo-4b691faf.js";import"./executeForIds-09d3a8a5.js";import"./TopFeaturesQuery-271d35f7.js";import"./FeatureType-16cea36d.js";import"./geometryEngineAsync-f274c482.js";import"./editsZScale-9375ef27.js";import"./FeatureEffectLayer-cdff10fa.js";import"./FeatureEffect-3c293895.js";import"./FeatureFilter-dc6e76e7.js";import"./FeatureReductionLayer-5568b414.js";import"./FeatureReductionSelection-032b9aed.js";import"./OrderedLayer-64155c3a.js";import"./styleUtils-6d92eebb.js";function ze(s,n,r,d){if(d.length===1){if(x(d[0]))return Y(s,d[0],-1);if(M(d[0]))return Y(s,d[0].toArray(),-1)}return Y(s,d,-1)}async function te(s,n,r){const d=s.getVariables();if(d.length>0){const F=[];for(let t=0;t<d.length;t++){const a={name:d[t]};F.push(await n.evaluateIdentifier(r,a))}const e={};for(let t=0;t<d.length;t++)e[d[t]]=F[t];return s.parameters=e,s}return s}function c(s,n,r=null){for(const d in s)if(d.toLowerCase()===n.toLowerCase())return s[d];return r}function we(s){if(s===null)return null;const n={type:c(s,"type",""),name:c(s,"name","")};if(n.type==="range")n.range=c(s,"range",[]);else{n.codedValues=[];for(const r of c(s,"codedValues",[]))n.codedValues.push({name:c(r,"name",""),code:c(r,"code",null)})}return n}function ie(s){if(s===null)return null;const n={},r=c(s,"wkt",null);r!==null&&(n.wkt=r);const d=c(s,"wkid",null);return d!==null&&(n.wkid=d),n}function he(s){if(s===null)return null;const n={hasZ:c(s,"hasz",!1),hasM:c(s,"hasm",!1)},r=c(s,"spatialreference",null);r&&(n.spatialReference=ie(r));const d=c(s,"x",null);if(d!==null)return n.x=d,n.y=c(s,"y",null),n;const F=c(s,"rings",null);if(F!==null)return n.rings=F,n;const e=c(s,"paths",null);if(e!==null)return n.paths=e,n;const t=c(s,"points",null);if(t!==null)return n.points=t,n;for(const a of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=c(s,a,null);u!==null&&(n[a]=u)}return n}function je(s,n){for(const r of n)if(r===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&je(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&x(s.layerDefinition.fields)!==!1&&x(s.featureSet.features)!==!1}function z(s){return(s==null?void 0:s.toLowerCase())==="utc"?"UTC":(s==null?void 0:s.toLowerCase())==="unknown"?"Unknown":s}function ot(s){s.mode==="async"&&(s.functions.timezone=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{var u,y;if(N(e,1,2,n,r),De(e[0])||J(e[0]))return"Unknown";if(L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof v)||e[1].hasField("type")===!1)throw new m(n,p.InvalidParameter,r);const o=e[1].field("type");if(P(o)===!1)throw new m(n,p.InvalidParameter,r);switch(b(o).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((u=e[0].editFieldsInfo)==null?void 0:u.timeZone)??null);case"timeinfo":return z(((y=e[0].timeInfo)==null?void 0:y.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return z(e[0].fieldTimeZone(b(e[1].field("fieldname"))))}throw new m(n,p.InvalidParameter,r)}const t=Te(e[0],fe(n));if(t===null)return null;const a=t.timeZone;return a==="system"?Ie.systemTimeZoneCanonicalName:a.toLowerCase()==="utc"?"UTC":a.toLowerCase()==="unknown"?"Unknown":a})},s.functions.sqltimestamp=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,1,3,n,r);const t=e[0];if(ue(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(b(e[1])).toSQLWithKeyword();throw new m(n,p.InvalidParameter,r)}if(J(t))return t.toSQLWithKeyword();if(L(t)){if(e.length!==3)throw new m(n,p.InvalidParameter,r);await t.load();const a=b(e[1]);if(J(e[2]))return e[2].toSQLWithKeyword();if(ue(e[2])===!1)throw new m(n,p.InvalidParameter,r);const u=t.fieldTimeZone(a);return u===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(u).toSQLWithKeyword()}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof ce){const t=b(e[1]);let a=S(e[2],null);const u=U(S(e[3],!0));if(a===null&&(a=["*"]),x(a)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetById(t,u,a)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,1,2,n,r),G(e[0])){let t=S(e[1],"datasource");return t===null&&(t="datasource"),t=b(t).toLowerCase(),Le(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{var o,i;if(N(e,2,5,n,r),e[0]===null)throw new m(n,p.PortalRequired,r);if(e[0]instanceof Ee){const l=b(e[1]),f=b(e[2]);let I=S(e[3],null);const D=U(S(e[4],!0));if(I===null&&(I=["*"]),x(I)===!1)throw new m(n,p.InvalidParameter,r);let w=null;return w=(o=n.services)!=null&&o.portal?n.services.portal:ye.getDefault(),w=Me(e[0],w),de(l,f,n.spatialReference,I,D,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,p.PortalRequired,r);const t=b(e[0]),a=b(e[1]);let u=S(e[2],null);const y=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,p.InvalidParameter,r);return de(t,a,n.spatialReference,u,y,((i=n.services)==null?void 0:i.portal)??ye.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof ce){const t=b(e[1]);let a=S(e[2],null);const u=U(S(e[3],!0));if(a===null&&(a=["*"]),x(a)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetByName(t,u,a)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,r){return s.standardFunction(n,r,(d,F,e)=>{N(e,1,1,n,r);let t=e[0];const a={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(t))t=JSON.parse(t),t.layerDefinition!==void 0?(a.layerDefinition=t.layerDefinition,a.featureSet=t.featureSet,t.layerDefinition.spatialReference&&(a.layerDefinition.spatialReference=t.layerDefinition.spatialReference)):(a.featureSet.features=t.features,a.featureSet.geometryType=t.geometryType,a.layerDefinition.geometryType=a.featureSet.geometryType,a.layerDefinition.objectIdField=t.objectIdFieldName??"",a.layerDefinition.typeIdField=t.typeIdFieldName,a.layerDefinition.globalIdField=t.globalIdFieldName,a.layerDefinition.fields=t.fields,t.spatialReference&&(a.layerDefinition.spatialReference=t.spatialReference));else{if(!(e[0]instanceof v))throw new m(n,p.InvalidParameter,r);{t=JSON.parse(e[0].castToText(!0));const u=c(t,"layerdefinition");if(u!==null){a.layerDefinition.geometryType=c(u,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.globalIdField=c(u,"globalidfield",""),a.layerDefinition.objectIdField=c(u,"objectidfield",""),a.layerDefinition.typeIdField=c(u,"typeidfield",""),a.layerDefinition.hasZ=c(u,"hasz",!1)===!0,a.layerDefinition.hasM=c(u,"hasm",!1)===!0;const y=c(u,"spatialreference",null);y&&(a.layerDefinition.spatialReference=ie(y));for(const i of c(u,"fields",[])){const l={name:c(i,"name",""),alias:c(i,"alias",""),type:c(i,"type",""),nullable:c(i,"nullable",!0),editable:c(i,"editable",!0),length:c(i,"length",null),domain:we(c(i,"domain"))};a.layerDefinition.fields.push(l)}const o=c(t,"featureset",null);if(o){const i={};for(const l of a.layerDefinition.fields)i[l.name.toLowerCase()]=l.name;for(const l of c(o,"features",[])){const f={},I=c(l,"attributes",{});for(const D in I)f[i[D.toLowerCase()]]=I[D];a.featureSet.features.push({attributes:f,geometry:he(c(l,"geometry",null))})}}}else{a.layerDefinition.hasZ=c(t,"hasz",!1)===!0,a.layerDefinition.hasM=c(t,"hasm",!1)===!0,a.layerDefinition.geometryType=c(t,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.objectIdField=c(t,"objectidfieldname",""),a.layerDefinition.typeIdField=c(t,"typeidfieldname","");const y=c(t,"spatialreference",null);y&&(a.layerDefinition.spatialReference=ie(y));let o=c(t,"fields",null);if(x(o))for(const f of o){const I={name:c(f,"name",""),alias:c(f,"alias",""),type:c(f,"type",""),nullable:c(f,"nullable",!0),editable:c(f,"editable",!0),length:c(f,"length",null),domain:we(c(f,"domain"))};a.layerDefinition.fields.push(I)}else o=null,a.layerDefinition.fields=o;const i={};for(const f of a.layerDefinition.fields)i[f.name.toLowerCase()]=f.name;let l=c(t,"features",null);if(x(l))for(const f of l){const I={},D=c(f,"attributes",{});for(const w in D)I[i[w.toLowerCase()]]=D[w];a.featureSet.features.push({attributes:I,geometry:he(c(f,"geometry",null))})}else l=null,a.featureSet.features=l}}}if(He(a)===!1)throw new m(n,p.InvalidParameter,r);return a.layerDefinition.geometryType||(a.layerDefinition.geometryType="esriGeometryNull"),Se.create(a,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),x(e[0])||M(e[0])){const t=[];let a=e[0];a instanceof be&&(a=a.toArray());let u=null;if(!Ne(e[1]))throw new m(n,p.InvalidParameter,r);u=e[1].createFunction(n);for(const y of a){const o=u(y);Oe(o)?await o===!0&&t.push(y):o===!0&&t.push(y)}return t}if(L(e[0])){const t=await e[0].load(),a=T.create(e[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),u=a.getVariables();if(u.length>0){const y=[];for(let i=0;i<u.length;i++){const l={name:u[i]};y.push(await s.evaluateIdentifier(n,l))}const o={};for(let i=0;i<u.length;i++)o[u[i]]=y[i];return a.parameters=o,new me({parentfeatureset:e[0],whereclause:a})}return new me({parentfeatureset:e[0],whereclause:a})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),L(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),L(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(x(e[0]))return O(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,O(e[1]));if(M(e[0]))return O(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,O(e[1]));throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,1,1,n,r),L(e[0])){const t=await e[0].first(d.abortSignal);if(t!==null){const a=xe.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return a._underlyingGraphic=t,a}return t}return x(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,1,2,n,r);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof v){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=U(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const a=Ae(e[1].field("types"),!1);a.length>0&&(t.types=a)}}else if(e[1]!==null)throw new m(n,p.InvalidParameter,r)}if(G(e[0])){let a=e[0]._layer;return a instanceof ne&&(a=q(a,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),a===null?[]:L(a)===!1?[]:(await a.load(),a.queryAttachments(e[0].field(a.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,2,4,n,r);const t=e[0],a=b(e[1]);let u=S(e[2],null);const y=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,p.InvalidParameter,r);if(e[0]===null)return null;if(!G(e[0]))throw new m(n,p.InvalidParameter,r);let o=t._layer;if(o instanceof ne&&(o=q(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||L(o)===!1)return null;o=await o.load();const i=o.relationshipMetaData().filter(w=>w.name===a);if(i.length===0)return null;if(i[0].relationshipTableId!==void 0&&i[0].relationshipTableId!==null&&i[0].relationshipTableId>-1)return Ze(o,i[0],t.field(o.objectIdField),o.spatialReference,u,y,n.lrucache,n.interceptor);let l=o.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+i[0].relatedTableId.toString():l+"/"+i[0].relatedTableId.toString();const f=await Re(l,o.spatialReference,u,y,n.lrucache,n.interceptor);await f.load();let I=f.relationshipMetaData();if(I=I.filter(w=>w.id===i[0].id),t.hasField(i[0].keyField)===!1||t.field(i[0].keyField)===null){const w=await o.getFeatureByObjectId(t.field(o.objectIdField),[i[0].keyField]);if(w){const E=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return E.parameters={id:w.attributes[i[0].keyField]},f.filter(E)}return new Ue({parentfeatureset:f})}const D=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:t.field(i[0].keyField)},f.filter(D)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,2,3,n,r);const t=e[0],a=b(S(e[1],"")).toLowerCase(),u=P(e[2])?b(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new m(n,p.InvalidParameter,r);let y=t._layer;if(y instanceof ne&&(y=q(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),y===null||L(y)===!1)return null;await y.load();const o=y.serviceUrl(),i=await $e(o,n.spatialReference);let l=null,f=null,I=!1;if(u!==null&&u!==""&&u!==void 0){for(const g of i.terminals)g.terminalName===u&&(f=g.terminalId);f===null&&(I=!0)}const D=i.associations.getFieldsIndex(),w=D.get("TOGLOBALID").name,E=D.get("FROMGLOBALID").name,K=D.get("TOTERMINALID").name,V=D.get("FROMTERMINALID").name,j=D.get("FROMNETWORKSOURCEID").name,H=D.get("TONETWORKSOURCEID").name,$=D.get("ASSOCIATIONTYPE").name,ge=D.get("ISCONTENTVISIBLE").name,Fe=D.get("OBJECTID").name;for(const g of y.fields)if(g.type==="global-id"){l=t.field(g.name);break}let Z=null,ae=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create("''",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));const A="globalid",se="globalId",le={};for(const g in i.lkp)le[g]=i.lkp[g].sourceId;const R=new ke(new W({name:"classname",alias:"classname",type:"string"}),null,le);let h="";switch(a){case"midspan":{h=`((${w}='${l}') OR ( ${E}='${l}')) AND (${$} IN (5))`,R.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(i.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${l}') THEN ${w} ELSE ${E} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),ae=i.unVersion>=4?new ee(C.findField(i.associations.fields,D.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{h=`((${w}='${l}') OR ( ${E}='${l}')) AND (${$} IN (4,6))`,R.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(i.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${l}') THEN ${w} ELSE ${E} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create(`CASE WHEN (${$}=4) THEN 'from' ELSE 'to' END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let g=`${w}='@T'`,oe=`${E}='@T'`;f!==null&&(g+=` AND ${K}=@A`,oe+=` AND ${V}=@A`),h="(("+g+") OR ("+oe+"))",h=_(h,"@T",l??""),g=_(g,"@T",l??""),f!==null&&(g=_(g,"@A",f.toString()),h=_(h,"@A",f.toString())),R.codefield=T.create("CASE WHEN "+g+` THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const Q=X(C.findField(i.associations.fields,E));Q.name=A,Q.alias=A,Z=new k(Q,T.create("CASE WHEN "+g+` THEN ${E} ELSE ${w} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":h=`${w}='${l}' AND ${$} = 2`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,E),A,A);break;case"content":h=`(${E}='${l}' AND ${$} = 2)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,w),A,A);break;case"structure":h=`(${w}='${l}' AND ${$} = 3)`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,E),A,se);break;case"attached":h=`(${E}='${l}' AND ${$} = 3)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,w),A,se);break;default:throw new m(n,p.InvalidParameter,r)}return I&&(h="1 <> 1"),new C({parentfeatureset:i.associations,adaptedFields:[new ee(C.findField(i.associations.fields,Fe)),new ee(C.findField(i.associations.fields,ge)),Z,re,R,ae],extraFilter:h?T.create(h,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,3,3,n,r),!L(e[0]))throw new m(n,p.InvalidParameter,r);const t=await e[0].load(),a=[],u=[];let y=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof v)o.push(e[1]);else if(x(e[1]))o=e[1];else{if(!M(e[1]))throw new m(n,p.InvalidParameter,r);o=e[1].toArray()}for(const i of o)if(P(i)){const l=T.create(b(i),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),f=pe(l)===!0?b(i):"%%%%FIELDNAME";a.push({name:f,expression:l}),f==="%%%%FIELDNAME"&&(y=!0)}else{if(!(i instanceof v))throw new m(n,p.InvalidParameter,r);{const l=i.hasField("name")?i.field("name"):"%%%%FIELDNAME",f=i.hasField("expression")?i.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new m(n,p.InvalidParameter,r);a.push({name:l,expression:T.create(f||l,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(o=[],P(e[2]))o.push(e[2]);else if(x(e[2]))o=e[2];else if(M(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof v))throw new m(n,p.InvalidParameter,r);o.push(e[2])}for(const i of o){if(!(i instanceof v))throw new m(n,p.InvalidParameter,r);{const l=i.hasField("name")?i.field("name"):"",f=i.hasField("statistic")?i.field("statistic"):"",I=i.hasField("expression")?i.field("expression"):"";if(!l||!f||!I)throw new m(n,p.InvalidParameter,r);u.push({name:l,statistic:f.toLowerCase(),expression:T.create(I,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const i={};for(const f of t.fields)i[f.name.toLowerCase()]=1;for(const f of a)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);let l=0;for(const f of a)if(f.name==="%%%%FIELDNAME"){for(;i["field_"+l.toString()]===1;)l++;i["field_"+l.toString()]=1,f.name="FIELD_"+l.toString()}}for(const i of a)await te(i.expression,s,n);for(const i of u)await te(i.expression,s,n);return e[0].groupby(a,u)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(L(e[0])){N(e,2,2,n,r);const t=await e[0].load(),a=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof v)u.push(e[1]);else if(x(e[1]))u=e[1];else{if(!M(e[1]))throw new m(n,p.InvalidParameter,r);u=e[1].toArray()}let y=!1;for(const o of u)if(P(o)){const i=T.create(b(o),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),l=pe(i)===!0?b(o):"%%%%FIELDNAME";a.push({name:l,expression:i}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(o instanceof v))throw new m(n,p.InvalidParameter,r);{const i=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if(i==="%%%%FIELDNAME"&&(y=!0),!i)throw new m(n,p.InvalidParameter,r);a.push({name:i,expression:T.create(l||i,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const o={};for(const l of t.fields)o[l.name.toLowerCase()]=1;for(const l of a)l.name!=="%%%%FIELDNAME"&&(o[l.name.toLowerCase()]=1);let i=0;for(const l of a)if(l.name==="%%%%FIELDNAME"){for(;o["field_"+i.toString()]===1;)i++;o["field_"+i.toString()]=1,l.name="FIELD_"+i.toString()}}for(const o of a)await te(o.expression,s,n);return e[0].groupby(a,[])}return ze("distinct",d,F,e)})}),s.functions.getfeaturesetinfo=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,1,1,n,r),!L(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?v.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},fe(n),!1,!1):null})},s.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}export{ot as registerFunctions};
