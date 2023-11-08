import{ay as m,ag as s,az as n,ah as i,ai as o,aA as l,ak as d}from"./index-a1cac181.js";import{E as c}from"./I3SMeshView3D-18b89726.js";import{n as u}from"./LayerView3D-3cbda063.js";import{u as h}from"./LayerView-8ac51c6c.js";import"./I3SOverrides-0b4e6900.js";import"./I3SNode-4775f644.js";import"./I3SUtil-e0c4dc89.js";import"./Query-8ec96004.js";import"./I3SBinaryReader-ee1cba0c.js";import"./ReactiveSet-96dea6cb.js";import"./featureQueryAll-ec4a11be.js";import"./meshFeatureSet-28134c47.js";import"./External-48e3c7c0.js";import"./FeatureSet-444cbc0f.js";import"./FeatureLayerView3D-95b77eed.js";import"./FeatureLayerViewBase3D-0ef83067.js";import"./FeatureLikeLayerView3D-1bce699c.js";import"./dehydratedFeatureComparison-0d28d135.js";import"./queryForSymbologySnapping-4bf445c2.js";import"./elevationInfoUtils-38658fef.js";import"./hash-6f442295.js";import"./diffUtils-ef6bbcbf.js";import"./UniqueValueRenderer-3d9243c5.js";import"./ColorStop-2602b4bf.js";import"./colorRamps-b2150d6f.js";import"./Graphics3DObjectStates-7c6ad957.js";import"./jsonUtils-46c07947.js";import"./DictionaryLoader-4dd3c670.js";import"./FieldsIndex-6b49ca64.js";import"./UnknownTimeZone-ab7c6b01.js";import"./heatmapUtils-2351b1fb.js";import"./defaults-06f3d090.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-865d3f13.js";import"./PooledRBush-6417eb86.js";import"./quickselect-29477ff4.js";import"./popupUtils-ef16fd02.js";import"./FeatureFilter-22854955.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-161e756d.js";import"./WhereClause-94ad22d7.js";import"./TimeOnly-d19fd4d4.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-886070e6.js";import"./utils-5dc09d08.js";import"./generateRendererUtils-d73d141f.js";import"./FeatureStore-2c50987b.js";import"./BoundsStore-4bb1f6f0.js";import"./projectExtentUtils-b0efc861.js";import"./query-0260ec48.js";import"./pbfQueryUtils-13f6e3b7.js";import"./pbf-16158dc0.js";import"./queryZScale-f8e7b210.js";import"./EventedSet-a40b05a3.js";import"./commonProperties-7ade9483.js";import"./ElevationInfo-1c41bf4e.js";import"./FeatureEffect-01234d29.js";import"./jsonUtils-9ebed520.js";import"./RefreshableLayerView-75b1f5f5.js";import"./SceneModification-f81076cb.js";import"./persistable-bc783712.js";import"./MD5-715f37cd.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-c6ac8ad3.js";import"./SceneLayerWorker-64d93102.js";const g=.2;let r=class extends c(u(h)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,e,a,p;return((p=(a=(e=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:e.sceneService)==null?void 0:a.integratedMesh)==null?void 0:p.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),s),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new n;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),s),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(l)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([d("esri.views.3d.layers.SceneLayerView3D")],r);const $t=r;export{$t as default};