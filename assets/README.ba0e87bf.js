import{q as E,s as x,_ as A,o as f,c as h,a as e,w as t,b as a,B as y,g as F,i as k,at as g,au as $,aj as c,ak as u,S as B,x as w,H as M,P,d as L,j as R,R as T,n as V,T as W}from"./app.fb1c9184.js";import{_ as C}from"./Demo.42249bf0.js";import{_}from"./close.d32f7048.js";const H=E({setup(){return{show:x(!0)}}}),j=a("\u5207\u6362");function I(i,p,b,m,v,d){const n=y,o=F,s=k,l=g,r=$,D=C;return f(),h("div",null,[e(D,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/drawer/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20class%3D%22mb-3%22%20%40click%3D%22show%20%3D%20!show%22%3E%E5%88%87%E6%8D%A2%3C%2Fve-button%3E%0A%0A%20%20%3Cve-layout%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-drawer%20permanent%20%3Arail%3D%22show%22%20position%3D%22absolute%22%3E%0A%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%201%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%202%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%203%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%204%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%205%22%20link%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-layout%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(n,{class:"mb-3",onClick:p[0]||(p[0]=oe=>i.show=!i.show)},{default:t(()=>[j]),_:1}),e(r,{style:{height:"200px"}},{default:t(()=>[e(l,{permanent:"",rail:i.show,position:"absolute"},{default:t(()=>[e(s,null,{default:t(()=>[e(o,{"prepend-icon":_,title:"Menu 1",link:""}),e(o,{"prepend-icon":_,title:"Menu 2",link:""}),e(o,{"prepend-icon":_,title:"Menu 3",link:""}),e(o,{"prepend-icon":_,title:"Menu 4",link:""}),e(o,{title:"Menu 5",link:""})]),_:1})]),_:1},8,["rail"])]),_:1})]),_:1})])}var N=A(H,[["render",I]]);const z={},S=a("Top"),U=a("Right"),q=a("Bottom"),O=a("Left");function G(i,p,b,m,v,d){const n=y,o=g,s=B,l=C;return f(),h("div",null,[e(l,{title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49",file:"/packages/veno-ui/src/components/drawer/docs/temporary.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22top%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ETop%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22right%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ERight%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22bottom%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EBottom%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22left%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ELeft%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,null,{default:t(()=>[e(o,{anchor:"top",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[S]),_:2},1040)]),_:1}),e(o,{anchor:"right",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[U]),_:2},1040)]),_:1}),e(o,{anchor:"bottom",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[q]),_:2},1040)]),_:1}),e(o,{anchor:"left",temporary:""},{activator:t(({props:r})=>[e(n,c(u(r)),{default:t(()=>[O]),_:2},1040)]),_:1})]),_:1})]),_:1})])}var J=A(z,[["render",G]]);const K=a("\u62BD\u5C49 Drawer"),Q=a("\u4E00\u822C\u7528\u4F5C\u4FA7\u8FB9\u680F\u88AB\u56FA\u5B9A\u5728\u5C4F\u5E55\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7\uFF0C\u6216\u8005\u6253\u5F00\u6216\u5173\u95ED\u4E00\u4E2A\u4E34\u65F6\u7684\u5BFC\u822A\u62BD\u5C49\u3002"),X=a("\u6F14\u793A"),Y=a("API"),Z=a("Drawer Props"),ee=a("Drawer Events"),se={title:"\u62BD\u5C49 Drawer",headers:[{level:1,title:"\u62BD\u5C49 Drawer",slug:"\u62BD\u5C49-drawer"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u4E34\u65F6\u62BD\u5C49",slug:"\u4E34\u65F6\u62BD\u5C49"},{level:2,title:"API",slug:"api"},{level:3,title:"Drawer Props",slug:"drawer-props"},{level:3,title:"Drawer Events",slug:"drawer-events"}],frontmatter:{meta:{category:"Navigation \u5BFC\u822A"}}},te={},le=Object.assign(te,{setup(i){return(p,b)=>{const m=M,v=P,d=L,n=R,o=T,s=V,l=W;return f(),h("div",null,[e(m,{id:"\u62BD\u5C49-drawer",tabindex:"-1"},{default:t(()=>[K]),_:1}),e(v,null,{default:t(()=>[Q]),_:1}),e(d,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[X]),_:1}),e(o,null,{default:t(()=>[e(n,{cols:"12",md:"12"},{default:t(()=>[e(o,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(w(N))]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(w(J))]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"api",tabindex:"-1"},{default:t(()=>[Y]),_:1}),e(s,{id:"drawer-props",tabindex:"-1"},{default:t(()=>[Z]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"disable-resize-watcher",type:"boolean",default:"false"},{name:"disable-route-watcher",type:"boolean",default:"false"},{name:"color",type:"string"},{name:"expand-on-hover",type:"boolean",default:"false"},{name:"permanent",type:"boolean",default:"false"},{name:"rail",type:"boolean",default:"false"},{name:"rail-width",type:"number | string",default:"52"},{name:"show-toggler",type:"boolean",default:"false"},{name:"temporary",type:"boolean",default:"false"},{name:"touchless",type:"boolean",default:"false"},{name:"width",type:"number | string",default:"256"},{name:"tag",source:"tag",type:"string",default:'"nav"',description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"beautify-scrollbar",source:"scrollbar",type:"boolean",default:"true",description:"\u7F8E\u5316\u6EDA\u52A8\u6761"},{name:"theme",source:"theme",type:"string",description:"\u8BBE\u7F6E\u4E3B\u9898"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"false"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"anchor",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),e(s,{id:"drawer-events",tabindex:"-1"},{default:t(()=>[ee]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{se as __pageData,le as default};
