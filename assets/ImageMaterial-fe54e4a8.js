import{iM as y,iN as $,iO as A,aQ as p,iP as c,iQ as I,iR as O,iS as S,iT as j,iU as n,iV as m,iW as b,iX as d,iY as x,aF as C,iZ as D,i_ as E,ah as r,i$ as o,j0 as P,j1 as w,j2 as N,j3 as R,j4 as V,j5 as L,j6 as F,j7 as M,j8 as U,j9 as B,ja as W,jb as z,jc as G,jd as H,je as Q,jf as k,jg as q,jh as u,ji as X,jj as Y,jk as Z,jl as J,jm as K,jn as ee,jo as te,jp as se}from"./index-d3195b17.js";function ae(t){const e=new y,{vertex:s,fragment:a}=e;return $(s,t),e.include(A,t),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(c`
    void main(void) {
      vpos = position;
      ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(I,t),e.include(O,t),a.uniforms.add(new S("tex",l=>l.texture),new j("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),t.output===n.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(m)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(b),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(m)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${t.transparencyPassType===d.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:ae},Symbol.toStringTag,{value:"Module"}));class _ extends w{initializeProgram(e){return new N(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,s){const a=this.configuration,l=e===d.NONE,h=e===d.FrontFace;return R({blending:a.output!==n.Color&&a.output!==n.Alpha||!a.transparent?null:l?re:V(e),culling:L(a.cullFace),depthTest:{func:F(e)},depthWrite:l?a.writeDepth?M:null:U(e),colorWrite:B,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?s?z:G:null,polygonOffset:l||h?null:H(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new x(ie,()=>C(()=>import("./ImageMaterial.glsl-7cf94565.js"),["assets/ImageMaterial.glsl-7cf94565.js","assets/index-d3195b17.js","assets/index-8ff8146e.css"]));const re=D(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends Q{constructor(){super(...arguments),this.output=n.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=d.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:n.COUNT})],i.prototype,"output",void 0),r([o({count:P.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:d.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const T=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);let ce=class extends k{constructor(e){super(e,new le),this.supportsEdges=!0,this._vertexAttributeLocations=T,this._configuration=new i}getConfiguration(e,s){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<q,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,s){return s===n.Color||s===n.Alpha||s===n.Highlight?e===u.DRAPED_MATERIAL?!0:s===n.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new oe(e)}createBufferWriter(){const e=X.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new ne(e)}};class oe extends Y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ne extends Z{write(e,s,a,l,h){for(const f of this.vertexBufferLayout.fields.keys()){const g=a.attributes.get(f);if(g)if(f===p.PERSPECTIVEDIVIDE){J(g.size===1);const v=l.getField(f,K);v&&ee(g,v,h)}else te(f,g,e,s,l,h)}}}class le extends se{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{ce as g,ae as v};
