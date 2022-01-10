System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,n,l,a,r,u,i,o,p,d,s;return{setters:[function(e){t=e._},function(e){n=e.d,l=e.r,a=e.R,r=e.V,u=e.Y,i=e.b,o=e.U,p=e.M,d=e.m,s=e.u}],execute:function(){var c=n({setup:function(){return{value:l("")}}}),f=p(" 基本用法 "),m=t(c,[["render",function(e,t,n,l,p,d){var s=a("ve-input"),c=a("demo");return r(),u("div",null,[i(c,{file:"/packages/veno-ui/src/components/input/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%0A%20%20%20%20v-model%3D%22value%22%20%0A%20%20%20%20placeholder%3D%22%E5%9F%BA%E6%9C%AC%E7%9A%84%20Input%22%0A%20%20%20%20clearable%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref('')%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:o((function(){return[f]})),default:o((function(){return[i(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),placeholder:"基本的 Input",clearable:""},null,8,["modelValue"])]})),_:1})])}]]),A={},v=p(" 自动调整尺寸 "),E=t(A,[["render",function(e,t,n,l,p,d){var s=a("ve-input"),c=a("ve-col"),f=a("ve-row"),m=a("demo");return r(),u("div",null,[i(m,{file:"/packages/veno-ui/src/components/input/docs/autogrow.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%20cols%3D%2212%22%3E%0A%20%20%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%20%20%20%20auto-grow%0A%20%20%20%20%20%20%20%20rows%3D%221%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%87%AA%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B0%BA%E5%AF%B8%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[v]})),default:o((function(){return[i(f,null,{default:o((function(){return[i(c,{cols:"12"},{default:o((function(){return[i(s,{type:"textarea","auto-grow":"",rows:"1",placeholder:"自动调整尺寸"})]})),_:1})]})),_:1})]})),_:1})])}]]),b={},y=p(" 例子1 "),g=t(b,[["render",function(e,t,n,l,p,s){var c=a("ve-icon"),f=a("ve-tooltip"),m=a("ve-input"),A=a("ve-grid"),v=a("demo");return r(),u("div",null,[i(v,{file:"/packages/veno-ui/src/components/input/docs/case1.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20%3Acol-props%3D%22%7B%20cols%3A%2012%20%7D%22%3E%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22%E8%83%8C%E6%99%AF%E8%89%B2%22%0A%20%20%20%20%20%20prefix%3D%22Color%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%20RGBA%20%2F%20HSVA%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20hide-details%0A%20%20%20%20%20%20%23suffix%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20text%3D%22%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%20%20anchor%3D%22top%22%0A%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-icon%20v-bind%3D%22props%22%20icon%3D%22veno-ui%3A%24info%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%3C%2Fve-input%3E%0A%0A%20%20%20%20%3Cve-grid%20%3Acol-props%3D%22%7B%20cols%3A%206%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E4%B8%8A%E8%BE%B9%E8%B7%9D%22%20disabled%20placeholder%3D%22Disabled%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E5%8F%B3%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E4%B8%8B%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%20%20%3Cve-input%20label%3D%22%E5%B7%A6%E8%BE%B9%E8%B7%9D%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%20%20%3C%2Fve-grid%3E%0A%20%20%3C%2Fve-grid%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[y]})),default:o((function(){return[i(A,{"col-props":{cols:12}},{default:o((function(){return[i(m,{label:"背景色",prefix:"Color",placeholder:"请输入 RGBA / HSVA",clearable:"","hide-details":""},{suffix:o((function(){return[i(f,{text:"提示",anchor:"top"},{activator:o((function(e){var t=e.props;return[i(c,d(t,{icon:"veno-ui:$info"}),null,16)]})),_:1})]})),_:1}),i(A,{"col-props":{cols:6}},{default:o((function(){return[i(m,{label:"上边距",disabled:"",placeholder:"Disabled",type:"number","hide-details":""}),i(m,{label:"右边距",type:"number","hide-details":""}),i(m,{label:"下边距",type:"number","hide-details":""}),i(m,{label:"左边距",type:"number","hide-details":""})]})),_:1})]})),_:1})]})),_:1})])}]]),C={},D=p(" 插槽 "),x=p("Append"),h=p("Prefix"),B=p("Prepend"),F=t(C,[["render",function(e,t,n,l,p,d){var s=a("ve-button"),c=a("ve-input"),f=a("demo");return r(),u("div",null,[i(f,{file:"/packages/veno-ui/src/components/input/docs/slots.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-input%0A%20%20%20%20placeholder%3D%22Input...%22%0A%20%20%20%20hide-details%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23append%3EAppend%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23prefix%3EPrefix%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20size%3D%22x-small%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20text%3D%22Suffix%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23prepend%3EPrepend%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-input%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[D]})),default:o((function(){return[i(c,{placeholder:"Input...","hide-details":""},{append:o((function(){return[x]})),prefix:o((function(){return[h]})),suffix:o((function(){return[i(s,{size:"x-small",color:"primary",text:"Suffix"})]})),prepend:o((function(){return[B]})),_:1})]})),_:1})])}]]),_=p("输入框 Input"),w=p("演示"),I=p("API"),P=p("Input Props"),V=p("Input Events"),k=(e("__pageData",{title:"输入框 Input",headers:[{level:1,title:"输入框 Input",slug:"输入框-input"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"自动调整尺寸",slug:"自动调整尺寸"},{level:3,title:"例子1",slug:"例子1"},{level:3,title:"插槽",slug:"插槽"},{level:2,title:"API",slug:"api"},{level:3,title:"Input Props",slug:"input-props"},{level:3,title:"Input Events",slug:"input-events"}],frontmatter:{category:"Form 表单组件"}}),{});e("default",Object.assign(k,{setup:function(e){return function(e,t){var n=a("ve-h1"),l=a("ve-h2"),p=a("ve-col"),d=a("ve-row"),c=a("ve-h3"),f=a("ve-table");return r(),u("div",null,[i(n,{id:"输入框-input",tabindex:"-1"},{default:o((function(){return[_]})),_:1}),i(l,{id:"演示",tabindex:"-1"},{default:o((function(){return[w]})),_:1}),i(d,null,{default:o((function(){return[i(p,{cols:"12",md:"6"},{default:o((function(){return[i(d,null,{default:o((function(){return[i(p,{cols:"12"},{default:o((function(){return[i(s(m))]})),_:1}),i(p,{cols:"12"},{default:o((function(){return[i(s(E))]})),_:1})]})),_:1})]})),_:1}),i(p,{cols:"12",md:"6"},{default:o((function(){return[i(d,null,{default:o((function(){return[i(p,{cols:"12"},{default:o((function(){return[i(s(g))]})),_:1}),i(p,{cols:"12"},{default:o((function(){return[i(s(F))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),i(l,{id:"api",tabindex:"-1"},{default:o((function(){return[I]})),_:1}),i(c,{id:"input-props",tabindex:"-1"},{default:o((function(){return[P]})),_:1}),i(f,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"id",type:"string"},{name:"autofocus",type:"boolean",default:"false"},{name:"counter",type:"boolean | number | string",default:"false"},{name:"counter-value",type:"function"},{name:"persistent-counter",type:"boolean",default:"false"},{name:"placeholder",type:"string"},{name:"type",type:"string",default:'"text"'},{name:"auto-grow",type:"boolean",default:"false"},{name:"no-resize",type:"boolean",default:"false"},{name:"rows",type:"number | string",default:"5"},{name:"max-rows",type:"number | string"},{name:"append-icon",type:"string"},{name:"prepend-icon",type:"string"},{name:"label",type:"string"},{name:"label-id",type:"string"},{name:"label-width",type:"string | number"},{name:"hide-details",type:"boolean | string",default:"false"},{name:"hint",type:"string"},{name:"messages",type:"array | string",default:"[]"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"},{name:"prefix",type:"string"},{name:"prefix-icon",type:"string"},{name:"suffix",type:"string"},{name:"suffix-icon",type:"string"},{name:"clearable",type:"boolean",default:"false"},{name:"clear-icon",type:"string",default:'"veno-ui:$clear"'}]}),i(c,{id:"input-events",tabindex:"-1"},{default:o((function(){return[V]})),_:1}),i(f,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"},{name:"click:control"}]})])}}}))}}}));