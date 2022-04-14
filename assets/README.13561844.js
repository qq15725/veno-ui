import{_ as g,q as p,s as u,u as e,v as t,av as b,aw as h,x as o,G as C,aV as x,H as A,d as O,R as k,n as $,T as z,I as _,J as f,k as D,C as w}from"./app.82309895.js";import{_ as E}from"./Demo.971567a7.js";const F={},P=o("Overlay");function V(v,m,y,d,c,i){const a=C,n=x,s=E;return p(),u("div",null,[e(s,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/overlay/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-overlay%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EOverlay%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-overlay%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,null,{activator:t(({props:r})=>[e(a,b(h(r)),{default:t(()=>[P]),_:2},1040)]),_:1})]),_:1})])}var j=g(F,[["render",V]]);const B={},W=o("Contained");function H(v,m,y,d,c,i){const a=C,n=x,s=E;return p(),u("div",null,[e(s,{title:"\u5305\u542B\u7684\u906E\u7F69\u5C42",slug:"\u5305\u542B\u7684\u906E\u7F69\u5C42",file:"/packages/veno-ui/src/components/overlay/docs/contained.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-overlay%20contained%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EContained%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-overlay%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,{contained:""},{activator:t(({props:r})=>[e(a,b(h(r)),{default:t(()=>[W]),_:2},1040)]),_:1})]),_:1})])}var M=g(B,[["render",H]]);const I=o("\u906E\u7F69\u5C42 Overlay"),N=o("\u6F14\u793A"),R=o("API"),S=o("Overlay Props"),T=o("Overlay Events"),G={title:"\u906E\u7F69\u5C42 Overlay",headers:[{level:1,title:"\u906E\u7F69\u5C42 Overlay",slug:"\u906E\u7F69\u5C42-overlay"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5305\u542B\u7684\u906E\u7F69\u5C42",slug:"\u5305\u542B\u7684\u906E\u7F69\u5C42"},{level:2,title:"API",slug:"api"},{level:3,title:"Overlay Props",slug:"overlay-props"},{level:3,title:"Overlay Events",slug:"overlay-events"}],frontmatter:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}},J={},K=Object.assign(J,{setup(v){return(m,y)=>{const d=A,c=O,i=D,a=k,n=$,s=w,r=z;return p(),u("div",null,[e(d,{id:"\u906E\u7F69\u5C42-overlay",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(c,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[N]),_:1}),e(a,null,{default:t(()=>[e(i,{cols:"12",md:"12"},{default:t(()=>[e(a,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(_(j))]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(_(M))]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{id:"api",tabindex:"-1"},{default:t(()=>[R]),_:1}),e(n,{id:"overlay-props",tabindex:"-1"},{default:t(()=>[S]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"\u662F\u5426\u5C55\u793A",source:"overlay"}],description:"\u662F\u5426\u5C55\u793A"},{name:"absolute",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"absolute",description:"\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D",source:"overlay"}],description:"\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D"},{name:"attach",source:"overlay",default:!1,type:"boolean | string | object",descriptions:[{language:"zh",name:"attach",description:"\u7ED1\u5B9A\u5230\u7684 DOM",source:"overlay"}],description:"\u7ED1\u5B9A\u5230\u7684 DOM"},{name:"contained",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"contained",description:"\u4F7F\u7528\u5BB9\u5668\u5F62\u5F0F",source:"overlay"}],description:"\u4F7F\u7528\u5BB9\u5668\u5F62\u5F0F"},{name:"content-style",source:"overlay",type:"any",descriptions:[{language:"zh",name:"contentStyle",description:"\u5305\u88F9\u5185\u5BB9 div \u7684 style",source:"overlay"}],description:"\u5305\u88F9\u5185\u5BB9 div \u7684 style"},{name:"content-class",source:"overlay",type:"any",descriptions:[{language:"zh",name:"contentClass",description:"\u5305\u88F9\u5185\u5BB9 div \u7684 class",source:"overlay"}],description:"\u5305\u88F9\u5185\u5BB9 div \u7684 class"},{name:"no-click-animation",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"noClickAnimation",description:"\u6CA1\u6709\u70B9\u51FB\u52A8\u753B",source:"overlay"}],description:"\u6CA1\u6709\u70B9\u51FB\u52A8\u753B"},{name:"persistent",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"persistent",description:"\u6301\u7EED\u663E\u793A\uFF08\u989D\u5916\u5173\u95ED\u884C\u4E3A\u4E0D\u53D7\u63A7\uFF09",source:"overlay"}],description:"\u6301\u7EED\u663E\u793A\uFF08\u989D\u5916\u5173\u95ED\u884C\u4E3A\u4E0D\u53D7\u63A7\uFF09"},{name:"scrim",source:"overlay",default:!0,type:"string | boolean",descriptions:[{language:"zh",name:"scrim",description:"\u65E0\u906E\u7F69\u5C42",source:"overlay"}],description:"\u65E0\u906E\u7F69\u5C42"},{name:"activator",source:"overlay",type:"string | object",descriptions:[]},{name:"activator-props",source:"overlay",default:{},type:"object",descriptions:[]},{name:"open-on-click",source:"overlay",default:!1,type:"boolean",descriptions:[]},{name:"open-on-hover",source:"overlay",default:!1,type:"boolean",descriptions:[]},{name:"open-on-focus",source:"overlay",default:!1,type:"boolean",descriptions:[]},{name:"close-delay",source:"overlay",type:"number | string",descriptions:[]},{name:"open-delay",source:"overlay",type:"number | string",descriptions:[]},{name:"height",source:"overlay",type:"number | string",descriptions:[]},{name:"max-height",source:"overlay",type:"number | string",descriptions:[]},{name:"max-width",source:"overlay",type:"number | string",descriptions:[]},{name:"min-height",source:"overlay",type:"number | string",descriptions:[]},{name:"min-width",source:"overlay",type:"number | string",descriptions:[]},{name:"width",source:"overlay",type:"number | string",descriptions:[]},{name:"position-strategy",source:"overlay",default:"!static!",type:"string | function",descriptions:[]},{name:"anchor",source:"overlay",default:"!bottom!",type:"string",descriptions:[]},{name:"origin",source:"overlay",default:"!auto!",type:"string",descriptions:[]},{name:"offset",source:"overlay",type:"number | string",descriptions:[]},{name:"scroll-strategy",source:"overlay",default:"!block!",type:"boolean | string | function",descriptions:[]},{name:"theme",source:"overlay",type:"string",descriptions:[]},{name:"transition",source:"overlay",default:{component:{name:"ve-fade-transition",props:{mode:{},origin:{default:"top center 0"}}}},type:"boolean | string | object",descriptions:[]},{name:"eager",source:"overlay",default:!1,type:"boolean",descriptions:[]}]},{"item.type":t(({item:l})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(f(l.type),1)]),_:2},1024)]),"item.default":t(({item:l})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(f(typeof l.default=="string"?l.default.replace(/!/g,"'"):JSON.stringify(l.default,null,2)),1)]),_:2},1024)]),_:1}),e(n,{id:"overlay-events",tabindex:"-1"},{default:t(()=>[T]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:outside"},{name:"update:modelValue"}]})])}}});export{G as __pageData,K as default};
