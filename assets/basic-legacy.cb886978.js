System.register(["./Demo-legacy.b2561142.js","./index-legacy.1349bc2c.js","./dialog-legacy.050e04d4.js","./vendor-legacy.f35e774c.js","./code-legacy.a8ba6f35.js"],(function(t){"use strict";var e,n,a,c,i,r,o,u,l,E,A,s,f;return{setters:[function(t){e=t.C,n=t._},function(t){a=t._,c=t.B,i=t.S},function(t){r=t.D},function(t){o=t.O,u=t.U,l=t.j,E=t.Q,A=t.a5,s=t.a6,f=t.R},function(){}],execute:function(){t("__pageData",{title:"基本用法",headers:[],frontmatter:{}});var v={},d=f("对话框"),C=f("取消"),D=f("确认");t("default",a(v,[["render",function(t,a,f,v,p,m){var g=c,F=i,b=e,B=r,_=n;return o(),u("div",null,[l(_,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/dialog/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{default:E((function(){return[l(B,null,{activator:E((function(t){var e=t.props;return[l(g,A(s(e)),{default:E((function(){return[d]})),_:2},1040)]})),default:E((function(t){var e=t.isActive;return[l(b,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:E((function(){return[l(F),l(g,{class:"mr-3",onClick:function(t){return e.value=!1}},{default:E((function(){return[C]})),_:2},1032,["onClick"]),l(g,{color:"primary",onClick:function(t){return e.value=!1}},{default:E((function(){return[D]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:1})]})),_:1})])}]]))}}}));
