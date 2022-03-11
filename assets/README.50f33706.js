import{_ as $,P as f,b as F,a5 as V,d as P,C as E,B as H,e as S,R as I,H as W,a as T,g as U,T as L}from"./app.28fe99b3.js";import{_ as k}from"./Demo.d2aa68d9.js";import{a as y,m,r as b,Y as D,a0 as B,v as e,_ as t,Q as o,a2 as w,u as h}from"./vendor.95f12914.js";const z=y({setup(){return{mergeProps:m,items:b([{color:"info",text:"\u7B2C\u4E00\u9879"},{color:"error",text:"\u7B2C\u4E8C\u9879"},{color:"success",text:"\u7B2C\u4E09\u9879"},{color:"warning",text:"\u7B2C\u56DB\u9879"}])}}}),N=o("\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u4F8B\u5B50\uFF0C\u5C1D\u8BD5\u62D6\u52A8\u4E0B\u65B9\u3002");function R(l,s,x,g,C,v){const a=f,n=F,r=V,i=P,d=E,u=k;return D(),B("div",null,[e(u,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/draggable-sortable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-list%3E%0A%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22mergeProps(item%2C%20props)%22%20link%20variant%3D%22contained%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%3C%2Fve-list%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22items%22%20class%3D%22mt-3%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20mergeProps%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'info'%2C%20text%3A%20'%E7%AC%AC%E4%B8%80%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'error'%2C%20text%3A%20'%E7%AC%AC%E4%BA%8C%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'success'%2C%20text%3A%20'%E7%AC%AC%E4%B8%89%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'warning'%2C%20text%3A%20'%E7%AC%AC%E5%9B%9B%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(a,null,{default:t(()=>[N]),_:1})]),default:t(()=>[e(i,null,{default:t(()=>[e(r,{modelValue:l.items,"onUpdate:modelValue":s[0]||(s[0]=_=>l.items=_)},{item:t(({item:_,props:p})=>[e(n,m(l.mergeProps(_,p),{link:"",variant:"contained"}),null,16)]),_:1},8,["modelValue"])]),_:1}),e(d,{code:l.items,class:"mt-3"},null,8,["code"])]),_:1})])}var j=$(z,[["render",R]]);const O=y({setup(){return{mergeProps:m,items:b([{color:"info",text:"\u7B2C\u4E00\u9879"},{color:"error",text:"\u7B2C\u4E8C\u9879"},{color:"success",text:"\u7B2C\u4E09\u9879"},{color:"warning",text:"\u7B2C\u56DB\u9879"}])}}}),Q=o("\u901A\u8FC7\u63D2\u69FD\u4F20\u9012\u7684 "),Y=o("draggable"),q=o(" - \u53EF\u62D6\u62FD\u3001 "),G=o("droppable"),J=o(" - \u53EF\u653E\u7F6E\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5143\u7D20\u53EF\u62D6\u52A8\uFF0C\u6307\u5B9A\u5143\u7D20\u53EF\u653E\u7F6E\u3002");function K(l,s,x,g,C,v){const a=E,n=f,r=H,i=F,d=V,u=P,_=k;return D(),B("div",null,[e(_,{title:"\u6307\u5B9A\u62D6\u52A8\u533A\u57DF",slug:"\u6307\u5B9A\u62D6\u52A8\u533A\u57DF",file:"/packages/veno-ui/src/components/draggable-sortable/docs/handle.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-list%3E%0A%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items%22%20%23item%3D%22%7B%20item%2C%20draggable%2C%20droppable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22mergeProps(droppable%2C%20item)%22%20link%20variant%3D%22contained%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%20class%3D%22mr-3%22%20size%3D%22xs%22%20text%3D%22%E6%8B%96%E6%88%91%E6%89%8D%E8%83%BD%E6%8B%96%E5%BE%97%E5%8A%A8%22%20variant%3D%22outlined%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%3C%2Fve-list%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20mergeProps%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'info'%2C%20text%3A%20'%E7%AC%AC%E4%B8%80%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'error'%2C%20text%3A%20'%E7%AC%AC%E4%BA%8C%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'success'%2C%20text%3A%20'%E7%AC%AC%E4%B8%89%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'warning'%2C%20text%3A%20'%E7%AC%AC%E5%9B%9B%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(n,null,{default:t(()=>[Q,e(a,{color:"secondary",inline:""},{default:t(()=>[Y]),_:1}),q,e(a,{color:"secondary",inline:""},{default:t(()=>[G]),_:1}),J]),_:1})]),default:t(()=>[e(u,null,{default:t(()=>[e(d,{modelValue:l.items,"onUpdate:modelValue":s[0]||(s[0]=p=>l.items=p)},{item:t(({item:p,draggable:c,droppable:A})=>[e(i,m(l.mergeProps(A,p),{link:"",variant:"contained"}),{default:t(()=>[e(r,m(c,{class:"mr-3",size:"xs",text:"\u62D6\u6211\u624D\u80FD\u62D6\u5F97\u52A8",variant:"outlined"}),null,16)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),_:1})])}var M=$(O,[["render",K]]);const X=y({setup(){return{items1:b([1,2,3,4]),items2:b([5,6,7])}}}),Z=o("\u6307\u5B9A\u76F8\u540C "),e2=o("group"),t2=o(" \u7684\u6392\u5E8F\u5217\u8868\u53EF\u4EE5\u4E92\u76F8\u62D6\u62FD\u6392\u5E8F\u3002");function o2(l,s,x,g,C,v){const a=E,n=f,r=F,i=V,d=P,u=S,_=I,p=k;return D(),B("div",null,[e(p,{title:"\u4E24\u4E2A\u5217\u8868",slug:"\u4E24\u4E2A\u5217\u8868",file:"/packages/veno-ui/src/components/draggable-sortable/docs/sort-two-list.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-list%20border%20class%3D%22p-3%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items1%22%20group%3D%22group%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%20link%20variant%3D%22contained%22%20border%20class%3D%22mb-3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-list%20border%20class%3D%22p-3%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items2%22%20group%3D%22group%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%20link%20variant%3D%22contained%22%20border%20class%3D%22mb-3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items1%3A%20ref(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20%20%20%20%20%20%20items2%3A%20ref(%5B5%2C%206%2C%207%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(n,null,{default:t(()=>[Z,e(a,{color:"secondary",inline:""},{default:t(()=>[e2]),_:1}),t2]),_:1})]),default:t(()=>[e(_,null,{default:t(()=>[e(u,{cols:6},{default:t(()=>[e(d,{border:"",class:"p-3"},{default:t(()=>[e(i,{modelValue:l.items1,"onUpdate:modelValue":s[0]||(s[0]=c=>l.items1=c),group:"group"},{item:t(({item:c,props:A})=>[e(r,m(A,{link:"",variant:"contained",border:"",class:"mb-3"}),{default:t(()=>[o(w(c),1)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{cols:6},{default:t(()=>[e(d,{border:"",class:"p-3"},{default:t(()=>[e(i,{modelValue:l.items2,"onUpdate:modelValue":s[1]||(s[1]=c=>l.items2=c),group:"group"},{item:t(({item:c,props:A})=>[e(r,m(A,{link:"",variant:"contained",border:"",class:"mb-3"}),{default:t(()=>[o(w(c),1)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])}var l2=$(X,[["render",o2]]);const s2=o("\u62D6\u62FD\u6392\u5E8F Sortable"),n2=o("\u901A\u8FC7 "),a2=o("ve-draggable-sortable"),r2=o(" \u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u5B9E\u73B0\u4E00\u4E2A\u53EF\u62D6\u62FD\u6392\u5E8F\u7684\u5217\u8868\u3002"),i2=o("\u6F14\u793A"),d2=o("API"),c2=o("DraggableSortable Props"),_2=o("DraggableSortable Events"),g2={title:"\u62D6\u62FD\u6392\u5E8F Sortable",headers:[{level:1,title:"\u62D6\u62FD\u6392\u5E8F Sortable",slug:"\u62D6\u62FD\u6392\u5E8F-sortable"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6307\u5B9A\u62D6\u52A8\u533A\u57DF",slug:"\u6307\u5B9A\u62D6\u52A8\u533A\u57DF"},{level:3,title:"\u4E24\u4E2A\u5217\u8868",slug:"\u4E24\u4E2A\u5217\u8868"},{level:2,title:"API",slug:"api"},{level:3,title:"DraggableSortable Props",slug:"draggablesortable-props"},{level:3,title:"DraggableSortable Events",slug:"draggablesortable-events"}],frontmatter:{category:"Draggable \u62D6\u62FD\u7EC4\u4EF6"}},p2={},C2=Object.assign(p2,{setup(l){return(s,x)=>{const g=W,C=E,v=f,a=T,n=S,r=I,i=U,d=L;return D(),B("div",null,[e(g,{id:"\u62D6\u62FD\u6392\u5E8F-sortable",tabindex:"-1"},{default:t(()=>[s2]),_:1}),e(v,null,{default:t(()=>[n2,e(C,{color:"secondary",inline:""},{default:t(()=>[a2]),_:1}),r2]),_:1}),e(a,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[i2]),_:1}),e(r,null,{default:t(()=>[e(n,{cols:"12",md:"12"},{default:t(()=>[e(r,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(h(j))]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(h(M))]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(h(l2))]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{id:"api",tabindex:"-1"},{default:t(()=>[d2]),_:1}),e(i,{id:"draggablesortable-props",tabindex:"-1"},{default:t(()=>[c2]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"clone",source:"draggable-sortable",type:"function",description:"\u79FB\u52A8\u9879\u5230\u53E6\u4E00\u7EC4\u65F6\u514B\u9686\u7684\u65B9\u6CD5"},{name:"item-key",source:"draggable-sortable",type:"string | function",description:"\u6BCF\u9879\u7684 key"},{name:"model-value",source:"draggable-sortable",type:"array",default:"[]",description:"\u9700\u8981\u6392\u5E8F\u7684\u5217\u8868"},{name:"put",source:"draggable-sortable",type:"boolean",default:"true",description:"\u79FB\u52A8\u9879\u5230\u53E6\u4E00\u4E2A\u7EC4\u65F6\u662F\u5426\u79FB\u9664\u5143\u7D20"},{name:"group",source:"draggable-sortable",type:"string",description:"\u7EC4\u540D"}]}),e(i,{id:"draggablesortable-events",tabindex:"-1"},{default:t(()=>[_2]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{g2 as __pageData,C2 as default};
