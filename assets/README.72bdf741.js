import{_ as f,o as p,c as u,a as e,w as t,aj as h,ak as b,b as n,B as C,aI as x,x as y,t as g,H as z,d as O,j as A,R as k,n as $,C as D,T as F}from"./app.473d1aed.js";import{_ as E}from"./Demo.34caf215.js";const w={},P=n("Overlay");function j(m,v,_,d,l,r){const o=C,a=x,s=E;return p(),u("div",null,[e(s,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/overlay/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-overlay%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EOverlay%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-overlay%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,null,{activator:t(({props:i})=>[e(o,h(b(i)),{default:t(()=>[P]),_:2},1040)]),_:1})]),_:1})])}var B=f(w,[["render",j]]);const V={},H=n("Contained");function W(m,v,_,d,l,r){const o=C,a=x,s=E;return p(),u("div",null,[e(s,{title:"\u5305\u542B\u7684\u906E\u7F69\u5C42",slug:"\u5305\u542B\u7684\u906E\u7F69\u5C42",file:"/packages/veno-ui/src/components/overlay/docs/contained.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-overlay%20contained%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EContained%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-overlay%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,{contained:""},{activator:t(({props:i})=>[e(o,h(b(i)),{default:t(()=>[H]),_:2},1040)]),_:1})]),_:1})])}var M=f(V,[["render",W]]);const I=n("\u906E\u7F69\u5C42 Overlay"),N=n("\u6F14\u793A"),R=n("API"),S=n("Overlay Props"),T=n("Overlay Events"),G={title:"\u906E\u7F69\u5C42 Overlay",headers:[{level:1,title:"\u906E\u7F69\u5C42 Overlay",slug:"\u906E\u7F69\u5C42-overlay"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5305\u542B\u7684\u906E\u7F69\u5C42",slug:"\u5305\u542B\u7684\u906E\u7F69\u5C42"},{level:2,title:"API",slug:"api"},{level:3,title:"Overlay Props",slug:"overlay-props"},{level:3,title:"Overlay Events",slug:"overlay-events"}],frontmatter:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}},U={},K=Object.assign(U,{setup(m){return(v,_)=>{const d=z,l=O,r=A,o=k,a=$,s=D,i=F;return p(),u("div",null,[e(d,{id:"\u906E\u7F69\u5C42-overlay",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(l,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[N]),_:1}),e(o,null,{default:t(()=>[e(r,{cols:"12",md:"12"},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(y(B))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(y(M))]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{id:"api",tabindex:"-1"},{default:t(()=>[R]),_:1}),e(a,{id:"overlay-props",tabindex:"-1"},{default:t(()=>[S]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",default:!1,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"\u662F\u5426\u5C55\u793A",source:"overlay"}],description:"\u662F\u5426\u5C55\u793A"},{name:"absolute",default:!1,type:"boolean",descriptions:[{language:"zh",name:"absolute",description:"\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D",source:"overlay"}],description:"\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D"},{name:"attach",type:"any",descriptions:[{language:"zh",name:"attach",description:"\u7ED1\u5B9A\u5230\u7684 DOM",source:"overlay"}],description:"\u7ED1\u5B9A\u5230\u7684 DOM"},{name:"contained",default:!1,type:"boolean",descriptions:[{language:"zh",name:"contained",description:"\u4F7F\u7528\u5BB9\u5668\u5F62\u5F0F",source:"overlay"}],description:"\u4F7F\u7528\u5BB9\u5668\u5F62\u5F0F"},{name:"content-style",type:"any",descriptions:[{language:"zh",name:"contentStyle",description:"\u5305\u88F9\u5185\u5BB9 div \u7684 style",source:"overlay"}],description:"\u5305\u88F9\u5185\u5BB9 div \u7684 style"},{name:"content-class",type:"any",descriptions:[{language:"zh",name:"contentClass",description:"\u5305\u88F9\u5185\u5BB9 div \u7684 class",source:"overlay"}],description:"\u5305\u88F9\u5185\u5BB9 div \u7684 class"},{name:"no-click-animation",default:!1,type:"boolean",descriptions:[{language:"zh",name:"noClickAnimation",description:"\u6CA1\u6709\u70B9\u51FB\u52A8\u753B",source:"overlay"}],description:"\u6CA1\u6709\u70B9\u51FB\u52A8\u753B"},{name:"persistent",default:!1,type:"boolean",descriptions:[{language:"zh",name:"persistent",description:"\u6301\u7EED\u663E\u793A\uFF08\u989D\u5916\u5173\u95ED\u884C\u4E3A\u4E0D\u53D7\u63A7\uFF09",source:"overlay"}],description:"\u6301\u7EED\u663E\u793A\uFF08\u989D\u5916\u5173\u95ED\u884C\u4E3A\u4E0D\u53D7\u63A7\uFF09"},{name:"scrim",default:!0,type:"string | boolean",descriptions:[{language:"zh",name:"scrim",description:"\u65E0\u906E\u7F69\u5C42",source:"overlay"}],description:"\u65E0\u906E\u7F69\u5C42"},{name:"activator",source:"activator",type:"string | object",descriptions:[{language:"zh",name:"activator",description:"\u6FC0\u6D3B\u5668",source:"activator"}],description:"\u6FC0\u6D3B\u5668"},{name:"activator-props",source:"activator",default:{},type:"object",descriptions:[{language:"zh",name:"activatorProps",description:"\u6FC0\u6D3B\u5668\u5C5E\u6027",source:"activator"}],description:"\u6FC0\u6D3B\u5668\u5C5E\u6027"},{name:"open-on-click",source:"activator",default:!1,type:"boolean",descriptions:[{language:"zh",name:"openOnClick",description:"\u70B9\u51FB\u65F6\u6253\u5F00",source:"activator"}],description:"\u70B9\u51FB\u65F6\u6253\u5F00"},{name:"open-on-hover",source:"activator",default:!1,type:"boolean",descriptions:[{language:"zh",name:"openOnHover",description:"\u60AC\u505C\u65F6\u6253\u5F00",source:"activator"}],description:"\u60AC\u505C\u65F6\u6253\u5F00"},{name:"open-on-focus",source:"activator",default:!1,type:"boolean",descriptions:[{language:"zh",name:"openOnFocus",description:"\u83B7\u53D6\u7126\u70B9\u65F6\u6253\u5F00",source:"activator"}],description:"\u83B7\u53D6\u7126\u70B9\u65F6\u6253\u5F00"},{name:"close-delay",source:"activator",type:"number | string",descriptions:[]},{name:"open-delay",source:"activator",type:"number | string",descriptions:[]},{name:"height",source:"dimension",type:"number | string",descriptions:[]},{name:"max-height",source:"dimension",type:"number | string",descriptions:[]},{name:"max-width",source:"dimension",type:"number | string",descriptions:[]},{name:"min-height",source:"dimension",type:"number | string",descriptions:[]},{name:"min-width",source:"dimension",type:"number | string",descriptions:[]},{name:"width",source:"dimension",type:"number | string",descriptions:[]},{name:"position-strategy",default:"!static!",type:"string | function",descriptions:[]},{name:"anchor",default:"!bottom!",type:"string",descriptions:[]},{name:"origin",default:"!auto!",type:"string",descriptions:[]},{name:"offset",type:"number | string",descriptions:[]},{name:"scroll-strategy",default:"!block!",type:"boolean | string | function",descriptions:[]},{name:"theme",source:"theme",type:"string",descriptions:[{language:"zh",name:"theme",description:"\u8BBE\u7F6E\u4E3B\u9898",source:"theme"}],description:"\u8BBE\u7F6E\u4E3B\u9898"},{name:"transition",source:"transition",default:{component:{name:"ve-fade-transition",props:{mode:{},origin:{default:"top center 0"}}}},type:"boolean | string | object",descriptions:[]},{name:"eager",source:"lazy",default:!1,type:"boolean",descriptions:[]}]},{"item.type":t(({item:c})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(g(c.type),1)]),_:2},1024)]),"item.default":t(({item:c})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(g(typeof c.default=="string"?c.default.replace(/!/g,"'"):JSON.stringify(c.default,null,2)),1)]),_:2},1024)]),_:1}),e(a,{id:"overlay-events",tabindex:"-1"},{default:t(()=>[T]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:outside"},{name:"update:modelValue"}]})])}}});export{G as __pageData,K as default};
