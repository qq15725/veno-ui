System.register(["./app-legacy.4b29118e.js","./Demo-legacy.29073325.js"],(function(e){"use strict";var a,l,t,r,n,d,o,s,i,u,c,p,g,m,b,A,f,v,D,C,h,E,y,_,F,x,B,z,P,j,k;return{setters:[function(e){a=e.q,l=e.s,t=e._,r=e.o,n=e.c,d=e.a,o=e.w,s=e.m,i=e.as,u=e.at,c=e.au,p=e.av,g=e.aq,m=e.ao,b=e.O,A=e.C,f=e.aj,v=e.ak,D=e.aw,C=e.b,h=e.P,E=e.B,y=e.x,_=e.t,F=e.H,x=e.d,B=e.j,z=e.R,P=e.n,j=e.T},function(e){k=e._}],execute:function(){const V=a({setup:()=>({props:l({cursor:!0,containment:"parent"}),value:l({left:100,top:100})})});var w=t(V,[["render",function(e,a,l,t,f,v){const D=i,C=u,h=c,E=p,y=g,_=m,F=b,x=A,B=k;return r(),n("div",null,[d(B,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/draggable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20v-model%3D%22props%22%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20label%3D%22Containment%22%0A%20%20%20%20%20%20placeholder%3D%22none%22%0A%20%20%20%20%20%20name%3D%22containment%22%20%0A%20%20%20%20%20%20clearable%20%0A%20%20%20%20%20%20width%3D%22100%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'parent'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Cursor%22%20name%3D%22cursor%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Disabled%22%20name%3D%22disabled%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%20border%20class%3D%22my-3%22%3E%0A%20%20%20%20%3Cve-draggable%20v-bind%3D%22props%22%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%3A%20draggable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20v-bind%3D%22draggable%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%20mb-3%22%20%3Acode%3D%22props%22%20theme%3D%22dark%22%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20props%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20cursor%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20containment%3A%20'parent'%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20left%3A%20100%2C%20top%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[d(E,{modelValue:e.props,"onUpdate:modelValue":a[0]||(a[0]=a=>e.props=a),inline:"","hide-details":""},{default:o((()=>[d(D,{label:"Containment",placeholder:"none",name:"containment",clearable:"",width:"100",items:["parent"]}),d(h,null,{default:o((()=>[d(C,{label:"Cursor",name:"cursor"})])),_:1}),d(h,null,{default:o((()=>[d(C,{label:"Disabled",name:"disabled"})])),_:1})])),_:1},8,["modelValue"]),d(F,{height:200,border:"",class:"my-3"},{default:o((()=>[d(_,s(e.props,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a)}),{default:o((({props:e})=>[d(y,s({size:"40",color:"primary",class:"p-3"},e),null,16)])),_:1},16,["modelValue"])])),_:1}),d(x,{class:"p-3 mb-3",code:e.props,theme:"dark"},null,8,["code"]),d(x,{class:"p-3",code:e.value,theme:"dark"},null,8,["code"])])),_:1})])}]]);const S={},W=C("可拖拽区域分离。"),O=C("拖拽我");var q=t(S,[["render",function(e,a,l,t,s,i){const u=h,c=E,p=g,A=m,C=b,y=k;return r(),n("div",null,[d(y,{title:"内容样式",slug:"内容样式",file:"/packages/veno-ui/src/components/draggable/docs/content-style.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%3E%E6%8B%96%E6%8B%BD%E6%88%91%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20%3Astyle%3D%22contentStyle%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{prepend:o((()=>[d(u,null,{default:o((()=>[W])),_:1})])),default:o((()=>[d(C,{height:200},{default:o((()=>[d(A,null,{default:o((({draggable:e,contentStyle:a})=>[d(c,f(v(e)),{default:o((()=>[O])),_:2},1040),d(p,{size:"40",color:"primary",class:"p-3",style:D(a)},null,8,["style"])])),_:1})])),_:1})])),_:1})])}]]);const I=C("拖拽移动 Draggable"),U=C("通过 "),H=C("ve-draggable"),J=C(" 可以将任何组件变成可以拖动位置的组件。"),N=C("演示"),R=C("API"),T=C("Draggable Props"),G=C("Draggable Events"),K=(e("__pageData",{title:"拖拽移动 Draggable",headers:[{level:1,title:"拖拽移动 Draggable",slug:"拖拽移动-draggable"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"内容样式",slug:"内容样式"},{level:2,title:"API",slug:"api"},{level:3,title:"Draggable Props",slug:"draggable-props"},{level:3,title:"Draggable Events",slug:"draggable-events"}],frontmatter:{category:"Draggable 拖拽组件"}}),{});e("default",Object.assign(K,{setup:e=>(e,a)=>{const l=F,t=A,s=h,i=x,u=B,c=z,p=P,g=j;return r(),n("div",null,[d(l,{id:"拖拽移动-draggable",tabindex:"-1"},{default:o((()=>[I])),_:1}),d(s,null,{default:o((()=>[U,d(t,{color:"secondary",inline:""},{default:o((()=>[H])),_:1}),J])),_:1}),d(i,{id:"演示",tabindex:"-1"},{default:o((()=>[N])),_:1}),d(c,null,{default:o((()=>[d(u,{cols:"12",md:"12"},{default:o((()=>[d(c,null,{default:o((()=>[d(u,{cols:"12"},{default:o((()=>[d(y(w))])),_:1}),d(u,{cols:"12"},{default:o((()=>[d(y(q))])),_:1})])),_:1})])),_:1})])),_:1}),d(i,{id:"api",tabindex:"-1"},{default:o((()=>[R])),_:1}),d(p,{id:"draggable-props",tabindex:"-1"},{default:o((()=>[T])),_:1}),d(g,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[]},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可以拖拽",source:"draggable"}],description:"可以拖拽"},{name:"containment",source:"draggable",type:"string | object",descriptions:[{language:"zh",name:"containment",description:"被限制于在某个容器下拖拽",source:"draggable"}],description:"被限制于在某个容器下拖拽"},{name:"disabled",source:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"是否禁用",source:"draggable"}],description:"是否禁用"},{name:"cursor",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"cursor",description:"显示移动的光标",source:"draggable"}],description:"显示移动的光标"}]},{"item.type":o((({item:e})=>[d(t,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[C(_(e.type),1)])),_:2},1024)])),"item.default":o((({item:e})=>[d(t,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[C(_("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),d(p,{id:"draggable-events",tabindex:"-1"},{default:o((()=>[G])),_:1}),d(g,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
