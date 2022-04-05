System.register(["./app-legacy.4b29118e.js","./Demo-legacy.29073325.js"],(function(e){"use strict";var a,l,t,r,i,d,o,s,n,g,u,c,p,b,m,f,v,h,z,A,C,D,_,E,y;return{setters:[function(e){a=e.q,l=e.s,t=e._,r=e.o,i=e.c,d=e.a,o=e.w,s=e.m,n=e.b,g=e.P,u=e.O,c=e.ap,p=e.aq,b=e.C,m=e.an,f=e.N,v=e.x,h=e.t,z=e.H,A=e.d,C=e.j,D=e.R,_=e.n,E=e.T},function(e){y=e._}],execute:function(){const F=a({setup:()=>({value:l({width:200,height:100})})}),x=n("默认有 8 个方向的可拖拽点。");var w=t(F,[["render",function(e,a,l,t,n,m){const f=g,v=u,h=c,z=p,A=b,C=y;return r(),i("div",null,[d(C,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/draggable-resizable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20color%3D%22primary%22%20v-bind%3D%22props%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20width%3A%20200%2C%20height%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:o((()=>[d(f,null,{default:o((()=>[x])),_:1})])),default:o((()=>[d(z,{"min-height":"200"},{default:o((()=>[d(h,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a)},{default:o((({props:e})=>[d(v,s({color:"primary"},e),null,16)])),_:1},8,["modelValue"])])),_:1}),d(A,{class:"p-3",code:e.value,theme:"dark"},null,8,["code"])])),_:1})])}]]);const R={},W=n("Window");var B=t(R,[["render",function(e,a,l,t,n,g){const b=m,v=f,h=u,z=c,A=p,C=y;return r(),i("div",null,[d(C,{title:"指定可拖动区域",slug:"指定可拖动区域",file:"/packages/veno-ui/src/components/draggable-resizable/docs/slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20%23default%3D%22%7B%20draggable%2C%20resizable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20border%20v-bind%3D%22resizable%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20height%3D%2230%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3EWindow%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-text%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%3C%2Ftemplate%3E"},{default:o((()=>[d(A,{"min-height":"200"},{default:o((()=>[d(z,null,{default:o((({draggable:e,resizable:a})=>[d(h,s({border:""},a),{default:o((()=>[d(b,s({height:"30",color:"primary"},e),{default:o((()=>[W])),_:2},1040),d(v)])),_:2},1040)])),_:1})])),_:1})])),_:1})])}]]);const P={},j=n("定义 "),k=n("show-resizable-anchor"),V=n(" 属性会显示所有的可拖拽点。"),O=n("Window");var q=t(P,[["render",function(e,a,l,t,n,v){const h=b,z=g,A=m,C=f,D=u,_=c,E=p,F=y;return r(),i("div",null,[d(F,{title:"显示可拖拽点",slug:"显示可拖拽点",file:"/packages/veno-ui/src/components/draggable-resizable/docs/anchor.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20show-resizable-anchor%20%23default%3D%22%7B%20draggable%2C%20resizable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20border%20v-bind%3D%22resizable%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20height%3D%2230%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3EWindow%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-text%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%3C%2Ftemplate%3E"},{prepend:o((()=>[d(z,null,{default:o((()=>[j,d(h,{color:"secondary",inline:""},{default:o((()=>[k])),_:1}),V])),_:1})])),default:o((()=>[d(E,{"min-height":"200"},{default:o((()=>[d(_,{"show-resizable-anchor":""},{default:o((({draggable:e,resizable:a})=>[d(D,s({border:""},a),{default:o((()=>[d(A,s({height:"30",color:"primary"},e),{default:o((()=>[O])),_:2},1040),d(C)])),_:2},1040)])),_:1})])),_:1})])),_:1})])}]]);const I=n("拖拽大小 Resizable"),N=n("通过 ve-draggable-resizable 可以很轻松的实现一个可以拖拽大小的窗口。"),S=n("演示"),H=n("API"),J=n("DraggableResizable Props"),T=n("DraggableResizable Events"),U=(e("__pageData",{title:"拖拽大小 Resizable",headers:[{level:1,title:"拖拽大小 Resizable",slug:"拖拽大小-resizable"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"指定可拖动区域",slug:"指定可拖动区域"},{level:3,title:"显示可拖拽点",slug:"显示可拖拽点"},{level:2,title:"API",slug:"api"},{level:3,title:"DraggableResizable Props",slug:"draggableresizable-props"},{level:3,title:"DraggableResizable Events",slug:"draggableresizable-events"}],frontmatter:{category:"Draggable 拖拽组件"}}),{});e("default",Object.assign(U,{setup:e=>(e,a)=>{const l=z,t=g,s=A,u=C,c=D,p=_,m=b,f=E;return r(),i("div",null,[d(l,{id:"拖拽大小-resizable",tabindex:"-1"},{default:o((()=>[I])),_:1}),d(t,null,{default:o((()=>[N])),_:1}),d(s,{id:"演示",tabindex:"-1"},{default:o((()=>[S])),_:1}),d(c,null,{default:o((()=>[d(u,{cols:"12",md:"12"},{default:o((()=>[d(c,null,{default:o((()=>[d(u,{cols:"12"},{default:o((()=>[d(v(w))])),_:1}),d(u,{cols:"12"},{default:o((()=>[d(v(B))])),_:1}),d(u,{cols:"12"},{default:o((()=>[d(v(q))])),_:1})])),_:1})])),_:1})])),_:1}),d(s,{id:"api",tabindex:"-1"},{default:o((()=>[H])),_:1}),d(p,{id:"draggableresizable-props",tabindex:"-1"},{default:o((()=>[J])),_:1}),d(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[{language:"zh",name:"modelValue",description:"大小位置",source:"draggable-resizable"}],description:"大小位置"},{name:"tooltip",default:!0,type:"boolean",descriptions:[{language:"zh",name:"tooltip",description:"是否在调整大小时显示提示",source:"draggable-resizable"}],description:"是否在调整大小时显示提示"},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可以拖拽",source:"draggable"}],description:"可以拖拽"},{name:"containment",source:"draggable",type:"string | object",descriptions:[{language:"zh",name:"containment",description:"被限制于在某个容器下拖拽",source:"draggable"}],description:"被限制于在某个容器下拖拽"},{name:"disabled",source:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"是否禁用",source:"draggable"}],description:"是否禁用"},{name:"cursor",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"cursor",description:"显示移动的光标",source:"draggable"}],description:"显示移动的光标"},{name:"resizable",source:"draggable-resizable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"resizable",description:"可以调整尺寸",source:"draggable-resizable"}],description:"可以调整尺寸"},{name:"resizable-anchors",source:"draggable-resizable",default:["top","top-left","left","bottom","bottom-left","top-right","right","bottom-right"],type:"array",descriptions:[{language:"zh",name:"resizableAnchors",description:"可调整尺寸的锚点",source:"draggable-resizable"}],description:"可调整尺寸的锚点"},{name:"show-resizable-anchor",source:"draggable-resizable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"showResizableAnchor",description:"显示调整尺寸每个锚点的控件",source:"draggable-resizable"}],description:"显示调整尺寸每个锚点的控件"},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"}]},{"item.type":o((({item:e})=>[d(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[n(h(e.type),1)])),_:2},1024)])),"item.default":o((({item:e})=>[d(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[n(h("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),d(p,{id:"draggableresizable-events",tabindex:"-1"},{default:o((()=>[T])),_:1}),d(f,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
