import{al as l,de as d,df as o,ao as p,af as u,b7 as y,am as h,ah as s,ai as i,ak as g}from"./index-d3195b17.js";let t=class extends l(d(o.EventedMixin(p))){constructor(e){super(e),this._updatingHandles=new u,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{var r;if(e.name!=="layerview:create-error"){const n=this.layer&&this.layer.id||"no id",a=((r=this.layer)==null?void 0:r.title)||"no title";y.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${n}')`,e)}})}destroy(){this._updatingHandles=h(this._updatingHandles)}get fullOpacity(){var e,r;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((r=this.parent)==null?void 0:r.fullOpacity)??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this._updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,r,n;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((n=this.view)==null?void 0:n.ready)||!1}getSuspendInfo(){var n,a;const e=(n=this.parent)!=null&&n.suspended?this.parent.suspendInfo:{};return(a=this.view)!=null&&a.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};s([i()],t.prototype,"fullOpacity",null),s([i()],t.prototype,"layer",void 0),s([i()],t.prototype,"parent",void 0),s([i({readOnly:!0})],t.prototype,"suspended",null),s([i({readOnly:!0})],t.prototype,"suspendInfo",null),s([i({readOnly:!0})],t.prototype,"legendEnabled",null),s([i({type:Boolean,readOnly:!0})],t.prototype,"updating",null),s([i({readOnly:!0})],t.prototype,"updatingProgress",null),s([i()],t.prototype,"visible",null),s([i()],t.prototype,"view",void 0),t=s([g("esri.views.layers.LayerView")],t);const c=t;export{c as u};
