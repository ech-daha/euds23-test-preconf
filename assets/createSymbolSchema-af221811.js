import{n as V}from"./cimAnalyzer-66a95c28.js";import{E as c,S as b}from"./enums-9d4f5c11.js";import{f as h,_ as S,A as d}from"./SymbolProcessor-ca6188b8.js";import"./index-d3195b17.js";import"./labelPoint-33b71dbc.js";import"./TileClipper-ae6eca9e.js";import"./definitions-52e72a55.js";import"./number-e491b09e.js";import"./BidiEngine-9a40f2f4.js";import"./diffUtils-b5203f5e.js";import"./Pipeline-c6622c14.js";import"./QueryEngine-51648718.js";import"./WhereClause-d1f79e4c.js";import"./TimeOnly-fd60a1b5.js";import"./UnknownTimeZone-03c4b711.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-f192af34.js";import"./heatmapUtils-7081b352.js";import"./utils-310937b3.js";import"./generateRendererUtils-80716b88.js";import"./FieldsIndex-a5446f2b.js";import"./StreamFeatureManager-68277802.js";import"./quickselect-785ed631.js";import"./ogcFeatureUtils-7ff69aa2.js";import"./geojson-fd35548d.js";import"./date-294ce3fb.js";import"./clientSideDefaults-d46b8d80.js";import"./defaultsJSON-59981e75.js";import"./query-a21fc717.js";import"./pbfQueryUtils-ebf8de8c.js";import"./pbf-8e41dbab.js";import"./queryZScale-130e9ed5.js";import"./Query-f1607220.js";import"./createConnection-318296db.js";import"./geohashUtils-77d8429b.js";import"./tileUtils-cc7f77a8.js";import"./TurboLine-ea0f55cd.js";import"./Rect-98da58d6.js";import"./GeometryUtils-0258f920.js";function y(e){var t;return e.type==="line-marker"?{type:"line-marker",color:(t=e.color)==null?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function u(e){return d(e)}function x(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return g(e,t,r);case"simple-marker":case"picture-marker":return E(e,t,r);case"simple-line":return z(e,t,r);case"text":return k(e,t,r);case"label":return K(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...y(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function K(e,t,r){const o=e.toJSON(),i=h(c.LABEL,{...t,placement:o.labelPlacement});return{materialKey:r?u(i):i,hash:e.hash(),...o,labelPlacement:o.labelPlacement}}function g(e,t,r){const o=h(c.FILL,t),i=r?u(o):o,m=e.clone(),a=m.outline,s=S(t.symbologyType);s||(m.outline=null);const p={materialKey:i,hash:m.hash(),...y(m)};if(s)return p;const l=[];if(l.push(p),a){const n=h(c.LINE,{...t,isOutline:!0}),f={materialKey:r?u(n):n,hash:a.hash(),...y(a)};l.push(f)}return{type:"composite-symbol",layers:l,hash:l.reduce((n,f)=>f.hash+n,"")}}function z(e,t,r){const o=S(t.symbologyType)?b.DEFAULT:t.symbologyType,i=h(c.LINE,{...t,symbologyType:o}),m=r?u(i):i,a=e.clone(),s=a.marker;a.marker=null;const p=[];if(p.push({materialKey:m,hash:a.hash(),...y(a)}),s){const l=h(c.MARKER,t),n=r?u(l):l;s.color=s.color??a.color,p.push({materialKey:n,hash:s.hash(),lineWidth:a.width,...y(s)})}return{type:"composite-symbol",layers:p,hash:p.reduce((l,n)=>n.hash+l,"")}}function E(e,t,r){if(e.type==="simple-marker"&&(e.style==="path"||e.outline&&e.outline.style!=="solid"&&e.outline.style!=="none"))return x({type:"CIMSymbolReference",symbol:V.fromSimpleMarker(e)},t,r);const o=h(c.MARKER,t),i=r?u(o):o,m=y(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:t.maxVVSize}}function k(e,t,r){const o=h(c.TEXT,t),i=r?u(o):o,m=y(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:t.maxVVSize}}export{x as createSymbolSchema};
