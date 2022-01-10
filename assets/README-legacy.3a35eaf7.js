System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,n,a,i,l,r,u,s;return{setters:[function(e){t=e._},function(e){n=e.R,a=e.V,i=e.Y,l=e.b,r=e.U,u=e.M,s=e.u}],execute:function(){var o={},p=u(" 基本用法 "),m=t(o,[["render",function(e,t,u,s,o,m){var g=n("ve-pagination"),f=n("demo");return a(),i("div",null,[l(f,{file:"/packages/veno-ui/src/components/pagination/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-pagination%20%0A%20%20%20%20last-page%3D%2215%22%0A%20%20%20%20%3Atotal-visible%3D%227%22%0A%20%20%20%20show-first-last-page%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:r((function(){return[p]})),default:r((function(){return[l(g,{"last-page":"15","total-visible":7,"show-first-last-page":""})]})),_:1})])}]]),g=u("分页 Pagination"),f=u("演示"),d=u("API"),b=u("Pagination Props"),y=u("Pagination Events"),v=(e("__pageData",{title:"分页 Pagination",headers:[{level:1,title:"分页 Pagination",slug:"分页-pagination"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{category:"Navigation 导航"}}),{});e("default",Object.assign(v,{setup:function(e){return function(e,t){var u=n("ve-h1"),o=n("ve-h2"),p=n("ve-col"),v=n("ve-row"),c=n("ve-h3"),h=n("ve-table");return a(),i("div",null,[l(u,{id:"分页-pagination",tabindex:"-1"},{default:r((function(){return[g]})),_:1}),l(o,{id:"演示",tabindex:"-1"},{default:r((function(){return[f]})),_:1}),l(v,null,{default:r((function(){return[l(p,{cols:"12",md:"12"},{default:r((function(){return[l(v,null,{default:r((function(){return[l(p,{cols:"12"},{default:r((function(){return[l(s(m))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(o,{id:"api",tabindex:"-1"},{default:r((function(){return[d]})),_:1}),l(c,{id:"pagination-props",tabindex:"-1"},{default:r((function(){return[b]})),_:1}),l(h,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"veno-ui:$first"'},{name:"prev-icon",type:"string",default:'"veno-ui:$prev"'},{name:"next-icon",type:"string",default:'"veno-ui:$next"'},{name:"last-icon",type:"string",default:'"veno-ui:$last"'},{name:"aria-label",type:"string",default:'"分页导航"'},{name:"page-aria-label",type:"string",default:'"转到页面 {0}"'},{name:"current-page-aria-label",type:"string",default:'"当前页 {0}"'},{name:"first-aria-label",type:"string",default:'"首页"'},{name:"previous-aria-label",type:"string",default:'"上一页"'},{name:"next-aria-label",type:"string",default:'"下一页"'},{name:"last-aria-label",type:"string",default:'"最后页"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",type:"number | string",default:"1"},{name:"last-page",type:"number | string",default:"1"},{name:"page",type:"number | string"},{name:"per-page",type:"number | string",default:"10"},{name:"total",type:"number | string"},{name:"tag",type:"string",default:'"nav"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"text"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number",default:'"medium"'},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"}]},null,8,["items"]),l(c,{id:"pagination-events",tabindex:"-1"},{default:r((function(){return[y]})),_:1}),l(h,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}}}))}}}));