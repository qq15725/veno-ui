import{q as P,s as V,_ as C,o as m,c as v,a as e,w as a,m as g,b as t,P as A,O as D,ap as E,aq as x,C as y,an as F,N as R,x as z,t as w,H as W,d as T,j as H,R as N,n as U,T as j}from"./app.a65009aa.js";import{_ as $}from"./Demo.421a0a0b.js";const M=P({setup(){return{value:V({width:200,height:100})}}}),O=t("\u9ED8\u8BA4\u6709 8 \u4E2A\u65B9\u5411\u7684\u53EF\u62D6\u62FD\u70B9\u3002");function q(c,_,f,u,b,p){const l=A,n=D,r=E,s=x,i=y,o=$;return m(),v("div",null,[e(o,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/draggable-resizable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20color%3D%22primary%22%20v-bind%3D%22props%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20width%3A%20200%2C%20height%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:a(()=>[e(l,null,{default:a(()=>[O]),_:1})]),default:a(()=>[e(s,{"min-height":"200"},{default:a(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=d=>c.value=d)},{default:a(({props:d})=>[e(n,g({color:"primary"},d),null,16)]),_:1},8,["modelValue"])]),_:1}),e(i,{class:"p-3",code:c.value,theme:"dark"},null,8,["code"])]),_:1})])}var I=C(M,[["render",q]]);const S={},J=t("Window");function G(c,_,f,u,b,p){const l=F,n=R,r=D,s=E,i=x,o=$;return m(),v("div",null,[e(o,{title:"\u6307\u5B9A\u53EF\u62D6\u52A8\u533A\u57DF",slug:"\u6307\u5B9A\u53EF\u62D6\u52A8\u533A\u57DF",file:"/packages/veno-ui/src/components/draggable-resizable/docs/slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20%23default%3D%22%7B%20draggable%2C%20resizable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20border%20v-bind%3D%22resizable%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20height%3D%2230%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3EWindow%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-text%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%3C%2Ftemplate%3E"},{default:a(()=>[e(i,{"min-height":"200"},{default:a(()=>[e(s,null,{default:a(({draggable:d,resizable:h})=>[e(r,g({border:""},h),{default:a(()=>[e(l,g({height:"30",color:"primary"},d),{default:a(()=>[J]),_:2},1040),e(n)]),_:2},1040)]),_:1})]),_:1})]),_:1})])}var K=C(S,[["render",G]]);const L={},Q=t("\u5B9A\u4E49 "),X=t("show-resizable-anchor"),Y=t(" \u5C5E\u6027\u4F1A\u663E\u793A\u6240\u6709\u7684\u53EF\u62D6\u62FD\u70B9\u3002"),Z=t("Window");function ee(c,_,f,u,b,p){const l=y,n=A,r=F,s=R,i=D,o=E,d=x,h=$;return m(),v("div",null,[e(h,{title:"\u663E\u793A\u53EF\u62D6\u62FD\u70B9",slug:"\u663E\u793A\u53EF\u62D6\u62FD\u70B9",file:"/packages/veno-ui/src/components/draggable-resizable/docs/anchor.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-paper%20min-height%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable-resizable%20show-resizable-anchor%20%23default%3D%22%7B%20draggable%2C%20resizable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20border%20v-bind%3D%22resizable%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20height%3D%2230%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3EWindow%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-text%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-draggable-resizable%3E%0A%20%20%3C%2Fve-paper%3E%0A%3C%2Ftemplate%3E"},{prepend:a(()=>[e(n,null,{default:a(()=>[Q,e(l,{color:"secondary",inline:""},{default:a(()=>[X]),_:1}),Y]),_:1})]),default:a(()=>[e(d,{"min-height":"200"},{default:a(()=>[e(o,{"show-resizable-anchor":""},{default:a(({draggable:k,resizable:B})=>[e(i,g({border:""},B),{default:a(()=>[e(r,g({height:"30",color:"primary"},k),{default:a(()=>[Z]),_:2},1040),e(s)]),_:2},1040)]),_:1})]),_:1})]),_:1})])}var ae=C(L,[["render",ee]]);const te=t("\u62D6\u62FD\u5927\u5C0F Resizable"),oe=t("\u901A\u8FC7 ve-draggable-resizable \u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u5B9E\u73B0\u4E00\u4E2A\u53EF\u4EE5\u62D6\u62FD\u5927\u5C0F\u7684\u7A97\u53E3\u3002"),le=t("\u6F14\u793A"),ne=t("API"),re=t("DraggableResizable Props"),se=t("DraggableResizable Events"),_e={title:"\u62D6\u62FD\u5927\u5C0F Resizable",headers:[{level:1,title:"\u62D6\u62FD\u5927\u5C0F Resizable",slug:"\u62D6\u62FD\u5927\u5C0F-resizable"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6307\u5B9A\u53EF\u62D6\u52A8\u533A\u57DF",slug:"\u6307\u5B9A\u53EF\u62D6\u52A8\u533A\u57DF"},{level:3,title:"\u663E\u793A\u53EF\u62D6\u62FD\u70B9",slug:"\u663E\u793A\u53EF\u62D6\u62FD\u70B9"},{level:2,title:"API",slug:"api"},{level:3,title:"DraggableResizable Props",slug:"draggableresizable-props"},{level:3,title:"DraggableResizable Events",slug:"draggableresizable-events"}],frontmatter:{category:"Draggable \u62D6\u62FD\u7EC4\u4EF6"}},ie={},pe=Object.assign(ie,{setup(c){return(_,f)=>{const u=W,b=A,p=T,l=H,n=N,r=U,s=y,i=j;return m(),v("div",null,[e(u,{id:"\u62D6\u62FD\u5927\u5C0F-resizable",tabindex:"-1"},{default:a(()=>[te]),_:1}),e(b,null,{default:a(()=>[oe]),_:1}),e(p,{id:"\u6F14\u793A",tabindex:"-1"},{default:a(()=>[le]),_:1}),e(n,null,{default:a(()=>[e(l,{cols:"12",md:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{cols:"12"},{default:a(()=>[e(z(I))]),_:1}),e(l,{cols:"12"},{default:a(()=>[e(z(K))]),_:1}),e(l,{cols:"12"},{default:a(()=>[e(z(ae))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{id:"api",tabindex:"-1"},{default:a(()=>[ne]),_:1}),e(r,{id:"draggableresizable-props",tabindex:"-1"},{default:a(()=>[re]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[]},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"\u53EF\u62D6\u62FD\u7684",source:"draggable"}],description:"\u53EF\u62D6\u62FD\u7684"},{name:"resizable",source:"draggable-resizable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"resizable",description:"\u53EF\u4EE5\u8C03\u6574\u5C3A\u5BF8",source:"draggable-resizable"}],description:"\u53EF\u4EE5\u8C03\u6574\u5C3A\u5BF8"},{name:"resizable-anchors",source:"draggable-resizable",default:["top","top-left","left","bottom","bottom-left","top-right","right","bottom-right"],type:"array",descriptions:[{language:"zh",name:"resizableAnchors",description:"\u53EF\u8C03\u6574\u5C3A\u5BF8\u7684\u951A\u70B9",source:"draggable-resizable"}],description:"\u53EF\u8C03\u6574\u5C3A\u5BF8\u7684\u951A\u70B9"},{name:"show-resizable-anchor",source:"draggable-resizable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"showResizableAnchor",description:"\u663E\u793A\u8C03\u6574\u5C3A\u5BF8\u6BCF\u4E2A\u951A\u70B9\u7684\u63A7\u4EF6",source:"draggable-resizable"}],description:"\u663E\u793A\u8C03\u6574\u5C3A\u5BF8\u6BCF\u4E2A\u951A\u70B9\u7684\u63A7\u4EF6"},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E",source:"tag"}],description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"}]},{"item.type":a(({item:o})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:a(()=>[t(w(o.type),1)]),_:2},1024)]),"item.default":a(({item:o})=>[e(s,{color:"secondary",inline:"",class:"p-1"},{default:a(()=>[t(w(typeof o.default=="string"?o.default.replace(/!/g,"'"):JSON.stringify(o.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"draggableresizable-events",tabindex:"-1"},{default:a(()=>[se]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{_e as __pageData,pe as default};
