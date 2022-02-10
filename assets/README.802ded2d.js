import{_ as A}from"./Demo.90048bb9.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{B as D,a as y,b as E,_ as w,$ as k,S as B,d as F,P as $,f as x,C as M,R as V,g as P,T as I}from"./app.16b4d607.js";import{b,r as f,Z as p,S as c,n as e,U as t,I as a,F as j,$ as L,_ as S,u as g}from"./vendor.17b08436.js";const T=b({setup(){return{show:f(!0)}}}),W=a("\u5207\u6362");function H(o,r,v,m,_,d){const l=D,n=y,i=E,u=w,s=k,h=A;return p(),c("div",null,[e(h,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/drawer/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20class%3D%22mb-3%22%20%40click%3D%22show%20%3D%20!show%22%3E%E5%88%87%E6%8D%A2%3C%2Fve-button%3E%0A%0A%20%20%3Cve-layout%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-drawer%20%3Arail%3D%22show%22%20position%3D%22absolute%22%3E%0A%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%201%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%202%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%203%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%204%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%205%22%20link%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-layout%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(l,{class:"mb-3",onClick:r[0]||(r[0]=X=>o.show=!o.show)},{default:t(()=>[W]),_:1}),e(s,{style:{height:"200px"}},{default:t(()=>[e(u,{rail:o.show,position:"absolute"},{default:t(()=>[e(i,null,{default:t(()=>[e(n,{"prepend-icon":"mdi-close",title:"Menu 1",link:""}),e(n,{"prepend-icon":"mdi-close",title:"Menu 2",link:""}),e(n,{"prepend-icon":"mdi-close",title:"Menu 3",link:""}),e(n,{"prepend-icon":"mdi-close",title:"Menu 4",link:""}),e(n,{title:"Menu 5",link:""})]),_:1})]),_:1},8,["rail"])]),_:1})]),_:1})])}var N=C(T,[["render",H]]);const R=b({setup(){return{anchor:f("left"),show:f(!1)}}});function U(o,r,v,m,_,d){const l=w,n=D,i=B,u=A;return p(),c("div",null,[e(u,{title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49",file:"/packages/veno-ui/src/components/drawer/docs/temporary.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-drawer%20v-model%3D%22show%22%20%3Aanchor%3D%22anchor%22%20temporary%20%2F%3E%0A%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20v-for%3D%22v%20in%20%5B'left'%2C%20'top'%2C%20'right'%2C%20'bottom'%5D%22%20%3Akey%3D%22v%22%0A%20%20%20%20%20%20%40click%3D%22anchor%20%3D%20v%3B%20show%20%3D%20!show%3B%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7B%7B%20v%20%7D%7D%0A%20%20%20%20%3C%2Fve-button%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20anchor%3A%20ref('left')%2C%0A%20%20%20%20%20%20%20%20show%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(l,{modelValue:o.show,"onUpdate:modelValue":r[0]||(r[0]=s=>o.show=s),anchor:o.anchor,temporary:""},null,8,["modelValue","anchor"]),e(i,null,{default:t(()=>[(p(),c(j,null,L(["left","top","right","bottom"],s=>e(n,{key:s,onClick:h=>{o.anchor=s,o.show=!o.show}},{default:t(()=>[a(S(s),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})])}var z=C(R,[["render",U]]);const O=a("\u62BD\u5C49 Drawer"),Z=a("\u4E00\u822C\u7528\u4F5C\u4FA7\u8FB9\u680F\u88AB\u56FA\u5B9A\u5728\u5C4F\u5E55\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7\uFF0C\u6216\u8005\u6253\u5F00\u6216\u5173\u95ED\u4E00\u4E2A\u4E34\u65F6\u7684\u5BFC\u822A\u62BD\u5C49\u3002"),q=a("\u6F14\u793A"),G=a("API"),J=a("Drawer Props"),K=a("Drawer Events"),ne={title:"\u62BD\u5C49 Drawer",headers:[{level:1,title:"\u62BD\u5C49 Drawer",slug:"\u62BD\u5C49-drawer"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49"},{level:2,title:"API",slug:"api"},{level:3,title:"Drawer Props",slug:"drawer-props"},{level:3,title:"Drawer Events",slug:"drawer-events"}],frontmatter:{meta:{category:"Navigation \u5BFC\u822A"}}},Q={},ae=Object.assign(Q,{setup(o){return(r,v)=>{const m=F,_=$,d=x,l=M,n=V,i=P,u=I;return p(),c("div",null,[e(m,{id:"\u62BD\u5C49-drawer",tabindex:"-1"},{default:t(()=>[O]),_:1}),e(_,null,{default:t(()=>[Z]),_:1}),e(d,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[q]),_:1}),e(n,null,{default:t(()=>[e(l,{cols:"12",md:"12"},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(g(N))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(g(z))]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"api",tabindex:"-1"},{default:t(()=>[G]),_:1}),e(i,{id:"drawer-props",tabindex:"-1"},{default:t(()=>[J]),_:1}),e(u,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"color",type:"string"},{name:"disable-resize-watcher",type:"boolean",default:"false"},{name:"expand-on-hover",type:"boolean",default:"false"},{name:"permanent",type:"boolean",default:"false"},{name:"rail",type:"boolean",default:"false"},{name:"rail-width",type:"number | string",default:"72"},{name:"temporary",type:"boolean",default:"false"},{name:"width",type:"number | string",default:"256"},{name:"touchless",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"nav"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"false"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"anchor",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),e(i,{id:"drawer-events",tabindex:"-1"},{default:t(()=>[K]),_:1}),e(u,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{ne as __pageData,ae as default};
