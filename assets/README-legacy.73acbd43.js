System.register(["./app-legacy.dccf8ff6.js","./Demo-legacy.e8e7275f.js","./plugin-vue_export-helper-legacy.7bb61c33.js"],(function(e){"use strict";var t,a,r,n,l,i,s,o,d,c,u,p,f,v,m,g,E,y,h,C,_,A,T,b;return{setters:[function(e){t=e.q,a=e.s,r=e.u,n=e.v,l=e.x,i=e.P,s=e.A,o=e.C,d=e.S,c=e.y,u=e.z,p=e.B,f=e.E,v=e.G,m=e.H,g=e.b,E=e.R,y=e.l,h=e.T,C=e.I,_=e.J,A=e.k},function(e){T=e._},function(e){b=e._}],execute:function(){const x={},D=l("最简单的用法，适用于简短的警告提示。"),F=l("This is an info alert.");var w=b(x,[["render",function(e,l,o,d,c,u){const p=i,f=s,v=T;return t(),a("div",null,[r(v,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/alert/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(p,null,{default:n((()=>[D])),_:1})])),default:n((()=>[r(f,null,{default:n((()=>[F])),_:1})])),_:1})])}]]);const k={},z=l("警告提示有 "),j=l("success"),P=l("、"),B=l("info"),V=l("、"),W=l("warning"),I=l("、"),N=l("error"),S=l(" 四种类型。"),J=l("This is an info alert."),O=l("This is an success alert."),R=l("This is an warning alert."),q=l("This is an error alert.");var G=b(k,[["render",function(e,l,c,u,p,f){const v=o,m=i,g=s,E=d,y=T;return t(),a("div",null,[r(y,{title:"提示类型",slug:"提示类型",file:"/packages/veno-ui/src/components/alert/docs/type.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22info%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22success%22%3EThis%20is%20an%20success%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22warning%22%3EThis%20is%20an%20warning%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22error%22%3EThis%20is%20an%20error%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(m,null,{default:n((()=>[z,r(v,{color:"secondary",inline:""},{default:n((()=>[j])),_:1}),P,r(v,{color:"secondary",inline:""},{default:n((()=>[B])),_:1}),V,r(v,{color:"secondary",inline:""},{default:n((()=>[W])),_:1}),I,r(v,{color:"secondary",inline:""},{default:n((()=>[N])),_:1}),S])),_:1})])),default:n((()=>[r(E,{cols:"12"},{default:n((()=>[r(g,{type:"info"},{default:n((()=>[J])),_:1}),r(g,{type:"success"},{default:n((()=>[O])),_:1}),r(g,{type:"warning"},{default:n((()=>[R])),_:1}),r(g,{type:"error"},{default:n((()=>[q])),_:1})])),_:1})])),_:1})])}]]);const H=c({setup:()=>({variant:u("contained-outlined")})}),U=l("This is an success alert."),$=l("This is an info alert."),K=l("This is an warning alert."),L=l("This is an error alert.");var M=b(H,[["render",function(e,l,i,o,c,u){const v=p,m=f,g=s,E=d,y=T;return t(),a("div",null,[r(y,{title:"多种变体",slug:"多种变体",file:"/packages/veno-ui/src/components/alert/docs/variant.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-radio-group%20v-model%3D%22variant%22%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22outlined%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained-text%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained-outlined%22%20%2F%3E%0A%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22success%22%3EThis%20is%20an%20success%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22info%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22warning%22%3EThis%20is%20an%20warning%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22error%22%3EThis%20is%20an%20error%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20variant%3A%20ref('contained-outlined')%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:n((()=>[r(m,{modelValue:e.variant,"onUpdate:modelValue":l[0]||(l[0]=t=>e.variant=t)},{default:n((()=>[r(v,{value:"contained"}),r(v,{value:"outlined"}),r(v,{value:"contained-text"}),r(v,{value:"contained-outlined"})])),_:1},8,["modelValue"]),r(E,{cols:"12"},{default:n((()=>[r(g,{variant:e.variant,type:"success"},{default:n((()=>[U])),_:1},8,["variant"]),r(g,{variant:e.variant,type:"info"},{default:n((()=>[$])),_:1},8,["variant"]),r(g,{variant:e.variant,type:"warning"},{default:n((()=>[K])),_:1},8,["variant"]),r(g,{variant:e.variant,type:"error"},{default:n((()=>[L])),_:1},8,["variant"])])),_:1})])),_:1})])}]]);const Q={},X=l("显示关闭按钮，点击可关闭警告提示。"),Y=l("Error Text Error Text Error Text Error Text Error Text Error Text");var Z=b(Q,[["render",function(e,l,o,d,c,u){const p=i,f=s,v=T;return t(),a("div",null,[r(v,{title:"可关闭的",slug:"可关闭的",file:"/packages/veno-ui/src/components/alert/docs/closable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20closable%20type%3D%22error%22%20title%3D%22Error%20Title%22%3EError%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(p,null,{default:n((()=>[X])),_:1})])),default:n((()=>[r(f,{closable:"",type:"error",title:"Error Title"},{default:n((()=>[Y])),_:1})])),_:1})])}]]);const ee={},te=l(" Error Text Error Text Error Text Error Text Error Text Error Text "),ae=l("Detail");var re=b(ee,[["render",function(e,l,i,o,d,c){const u=v,p=s,f=T;return t(),a("div",null,[r(f,{title:"自定义操作",slug:"自定义操作",file:"/packages/veno-ui/src/components/alert/docs/append.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20type%3D%22error%22%20title%3D%22Error%20Title%22%3E%0A%20%20%20%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%0A%20%20%20%20%3Ctemplate%20%23append%3E%0A%20%20%20%20%20%20%3Cve-button%20size%3D%22xs%22%20density%3D%22high%22%20color%3D%22info%22%3EDetail%3C%2Fve-button%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[r(p,{type:"error",title:"Error Title"},{append:n((()=>[r(u,{size:"xs",density:"high",color:"info"},{default:n((()=>[ae])),_:1})])),default:n((()=>[te])),_:1})])),_:1})])}]]);const ne={},le=l("使用 "),ie=l(':icon="false"'),se=l(" 不显示图标。"),oe=l("This is an info alert.");var de=b(ne,[["render",function(e,l,d,c,u,p){const f=o,v=i,m=s,g=T;return t(),a("div",null,[r(g,{title:"隐藏图标",slug:"隐藏图标",file:"/packages/veno-ui/src/components/alert/docs/icon.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20%3Aicon%3D%22false%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(v,null,{default:n((()=>[le,r(f,{color:"secondary",inline:""},{default:n((()=>[ie])),_:1}),se])),_:1})])),default:n((()=>[r(m,{icon:!1},{default:n((()=>[oe])),_:1})])),_:1})])}]]);const ce={},ue=l("密度有 "),pe=l("ultra-high"),fe=l(" - 超高、"),ve=l("high"),me=l(" - 高、"),ge=l("medium"),Ee=l(" - 中等（默认）、"),ye=l("low"),he=l(" - 低、"),Ce=l("ultra-low"),_e=l(" - 超低。"),Ae=l("This is an info alert."),Te=l("This is an info alert."),be=l("This is an info alert."),xe=l("This is an info alert."),De=l("This is an info alert.");var Fe=b(ce,[["render",function(e,l,c,u,p,f){const v=o,m=i,g=s,E=d,y=T;return t(),a("div",null,[r(y,{title:"密度",slug:"密度",file:"/packages/veno-ui/src/components/alert/docs/density.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22ultra-high%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22high%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22medium%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22low%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22ultra-low%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(m,null,{default:n((()=>[ue,r(v,{color:"secondary",inline:""},{default:n((()=>[pe])),_:1}),fe,r(v,{color:"secondary",inline:""},{default:n((()=>[ve])),_:1}),me,r(v,{color:"secondary",inline:""},{default:n((()=>[ge])),_:1}),Ee,r(v,{color:"secondary",inline:""},{default:n((()=>[ye])),_:1}),he,r(v,{color:"secondary",inline:""},{default:n((()=>[Ce])),_:1}),_e])),_:1})])),default:n((()=>[r(E,{cols:"12"},{default:n((()=>[r(g,{density:"ultra-high"},{default:n((()=>[Ae])),_:1}),r(g,{density:"high"},{default:n((()=>[Te])),_:1}),r(g,{density:"medium"},{default:n((()=>[be])),_:1}),r(g,{density:"low"},{default:n((()=>[xe])),_:1}),r(g,{density:"ultra-low"},{default:n((()=>[De])),_:1})])),_:1})])),_:1})])}]]);const we={},ke=l("无圆角，一点圆角，药丸形状。"),ze=l("This is an info alert."),je=l("This is an info alert."),Pe=l("This is an info alert.");var Be=b(we,[["render",function(e,l,o,c,u,p){const f=i,v=s,m=d,g=T;return t(),a("div",null,[r(g,{title:"多种形状",slug:"多种形状",file:"/packages/veno-ui/src/components/alert/docs/shape.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22tile%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22rounded%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22pill%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[r(f,null,{default:n((()=>[ke])),_:1})])),default:n((()=>[r(m,{cols:"12"},{default:n((()=>[r(v,{shape:"tile"},{default:n((()=>[ze])),_:1}),r(v,{shape:"rounded"},{default:n((()=>[je])),_:1}),r(v,{shape:"pill"},{default:n((()=>[Pe])),_:1})])),_:1})])),_:1})])}]]);const Ve={},We=l("This is an info alert.");var Ie=b(Ve,[["render",function(e,l,i,o,d,c){const u=s,p=T;return t(),a("div",null,[r(p,{title:"自定义关闭",slug:"自定义关闭",file:"/packages/veno-ui/src/components/alert/docs/close-text.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20closable%20close-text%3D%22Close%20Now%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[r(u,{closable:"","close-text":"Close Now"},{default:n((()=>[We])),_:1})])),_:1})])}]]);const Ne={},Se=l("This is an loading alert.");var Je=b(Ne,[["render",function(e,l,i,o,d,c){const u=s,p=T;return t(),a("div",null,[r(p,{title:"加载中",slug:"加载中",file:"/packages/veno-ui/src/components/alert/docs/loading.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20loading%3EThis%20is%20an%20loading%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[r(u,{loading:""},{default:n((()=>[Se])),_:1})])),_:1})])}]]);const Oe=l("警告提示 Alert"),Re=l("演示"),qe=l("API"),Ge=l("Alert Props"),He=l("Alert Events"),Ue=(e("__pageData",{title:"警告提示 Alert",headers:[{level:1,title:"警告提示 Alert",slug:"警告提示-alert"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"隐藏图标",slug:"隐藏图标"},{level:3,title:"提示类型",slug:"提示类型"},{level:3,title:"密度",slug:"密度"},{level:3,title:"多种变体",slug:"多种变体"},{level:3,title:"多种形状",slug:"多种形状"},{level:3,title:"可关闭的",slug:"可关闭的"},{level:3,title:"自定义关闭",slug:"自定义关闭"},{level:3,title:"自定义操作",slug:"自定义操作"},{level:3,title:"加载中",slug:"加载中"},{level:2,title:"API",slug:"api"},{level:3,title:"Alert Props",slug:"alert-props"},{level:3,title:"Alert Events",slug:"alert-events"}],frontmatter:{meta:{category:"Feedback 反馈组件","wai-aria":"https://www.w3.org/TR/wai-aria-practices/#alert"}}}),{});e("default",Object.assign(Ue,{setup:e=>(e,i)=>{const s=m,d=g,c=A,u=E,p=y,f=o,v=h;return t(),a("div",null,[r(s,{id:"警告提示-alert",tabindex:"-1"},{default:n((()=>[Oe])),_:1}),r(d,{id:"演示",tabindex:"-1"},{default:n((()=>[Re])),_:1}),r(u,null,{default:n((()=>[r(c,{cols:"12",md:"6"},{default:n((()=>[r(u,null,{default:n((()=>[r(c,{cols:"12"},{default:n((()=>[r(C(w))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(G))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(M))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(Z))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(re))])),_:1})])),_:1})])),_:1}),r(c,{cols:"12",md:"6"},{default:n((()=>[r(u,null,{default:n((()=>[r(c,{cols:"12"},{default:n((()=>[r(C(de))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(Fe))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(Be))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(Ie))])),_:1}),r(c,{cols:"12"},{default:n((()=>[r(C(Je))])),_:1})])),_:1})])),_:1})])),_:1}),r(d,{id:"api",tabindex:"-1"},{default:n((()=>[qe])),_:1}),r(p,{id:"alert-props",tabindex:"-1"},{default:n((()=>[Ge])),_:1}),r(v,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",source:"alert",default:!0,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"警告信息是否显示",source:"alert"}],description:"警告信息是否显示"},{name:"type",source:"alert",default:"!info!",type:"string",descriptions:[{language:"zh",name:"type",description:"警告信息的类型",source:"alert"}],description:"警告信息的类型"},{name:"icon",source:"alert",default:!0,type:"string | boolean | object",descriptions:[{language:"zh",name:"icon",description:"警告信息的图标",source:"alert"}],description:"警告信息的图标"},{name:"closable",source:"alert",default:!1,type:"boolean",descriptions:[{language:"zh",name:"closable",description:"警告信息是否可关闭",source:"alert"}],description:"警告信息是否可关闭"},{name:"close-icon",source:"alert",default:"!$close!",type:"string | object",descriptions:[{language:"zh",name:"closeIcon",description:"警告信息的关闭图标",source:"alert"}],description:"警告信息的关闭图标"},{name:"close-text",source:"alert",type:"string",descriptions:[{language:"zh",name:"closeText",description:"警告信息的关闭文本",source:"alert"}],description:"警告信息的关闭文本"},{name:"transition",source:"alert",default:{component:{name:"ve-fade-in-expand-transition",props:{mode:{default:"in-out"}}}},type:"boolean | string | object",descriptions:[]},{name:"loading",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"link",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"hover",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"image",source:"alert",type:"string",descriptions:[]},{name:"prepend-avatar",source:"alert",type:"string",descriptions:[]},{name:"prepend-icon",source:"alert",type:"string",descriptions:[]},{name:"append-avatar",source:"alert",type:"string",descriptions:[]},{name:"append-icon",source:"alert",type:"string",descriptions:[]},{name:"title",source:"alert",type:"string",descriptions:[]},{name:"subtitle",source:"alert",type:"string",descriptions:[]},{name:"divided",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"text",source:"alert",type:"string",descriptions:[]},{name:"ripple",source:"alert",default:!0,type:"boolean",descriptions:[]},{name:"href",source:"alert",type:"string",descriptions:[]},{name:"replace",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"to",source:"alert",type:"string | object",descriptions:[]},{name:"disabled",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"alert",default:"!contained-outlined!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"alert",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]}]},{"item.type":n((({item:e})=>[r(f,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[l(_(e.type),1)])),_:2},1024)])),"item.default":n((({item:e})=>[r(f,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[l(_("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"alert-events",tabindex:"-1"},{default:n((()=>[He])),_:1}),r(v,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
