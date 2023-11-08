import{av as h,aB as w,aq as r,aC as d,am as V,aD as _,aE as c,aF as u,ah as e,ai as n,ak as p}from"./index-f98984bd.js";import{n as A}from"./LayerView3D-bc80d1da.js";import{u as v}from"./LayerView-39e64104.js";const o="analysis-view-handles";let i=class extends A(v){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const y=await this._loadAnalysisModule();this._analysisModule=y,a=y}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-459d10ad.js"),["assets/LineOfSightAnalysisView3D-459d10ad.js","assets/index-f98984bd.js","assets/index-8ff8146e.css","assets/LineVisualElement-538ffe69.js","assets/LineOfSightAnalysisTarget-17073b2a.js","assets/persistable-f9a2bc1e.js","assets/MD5-715f37cd.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-957c9dc9.js","assets/ElevationInfo-bdf2211b.js","assets/elevationInfoUtils-1c5172e7.js","assets/analysisViewUtils-3b88dcb7.js","assets/PointVisualElement-1319b250.js"])}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};