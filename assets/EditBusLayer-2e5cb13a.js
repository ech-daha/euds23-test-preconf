import{fG as $,aF as E,df as H,fD as L,ah as k,ak as x,cy as p}from"./index-d3195b17.js";const T=$(),P=new Map,j=new Map;async function B(e,d,a=!1){var s,r;if(!e||!d)return!0;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(s=j.get(n))==null?void 0:s.entries();if(i){for(const[l,c]of i)if(c.name===d){const h=!((r=c.stack)!=null&&r.hasForwardEdits());if(!h&&a){const[{deleteForwardEdits:m},{default:u}]=await Promise.all([E(()=>import("./deleteForwardEdits-fb97e2d5.js"),["assets/deleteForwardEdits-fb97e2d5.js","assets/index-d3195b17.js","assets/index-8ff8146e.css"]),E(()=>import("./DeleteForwardEditsParameters-374791b1.js"),["assets/DeleteForwardEditsParameters-374791b1.js","assets/index-d3195b17.js","assets/index-8ff8146e.css"])]);return m(n,l,new u({sessionId:T,moment:c.moment}))}return h}}return!0}function U(e,d){var i;if(!e)return!1;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=(i=j.get(a))==null?void 0:i.entries();if(n){for(const[s,r]of n)if(r.name===d)return r.lockType==="edit"}return!1}const g=new H.EventEmitter;function D(e){return g.on("apply-edits",new WeakRef(e))}function O(e){return g.on("update-moment",new WeakRef(e))}function C(e,d,a=null,n=!1){const i=L();return n=d==null||n,g.emit("apply-edits",{serviceUrl:e,layerId:d,gdbVersion:a,mayReceiveServiceEdits:n,result:i.promise}),i}const w="esri.layers.mixins.EditBusLayer",A=Symbol(w);function G(e){return e!=null&&typeof e=="object"&&A in e}function f(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function b(e,d,a){const n=new URL(e).host,i=P.get(n),s=r=>!r||r===i;return s(d)&&s(a)||d===a}const q=e=>{var d;let a=class extends e{constructor(...n){super(...n),this[d]=!0,this._applyEditsHandler=i=>{const{serviceUrl:s,layerId:r,gdbVersion:l,mayReceiveServiceEdits:c,result:h}=i,m=s===this.url,u=r!=null&&this.layerId!=null&&r===this.layerId,V=f(this),R=f(this)&&b(s,l,this.gdbVersion);if(!m||V&&!R||!u&&!c)return;const S=h.then(t=>{var y;if(u&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",p(t)),t;const I=(y=t.editedFeatures)==null?void 0:y.find(({layerId:F})=>F===this.layerId);if(I){const{adds:F,updates:M,deletes:v}=I.editedFeatures,_={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:o})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],deletedFeatures:v?v.map(({attributes:o})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],updatedFeatures:M?M.map(({current:{attributes:o}})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],editedFeatures:p(t.editedFeatures),exceededTransferLimit:!1,historicMoment:p(t.historicMoment)};return this.emit("edits",_),_}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(t.editedFeatures),exceededTransferLimit:!1,historicMoment:p(t.historicMoment)}}).then(t=>("historicMoment"in this&&this.historicMoment!==t.historicMoment&&U(s,l)&&(this.historicMoment=t.historicMoment),t));this.emit("apply-edits",{result:S})},this._updateMomentHandler=i=>{const{serviceUrl:s,gdbVersion:r,moment:l}=i,c=s===this.url,h=f(this),m=f(this)&&b(s,r,this.gdbVersion),u=f(this)&&!b(s,this.gdbVersion,null);c&&h&&m&&u&&"historicMoment"in this&&this.historicMoment!==l&&(this.historicMoment=l)},this.when().then(()=>{this.addHandles(D(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(O(this._updateMomentHandler))},()=>{})}};return d=A,a=k([x(w)],a),a};export{q as F,U as a,C as c,G as p,T as r,B as s};
