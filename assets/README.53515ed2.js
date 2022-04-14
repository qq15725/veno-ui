import{q as V,s as D,_ as y,o as b,c as f,a as e,w as a,m as C,at as z,au as S,av as j,am as W,ar as F,ap as B,O as w,C as x,aj as H,ak as U,aw as N,b as t,P as $,B as O,x as h,t as E,H as R,d as T,j as I,R as M,n as q,T as J}from"./app.366a5e18.js";import{_ as P}from"./Demo.98064c00.js";const G=V({setup(){return{props:D({cursor:!0,containment:"parent"}),value:D({left:100,top:100})}}});function K(o,r,A,m,p,g){const d=z,l=S,s=j,c=W,i=F,n=B,v=w,_=x,k=P;return b(),f("div",null,[e(k,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/draggable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20v-model%3D%22props%22%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20label%3D%22Containment%22%0A%20%20%20%20%20%20placeholder%3D%22none%22%0A%20%20%20%20%20%20name%3D%22containment%22%20%0A%20%20%20%20%20%20clearable%20%0A%20%20%20%20%20%20width%3D%22100%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'parent'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Cursor%22%20name%3D%22cursor%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Disabled%22%20name%3D%22disabled%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%20border%20class%3D%22my-3%22%3E%0A%20%20%20%20%3Cve-draggable%20v-bind%3D%22props%22%20v-model%3D%22value%22%20%23default%3D%22%7B%20props%3A%20draggable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20v-bind%3D%22draggable%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%20mb-3%22%20%3Acode%3D%22props%22%20theme%3D%22dark%22%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20props%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20cursor%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20containment%3A%20'parent'%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%20left%3A%20100%2C%20top%3A%20100%20%7D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:a(()=>[e(c,{modelValue:o.props,"onUpdate:modelValue":r[0]||(r[0]=u=>o.props=u),inline:"","hide-details":""},{default:a(()=>[e(d,{label:"Containment",placeholder:"none",name:"containment",clearable:"",width:"100",items:["parent"]}),e(s,null,{default:a(()=>[e(l,{label:"Cursor",name:"cursor"})]),_:1}),e(s,null,{default:a(()=>[e(l,{label:"Disabled",name:"disabled"})]),_:1})]),_:1},8,["modelValue"]),e(v,{height:200,border:"",class:"my-3"},{default:a(()=>[e(n,C(o.props,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=u=>o.value=u)}),{default:a(({props:u})=>[e(i,C({size:"40",color:"primary",class:"p-3"},u),null,16)]),_:1},16,["modelValue"])]),_:1}),e(_,{class:"p-3 mb-3",code:o.props,theme:"dark"},null,8,["code"]),e(_,{class:"p-3",code:o.value,theme:"dark"},null,8,["code"])]),_:1})])}var L=y(G,[["render",K]]);const Q={},X=t("\u53EF\u62D6\u62FD\u533A\u57DF\u5206\u79BB\u3002"),Y=t("\u62D6\u62FD\u6211");function Z(o,r,A,m,p,g){const d=$,l=O,s=F,c=B,i=w,n=P;return b(),f("div",null,[e(n,{title:"\u5185\u5BB9\u6837\u5F0F",slug:"\u5185\u5BB9\u6837\u5F0F",file:"/packages/veno-ui/src/components/draggable/docs/content-style.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-draggable%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%3E%E6%8B%96%E6%8B%BD%E6%88%91%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%3Cve-paper%20size%3D%2240%22%20color%3D%22primary%22%20class%3D%22p-3%22%20%3Astyle%3D%22contentStyle%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{prepend:a(()=>[e(d,null,{default:a(()=>[X]),_:1})]),default:a(()=>[e(i,{height:200},{default:a(()=>[e(c,null,{default:a(({draggable:v,contentStyle:_})=>[e(l,H(U(v)),{default:a(()=>[Y]),_:2},1040),e(s,{size:"40",color:"primary",class:"p-3",style:N(_)},null,8,["style"])]),_:1})]),_:1})]),_:1})])}var ee=y(Q,[["render",Z]]);const ae=t("\u62D6\u62FD\u79FB\u52A8 Draggable"),te=t("\u901A\u8FC7 "),oe=t("ve-draggable"),ne=t(" \u53EF\u4EE5\u5C06\u4EFB\u4F55\u7EC4\u4EF6\u53D8\u6210\u53EF\u4EE5\u62D6\u52A8\u4F4D\u7F6E\u7684\u7EC4\u4EF6\u3002"),le=t("\u6F14\u793A"),se=t("API"),re=t("Draggable Props"),de=t("Draggable Events"),ue={title:"\u62D6\u62FD\u79FB\u52A8 Draggable",headers:[{level:1,title:"\u62D6\u62FD\u79FB\u52A8 Draggable",slug:"\u62D6\u62FD\u79FB\u52A8-draggable"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5185\u5BB9\u6837\u5F0F",slug:"\u5185\u5BB9\u6837\u5F0F"},{level:2,title:"API",slug:"api"},{level:3,title:"Draggable Props",slug:"draggable-props"},{level:3,title:"Draggable Events",slug:"draggable-events"}],frontmatter:{category:"Draggable \u62D6\u62FD\u7EC4\u4EF6"}},ce={},_e=Object.assign(ce,{setup(o){return(r,A)=>{const m=R,p=x,g=$,d=T,l=I,s=M,c=q,i=J;return b(),f("div",null,[e(m,{id:"\u62D6\u62FD\u79FB\u52A8-draggable",tabindex:"-1"},{default:a(()=>[ae]),_:1}),e(g,null,{default:a(()=>[te,e(p,{color:"secondary",inline:""},{default:a(()=>[oe]),_:1}),ne]),_:1}),e(d,{id:"\u6F14\u793A",tabindex:"-1"},{default:a(()=>[le]),_:1}),e(s,null,{default:a(()=>[e(l,{cols:"12",md:"12"},{default:a(()=>[e(s,null,{default:a(()=>[e(l,{cols:"12"},{default:a(()=>[e(h(L))]),_:1}),e(l,{cols:"12"},{default:a(()=>[e(h(ee))]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{id:"api",tabindex:"-1"},{default:a(()=>[se]),_:1}),e(c,{id:"draggable-props",tabindex:"-1"},{default:a(()=>[re]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",default:{left:0,top:0},type:"object",descriptions:[]},{name:"draggable",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"\u53EF\u4EE5\u62D6\u62FD",source:"draggable"}],description:"\u53EF\u4EE5\u62D6\u62FD"},{name:"containment",source:"draggable",type:"string | object",descriptions:[{language:"zh",name:"containment",description:"\u88AB\u9650\u5236\u4E8E\u5728\u67D0\u4E2A\u5BB9\u5668\u4E0B\u62D6\u62FD",source:"draggable"}],description:"\u88AB\u9650\u5236\u4E8E\u5728\u67D0\u4E2A\u5BB9\u5668\u4E0B\u62D6\u62FD"},{name:"disabled",source:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"\u662F\u5426\u7981\u7528",source:"draggable"}],description:"\u662F\u5426\u7981\u7528"},{name:"cursor",source:"draggable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"cursor",description:"\u663E\u793A\u79FB\u52A8\u7684\u5149\u6807",source:"draggable"}],description:"\u663E\u793A\u79FB\u52A8\u7684\u5149\u6807"}]},{"item.type":a(({item:n})=>[e(p,{color:"secondary",inline:"",class:"p-1"},{default:a(()=>[t(E(n.type),1)]),_:2},1024)]),"item.default":a(({item:n})=>[e(p,{color:"secondary",inline:"",class:"p-1"},{default:a(()=>[t(E(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(c,{id:"draggable-events",tabindex:"-1"},{default:a(()=>[de]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{ue as __pageData,_e as default};
