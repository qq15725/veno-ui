System.register(["./index-legacy.6c67f7c5.js","./p-legacy.f96c8ed3.js","./vendor-legacy.9e97ed44.js"],(function(e){"use strict";var n,t,o,l,i,a,r,u,c,d,g,f;return{setters:[function(e){n=e._,t=e.B,o=e.S,l=e.a},function(e){i=e.P},function(e){a=e.d,r=e.r,u=e.P,c=e.U,d=e.b,g=e.R,f=e.M}],execute:function(){var A=a({setup:function(){var e=r(!1);return{loading:e,toggle:function(){e.value=!e.value,setTimeout((function(){e.value=!e.value}),2e3)}}}}),s=(e("__pageData",{title:"加载中",headers:[],frontmatter:{}}),f("按钮有加载状态。")),v=f("加载中"),p=f("点我"),D=f("点我");e("default",n(A,[["render",function(e,n,a,r,f,A){var C=i,E=t,m=o,B=l;return u(),c("div",null,[d(B,{title:"加载中",slug:"加载中",file:"/packages/veno-ui/src/components/button/docs/loading.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%20loading%3E%E5%8A%A0%E8%BD%BD%E4%B8%AD%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20color%3D%22primary%22%20prepend-icon%3D%22%24close%22%3E%E7%82%B9%E6%88%91%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20color%3D%22primary%22%20icon%3D%22%24close%22%2F%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20variant%3D%22text%22%3E%E7%82%B9%E6%88%91%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20!loading.value%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20!loading.value%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%202000)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:g((function(){return[d(C,null,{default:g((function(){return[s]})),_:1})]})),default:g((function(){return[d(m,null,{default:g((function(){return[d(E,{loading:""},{default:g((function(){return[v]})),_:1}),d(E,{loading:e.loading,onClick:e.toggle,color:"primary","prepend-icon":"$close"},{default:g((function(){return[p]})),_:1},8,["loading","onClick"]),d(E,{loading:e.loading,onClick:e.toggle,color:"primary",icon:"$close"},null,8,["loading","onClick"]),d(E,{loading:e.loading,onClick:e.toggle,variant:"text"},{default:g((function(){return[D]})),_:1},8,["loading","onClick"])]})),_:1})]})),_:1})])}]]))}}}));
