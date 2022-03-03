import{_ as p,B as m,S as g,H as h,C as A,P as C,A as b,a as $,e as E,R as D}from"./app.2727beb5.js";import{_ as w}from"./Demo.412e4204.js";import{Y as u,a0 as f,n as o,_ as n,Q as t,u as k}from"./vendor.d4ba25e4.js";const B={},F=t("Info"),y=t("Success"),N=t("Warning"),T=t("Error"),P=t("Loading");function x(a,i,v,d,e,r){const s=m,l=g,_=w;return u(),f("div",null,[o(_,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/notification-provider/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.info('This%20is%20an%20info%20notification!')%22%20color%3D%22info%22%3EInfo%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.success('This%20is%20an%20success%20notification!')%22%20color%3D%22success%22%3ESuccess%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.warning('This%20is%20an%20warning%20notification!')%22%20color%3D%22warning%22%3EWarning%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.error('This%20is%20an%20error%20notification!')%22%20color%3D%22error%22%3EError%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.notification.loading('This%20is%20an%20loading%20notification!')%22%3ELoading%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:n(()=>[o(l,null,{default:n(()=>[o(s,{onClick:i[0]||(i[0]=c=>a.$veno.notification.info("This is an info notification!")),color:"info"},{default:n(()=>[F]),_:1}),o(s,{onClick:i[1]||(i[1]=c=>a.$veno.notification.success("This is an success notification!")),color:"success"},{default:n(()=>[y]),_:1}),o(s,{onClick:i[2]||(i[2]=c=>a.$veno.notification.warning("This is an warning notification!")),color:"warning"},{default:n(()=>[N]),_:1}),o(s,{onClick:i[3]||(i[3]=c=>a.$veno.notification.error("This is an error notification!")),color:"error"},{default:n(()=>[T]),_:1}),o(s,{onClick:i[4]||(i[4]=c=>a.$veno.notification.loading("This is an loading notification!"))},{default:n(()=>[P]),_:1})]),_:1})]),_:1})])}var V=p(B,[["render",x]]);const I=t("\u901A\u77E5\u63D0\u9192\u6846 Notification"),S=t("\u6CE8\u518C "),H=t("NotificationProvider"),L=t("\uFF0C\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),R=t("ve-notification-provider"),W=t(" \u5185\u90E8\uFF0C\u4F7F\u7528 "),j=t("useNotification"),O=t(" \u6216\u8005 "),Q=t("this.$veno.notification"),Y=t(" \u53BB\u83B7\u53D6 API\u3002"),q=t("\u6CE8\u518C "),z=t("NotificationProvider"),G=t(" \uFF08\u63A8\u8350\uFF09"),J=t("\u6216\u8005\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),K=t("ve-notification-provider"),M=t(" \u5185\u90E8"),U=t("\u6F14\u793A"),X=t("\u5168\u5C40\u4F7F\u7528"),Z=t("\u9700\u8981\u5148\u6CE8\u518C "),oo=t("NotificationProvider"),no=t(" \u3002"),co={title:"\u901A\u77E5\u63D0\u9192\u6846 Notification",headers:[{level:1,title:"\u901A\u77E5\u63D0\u9192\u6846 Notification",slug:"\u901A\u77E5\u63D0\u9192\u6846-notification"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"\u5168\u5C40\u4F7F\u7528",slug:"\u5168\u5C40\u4F7F\u7528"}],frontmatter:{meta:{category:"Feedback \u53CD\u9988\u7EC4\u4EF6"}}},to={},ao=Object.assign(to,{setup(a){return(i,v)=>{const d=h,e=A,r=C,s=b,l=$,_=E,c=D;return u(),f("div",null,[o(d,{id:"\u901A\u77E5\u63D0\u9192\u6846-notification",tabindex:"-1"},{default:n(()=>[I]),_:1}),o(s,{type:"warning",title:"\u4F7F\u7528\u524D\u63D0",class:"mb-3"},{default:n(()=>[o(r,null,{default:n(()=>[S,o(e,{color:"secondary",inline:""},{default:n(()=>[H]),_:1}),L,o(e,{color:"secondary",inline:""},{default:n(()=>[R]),_:1}),W,o(e,{color:"secondary",inline:""},{default:n(()=>[j]),_:1}),O,o(e,{color:"secondary",inline:""},{default:n(()=>[Q]),_:1}),Y]),_:1})]),_:1}),o(r,null,{default:n(()=>[q,o(e,{color:"secondary",inline:""},{default:n(()=>[z]),_:1}),G]),_:1}),o(e,{class:"mb-4",color:"secondary",code:"import%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aimport%20%7B%20NotificationProvider%20%7D%20from%20'veno-ui%2Fproviders'%0Aexport%20default%20createVeno(%7B%0A%20%20providers%3A%20%7B%20NotificationProvider%20%7D%0A%7D)%0A%2F%2F%20...%0A","line-numbers":[],language:"ts","show-language":""}),o(r,null,{default:n(()=>[J,o(e,{color:"secondary",inline:""},{default:n(()=>[K]),_:1}),M]),_:1}),o(e,{class:"mb-4",color:"secondary",code:"%3Cve-notification-provider%3E%0A%20%20%3Crouter-view%20%2F%3E%0A%3C%2Fve-notification-provider%3E%0A","line-numbers":[],language:"vue","show-language":""}),o(l,{id:"\u6F14\u793A",tabindex:"-1"},{default:n(()=>[U]),_:1}),o(c,null,{default:n(()=>[o(_,{cols:"12",md:"12"},{default:n(()=>[o(c,null,{default:n(()=>[o(_,{cols:"12"},{default:n(()=>[o(k(V))]),_:1})]),_:1})]),_:1})]),_:1}),o(l,{id:"\u5168\u5C40\u4F7F\u7528",tabindex:"-1"},{default:n(()=>[X]),_:1}),o(r,null,{default:n(()=>[Z,o(e,{color:"secondary",inline:""},{default:n(()=>[oo]),_:1}),no]),_:1}),o(e,{class:"mb-4",color:"secondary",code:"import%20%7B%20notification%20%7D%20from%20'veno-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20notification.warning('...')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A","line-numbers":[],language:"ts","show-language":""})])}}});export{co as __pageData,ao as default};
