import{dh as s,di as a}from"./index-d3195b17.js";function u(l){const r=l.view.spatialReference,e=l.layer.fullExtent,n=e!=null&&e.spatialReference;if(e==null||!n)return Promise.resolve(null);if(n.equals(r))return Promise.resolve(e.clone());const t=s(e,r);return t!=null?Promise.resolve(t):l.view.state.isLocal?a(e,r,l.layer.portalItem).then(o=>!l.destroyed&&o?o:null).catch(()=>null):Promise.resolve(null)}export{u as l};
