import{cT as p,cU as c,ah as s,ai as i,cD as l,cv as m,ak as d,cx as y}from"./index-f98984bd.js";import{p as u}from"./FeatureTemplate-42477554.js";let t=class extends p(y){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e of Object.keys(o))r[e]=c(o[e]);return r}writeDomains(o,r){var a;const e={};for(const n of Object.keys(o))o[n]&&(e[n]=(a=o[n])==null?void 0:a.toJSON());r.domains=e}};s([i({json:{write:!0}})],t.prototype,"id",void 0),s([i({json:{write:!0}})],t.prototype,"name",void 0),s([i({json:{write:!0}})],t.prototype,"domains",void 0),s([l("domains")],t.prototype,"readDomains",null),s([m("domains")],t.prototype,"writeDomains",null),s([i({type:[u],json:{write:!0}})],t.prototype,"templates",void 0),t=s([d("esri.layers.support.FeatureType")],t);const w=t;export{w as n};