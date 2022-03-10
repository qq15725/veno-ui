import{_ as g,B as h,S as m,H as A,P as C,A as b,C as $,a as E,e as D,R as k}from"./app.86b47a44.js";import{_ as w}from"./Demo.b1bf2f41.js";import{Y as f,a0 as v,v as o,_ as n,Q as t,u as B,$ as _}from"./vendor.95f12914.js";const F={},N=t("Info"),T=t("Success"),x=t("Warning"),y=t("Error"),P=t("Loading");function V(a,e,p,d,c,u){const i=h,r=m,l=w;return f(),v("div",null,[o(l,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/notification-provider/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.info('This%20is%20an%20info%20notification!')%22%20color%3D%22info%22%3EInfo%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.success('This%20is%20an%20success%20notification!')%22%20color%3D%22success%22%3ESuccess%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.warning('This%20is%20an%20warning%20notification!')%22%20color%3D%22warning%22%3EWarning%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.error('This%20is%20an%20error%20notification!')%22%20color%3D%22error%22%3EError%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.loading('This%20is%20an%20loading%20notification!')%22%3ELoading%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:n(()=>[o(r,null,{default:n(()=>[o(i,{onClick:e[0]||(e[0]=s=>a.$veno.notification.info("This is an info notification!")),color:"info"},{default:n(()=>[N]),_:1}),o(i,{onClick:e[1]||(e[1]=s=>a.$veno.notification.success("This is an success notification!")),color:"success"},{default:n(()=>[T]),_:1}),o(i,{onClick:e[2]||(e[2]=s=>a.$veno.notification.warning("This is an warning notification!")),color:"warning"},{default:n(()=>[x]),_:1}),o(i,{onClick:e[3]||(e[3]=s=>a.$veno.notification.error("This is an error notification!")),color:"error"},{default:n(()=>[y]),_:1}),o(i,{onClick:e[4]||(e[4]=s=>a.$veno.notification.loading("This is an loading notification!"))},{default:n(()=>[P]),_:1})]),_:1})]),_:1})])}var I=g(F,[["render",V]]);const S=t("\u901A\u77E5\u63D0\u9192\u6846 Notification"),H=t("\u6CE8\u518C "),L=_("strong",null,"NotificationProvider",-1),R=t("\uFF0C\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),W=_("strong",null,"ve-notification-provider",-1),j=t(" \u5185\u90E8\uFF0C\u4F7F\u7528 "),O=_("strong",null,"useNotification",-1),Q=t(" \u6216\u8005 "),Y=_("strong",null,"this.$veno.notification",-1),q=t(" \u53BB\u83B7\u53D6 API\u3002"),z=t("\u6CE8\u518C "),G=t("NotificationProvider"),J=t(" \uFF08\u63A8\u8350\uFF09"),K=t("\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),M=t("ve-notification-provider"),U=t(" \u5185\u90E8"),X=t("\u6F14\u793A"),Z=t("\u5168\u5C40\u4F7F\u7528"),oo=t("\u9700\u8981\u5148\u6CE8\u518C "),no=t("NotificationProvider"),to=t(" \u3002"),co={title:"\u901A\u77E5\u63D0\u9192\u6846 Notification",headers:[{level:1,title:"\u901A\u77E5\u63D0\u9192\u6846 Notification",slug:"\u901A\u77E5\u63D0\u9192\u6846-notification"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"\u5168\u5C40\u4F7F\u7528",slug:"\u5168\u5C40\u4F7F\u7528"}],frontmatter:{meta:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}}},io={},ro=Object.assign(io,{setup(a){return(e,p)=>{const d=A,c=C,u=b,i=$,r=E,l=D,s=k;return f(),v("div",null,[o(d,{id:"\u901A\u77E5\u63D0\u9192\u6846-notification",tabindex:"-1"},{default:n(()=>[S]),_:1}),o(u,{type:"warning",title:"\u4F7F\u7528\u524D\u63D0",class:"mb-3"},{default:n(()=>[o(c,null,{default:n(()=>[H,L,R,W,j,O,Q,Y,q]),_:1})]),_:1}),o(c,null,{default:n(()=>[z,o(i,{color:"secondary",inline:""},{default:n(()=>[G]),_:1}),J]),_:1}),o(i,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aimport%20%7B%20NotificationProvider%20%7D%20from%20'veno-ui%2Fproviders'%0Aexport%20default%20createVeno(%7B%0A%20%20providers%3A%20%7B%20NotificationProvider%20%7D%0A%7D)%0A%2F%2F%20...%0A","highlighted-line-numbers":[],language:"ts","show-language":""}),o(c,null,{default:n(()=>[K,o(i,{color:"secondary",inline:""},{default:n(()=>[M]),_:1}),U]),_:1}),o(i,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"%3Cve-notification-provider%3E%0A%20%20%3Crouter-view%20%2F%3E%0A%3C%2Fve-notification-provider%3E%0A","highlighted-line-numbers":[],language:"vue","show-language":""}),o(r,{id:"\u6F14\u793A",tabindex:"-1"},{default:n(()=>[X]),_:1}),o(s,null,{default:n(()=>[o(l,{cols:"12",md:"12"},{default:n(()=>[o(s,null,{default:n(()=>[o(l,{cols:"12"},{default:n(()=>[o(B(I))]),_:1})]),_:1})]),_:1})]),_:1}),o(r,{id:"\u5168\u5C40\u4F7F\u7528",tabindex:"-1"},{default:n(()=>[Z]),_:1}),o(c,null,{default:n(()=>[oo,o(i,{color:"secondary",inline:""},{default:n(()=>[no]),_:1}),to]),_:1}),o(i,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20notification%20%7D%20from%20'veno-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20notification.warning('...')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A","highlighted-line-numbers":[],language:"ts","show-language":""})])}}});export{co as __pageData,ro as default};
