System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var n,o,t,i,l,u,r,a,d;return{setters:[function(e){n=e._},function(e){o=e.d,t=e.r,i=e.R,l=e.Y,u=e.b,r=e.U,a=e.V,d=e.M}],execute:function(){var c=o({setup:function(){var e=t(!1);return{loading:e,toggle:function(){e.value=!e.value,setTimeout((function(){e.value=!e.value}),2e3)}}}}),g=(e("__pageData",{title:"加载中",headers:[],frontmatter:{}}),d(" 加载中 ")),A=d("按钮有加载状态。"),v=d("加载中"),f=d("点我"),s=d("点我");e("default",n(c,[["render",function(e,n,o,t,d,c){var D=i("ve-p"),p=i("ve-button"),C=i("ve-grid"),E=i("demo");return a(),l("div",null,[u(E,{file:"/packages/veno-ui/src/components/button/docs/loading.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20dense%3E%0A%20%20%20%20%3Cve-button%20loading%3E%E5%8A%A0%E8%BD%BD%E4%B8%AD%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20color%3D%22primary%22%20prepend-icon%3D%22veno-ui%3A%24close%22%3E%E7%82%B9%E6%88%91%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20color%3D%22primary%22%20icon%3D%22veno-ui%3A%24close%22%2F%3E%0A%20%20%20%20%3Cve-button%20%3Aloading%3D%22loading%22%20%40click%3D%22toggle%22%20variant%3D%22text%22%3E%E7%82%B9%E6%88%91%3C%2Fve-button%3E%0A%20%20%3C%2Fve-grid%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20toggle%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20!loading.value%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20!loading.value%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%202000)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:r((function(){return[g]})),prepend:r((function(){return[u(D,null,{default:r((function(){return[A]})),_:1})]})),default:r((function(){return[u(C,{dense:""},{default:r((function(){return[u(p,{loading:""},{default:r((function(){return[v]})),_:1}),u(p,{loading:e.loading,onClick:e.toggle,color:"primary","prepend-icon":"veno-ui:$close"},{default:r((function(){return[f]})),_:1},8,["loading","onClick"]),u(p,{loading:e.loading,onClick:e.toggle,color:"primary",icon:"veno-ui:$close"},null,8,["loading","onClick"]),u(p,{loading:e.loading,onClick:e.toggle,variant:"text"},{default:r((function(){return[s]})),_:1},8,["loading","onClick"])]})),_:1})]})),_:1})])}]]))}}}));