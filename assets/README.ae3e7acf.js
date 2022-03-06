import{_ as b,a4 as A,a2 as C,n as D,C as h,P as E,B as $,H as P,a as F,e as V,R as z,g as k,T as H}from"./app.29a6db23.js";import{_ as y}from"./Demo.2dbc48b0.js";import{b as I,r as S,Y as g,a0 as m,n as e,_ as t,m as W,aa as w,ab as R,ac as T,Q as a,u as f}from"./vendor.d4043d31.js";const j=I({setup(){return{value:S({left:100,top:100})}}});function N(d,c,v,p,i,u){const n=A,o=C,l=D,s=h,r=y;return g(),m("div",null,[e(r,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/draggable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20v-bind%3D%22props%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20left%3A%20100%2C%20top%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(l,{height:200},{default:t(()=>[e(o,{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=_=>d.value=_)},{default:t(({props:_})=>[e(n,W({size:"40",color:"primary",class:"p-3"},_),null,16)]),_:1},8,["modelValue"])]),_:1}),e(s,{code:d.value},null,8,["code"])]),_:1})])}var O=b(j,[["render",N]]);const Q={},U=a("\u53EF\u62D6\u62FD\u533A\u57DF\u5206\u79BB\u3002"),Y=a("\u62D6\u62FD\u6211");function q(d,c,v,p,i,u){const n=E,o=$,l=A,s=C,r=D,_=y;return g(),m("div",null,[e(_,{title:"\u5185\u5BB9\u6837\u5F0F",slug:"\u5185\u5BB9\u6837\u5F0F",file:"/packages/veno-ui/src/components/draggable/docs/content-style.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%3E%E6%8B%96%E6%8B%BD%E6%88%91%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20%3Astyle%3D%22contentStyle%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(n,null,{default:t(()=>[U]),_:1})]),default:t(()=>[e(r,{height:200},{default:t(()=>[e(s,null,{default:t(({draggable:x,contentStyle:B})=>[e(o,w(R(x)),{default:t(()=>[Y]),_:2},1040),e(l,{size:"40",color:"primary",class:"p-3",style:T(B)},null,8,["style"])]),_:1})]),_:1})]),_:1})])}var G=b(Q,[["render",q]]);const J=a("\u62D6\u62FD\u79FB\u52A8 Draggable"),K=a("\u901A\u8FC7 "),L=a("ve-draggable"),M=a(" \u53EF\u4EE5\u5C06\u4EFB\u4F55\u7EC4\u4EF6\u53D8\u6210\u53EF\u4EE5\u62D6\u52A8\u4F4D\u7F6E\u7684\u7EC4\u4EF6\u3002"),X=a("\u6F14\u793A"),Z=a("API"),ee=a("Draggable Props"),te=a("Draggable Events"),se={title:"\u62D6\u62FD\u79FB\u52A8 Draggable",headers:[{level:1,title:"\u62D6\u62FD\u79FB\u52A8 Draggable",slug:"\u62D6\u62FD\u79FB\u52A8-draggable"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5185\u5BB9\u6837\u5F0F",slug:"\u5185\u5BB9\u6837\u5F0F"},{level:2,title:"API",slug:"api"},{level:3,title:"Draggable Props",slug:"draggable-props"},{level:3,title:"Draggable Events",slug:"draggable-events"}],frontmatter:{category:"Draggable \u62D6\u62FD\u7EC4\u4EF6"}},ae={},re=Object.assign(ae,{setup(d){return(c,v)=>{const p=P,i=h,u=E,n=F,o=V,l=z,s=k,r=H;return g(),m("div",null,[e(p,{id:"\u62D6\u62FD\u79FB\u52A8-draggable",tabindex:"-1"},{default:t(()=>[J]),_:1}),e(u,null,{default:t(()=>[K,e(i,{color:"secondary",inline:""},{default:t(()=>[L]),_:1}),M]),_:1}),e(n,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[X]),_:1}),e(l,null,{default:t(()=>[e(o,{cols:"12",md:"12"},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(f(O))]),_:1}),e(o,{cols:"12"},{default:t(()=>[e(f(G))]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{id:"api",tabindex:"-1"},{default:t(()=>[Z]),_:1}),e(s,{id:"draggable-props",tabindex:"-1"},{default:t(()=>[ee]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"model-value",type:"object",default:'{"left":0,"top":0}'},{name:"draggable",source:"draggable",type:"boolean",default:"true"}]}),e(s,{id:"draggable-events",tabindex:"-1"},{default:t(()=>[te]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{se as __pageData,re as default};
