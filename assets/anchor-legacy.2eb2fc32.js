System.register(["./Demo-legacy.37d8aab0.js","./index-legacy.0991e0f0.js","./vendor-legacy.f35e774c.js","./code-legacy.2b433194.js"],(function(t){"use strict";var e,o,n,r,a,c,u,l,s,A,i,C,p,f,d,m,v,D,b,E;return{setters:[function(t){e=t._},function(t){o=t._,n=t.B,r=t.T,a=t.C,c=t.R},function(t){u=t.b,l=t.r,s=t.O,A=t.U,i=t.j,C=t.Q,p=t.F,f=t.V,d=t.P,m=t.a5,v=t.a6,D=t.R,b=t.S,E=t.W},function(){}],execute:function(){var h=u({setup:function(){return{anchors:l(["top start","top","top end","start top",null,"end top","start",null,"end","start bottom",null,"end bottom","bottom start","bottom","bottom end"])}}});t("__pageData",{title:"自定义锚点",headers:[],frontmatter:{}}),t("default",o(h,[["render",function(t,o,u,l,h,B){var y=n,F=r,_=a,g=c,x=e;return s(),A("div",null,[i(x,{title:"自定义锚点",slug:"自定义锚点",file:"/packages/veno-ui/src/components/tooltip/docs/anchor.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Ctemplate%0A%20%20%20%20%20%20v-for%3D%22(anchor%2C%20key)%20in%20anchors%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-col%20cols%3D%224%22%20class%3D%22text-center%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20%20%20v-if%3D%22anchor%22%0A%20%20%20%20%20%20%20%20%20%20%3Akey%3D%22key%22%0A%20%20%20%20%20%20%20%20%20%20%3Aanchor%3D%22anchor%22%0A%20%20%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%7B%7B%20anchor%20%7D%7D%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%20%20%3C%2Fve-col%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20anchors%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20'top%20start'%2C%20'top'%2C%20'top%20end'%2C%0A%20%20%20%20%20%20%20%20%20%20'start%20top'%2C%20null%2C%20'end%20top'%2C%0A%20%20%20%20%20%20%20%20%20%20'start'%2C%20null%2C%20'end'%2C%0A%20%20%20%20%20%20%20%20%20%20'start%20bottom'%2C%20null%2C%20'end%20bottom'%2C%0A%20%20%20%20%20%20%20%20%20%20'bottom%20start'%2C%20'bottom'%2C%20'bottom%20end'%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:C((function(){return[i(g,null,{default:C((function(){return[(s(!0),A(p,null,f(t.anchors,(function(t,e){return s(),d(_,{cols:"4",class:"text-center"},{default:C((function(){return[t?(s(),d(F,{key:e,anchor:t,text:"提示"},{activator:C((function(e){var o=e.props;return[i(y,m(v(o)),{default:C((function(){return[D(b(t),1)]})),_:2},1040)]})),_:2},1032,["anchor"])):E("",!0)]})),_:2},1024)})),256))]})),_:1})]})),_:1})])}]]))}}}));