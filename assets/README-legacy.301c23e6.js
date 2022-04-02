System.register(["./app-legacy.0e2fb860.js","./Demo-legacy.ab072aec.js"],(function(e){"use strict";var a,t,l,d,r,n,i,s,o,u,g,c,p,f,v,m,b,A,D,C,_,y,E,h,x,B,F;return{setters:[function(e){a=e.q,t=e.s,l=e._,d=e.o,r=e.c,n=e.a,i=e.w,s=e.m,o=e.aq,u=e.ao,g=e.O,c=e.C,p=e.aj,f=e.ak,v=e.as,m=e.b,b=e.P,A=e.B,D=e.x,C=e.t,_=e.H,y=e.d,E=e.j,h=e.R,x=e.n,B=e.T},function(e){F=e._}],execute:function(){const P=a({setup:()=>({value:t({left:100,top:100})})});var j=l(P,[["render",function(e,a,t,l,p,f){const v=o,m=u,b=g,A=c,D=F;return d(),r("div",null,[n(D,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/draggable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20v-bind%3D%22props%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20left%3A%20100%2C%20top%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:i((()=>[n(b,{height:200},{default:i((()=>[n(m,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a)},{default:i((({props:e})=>[n(v,s({size:"40",color:"primary",class:"p-3"},e),null,16)])),_:1},8,["modelValue"])])),_:1}),n(A,{class:"p-3",code:e.value,theme:"dark"},null,8,["code"])])),_:1})])}]]);const k={},z=m("可拖拽区域分离。"),S=m("拖拽我");var W=l(k,[["render",function(e,a,t,l,s,c){const m=b,D=A,C=o,_=u,y=g,E=F;return d(),r("div",null,[n(E,{title:"内容样式",slug:"内容样式",file:"/packages/veno-ui/src/components/draggable/docs/content-style.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%3E%E6%8B%96%E6%8B%BD%E6%88%91%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20%3Astyle%3D%22contentStyle%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{prepend:i((()=>[n(m,null,{default:i((()=>[z])),_:1})])),default:i((()=>[n(y,{height:200},{default:i((()=>[n(_,null,{default:i((({draggable:e,contentStyle:a})=>[n(D,p(f(e)),{default:i((()=>[S])),_:2},1040),n(C,{size:"40",color:"primary",class:"p-3",style:v(a)},null,8,["style"])])),_:1})])),_:1})])),_:1})])}]]);const V=m("拖拽移动 Draggable"),O=m("通过 "),q=m("ve-draggable"),I=m(" 可以将任何组件变成可以拖动位置的组件。"),w=m("演示"),H=m("API"),J=m("Draggable Props"),N=m("Draggable Events"),R=(e("__pageData",{title:"拖拽移动 Draggable",headers:[{level:1,title:"拖拽移动 Draggable",slug:"拖拽移动-draggable"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"内容样式",slug:"内容样式"},{level:2,title:"API",slug:"api"},{level:3,title:"Draggable Props",slug:"draggable-props"},{level:3,title:"Draggable Events",slug:"draggable-events"}],frontmatter:{category:"Draggable 拖拽组件"}}),{});e("default",Object.assign(R,{setup:e=>(e,a)=>{const t=_,l=c,s=b,o=y,u=E,g=h,p=x,f=B;return d(),r("div",null,[n(t,{id:"拖拽移动-draggable",tabindex:"-1"},{default:i((()=>[V])),_:1}),n(s,null,{default:i((()=>[O,n(l,{color:"secondary",inline:""},{default:i((()=>[q])),_:1}),I])),_:1}),n(o,{id:"演示",tabindex:"-1"},{default:i((()=>[w])),_:1}),n(g,null,{default:i((()=>[n(u,{cols:"12",md:"12"},{default:i((()=>[n(g,null,{default:i((()=>[n(u,{cols:"12"},{default:i((()=>[n(D(j))])),_:1}),n(u,{cols:"12"},{default:i((()=>[n(D(W))])),_:1})])),_:1})])),_:1})])),_:1}),n(o,{id:"api",tabindex:"-1"},{default:i((()=>[H])),_:1}),n(p,{id:"draggable-props",tabindex:"-1"},{default:i((()=>[J])),_:1}),n(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[]},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可拖拽的",source:"draggable"}],description:"可拖拽的"}]},{"item.type":i((({item:e})=>[n(l,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[m(C(e.type),1)])),_:2},1024)])),"item.default":i((({item:e})=>[n(l,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[m(C("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),n(p,{id:"draggable-events",tabindex:"-1"},{default:i((()=>[N])),_:1}),n(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
