System.register(["./app-legacy.dccf8ff6.js","./Demo-legacy.e8e7275f.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./close-legacy.cfd2e2c4.js"],(function(e){"use strict";var l,t,a,o,n,i,r,c,s,d,u,A,E,p,C,v,m,f,D,g,F,b,B,_,h,k,y,x,w,V,H,j,z,P,S,I,W,M,Z;return{setters:[function(e){l=e.q,t=e.s,a=e.u,o=e.v,n=e.au,i=e.av,r=e.x,c=e.G,s=e.S,d=e._,u=e.aw,A=e.ax,E=e.y,p=e.z,C=e.aj,v=e.ak,m=e.C,f=e.P,D=e.a7,g=e.h,F=e.j,b=e.ay,B=e.o,_=e.c,h=e.n,k=e.az,y=e.Z,x=e.aA,w=e.H,V=e.b,H=e.R,j=e.l,z=e.T,P=e.I,S=e.J,I=e.k},function(e){W=e._},function(e){M=e._},function(e){Z=e._}],execute:function(){const J={},O=r("Dialog"),T=r("取消"),U=r("确认");var q=M(J,[["render",function(e,r,A,E,p,C){const v=c,m=s,f=d,D=u,g=W;return l(),t("div",null,[a(g,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/dialog/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:o((()=>[a(D,null,{activator:o((({props:e})=>[a(v,n(i(e)),{default:o((()=>[O])),_:2},1040)])),default:o((({close:e})=>[a(f,{title:"标题",text:"一些例子文本内容"},{actions:o((()=>[a(m),a(v,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[T])),_:2},1032,["onClick"]),a(v,{color:"primary",onClick:e},{default:o((()=>[U])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1})])}]]);const G={},N=r("Dialog"),R=r("取消"),K=r("确认");var L=M(G,[["render",function(e,r,A,E,p,C){const v=c,m=s,f=d,D=u,g=W;return l(),t("div",null,[a(g,{title:"点击外面不关闭",slug:"点击外面不关闭",file:"/packages/veno-ui/src/components/dialog/docs/persistent.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20persistent%20draggable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%22%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%20%23actions%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:o((()=>[a(D,{persistent:"",draggable:""},{activator:o((({props:e})=>[a(v,n(i(e)),{default:o((()=>[N])),_:2},1040)])),default:o((({close:e})=>[a(f,{title:"标题",text:"一些例子文本内容"},{actions:o((()=>[a(m),a(v,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[R])),_:2},1032,["onClick"]),a(v,{color:"primary",onClick:e},{default:o((()=>[K])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1})])}]]);const Q={},X=r("Dialog"),Y=r("取消"),$=r("确认");var ee=M(Q,[["render",function(e,r,E,p,C,v){const m=c,f=A,D=s,g=d,F=u,b=W;return l(),t("div",null,[a(b,{title:"一个表单对话框",slug:"一个表单对话框",file:"/packages/veno-ui/src/components/dialog/docs/form.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E4%BF%AE%E6%94%B9%E8%B5%84%E6%96%99%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-form%0A%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22pt-3%20px-5%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aitems%3D%22%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E8%B4%A6%E5%8F%B7'%2C%20name%3A%20'username'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%AF%86%E7%A0%81'%2C%20name%3A%20'password'%2C%20type%3A%20'password'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%98%B5%E7%A7%B0'%2C%20name%3A%20'nick'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:o((()=>[a(F,null,{activator:o((({props:e})=>[a(m,n(i(e)),{default:o((()=>[X])),_:2},1040)])),default:o((({close:e})=>[a(g,{title:"修改资料"},{text:o((()=>[a(f,{class:"pt-3 px-5",items:[{label:"账号",name:"username",placeholder:"请输入"},{label:"密码",name:"password",type:"password",placeholder:"请输入"},{label:"昵称",name:"nick",placeholder:"请输入"}]})])),actions:o((()=>[a(D),a(m,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[Y])),_:2},1032,["onClick"]),a(m,{color:"primary",onClick:e},{default:o((()=>[$])),_:2},1032,["onClick"]),a(D)])),_:2},1024)])),_:1})])),_:1})])}]]);const le=E({setup:()=>({show:p(!1)})}),te=r("Dialog"),ae=r("取消"),oe=r("确认");var ne=M(le,[["render",function(e,n,i,r,A,E){const p=c,C=s,v=d,m=u,f=W;return l(),t("div",null,[a(f,{title:"使用 v-model 控制显示",slug:"使用-v-model-控制显示",file:"/packages/veno-ui/src/components/dialog/docs/v-model.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%20%40click%3D%22show%20%3D%20true%22%3EDialog%3C%2Fve-button%3E%0A%0A%20%20%3Cve-dialog%20v-model%3D%22show%22%3E%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[a(p,{onClick:n[0]||(n[0]=l=>e.show=!0)},{default:o((()=>[te])),_:1}),a(m,{modelValue:e.show,"onUpdate:modelValue":n[1]||(n[1]=l=>e.show=l)},{default:o((({close:e})=>[a(v,{title:"标题",text:"一些例子文本内容"},{actions:o((()=>[a(C),a(p,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[ae])),_:2},1032,["onClick"]),a(p,{color:"primary",onClick:e},{default:o((()=>[oe])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["modelValue"])])),_:1})])}]]);const ie={},re=r("设置 "),ce=r("scrollable"),se=r(" 配合 "),de=r("ve-card"),ue=r(" 和 "),Ae=r("ve-card-text"),Ee=r(" 可以很简单的获得一个只有中间内容滚动的对话框，此示例使用的是 "),pe=r("text"),Ce=r(" 插槽。"),ve=r("Dialog"),me=r("一些例子文本内容"),fe=r("取消"),De=r("确认");var ge=M(ie,[["render",function(e,r,A,E,p,D){const g=m,F=f,b=c,B=s,_=d,h=u,k=W;return l(),t("div",null,[a(k,{title:"可滚动",slug:"可滚动",file:"/packages/veno-ui/src/components/dialog/docs/scrollable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%22%20divided%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:o((()=>[a(F,null,{default:o((()=>[re,a(g,{color:"secondary",inline:""},{default:o((()=>[ce])),_:1}),se,a(g,{color:"secondary",inline:""},{default:o((()=>[de])),_:1}),ue,a(g,{color:"secondary",inline:""},{default:o((()=>[Ae])),_:1}),Ee,a(g,{color:"secondary",inline:""},{default:o((()=>[pe])),_:1}),Ce])),_:1})])),default:o((()=>[a(h,{scrollable:""},{activator:o((({props:e})=>[a(b,n(i(e)),{default:o((()=>[ve])),_:2},1040)])),default:o((({close:e})=>[a(_,{title:"标题标题标题",divided:""},{text:o((()=>[(l(),t(C,null,v(100,(e=>(l(),t(C,null,[me],64)))),64))])),actions:o((()=>[a(B),a(b,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[fe])),_:2},1032,["onClick"]),a(b,{color:"primary",onClick:e},{default:o((()=>[De])),_:2},1032,["onClick"]),a(B)])),_:2},1024)])),_:1})])),_:1})])}]]);const Fe={},be=r("嵌套的可滚动内容在子对话框弹出的时候会禁用滚动。"),Be=r("Dialog"),_e=r("Dialog"),he=r("占位专用文字"),ke=r("占位专用文字");var ye=M(Fe,[["render",function(e,r,s,A,E,p){const m=f,g=c,F=d,b=u,B=W;return l(),t("div",null,[a(B,{title:"嵌套",slug:"嵌套",file:"/packages/veno-ui/src/components/dialog/docs/nested.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-card%20%23text%3E%0A%20%20%20%20%20%20%3Cve-dialog%20scrollable%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%20color%3D%22primary%22%3EDialog%3C%2Fve-button%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cve-card%20height%3D%22200%22%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:o((()=>[a(m,null,{default:o((()=>[be])),_:1})])),default:o((()=>[a(b,{scrollable:""},{activator:o((({props:e})=>[a(g,n(i(e)),{default:o((()=>[Be])),_:2},1040)])),default:o((()=>[a(F,null,{text:o((()=>[a(b,{scrollable:""},{activator:o((({props:e})=>[a(g,D(e,{color:"primary"}),{default:o((()=>[_e])),_:2},1040),(l(),t(C,null,v(100,(e=>(l(),t(C,null,[he],64)))),64))])),default:o((()=>[a(F,{height:"200"},{text:o((()=>[(l(),t(C,null,v(100,(e=>(l(),t(C,null,[ke],64)))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}]]);const xe=E({setup:()=>({show:p(!1)})}),we=r("Hover"),Ve=r("占位专用文字");var He=M(xe,[["render",function(e,r,s,A,E,p){const m=c,f=g,D=F,B=b,_=d,h=u,k=W;return l(),t("div",null,[a(k,{title:"从菜单弹出的对话框",slug:"从菜单弹出的对话框",file:"/packages/veno-ui/src/components/dialog/docs/menu-dialog.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20open-on-hover%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EHover%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%3Cve-list-item%20color%3D%22primary%22%20text%3D%22Dialog%22%20%40click%3D%22show%20%3D%20true%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-list%3E%0A%20%20%3C%2Fve-menu%3E%0A%0A%20%20%3Cve-dialog%20v-model%3D%22show%22%20scrollable%3E%0A%20%20%20%20%3Cve-card%20height%3D%22200%22%20%23text%3E%0A%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E5%8D%A0%E4%BD%8D%E4%B8%93%E7%94%A8%E6%96%87%E5%AD%97%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[a(B,{"open-on-hover":""},{activator:o((({props:e})=>[a(m,n(i(e)),{default:o((()=>[we])),_:2},1040)])),default:o((()=>[a(D,null,{default:o((()=>[a(f,{color:"primary",text:"Dialog",onClick:r[0]||(r[0]=l=>e.show=!0)})])),_:1})])),_:1}),a(h,{modelValue:e.show,"onUpdate:modelValue":r[1]||(r[1]=l=>e.show=l),scrollable:""},{default:o((()=>[a(_,{height:"200"},{text:o((()=>[(l(),t(C,null,v(100,(e=>(l(),t(C,null,[Ve],64)))),64))])),_:1})])),_:1},8,["modelValue"])])),_:1})])}]]);const je={},ze=r("通过 "),Pe=r("max-width"),Se=r(" 、"),Ie=r("max-height"),We=r(" 可以调整最大宽高的限制。"),Me=r("Dialog"),Ze=r("一些例子文本内容"),Je=r("取消"),Oe=r("确认");var Te=M(je,[["render",function(e,r,A,E,p,D){const g=m,F=f,b=c,B=s,_=d,h=u,k=W;return l(),t("div",null,[a(k,{title:"最大宽度高度",slug:"最大宽度高度",file:"/packages/veno-ui/src/components/dialog/docs/dimension.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20scrollable%20max-width%3D%22800%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%E6%A0%87%E9%A2%98%22%20divided%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20variant%3D%22outlined%22%20class%3D%22mr-3%22%20%40click%3D%22close%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22close%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{prepend:o((()=>[a(F,null,{default:o((()=>[ze,a(g,{color:"secondary",inline:""},{default:o((()=>[Pe])),_:1}),Se,a(g,{color:"secondary",inline:""},{default:o((()=>[Ie])),_:1}),We])),_:1})])),default:o((()=>[a(h,{scrollable:"","max-width":"800"},{activator:o((({props:e})=>[a(b,n(i(e)),{default:o((()=>[Me])),_:2},1040)])),default:o((({close:e})=>[a(_,{title:"标题标题标题",divided:""},{text:o((()=>[(l(),t(C,null,v(100,(e=>(l(),t(C,null,[Ze],64)))),64))])),actions:o((()=>[a(B),a(b,{variant:"outlined",class:"mr-3",onClick:e},{default:o((()=>[Je])),_:2},1032,["onClick"]),a(b,{color:"primary",onClick:e},{default:o((()=>[Oe])),_:2},1032,["onClick"]),a(B)])),_:2},1024)])),_:1})])),_:1})])}]]);const Ue={viewBox:"0 0 24 24"},qe=[h("path",{fill:"currentColor",d:"M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3Z"},null,-1)];var Ge={name:"MdiFullscreen",render:function(e,l){return B(),_("svg",Ue,qe)}};const Ne={viewBox:"0 0 24 24"},Re=[h("path",{fill:"currentColor",d:"M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3Z"},null,-1)];var Ke={name:"MdiFullscreenExit",render:function(e,l){return B(),_("svg",Ne,Re)}};const Le=E({setup(){const e=p(!1);return{fullscreen:e,toggle:()=>e.value=!e.value}}}),Qe=r("设置 "),Xe=r("fullscreen"),Ye=r(" 对话框将会铺满全屏。"),$e=r("Dialog"),el=r("右上键关闭弹窗和打开全屏");var ll=M(Le,[["render",function(e,r,s,A,E,p){const C=m,v=f,D=c,g=k,F=y,b=d,B=u,_=W;return l(),t("div",null,[a(_,{title:"全屏",slug:"全屏",file:"/packages/veno-ui/src/components/dialog/docs/fullscreen.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%20%3Afullscreen%3D%22fullscreen%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-toolbar%20color%3D%22primary%22%20%3Aheight%3D%22fullscreen%20%3F%2042%20%3A%2032%22%20title%3D%22%E6%A0%87%E9%A2%98%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aicon%3D%22fullscreen%20%3F%20'mdi-fullscreen-exit'%20%3A%20'mdi-fullscreen'%22%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22toggle%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20icon%3D%22mdi-close%22%20%40click%3D%22close%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cve-card-text%3E%E5%8F%B3%E4%B8%8A%E9%94%AE%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97%E5%92%8C%E6%89%93%E5%BC%80%E5%85%A8%E5%B1%8F%3C%2Fve-card-text%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20fullscreen%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20fullscreen%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20fullscreen.value%20%3D%20!fullscreen.value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:o((()=>[a(v,null,{default:o((()=>[Qe,a(C,{color:"secondary",inline:""},{default:o((()=>[Xe])),_:1}),Ye])),_:1})])),default:o((()=>[a(B,{fullscreen:e.fullscreen},{activator:o((({props:e})=>[a(D,n(i(e)),{default:o((()=>[$e])),_:2},1040)])),default:o((({close:l})=>[a(b,null,{default:o((()=>[a(g,{color:"primary",height:e.fullscreen?42:32,title:"标题"},{default:o((()=>[a(D,{icon:e.fullscreen?Ke:Ge,onClick:e.toggle},null,8,["icon","onClick"]),a(D,{icon:Z,onClick:l},null,8,["onClick"])])),_:2},1032,["height"]),a(F,null,{default:o((()=>[el])),_:1})])),_:2},1024)])),_:1},8,["fullscreen"])])),_:1})])}]]);const tl=E({setup(){const e=p(!1);return{fullscreen:e,toggle:()=>e.value=!e.value}}}),al=r("配合 "),ol=r("ve-draggable"),nl=r(" 组件实现一个可拖动工具栏的对话框。"),il=r("Dialog"),rl=r("一些例子文本内容");var cl=M(tl,[["render",function(e,r,s,A,E,p){const g=m,F=f,b=c,B=k,_=y,h=d,w=u,V=x,H=W;return l(),t("div",null,[a(H,{title:"可拖动的对话框",slug:"可拖动的对话框",file:"/packages/veno-ui/src/components/dialog/docs/draggable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-draggable%20%0A%20%20%20%20%23default%3D%22%7B%20draggable%2C%20contentStyle%20%7D%22%0A%20%20%20%20%3Adraggable%3D%22!fullscreen%22%0A%20%20%3E%0A%20%20%20%20%3Cve-dialog%20%0A%20%20%20%20%20%20persistent%20%0A%20%20%20%20%20%20no-click-animation%20%0A%20%20%20%20%20%20%3Ascrim%3D%22false%22%20%0A%20%20%20%20%20%20%3Ascroll-strategy%3D%22fullscreen%20%3F%20'block'%20%3A%20'none'%22%0A%20%20%20%20%20%20%3Acontent-style%3D%22contentStyle%22%0A%20%20%20%20%20%20%3Afullscreen%3D%22fullscreen%22%0A%20%20%20%20%20%20scrollable%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EDialog%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20close%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-toolbar%20title%3D%22%E6%A0%87%E9%A2%98%22%20height%3D%2232%22%20color%3D%22primary%22%20v-bind%3D%22draggable%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aicon%3D%22fullscreen%20%3F%20'mdi-fullscreen-exit'%20%3A%20'mdi-fullscreen'%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40click%3D%22toggle%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20icon%3D%22mdi-close%22%20%40click%3D%22close%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-toolbar%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card-text%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22i%20in%20100%22%3E%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card-text%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%3C%2Fve-draggable%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20fullscreen%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20fullscreen%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20fullscreen.value%20%3D%20!fullscreen.value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:o((()=>[a(F,null,{default:o((()=>[al,a(g,{color:"secondary",inline:""},{default:o((()=>[ol])),_:1}),nl])),_:1})])),default:o((()=>[a(V,{draggable:!e.fullscreen},{default:o((({draggable:r,contentStyle:c})=>[a(w,{persistent:"","no-click-animation":"",scrim:!1,"scroll-strategy":e.fullscreen?"block":"none","content-style":c,fullscreen:e.fullscreen,scrollable:""},{activator:o((({props:e})=>[a(b,n(i(e)),{default:o((()=>[il])),_:2},1040)])),default:o((({close:n})=>[a(h,null,{default:o((()=>[a(B,D({title:"标题",height:"32",color:"primary"},r),{default:o((()=>[a(b,{icon:e.fullscreen?Ke:Ge,onClick:e.toggle},null,8,["icon","onClick"]),a(b,{icon:Z,onClick:n},null,8,["onClick"])])),_:2},1040),a(_,null,{default:o((()=>[(l(),t(C,null,v(100,(e=>(l(),t(C,null,[rl],64)))),64))])),_:1})])),_:2},1024)])),_:2},1032,["scroll-strategy","content-style","fullscreen"])])),_:1},8,["draggable"])])),_:1})])}]]);const sl=r("对话框 Dialog"),dl=r("对话框是 "),ul=r("modal"),Al=r(" 窗体的一种类型，它通常在应用程序内容之前呈现，来提供一些关键信息，或者要求用户做出决策。 对话框出现的时候会禁用应用程序的所有功能，只有被确认、被取消或已采取其他必要的操作时，对话框会从屏幕中消失。"),El=r("对话框会带有目的性地打断工作流程，所以请您谨慎使用。"),pl=r("演示"),Cl=r("API"),vl=r("Dialog Props"),ml=r("Dialog Events"),fl=(e("__pageData",{title:"对话框 Dialog",headers:[{level:1,title:"对话框 Dialog",slug:"对话框-dialog"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"点击外面不关闭",slug:"点击外面不关闭"},{level:3,title:"一个表单对话框",slug:"一个表单对话框"},{level:3,title:"使用 v-model 控制显示",slug:"使用-v-model-控制显示"},{level:3,title:"可滚动",slug:"可滚动"},{level:3,title:"嵌套",slug:"嵌套"},{level:3,title:"从菜单弹出的对话框",slug:"从菜单弹出的对话框"},{level:3,title:"最大宽度高度",slug:"最大宽度高度"},{level:3,title:"全屏",slug:"全屏"},{level:3,title:"可拖动的对话框",slug:"可拖动的对话框"},{level:2,title:"API",slug:"api"},{level:3,title:"Dialog Props",slug:"dialog-props"},{level:3,title:"Dialog Events",slug:"dialog-events"}],frontmatter:{category:"Feedback 反馈组件"}}),{});e("default",Object.assign(fl,{setup:e=>(e,n)=>{const i=w,c=m,s=f,d=V,u=I,A=H,E=j,p=z;return l(),t("div",null,[a(i,{id:"对话框-dialog",tabindex:"-1"},{default:o((()=>[sl])),_:1}),a(s,null,{default:o((()=>[dl,a(c,{color:"secondary",inline:""},{default:o((()=>[ul])),_:1}),Al])),_:1}),a(s,null,{default:o((()=>[El])),_:1}),a(d,{id:"演示",tabindex:"-1"},{default:o((()=>[pl])),_:1}),a(A,null,{default:o((()=>[a(u,{cols:"12",md:"12"},{default:o((()=>[a(A,null,{default:o((()=>[a(u,{cols:"12"},{default:o((()=>[a(P(q))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(L))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(ee))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(ne))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(ge))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(ye))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(He))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(Te))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(ll))])),_:1}),a(u,{cols:"12"},{default:o((()=>[a(P(cl))])),_:1})])),_:1})])),_:1})])),_:1}),a(d,{id:"api",tabindex:"-1"},{default:o((()=>[Cl])),_:1}),a(E,{id:"dialog-props",tabindex:"-1"},{default:o((()=>[vl])),_:1}),a(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"fullscreen",default:!1,type:"boolean",descriptions:[{language:"zh",name:"fullscreen",description:"全屏",source:"dialog"}],description:"全屏"},{name:"id",type:"string",descriptions:[{language:"zh",name:"id",description:"ID",source:"dialog"}],description:"ID"},{name:"model-value",default:!1,type:"boolean",descriptions:[{language:"zh",name:"modelValue",description:"是否显示",source:"dialog"}],description:"是否显示"},{name:"scrollable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"scrollable",description:"是否可以滚动",source:"dialog"}],description:"是否可以滚动"},{name:"draggable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"draggable",description:"可以拖拽的",source:"dialog"}],description:"可以拖拽的"},{name:"transition",source:"transition",default:{component:{name:"VeDialogTransition",props:{}}},type:"boolean | string | object",descriptions:[{language:"zh",name:"transition",description:"过渡动画",source:"transition"}],description:"过渡动画"}]},{"item.type":o((({item:e})=>[a(c,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[r(S(e.type),1)])),_:2},1024)])),"item.default":o((({item:e})=>[a(c,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[r(S("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),a(E,{id:"dialog-events",tabindex:"-1"},{default:o((()=>[ml])),_:1}),a(p,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
