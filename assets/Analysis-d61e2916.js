import{fj as r,cT as n,al as o,dL as l,ah as e,ai as s,ak as p,ao as y}from"./index-f98984bd.js";let c=0,t=class extends r(n(o(y))){constructor(a){super(a),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(a){const i=this.parent;if(i!=null)switch(i.type){case"line-of-sight":case"dimension":i.releaseAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",a)}get isEditable(){return this.requiredPropertiesForEditing.every(l)}};e([s({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([s({type:String})],t.prototype,"title",void 0),e([s({constructOnly:!0})],t.prototype,"type",void 0),e([s({clonable:!1,value:null})],t.prototype,"parent",null),e([s({readOnly:!0})],t.prototype,"isEditable",null),e([s({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",void 0),t=e([p("esri.analysis.Analysis")],t);const u=t;export{u as c};