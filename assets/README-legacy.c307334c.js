System.register(["./app-legacy.0e2fb860.js","./Demo-legacy.ab072aec.js"],(function(e){"use strict";var t,a,s,r,n,i,l,o,u,p,c,d,m,g,f,y,b,v,h,x,_,A,C;return{setters:[function(e){t=e._,a=e.o,s=e.c,r=e.a,n=e.w,i=e.F,l=e.r,o=e.aa,u=e.t,p=e.O,c=e.ab,d=e.a4,m=e.x,g=e.b,f=e.H,y=e.P,b=e.d,v=e.j,h=e.R,x=e.n,_=e.C,A=e.T},function(e){C=e._}],execute:function(){var E=t({},[["render",function(e,t,d,m,g,f){const y=p,b=c,v=o,h=C;return a(),s("div",null,[r(h,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/carousel/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-carousel%20height%3D%22200%22%20class%3D%22text-primary%22%3E%0A%20%20%20%20%3Cve-carousel-item%20v-for%3D%22i%20in%205%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20class%3D%22d-flex%20align-center%20justify-center%22%20%0A%20%20%20%20%20%20%20%20width%3D%22100%25%22%0A%20%20%20%20%20%20%20%20height%3D%22100%25%22%0A%20%20%20%20%20%20%20%20border%3D%220%22%0A%20%20%20%20%20%20%20%20v-text%3D%22i%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-carousel-item%3E%0A%20%20%3C%2Fve-carousel%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[r(v,{height:"200",class:"text-primary"},{default:n((()=>[(a(),s(i,null,l(5,(e=>r(b,null,{default:n((()=>[r(y,{class:"d-flex align-center justify-center",width:"100%",height:"100%",border:"0",textContent:u(e)},null,8,["textContent"])])),_:2},1024))),64))])),_:1})])),_:1})])}]]),F=t({},[["render",function(e,t,u,p,m,g){const f=d,y=c,b=o,v=C;return a(),s("div",null,[r(v,{title:"自动播放",slug:"自动播放",file:"/packages/veno-ui/src/components/carousel/docs/autoplay.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-carousel%20autoplay%20class%3D%22text-white%22%3E%0A%20%20%20%20%3Cve-carousel-item%20v-for%3D%22i%20in%205%22%3E%0A%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%22500%20%2F%20300%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-carousel-item%3E%0A%20%20%3C%2Fve-carousel%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[r(b,{autoplay:"",class:"text-white"},{default:n((()=>[(a(),s(i,null,l(5,(e=>r(y,null,{default:n((()=>[r(f,{src:"https://picsum.photos/id/11/500/300","aspect-ratio":500/300})])),_:1}))),64))])),_:1})])),_:1})])}]]);const D=g("轮播 Carousel"),w=g("用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。"),j=g("演示"),P=g("API"),W=g("Carousel Props"),O=g("Carousel Events"),k=(e("__pageData",{title:"轮播 Carousel",headers:[{level:1,title:"轮播 Carousel",slug:"轮播-carousel"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"自动播放",slug:"自动播放"},{level:2,title:"API",slug:"api"},{level:3,title:"Carousel Props",slug:"carousel-props"},{level:3,title:"Carousel Events",slug:"carousel-events"}],frontmatter:{meta:{category:"Data 数据展示"}}}),{});e("default",Object.assign(k,{setup:e=>(e,t)=>{const i=f,l=y,o=b,p=v,c=h,d=x,C=_,k=A;return a(),s("div",null,[r(i,{id:"轮播-carousel",tabindex:"-1"},{default:n((()=>[D])),_:1}),r(l,null,{default:n((()=>[w])),_:1}),r(o,{id:"演示",tabindex:"-1"},{default:n((()=>[j])),_:1}),r(c,null,{default:n((()=>[r(p,{cols:"12",md:"6"},{default:n((()=>[r(c,null,{default:n((()=>[r(p,{cols:"12"},{default:n((()=>[r(m(E))])),_:1})])),_:1})])),_:1}),r(p,{cols:"12",md:"6"},{default:n((()=>[r(c,null,{default:n((()=>[r(p,{cols:"12"},{default:n((()=>[r(m(F))])),_:1})])),_:1})])),_:1})])),_:1}),r(o,{id:"api",tabindex:"-1"},{default:n((()=>[P])),_:1}),r(d,{id:"carousel-props",tabindex:"-1"},{default:n((()=>[W])),_:1}),r(k,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"autoplay",default:!1,type:"boolean",descriptions:[]},{name:"interval",default:6e3,type:"number | string",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"paper",default:"!text!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",type:"string | number",descriptions:[]},{name:"density",source:"paper",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"paper",default:"!tile!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]},{name:"model-value",source:"group",default:!1,type:"number | boolean | string | array | object",descriptions:[]},{name:"multiple",source:"group",default:!1,type:"boolean",descriptions:[]},{name:"mandatory",source:"group",default:!1,type:"boolean | string",descriptions:[]},{name:"max",source:"group",type:"number",descriptions:[]},{name:"selected-class",source:"group",type:"string",descriptions:[]},{name:"disabled",source:"group",default:!1,type:"boolean",descriptions:[]}]},{"item.type":n((({item:e})=>[r(C,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[g(u(e.type),1)])),_:2},1024)])),"item.default":n((({item:e})=>[r(C,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[g(u("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(d,{id:"carousel-events",tabindex:"-1"},{default:n((()=>[O])),_:1}),r(k,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
