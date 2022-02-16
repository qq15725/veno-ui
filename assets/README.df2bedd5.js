import{_ as A}from"./Demo.8c1ea32c.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{B as D,a as y,b as E,a1 as g,a2 as F,S as x,d as $,P as k,f as B,C as M,R as P,g as T,T as V}from"./app.65a8bb48.js";import{b as I,r as L,$ as v,V as f,n as e,W as t,P as a,a7 as c,a8 as u,u as b}from"./vendor.63760568.js";const R=I({setup(){return{show:L(!0)}}}),W=a("\u5207\u6362");function H(i,p,h,_,m,d){const n=D,o=y,s=E,l=g,r=F,w=A;return v(),f("div",null,[e(w,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/drawer/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20class%3D%22mb-3%22%20%40click%3D%22show%20%3D%20!show%22%3E%E5%88%87%E6%8D%A2%3C%2Fve-button%3E%0A%0A%20%20%3Cve-layout%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-drawer%20permanent%20%3Arail%3D%22show%22%20position%3D%22absolute%22%3E%0A%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%201%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%202%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%203%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%204%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%205%22%20link%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-layout%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(n,{class:"mb-3",onClick:p[0]||(p[0]=te=>i.show=!i.show)},{default:t(()=>[W]),_:1}),e(r,{style:{height:"200px"}},{default:t(()=>[e(l,{permanent:"",rail:i.show,position:"absolute"},{default:t(()=>[e(s,null,{default:t(()=>[e(o,{"prepend-icon":"mdi-close",title:"Menu 1",link:""}),e(o,{"prepend-icon":"mdi-close",title:"Menu 2",link:""}),e(o,{"prepend-icon":"mdi-close",title:"Menu 3",link:""}),e(o,{"prepend-icon":"mdi-close",title:"Menu 4",link:""}),e(o,{title:"Menu 5",link:""})]),_:1})]),_:1},8,["rail"])]),_:1})]),_:1})])}var N=C(R,[["render",H]]);const z={},S=a("Top"),j=a("Right"),O=a("Bottom"),q=a("Left");function G(i,p,h,_,m,d){const n=D,o=g,s=x,l=A;return v(),f("div",null,[e(l,{title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49",file:"/packages/veno-ui/src/components/drawer/docs/temporary.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22top%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ETop%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22right%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ERight%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22bottom%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EBottom%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22left%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ELeft%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,null,{default:t(()=>[e(o,{anchor:"top",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[S]),_:2},1040)]),_:1}),e(o,{anchor:"right",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[j]),_:2},1040)]),_:1}),e(o,{anchor:"bottom",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[O]),_:2},1040)]),_:1}),e(o,{anchor:"left",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[q]),_:2},1040)]),_:1})]),_:1})]),_:1})])}var J=C(z,[["render",G]]);const K=a("\u62BD\u5C49 Drawer"),Q=a("\u4E00\u822C\u7528\u4F5C\u4FA7\u8FB9\u680F\u88AB\u56FA\u5B9A\u5728\u5C4F\u5E55\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7\uFF0C\u6216\u8005\u6253\u5F00\u6216\u5173\u95ED\u4E00\u4E2A\u4E34\u65F6\u7684\u5BFC\u822A\u62BD\u5C49\u3002"),U=a("\u6F14\u793A"),X=a("API"),Y=a("Drawer Props"),Z=a("Drawer Events"),se={title:"\u62BD\u5C49 Drawer",headers:[{level:1,title:"\u62BD\u5C49 Drawer",slug:"\u62BD\u5C49-drawer"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49"},{level:2,title:"API",slug:"api"},{level:3,title:"Drawer Props",slug:"drawer-props"},{level:3,title:"Drawer Events",slug:"drawer-events"}],frontmatter:{meta:{category:"Navigation \u5BFC\u822A"}}},ee={},le=Object.assign(ee,{setup(i){return(p,h)=>{const _=$,m=k,d=B,n=M,o=P,s=T,l=V;return v(),f("div",null,[e(_,{id:"\u62BD\u5C49-drawer",tabindex:"-1"},{default:t(()=>[K]),_:1}),e(m,null,{default:t(()=>[Q]),_:1}),e(d,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[U]),_:1}),e(o,null,{default:t(()=>[e(n,{cols:"12",md:"12"},{default:t(()=>[e(o,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(b(N))]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(b(J))]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"api",tabindex:"-1"},{default:t(()=>[X]),_:1}),e(s,{id:"drawer-props",tabindex:"-1"},{default:t(()=>[Y]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"color",type:"string"},{name:"disable-resize-watcher",type:"boolean",default:"false"},{name:"expand-on-hover",type:"boolean",default:"false"},{name:"permanent",type:"boolean",default:"false"},{name:"rail",type:"boolean",default:"false"},{name:"rail-width",type:"number | string",default:"72"},{name:"temporary",type:"boolean",default:"false"},{name:"width",type:"number | string",default:"256"},{name:"touchless",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"nav"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"false"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"anchor",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),e(s,{id:"drawer-events",tabindex:"-1"},{default:t(()=>[Z]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{se as __pageData,le as default};
