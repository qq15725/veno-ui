System.register(["./Demo-legacy.b2561142.js","./index-legacy.1349bc2c.js","./drag-sort-legacy.7e3df55f.js","./vendor-legacy.f35e774c.js","./code-legacy.a8ba6f35.js"],(function(e){"use strict";var t,r,n,o,u,l,i,A,s,c,a,m,f,d,C,v,E,p;return{setters:[function(e){t=e.C,r=e._},function(e){n=e._,o=e.a,u=e.b,l=e.C,i=e.R},function(e){A=e.D},function(e){s=e.b,c=e.r,a=e.O,m=e.U,f=e.j,d=e.Q,C=e.n,v=e.J,E=e.R,p=e.S},function(){}],execute:function(){var D=s({setup:function(){return{items1:c([1,2,3,4]),items2:c([5,6,7])}}});e("__pageData",{title:"两个列表",headers:[],frontmatter:{}}),e("default",n(D,[["render",function(e,n,s,c,D,g){var _=o,F=A,B=u,y=t,j=l,V=i,b=r;return a(),m("div",null,[f(b,{title:"两个列表",slug:"两个列表",file:"/packages/veno-ui/src/components/drag/docs/sort-two-list.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-drag-sort%0A%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22items1%22%0A%20%20%20%20%20%20%20%20%20%20%20%20group%3D%22group%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20item%2C%20on%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-on%3D%22on%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22cursor%3A%20move%3B%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-drag-sort%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-drag-sort%0A%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22items2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20group%3D%22group%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20item%2C%20on%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-on%3D%22on%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22cursor%3A%20move%3B%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-drag-sort%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items1%3A%20ref(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20%20%20%20%20%20%20items2%3A%20ref(%5B5%2C%206%2C%207%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:d((function(){return[f(V,null,{default:d((function(){return[f(j,{cols:6},{default:d((function(){return[f(y,null,{default:d((function(){return[f(B,null,{default:d((function(){return[f(F,{modelValue:e.items1,"onUpdate:modelValue":n[0]||(n[0]=function(t){return e.items1=t}),group:"group"},{item:d((function(e){var t=e.item,r=e.on;return[f(_,C(v(r),{style:{cursor:"move"}}),{default:d((function(){return[E(p(t),1)]})),_:2},1040)]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),f(j,{cols:6},{default:d((function(){return[f(y,null,{default:d((function(){return[f(B,null,{default:d((function(){return[f(F,{modelValue:e.items2,"onUpdate:modelValue":n[1]||(n[1]=function(t){return e.items2=t}),group:"group"},{item:d((function(e){var t=e.item,r=e.on;return[f(_,C(v(r),{style:{cursor:"move"}}),{default:d((function(){return[E(p(t),1)]})),_:2},1040)]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}]]))}}}));
