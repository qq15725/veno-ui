import{_ as f,o as u,c as g,a as e,w as o,b as s,B as C,S as A,x as p,l as v,H as $,P as b,A as E,C as k,d as D,j as w,R as F}from"./app.fb1c9184.js";import{_ as h}from"./Demo.42249bf0.js";const B={},x=s("Info"),T=s("Success"),M=s("Warning"),y=s("Error"),V=s("Loading");function P(a,n,m,d,c,_){const t=C,r=A,i=h;return u(),g("div",null,[e(i,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/message-provider/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('This%20is%20an%20info%20message!')%22%20color%3D%22info%22%3EInfo%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.success('This%20is%20an%20success%20message!')%22%20color%3D%22success%22%3ESuccess%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.warning('This%20is%20an%20warning%20message!')%22%20color%3D%22warning%22%3EWarning%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.error('This%20is%20an%20error%20message!')%22%20color%3D%22error%22%3EError%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.loading('This%20is%20an%20loading%20message!')%22%3ELoading%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:o(()=>[e(r,null,{default:o(()=>[e(t,{onClick:n[0]||(n[0]=l=>a.$veno.message.info("This is an info message!")),color:"info"},{default:o(()=>[x]),_:1}),e(t,{onClick:n[1]||(n[1]=l=>a.$veno.message.success("This is an success message!")),color:"success"},{default:o(()=>[T]),_:1}),e(t,{onClick:n[2]||(n[2]=l=>a.$veno.message.warning("This is an warning message!")),color:"warning"},{default:o(()=>[M]),_:1}),e(t,{onClick:n[3]||(n[3]=l=>a.$veno.message.error("This is an error message!")),color:"error"},{default:o(()=>[y]),_:1}),e(t,{onClick:n[4]||(n[4]=l=>a.$veno.message.loading("This is an loading message!"))},{default:o(()=>[V]),_:1})]),_:1})]),_:1})])}var S=f(B,[["render",P]]);const H={},I=s("Contained"),N=s("ContainedText");function U(a,n,m,d,c,_){const t=C,r=A,i=h;return u(),g("div",null,[e(i,{title:"\u53D8\u4F53",slug:"\u53D8\u4F53",file:"/packages/veno-ui/src/components/message-provider/docs/variant.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('Contained%20!'%2C%20%7B%20variant%3A%20'contained'%20%7D)%22%3EContained%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('ContainedText%20!'%2C%20%7B%20variant%3A%20'contained-text'%20%7D)%22%3EContainedText%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:o(()=>[e(r,null,{default:o(()=>[e(t,{onClick:n[0]||(n[0]=l=>a.$veno.message.info("Contained !",{variant:"contained"}))},{default:o(()=>[I]),_:1}),e(t,{onClick:n[1]||(n[1]=l=>a.$veno.message.info("ContainedText !",{variant:"contained-text"}))},{default:o(()=>[N]),_:1})]),_:1})]),_:1})])}var j=f(H,[["render",U]]);const L={},R=s("Closable");function W(a,n,m,d,c,_){const t=C,r=h;return u(),g("div",null,[e(r,{title:"\u53EF\u5173\u95ED\u7684",slug:"\u53EF\u5173\u95ED\u7684",file:"/packages/veno-ui/src/components/message-provider/docs/closable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('Closable%20!'%2C%20%7B%20duration%3A%200%2C%20closable%3A%20true%20%7D)%22%20color%3D%22info%22%3EClosable%3C%2Fve-button%3E%0A%3C%2Ftemplate%3E"},{default:o(()=>[e(t,{onClick:n[0]||(n[0]=i=>a.$veno.message.info("Closable !",{duration:0,closable:!0})),color:"info"},{default:o(()=>[R]),_:1})]),_:1})])}var O=f(L,[["render",W]]);const q=s("\u5168\u5C40\u63D0\u793A Message"),z=s("\u6CE8\u518C "),G=v("strong",null,"MessageProvider",-1),J=s("\uFF0C\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),K=v("strong",null,"ve-message-provider",-1),Q=s(" \u5185\u90E8\uFF0C\u4F7F\u7528 "),X=v("strong",null,"useMessage",-1),Y=s(" \u6216\u8005 "),Z=v("strong",null,"this.$veno.message",-1),ee=s(" \u53BB\u83B7\u53D6 API\u3002"),oe=s("\u6CE8\u518C "),se=s("MessageProvider"),ne=s(" \uFF08\u63A8\u8350\uFF09"),te=s("\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),ae=s("ve-message-provider"),ie=s(" \u5185\u90E8"),le=s("\u6F14\u793A"),re=s("\u5168\u5C40\u4F7F\u7528"),ce=s("\u9700\u8981\u5148\u6CE8\u518C "),de=s("MessageProvider"),_e=s(" \u3002"),me={title:"\u5168\u5C40\u63D0\u793A Message",headers:[{level:1,title:"\u5168\u5C40\u63D0\u793A Message",slug:"\u5168\u5C40\u63D0\u793A-message"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u53D8\u4F53",slug:"\u53D8\u4F53"},{level:3,title:"\u53EF\u5173\u95ED\u7684",slug:"\u53EF\u5173\u95ED\u7684"},{level:2,title:"\u5168\u5C40\u4F7F\u7528",slug:"\u5168\u5C40\u4F7F\u7528"}],frontmatter:{meta:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}}},ue={},pe=Object.assign(ue,{setup(a){return(n,m)=>{const d=$,c=b,_=E,t=k,r=D,i=w,l=F;return u(),g("div",null,[e(d,{id:"\u5168\u5C40\u63D0\u793A-message",tabindex:"-1"},{default:o(()=>[q]),_:1}),e(_,{type:"warning",title:"\u4F7F\u7528\u524D\u63D0",class:"mb-3"},{default:o(()=>[e(c,null,{default:o(()=>[z,G,J,K,Q,X,Y,Z,ee]),_:1})]),_:1}),e(c,null,{default:o(()=>[oe,e(t,{color:"secondary",inline:""},{default:o(()=>[se]),_:1}),ne]),_:1}),e(t,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aimport%20%7B%20MessageProvider%20%7D%20from%20'veno-ui%2Fproviders'%0Aexport%20default%20createVeno(%7B%0A%20%20providers%3A%20%7B%20MessageProvider%20%7D%0A%7D)%0A%2F%2F%20...%0A","highlighted-line-numbers":[],language:"ts","show-language":""}),e(c,null,{default:o(()=>[te,e(t,{color:"secondary",inline:""},{default:o(()=>[ae]),_:1}),ie]),_:1}),e(t,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"%3Cve-message-provider%3E%0A%20%20%3Crouter-view%20%2F%3E%0A%3C%2Fve-message-provider%3E%0A","highlighted-line-numbers":[],language:"html","show-language":""}),e(r,{id:"\u6F14\u793A",tabindex:"-1"},{default:o(()=>[le]),_:1}),e(l,null,{default:o(()=>[e(i,{cols:"12",md:"12"},{default:o(()=>[e(l,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(p(S))]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(p(j))]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(p(O))]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id:"\u5168\u5C40\u4F7F\u7528",tabindex:"-1"},{default:o(()=>[re]),_:1}),e(c,null,{default:o(()=>[ce,e(t,{color:"secondary",inline:""},{default:o(()=>[de]),_:1}),_e]),_:1}),e(t,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20message%20%7D%20from%20'veno-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning('...')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A","highlighted-line-numbers":[],language:"ts","show-language":""})])}}});export{me as __pageData,pe as default};
