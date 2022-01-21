import e from"./app-layout.c23305bc.js";import t from"./custom-layout.f4a3f12f.js";import{H as a,a as l,b as i}from"./headers.b969db0e.js";import{f as o,R as u}from"./index.740d7899.js";import{T as r}from"./table.d187a15f.js";import{P as n,U as s,b as d,R as m,u as p,M as y}from"./vendor.157c333c.js";import"./p.1283b8fc.js";import"./pagination.f9dde078.js";const f=y("布局 Layout"),g=y("API"),c=y("Header Props"),v=y("Sider Props"),b=y("Sider Events"),h=y("Main Props"),x=y("Layout Props"),W=y("LayoutItem Props"),P={title:"布局 Layout",headers:[{level:1,title:"布局 Layout",slug:"布局-layout"},{level:3,title:"应用布局",slug:"应用布局"},{level:3,title:"自定义布局",slug:"自定义布局"},{level:2,title:"API",slug:"api"},{level:3,title:"Header Props",slug:"header-props"},{level:3,title:"Sider Props",slug:"sider-props"},{level:3,title:"Sider Events",slug:"sider-events"},{level:3,title:"Main Props",slug:"main-props"},{level:3,title:"Layout Props",slug:"layout-props"},{level:3,title:"LayoutItem Props",slug:"layoutitem-props"}],frontmatter:{meta:{category:"Layouts 布局组件"}}},_={},j=Object.assign(_,{setup:y=>(y,P)=>{const _=a,j=o,L=u,I=l,S=i,w=r;return n(),s("div",null,[d(_,{id:"布局-layout",tabindex:"-1"},{default:m((()=>[f])),_:1}),d(L,null,{default:m((()=>[d(j,{cols:"12",md:"12"},{default:m((()=>[d(L,null,{default:m((()=>[d(j,{cols:"12"},{default:m((()=>[d(p(e))])),_:1}),d(j,{cols:"12"},{default:m((()=>[d(p(t))])),_:1})])),_:1})])),_:1})])),_:1}),d(I,{id:"api",tabindex:"-1"},{default:m((()=>[g])),_:1}),d(S,{id:"header-props",tabindex:"-1"},{default:m((()=>[c])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"height",type:"number | string",default:"64"},{name:"tag",source:"tag",type:"string",default:'"header"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"true"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"side",source:"layout-item",type:"string",default:'"top"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),d(S,{id:"sider-props",tabindex:"-1"},{default:m((()=>[v])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"color",type:"string"},{name:"disable-resize-watcher",type:"boolean",default:"false"},{name:"expand-on-hover",type:"boolean",default:"false"},{name:"permanent",type:"boolean",default:"false"},{name:"rail",type:"boolean",default:"false"},{name:"rail-width",type:"number | string",default:"72"},{name:"temporary",type:"boolean",default:"false"},{name:"width",type:"number | string",default:"256"},{name:"touchless",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"nav"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"false"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"side",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),d(S,{id:"sider-events",tabindex:"-1"},{default:m((()=>[b])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]}),d(S,{id:"main-props",tabindex:"-1"},{default:m((()=>[h])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",type:"string",default:'"main"'},{name:"color",source:"color",type:"string"},{name:"text-color",source:"color",type:"string"}]}),d(S,{id:"layout-props",tabindex:"-1"},{default:m((()=>[x])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"overlaps",source:"layout",type:"array",default:"[]"},{name:"full-height",source:"layout",type:"boolean",default:"false"},{name:"layer-z-index",source:"layout",type:"string | number",default:"0"}]}),d(S,{id:"layoutitem-props",tabindex:"-1"},{default:m((()=>[W])),_:1}),d(w,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"size",type:"string | number",default:"64"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"model-value",source:"layout-item",type:"boolean",default:"true"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"absolute"'},{name:"side",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]})])}});export{P as __pageData,j as default};
