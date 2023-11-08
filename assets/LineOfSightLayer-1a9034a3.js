import{au as u,ah as t,ai as s,at as L,ak as m,av as f,aB as v,ax as x,ie as R,hz as z,b3 as j,ig as _,bd as A}from"./index-d3195b17.js";import{c as P}from"./Analysis-1136e4e0.js";import{f as b,u as w}from"./LineOfSightAnalysisTarget-8b346d3b.js";import{r as S}from"./elevationInfoUtils-656308c0.js";import{m as T}from"./MultiOriginJSONSupport-9c569f95.js";import{u as q}from"./OperationalLayer-f6884624.js";import"./persistable-11fab1fe.js";import"./MD5-715f37cd.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-b3624c1c.js";import"./ElevationInfo-a4c4c4eb.js";import"./commonProperties-90280f28.js";const y=u.ofType(b);let n=class extends P{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(f(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},v))}get targets(){return this._get("targets")||new y}set targets(e){this._set("targets",x(e,this.targets,y))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var g;const e=this.spatialReference;if(((g=this.observer)==null?void 0:g.position)==null||e==null)return null;const h=a=>S(a.position,a.elevationInfo)==="absolute-height",o=this.observer.position,d=R(o.x,o.y,o.z,o.x,o.y,o.z);for(const a of this.targets)if(a.position!=null){const l=z(a.position,e);if(l.pending!=null)return{pending:l.pending,extent:null};if(l.geometry!=null){const{x:O,y:$,z:E}=l.geometry;j(d,[O,$,E])}}const p=_(d,e);return h(this.observer)&&this.targets.every(h)||(p.zmin=void 0,p.zmax=void 0),{pending:null,extent:p}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],n.prototype,"type",void 0),t([s({type:w,json:{read:!0,write:!0}})],n.prototype,"observer",void 0),t([s({cast:L,type:y,nonNullable:!0,json:{read:!0,write:!0}})],n.prototype,"targets",null),t([s({value:null,readOnly:!0})],n.prototype,"extent",void 0),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0})],n.prototype,"requiredPropertiesForEditing",null),n=t([m("esri.analysis.LineOfSightAnalysis")],n);const c=n,C=u.ofType(b);let r=class extends q(T(A)){constructor(i){super(i),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new c,this.opacity=1}initialize(){this.addHandles(f(()=>this.analysis,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},v))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var i;return(i=this.analysis)==null?void 0:i.observer}set observer(i){const{analysis:e}=this;e&&(e.observer=i)}get targets(){return this.analysis!=null?this.analysis.targets:new u}set targets(i){var e;x(i,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(i){this.analysis===i&&(this.analysis=new c)}};t([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([s({type:w,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),t([s({type:C,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([s({readOnly:!0})],r.prototype,"fullExtent",null),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([m("esri.layers.LineOfSightLayer")],r);const Q=r;export{Q as default};
