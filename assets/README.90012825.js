import e from"./basic.d0753150.js";import t from"./export.9ce2b0e3.js";import a from"./remote.486a0e34.js";import{H as n,a as l,b as i}from"./headers.34d213ae.js";import{f as r,R as s}from"./index.83b2b76d.js";import{T as m}from"./table.77fd8f24.js";import{P as o,U as p,a as u,R as d,u as f,K as g}from"./vendor.bd78ac10.js";import"./switch.3612c61c.js";import"./form-control.d2a44b66.js";import"./label.4a335004.js";import"./selection-control.acaccbc1.js";import"./dialog.48308254.js";import"./pagination.84723899.js";import"./link.1368b389.js";import"./lazy.c9592337.js";import"./index.9b16a6c8.js";const b=g("表格 Table"),y=g("演示"),v=g("API"),c=g("Table Props"),h=g("Table Events"),x=g("Pagination Props"),j=g("Pagination Events"),_={title:"表格 Table",headers:[{level:1,title:"表格 Table",slug:"表格-table"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据导出",slug:"数据导出"},{level:3,title:"服务端数据",slug:"服务端数据"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{meta:{category:"Data 数据展示"}}},P={},w=Object.assign(P,{setup:g=>(g,_)=>{const P=n,w=l,T=r,$=s,E=i,z=m;return o(),p("div",null,[u(P,{id:"表格-table",tabindex:"-1"},{default:d((()=>[b])),_:1}),u(w,{id:"演示",tabindex:"-1"},{default:d((()=>[y])),_:1}),u($,null,{default:d((()=>[u(T,{cols:"12",md:"12"},{default:d((()=>[u($,null,{default:d((()=>[u(T,{cols:"12"},{default:d((()=>[u(f(e))])),_:1}),u(T,{cols:"12"},{default:d((()=>[u(f(t))])),_:1}),u(T,{cols:"12"},{default:d((()=>[u(f(a))])),_:1})])),_:1})])),_:1})])),_:1}),u(w,{id:"api",tabindex:"-1"},{default:d((()=>[v])),_:1}),u(E,{id:"table-props",tabindex:"-1"},{default:d((()=>[c])),_:1}),u(z,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"hide-border",type:"boolean",default:"false"},{name:"hide-header",type:"boolean",default:"false"},{name:"fixed-header",type:"boolean",default:"false"},{name:"headers",type:"array",default:"[]"},{name:"sort-icon",type:"string",default:'"veno-ui:$sort"'},{name:"sort-active-color",type:"string",default:'"primary"'},{name:"loading",type:"boolean",default:"false"},{name:"item-key",type:"string",default:'"id"'},{name:"pagination",type:"object | boolean",default:"true"},{name:"remote",type:"boolean",default:"false"},{name:"items",type:"array",default:"[]"},{name:"must-sort",type:"boolean",default:"false"},{name:"multi-sort",type:"boolean",default:"false"},{name:"sort-by",type:"string | array",default:"[]"},{name:"sort-desc",type:"boolean | array",default:"[]"},{name:"custom-sort",type:"function",default:'"((a, b) => {}"'},{name:"locale",type:"string",default:'"en-US"'},{name:"first-page",type:"number | string",default:"1"},{name:"last-page",type:"number | string",default:"1"},{name:"page",type:"number | string"},{name:"per-page",type:"number | string",default:"10"},{name:"total",type:"number | string"},{name:"tag",type:"string",default:'"div"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"contained"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number",default:'"medium"'},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"true"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"}]},null,8,["items"]),u(E,{id:"table-events",tabindex:"-1"},{default:d((()=>[h])),_:1}),u(z,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"}]}),u(E,{id:"pagination-props",tabindex:"-1"},{default:d((()=>[x])),_:1}),u(z,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"veno-ui:$first"'},{name:"prev-icon",type:"string",default:'"veno-ui:$prev"'},{name:"next-icon",type:"string",default:'"veno-ui:$next"'},{name:"last-icon",type:"string",default:'"veno-ui:$last"'},{name:"aria-label",type:"string",default:'"分页导航"'},{name:"page-aria-label",type:"string",default:'"转到页面 {0}"'},{name:"current-page-aria-label",type:"string",default:'"当前页 {0}"'},{name:"first-aria-label",type:"string",default:'"首页"'},{name:"previous-aria-label",type:"string",default:'"上一页"'},{name:"next-aria-label",type:"string",default:'"下一页"'},{name:"last-aria-label",type:"string",default:'"最后页"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",type:"number | string",default:"1"},{name:"last-page",type:"number | string",default:"1"},{name:"page",type:"number | string"},{name:"per-page",type:"number | string",default:"10"},{name:"total",type:"number | string"},{name:"tag",type:"string",default:'"nav"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"text"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number",default:'"medium"'},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"}]},null,8,["items"]),u(E,{id:"pagination-events",tabindex:"-1"},{default:d((()=>[j])),_:1}),u(z,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}});export{_ as __pageData,w as default};
