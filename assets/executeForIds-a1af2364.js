import{cz as f}from"./index-f98984bd.js";import{S as a,p as s}from"./query-b09d79d5.js";import{b as m}from"./Query-1e9b8ba4.js";async function u(t,n,o){const r=f(t);return a(r,m.from(n),{...o}).then(c=>c.data.count)}async function d(t,n,o){const r=f(t);return s(r,m.from(n),{...o}).then(c=>c.data.objectIds)}export{u as n,d as s};