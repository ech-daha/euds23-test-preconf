import{el as e,ce as l}from"./index-f98984bd.js";function i(t){return{origin:"portal-item",url:e(t.itemUrl),portal:t.portal||l.getDefault(),portalItem:t,readResourcePaths:[]}}function n(t){const r=e(t.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:r,portal:t.portal||l.getDefault(),portalItem:t,verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function p(t){return{origin:"web-map",url:e(t.itemUrl),portal:t.portal||l.getDefault(),portalItem:t,readResourcePaths:[]}}function s(t,r){const o=e(t.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:o,portal:t.portal||l.getDefault(),portalItem:t,initiator:r,verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}export{s as a,i as e,p as l,n as o};