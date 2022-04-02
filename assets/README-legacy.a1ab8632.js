System.register(["./app-legacy.0e2fb860.js","./Demo-legacy.ab072aec.js"],(function(e){"use strict";var s,n,a,o,t,l,i,r,u,c,d,g,v,m,f,C,p,A;return{setters:[function(e){s=e._,n=e.o,a=e.c,o=e.a,t=e.w,l=e.b,i=e.B,r=e.S,u=e.x,c=e.l,d=e.H,g=e.P,v=e.A,m=e.C,f=e.d,C=e.j,p=e.R},function(e){A=e._}],execute:function(){const b={},_=l("Info"),h=l("Success"),E=l("Warning"),D=l("Error"),k=l("Loading");var F=s(b,[["render",function(e,s,l,u,c,d){const g=i,v=r,m=A;return n(),a("div",null,[o(m,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/message-provider/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('This%20is%20an%20info%20message!')%22%20color%3D%22info%22%3EInfo%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.success('This%20is%20an%20success%20message!')%22%20color%3D%22success%22%3ESuccess%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.warning('This%20is%20an%20warning%20message!')%22%20color%3D%22warning%22%3EWarning%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.error('This%20is%20an%20error%20message!')%22%20color%3D%22error%22%3EError%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.loading('This%20is%20an%20loading%20message!')%22%3ELoading%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t((()=>[o(v,null,{default:t((()=>[o(g,{onClick:s[0]||(s[0]=s=>e.$veno.message.info("This is an info message!")),color:"info"},{default:t((()=>[_])),_:1}),o(g,{onClick:s[1]||(s[1]=s=>e.$veno.message.success("This is an success message!")),color:"success"},{default:t((()=>[h])),_:1}),o(g,{onClick:s[2]||(s[2]=s=>e.$veno.message.warning("This is an warning message!")),color:"warning"},{default:t((()=>[E])),_:1}),o(g,{onClick:s[3]||(s[3]=s=>e.$veno.message.error("This is an error message!")),color:"error"},{default:t((()=>[D])),_:1}),o(g,{onClick:s[4]||(s[4]=s=>e.$veno.message.loading("This is an loading message!"))},{default:t((()=>[k])),_:1})])),_:1})])),_:1})])}]]);const x={},w=l("Contained"),T=l("ContainedText");var B=s(x,[["render",function(e,s,l,u,c,d){const g=i,v=r,m=A;return n(),a("div",null,[o(m,{title:"变体",slug:"变体",file:"/packages/veno-ui/src/components/message-provider/docs/variant.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('Contained%20!'%2C%20%7B%20variant%3A%20'contained'%20%7D)%22%3EContained%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('ContainedText%20!'%2C%20%7B%20variant%3A%20'contained-text'%20%7D)%22%3EContainedText%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t((()=>[o(v,null,{default:t((()=>[o(g,{onClick:s[0]||(s[0]=s=>e.$veno.message.info("Contained !",{variant:"contained"}))},{default:t((()=>[w])),_:1}),o(g,{onClick:s[1]||(s[1]=s=>e.$veno.message.info("ContainedText !",{variant:"contained-text"}))},{default:t((()=>[T])),_:1})])),_:1})])),_:1})])}]]);const y={},M=l("Closable");var $=s(y,[["render",function(e,s,l,r,u,c){const d=i,g=A;return n(),a("div",null,[o(g,{title:"可关闭的",slug:"可关闭的",file:"/packages/veno-ui/src/components/message-provider/docs/closable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20%40click%3D%22%24veno.message.info('Closable%20!'%2C%20%7B%20duration%3A%200%2C%20closable%3A%20true%20%7D)%22%20color%3D%22info%22%3EClosable%3C%2Fve-button%3E%0A%3C%2Ftemplate%3E"},{default:t((()=>[o(d,{onClick:s[0]||(s[0]=s=>e.$veno.message.info("Closable !",{duration:0,closable:!0})),color:"info"},{default:t((()=>[M])),_:1})])),_:1})])}]]);const P=l("全局提示 Message"),j=l("注册 "),S=c("strong",null,"MessageProvider",-1),I=l("，或者把调用其方法的组件放在 "),L=c("strong",null,"ve-message-provider",-1),V=l(" 内部，使用 "),W=c("strong",null,"useMessage",-1),H=l(" 或者 "),O=c("strong",null,"this.$veno.message",-1),R=l(" 去获取 API。"),q=l("注册 "),z=l("MessageProvider"),G=l(" （推荐）"),J=l("或者把调用其方法的组件放在 "),K=l("ve-message-provider"),N=l(" 内部"),Q=l("演示"),U=l("全局使用"),X=l("需要先注册 "),Y=l("MessageProvider"),Z=l(" 。"),ee=(e("__pageData",{title:"全局提示 Message",headers:[{level:1,title:"全局提示 Message",slug:"全局提示-message"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"变体",slug:"变体"},{level:3,title:"可关闭的",slug:"可关闭的"},{level:2,title:"全局使用",slug:"全局使用"}],frontmatter:{meta:{category:"Feedback 反馈组件"}}}),{});e("default",Object.assign(ee,{setup:e=>(e,s)=>{const l=d,i=g,r=v,c=m,A=f,b=C,_=p;return n(),a("div",null,[o(l,{id:"全局提示-message",tabindex:"-1"},{default:t((()=>[P])),_:1}),o(r,{type:"warning",title:"使用前提",class:"mb-3"},{default:t((()=>[o(i,null,{default:t((()=>[j,S,I,L,V,W,H,O,R])),_:1})])),_:1}),o(i,null,{default:t((()=>[q,o(c,{color:"secondary",inline:""},{default:t((()=>[z])),_:1}),G])),_:1}),o(c,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aimport%20%7B%20MessageProvider%20%7D%20from%20'veno-ui%2Fproviders'%0Aexport%20default%20createVeno(%7B%0A%20%20providers%3A%20%7B%20MessageProvider%20%7D%0A%7D)%0A%2F%2F%20...%0A","highlighted-line-numbers":[],language:"ts","show-language":""}),o(i,null,{default:t((()=>[J,o(c,{color:"secondary",inline:""},{default:t((()=>[K])),_:1}),N])),_:1}),o(c,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"%3Cve-message-provider%3E%0A%20%20%3Crouter-view%20%2F%3E%0A%3C%2Fve-message-provider%3E%0A","highlighted-line-numbers":[],language:"html","show-language":""}),o(A,{id:"演示",tabindex:"-1"},{default:t((()=>[Q])),_:1}),o(_,null,{default:t((()=>[o(b,{cols:"12",md:"12"},{default:t((()=>[o(_,null,{default:t((()=>[o(b,{cols:"12"},{default:t((()=>[o(u(F))])),_:1}),o(b,{cols:"12"},{default:t((()=>[o(u(B))])),_:1}),o(b,{cols:"12"},{default:t((()=>[o(u($))])),_:1})])),_:1})])),_:1})])),_:1}),o(A,{id:"全局使用",tabindex:"-1"},{default:t((()=>[U])),_:1}),o(i,null,{default:t((()=>[X,o(c,{color:"secondary",inline:""},{default:t((()=>[Y])),_:1}),Z])),_:1}),o(c,{class:"mb-4 py-3 px-6",theme:"dark",shape:"rounded-lg",code:"import%20%7B%20message%20%7D%20from%20'veno-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning('...')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A","highlighted-line-numbers":[],language:"ts","show-language":""})])}}))}}}));
