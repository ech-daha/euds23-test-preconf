import{b7 as pe,ah as c,ai as d,ak as B,dK as A,ao as q,da as ye,aF as he,iz as ge,kd as fe,dh as Z,b2 as U,e2 as me,cj as z,ke as Ee,kf as Se,ij as we,bT as be,gX as _e,dm as se,eO as Fe,dT as Re,bP as Ie,kg as ve,bU as xe,ht as T,hb as C,b1 as N,b6 as L,am as Oe,bq as $e,aq as H,iE as Qe,eQ as K,dO as je,df as ke,gL as Me,kh as Te}from"./index-f98984bd.js";import{a as j,n as X,u as Y}from"./DefinitionExpressionSceneLayerView-e99cbc6c.js";import{x as Ce}from"./WhereClause-2664b43f.js";import{a as G}from"./I3SOverrides-f53675f7.js";import{d as Ne}from"./FeatureFilter-c5e02129.js";import{Z as De,Q as Ge,c as ee}from"./I3SUtil-b11b263c.js";import{W as Ae}from"./QueryEngine-64ae253c.js";import{Z as Je}from"./FieldsIndex-c41cf585.js";import{d as Pe}from"./FeatureSet-92899ce5.js";import{b as Ve}from"./Query-1e9b8ba4.js";import{n as Le}from"./optimizedFeatureQueryEngineAdapter-efa83b89.js";import{I as M}from"./I3SMeshView3D-604e5f0c.js";const ie="esri.views.3d.layers.i3s.I3SMeshViewFilter",$=pe.getLogger(ie);let g=class extends q{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){ye(()=>{var t;return((t=this.viewFilter)==null?void 0:t.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(he(()=>import("./geometryEngine-59dfd576.js"),["assets/geometryEngine-59dfd576.js","assets/geometryEngineBase-9ef5d365.js","assets/index-f98984bd.js","assets/index-8ff8146e.css","assets/hydrated-4437c344.js"]).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){var e;if(((e=this.viewFilter)==null?void 0:e.objectIds)==null)return null;const t=ge(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=this.viewFilter!=null?this.viewFilter.where:null;if(t==null||!t)return null;try{return Ce.create(t,this.layerFieldsIndex)}catch(e){$.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(t,e,r,s){const n=this.sortedObjectIds;n!=null&&t.push(l=>De(n,!0,l)),this.addSqlFilter(t,this.parsedWhereClause);const i=j(this._layerMaskGeometries),o=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&o!=null){const l=this.layerFilter.spatialRelationship;t.push((u,h)=>re(o,u,h,s,e,r,i,l))}const a=j(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&o!=null){const l=this.viewFilter.spatialRelationship;t.push((u,h)=>re(o,u,h,s,e,r,a,l))}}isMBSGeometryVisible(t,e,r){const s=j(this._layerMaskGeometries),n=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&n!=null){const o=this.layerFilter.spatialRelationship,a=s[0].spatialReference||e;return G(t,r,k,a)?te(n,k,s,a,o):($.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const i=j(this._viewMaskGeometries);if(i!=null&&this.viewFilter!=null&&n!=null){const o=this.viewFilter.spatialRelationship,a=i[0].spatialReference||e;return G(t,r,k,a)?te(n,k,i,a,o):($.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=j(this._viewMaskGeometries),e=j(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?X:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return X;const{distance:e,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return D(this._geometryEngine,n,s);const i=r||fe(n.spatialReference);if(n.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(n,e,i);return D(this._geometryEngine,l,s)}const o=Z(n,U.WGS84);if(o!=null){const l=Z(this._geometryEngine.geodesicBuffer(o,e,i),n.spatialReference);return D(this._geometryEngine,l,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(me().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=z(n,U.WGS84)}catch{}if(a)try{a=z(this._geometryEngine.geodesicBuffer(a,e,i),n.spatialReference)}catch{a=null}return a||$.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),D(this._geometryEngine,a,s)}get updating(){return Y(this._layerMaskGeometries)||Y(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(t.timeExtent?($.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Ke(t.spatialRelationship)||($.warn(`Filters with spatialRelationship other than ${oe.join(", ")} are not supported for mesh scene layers`),!1))}};c([d()],g.prototype,"layerFilter",void 0),c([d({type:Ne})],g.prototype,"viewFilter",void 0),c([d()],g.prototype,"layerFieldsIndex",void 0),c([d()],g.prototype,"loadAsyncModule",void 0),c([d()],g.prototype,"addSqlFilter",void 0),c([d({readOnly:!0})],g.prototype,"sortedObjectIds",null),c([d({readOnly:!0})],g.prototype,"parsedWhereClause",null),c([d({readOnly:!0})],g.prototype,"parsedGeometry",null),c([d({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),c([d({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),c([d()],g.prototype,"updating",null),c([d()],g.prototype,"_projectionEngineLoaded",void 0),c([d()],g.prototype,"_geometryEngine",void 0),g=c([B(ie)],g);const oe=(t=>t)(["contains","intersects","disjoint"]);function Ke(t){return t!=null&&oe.includes(t)}var y;function D(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const s=e.rings.length,n=e.spatialReference,i=new Array(s);for(let l=0;l<s;++l){const u=Ee(1/0,1/0,-1/0,-1/0);Se(u,e.rings[l]),i[l]={type:"polygon",rings:[e.rings[l]],spatialReference:n,cache:{},aabr:u}}i.sort((l,u)=>l.aabr[0]-u.aabr[0]);const o=new Set,a=new xe;for(let l=0;l<i.length;++l){const u=i[l],h=u.aabr[0];o.forEach(p=>{if(h>=p.aabr[2])return void o.delete(p);if(u.aabr[1]>p.aabr[3]||u.aabr[3]<p.aabr[1]||!t.intersects(u,p))return;u.rings=u.rings.concat(p.rings),we(u.aabr,p.aabr,u.aabr),u.cache={},o.delete(p);const m=be(i,p,i.length,a);i.splice(m,1)}),o.add(u)}for(const l of i)l.aabr=void 0;return i}return[e]}function te(t,e,r,s,n){if(e[3]>=.5*(e[2]+_e(s).radius))return!0;const i=ae(t,e,s);return r.every(o=>le(t,o,i,n)!==y.DISCARD)}function re(t,e,r,s,n,i,o,a){const l=o[0].spatialReference||n.spatialReference;if(!G(r.node.mbs,i,k,l))return void $.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=ae(t,k,l),h=We(a,n,l,s,r.objectHandle);for(const p of o){if(e.length===0)return;switch(le(t,p,u,a)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}Ge(e,r.featureIds,m=>Be(t,p,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const k=se(0,0,0,0);function We(t,e,r,s,n){const i=e.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,h;switch(t){case"intersects":u=(p,m,_)=>p.intersects(m,_)?y.KEEP:y.TEST,h=W;break;case"contains":u=(p,m,_)=>p.contains(m,_)?y.TEST:y.DISCARD,h=W;break;default:u=(p,m,_)=>p.disjoint(m,_)?y.TEST:y.DISCARD,h=ue}return{collection:s,object:n,type:t,maskSR:r,renderSR:i,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:h}}function ae(t,e,r){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Fe(r)&&!Re(r),i=Number.isNaN(e[3])?0:Ie(e[3],0,2*ve.radius),o=n?t.buffer(s,i,1):t.geodesicBuffer(s,i,1);return o.type="polygon",o}function le(t,e,r,s){switch(s){case"intersects":case"contains":return W(t,e,r);case"disjoint":return ue(t,e,r)}}function W(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ue(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function Be(t,e,r,s){const{collection:n,object:i,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=s;let h=u.get(r);if(!h){const F=n.getObjectTransform(i);n.getComponentAabb(i,r,b);const E=[[b[0],b[1],0],[b[0],b[4],0],[b[3],b[4],0],[b[3],b[1],0]];for(let f=0;f<4;++f)T(E[f],E[f],F.rotationScale),C(E[f],E[f],F.position),N(E[f],o,E[f],a);h={type:"polygon",rings:[E],spatialReference:a,cache:{}},h.rings[0][4]=h.rings[0][0],u.set(r,h)}switch(l(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:p,triangleTest:m,positions:_}=s,I=p.rings[0][0],v=p.rings[0][1],x=p.rings[0][2],Q=n.getObjectTransform(i);n.getComponentPositions(i,r,_);const{indices:J,data:w,stride:P,startIndex:ce,endIndex:de}=_;for(let F=ce;F<de;F+=3){const E=P*J[F],f=P*J[F+1],V=P*J[F+2];switch(L(I,w[E],w[E+1],w[E+2]),L(v,w[f],w[f+1],w[f+2]),L(x,w[V],w[V+1],w[V+2]),T(I,I,Q.rotationScale),T(v,v,Q.rotationScale),T(x,x,Q.rotationScale),C(I,I,Q.position),C(v,v,Q.position),C(x,x,Q.position),N(I,o,I,a),N(v,o,v,a),N(x,o,x,a),m(t,e,p)){case y.DISCARD:return!1;case y.KEEP:return!0}}return s.type!=="intersects"}const b=A(),qe=Ae;let R=class extends q{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Ve({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Oe(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:s,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:s,extent:$e.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new H("unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new H("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(s,r),i=Pe.fromJSON(n);return i.features.forEach(o=>{o.geometry=null}),i}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var l;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||Qe,r="esriGeometryPolygon",s=((l=this.layer.fieldsIndex)==null?void 0:l.toJSON())||new Je([]),n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new qe({hasZ:!0,hasM:!1,geometryType:r,fieldsIndex:s,timeInfo:null,spatialReference:i,objectIdField:e,featureStore:a,scheduler:n,priority:o}),this._dataQueryEngineInstance}};c([d({constructOnly:!0})],R.prototype,"layerView",void 0),c([d({constructOnly:!0})],R.prototype,"priority",void 0),c([d({constructOnly:!0})],R.prototype,"spatialIndex",void 0),c([d()],R.prototype,"spatialReference",null),c([d()],R.prototype,"layer",null),c([d()],R.prototype,"defaultQueryJSON",null),R=c([B("esri.views.3d.layers.i3s.I3SQueryEngine")],R);class ct{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:r,index:s}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=(o=r.attributeInfo)==null?void 0:o.attributeData;if(i!=null)for(const a of Object.keys(i))n[a]=ee(i[a],s);return n}getAttribute(e,r){var o;if(r===this._objectIdField)return e.id;const{meta:s,index:n}=e,i=(o=s.attributeInfo)==null?void 0:o.attributeData;return i!=null?ee(i[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,s,n,i,o]=this._getFeatureExtent(e,ne);return new K([5],[r,s,n,i,s,n,i,o,n,r,o,n,r,s,n])}getCentroid(e,r){if(e.geometry)return Le(new K,e.geometry,r.hasZ,r.hasM);const[s,n,i,o,a,l]=this._getFeatureExtent(e,ne);return new K([0],[(s+o)/2,(n+a)/2,(i+l)/2])}cloneWithGeometry(e,r){const{id:s,index:n,meta:i}=e;return{id:s,index:n,meta:i,geometry:r}}}const ne=A(),Ze=A();let O=class extends q{constructor(t){super(t),this.events=new ke}forEach(t){this.forAllFeatures(e=>(t(e),M.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const s of t)e(r(s,Ze))}forEachInBounds(t,e){this.forAllFeatures(r=>{const s=this.getFeatureExtent(r,Ue);return Me(t,Te(s,ze))&&e(r),M.CONTINUE},r=>{if(G(r.node.mbs,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=t[0]&&S[2]<=t[2]&&S[1]>=t[1]&&S[3]<=t[3])return M.CONTINUE;const s=Math.max(t[0],Math.min(S[0],t[2])),n=Math.max(t[1],Math.min(S[1],t[3])),i=S[0]-s,o=S[1]-n;return i*i+o*o<=S[3]*S[3]?M.CONTINUE:M.SKIP})}};c([d({constructOnly:!0})],O.prototype,"featureAdapter",void 0),c([d({constructOnly:!0})],O.prototype,"forAllFeatures",void 0),c([d({constructOnly:!0})],O.prototype,"getFeatureExtent",void 0),c([d({constructOnly:!0})],O.prototype,"sourceSpatialReference",void 0),c([d({constructOnly:!0})],O.prototype,"viewSpatialReference",void 0),O=c([B("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],O);const S=se(0,0,0,0),Ue=A(),ze=je();export{g as L,R as d,O as l,ct as o};