import{fv as a,ah as s,ai as i,ak as n,bd as d,aq as l}from"./index-d3195b17.js";import{m as u}from"./MultiOriginJSONSupport-9c569f95.js";import{j as y}from"./PortalLayer-e38eb8f2.js";import"./portalItemUtils-859fdbc0.js";let t=class extends y(u(d)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{a(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let p="Unsupported layer type";r&&(p+=" "+r),o(new l("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};s([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),s([i({type:["show","hide"]})],t.prototype,"listMode",void 0),s([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),s([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=s([n("esri.layers.UnsupportedLayer")],t);const v=t;export{v as default};
