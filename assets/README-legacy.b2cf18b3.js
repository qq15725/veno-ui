System.register(["./app-legacy.df25bfcc.js","./Demo-legacy.ab6c152b.js"],(function(e){"use strict";var t,o,n,a,i,r,s,l,p,c,u,d,A,E,v,m,y,f,g,F,b,C,B,D,h,_,x,k;return{setters:[function(e){t=e._,o=e.q,n=e.s,a=e.u,i=e.v,r=e.av,s=e.aw,l=e.x,p=e.G,c=e.a0,u=e.S,d=e.y,A=e.z,E=e.ak,v=e.al,m=e.R,y=e.aN,f=e.J,g=e.b4,F=e.k,b=e.H,C=e.P,B=e.d,D=e.n,h=e.T,_=e.I,x=e.C},function(e){k=e._}],execute:function(){const z={},w=l("提示"),T=l("提示");var j=t(z,[["render",function(e,t,l,d,A,E){const v=p,m=c,y=u,f=k;return o(),n("div",null,[a(f,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/tooltip/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%8F%90%E7%A4%BA%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-tooltip%3E%0A%0A%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%8F%90%E7%A4%BA%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:i((()=>[a(y,null,{default:i((()=>[a(m,{text:"提示"},{activator:i((({props:e})=>[a(v,r(s(e)),{default:i((()=>[w])),_:2},1040)])),_:1}),a(m,{text:"提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示"},{activator:i((({props:e})=>[a(v,r(s(e)),{default:i((()=>[T])),_:2},1040)])),_:1})])),_:1})])),_:1})])}]]);const P={},O=l("提示");var I=t(P,[["render",function(e,t,l,u,d,A){const E=p,v=c,m=k;return o(),n("div",null,[a(m,{title:"没有箭头",slug:"没有箭头",file:"/packages/veno-ui/src/components/tooltip/docs/arrow.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-tooltip%20%0A%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%20%0A%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%3Aarrow%3D%22false%22%0A%20%20%3E%0A%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%8F%90%E7%A4%BA%3C%2Fve-button%3E%0A%20%20%3C%2Fve-tooltip%3E%0A%3C%2Ftemplate%3E"},{default:i((()=>[a(v,{text:"提示",arrow:!1},{activator:i((({props:e})=>[a(E,r(s(e)),{default:i((()=>[O])),_:2},1040)])),_:1})])),_:1})])}]]);const W=d({setup:()=>({anchors:A(["top start","top","top end","start top",null,"end top","start",null,"end","start bottom",null,"end bottom","bottom start","bottom","bottom end"])})});var M=t(W,[["render",function(e,t,u,d,A,b){const C=p,B=c,D=F,h=m,_=k;return o(),n("div",null,[a(_,{title:"自定义锚点",slug:"自定义锚点",file:"/packages/veno-ui/src/components/tooltip/docs/anchor.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Ctemplate%0A%20%20%20%20%20%20v-for%3D%22(anchor%2C%20key)%20in%20anchors%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-col%20cols%3D%224%22%20class%3D%22text-center%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20%20%20v-if%3D%22anchor%22%0A%20%20%20%20%20%20%20%20%20%20%3Akey%3D%22key%22%0A%20%20%20%20%20%20%20%20%20%20%3Aanchor%3D%22anchor%22%0A%20%20%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%7B%7B%20anchor%20%7D%7D%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%20%20%3C%2Fve-col%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20anchors%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20'top%20start'%2C%20'top'%2C%20'top%20end'%2C%0A%20%20%20%20%20%20%20%20%20%20'start%20top'%2C%20null%2C%20'end%20top'%2C%0A%20%20%20%20%20%20%20%20%20%20'start'%2C%20null%2C%20'end'%2C%0A%20%20%20%20%20%20%20%20%20%20'start%20bottom'%2C%20null%2C%20'end%20bottom'%2C%0A%20%20%20%20%20%20%20%20%20%20'bottom%20start'%2C%20'bottom'%2C%20'bottom%20end'%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:i((()=>[a(h,null,{default:i((()=>[(o(!0),n(E,null,v(e.anchors,((e,t)=>(o(),y(D,{cols:"4",class:"text-center"},{default:i((()=>[e?(o(),y(B,{key:t,anchor:e,text:"提示"},{activator:i((({props:t})=>[a(C,r(s(t)),{default:i((()=>[l(f(e),1)])),_:2},1040)])),_:2},1032,["anchor"])):g("",!0)])),_:2},1024)))),256))])),_:1})])),_:1})])}]]);const S={},J=l("提示"),N=l("提示");var V=t(S,[["render",function(e,t,l,d,A,E){const v=p,m=c,y=u,f=k;return o(),n("div",null,[a(f,{title:"去除动画",slug:"去除动画",file:"/packages/veno-ui/src/components/tooltip/docs/transition.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%3Atransition%3D%22false%22%0A%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%8F%90%E7%A4%BA%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-tooltip%3E%0A%0A%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%3Atransition%3D%22false%22%0A%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%8F%90%E7%A4%BA%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:i((()=>[a(y,null,{default:i((()=>[a(m,{transition:!1,text:"提示"},{activator:i((({props:e})=>[a(v,r(s(e)),{default:i((()=>[J])),_:2},1040)])),_:1}),a(m,{transition:!1,text:"提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示"},{activator:i((({props:e})=>[a(v,r(s(e)),{default:i((()=>[N])),_:2},1040)])),_:1})])),_:1})])),_:1})])}]]);const q=l("提示 Tooltip"),G=l("当用户鼠标悬停，聚焦或者轻触一个元素时，工具提示组件会显示一段有意义的文本，比如对该功能的描述。"),H=l("演示"),R=l("API"),K=l("Tooltip Props"),L=l("Tooltip Events"),Q=(e("__pageData",{title:"提示 Tooltip",headers:[{level:1,title:"提示 Tooltip",slug:"提示-tooltip"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"没有箭头",slug:"没有箭头"},{level:3,title:"自定义锚点",slug:"自定义锚点"},{level:3,title:"去除动画",slug:"去除动画"},{level:2,title:"API",slug:"api"},{level:3,title:"Tooltip Props",slug:"tooltip-props"},{level:3,title:"Tooltip Events",slug:"tooltip-events"}],frontmatter:{meta:{category:"Data 数据展示"}}}),{});e("default",Object.assign(Q,{setup:e=>(e,t)=>{const r=b,s=C,p=B,c=F,u=m,d=D,A=x,E=h;return o(),n("div",null,[a(r,{id:"提示-tooltip",tabindex:"-1"},{default:i((()=>[q])),_:1}),a(s,null,{default:i((()=>[G])),_:1}),a(p,{id:"演示",tabindex:"-1"},{default:i((()=>[H])),_:1}),a(u,null,{default:i((()=>[a(c,{cols:"12",md:"12"},{default:i((()=>[a(u,null,{default:i((()=>[a(c,{cols:"12"},{default:i((()=>[a(_(j))])),_:1}),a(c,{cols:"12"},{default:i((()=>[a(_(I))])),_:1}),a(c,{cols:"12"},{default:i((()=>[a(_(M))])),_:1}),a(c,{cols:"12"},{default:i((()=>[a(_(V))])),_:1})])),_:1})])),_:1})])),_:1}),a(p,{id:"api",tabindex:"-1"},{default:i((()=>[R])),_:1}),a(d,{id:"tooltip-props",tabindex:"-1"},{default:i((()=>[K])),_:1}),a(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"id",type:"string",descriptions:[{language:"zh",name:"id",description:"DOM ID",source:"tooltip"}],description:"DOM ID"},{name:"text",type:"string",descriptions:[{language:"zh",name:"text",description:"工具提示内容",source:"tooltip"}],description:"工具提示内容"},{name:"arrow",default:!0,type:"boolean",descriptions:[{language:"zh",name:"arrow",description:"是否显示箭头",source:"tooltip"}],description:"是否显示箭头"},{name:"model-value",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"是否展示",source:"overlay"}],description:"是否展示"},{name:"absolute",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"absolute",description:"使用绝对定位",source:"overlay"}],description:"使用绝对定位"},{name:"attach",source:"overlay",default:!1,type:"boolean | string | object",descriptions:[{language:"zh",name:"attach",description:"绑定到的 DOM",source:"overlay"}],description:"绑定到的 DOM"},{name:"contained",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"contained",description:"使用容器形式",source:"overlay"}],description:"使用容器形式"},{name:"content-style",source:"overlay",type:"any",descriptions:[{language:"zh",name:"contentStyle",description:"包裹内容 div 的 style",source:"overlay"}],description:"包裹内容 div 的 style"},{name:"content-class",source:"overlay",type:"any",descriptions:[{language:"zh",name:"contentClass",description:"包裹内容 div 的 class",source:"overlay"}],description:"包裹内容 div 的 class"},{name:"no-click-animation",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"noClickAnimation",description:"没有点击动画",source:"overlay"}],description:"没有点击动画"},{name:"persistent",source:"overlay",default:!1,type:"boolean",descriptions:[{language:"zh",name:"persistent",description:"持续显示（额外关闭行为不受控）",source:"overlay"}],description:"持续显示（额外关闭行为不受控）"},{name:"scrim",source:"overlay",default:!0,type:"string | boolean",descriptions:[{language:"zh",name:"scrim",description:"无遮罩层",source:"overlay"}],description:"无遮罩层"},{name:"activator",source:"overlay",type:"string | object",descriptions:[]},{name:"activator-props",source:"overlay",default:{},type:"object",descriptions:[]},{name:"open-on-click",source:"overlay",default:!1,type:"boolean",descriptions:[]},{name:"open-on-hover",source:"overlay",default:!0,type:"boolean",descriptions:[]},{name:"open-on-focus",source:"overlay",default:!1,type:"boolean",descriptions:[]},{name:"close-delay",source:"overlay",type:"number | string",descriptions:[]},{name:"open-delay",source:"overlay",type:"number | string",descriptions:[]},{name:"height",source:"overlay",type:"number | string",descriptions:[]},{name:"max-height",source:"overlay",type:"number | string",descriptions:[]},{name:"max-width",source:"overlay",default:300,type:"number | string",descriptions:[]},{name:"min-height",source:"overlay",type:"number | string",descriptions:[]},{name:"min-width",source:"overlay",default:0,type:"number | string",descriptions:[]},{name:"width",source:"overlay",type:"number | string",descriptions:[]},{name:"position-strategy",source:"overlay",default:"!connected!",type:"string | function",descriptions:[]},{name:"anchor",source:"overlay",default:"!top!",type:"string",descriptions:[]},{name:"origin",source:"overlay",default:"!auto!",type:"string",descriptions:[]},{name:"offset",source:"overlay",default:10,type:"number | string",descriptions:[]},{name:"scroll-strategy",source:"overlay",default:"!reposition!",type:"boolean | string | function",descriptions:[]},{name:"theme",source:"overlay",type:"string",descriptions:[]},{name:"transition",source:"overlay",default:{component:{name:"ve-scale-transition",props:{mode:{},origin:{default:"top center 0"}}}},type:"boolean | string | object",descriptions:[]},{name:"eager",source:"overlay",default:!1,type:"boolean",descriptions:[]}]},{"item.type":i((({item:e})=>[a(A,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[l(f(e.type),1)])),_:2},1024)])),"item.default":i((({item:e})=>[a(A,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[l(f("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),a(d,{id:"tooltip-events",tabindex:"-1"},{default:i((()=>[L])),_:1}),a(E,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
