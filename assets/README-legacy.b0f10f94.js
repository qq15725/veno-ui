System.register(["./index-legacy.182ae530.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,n,a,i,l,r,s,u,o,p;return{setters:[function(e){t=e._},function(e){n=e.R,a=e.V,i=e.Y,l=e.b,r=e.U,s=e.a2,u=e.m,o=e.M,p=e.u}],execute:function(){var d={},m=o(" 基本用法 "),f={class:"p-10 bg-grey-300"},g=o("Subtitle"),v=t(d,[["render",function(e,t,o,p,d,v){var y=n("ve-list-subheader"),c=n("ve-list-item"),b=n("ve-list-group"),C=n("ve-list"),h=n("demo");return a(),i("div",null,[l(h,{file:"/packages/veno-ui/src/components/list/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22p-10%20bg-grey-300%22%3E%0A%20%20%20%20%3Cve-list%20dense%3E%0A%20%20%20%20%20%20%3Cve-list-subheader%3ESubtitle%3C%2Fve-list-subheader%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cve-list-group%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23header%3D%22props%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%20title%3D%22Navigation%201%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%201%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%202%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list-group%3E%0A%0A%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Navigation%202%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-list%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{title:r((function(){return[m]})),default:r((function(){return[s("div",f,[l(C,{dense:""},{default:r((function(){return[l(y,null,{default:r((function(){return[g]})),_:1}),l(b,null,{header:r((function(e){return[l(c,u(e,{title:"Navigation 1"}),null,16)]})),default:r((function(){return[l(c,{title:"Menu 1"}),l(c,{title:"Menu 2"})]})),_:1}),l(c,{title:"Navigation 2"})]})),_:1})])]})),_:1})])}]]),y={},c=o(" 前置图标 "),b=t(y,[["render",function(e,t,s,u,o,p){var d=n("ve-list-item"),m=n("ve-list"),f=n("demo");return a(),i("div",null,[l(f,{file:"/packages/veno-ui/src/components/list/docs/icon.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-list%3E%0A%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20prepend-icon%3D%22svg%3AM20%2C8L12%2C13L4%2C8V6L12%2C11L20%2C6M20%2C4H4C2.89%2C4%202%2C4.89%202%2C6V18A2%2C2%200%200%2C0%204%2C20H20A2%2C2%200%200%2C0%2022%2C18V6C22%2C4.89%2021.1%2C4%2020%2C4Z%22%0A%20%20%20%20%20%20title%3D%22%E9%82%AE%E4%BB%B6%22%20%0A%20%20%20%20%20%20%40click%3D%22%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20prepend-icon%3D%22svg%3AM4%2C8L12%2C13L20%2C8V8L12%2C3L4%2C8V8M22%2C8V18A2%2C2%200%200%2C1%2020%2C20H4A2%2C2%200%200%2C1%202%2C18V8C2%2C7.27%202.39%2C6.64%202.97%2C6.29L12%2C0.64L21.03%2C6.29C21.61%2C6.64%2022%2C7.27%2022%2C8Z%22%0A%20%20%20%20%20%20title%3D%22%E8%8D%89%E7%A8%BF%22%0A%20%20%20%20%20%20%40click%3D%22%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fve-list%3E%0A%3C%2Ftemplate%3E"},{title:r((function(){return[c]})),default:r((function(){return[l(m,null,{default:r((function(){return[l(d,{"prepend-icon":"svg:M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",title:"邮件",onClick:t[0]||(t[0]=function(){})}),l(d,{"prepend-icon":"svg:M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z",title:"草稿",onClick:t[1]||(t[1]=function(){})})]})),_:1})]})),_:1})])}]]),C=o("列表 List"),h=o("list"),x=o(" 包装了 "),A=o("material"),L=o("，用于显示列表信息。"),_=o("演示"),E=o("API"),P=o("ListItem Props"),D=o("ListItemAvatar Props"),F=o("ListItemHeader Props"),V=o("ListItemSubtitle Props"),M=o("ListItemTitle Props"),I=o("ListSubheader Props"),w=o("List Props"),H=o("List Events"),k=o("ListGroup Props"),S=(e("__pageData",{title:"列表 List",headers:[{level:1,title:"列表 List",slug:"列表-list"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"前置图标",slug:"前置图标"},{level:2,title:"API",slug:"api"},{level:3,title:"ListItem Props",slug:"listitem-props"},{level:3,title:"ListItemAvatar Props",slug:"listitemavatar-props"},{level:3,title:"ListItemHeader Props",slug:"listitemheader-props"},{level:3,title:"ListItemSubtitle Props",slug:"listitemsubtitle-props"},{level:3,title:"ListItemTitle Props",slug:"listitemtitle-props"},{level:3,title:"ListSubheader Props",slug:"listsubheader-props"},{level:3,title:"List Props",slug:"list-props"},{level:3,title:"List Events",slug:"list-events"},{level:3,title:"ListGroup Props",slug:"listgroup-props"}],frontmatter:{category:"Data 数据展示"}}),{});e("default",Object.assign(S,{setup:function(e){return function(e,t){var s=n("ve-h1"),u=n("ve-code"),o=n("ve-p"),d=n("ve-h2"),m=n("ve-col"),f=n("ve-row"),g=n("ve-h3"),y=n("ve-table");return a(),i("div",null,[l(s,{id:"列表-list",tabindex:"-1"},{default:r((function(){return[C]})),_:1}),l(o,null,{default:r((function(){return[l(u,null,{default:r((function(){return[h]})),_:1}),x,l(u,null,{default:r((function(){return[A]})),_:1}),L]})),_:1}),l(d,{id:"演示",tabindex:"-1"},{default:r((function(){return[_]})),_:1}),l(f,null,{default:r((function(){return[l(m,{cols:"12",md:"6"},{default:r((function(){return[l(f,null,{default:r((function(){return[l(m,{cols:"12"},{default:r((function(){return[l(p(v))]})),_:1})]})),_:1})]})),_:1}),l(m,{cols:"12",md:"6"},{default:r((function(){return[l(f,null,{default:r((function(){return[l(m,{cols:"12"},{default:r((function(){return[l(p(b))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(d,{id:"api",tabindex:"-1"},{default:r((function(){return[E]})),_:1}),l(g,{id:"listitem-props",tabindex:"-1"},{default:r((function(){return[P]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"active",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"active-class",type:"string"},{name:"link",type:"boolean",default:"false"},{name:"subtitle",type:"string"},{name:"title",type:"string"},{name:"prepend-avatar",type:"string"},{name:"prepend-icon",type:"string"},{name:"append-avatar",type:"string"},{name:"append-icon",type:"string"},{name:"ripple",type:"boolean",default:"true"},{name:"tag",type:"string",default:'"div"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"text"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number"},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"},{name:"disabled",type:"boolean",default:"false"},{name:"href",type:"string"},{name:"replace",type:"boolean",default:"false"},{name:"to",type:"string | object"}]}),l(g,{id:"listitemavatar-props",tabindex:"-1"},{default:r((function(){return[D]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"left",type:"boolean",default:"false"},{name:"right",type:"boolean",default:"false"},{name:"tag",type:"string",default:'"div"'}]}),l(g,{id:"listitemheader-props",tabindex:"-1"},{default:r((function(){return[F]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(g,{id:"listitemsubtitle-props",tabindex:"-1"},{default:r((function(){return[V]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(g,{id:"listitemtitle-props",tabindex:"-1"},{default:r((function(){return[M]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(g,{id:"listsubheader-props",tabindex:"-1"},{default:r((function(){return[I]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"color",type:"string"},{name:"inset",type:"boolean",default:"false"},{name:"tag",type:"string",default:'"div"'}]}),l(g,{id:"list-props",tabindex:"-1"},{default:r((function(){return[w]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"nav",type:"boolean",default:"false"},{name:"subheader",type:"boolean | string",default:"false"},{name:"items",type:"array"},{name:"tag",type:"string",default:'"div"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"contained"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number"},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"},{name:"disabled",type:"boolean",default:"false"},{name:"select-strategy",type:"string | function",default:'"leaf"'},{name:"open-strategy",type:"string | function",default:'"multiple"'},{name:"active-strategy",type:"string | function",default:'"single"'},{name:"opened",type:"array"},{name:"selected",type:"array"},{name:"active",type:"array"}]}),l(g,{id:"list-events",tabindex:"-1"},{default:r((function(){return[H]})),_:1}),l(y,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:selected"},{name:"update:opened"},{name:"update:active"}]}),l(g,{id:"listgroup-props",tabindex:"-1"},{default:r((function(){return[k]})),_:1}),l(y,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"value",type:"any"},{name:"collapse-icon",type:"string",default:'"veno-ui:$dropdown"'},{name:"expand-icon",type:"string",default:'"veno-ui:$dropdown"'},{name:"items",type:"array"},{name:"tag",type:"string",default:'"div"'}]})])}}}))}}}));
