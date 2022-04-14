import{q as $,s as E,_ as A,o as m,c as _,a as e,w as t,b as o,t as D,C as y,P as b,aK as f,Y as F,S as k,B,x as g,H as z,d as x,j as w,R as P,n as V,T as W}from"./app.366a5e18.js";import{_ as h}from"./Demo.98064c00.js";const U=$({setup(){return{value:E(30),strokeWidth:E(3)}}}),S=o("\u8FDB\u5EA6\u6761\u67092\u79CD\u53D8\u4F53 "),M=o("linear"),H=o(" - \u7EBF\u6027\u8FDB\u5EA6\u6761\uFF08\u9ED8\u8BA4\uFF09\u3001"),I=o("circular"),N=o(" - \u5706\u5F62\u8FDB\u5EA6\u6761\u3002");function T(s,n,v,u,p,i){const r=y,l=b,a=f,d=F,c=h;return m(),_("div",null,[e(c,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/progress/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-input%20label%3D%22%E8%BF%9B%E5%BA%A6%E6%AF%94%22%20v-model%3D%22value%22%20type%3D%22number%22%20hide-details%20class%3D%22mb-3%22%20%2F%3E%0A%20%20%3Cve-input%20label%3D%22%E6%8F%8F%E7%BA%BF%E5%AE%BD%22%20v-model%3D%22strokeWidth%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(30)%2C%0A%20%20%20%20%20%20%20%20strokeWidth%3A%20ref(3)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(l,null,{default:t(()=>[S,e(r,{color:"secondary",inline:""},{default:t(()=>[M]),_:1}),H,e(r,{color:"secondary",inline:""},{default:t(()=>[I]),_:1}),N]),_:1})]),default:t(()=>[e(a,{"model-value":s.value,"stroke-width":s.strokeWidth,variant:"circular",class:"mb-3"},{default:t(()=>[o(D(s.value),1)]),_:1},8,["model-value","stroke-width"]),e(a,{"model-value":s.value,"stroke-width":s.strokeWidth,variant:"linear",class:"mb-3"},{default:t(()=>[o(D(s.value),1)]),_:1},8,["model-value","stroke-width"]),e(d,{label:"\u8FDB\u5EA6\u6BD4",modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=C=>s.value=C),type:"number","hide-details":"",class:"mb-3"},null,8,["modelValue"]),e(d,{label:"\u63CF\u7EBF\u5BBD",modelValue:s.strokeWidth,"onUpdate:modelValue":n[1]||(n[1]=C=>s.strokeWidth=C),type:"number","hide-details":""},null,8,["modelValue"])]),_:1})])}var j=A(U,[["render",T]]);const O={};function R(s,n,v,u,p,i){const r=f,l=h;return m(),_("div",null,[e(l,{title:"\u4E0D\u786E\u5B9A\u7684",slug:"\u4E0D\u786E\u5B9A\u7684",file:"/packages/veno-ui/src/components/progress/docs/indeterminate.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20indeterminate%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%2F%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20indeterminate%20%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(r,{variant:"circular",indeterminate:"",class:"mb-3"}),e(r,{variant:"linear",indeterminate:""})]),_:1})])}var q=A(O,[["render",R]]);const J={},K=o("\u8FDB\u5EA6\u6761\u7684\u5C3A\u5BF8\u6709 "),Y=o("x-small"),G=o(" - \u7279\u5C0F\u3001"),L=o("small"),Q=o(" - \u5C0F\u3001"),X=o("medium"),Z=o(" - \u4E2D\u7B49\u3001"),ee=o("large"),te=o(" - \u5927\u3001"),oe=o("x-large"),re=o(" - \u7279\u5927\u3002");function se(s,n,v,u,p,i){const r=y,l=b,a=f,d=k,c=h;return m(),_("div",null,[e(c,{title:"\u5C3A\u5BF8",slug:"\u5C3A\u5BF8",file:"/packages/veno-ui/src/components/progress/docs/size.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22x-small%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22x-large%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(l,null,{default:t(()=>[K,e(r,{color:"secondary",inline:""},{default:t(()=>[Y]),_:1}),G,e(r,{color:"secondary",inline:""},{default:t(()=>[L]),_:1}),Q,e(r,{color:"secondary",inline:""},{default:t(()=>[X]),_:1}),Z,e(r,{color:"secondary",inline:""},{default:t(()=>[ee]),_:1}),te,e(r,{color:"secondary",inline:""},{default:t(()=>[oe]),_:1}),re]),_:1})]),default:t(()=>[e(d,{gutter:"md",align:"center"},{default:t(()=>[e(a,{size:"x-small",color:"primary",variant:"circular","model-value":30}),e(a,{size:"small",color:"primary",variant:"circular","model-value":30}),e(a,{color:"primary",variant:"circular","model-value":30}),e(a,{size:"large",color:"primary",variant:"circular","model-value":30}),e(a,{size:"x-large",color:"primary",variant:"circular","model-value":30})]),_:1})]),_:1})])}var ne=A(J,[["render",se]]);const ae={};function le(s,n,v,u,p,i){const r=f,l=h;return m(),_("div",null,[e(l,{title:"\u989C\u8272",slug:"\u989C\u8272",file:"/packages/veno-ui/src/components/progress/docs/color.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%20%3Amodel-value%3D%2230%22%20color%3D%22error%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(r,{"model-value":30,color:"error"})]),_:1})])}var ie=A(ae,[["render",le]]);const ce=$({setup(){return{progress:E()}}}),de=o("Start"),pe=o("Finish");function ue(s,n,v,u,p,i){const r=B,l=k,a=f,d=h;return m(),_("div",null,[e(d,{title:"\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5",slug:"\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5",file:"/packages/veno-ui/src/components/progress/docs/method.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22progress.start()%22%3EStart%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22progress.finish()%22%3EFinish%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%0A%20%20%3Cve-progress%20ref%3D%22progress%22%20class%3D%22mt-3%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20progress%3A%20ref()%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(l,null,{default:t(()=>[e(r,{onClick:n[0]||(n[0]=c=>s.progress.start())},{default:t(()=>[de]),_:1}),e(r,{onClick:n[1]||(n[1]=c=>s.progress.finish())},{default:t(()=>[pe]),_:1})]),_:1}),e(a,{ref:"progress",class:"mt-3"},null,512)]),_:1})])}var me=A(ce,[["render",ue]]);const _e=o("\u8FDB\u5EA6\u6761 Progress"),ve=o("\u6F14\u793A"),ge=o("API"),Ae=o("Progress Props"),fe=o("Progress Events"),Ee={title:"\u8FDB\u5EA6\u6761 Progress",headers:[{level:1,title:"\u8FDB\u5EA6\u6761 Progress",slug:"\u8FDB\u5EA6\u6761-progress"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u4E0D\u786E\u5B9A\u7684",slug:"\u4E0D\u786E\u5B9A\u7684"},{level:3,title:"\u5C3A\u5BF8",slug:"\u5C3A\u5BF8"},{level:3,title:"\u989C\u8272",slug:"\u989C\u8272"},{level:3,title:"\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5",slug:"\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5"},{level:2,title:"API",slug:"api"},{level:3,title:"Progress Props",slug:"progress-props"},{level:3,title:"Progress Events",slug:"progress-events"}],frontmatter:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}},he={},ye=Object.assign(he,{setup(s){return(n,v)=>{const u=z,p=x,i=w,r=P,l=V,a=y,d=W;return m(),_("div",null,[e(u,{id:"\u8FDB\u5EA6\u6761-progress",tabindex:"-1"},{default:t(()=>[_e]),_:1}),e(p,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[ve]),_:1}),e(r,null,{default:t(()=>[e(i,{cols:"12",md:"12"},{default:t(()=>[e(r,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(g(j))]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g(q))]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g(ne))]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g(ie))]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g(me))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{id:"api",tabindex:"-1"},{default:t(()=>[ge]),_:1}),e(l,{id:"progress-props",tabindex:"-1"},{default:t(()=>[Ae]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"color",default:"!primary!",type:"string | boolean",descriptions:[{language:"zh",name:"color",description:"\u8FDB\u5EA6\u6761\u989C\u8272",source:"progress"}],description:"\u8FDB\u5EA6\u6761\u989C\u8272"},{name:"start",default:!1,type:"boolean",descriptions:[{language:"zh",name:"start",description:"\u662F\u5426\u5728\u5DE6\u4FA7",source:"progress"}],description:"\u662F\u5426\u5728\u5DE6\u4FA7"},{name:"end",default:!1,type:"boolean",descriptions:[{language:"zh",name:"end",description:"\u662F\u5426\u5728\u53F3\u4FA7",source:"progress"}],description:"\u662F\u5426\u5728\u53F3\u4FA7"},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"rotate",source:"progress-circular",default:0,type:"number | string",descriptions:[{language:"zh",name:"rotate",description:"\u8FDB\u5EA6\u6761\u521D\u59CB\u5316\u89D2\u5EA6",source:"progress-circular"}],description:"\u8FDB\u5EA6\u6761\u521D\u59CB\u5316\u89D2\u5EA6"},{name:"active",source:"progress-linear",default:!0,type:"boolean",descriptions:[{language:"zh",name:"active",description:"\u662F\u5426\u6FC0\u6D3B",source:"progress-linear"}],description:"\u662F\u5426\u6FC0\u6D3B"},{name:"model-value",source:"progress-linear",default:0,type:"number | string",descriptions:[{language:"zh",name:"modelValue",description:"\u5F53\u524D\u8FDB\u5EA6\u6BD4",source:"progress-linear"}],description:"\u5F53\u524D\u8FDB\u5EA6\u6BD4"},{name:"stroke-width",source:"progress-linear",default:2,type:"number | string",descriptions:[{language:"zh",name:"strokeWidth",description:"\u63CF\u7EBF\u5BBD",source:"progress-linear"}],description:"\u63CF\u7EBF\u5BBD"},{name:"indeterminate",source:"progress-linear",default:!1,type:"boolean",descriptions:[{language:"zh",name:"indeterminate",description:"\u4E0D\u786E\u5B9A\u7684\u8FDB\u5EA6\u6761",source:"progress-linear"}],description:"\u4E0D\u786E\u5B9A\u7684\u8FDB\u5EA6\u6761"},{name:"underlay",source:"progress-linear",default:!0,type:"boolean",descriptions:[{language:"zh",name:"underlay",description:"\u662F\u5426\u663E\u793A\u5E95\u90E8\u886C\u5E95",source:"progress-linear"}],description:"\u662F\u5426\u663E\u793A\u5E95\u90E8\u886C\u5E95"},{name:"theme",source:"theme",type:"string",descriptions:[{language:"zh",name:"theme",description:"\u8BBE\u7F6E\u4E3B\u9898",source:"theme"}],description:"\u8BBE\u7F6E\u4E3B\u9898"},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E",source:"tag"}],description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"variant",default:"!linear!",type:"string",descriptions:[]}]},{"item.type":t(({item:c})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(D(c.type),1)]),_:2},1024)]),"item.default":t(({item:c})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(D(typeof c.default=="string"?c.default.replace(/!/g,"'"):JSON.stringify(c.default,null,2)),1)]),_:2},1024)]),_:1}),e(l,{id:"progress-events",tabindex:"-1"},{default:t(()=>[fe]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{Ee as __pageData,ye as default};
