System.register(["./app-legacy.134a3af4.js","./Demo-legacy.cc21e8a4.js"],(function(e){"use strict";var a,l,t,r,n,o,d,s,i,u,c,g,p,m,b,A,f,v,D,C,h,E,y,_,F,x,B,z,P,k,V;return{setters:[function(e){a=e.y,l=e.z,t=e._,r=e.q,n=e.s,o=e.u,d=e.v,s=e.a8,i=e.aF,u=e.aG,c=e.aH,g=e.ay,p=e.aD,m=e.aB,b=e.$,A=e.C,f=e.av,v=e.aw,D=e.aI,C=e.x,h=e.P,E=e.G,y=e.H,_=e.d,F=e.R,x=e.n,B=e.T,z=e.I,P=e.J,k=e.k},function(e){V=e._}],execute:function(){const j=a({setup:()=>({props:l({cursor:!0,containment:"parent"}),value:l({left:100,top:100})})});var w=t(j,[["render",function(e,a,l,t,f,v){const D=i,C=u,h=c,E=g,y=p,_=m,F=b,x=A,B=V;return r(),n("div",null,[o(B,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/draggable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20v-model%3D%22props%22%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20label%3D%22Containment%22%0A%20%20%20%20%20%20placeholder%3D%22none%22%0A%20%20%20%20%20%20name%3D%22containment%22%20%0A%20%20%20%20%20%20clearable%20%0A%20%20%20%20%20%20width%3D%22100%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'parent'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Cursor%22%20name%3D%22cursor%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Disabled%22%20name%3D%22disabled%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%20border%20class%3D%22my-3%22%3E%0A%20%20%20%20%3Cve-draggable%20v-bind%3D%22props%22%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%3A%20draggable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20v-bind%3D%22draggable%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%20mb-3%22%20%3Acode%3D%22props%22%20theme%3D%22dark%22%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20props%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20cursor%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20containment%3A%20'parent'%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20left%3A%20100%2C%20top%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:d((()=>[o(E,{modelValue:e.props,"onUpdate:modelValue":a[0]||(a[0]=a=>e.props=a),inline:"","hide-details":""},{default:d((()=>[o(D,{label:"Containment",placeholder:"none",name:"containment",clearable:"",width:"100",items:["parent"]}),o(h,null,{default:d((()=>[o(C,{label:"Cursor",name:"cursor"})])),_:1}),o(h,null,{default:d((()=>[o(C,{label:"Disabled",name:"disabled"})])),_:1})])),_:1},8,["modelValue"]),o(F,{height:200,border:"",class:"my-3"},{default:d((()=>[o(_,s(e.props,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a)}),{default:d((({props:e})=>[o(y,s({size:"40",color:"primary",class:"p-3"},e),null,16)])),_:1},16,["modelValue"])])),_:1}),o(x,{class:"p-3 mb-3",code:e.props,theme:"dark"},null,8,["code"]),o(x,{class:"p-3",code:e.value,theme:"dark"},null,8,["code"])])),_:1})])}]]);const S={},W=C("可拖拽区域分离。"),I=C("拖拽我");var G=t(S,[["render",function(e,a,l,t,s,i){const u=h,c=E,g=p,A=m,C=b,y=V;return r(),n("div",null,[o(y,{title:"内容样式",slug:"内容样式",file:"/packages/veno-ui/src/components/draggable/docs/content-style.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%3E%E6%8B%96%E6%8B%BD%E6%88%91%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20%3Astyle%3D%22contentStyle%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{prepend:d((()=>[o(u,null,{default:d((()=>[W])),_:1})])),default:d((()=>[o(C,{height:200},{default:d((()=>[o(A,null,{default:d((({draggable:e,contentStyle:a})=>[o(c,f(v(e)),{default:d((()=>[I])),_:2},1040),o(g,{size:"40",color:"primary",class:"p-3",style:D(a)},null,8,["style"])])),_:1})])),_:1})])),_:1})])}]]);const H=C("拖拽移动 Draggable"),J=C("通过 "),O=C("ve-draggable"),U=C(" 可以将任何组件变成可以拖动位置的组件。"),q=C("演示"),N=C("API"),R=C("Draggable Props"),T=C("Draggable Events"),$=(e("__pageData",{title:"拖拽移动 Draggable",headers:[{level:1,title:"拖拽移动 Draggable",slug:"拖拽移动-draggable"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"内容样式",slug:"内容样式"},{level:2,title:"API",slug:"api"},{level:3,title:"Draggable Props",slug:"draggable-props"},{level:3,title:"Draggable Events",slug:"draggable-events"}],frontmatter:{category:"Draggable 拖拽组件"}}),{});e("default",Object.assign($,{setup:e=>(e,a)=>{const l=y,t=A,s=h,i=_,u=k,c=F,g=x,p=B;return r(),n("div",null,[o(l,{id:"拖拽移动-draggable",tabindex:"-1"},{default:d((()=>[H])),_:1}),o(s,null,{default:d((()=>[J,o(t,{color:"secondary",inline:""},{default:d((()=>[O])),_:1}),U])),_:1}),o(i,{id:"演示",tabindex:"-1"},{default:d((()=>[q])),_:1}),o(c,null,{default:d((()=>[o(u,{cols:"12",md:"12"},{default:d((()=>[o(c,null,{default:d((()=>[o(u,{cols:"12"},{default:d((()=>[o(z(w))])),_:1}),o(u,{cols:"12"},{default:d((()=>[o(z(G))])),_:1})])),_:1})])),_:1})])),_:1}),o(i,{id:"api",tabindex:"-1"},{default:d((()=>[N])),_:1}),o(g,{id:"draggable-props",tabindex:"-1"},{default:d((()=>[R])),_:1}),o(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[]},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可以拖拽",source:"draggable"}],description:"可以拖拽"},{name:"containment",source:"draggable",type:"string | object",descriptions:[{language:"zh",name:"containment",description:"被限制于在某个容器下拖拽",source:"draggable"}],description:"被限制于在某个容器下拖拽"},{name:"disabled",source:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"是否禁用",source:"draggable"}],description:"是否禁用"},{name:"cursor",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"cursor",description:"显示移动的光标",source:"draggable"}],description:"显示移动的光标"},{name:"position",source:"draggable",type:"string",descriptions:[{language:"zh",name:"position",description:"定位模式",source:"draggable"}],description:"定位模式"}]},{"item.type":d((({item:e})=>[o(t,{color:"secondary",inline:"",class:"p-1"},{default:d((()=>[C(P(e.type),1)])),_:2},1024)])),"item.default":d((({item:e})=>[o(t,{color:"secondary",inline:"",class:"p-1"},{default:d((()=>[C(P("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),o(g,{id:"draggable-events",tabindex:"-1"},{default:d((()=>[T])),_:1}),o(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));