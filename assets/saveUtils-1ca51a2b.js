import{dy as I,fh as v,ca as g,aq as b,fi as k,c9 as h}from"./index-d3195b17.js";import{getSiblingOfSameTypeI as F,contentToBlob as f}from"./resourceUtils-00105fb7.js";async function $(e,t,s=null){const o=await l(e,t,s);await m(o,t,s)}async function q(e,t,s,o,a=null){const n=await l(s,o,a);await e.update({data:t}),await m(n,o,a)}async function l(e,t,s=null){if(!(t!=null&&t.resources))return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(r=>r.resource.path)),n=new Set,c=[];a.forEach(r=>{o.delete(r),e.paths.push(r)});for(const r of t.resources.toUpdate)if(o.delete(r.resource.path),a.has(r.resource.path)||n.has(r.resource.path)){const{resource:w,content:d,finish:y,error:S}=r,p=F(w,I());e.paths.push(p.path),c.push(i({resource:p,content:d,compress:r.compress,finish:y,error:S},s))}else e.paths.push(r.resource.path),c.push(P(r,s)),n.add(r.resource.path);for(const r of t.resources.toAdd)e.paths.push(r.resource.path),o.has(r.resource.path)?o.delete(r.resource.path):c.push(i(r,s));if(c.length===0)return o;const u=await v(c);if(g(s),u.length>0)throw new b("save:resources","Failed to save one or more resources",{errors:u});return o}async function m(e,t,s=null){if(!e||!t.portalItem)return;const o=[];for(const a of e){const n=t.portalItem.resourceFromPath(a);o.push(n.portalItem.removeResource(n,s))}await k(o)}async function i(e,t){var a,n;const s={...t??{},compress:e.compress},o=await h(e.resource.portalItem.addResource(e.resource,await f(e.content),s));if(o.ok!==!0)throw(a=e.error)==null||a.call(e,o.error),o.error;(n=e.finish)==null||n.call(e,e.resource)}async function P(e,t){var o,a;const s=await h(e.resource.update(await f(e.content),t));if(s.ok!==!0)throw(o=e.error)==null||o.call(e,s.error),s.error;(a=e.finish)==null||a.call(e,e.resource)}async function x(e){const t=[];for(const s of e.allLayers)if("beforeSave"in s&&typeof s.beforeSave=="function"){const o=s.beforeSave();o&&t.push(o)}await Promise.allSettled(t)}export{x as m,q as p,$ as u};
