System.register(["./app-legacy.ec2822eb.js","./Demo-legacy.ac968142.js"],(function(e){"use strict";var t,l,a,n,i,o,r,d,s,u,v,c,p,f,m,g,h,A,_,y;return{setters:[function(e){t=e._,l=e.q,a=e.s,n=e.u,i=e.v,o=e.a8,r=e.x,d=e.$,s=e.i,u=e.H,v=e.P,c=e.d,p=e.R,f=e.n,m=e.T,g=e.I,h=e.J,A=e.C,_=e.k},function(e){y=e._}],execute:function(){const x={},b=r(" 移动鼠标到此 ");var E=t(x,[["render",function(e,t,r,u,v,c){const p=d,f=s,m=y;return l(),a("div",null,[n(m,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/hover/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-hover%20%23default%3D%22%7B%20props%2C%20hover%20%7D%22%3E%0A%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%23text%20%0A%20%20%20%20%20%20v-bind%3D%22props%22%0A%20%20%20%20%20%20%3Acolor%3D%22hover%20%3F%20'error'%20%3A%20undefined%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%E7%A7%BB%E5%8A%A8%E9%BC%A0%E6%A0%87%E5%88%B0%E6%AD%A4%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-hover%3E%0A%3C%2Ftemplate%3E"},{default:i((()=>[n(f,null,{default:i((({props:e,hover:t})=>[n(p,o(e,{color:t?"error":void 0}),{text:i((()=>[b])),_:2},1040,["color"])])),_:1})])),_:1})])}]]);const C=r("悬停 Hover"),H=r("hover"),D=r(" 组件。"),P=r("演示"),B=r("API"),W=r("Hover Props"),F=r("Hover Events"),j=(e("__pageData",{title:"悬停 Hover",headers:[{level:1,title:"悬停 Hover",slug:"悬停-hover"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Hover Props",slug:"hover-props"},{level:3,title:"Hover Events",slug:"hover-events"}],frontmatter:{category:"Others 其他组件"}}),{});e("default",Object.assign(j,{setup:e=>(e,t)=>{const o=u,d=A,s=v,y=c,x=_,b=p,j=f,I=m;return l(),a("div",null,[n(o,{id:"悬停-hover",tabindex:"-1"},{default:i((()=>[C])),_:1}),n(s,null,{default:i((()=>[n(d,{color:"secondary",inline:""},{default:i((()=>[H])),_:1}),D])),_:1}),n(y,{id:"演示",tabindex:"-1"},{default:i((()=>[P])),_:1}),n(b,null,{default:i((()=>[n(x,{cols:"12",md:"12"},{default:i((()=>[n(b,null,{default:i((()=>[n(x,{cols:"12"},{default:i((()=>[n(g(E))])),_:1})])),_:1})])),_:1})])),_:1}),n(y,{id:"api",tabindex:"-1"},{default:i((()=>[B])),_:1}),n(j,{id:"hover-props",tabindex:"-1"},{default:i((()=>[W])),_:1}),n(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"disabled",default:!1,type:"boolean",descriptions:[]},{name:"model-value",default:!1,type:"boolean",descriptions:[]},{name:"close-delay",source:"delay",type:"number | string",descriptions:[]},{name:"open-delay",source:"delay",type:"number | string",descriptions:[]}]},{"item.type":i((({item:e})=>[n(d,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[r(h(e.type),1)])),_:2},1024)])),"item.default":i((({item:e})=>[n(d,{color:"secondary",inline:"",class:"p-1"},{default:i((()=>[r(h("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),n(j,{id:"hover-events",tabindex:"-1"},{default:i((()=>[F])),_:1}),n(I,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
