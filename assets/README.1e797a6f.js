import{y,z as g,q as f,s as v,u as e,v as t,ad as w,J as d,aF as A,H as b,P as x,b as C,R as S,l as D,T as E,I as B,x as o,C as V,k as P}from"./app.6920907e.js";import{_ as k}from"./Demo.e32cfb00.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";const $=y({setup(){return{value:g(!1)}}}),W={class:"mt-3"};function H(s,r,h,u,i,p){const l=A,a=k;return f(),v("div",null,[e(a,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/switch/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-switch%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20label%3D%22Switch%22%0A%20%20%2F%3E%0A%0A%20%20%3Cdiv%20class%3D%22mt-3%22%3E%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(l,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=c=>s.value=c),label:"Switch"},null,8,["modelValue"]),w("div",W,d(s.value),1)]),_:1})])}var N=F($,[["render",H]]);const I=o("\u5F00\u5173 Switch"),T=o("switch"),z=o(" \u7EC4\u4EF6\u3002"),J=o("\u6F14\u793A"),O=o("API"),R=o("Switch Props"),U=o("Switch Events"),K={title:"\u5F00\u5173 Switch",headers:[{level:1,title:"\u5F00\u5173 Switch",slug:"\u5F00\u5173-switch"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"API",slug:"api"},{level:3,title:"Switch Props",slug:"switch-props"},{level:3,title:"Switch Events",slug:"switch-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},j={},L=Object.assign(j,{setup(s){return(r,h)=>{const u=b,i=V,p=x,l=C,a=P,c=S,m=D,_=E;return f(),v("div",null,[e(u,{id:"\u5F00\u5173-switch",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(p,null,{default:t(()=>[e(i,{color:"secondary",inline:""},{default:t(()=>[T]),_:1}),z]),_:1}),e(l,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[J]),_:1}),e(c,null,{default:t(()=>[e(a,{cols:"12",md:"12"},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(B(N))]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{id:"api",tabindex:"-1"},{default:t(()=>[O]),_:1}),e(m,{id:"switch-props",tabindex:"-1"},{default:t(()=>[R]),_:1}),e(_,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"color",source:"selection-control",default:"!primary!",type:"string",descriptions:[]},{name:"disabled",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"error",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"id",source:"selection-control",type:"string",descriptions:[]},{name:"inline",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"label",source:"selection-control",type:"string",descriptions:[]},{name:"false-icon",source:"selection-control",type:"string",descriptions:[]},{name:"true-icon",source:"selection-control",type:"string",descriptions:[]},{name:"multiple",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"selection-control",type:"string",descriptions:[]},{name:"readonly",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"true-value",source:"selection-control",type:"any",descriptions:[]},{name:"false-value",source:"selection-control",type:"any",descriptions:[]},{name:"model-value",source:"selection-control",type:"any",descriptions:[]},{name:"type",source:"selection-control",default:"!checkbox!",type:"string",descriptions:[]},{name:"value",source:"selection-control",type:"any",descriptions:[]},{name:"value-comparator",source:"selection-control",type:"function",descriptions:[]},{name:"theme",source:"selection-control",type:"string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]}]},{"item.type":t(({item:n})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(d(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(d(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(m,{id:"switch-events",tabindex:"-1"},{default:t(()=>[U]),_:1}),e(_,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{K as __pageData,L as default};
