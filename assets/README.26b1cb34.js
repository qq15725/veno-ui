import e from"./remote.25c8069a.js";import a from"./basic.8e94d4cf.js";import t from"./export.4781f87d.js";import{H as n,a as r,b as s}from"./headers.72bbc7f3.js";import{C as i,R as p}from"./index.59e593d7.js";import{T as o}from"./table.a5fc695a.js";import{O as l,U as u,j as m,Q as d,u as f,R as g}from"./vendor.b3232dc0.js";import"./Demo.9ecb8065.js";import"./code.3da98d69.js";import"./lazy.e68ee447.js";import"./index.e18b8715.js";import"./switch.5223f84a.js";import"./form-control.13d4c4c5.js";import"./label.bede15f4.js";import"./selection-control.6a5cc21b.js";import"./dialog.c09f1419.js";import"./pagination.c724356e.js";const b=g("表格 Table"),c=g("演示"),y=g("API"),h=g("Table Props"),v=g("Table Events"),x=g("Pagination Props"),j=g("Pagination Events"),P={title:"表格 Table",headers:[{level:1,title:"表格 Table",slug:"表格-table"},{level:2,title:"演示",slug:"演示"},{level:3,title:"服务端数据",slug:"服务端数据"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据导出",slug:"数据导出"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{meta:{category:"Data 数据展示"}}},_={},w=Object.assign(_,{setup:g=>(g,P)=>{const _=n,w=r,T=i,W=p,$=s,E=o;return l(),u("div",null,[m(_,{id:"表格-table",tabindex:"-1"},{default:d((()=>[b])),_:1}),m(w,{id:"演示",tabindex:"-1"},{default:d((()=>[c])),_:1}),m(W,null,{default:d((()=>[m(T,{cols:"12",md:"12"},{default:d((()=>[m(W,null,{default:d((()=>[m(T,{cols:"12"},{default:d((()=>[m(f(e))])),_:1}),m(T,{cols:"12"},{default:d((()=>[m(f(a))])),_:1}),m(T,{cols:"12"},{default:d((()=>[m(f(t))])),_:1})])),_:1})])),_:1})])),_:1}),m(w,{id:"api",tabindex:"-1"},{default:d((()=>[y])),_:1}),m($,{id:"table-props",tabindex:"-1"},{default:d((()=>[h])),_:1}),m(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"hide-border",type:"boolean",default:"false"},{name:"hide-header",type:"boolean",default:"false"},{name:"fixed-header",type:"boolean",default:"false"},{name:"headers",type:"array",default:"[]"},{name:"sort-icon",type:"string",default:'"$sort"'},{name:"sort-active-color",type:"string",default:'"primary"'},{name:"loading",type:"boolean",default:"false"},{name:"item-key",type:"string",default:'"id"'},{name:"hide-pagination",type:"boolean",default:"false"},{name:"remote",source:"data-iterator",type:"boolean",default:"false"},{name:"items",source:"data-iterator",type:"array",default:"[]"},{name:"must-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"multi-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"sort-by",source:"data-iterator",type:"string | array",default:"[]"},{name:"sort-desc",source:"data-iterator",type:"boolean | array",default:"[]"},{name:"custom-sort",source:"data-iterator",type:"function",default:'"((a, b) => {}"'},{name:"locale",source:"data-iterator",type:"string",default:'"en-US"'},{name:"pagination",source:"data-iterator",type:"object"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"true"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),m($,{id:"table-events",tabindex:"-1"},{default:d((()=>[v])),_:1}),m(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:pagination"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"}]}),m($,{id:"pagination-props",tabindex:"-1"},{default:d((()=>[x])),_:1}),m(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"$first"'},{name:"prev-icon",type:"string",default:'"$prev"'},{name:"next-icon",type:"string",default:'"$next"'},{name:"last-icon",type:"string",default:'"$last"'},{name:"aria-label",type:"string",default:'"分页导航"'},{name:"page-aria-label",type:"string",default:'"转到页面 {0}"'},{name:"current-page-aria-label",type:"string",default:'"当前页 {0}"'},{name:"first-aria-label",type:"string",default:'"首页"'},{name:"previous-aria-label",type:"string",default:'"上一页"'},{name:"next-aria-label",type:"string",default:'"下一页"'},{name:"last-aria-label",type:"string",default:'"最后页"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",source:"pagination",type:"number | string",default:"1"},{name:"last-page",source:"pagination",type:"number | string",default:"1"},{name:"page",source:"pagination",type:"number | string"},{name:"per-page",source:"pagination",type:"number | string",default:"10"},{name:"tag",source:"paper",type:"string",default:'"nav"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"text"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),m($,{id:"pagination-events",tabindex:"-1"},{default:d((()=>[j])),_:1}),m(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}});export{P as __pageData,w as default};