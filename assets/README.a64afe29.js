import{q as $,s as y,_ as h,o as u,c as _,a as e,w as t,Y as v,b as n,C,P as A,aB as D,m as b,$ as F,Q as w,S as B,x as f,H as k,d as I,j as z,R as P,n as V,T}from"./app.fb1c9184.js";import{_ as E}from"./Demo.42249bf0.js";const j=$({setup(){return{value:y("")}}});function M(p,c,m,d,r,l){const a=v,i=E;return u(),_("div",null,[e(i,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/input/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%0A%20%20%20%20v-model%3D%22value%22%20%0A%20%20%20%20placeholder%3D%22Input%22%0A%20%20%20%20clearable%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref('')%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(a,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=o=>p.value=o),placeholder:"Input",clearable:""},null,8,["modelValue"])]),_:1})])}var U=h(j,[["render",M]]);const H={},S=n("\u901A\u8FC7\u8BBE\u7F6E "),W=n("width"),R=n(" \u5B9A\u4E49\u5BBD\u5EA6\uFF0C\u53EA\u4F1A\u5F71\u54CD "),G=n("input-control"),N=n(" \u90E8\u5206\u3002");function O(p,c,m,d,r,l){const a=C,i=A,o=v,s=E;return u(),_("div",null,[e(s,{title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",slug:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",file:"/packages/veno-ui/src/components/input/docs/width.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%20label%3D%22%E4%B8%8D%E5%BD%B1%E5%93%8D%E7%9A%84%E9%83%A8%E5%88%86%22%20placeholder%3D%22200px%20width%22%20width%3D%22200%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[S,e(a,{color:"secondary",inline:""},{default:t(()=>[W]),_:1}),R,e(a,{color:"secondary",inline:""},{default:t(()=>[G]),_:1}),N]),_:1})]),default:t(()=>[e(o,{label:"\u4E0D\u5F71\u54CD\u7684\u90E8\u5206",placeholder:"200px width",width:"200"})]),_:1})])}var q=h(H,[["render",O]]);const Q={},Y=n("\u901A\u8FC7\u8BBE\u7F6E "),J=n("height"),K=n(" \u5B9A\u4E49\u9AD8\u5EA6\u3002");function L(p,c,m,d,r,l){const a=C,i=A,o=D,s=v,x=E;return u(),_("div",null,[e(x,{title:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",slug:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",file:"/packages/veno-ui/src/components/input/docs/height.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-tag%20size%3D%22x-small%22%20text%3D%22x-small%22%20class%3D%22mr-3%22%20%2F%3E%0A%20%20%3Cve-input%20inline%20hide-details%20placeholder%3D%2220px%20height%22%20height%3D%2220%22%20width%3D%2256%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[Y,e(a,{color:"secondary",inline:""},{default:t(()=>[J]),_:1}),K]),_:1})]),default:t(()=>[e(o,{size:"x-small",text:"x-small",class:"mr-3"}),e(s,{inline:"","hide-details":"",placeholder:"20px height",height:"20",width:"56"})]),_:1})])}var X=h(Q,[["render",L]]);const Z={},ee=n("\u901A\u8FC7\u8BBE\u7F6E "),te=n("auto-resize"),ne=n(" \u53EF\u4EE5\u4F7F "),oe=n("input"),ae=n(" \u81EA\u8C03\u8282\u5BBD\u5EA6\uFF0C"),ie=n("textarea"),le=n(" \u81EA\u8C03\u8282\u9AD8\u5EA6\u3002");function se(p,c,m,d,r,l){const a=C,i=A,o=v,s=E;return u(),_("div",null,[e(s,{title:"\u81EA\u52A8\u8C03\u6574\u5C3A\u5BF8",slug:"\u81EA\u52A8\u8C03\u6574\u5C3A\u5BF8",file:"/packages/veno-ui/src/components/input/docs/auto-resize.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%20placeholder%3D%22Input%22%20width%3D%2280%22%20auto-resize%20%2F%3E%0A%20%20%3Cve-input%20type%3D%22textarea%22%20placeholder%3D%22Textarea%20rows%3A2%22%20auto-resize%20rows%3D%222%22%20%2F%3E%0A%20%20%3Cve-input%20type%3D%22textarea%22%20placeholder%3D%22Textarea%20rows%3A3%20max-rows%3A5%22%20auto-resize%20rows%3D%223%22%20max-rows%3D%225%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[ee,e(a,{color:"secondary",inline:""},{default:t(()=>[te]),_:1}),ne,e(a,{color:"secondary",inline:""},{default:t(()=>[oe]),_:1}),ae,e(a,{color:"secondary",inline:""},{default:t(()=>[ie]),_:1}),le]),_:1})]),default:t(()=>[e(o,{placeholder:"Input",width:"80","auto-resize":""}),e(o,{type:"textarea",placeholder:"Textarea rows:2","auto-resize":"",rows:"2"}),e(o,{type:"textarea",placeholder:"Textarea rows:3 max-rows:5","auto-resize":"",rows:"3","max-rows":"5"})]),_:1})])}var pe=h(Z,[["render",se]]);const ce={},re=n("\u8F93\u5165\u6846\u4F5C\u4E3A\u4E00\u4E2A\u57FA\u7840\u7EC4\u4EF6\uFF0C\u6709\u4E00\u8EAB\u7684\u63D2\u69FD\u4F4D\u3002"),de=n("Prepend"),ue=n("PrependInner"),_e=n("Default"),me=n("Append"),fe=n("AppendInner"),he=n("Counter");function ve(p,c,m,d,r,l){const a=A,i=D,o=v,s=E;return u(),_("div",null,[e(s,{title:"\u63D2\u69FD",slug:"\u63D2\u69FD",file:"/packages/veno-ui/src/components/input/docs/slots.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%20placeholder%3D%22Placeholder%22%3E%0A%20%20%20%20%3Ctemplate%20%23prepend%3EPrepend%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23prepend-inner%3EPrependInner%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23prefix%3E%3Cve-tag%20size%3D%22x-small%22%20color%3D%22primary%22%20text%3D%22Prefix%22%20%2F%3E%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23default%3EDefault%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3E%3Cve-tag%20size%3D%22x-small%22%20color%3D%22primary%22%20text%3D%22Suffix%22%20%2F%3E%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23append%3EAppend%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23append-inner%3EAppendInner%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23counter%3ECounter%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-input%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(a,null,{default:t(()=>[re]),_:1})]),default:t(()=>[e(o,{placeholder:"Placeholder"},{prepend:t(()=>[de]),"prepend-inner":t(()=>[ue]),prefix:t(()=>[e(i,{size:"x-small",color:"primary",text:"Prefix"})]),default:t(()=>[_e]),suffix:t(()=>[e(i,{size:"x-small",color:"primary",text:"Suffix"})]),append:t(()=>[me]),"append-inner":t(()=>[fe]),counter:t(()=>[he]),_:1})]),_:1})])}var Ee=h(ce,[["render",ve]]);const Ae={};function xe(p,c,m,d,r,l){const a=F,i=w,o=v,s=B,x=E;return u(),_("div",null,[e(x,{title:"\u4F8B\u5B501",slug:"\u4F8B\u5B501",file:"/packages/veno-ui/src/components/input/docs/case1.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22%E8%83%8C%E6%99%AF%E8%89%B2%22%0A%20%20%20%20%20%20prefix%3D%22Color%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%20RGBA%20%2F%20HSVA%22%0A%20%20%20%20%20%20hide-details%0A%20%20%20%20%20%20%23suffix%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%20%20anchor%3D%22top%22%0A%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-icon%20v-bind%3D%22props%22%20icon%3D%22%24info%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%3C%2Fve-input%3E%0A%0A%20%20%20%20%3Cve-spacer%20cols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E4%B8%8A%E8%BE%B9%E8%B7%9D%22%20disabled%20placeholder%3D%22Disabled%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E5%8F%B3%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E4%B8%8B%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E5%B7%A6%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%3C%2Fve-spacer%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(o,{label:"\u80CC\u666F\u8272",prefix:"Color",placeholder:"\u8BF7\u8F93\u5165 RGBA / HSVA","hide-details":""},{suffix:t(()=>[e(i,{text:"\u63D0\u793A",anchor:"top"},{activator:t(({props:g})=>[e(a,b(g,{icon:"$info"}),null,16)]),_:1})]),_:1}),e(s,{cols:"6"},{default:t(()=>[e(o,{label:"\u4E0A\u8FB9\u8DDD",disabled:"",placeholder:"Disabled",type:"number","hide-details":""}),e(o,{label:"\u53F3\u8FB9\u8DDD",type:"number","hide-details":""}),e(o,{label:"\u4E0B\u8FB9\u8DDD",type:"number","hide-details":""}),e(o,{label:"\u5DE6\u8FB9\u8DDD",type:"number","hide-details":""})]),_:1})]),_:1})]),_:1})])}var Ce=h(Ae,[["render",xe]]);const De=n("\u8F93\u5165\u6846 Input"),ge=n("\u6F14\u793A"),$e=n("API"),ye=n("Input Props"),be=n("Input Events"),ke={title:"\u8F93\u5165\u6846 Input",headers:[{level:1,title:"\u8F93\u5165\u6846 Input",slug:"\u8F93\u5165\u6846-input"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",slug:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6"},{level:3,title:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",slug:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6"},{level:3,title:"\u81EA\u52A8\u8C03\u6574\u5C3A\u5BF8",slug:"\u81EA\u52A8\u8C03\u6574\u5C3A\u5BF8"},{level:3,title:"\u63D2\u69FD",slug:"\u63D2\u69FD"},{level:3,title:"\u4F8B\u5B501",slug:"\u4F8B\u5B501"},{level:2,title:"API",slug:"api"},{level:3,title:"Input Props",slug:"input-props"},{level:3,title:"Input Events",slug:"input-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},Fe={},Ie=Object.assign(Fe,{setup(p){return(c,m)=>{const d=k,r=I,l=z,a=P,i=V,o=T;return u(),_("div",null,[e(d,{id:"\u8F93\u5165\u6846-input",tabindex:"-1"},{default:t(()=>[De]),_:1}),e(r,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[ge]),_:1}),e(a,null,{default:t(()=>[e(l,{cols:"12",md:"12"},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(f(U))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(f(q))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(f(X))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(f(pe))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(f(Ee))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(f(Ce))]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id:"api",tabindex:"-1"},{default:t(()=>[$e]),_:1}),e(i,{id:"input-props",tabindex:"-1"},{default:t(()=>[ye]),_:1}),e(o,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"autofocus",type:"boolean",default:"false",description:"\u81EA\u52A8\u805A\u7126"},{name:"auto-resize",type:"boolean",default:"false",description:"\u81EA\u52A8\u8C03\u6574\u5927\u5C0F"},{name:"counter",type:"any",description:"\u8BA1\u6570\u5668"},{name:"counter-value",type:"function",description:"\u8BA1\u6570\u5668\u503C"},{name:"id",type:"string",description:"ID"},{name:"input-attach",type:"any",description:"\u8F93\u5165\u6846\u9700\u8981\u4F20\u9001\u5230\u90A3\u4E2A DOM"},{name:"max-rows",type:"number | string",description:"textarea \u72EC\u6709\u6700\u5927\u884C\u6570"},{name:"model-value",type:"any",description:"\u8F93\u5165\u6846\u7684\u503C"},{name:"name",type:"string",description:"\u8F93\u5165\u6846 name"},{name:"no-resize",type:"boolean",default:"false",description:"textarea \u72EC\u6709\u4E0D\u5141\u8BB8\u91CD\u7F6E\u5927\u5C0F"},{name:"persistent-counter",type:"boolean",default:"false",description:"\u6301\u7EED\u663E\u793A\u7684\u8BA1\u6570\u5668"},{name:"placeholder",type:"string",description:"\u5360\u4F4D\u7B26\u5185\u5BB9"},{name:"rows",type:"number | string",default:"5",description:"textarea \u72EC\u6709\u6700\u5C0F\u884C\u6570"},{name:"type",type:"string",default:'"text"',description:"\u8F93\u5165\u6846\u7C7B\u578B"},{name:"width",type:"any",description:"\u5BBD\u5EA6\u503C"},{name:"append-inner-icon",source:"input-control",type:"string | object",description:"\u540E\u7F6E\u5185\u8054\u56FE\u6807"},{name:"clearable",source:"input-control",type:"boolean",default:"false",description:"\u662F\u5426\u53EF\u6E05\u9664"},{name:"clear-icon",source:"input-control",type:"string | object",default:'"$clear"',description:"\u6E05\u9664\u56FE\u6807"},{name:"disabled",source:"input-control",type:"boolean",default:"false",description:"\u662F\u5426\u7981\u7528"},{name:"prepend-inner-icon",source:"input-control",type:"string | object",description:"\u524D\u7F6E\u5185\u8054\u56FE\u6807"},{name:"prefix",source:"input-control",type:"string",description:"\u524D\u7F00"},{name:"prefix-icon",source:"input-control",type:"string | object",description:"\u524D\u7F00\u56FE\u6807"},{name:"suffix",source:"input-control",type:"string",description:"\u540E\u7F00"},{name:"suffix-icon",source:"input-control",type:"string | object",description:"\u540E\u7F00\u56FE\u6807"},{name:"color",source:"input-control",type:"string"},{name:"text-color",source:"input-control",type:"string"},{name:"variant",source:"input-control",type:"string",default:'"contained"'},{name:"shape",source:"input-control",type:"string",default:'"rounded-sm"'}]}),e(i,{id:"input-events",tabindex:"-1"},{default:t(()=>[be]),_:1}),e(o,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:prepend"},{name:"click:label"},{name:"click:append"},{name:"update:modelValue"},{name:"click:clear"},{name:"click:prepend-inner"},{name:"click:prefix"},{name:"click:suffix"},{name:"click:append-inner"},{name:"click:control"},{name:"update:active"}]})])}}});export{ke as __pageData,Ie as default};
