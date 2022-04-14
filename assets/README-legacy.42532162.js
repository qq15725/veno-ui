System.register(["./app-legacy.df25bfcc.js","./Demo-legacy.ab6c152b.js"],(function(e){"use strict";var t,i,n,a,s,o,l,d,r,u,c,p,m,g,h,y,f,v,z,x,_,A;return{setters:[function(e){t=e._,i=e.q,n=e.s,a=e.u,s=e.v,o=e.ae,l=e.ad,d=e.aT,r=e.Z,u=e.$,c=e.H,p=e.P,m=e.d,g=e.R,h=e.n,y=e.T,f=e.I,v=e.x,z=e.J,x=e.C,_=e.k},function(e){A=e._}],execute:function(){const b={},E=o("div",{style:{height:"250px"}},null,-1);var F=t(b,[["render",function(e,t,o,c,p,m){const g=l,h=d,y=r,f=u,v=A;return i(),n("div",null,[a(v,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/lazy/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-card-text%20style%3D%22overflow-y%3A%20auto%3B%20max-height%3A%20100%25%3B%22%3E%0A%20%20%20%20%20%20%3Cdiv%20style%3D%22height%3A%20250px%3B%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cve-lazy%3E%0A%20%20%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%22500%20%2F%20300%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-lazy%3E%0A%20%20%20%20%3C%2Fve-card-text%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:s((()=>[a(f,{height:200},{default:s((()=>[a(y,{style:{"overflow-y":"auto","max-height":"100%"}},{default:s((()=>[E,a(h,null,{default:s((()=>[a(g,{src:"https://picsum.photos/id/11/500/300","aspect-ratio":500/300})])),_:1})])),_:1})])),_:1})])),_:1})])}]]);const C=v("懒加载 Lazy"),D=v("lazy"),L=v(" 组件。"),P=v("演示"),W=v("API"),w=v("Lazy Props"),j=v("Lazy Events"),B=(e("__pageData",{title:"懒加载 Lazy",headers:[{level:1,title:"懒加载 Lazy",slug:"懒加载-lazy"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Lazy Props",slug:"lazy-props"},{level:3,title:"Lazy Events",slug:"lazy-events"}],frontmatter:{category:"Others 其他组件"}}),{});e("default",Object.assign(B,{setup:e=>(e,t)=>{const o=c,l=x,d=p,r=m,u=_,A=g,b=h,E=y;return i(),n("div",null,[a(o,{id:"懒加载-lazy",tabindex:"-1"},{default:s((()=>[C])),_:1}),a(d,null,{default:s((()=>[a(l,{color:"secondary",inline:""},{default:s((()=>[D])),_:1}),L])),_:1}),a(r,{id:"演示",tabindex:"-1"},{default:s((()=>[P])),_:1}),a(A,null,{default:s((()=>[a(u,{cols:"12",md:"12"},{default:s((()=>[a(A,null,{default:s((()=>[a(u,{cols:"12"},{default:s((()=>[a(f(F))])),_:1})])),_:1})])),_:1})])),_:1}),a(r,{id:"api",tabindex:"-1"},{default:s((()=>[W])),_:1}),a(b,{id:"lazy-props",tabindex:"-1"},{default:s((()=>[w])),_:1}),a(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",default:!1,type:"boolean",descriptions:[]},{name:"options",default:{},type:"object",descriptions:[]},{name:"height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"height",description:"高度",source:"dimension"}],description:"高度"},{name:"max-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxHeight",description:"最大高度",source:"dimension"}],description:"最大高度"},{name:"max-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxWidth",description:"最大宽度",source:"dimension"}],description:"最大宽度"},{name:"min-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minHeight",description:"最小高度",source:"dimension"}],description:"最小高度"},{name:"min-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minWidth",description:"最小宽度",source:"dimension"}],description:"最小宽度"},{name:"width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"width",description:"宽度",source:"dimension"}],description:"宽度"},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"transition",source:"transition",default:{component:{name:"ve-fade-transition",props:{mode:{},origin:{default:"top center 0"}}}},type:"boolean | string | object",descriptions:[{language:"zh",name:"transition",description:"过渡动画",source:"transition"}],description:"过渡动画"}]},{"item.type":s((({item:e})=>[a(l,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[v(z(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[a(l,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[v(z("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),a(b,{id:"lazy-events",tabindex:"-1"},{default:s((()=>[j])),_:1}),a(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
