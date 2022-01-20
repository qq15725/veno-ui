import e from"./basic.0a05eb0d.js";import a from"./export.caa1cfa5.js";import t from"./remote.f5574a81.js";import{H as r,a as n,b as s}from"./headers.27e7f754.js";import{f as i,R as o}from"./index.d9a55cbb.js";import{T as p}from"./table.b1dcf6e0.js";import{P as l,U as u,a as m,R as d,u as f,K as g}from"./vendor.eb4d73a9.js";import"./switch.6a67eceb.js";import"./form-control.67e1de87.js";import"./label.d994fc8a.js";import"./selection-control.03df23b3.js";import"./dialog.345dffa0.js";import"./pagination.f9dccd3d.js";import"./lazy.3708c043.js";import"./index.669aff69.js";const b=g("表格 Table"),c=g("演示"),y=g("API"),v=g("Table Props"),h=g("Table Events"),x=g("Pagination Props"),j=g("Pagination Events"),_={title:"表格 Table",headers:[{level:1,title:"表格 Table",slug:"表格-table"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据导出",slug:"数据导出"},{level:3,title:"服务端数据",slug:"服务端数据"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{meta:{category:"Data 数据展示"}}},P={},w=Object.assign(P,{setup:g=>(g,_)=>{const P=r,w=n,T=i,W=o,$=s,E=p;return l(),u("div",null,[m(P,{id:"表格-table",tabindex:"-1"},{default:d((()=>[b])),_:1}),m(w,{id:"演示",tabindex:"-1"},{default:d((()=>[c])),_:1}),m(W,null,{default:d((()=>[m(T,{cols:"12",md:"12"},{default:d((()=>[m(W,null,{default:d((()=>[m(T,{cols:"12"},{default:d((()=>[m(f(e))])),_:1}),m(T,{cols:"12"},{default:d((()=>[m(f(a))])),_:1}),m(T,{cols:"12"},{default:d((()=>[m(f(t))])),_:1})])),_:1})])),_:1})])),_:1}),m(w,{id:"api",tabindex:"-1"},{default:d((()=>[y])),_:1}),m($,{id:"table-props",tabindex:"-1"},{default:d((()=>[v])),_:1}),m(E,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"hide-border",type:"boolean",default:"false"},{name:"hide-header",type:"boolean",default:"false"},{name:"fixed-header",type:"boolean",default:"false"},{name:"headers",type:"array",default:"[]"},{name:"sort-icon",type:"string",default:'"veno-ui:$sort"'},{name:"sort-active-color",type:"string",default:'"primary"'},{name:"loading",type:"boolean",default:"false"},{name:"item-key",type:"string",default:'"id"'},{name:"pagination",type:"object | boolean",default:"true"},{name:"remote",source:"data-iterator",type:"boolean",default:"false"},{name:"items",source:"data-iterator",type:"array",default:"[]"},{name:"must-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"multi-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"sort-by",source:"data-iterator",type:"string | array",default:"[]"},{name:"sort-desc",source:"data-iterator",type:"boolean | array",default:"[]"},{name:"custom-sort",source:"data-iterator",type:"function",default:'"((a, b) => {}"'},{name:"locale",source:"data-iterator",type:"string",default:'"en-US"'},{name:"first-page",source:"data-iterator",type:"number | string",default:"1"},{name:"last-page",source:"data-iterator",type:"number | string",default:"1"},{name:"page",source:"data-iterator",type:"number | string"},{name:"per-page",source:"data-iterator",type:"number | string",default:"10"},{name:"total",source:"data-iterator",type:"number | string"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"true"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),m($,{id:"table-events",tabindex:"-1"},{default:d((()=>[h])),_:1}),m(E,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"}]}),m($,{id:"pagination-props",tabindex:"-1"},{default:d((()=>[x])),_:1}),m(E,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"veno-ui:$first"'},{name:"prev-icon",type:"string",default:'"veno-ui:$prev"'},{name:"next-icon",type:"string",default:'"veno-ui:$next"'},{name:"last-icon",type:"string",default:'"veno-ui:$last"'},{name:"aria-label",type:"string",default:'"分页导航"'},{name:"page-aria-label",type:"string",default:'"转到页面 {0}"'},{name:"current-page-aria-label",type:"string",default:'"当前页 {0}"'},{name:"first-aria-label",type:"string",default:'"首页"'},{name:"previous-aria-label",type:"string",default:'"上一页"'},{name:"next-aria-label",type:"string",default:'"下一页"'},{name:"last-aria-label",type:"string",default:'"最后页"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",source:"data-iterator",type:"number | string",default:"1"},{name:"last-page",source:"data-iterator",type:"number | string",default:"1"},{name:"page",source:"data-iterator",type:"number | string"},{name:"per-page",source:"data-iterator",type:"number | string",default:"10"},{name:"total",source:"pagination",type:"number | string"},{name:"tag",source:"paper",type:"string",default:'"nav"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),m($,{id:"pagination-events",tabindex:"-1"},{default:d((()=>[j])),_:1}),m(E,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}});export{_ as __pageData,w as default};
