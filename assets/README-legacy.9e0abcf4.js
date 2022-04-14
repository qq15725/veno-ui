System.register(["./app-legacy.134a3af4.js","./Demo-legacy.cc21e8a4.js"],(function(e){"use strict";var t,l,a,r,o,s,i,n,d,u,c,p,m,A,g,C,b,v,f,E,D,B,_,x;return{setters:[function(e){t=e.y,l=e.a8,a=e.z,r=e._,o=e.q,s=e.s,i=e.u,n=e.v,d=e.x,u=e.P,c=e.h,p=e.aE,m=e.j,A=e.C,g=e.G,C=e.J,b=e.k,v=e.R,f=e.H,E=e.d,D=e.n,B=e.T,_=e.I},function(e){x=e._}],execute:function(){const y=t({setup:()=>({mergeProps:l,items:a([{color:"info",text:"第一项"},{color:"error",text:"第二项"},{color:"success",text:"第三项"},{color:"warning",text:"第四项"}])})}),F=d("一个简单的数据双向绑定例子，尝试拖动下方。");var h=r(y,[["render",function(e,t,a,r,d,g){const C=u,b=c,v=p,f=m,E=A,D=x;return o(),s("div",null,[i(D,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/draggable-sortable/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-list%3E%0A%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22mergeProps(item%2C%20props)%22%20link%20variant%3D%22contained%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%3C%2Fve-list%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22items%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20mergeProps%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'info'%2C%20text%3A%20'%E7%AC%AC%E4%B8%80%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'error'%2C%20text%3A%20'%E7%AC%AC%E4%BA%8C%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'success'%2C%20text%3A%20'%E7%AC%AC%E4%B8%89%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'warning'%2C%20text%3A%20'%E7%AC%AC%E5%9B%9B%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[i(C,null,{default:n((()=>[F])),_:1})])),default:n((()=>[i(f,null,{default:n((()=>[i(v,{modelValue:e.items,"onUpdate:modelValue":t[0]||(t[0]=t=>e.items=t)},{item:n((({item:t,props:a})=>[i(b,l(e.mergeProps(t,a),{link:"",variant:"contained"}),null,16)])),_:1},8,["modelValue"])])),_:1}),i(E,{class:"mt-3 p-3",code:e.items,theme:"dark"},null,8,["code"])])),_:1})])}]]);const k=t({setup:()=>({mergeProps:l,items:a([{color:"info",text:"第一项"},{color:"error",text:"第二项"},{color:"success",text:"第三项"},{color:"warning",text:"第四项"}])})}),P=d("通过插槽传递的 "),V=d("draggable"),S=d(" - 可拖拽、 "),z=d("droppable"),w=d(" - 可放置，可以指定元素可拖动，指定元素可放置。");var W=r(k,[["render",function(e,t,a,r,d,C){const b=A,v=u,f=g,E=c,D=p,B=m,_=x;return o(),s("div",null,[i(_,{title:"指定拖动区域",slug:"指定拖动区域",file:"/packages/veno-ui/src/components/draggable-sortable/docs/handle.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-list%3E%0A%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items%22%20%23item%3D%22%7B%20item%2C%20draggable%2C%20droppable%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22mergeProps(droppable%2C%20item)%22%20link%20variant%3D%22contained%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22draggable%22%20class%3D%22mr-3%22%20size%3D%22xs%22%20text%3D%22%E6%8B%96%E6%88%91%E6%89%8D%E8%83%BD%E6%8B%96%E5%BE%97%E5%8A%A8%22%20variant%3D%22outlined%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%3C%2Fve-list%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20mergeProps%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20mergeProps%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'info'%2C%20text%3A%20'%E7%AC%AC%E4%B8%80%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'error'%2C%20text%3A%20'%E7%AC%AC%E4%BA%8C%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'success'%2C%20text%3A%20'%E7%AC%AC%E4%B8%89%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20color%3A%20'warning'%2C%20text%3A%20'%E7%AC%AC%E5%9B%9B%E9%A1%B9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[i(v,null,{default:n((()=>[P,i(b,{color:"secondary",inline:""},{default:n((()=>[V])),_:1}),S,i(b,{color:"secondary",inline:""},{default:n((()=>[z])),_:1}),w])),_:1})])),default:n((()=>[i(B,null,{default:n((()=>[i(D,{modelValue:e.items,"onUpdate:modelValue":t[0]||(t[0]=t=>e.items=t)},{item:n((({item:t,draggable:a,droppable:r})=>[i(E,l(e.mergeProps(r,t),{link:"",variant:"contained"}),{default:n((()=>[i(f,l(a,{class:"mr-3",size:"xs",text:"拖我才能拖得动",variant:"outlined"}),null,16)])),_:2},1040)])),_:1},8,["modelValue"])])),_:1})])),_:1})])}]]);const j=t({setup:()=>({items1:a([1,2,3,4]),items2:a([5,6,7])})}),U=d("指定相同 "),I=d("group"),J=d(" 的排序列表可以互相拖拽排序。");var O=r(j,[["render",function(e,t,a,r,g,f){const E=A,D=u,B=c,_=p,y=m,F=b,h=v,k=x;return o(),s("div",null,[i(k,{title:"两个列表",slug:"两个列表",file:"/packages/veno-ui/src/components/draggable-sortable/docs/sort-two-list.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-list%20border%20class%3D%22p-3%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items1%22%20group%3D%22group%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%20link%20variant%3D%22contained%22%20border%20class%3D%22mb-3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-list%20border%20class%3D%22p-3%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-draggable-sortable%20v-model%3D%22items2%22%20group%3D%22group%22%20%23item%3D%22%7B%20item%2C%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%20link%20variant%3D%22contained%22%20border%20class%3D%22mb-3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-draggable-sortable%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items1%3A%20ref(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20%20%20%20%20%20%20items2%3A%20ref(%5B5%2C%206%2C%207%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[i(D,null,{default:n((()=>[U,i(E,{color:"secondary",inline:""},{default:n((()=>[I])),_:1}),J])),_:1})])),default:n((()=>[i(h,null,{default:n((()=>[i(F,{cols:6},{default:n((()=>[i(y,{border:"",class:"p-3"},{default:n((()=>[i(_,{modelValue:e.items1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.items1=t),group:"group"},{item:n((({item:e,props:t})=>[i(B,l(t,{link:"",variant:"contained",border:"",class:"mb-3"}),{default:n((()=>[d(C(e),1)])),_:2},1040)])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(F,{cols:6},{default:n((()=>[i(y,{border:"",class:"p-3"},{default:n((()=>[i(_,{modelValue:e.items2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.items2=t),group:"group"},{item:n((({item:e,props:t})=>[i(B,l(t,{link:"",variant:"contained",border:"",class:"mb-3"}),{default:n((()=>[d(C(e),1)])),_:2},1040)])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])}]]);const q=d("拖拽排序 Sortable"),G=d("通过 "),H=d("ve-draggable-sortable"),K=d(" 可以很轻松的实现一个可拖拽排序的列表。"),N=d("演示"),R=d("API"),T=d("DraggableSortable Props"),L=d("DraggableSortable Events"),M=(e("__pageData",{title:"拖拽排序 Sortable",headers:[{level:1,title:"拖拽排序 Sortable",slug:"拖拽排序-sortable"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"指定拖动区域",slug:"指定拖动区域"},{level:3,title:"两个列表",slug:"两个列表"},{level:2,title:"API",slug:"api"},{level:3,title:"DraggableSortable Props",slug:"draggablesortable-props"},{level:3,title:"DraggableSortable Events",slug:"draggablesortable-events"}],frontmatter:{category:"Draggable 拖拽组件"}}),{});e("default",Object.assign(M,{setup:e=>(e,t)=>{const l=f,a=A,r=u,c=E,p=b,m=v,g=D,x=B;return o(),s("div",null,[i(l,{id:"拖拽排序-sortable",tabindex:"-1"},{default:n((()=>[q])),_:1}),i(r,null,{default:n((()=>[G,i(a,{color:"secondary",inline:""},{default:n((()=>[H])),_:1}),K])),_:1}),i(c,{id:"演示",tabindex:"-1"},{default:n((()=>[N])),_:1}),i(m,null,{default:n((()=>[i(p,{cols:"12",md:"12"},{default:n((()=>[i(m,null,{default:n((()=>[i(p,{cols:"12"},{default:n((()=>[i(_(h))])),_:1}),i(p,{cols:"12"},{default:n((()=>[i(_(W))])),_:1}),i(p,{cols:"12"},{default:n((()=>[i(_(O))])),_:1})])),_:1})])),_:1})])),_:1}),i(c,{id:"api",tabindex:"-1"},{default:n((()=>[R])),_:1}),i(g,{id:"draggablesortable-props",tabindex:"-1"},{default:n((()=>[T])),_:1}),i(x,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"clone",source:"draggable-sortable",type:"function",descriptions:[{language:"zh",name:"clone",description:"移动项到另一组时克隆的方法",source:"draggable-sortable"}],description:"移动项到另一组时克隆的方法"},{name:"item-key",source:"draggable-sortable",type:"string | function",descriptions:[{language:"zh",name:"itemKey",description:"每项的 key",source:"draggable-sortable"}],description:"每项的 key"},{name:"model-value",source:"draggable-sortable",default:[],type:"array",descriptions:[{language:"zh",name:"modelValue",description:"需要排序的列表",source:"draggable-sortable"}],description:"需要排序的列表"},{name:"put",source:"draggable-sortable",default:!0,type:"boolean",descriptions:[{language:"zh",name:"put",description:"移动项到另一个组时是否移除元素",source:"draggable-sortable"}],description:"移动项到另一个组时是否移除元素"},{name:"group",source:"draggable-sortable",type:"string",descriptions:[{language:"zh",name:"group",description:"组名",source:"draggable-sortable"}],description:"组名"}]},{"item.type":n((({item:e})=>[i(a,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[d(C(e.type),1)])),_:2},1024)])),"item.default":n((({item:e})=>[i(a,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[d(C("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),i(g,{id:"draggablesortable-events",tabindex:"-1"},{default:n((()=>[L])),_:1}),i(x,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));