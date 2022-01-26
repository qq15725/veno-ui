import e from"./app-layout.13d2bf31.js";import t from"./custom-layout.7395904d.js";import{H as a,a as i,b as l}from"./headers.72bbc7f3.js";import{C as o,R as r}from"./index.59e593d7.js";import{T as n}from"./table.a5fc695a.js";import{O as u,U as s,j as m,Q as d,u as p,R as y}from"./vendor.b3232dc0.js";import"./Demo.9ecb8065.js";import"./code.3da98d69.js";import"./p.8ee5e30b.js";import"./layout.57438240.js";import"./pagination.c724356e.js";const f=y("布局 Layout"),g=y("API"),c=y("Header Props"),h=y("Drawer Props"),b=y("Drawer Events"),v=y("Main Props"),x=y("Layout Props"),W=y("LayoutItem Props"),P={title:"布局 Layout",headers:[{level:1,title:"布局 Layout",slug:"布局-layout"},{level:3,title:"应用布局",slug:"应用布局"},{level:3,title:"自定义布局",slug:"自定义布局"},{level:2,title:"API",slug:"api"},{level:3,title:"Header Props",slug:"header-props"},{level:3,title:"Drawer Props",slug:"drawer-props"},{level:3,title:"Drawer Events",slug:"drawer-events"},{level:3,title:"Main Props",slug:"main-props"},{level:3,title:"Layout Props",slug:"layout-props"},{level:3,title:"LayoutItem Props",slug:"layoutitem-props"}],frontmatter:{meta:{category:"Layouts 布局组件"}}},j={},_=Object.assign(j,{setup:y=>(y,P)=>{const j=a,_=o,w=r,L=i,D=l,I=n;return u(),s("div",null,[m(j,{id:"布局-layout",tabindex:"-1"},{default:d((()=>[f])),_:1}),m(w,null,{default:d((()=>[m(_,{cols:"12",md:"12"},{default:d((()=>[m(w,null,{default:d((()=>[m(_,{cols:"12"},{default:d((()=>[m(p(e))])),_:1}),m(_,{cols:"12"},{default:d((()=>[m(p(t))])),_:1})])),_:1})])),_:1})])),_:1}),m(L,{id:"api",tabindex:"-1"},{default:d((()=>[g])),_:1}),m(D,{id:"header-props",tabindex:"-1"},{default:d((()=>[c])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"height",type:"number | string",default:"64"},{name:"tag",source:"tag",type:"string",default:'"header"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"true"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"anchor",source:"layout-item",type:"string",default:'"top"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),m(D,{id:"drawer-props",tabindex:"-1"},{default:d((()=>[h])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"color",type:"string"},{name:"disable-resize-watcher",type:"boolean",default:"false"},{name:"expand-on-hover",type:"boolean",default:"false"},{name:"permanent",type:"boolean",default:"false"},{name:"rail",type:"boolean",default:"false"},{name:"rail-width",type:"number | string",default:"72"},{name:"temporary",type:"boolean",default:"false"},{name:"width",type:"number | string",default:"256"},{name:"touchless",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"nav"'},{name:"theme",source:"theme",type:"string"},{name:"border",source:"border",type:"boolean | number | string",default:"false"},{name:"model-value",source:"layout-item",type:"boolean",default:"false"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"fixed"'},{name:"anchor",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]}),m(D,{id:"drawer-events",tabindex:"-1"},{default:d((()=>[b])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]}),m(D,{id:"main-props",tabindex:"-1"},{default:d((()=>[v])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",type:"string",default:'"main"'},{name:"color",source:"color",type:"string"},{name:"text-color",source:"color",type:"string"}]}),m(D,{id:"layout-props",tabindex:"-1"},{default:d((()=>[x])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"overlaps",source:"layout",type:"array",default:"[]"},{name:"full-height",source:"layout",type:"boolean",default:"false"},{name:"layer-z-index",source:"layout",type:"string | number",default:"0"}]}),m(D,{id:"layoutitem-props",tabindex:"-1"},{default:d((()=>[W])),_:1}),m(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"size",type:"string | number",default:"64"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"model-value",source:"layout-item",type:"boolean",default:"true"},{name:"name",source:"layout-item",type:"string"},{name:"position",source:"layout-item",type:"string",default:'"absolute"'},{name:"anchor",source:"layout-item",type:"string",default:'"left"'},{name:"priority",source:"layout-item",type:"string | number",default:"0"}]})])}});export{P as __pageData,_ as default};