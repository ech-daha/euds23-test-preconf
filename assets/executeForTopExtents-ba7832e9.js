import{cz as e,bq as n}from"./index-a1cac181.js";import{d as p}from"./queryTopFeatures-2aedd7d3.js";import{S as i}from"./TopFeaturesQuery-61f4fc16.js";import"./query-0260ec48.js";import"./pbfQueryUtils-13f6e3b7.js";import"./pbf-16158dc0.js";import"./queryZScale-f8e7b210.js";async function b(o,r,m){const a=e(o),t=await p(a,i.from(r),{...m});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{b as executeForTopExtents};
