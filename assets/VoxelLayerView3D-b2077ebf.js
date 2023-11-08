import{aq as m,aY as W,aZ as T,av as l,ag as E,a_ as r,a$ as V,b0 as x,b1 as A,b2 as I,b3 as M,b4 as L,b5 as D,b6 as P,b7 as w,ah as y,ai as _,ak as F,b8 as g}from"./index-a1cac181.js";import{n as $}from"./LayerView3D-3cbda063.js";import{i as C}from"./PopupSceneLayerView-2a3d1587.js";import{u as R}from"./LayerView-8ac51c6c.js";import"./popupUtils-ef16fd02.js";var t;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(t||(t={}));const h=g(),S=g();let u=class extends C($(R)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e;return((e=this.layer.parsedUrl)==null?void 0:e.path)??""}get wasmLayerId(){return this._wasmLayerId}initialize(){var c;if(this._dbgFlags.add(t.Error),this.view.viewingMode!=="local")throw new m("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!((c=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)!=null&&c.textureFloat))throw new m("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!W(e,this.view.spatialReference))throw new m("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,i=this.layer.getVolume(s),o=this.layer.getVariable(s);if(i!=null&&o!=null){const d=i.dimensions[0],a=i.dimensions[1],b=i.zDimension;if(b>1){const f=i.dimensions[b],v=d.size*a.size*f.size;let p=1;switch(o.renderingFormat.type){case"Int16":case"UInt16":p=2;break;case"Int32":case"UInt32":case"Float32":p=4}this._futureMemory=p*v}}const n=T(this).then(d=>{this._wasmLayerId=d,this._suspendedHandle=l(()=>this.suspended,a=>{const b=r(this.view);b&&b.setEnabled(this,!a)},E),this.addHandles([l(()=>this.layer.renderMode,a=>this._pushRenderModeToWasm(a)),l(()=>this.layer.currentVariableId,a=>this._pushCurrentVariableIdToWasm(a)),l(()=>this.layer.getSections(),a=>this._pushSectionsToWasm(a)),l(()=>this.layer.getVariableStyles(),a=>this._pushVariableStylesToWasm(a)),l(()=>this.layer.getVolumeStyles(),a=>this._pushVolumeStylesToWasm(a)),l(()=>this.layer.enableDynamicSections,a=>this._pushEnableDynamicSectionsToWasm(a)),l(()=>this.layer.enableIsosurfaces,a=>this._pushEnableIsosurfacesToWasm(a)),l(()=>this.layer.enableSections,a=>this._pushEnableSectionsToWasm(a)),l(()=>this.layer.enableSlices,a=>this._pushEnableSlicesToWasm(a)),l(()=>this.slicePlaneEnabled,a=>this._pushAnalysisSliceToWasm(a,this.view.slicePlane)),l(()=>this.view.slicePlane,a=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,a))])}).catch(d=>{if(V(this),this._wasmLayerId=-1,d===-1)throw new m("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(d===-2)throw new m("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(n)}destroy(){V(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}whenGraphicBounds(e,s){const i=e.attributes["Voxel.WorldPosition"];if(i){const o=x(),n=JSON.parse(i);if(A(n,this.view.renderSpatialReference,S,this.view.spatialReference||I.WGS84))return M(o,S),Promise.resolve({boundingBox:o,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=r(this.view);e==null||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=r(this.view);e==null||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){const e=r(this.view);return(e==null?void 0:e.getLayerTimes(this))??[]}getCurrentLayerTimeIndex(){const e=r(this.view);return(e==null?void 0:e.getCurrentLayerTimeIndex(this))??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setRenderMode(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setStaticSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setCurrentVariable(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setVariableStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const i=s??this.layer.enableSlices;for(let o=0;o<e.length;++o){const n=e[o];for(const c of n.slices)c.enabled=c.enabled&&i}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const i=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(i?"have WASM":"don't have WASM!!!"));let o=!1;if(i){if(s){const n=s.origin;L(h,s.basis1,s.basis2),D(h,h),o=i.setAnalysisSlice(this,e,n,h)}else P(h,0,0,1),o=i.setAnalysisSlice(this,!1,h,h);o||this._dbg(t.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableDynamicSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const i=this.layer.getVolumeStyles();this._accountForEnableSlices(i,e),s.setVolumeStyles(this,i)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableIsosurfaces(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===t.Error?w.getLogger(this).error(s):w.getLogger(this).warn(s))}};y([_()],u.prototype,"layer",void 0),y([_()],u.prototype,"baseUrl",null),y([_({type:Boolean})],u.prototype,"slicePlaneEnabled",void 0),u=y([F("esri.views.3d.layers.VoxelLayerView3D")],u);const G=u;export{G as default};