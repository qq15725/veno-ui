System.register(["./app-legacy.ec2822eb.js","./Demo-legacy.ac968142.js","./close-legacy.08d73dc8.js"],(function(e){"use strict";var l,t,a,o,n,i,r,c,s,d,u,A,E,p,C,v,m,f,D,g,F,b,B,_,h,k,y,x,w,V,H,z,P,j,S,I,W,M,Z;return{setters:[function(e){l=e._,t=e.q,a=e.s,o=e.u,n=e.v,i=e.av,r=e.aw,c=e.x,s=e.G,d=e.S,u=e.$,A=e.ax,E=e.ay,p=e.y,C=e.z,v=e.ak,m=e.al,f=e.C,D=e.P,g=e.a8,F=e.h,b=e.j,B=e.az,_=e.o,h=e.c,k=e.l,y=e.aA,x=e.Z,w=e.aB,V=e.H,H=e.d,z=e.R,P=e.n,j=e.T,S=e.I,I=e.J,W=e.k},function(e){M=e._},function(e){Z=e._}],execute:function(){const J={},O=c("Dialog"),T=c("取消"),U=c("确认");var q=l(J,[["render",function(e,l,c,E,p,C){const v=s,m=d,f=u,D=A,g=M;return t(),a("div",null,[o(g,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/dialog/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[o(D,null,{activator:n((({props:e})=>[o(v,i(r(e)),{default:n((()=>[O])),_:2},1040)])),default:n((({close:e})=>[o(f,{title:"标题",text:"一些例子文本内容"},{actions:n((()=>[o(m),o(v,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[T])),_:2},1032,["onClick"]),o(v,{color:"primary",onClick:e},{default:n((()=>[U])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1})])}]]);const G={},N=c("Dialog"),R=c("取消"),$=c("确认");var K=l(G,[["render",function(e,l,c,E,p,C){const v=s,m=d,f=u,D=A,g=M;return t(),a("div",null,[o(g,{title:"点击外面不关闭",slug:"点击外面不关闭",file:"/packages/veno-ui/src/components/dialog/docs/persistent.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20persistent%20draggable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%22%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%20%23actions%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[o(D,{persistent:"",draggable:""},{activator:n((({props:e})=>[o(v,i(r(e)),{default:n((()=>[N])),_:2},1040)])),default:n((({close:e})=>[o(f,{title:"标题",text:"一些例子文本内容"},{actions:n((()=>[o(m),o(v,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[R])),_:2},1032,["onClick"]),o(v,{color:"primary",onClick:e},{default:n((()=>[$])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1})])}]]);const L={},Q=c("Dialog"),X=c("取消"),Y=c("确认");var ee=l(L,[["render",function(e,l,c,p,C,v){const m=s,f=E,D=d,g=u,F=A,b=M;return t(),a("div",null,[o(b,{title:"一个表单对话框",slug:"一个表单对话框",file:"/packages/veno-ui/src/components/dialog/docs/form.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E4%BF%AE%E6%94%B9%E8%B5%84%E6%96%99%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-form%0A%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22pt-3%20px-5%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aitems%3D%22%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E8%B4%A6%E5%8F%B7'%2C%20name%3A%20'username'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%AF%86%E7%A0%81'%2C%20name%3A%20'password'%2C%20type%3A%20'password'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%98%B5%E7%A7%B0'%2C%20name%3A%20'nick'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:n((()=>[o(F,null,{activator:n((({props:e})=>[o(m,i(r(e)),{default:n((()=>[Q])),_:2},1040)])),default:n((({close:e})=>[o(g,{title:"修改资料"},{text:n((()=>[o(f,{class:"pt-3 px-5",items:[{label:"账号",name:"username",placeholder:"请输入"},{label:"密码",name:"password",type:"password",placeholder:"请输入"},{label:"昵称",name:"nick",placeholder:"请输入"}]})])),actions:n((()=>[o(D),o(m,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[X])),_:2},1032,["onClick"]),o(m,{color:"primary",onClick:e},{default:n((()=>[Y])),_:2},1032,["onClick"]),o(D)])),_:2},1024)])),_:1})])),_:1})])}]]);const le=p({setup:()=>({show:C(!1)})}),te=c("Dialog"),ae=c("取消"),oe=c("确认");var ne=l(le,[["render",function(e,l,i,r,c,E){const p=s,C=d,v=u,m=A,f=M;return t(),a("div",null,[o(f,{title:"使用 v-model 控制显示",slug:"使用-v-model-控制显示",file:"/packages/veno-ui/src/components/dialog/docs/v-model.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20%40click%3D%22show%20%3D%20true%22%3EDialog%3C%2Fve-button%3E%0A%0A%20%20%3Cve-dialog%20v-model%3D%22show%22%3E%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:n((()=>[o(p,{onClick:l[0]||(l[0]=l=>e.show=!0)},{default:n((()=>[te])),_:1}),o(m,{modelValue:e.show,"onUpdate:modelValue":l[1]||(l[1]=l=>e.show=l)},{default:n((({close:e})=>[o(v,{title:"标题",text:"一些例子文本内容"},{actions:n((()=>[o(C),o(p,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[ae])),_:2},1032,["onClick"]),o(p,{color:"primary",onClick:e},{default:n((()=>[oe])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["modelValue"])])),_:1})])}]]);const ie={},re=c("设置 "),ce=c("scrollable"),se=c(" 配合 "),de=c("ve-card"),ue=c(" 和 "),Ae=c("ve-card-text"),Ee=c(" 可以很简单的获得一个只有中间内容滚动的对话框，此示例使用的是 "),pe=c("text"),Ce=c(" 插槽。"),ve=c("Dialog"),me=c("一些例子文本内容"),fe=c("取消"),De=c("确认");var ge=l(ie,[["render",function(e,l,c,E,p,C){const g=f,F=D,b=s,B=d,_=u,h=A,k=M;return t(),a("div",null,[o(k,{title:"可滚动",slug:"可滚动",file:"/packages/veno-ui/src/components/dialog/docs/scrollable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%22%20divided%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[o(F,null,{default:n((()=>[re,o(g,{color:"secondary",inline:""},{default:n((()=>[ce])),_:1}),se,o(g,{color:"secondary",inline:""},{default:n((()=>[de])),_:1}),ue,o(g,{color:"secondary",inline:""},{default:n((()=>[Ae])),_:1}),Ee,o(g,{color:"secondary",inline:""},{default:n((()=>[pe])),_:1}),Ce])),_:1})])),default:n((()=>[o(h,{scrollable:""},{activator:n((({props:e})=>[o(b,i(r(e)),{default:n((()=>[ve])),_:2},1040)])),default:n((({close:e})=>[o(_,{title:"标题标题标题",divided:""},{text:n((()=>[(t(),a(v,null,m(100,(e=>(t(),a(v,null,[me],64)))),64))])),actions:n((()=>[o(B),o(b,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[fe])),_:2},1032,["onClick"]),o(b,{color:"primary",onClick:e},{default:n((()=>[De])),_:2},1032,["onClick"]),o(B)])),_:2},1024)])),_:1})])),_:1})])}]]);const Fe={},be=c("嵌套的可滚动内容在子对话框弹出的时候会禁用滚动。"),Be=c("Dialog"),_e=c("Dialog"),he=c("占位专用文字"),ke=c("占位专用文字");var ye=l(Fe,[["render",function(e,l,c,d,E,p){const C=D,f=s,F=u,b=A,B=M;return t(),a("div",null,[o(B,{title:"嵌套",slug:"嵌套",file:"/packages/veno-ui/src/components/dialog/docs/nested.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-card%20%23text%3E%0A%20%20%20%20%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%20color%3D%22primary%22%3EDialog%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cve-card%20height%3D%22200%22%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[o(C,null,{default:n((()=>[be])),_:1})])),default:n((()=>[o(b,{scrollable:""},{activator:n((({props:e})=>[o(f,i(r(e)),{default:n((()=>[Be])),_:2},1040)])),default:n((()=>[o(F,null,{text:n((()=>[o(b,{scrollable:""},{activator:n((({props:e})=>[o(f,g(e,{color:"primary"}),{default:n((()=>[_e])),_:2},1040),(t(),a(v,null,m(100,(e=>(t(),a(v,null,[he],64)))),64))])),default:n((()=>[o(F,{height:"200"},{text:n((()=>[(t(),a(v,null,m(100,(e=>(t(),a(v,null,[ke],64)))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}]]);const xe=p({setup:()=>({show:C(!1)})}),we=c("Hover"),Ve=c("占位专用文字");var He=l(xe,[["render",function(e,l,c,d,E,p){const C=s,f=F,D=b,g=B,_=u,h=A,k=M;return t(),a("div",null,[o(k,{title:"从菜单弹出的对话框",slug:"从菜单弹出的对话框",file:"/packages/veno-ui/src/components/dialog/docs/menu-dialog.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20open-on-hover%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EHover%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%3Cve-list-item%20color%3D%22primary%22%20text%3D%22Dialog%22%20%40click%3D%22show%20%3D%20true%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-list%3E%0A%20%20%3C%2Fve-menu%3E%0A%0A%20%20%3Cve-dialog%20v-model%3D%22show%22%20scrollable%3E%0A%20%20%20%20%3Cve-card%20height%3D%22200%22%20%23text%3E%0A%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:n((()=>[o(g,{"open-on-hover":""},{activator:n((({props:e})=>[o(C,i(r(e)),{default:n((()=>[we])),_:2},1040)])),default:n((()=>[o(D,null,{default:n((()=>[o(f,{color:"primary",text:"Dialog",onClick:l[0]||(l[0]=l=>e.show=!0)})])),_:1})])),_:1}),o(h,{modelValue:e.show,"onUpdate:modelValue":l[1]||(l[1]=l=>e.show=l),scrollable:""},{default:n((()=>[o(_,{height:"200"},{text:n((()=>[(t(),a(v,null,m(100,(e=>(t(),a(v,null,[Ve],64)))),64))])),_:1})])),_:1},8,["modelValue"])])),_:1})])}]]);const ze={},Pe=c("通过 "),je=c("max-width"),Se=c(" 、"),Ie=c("max-height"),We=c(" 可以调整最大宽高的限制。"),Me=c("Dialog"),Ze=c("一些例子文本内容"),Je=c("取消"),Oe=c("确认");var Te=l(ze,[["render",function(e,l,c,E,p,C){const g=f,F=D,b=s,B=d,_=u,h=A,k=M;return t(),a("div",null,[o(k,{title:"最大宽度高度",slug:"最大宽度高度",file:"/packages/veno-ui/src/components/dialog/docs/dimension.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%20max-width%3D%22800%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%22%20divided%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:n((()=>[o(F,null,{default:n((()=>[Pe,o(g,{color:"secondary",inline:""},{default:n((()=>[je])),_:1}),Se,o(g,{color:"secondary",inline:""},{default:n((()=>[Ie])),_:1}),We])),_:1})])),default:n((()=>[o(h,{scrollable:"","max-width":"800"},{activator:n((({props:e})=>[o(b,i(r(e)),{default:n((()=>[Me])),_:2},1040)])),default:n((({close:e})=>[o(_,{title:"标题标题标题",divided:""},{text:n((()=>[(t(),a(v,null,m(100,(e=>(t(),a(v,null,[Ze],64)))),64))])),actions:n((()=>[o(B),o(b,{variant:"outlined",class:"mr-3",onClick:e},{default:n((()=>[Je])),_:2},1032,["onClick"]),o(b,{color:"primary",onClick:e},{default:n((()=>[Oe])),_:2},1032,["onClick"]),o(B)])),_:2},1024)])),_:1})])),_:1})])}]]);const Ue={viewBox:"0 0 24 24"},qe=[k("path",{fill:"currentColor",d:"M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3Z"},null,-1)];var Ge={name:"MdiFullscreen",render:function(e,l){return _(),h("svg",Ue,qe)}};const Ne={viewBox:"0 0 24 24"},Re=[k("path",{fill:"currentColor",d:"M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3Z"},null,-1)];var $e={name:"MdiFullscreenExit",render:function(e,l){return _(),h("svg",Ne,Re)}};const Ke=p({setup(){const e=C(!1);return{fullscreen:e,toggle:()=>e.value=!e.value}}}),Le=c("设置 "),Qe=c("fullscreen"),Xe=c(" 对话框将会铺满全屏。"),Ye=c("Dialog"),el=c("右上键关闭弹窗和打开全屏");var ll=l(Ke,[["render",function(e,l,c,d,E,p){const C=f,v=D,m=s,g=y,F=x,b=u,B=A,_=M;return t(),a("div",null,[o(_,{title:"全屏",slug:"全屏",file:"/packages/veno-ui/src/components/dialog/docs/fullscreen.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20%3Afullscreen%3D%22fullscreen%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20color%3D%22primary%22%20%3Aheight%3D%22fullscreen%20%3F%2042%20%3A%2032%22%20title%3D%22%E6%A0%87%E9%A2%98%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aicon%3D%22fullscreen%20%3F%20'mdi-fullscreen-exit'%20%3A%20'mdi-fullscreen'%22%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22toggle%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20icon%3D%22mdi-close%22%20%40click%3D%22close%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cve-card-text%3E%E5%8F%B3%E4%B8%8A%E9%94%AE%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97%E5%92%8C%E6%89%93%E5%BC%80%E5%85%A8%E5%B1%8F%3C%2Fve-card-text%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20fullscreen%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20fullscreen%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20fullscreen.value%20%3D%20!fullscreen.value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[o(v,null,{default:n((()=>[Le,o(C,{color:"secondary",inline:""},{default:n((()=>[Qe])),_:1}),Xe])),_:1})])),default:n((()=>[o(B,{fullscreen:e.fullscreen},{activator:n((({props:e})=>[o(m,i(r(e)),{default:n((()=>[Ye])),_:2},1040)])),default:n((({close:l})=>[o(b,null,{default:n((()=>[o(g,{color:"primary",height:e.fullscreen?42:32,title:"标题"},{default:n((()=>[o(m,{icon:e.fullscreen?$e:Ge,onClick:e.toggle},null,8,["icon","onClick"]),o(m,{icon:Z,onClick:l},null,8,["onClick"])])),_:2},1032,["height"]),o(F,null,{default:n((()=>[el])),_:1})])),_:2},1024)])),_:1},8,["fullscreen"])])),_:1})])}]]);const tl=p({setup(){const e=C(!1);return{fullscreen:e,toggle:()=>e.value=!e.value}}}),al=c("配合 "),ol=c("ve-draggable"),nl=c(" 组件实现一个可拖动工具栏的对话框。"),il=c("Dialog"),rl=c("一些例子文本内容");var cl=l(tl,[["render",function(e,l,c,d,E,p){const C=f,F=D,b=s,B=y,_=x,h=u,k=A,V=w,H=M;return t(),a("div",null,[o(H,{title:"可拖动的对话框",slug:"可拖动的对话框",file:"/packages/veno-ui/src/components/dialog/docs/draggable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-draggable%20%0A%20%20%20%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%0A%20%20%20%20%3Adraggable%3D%22!fullscreen%22%0A%20%20%3E%0A%20%20%20%20%3Cve-dialog%20%0A%20%20%20%20%20%20persistent%20%0A%20%20%20%20%20%20no-click-animation%20%0A%20%20%20%20%20%20%3Ascrim%3D%22false%22%20%0A%20%20%20%20%20%20%3Ascroll-strategy%3D%22fullscreen%20%3F%20'block'%20%3A%20'none'%22%0A%20%20%20%20%20%20%3Acontent-style%3D%22contentStyle%22%0A%20%20%20%20%20%20%3Afullscreen%3D%22fullscreen%22%0A%20%20%20%20%20%20scrollable%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-toolbar%20title%3D%22%E6%A0%87%E9%A2%98%22%20height%3D%2232%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aicon%3D%22fullscreen%20%3F%20'mdi-fullscreen-exit'%20%3A%20'mdi-fullscreen'%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22toggle%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20icon%3D%22mdi-close%22%20%40click%3D%22close%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card-text%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card-text%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%3C%2Fve-draggable%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20fullscreen%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20fullscreen%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20fullscreen.value%20%3D%20!fullscreen.value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[o(F,null,{default:n((()=>[al,o(C,{color:"secondary",inline:""},{default:n((()=>[ol])),_:1}),nl])),_:1})])),default:n((()=>[o(V,{draggable:!e.fullscreen},{default:n((({draggable:l,contentStyle:c})=>[o(k,{persistent:"","no-click-animation":"",scrim:!1,"scroll-strategy":e.fullscreen?"block":"none","content-style":c,fullscreen:e.fullscreen,scrollable:""},{activator:n((({props:e})=>[o(b,i(r(e)),{default:n((()=>[il])),_:2},1040)])),default:n((({close:i})=>[o(h,null,{default:n((()=>[o(B,g({title:"标题",height:"32",color:"primary"},l),{default:n((()=>[o(b,{icon:e.fullscreen?$e:Ge,onClick:e.toggle},null,8,["icon","onClick"]),o(b,{icon:Z,onClick:i},null,8,["onClick"])])),_:2},1040),o(_,null,{default:n((()=>[(t(),a(v,null,m(100,(e=>(t(),a(v,null,[rl],64)))),64))])),_:1})])),_:2},1024)])),_:2},1032,["scroll-strategy","content-style","fullscreen"])])),_:1},8,["draggable"])])),_:1})])}]]);const sl=c("对话框 Dialog"),dl=c("对话框是 "),ul=c("modal"),Al=c(" 窗体的一种类型，它通常在应用程序内容之前呈现，来提供一些关键信息，或者要求用户做出决策。 对话框出现的时候会禁用应用程序的所有功能，只有被确认、被取消或已采取其他必要的操作时，对话框会从屏幕中消失。"),El=c("对话框会带有目的性地打断工作流程，所以请您谨慎使用。"),pl=c("演示"),Cl=c("API"),vl=c("Dialog Props"),ml=c("Dialog Events"),fl=(e("__pageData",{title:"对话框 Dialog",headers:[{level:1,title:"对话框 Dialog",slug:"对话框-dialog"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"点击外面不关闭",slug:"点击外面不关闭"},{level:3,title:"一个表单对话框",slug:"一个表单对话框"},{level:3,title:"使用 v-model 控制显示",slug:"使用-v-model-控制显示"},{level:3,title:"可滚动",slug:"可滚动"},{level:3,title:"嵌套",slug:"嵌套"},{level:3,title:"从菜单弹出的对话框",slug:"从菜单弹出的对话框"},{level:3,title:"最大宽度高度",slug:"最大宽度高度"},{level:3,title:"全屏",slug:"全屏"},{level:3,title:"可拖动的对话框",slug:"可拖动的对话框"},{level:2,title:"API",slug:"api"},{level:3,title:"Dialog Props",slug:"dialog-props"},{level:3,title:"Dialog Events",slug:"dialog-events"}],frontmatter:{category:"Feedback 反馈组件"}}),{});e("default",Object.assign(fl,{setup:e=>(e,l)=>{const i=V,r=f,s=D,d=H,u=W,A=z,E=P,p=j;return t(),a("div",null,[o(i,{id:"对话框-dialog",tabindex:"-1"},{default:n((()=>[sl])),_:1}),o(s,null,{default:n((()=>[dl,o(r,{color:"secondary",inline:""},{default:n((()=>[ul])),_:1}),Al])),_:1}),o(s,null,{default:n((()=>[El])),_:1}),o(d,{id:"演示",tabindex:"-1"},{default:n((()=>[pl])),_:1}),o(A,null,{default:n((()=>[o(u,{cols:"12",md:"12"},{default:n((()=>[o(A,null,{default:n((()=>[o(u,{cols:"12"},{default:n((()=>[o(S(q))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(K))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(ee))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(ne))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(ge))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(ye))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(He))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(Te))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(ll))])),_:1}),o(u,{cols:"12"},{default:n((()=>[o(S(cl))])),_:1})])),_:1})])),_:1})])),_:1}),o(d,{id:"api",tabindex:"-1"},{default:n((()=>[Cl])),_:1}),o(E,{id:"dialog-props",tabindex:"-1"},{default:n((()=>[vl])),_:1}),o(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"fullscreen",default:!1,type:"boolean",descriptions:[{language:"zh",name:"fullscreen",description:"全屏",source:"dialog"}],description:"全屏"},{name:"id",type:"string",descriptions:[{language:"zh",name:"id",description:"ID",source:"dialog"}],description:"ID"},{name:"model-value",default:!1,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"是否显示",source:"dialog"}],description:"是否显示"},{name:"scrollable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"scrollable",description:"是否可以滚动",source:"dialog"}],description:"是否可以滚动"},{name:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可以拖拽的",source:"dialog"}],description:"可以拖拽的"},{name:"transition",source:"transition",default:{component:{name:"VeDialogTransition",props:{}}},type:"boolean | string | object",descriptions:[{language:"zh",name:"transition",description:"过渡动画",source:"transition"}],description:"过渡动画"}]},{"item.type":n((({item:e})=>[o(r,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[c(I(e.type),1)])),_:2},1024)])),"item.default":n((({item:e})=>[o(r,{color:"secondary",inline:"",class:"p-1"},{default:n((()=>[c(I("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),o(E,{id:"dialog-events",tabindex:"-1"},{default:n((()=>[ml])),_:1}),o(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
