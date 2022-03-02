var N=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(s,t,e)=>t in s?N(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,m=(s,t)=>{for(var e in t||(t={}))R.call(t,e)&&I(s,e,t[e]);if(x)for(var e of x(t))H.call(t,e)&&I(s,e,t[e]);return s},h=(s,t)=>V(s,k(t));import{I as K,g as S,_ as D}from"./plugin-vue_export-helper.97c540ff.js";import{u as b,K as O,M as U,N as v,Q as g,w as l,x as u,y as d,A as E,G as z,U as _,V as i,z as w,H as p,Y as f,Z as A,_ as B,$ as C,a0 as J,a1 as F,a2 as $,a3 as G,a4 as Y,a5 as j,J as M}from"./vendor.4fe5ae2c.js";const P={class:"p-2"},Q={class:"list-disc ml-6"},W={class:"text-sm"},X=i(" ("),Z=i(") "),q=i(" raw data "),ee=i(" | "),se=i(" timeline "),te=b({setup(s){const t=O(U(K,{},{deep:!1,shallow:!0,writeDefaults:!1})),e=v(()=>Object.entries(t.value).map(([o,a])=>m({sessionId:o,lastDataTime:new Date(a.lastData)},a)).sort((o,a)=>a.lastData-o.lastData));return(r,o)=>{const a=g("RouterLink");return l(),u("div",P,[d("ul",Q,[(l(!0),u(E,null,z(_(e),n=>(l(),u("li",null,[i(w(n.sessionId)+" ",1),d("span",W,[X,p(_(A),{time:n.lastDataTime},{default:f(({timeAgo:c})=>[i(w(c),1)]),_:2},1032,["time"]),Z]),p(a,{to:{name:"session.view",params:{sessionId:n.sessionId}}},{default:f(()=>[q]),_:2},1032,["to"]),ee,p(a,{to:{name:"session.timeline",params:{sessionId:n.sessionId}}},{default:f(()=>[se]),_:2},1032,["to"])]))),256))])])}}});function L(s){return B({spans:y(v(()=>S("spans",_(s))),oe),logs:y(v(()=>S("logs",_(s))),ae)})}function y(s,t){const e=C([]);function r(o){if(!(o&&o.key!==s.value))try{const a=o?o.newValue:localStorage.getItem(s.value);if(!a){e.value=[];return}e.value=t(a)}catch(a){console.error("Error parsing localstorage",s.value,a)}}return r(),J(window,"storage",o=>setTimeout(()=>r(o),0)),e}function oe(s){const t=JSON.parse(s),e=[];return t.forEach(({resource:r,instrumentationLibrarySpans:o})=>{o.forEach(({instrumentationLibrary:a,spans:n})=>{n.forEach(c=>{e.push(h(m({},c),{instrumentationLibrary:a,resource:r}))})})}),e}function ae(s){const t=JSON.parse(s),e=[];return t.forEach(({resource:r,instrumentationLibraryLogs:o})=>{o.forEach(({instrumentationLibrary:a,logRecords:n})=>{n.forEach(c=>{e.push(h(m({},c),{instrumentationLibrary:a,resource:r}))})})}),e}const ne={class:"font-mono"},re=b({props:{sessionId:null},setup(s){const e=L(F(s,"sessionId"));return(r,o)=>(l(),u("div",null,[d("pre",ne,w(_(e).spans),1)]))}}),ie={props:{sessionId:String},mounted(){const s=L(this.sessionId);var t=s.spans.map(n=>({id:n.spanId,content:n.name,start:n.startTimeUnixNano/1e6,end:n.endTimeUnixNano/1e6,group:1}));let e=0;t=t.concat(s.logs.map(n=>({id:e++,content:n.attributes.find(c=>c.key==="event.name").value.stringValue,start:n.timeUnixNano/1e6,group:2})));var r={verticalScroll:!0,zoomKey:"shiftKey"},o=new $;o.add({id:1,content:"spans"}),o.add({id:2,content:"events"});var a=new G(this.$refs.container);a.setOptions(r),a.setGroups(o),a.setItems(new $(t))}},ce=i(" Hold SHIFT to zoom "),le={ref:"container"};function ue(s,t,e,r,o,a){return l(),u(E,null,[ce,d("div",le,null,512)],64)}var de=D(ie,[["render",ue]]);const pe=[{path:"/",name:"session.list",component:te},{path:"/view/:sessionId",name:"session.view",component:re,props:!0},{path:"/timeline/:sessionId",name:"session.timeline",component:de,props:!0}];var _e=Y({history:j(),routes:pe});const me={},fe={class:"flex flex-col h-screen w-screen overflow-hidden"},he={class:"h-12 flex-initial flex border-gray-500 border-b"},ve=i(" Sessions List "),ge={class:"flex-1 overflow-auto"};function we(s,t){const e=g("router-link"),r=g("router-view");return l(),u("div",fe,[d("div",he,[p(e,{class:"block p-2 bg-transparent hover:bg-gray-100 hover:text-gray-800",to:"/","exact-active-class":"bg-gray-100 text-blue-600 hover:text-blue-600"},{default:f(()=>[ve]),_:1})]),d("div",ge,[p(r)])])}var xe=D(me,[["render",we]]);const T=M(xe);T.use(_e);T.mount("#app");
