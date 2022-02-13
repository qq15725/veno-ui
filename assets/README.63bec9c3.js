import{_ as d}from"./Demo.cd723820.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{ae as _,d as b,f as y,C as h,R as x,g as $,T as P}from"./app.20a37b37.js";import{$ as r,V as l,n as e,W as t,u as f,J as o}from"./vendor.c0ce0502.js";const C={};function E(u,c,m,p,i,s){const a=_,n=d;return r(),l("div",null,[e(n,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/pagination/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-pagination%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a)]),_:1})])}var w=g(C,[["render",E]]);const A={};function F(u,c,m,p,i,s){const a=_,n=d;return r(),l("div",null,[e(n,{title:"\u6700\u5927\u663E\u793A\u6570",slug:"\u6700\u5927\u663E\u793A\u6570",file:"/packages/veno-ui/src/components/pagination/docs/total-visible.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-pagination%20last-page%3D%2215%22%20%3Atotal-visible%3D%227%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,{"last-page":"15","total-visible":7})]),_:1})])}var V=g(A,[["render",F]]);const j={};function k(u,c,m,p,i,s){const a=_,n=d;return r(),l("div",null,[e(n,{title:"\u7B2C\u4E00\u9875\u548C\u6700\u540E\u4E00\u9875",slug:"\u7B2C\u4E00\u9875\u548C\u6700\u540E\u4E00\u9875",file:"/packages/veno-ui/src/components/pagination/docs/show-first-last-page.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-pagination%20last-page%3D%227%22%20show-first-last-page%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,{"last-page":"7","show-first-last-page":""})]),_:1})])}var D=g(j,[["render",k]]);const I=o("\u5206\u9875 Pagination"),W=o("\u6F14\u793A"),T=o("API"),B=o("Pagination Props"),H=o("Pagination Events"),O={title:"\u5206\u9875 Pagination",headers:[{level:1,title:"\u5206\u9875 Pagination",slug:"\u5206\u9875-pagination"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6700\u5927\u663E\u793A\u6570",slug:"\u6700\u5927\u663E\u793A\u6570"},{level:3,title:"\u7B2C\u4E00\u9875\u548C\u6700\u540E\u4E00\u9875",slug:"\u7B2C\u4E00\u9875\u548C\u6700\u540E\u4E00\u9875"},{level:2,title:"API",slug:"api"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{category:"Navigation \u5BFC\u822A"}},N={},S=Object.assign(N,{setup(u){return(c,m)=>{const p=b,i=y,s=h,a=x,n=$,v=P;return r(),l("div",null,[e(p,{id:"\u5206\u9875-pagination",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(i,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[W]),_:1}),e(a,null,{default:t(()=>[e(s,{cols:"12",md:"12"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(f(w))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(f(V))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(f(D))]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{id:"api",tabindex:"-1"},{default:t(()=>[T]),_:1}),e(n,{id:"pagination-props",tabindex:"-1"},{default:t(()=>[B]),_:1}),e(v,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"$first"'},{name:"prev-icon",type:"string",default:'"$prev"'},{name:"next-icon",type:"string",default:'"$next"'},{name:"last-icon",type:"string",default:'"$last"'},{name:"aria-label",type:"string",default:'"\u5206\u9875\u5BFC\u822A"'},{name:"page-aria-label",type:"string",default:'"\u8F6C\u5230\u9875\u9762 {0}"'},{name:"current-page-aria-label",type:"string",default:'"\u5F53\u524D\u9875 {0}"'},{name:"first-aria-label",type:"string",default:'"\u9996\u9875"'},{name:"previous-aria-label",type:"string",default:'"\u4E0A\u4E00\u9875"'},{name:"next-aria-label",type:"string",default:'"\u4E0B\u4E00\u9875"'},{name:"last-aria-label",type:"string",default:'"\u6700\u540E\u9875"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",source:"pagination",type:"number | string",default:"1"},{name:"last-page",source:"pagination",type:"number | string",default:"1"},{name:"page",source:"pagination",type:"number | string"},{name:"per-page",source:"pagination",type:"number | string",default:"10"},{name:"tag",source:"paper",type:"string",default:'"nav"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string"},{name:"text-color",source:"paper",type:"string"},{name:"variant",source:"paper",type:"string",default:'"text"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"medium"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string",default:'"rounded"'},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),e(n,{id:"pagination-events",tabindex:"-1"},{default:t(()=>[H]),_:1}),e(v,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}}});export{O as __pageData,S as default};
