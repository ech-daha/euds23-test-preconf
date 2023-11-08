import{av as h,aB as w,aq as y,aC as d,am as V,aD as _,aE as c,aF as u,ah as e,ai as n,ak as p}from"./index-a1cac181.js";import{n as A}from"./LayerView3D-3cbda063.js";import{u as v}from"./LayerView-8ac51c6c.js";const o="analysis-view-handles";let i=class extends A(v){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const r=await this._loadAnalysisModule();this._analysisModule=r,a=r}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-2a8582f5.js"),["./LineOfSightAnalysisView3D-2a8582f5.js","./index-a1cac181.js","./index-8ff8146e.css","./LineVisualElement-95b7ae27.js","./LineOfSightAnalysisTarget-20ecfb8f.js","./persistable-bc783712.js","./MD5-715f37cd.js","./multiOriginJSONSupportUtils-c978f4c3.js","./resourceExtension-c6ac8ad3.js","./ElevationInfo-1c41bf4e.js","./elevationInfoUtils-38658fef.js","./analysisViewUtils-ba4dc63c.js","./PointVisualElement-e6db4584.js"],import.meta.url)}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};
