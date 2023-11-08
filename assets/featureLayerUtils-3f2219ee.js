import{fB as Y,cc as f,dL as _,fC as B,aq as y}from"./index-a1cac181.js";import{i as A}from"./originUtils-cfe4feaf.js";import{I as G,y as P,w as E,b as k,u as z,v as j,l as N,d as q,m as T}from"./utils-1e8eb5eb.js";import{t as C}from"./fetchService-6d00ac74.js";import{a as V}from"./lazyLayerLoader-aea79d16.js";import{o as g}from"./jsonContext-c4023ffa.js";import{l as x,a as I,u as $,f as u,i as b}from"./portalItemUtils-bd3ade0c.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-c8a9e333.js";const h="Feature Service",w="feature-layer-utils",H=`${w}-save`,Q=`${w}-save-as`,p=`${w}-saveall`,m=`${w}-saveall-as`;function v(e){return{isValid:B(e)&&(e.type!=="feature"||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function O(e){const a=[],r=[];for(const{layer:s,layerJSON:l}of e)s.isTable?r.push(l):a.push(l);return{layers:a,tables:r}}function F(e){return O([e])}async function J(e,a){return/\/\d+\/?$/.test(e.url)?F(a[0]):M(a,e)}async function M(e,a){if(!a)return e.reverse(),O(e);const{layer:{url:r,customParameters:s,apiKey:l}}=e[0];let t=await a.fetchData("json");(t==null?void 0:t.layers)!=null&&(t==null?void 0:t.tables)!=null||(t=await W(t,{url:r??"",customParameters:s,apiKey:l},e.map(n=>n.layer.layerId)));for(const n of e)R(n.layer,n.layerJSON,t);return t}async function W(e,a,r){e||(e={}),e.layers||(e.layers=[]),e.tables||(e.tables=[]);const{url:s,customParameters:l,apiKey:t}=a,{serviceJSON:n,layersJSON:o}=await C(s,{customParameters:l,apiKey:t}),i=L(e.layers,n.layers,r),c=L(e.tables,n.tables,r);e.layers=i.itemResources,e.tables=c.itemResources;const d=[...i.added,...c.added],K=o?[...o.layers,...o.tables]:[];return await X(e,d,s,K),e}function L(e,a,r){const s=Y(e,a,(t,n)=>t.id===n.id);e=e.filter(t=>!s.removed.some(n=>n.id===t.id));const l=s.added;return l.forEach(({id:t})=>{e.push({id:t})}),{itemResources:e,added:l.filter(({id:t})=>!r.includes(t))}}async function X(e,a,r,s){const l=await Z(a),t=a.map(({id:n,type:o})=>new(l.get(o))({url:r,layerId:n,sourceJSON:s.find(({id:i})=>i===n)}));await Promise.allSettled(t.map(n=>n.load())),t.forEach(n=>{const{layerId:o,loaded:i,defaultPopupTemplate:c}=n;if(!i||c==null)return;const d={id:o,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(d.layerType=n.operationalLayerType),R(n,d,e)})}async function Z(e){const a=[];e.forEach(({type:l})=>{const t=ee(l),n=V[t];a.push(n())});const r=await Promise.all(a),s=new Map;return e.forEach(({type:l},t)=>{s.set(l,r[t])}),s}function ee(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer"}return a}function R(e,a,r){e.isTable?S(r.tables,a):S(r.layers,a)}function S(e,a){const r=e.findIndex(({id:s})=>s===a.id);r===-1?e.push(a):e[r]=a}function D(e,a){if(!e.length)throw new y(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ae(e,a){const r=e.map(s=>s.portalItem.id);if(new Set(r).size>1)throw new y(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function U(e,a){const r=e.map(s=>s.layerId);if(new Set(r).size!==r.length)throw new y(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function re(e){D(e,p),await Promise.all(e.map(a=>a.load()));for(const a of e)N(a,p,v),q({layer:a,itemType:h,errorNamePrefix:p});ae(e,p),U(e,p)}async function te(e,a){const{url:r,layerId:s,title:l,fullExtent:t,isTable:n}=e,o=f(r);a.url=(o==null?void 0:o.serverType)==="FeatureServer"?r:`${r}/${s}`,a.title||(a.title=l),a.extent=null,n||t==null||(a.extent=await x(t)),I(a,u.METADATA),I(a,u.MULTI_LAYER),b(a,u.SINGLE_LAYER),n&&b(a,u.TABLE)}function ne(e,a){for(const t of e){const n=t.parsedUrl.path,o=f(n);if(!(o==null?void 0:o.url.path))throw new y(`${a}:invalid-parameters`,T(t,`has unsupported url pattern: ${n}`),{layer:t});const c=o==null?void 0:o.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${a}:invalid-parameters`,T(t,`has unsupported server type: ${c}`),{layer:t});if(c==="MapServer"&&e.length>1)throw new y(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const r=f(e[0].parsedUrl.path),s=r==null?void 0:r.url.path;if(!e.every(t=>{const n=f(t.parsedUrl.path);return(n==null?void 0:n.url.path)===s}))throw new y(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function se(e){D(e,m),await Promise.all(e.map(a=>a.load()));for(const a of e)N(a,m,v);ne(e,m),U(e,m)}async function oe(e,a){let r=0,s=0;for(const{isTable:n}of a)n?s++:r++;const l=a[0].parsedUrl.path,t=f(l);if(e.url=(t==null?void 0:t.serverType)==="FeatureServer"?t.url.path:l,e.title||(e.title=t.title),e.extent=null,r>0){const n=a.map(o=>o.fullExtent).filter(_).reduce((o,i)=>o.clone().union(i));n&&(e.extent=await x(n))}I(e,u.METADATA),$(e,u.MULTI_LAYER,a.length>1),$(e,u.SINGLE_LAYER,a.length===1),$(e,u.TABLE,s>0&&r===0),E(e)}async function he(e,a){return G({layer:e,itemType:h,validateLayer:v,createItemData:(r,s)=>J(s,[r]),errorNamePrefix:H},a)}async function we(e,a){await re(e);const r=e[0].portalItem,s=g(r),l=await Promise.all(e.map(n=>P(n,s,a))),t=await J(r,e.map((n,o)=>({layer:n,layerJSON:l[o]})));return E(r),await r.update({data:t}),await Promise.all(e.slice(1).map(n=>n.portalItem.reload())),A(s),r.clone()}async function ve(e,a,r){return k({layer:e,itemType:h,validateLayer:v,createItemData:(s,l)=>Promise.resolve(F(s)),errorNamePrefix:Q,newItem:a,setItemProperties:te},r)}async function $e(e,a,r){await se(e);const s=z({itemType:h,errorNamePrefix:m,newItem:a}),l=g(s),t=await Promise.all(e.map(o=>P(o,l,r))),n=await M(e.map((o,i)=>({layer:o,layerJSON:t[i]})));await oe(s,e),await j(s,n,r);for(const o of e)o.portalItem=s.clone();return A(l),s}export{he as save,we as saveAll,$e as saveAllAs,ve as saveAs};