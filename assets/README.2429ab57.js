import{_ as h,o as u,c as m,a as e,w as t,b as n,P as y,A as g,C as $,S as C,s as b,u as x,v as D,x as F,B as w,y as v,t as A,H as k,d as V,l as U,R as z,p as M,T as B}from"./app.0c7f8ce2.js";import{_ as E}from"./Demo.1458ab2b.js";const P={},j=n("\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002"),N=n("This is an info alert.");function R(i,l,f,p,c,r){const o=y,s=g,a=E;return u(),m("div",null,[e(a,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/alert/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(o,null,{default:t(()=>[j]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>[N]),_:1})]),_:1})])}var W=h(P,[["render",R]]);const H={},S=n("\u8B66\u544A\u63D0\u793A\u6709 "),I=n("success"),O=n("\u3001"),G=n("info"),J=n("\u3001"),q=n("warning"),K=n("\u3001"),L=n("error"),Q=n(" \u56DB\u79CD\u7C7B\u578B\u3002"),X=n("This is an info alert."),Y=n("This is an success alert."),Z=n("This is an warning alert."),ee=n("This is an error alert.");function te(i,l,f,p,c,r){const o=$,s=y,a=g,d=C,_=E;return u(),m("div",null,[e(_,{title:"\u63D0\u793A\u7C7B\u578B",slug:"\u63D0\u793A\u7C7B\u578B",file:"/packages/veno-ui/src/components/alert/docs/type.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22info%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22success%22%3EThis%20is%20an%20success%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22warning%22%3EThis%20is%20an%20warning%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20type%3D%22error%22%3EThis%20is%20an%20error%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(s,null,{default:t(()=>[S,e(o,{color:"secondary",inline:""},{default:t(()=>[I]),_:1}),O,e(o,{color:"secondary",inline:""},{default:t(()=>[G]),_:1}),J,e(o,{color:"secondary",inline:""},{default:t(()=>[q]),_:1}),K,e(o,{color:"secondary",inline:""},{default:t(()=>[L]),_:1}),Q]),_:1})]),default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(a,{type:"info"},{default:t(()=>[X]),_:1}),e(a,{type:"success"},{default:t(()=>[Y]),_:1}),e(a,{type:"warning"},{default:t(()=>[Z]),_:1}),e(a,{type:"error"},{default:t(()=>[ee]),_:1})]),_:1})]),_:1})])}var ne=h(H,[["render",te]]);const oe=b({setup(){return{variant:x("contained-outlined")}}}),ae=n("This is an success alert."),se=n("This is an info alert."),re=n("This is an warning alert."),ie=n("This is an error alert.");function le(i,l,f,p,c,r){const o=D,s=F,a=g,d=C,_=E;return u(),m("div",null,[e(_,{title:"\u591A\u79CD\u53D8\u4F53",slug:"\u591A\u79CD\u53D8\u4F53",file:"/packages/veno-ui/src/components/alert/docs/variant.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-radio-group%20v-model%3D%22variant%22%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22outlined%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained-text%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20value%3D%22contained-outlined%22%20%2F%3E%0A%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22success%22%3EThis%20is%20an%20success%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22info%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22warning%22%3EThis%20is%20an%20warning%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20%3Avariant%3D%22variant%22%20type%3D%22error%22%3EThis%20is%20an%20error%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20variant%3A%20ref('contained-outlined')%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(s,{modelValue:i.variant,"onUpdate:modelValue":l[0]||(l[0]=T=>i.variant=T)},{default:t(()=>[e(o,{value:"contained"}),e(o,{value:"outlined"}),e(o,{value:"contained-text"}),e(o,{value:"contained-outlined"})]),_:1},8,["modelValue"]),e(d,{cols:"12"},{default:t(()=>[e(a,{variant:i.variant,type:"success"},{default:t(()=>[ae]),_:1},8,["variant"]),e(a,{variant:i.variant,type:"info"},{default:t(()=>[se]),_:1},8,["variant"]),e(a,{variant:i.variant,type:"warning"},{default:t(()=>[re]),_:1},8,["variant"]),e(a,{variant:i.variant,type:"error"},{default:t(()=>[ie]),_:1},8,["variant"])]),_:1})]),_:1})])}var ce=h(oe,[["render",le]]);const de={},pe=n("\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A\u3002"),_e=n("Error Text Error Text Error Text Error Text Error Text Error Text");function ue(i,l,f,p,c,r){const o=y,s=g,a=E;return u(),m("div",null,[e(a,{title:"\u53EF\u5173\u95ED\u7684",slug:"\u53EF\u5173\u95ED\u7684",file:"/packages/veno-ui/src/components/alert/docs/closable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20closable%20type%3D%22error%22%20title%3D%22Error%20Title%22%3EError%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(o,null,{default:t(()=>[pe]),_:1})]),default:t(()=>[e(s,{closable:"",type:"error",title:"Error Title"},{default:t(()=>[_e]),_:1})]),_:1})])}var me=h(de,[["render",ue]]);const fe={},ve=n(" Error Text Error Text Error Text Error Text Error Text Error Text "),he=n("Detail");function ge(i,l,f,p,c,r){const o=w,s=g,a=E;return u(),m("div",null,[e(a,{title:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",slug:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",file:"/packages/veno-ui/src/components/alert/docs/append.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20type%3D%22error%22%20title%3D%22Error%20Title%22%3E%0A%20%20%20%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%20Error%20Text%0A%20%20%20%20%3Ctemplate%20%23append%3E%0A%20%20%20%20%20%20%3Cve-button%20size%3D%22xs%22%20density%3D%22high%22%20color%3D%22info%22%3EDetail%3C%2Fve-button%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,{type:"error",title:"Error Title"},{append:t(()=>[e(o,{size:"xs",density:"high",color:"info"},{default:t(()=>[he]),_:1})]),default:t(()=>[ve]),_:1})]),_:1})])}var Ee=h(fe,[["render",ge]]);const ye={},$e=n("\u4F7F\u7528 "),Ce=n(':icon="false"'),Ae=n(" \u4E0D\u663E\u793A\u56FE\u6807\u3002"),Te=n("This is an info alert.");function be(i,l,f,p,c,r){const o=$,s=y,a=g,d=E;return u(),m("div",null,[e(d,{title:"\u9690\u85CF\u56FE\u6807",slug:"\u9690\u85CF\u56FE\u6807",file:"/packages/veno-ui/src/components/alert/docs/icon.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20%3Aicon%3D%22false%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(s,null,{default:t(()=>[$e,e(o,{color:"secondary",inline:""},{default:t(()=>[Ce]),_:1}),Ae]),_:1})]),default:t(()=>[e(a,{icon:!1},{default:t(()=>[Te]),_:1})]),_:1})])}var xe=h(ye,[["render",be]]);const De={},Fe=n("\u5BC6\u5EA6\u6709 "),we=n("ultra-high"),ke=n(" - \u8D85\u9AD8\u3001"),Ve=n("high"),Ue=n(" - \u9AD8\u3001"),ze=n("medium"),Me=n(" - \u4E2D\u7B49\uFF08\u9ED8\u8BA4\uFF09\u3001"),Be=n("low"),Pe=n(" - \u4F4E\u3001"),je=n("ultra-low"),Ne=n(" - \u8D85\u4F4E\u3002"),Re=n("This is an info alert."),We=n("This is an info alert."),He=n("This is an info alert."),Se=n("This is an info alert."),Ie=n("This is an info alert.");function Oe(i,l,f,p,c,r){const o=$,s=y,a=g,d=C,_=E;return u(),m("div",null,[e(_,{title:"\u5BC6\u5EA6",slug:"\u5BC6\u5EA6",file:"/packages/veno-ui/src/components/alert/docs/density.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22ultra-high%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22high%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22medium%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22low%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20density%3D%22ultra-low%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(s,null,{default:t(()=>[Fe,e(o,{color:"secondary",inline:""},{default:t(()=>[we]),_:1}),ke,e(o,{color:"secondary",inline:""},{default:t(()=>[Ve]),_:1}),Ue,e(o,{color:"secondary",inline:""},{default:t(()=>[ze]),_:1}),Me,e(o,{color:"secondary",inline:""},{default:t(()=>[Be]),_:1}),Pe,e(o,{color:"secondary",inline:""},{default:t(()=>[je]),_:1}),Ne]),_:1})]),default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(a,{density:"ultra-high"},{default:t(()=>[Re]),_:1}),e(a,{density:"high"},{default:t(()=>[We]),_:1}),e(a,{density:"medium"},{default:t(()=>[He]),_:1}),e(a,{density:"low"},{default:t(()=>[Se]),_:1}),e(a,{density:"ultra-low"},{default:t(()=>[Ie]),_:1})]),_:1})]),_:1})])}var Ge=h(De,[["render",Oe]]);const Je={},qe=n("\u65E0\u5706\u89D2\uFF0C\u4E00\u70B9\u5706\u89D2\uFF0C\u836F\u4E38\u5F62\u72B6\u3002"),Ke=n("This is an info alert."),Le=n("This is an info alert."),Qe=n("This is an info alert.");function Xe(i,l,f,p,c,r){const o=y,s=g,a=C,d=E;return u(),m("div",null,[e(d,{title:"\u591A\u79CD\u5F62\u72B6",slug:"\u591A\u79CD\u5F62\u72B6",file:"/packages/veno-ui/src/components/alert/docs/shape.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22tile%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22rounded%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%20%20%3Cve-alert%20shape%3D%22pill%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(o,null,{default:t(()=>[qe]),_:1})]),default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(s,{shape:"tile"},{default:t(()=>[Ke]),_:1}),e(s,{shape:"rounded"},{default:t(()=>[Le]),_:1}),e(s,{shape:"pill"},{default:t(()=>[Qe]),_:1})]),_:1})]),_:1})])}var Ye=h(Je,[["render",Xe]]);const Ze={},et=n("This is an info alert.");function tt(i,l,f,p,c,r){const o=g,s=E;return u(),m("div",null,[e(s,{title:"\u81EA\u5B9A\u4E49\u5173\u95ED",slug:"\u81EA\u5B9A\u4E49\u5173\u95ED",file:"/packages/veno-ui/src/components/alert/docs/close-text.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20closable%20close-text%3D%22Close%20Now%22%3EThis%20is%20an%20info%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(o,{closable:"","close-text":"Close Now"},{default:t(()=>[et]),_:1})]),_:1})])}var nt=h(Ze,[["render",tt]]);const ot={},at=n("This is an loading alert.");function st(i,l,f,p,c,r){const o=g,s=E;return u(),m("div",null,[e(s,{title:"\u52A0\u8F7D\u4E2D",slug:"\u52A0\u8F7D\u4E2D",file:"/packages/veno-ui/src/components/alert/docs/loading.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-alert%20loading%3EThis%20is%20an%20loading%20alert.%3C%2Fve-alert%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(o,{loading:""},{default:t(()=>[at]),_:1})]),_:1})])}var rt=h(ot,[["render",st]]);const it=n("\u8B66\u544A\u63D0\u793A Alert"),lt=n("\u6F14\u793A"),ct=n("API"),dt=n("Alert Props"),pt=n("Alert Events"),ft={title:"\u8B66\u544A\u63D0\u793A Alert",headers:[{level:1,title:"\u8B66\u544A\u63D0\u793A Alert",slug:"\u8B66\u544A\u63D0\u793A-alert"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u9690\u85CF\u56FE\u6807",slug:"\u9690\u85CF\u56FE\u6807"},{level:3,title:"\u63D0\u793A\u7C7B\u578B",slug:"\u63D0\u793A\u7C7B\u578B"},{level:3,title:"\u5BC6\u5EA6",slug:"\u5BC6\u5EA6"},{level:3,title:"\u591A\u79CD\u53D8\u4F53",slug:"\u591A\u79CD\u53D8\u4F53"},{level:3,title:"\u591A\u79CD\u5F62\u72B6",slug:"\u591A\u79CD\u5F62\u72B6"},{level:3,title:"\u53EF\u5173\u95ED\u7684",slug:"\u53EF\u5173\u95ED\u7684"},{level:3,title:"\u81EA\u5B9A\u4E49\u5173\u95ED",slug:"\u81EA\u5B9A\u4E49\u5173\u95ED"},{level:3,title:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",slug:"\u81EA\u5B9A\u4E49\u64CD\u4F5C"},{level:3,title:"\u52A0\u8F7D\u4E2D",slug:"\u52A0\u8F7D\u4E2D"},{level:2,title:"API",slug:"api"},{level:3,title:"Alert Props",slug:"alert-props"},{level:3,title:"Alert Events",slug:"alert-events"}],frontmatter:{meta:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6","wai-aria":"https://www.w3.org/TR/wai-aria-practices/#alert"}}},_t={},vt=Object.assign(_t,{setup(i){return(l,f)=>{const p=k,c=V,r=U,o=z,s=M,a=$,d=B;return u(),m("div",null,[e(p,{id:"\u8B66\u544A\u63D0\u793A-alert",tabindex:"-1"},{default:t(()=>[it]),_:1}),e(c,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[lt]),_:1}),e(o,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(v(W))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(ne))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(ce))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(me))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(Ee))]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(v(xe))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(Ge))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(Ye))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(nt))]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v(rt))]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{id:"api",tabindex:"-1"},{default:t(()=>[ct]),_:1}),e(s,{id:"alert-props",tabindex:"-1"},{default:t(()=>[dt]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",source:"alert",default:!0,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"\u8B66\u544A\u4FE1\u606F\u662F\u5426\u663E\u793A",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u662F\u5426\u663E\u793A"},{name:"type",source:"alert",default:"!info!",type:"string",descriptions:[{language:"zh",name:"type",description:"\u8B66\u544A\u4FE1\u606F\u7684\u7C7B\u578B",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u7684\u7C7B\u578B"},{name:"icon",source:"alert",default:!0,type:"string | boolean | object",descriptions:[{language:"zh",name:"icon",description:"\u8B66\u544A\u4FE1\u606F\u7684\u56FE\u6807",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u7684\u56FE\u6807"},{name:"closable",source:"alert",default:!1,type:"boolean",descriptions:[{language:"zh",name:"closable",description:"\u8B66\u544A\u4FE1\u606F\u662F\u5426\u53EF\u5173\u95ED",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u662F\u5426\u53EF\u5173\u95ED"},{name:"close-icon",source:"alert",default:"!$close!",type:"string | object",descriptions:[{language:"zh",name:"closeIcon",description:"\u8B66\u544A\u4FE1\u606F\u7684\u5173\u95ED\u56FE\u6807",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u7684\u5173\u95ED\u56FE\u6807"},{name:"close-text",source:"alert",type:"string",descriptions:[{language:"zh",name:"closeText",description:"\u8B66\u544A\u4FE1\u606F\u7684\u5173\u95ED\u6587\u672C",source:"alert"}],description:"\u8B66\u544A\u4FE1\u606F\u7684\u5173\u95ED\u6587\u672C"},{name:"transition",source:"alert",default:{component:{name:"ve-fade-in-expand-transition",props:{mode:{default:"in-out"}}}},type:"boolean | string | object",descriptions:[]},{name:"loading",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"link",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"hover",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"image",source:"alert",type:"string",descriptions:[]},{name:"prepend-avatar",source:"alert",type:"string",descriptions:[]},{name:"prepend-icon",source:"alert",type:"string",descriptions:[]},{name:"append-avatar",source:"alert",type:"string",descriptions:[]},{name:"append-icon",source:"alert",type:"string",descriptions:[]},{name:"title",source:"alert",type:"string",descriptions:[]},{name:"subtitle",source:"alert",type:"string",descriptions:[]},{name:"divided",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"text",source:"alert",type:"string",descriptions:[]},{name:"ripple",source:"alert",default:!0,type:"boolean",descriptions:[]},{name:"href",source:"alert",type:"string",descriptions:[]},{name:"replace",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"to",source:"alert",type:"string | object",descriptions:[]},{name:"disabled",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E",source:"tag"}],description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"alert",default:"!contained-outlined!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"alert",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]}]},{"item.type":t(({item:_})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(A(_.type),1)]),_:2},1024)]),"item.default":t(({item:_})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(A(typeof _.default=="string"?_.default.replace(/!/g,"'"):JSON.stringify(_.default,null,2)),1)]),_:2},1024)]),_:1}),e(s,{id:"alert-events",tabindex:"-1"},{default:t(()=>[pt]),_:1}),e(d,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{ft as __pageData,vt as default};
