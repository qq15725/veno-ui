import{_ as w}from"./Demo.b5e42d31.js";import{e as b,x as E,ao as h,a1 as D,_ as O,B as P,S as $,C as y,R as j}from"./app.6e85b0a5.js";import{A as T}from"./alert.c444561b.js";import{r as d,j as s,n as k,b as B,O as g,U as f,Q as r,R as i,u as F}from"./vendor.4a6e0395.js";import{H as x,a as I}from"./code.ac9ca3dc.js";var S=Object.defineProperty,M=Object.defineProperties,R=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,A=(o,e,t)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,C=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&A(o,t,e[t]);if(v)for(var t of v(e))H.call(e,t)&&A(o,t,e[t]);return o},N=(o,e)=>M(o,R(e));const U=b({name:"VeMessage",setup(o,{slots:e}){const t=d([]),n=a=>(_,c)=>{const l=`ve-message-${D()}`,u=C({id:l,type:a,text:_,duration:1e3,close:()=>t.value.splice(t.value.findIndex(m=>m.id===l),1)},c);return t.value.push(u),setTimeout(u.close,u.duration),u};return E(()=>s(h,{"model-value":t.value.length>0,scrim:!1,"scroll-strategy":()=>{},class:["ve-message"]},N(C({},e),{default:()=>s("ul",null,[t.value.map(a=>s("li",null,[s(T,k({"overlay-color":"white",elevation:4},a),null,16)]))]),_:1}),8,["model-value","scroll-strategy"])),{open:n,info:n("info"),success:n("success"),warning:n("warning"),error:n("error")}}}),W=B({setup(){return{message:d()}}}),Q=i(" Info "),q=i(" Success "),z=i(" Warning "),G=i(" Error ");function J(o,e,t,n,a,_){const c=U,l=P,u=$,m=w;return g(),f("div",null,[s(m,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/message/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-message%20ref%3D%22message%22%20%2F%3E%0A%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%40click%3D%22message.info('This%20is%20an%20info%20message!')%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Info%0A%20%20%20%20%3C%2Fve-button%3E%0A%0A%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%40click%3D%22message.success('This%20is%20an%20success%20message!')%22%0A%20%20%20%20%20%20color%3D%22success%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Success%0A%20%20%20%20%3C%2Fve-button%3E%0A%0A%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%40click%3D%22message.warning('This%20is%20an%20warning%20message!')%22%0A%20%20%20%20%20%20color%3D%22warning%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Warning%0A%20%20%20%20%3C%2Fve-button%3E%0A%0A%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%40click%3D%22message.error('This%20is%20an%20error%20message!')%22%0A%20%20%20%20%20%20color%3D%22error%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Error%0A%20%20%20%20%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20message%3A%20ref()%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:r(()=>[s(c,{ref:"message"},null,512),s(u,null,{default:r(()=>[s(l,{onClick:e[0]||(e[0]=p=>o.message.info("This is an info message!"))},{default:r(()=>[Q]),_:1}),s(l,{onClick:e[1]||(e[1]=p=>o.message.success("This is an success message!")),color:"success"},{default:r(()=>[q]),_:1}),s(l,{onClick:e[2]||(e[2]=p=>o.message.warning("This is an warning message!")),color:"warning"},{default:r(()=>[z]),_:1}),s(l,{onClick:e[3]||(e[3]=p=>o.message.error("This is an error message!")),color:"error"},{default:r(()=>[G]),_:1})]),_:1})]),_:1})])}var K=O(W,[["render",J]]);const L=i("\u6D88\u606F Message"),X=i("\u6F14\u793A"),Y=i("API"),ne={title:"\u6D88\u606F Message",headers:[{level:1,title:"\u6D88\u606F Message",slug:"\u6D88\u606F-message"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"API",slug:"api"}],frontmatter:{meta:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6","wai-aria":"https://www.w3.org/TR/wai-aria-1.1/#alert"}}},Z={},ae=Object.assign(Z,{setup(o){return(e,t)=>{const n=x,a=I,_=y,c=j;return g(),f("div",null,[s(n,{id:"\u6D88\u606F-message",tabindex:"-1"},{default:r(()=>[L]),_:1}),s(a,{id:"\u6F14\u793A",tabindex:"-1"},{default:r(()=>[X]),_:1}),s(c,null,{default:r(()=>[s(_,{cols:"12",md:"12"},{default:r(()=>[s(c,null,{default:r(()=>[s(_,{cols:"12"},{default:r(()=>[s(F(K))]),_:1})]),_:1})]),_:1})]),_:1}),s(a,{id:"api",tabindex:"-1"},{default:r(()=>[Y]),_:1})])}}});export{ne as __pageData,ae as default};
