import{dn as j,dp as N,dq as P,dr as v,ds as b,dt as A,du as S,dv as R,dw as U,dx as O,aq as F,dy as q,dz as z,dA as C,dB as J,dC as K}from"./index-f98984bd.js";import{x as B}from"./MD5-715f37cd.js";import{i as H}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{p as y}from"./resourceExtension-957c9dc9.js";function T(e){const o=(e==null?void 0:e.origins)??[void 0];return(r,n)=>{const s=V(e,r,n);for(const a of o){const i=j(r,a,n);for(const t in s)i[t]=s[t]}}}function V(e,o,r){if((e==null?void 0:e.type)==="resource")return Y(e,o,r);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=K;return{read:n,write:s}}}}function Y(e,o,r){const n=N(o,r);return{type:String,read:(s,a,i)=>{const t=P(s,a,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(s,a,i,t){if(!(t!=null&&t.resources))return typeof s=="string"?void(a[i]=v(s,t)):void(a[i]=s.write({},t));const c=D(s),d=v(c,{...t,verifyItemRelativeUrls:t!=null&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),l=n.type!==String&&(!H(this)||(t==null?void 0:t.origin)&&this.originIdOf(r)>A(t.origin)),p={object:this,propertyName:r,value:s,targetUrl:d,dest:a,targetPropertyName:i,context:t,params:e};t!=null&&t.portalItem&&d&&!S(d)?l&&(e!=null&&e.contentAddressed)?g(p):l?Z(p):k(p):t!=null&&t.portalItem&&(d==null||R(d)!=null||U(d)||l)?g(p):a[i]=d}}}}function g(e){var h;const{targetUrl:o,params:r,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const t=O(o),c=I(n,o,s);if(r!=null&&r.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const d=r!=null&&r.contentAddressed&&c.type==="json"?B(c.jsonString):(t==null?void 0:t.filename)??q(),l=z((r==null?void 0:r.prefix)??(t==null?void 0:t.prefix),d),p=`${l}.${y(c)}`;if(r!=null&&r.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(f=>f.resource.path===p)??s.resources.toAdd.find(f=>f.resource.path===p);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(p);U(o)&&s.resources&&s.resources.pendingOperations.push(C(o).then(m=>{u.path=`${l}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const x=(r==null?void 0:r.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:x,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function Z(e){const{context:o,targetUrl:r,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const t=o.portalItem.resourceFromPath(r),c=I(s,r,o),d=y(c),l=J(t.path),p=(n==null?void 0:n.compress)??!1;d===l?(o.resources&&w({...e,resource:t,content:c,compress:p,updates:o.resources.toUpdate}),a[i]=r):g(e)}function k({context:e,targetUrl:o,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}function w({object:e,propertyName:o,updates:r,resource:n,content:s,compress:a}){r.push({resource:n,content:s,compress:a,finish:i=>{E(e,o,i)}})}function I(e,o,r){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}function D(e){return e==null?null:typeof e=="string"?e:e.url}function E(e,o,r){typeof e[o]=="string"?e[o]=r.url:e[o].url=r.url}export{T as j};