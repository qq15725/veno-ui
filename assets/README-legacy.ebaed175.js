System.register(["./app-legacy.0e2fb860.js","./Demo-legacy.ab072aec.js","./close-legacy.85289734.js"],(function(e){"use strict";var t,a,r,n,i,o,l,s,d,p,u,c,m,f,v,g,b,y,h,A,D,C,E,w,_,F,x,k;return{setters:[function(e){t=e.q,a=e.s,r=e._,n=e.o,i=e.c,o=e.a,l=e.w,s=e.b,d=e.B,p=e.g,u=e.i,c=e.at,m=e.au,f=e.aj,v=e.ak,g=e.S,b=e.x,y=e.t,h=e.H,A=e.P,D=e.d,C=e.j,E=e.R,w=e.n,_=e.C,F=e.T},function(e){x=e._},function(e){k=e._}],execute:function(){const B=t({setup:()=>({show:a(!0)})}),M=s("切换");var P=r(B,[["render",function(e,t,a,r,s,f){const v=d,g=p,b=u,y=c,h=m,A=x;return n(),i("div",null,[o(A,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/drawer/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20class%3D%22mb-3%22%20%40click%3D%22show%20%3D%20!show%22%3E%E5%88%87%E6%8D%A2%3C%2Fve-button%3E%0A%0A%20%20%3Cve-layout%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-drawer%20permanent%20%3Arail%3D%22show%22%20position%3D%22absolute%22%3E%0A%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%201%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%202%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%203%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-close%22%20title%3D%22Menu%204%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20title%3D%22Menu%205%22%20link%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-layout%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:l((()=>[o(v,{class:"mb-3",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:l((()=>[M])),_:1}),o(h,{style:{height:"200px"}},{default:l((()=>[o(y,{permanent:"",rail:e.show,position:"absolute"},{default:l((()=>[o(b,null,{default:l((()=>[o(g,{"prepend-icon":k,title:"Menu 1",link:""}),o(g,{"prepend-icon":k,title:"Menu 2",link:""}),o(g,{"prepend-icon":k,title:"Menu 3",link:""}),o(g,{"prepend-icon":k,title:"Menu 4",link:""}),o(g,{title:"Menu 5",link:""})])),_:1})])),_:1},8,["rail"])])),_:1})])),_:1})])}]]);const j={},W=s("Top"),z=s("Right"),S=s("Bottom"),R=s("Left");var T=r(j,[["render",function(e,t,a,r,s,p){const u=d,m=c,b=g,y=x;return n(),i("div",null,[o(y,{title:"临时抽屉",slug:"临时抽屉",file:"/packages/veno-ui/src/components/drawer/docs/temporary.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22top%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ETop%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22right%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ERight%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22bottom%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EBottom%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%20%20%3Cve-drawer%20anchor%3D%22left%22%20temporary%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3ELeft%3C%2Fve-button%3E%20%20%20%0A%20%20%20%20%3C%2Fve-drawer%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[o(b,null,{default:l((()=>[o(m,{anchor:"top",temporary:""},{activator:l((({props:e})=>[o(u,f(v(e)),{default:l((()=>[W])),_:2},1040)])),_:1}),o(m,{anchor:"right",temporary:""},{activator:l((({props:e})=>[o(u,f(v(e)),{default:l((()=>[z])),_:2},1040)])),_:1}),o(m,{anchor:"bottom",temporary:""},{activator:l((({props:e})=>[o(u,f(v(e)),{default:l((()=>[S])),_:2},1040)])),_:1}),o(m,{anchor:"left",temporary:""},{activator:l((({props:e})=>[o(u,f(v(e)),{default:l((()=>[R])),_:2},1040)])),_:1})])),_:1})])),_:1})])}]]);const I=s("抽屉 Drawer"),L=s("一般用作侧边栏被固定在屏幕的左侧或右侧，或者打开或关闭一个临时的导航抽屉。"),N=s("演示"),O=s("API"),q=s("Drawer Props"),H=s("Drawer Events"),J=(e("__pageData",{title:"抽屉 Drawer",headers:[{level:1,title:"抽屉 Drawer",slug:"抽屉-drawer"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"临时抽屉",slug:"临时抽屉"},{level:2,title:"API",slug:"api"},{level:3,title:"Drawer Props",slug:"drawer-props"},{level:3,title:"Drawer Events",slug:"drawer-events"}],frontmatter:{meta:{category:"Navigation 导航"}}}),{});e("default",Object.assign(J,{setup:e=>(e,t)=>{const a=h,r=A,d=D,p=C,u=E,c=w,m=_,f=F;return n(),i("div",null,[o(a,{id:"抽屉-drawer",tabindex:"-1"},{default:l((()=>[I])),_:1}),o(r,null,{default:l((()=>[L])),_:1}),o(d,{id:"演示",tabindex:"-1"},{default:l((()=>[N])),_:1}),o(u,null,{default:l((()=>[o(p,{cols:"12",md:"12"},{default:l((()=>[o(u,null,{default:l((()=>[o(p,{cols:"12"},{default:l((()=>[o(b(P))])),_:1}),o(p,{cols:"12"},{default:l((()=>[o(b(T))])),_:1})])),_:1})])),_:1})])),_:1}),o(d,{id:"api",tabindex:"-1"},{default:l((()=>[O])),_:1}),o(c,{id:"drawer-props",tabindex:"-1"},{default:l((()=>[q])),_:1}),o(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"disable-resize-watcher",default:!1,type:"boolean",descriptions:[]},{name:"disable-route-watcher",default:!1,type:"boolean",descriptions:[]},{name:"color",type:"string",descriptions:[]},{name:"expand-on-hover",default:!1,type:"boolean",descriptions:[]},{name:"permanent",default:!1,type:"boolean",descriptions:[]},{name:"rail",default:!1,type:"boolean",descriptions:[]},{name:"rail-width",default:52,type:"number | string",descriptions:[]},{name:"show-toggler",default:!1,type:"boolean",descriptions:[]},{name:"temporary",default:!1,type:"boolean",descriptions:[]},{name:"touchless",default:!1,type:"boolean",descriptions:[]},{name:"width",default:256,type:"number | string",descriptions:[]},{name:"tag",source:"tag",default:"!nav!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"beautify-scrollbar",source:"scrollbar",default:!0,type:"boolean",descriptions:[{language:"zh",name:"beautifyScrollbar",description:"美化滚动条",source:"scrollbar"}],description:"美化滚动条"},{name:"theme",source:"theme",type:"string",descriptions:[{language:"zh",name:"theme",description:"设置主题",source:"theme"}],description:"设置主题"},{name:"border",source:"border",default:!1,type:"boolean | number | string",descriptions:[]},{name:"model-value",source:"layout-item",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"layout-item",type:"string",descriptions:[]},{name:"position",source:"layout-item",default:"!fixed!",type:"string",descriptions:[]},{name:"anchor",source:"layout-item",default:"!left!",type:"string",descriptions:[]},{name:"priority",source:"layout-item",default:0,type:"string | number",descriptions:[]}]},{"item.type":l((({item:e})=>[o(m,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[s(y(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[o(m,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[s(y("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),o(c,{id:"drawer-events",tabindex:"-1"},{default:l((()=>[H])),_:1}),o(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
