System.register(["./index-legacy.182ae530.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,l,a,n,o,i,r,d,u,s,m;return{setters:[function(e){t=e._},function(e){l=e.d,a=e.r,n=e.R,o=e.V,i=e.Y,r=e.b,d=e.U,u=e.M,s=e.a2,m=e.u}],execute:function(){var p=l({setup:function(){return{density:a("medium"),direction:a("horizontal"),hideDetails:a(!1),disabled:a(!1),readonly:a(!1)}}}),c=u(" 基本用法 "),f=s("div",{style:{width:"100px"}},null,-1),b=u("提交"),v=t(p,[["render",function(e,t,l,a,u,s){var m=n("ve-radio"),p=n("ve-radio-group"),v=n("ve-switch"),A=n("ve-input"),y=n("ve-select"),g=n("ve-checkbox"),C=n("ve-checkbox-group"),h=n("ve-button"),D=n("ve-form-control"),E=n("ve-form"),x=n("demo");return o(),i("div",null,[r(x,{file:"/packages/veno-ui/src/components/form/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%0A%20%20%20%20%3Adensity%3D%22density%22%0A%20%20%20%20%3Adirection%3D%22direction%22%0A%20%20%20%20label-width%3D%22100%22%0A%20%20%20%20%3Adisabled%3D%22disabled%22%0A%20%20%20%20%3Areadonly%3D%22readonly%22%0A%20%20%20%20%3Ahide-details%3D%22hideDetails%22%0A%20%20%3E%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Density%22%0A%20%20%20%20%20%20v-model%3D%22density%22%0A%20%20%20%20%20%20messages%3D%22Messages%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22compact%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22comfortable%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22medium%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20label%3D%22Direction%22%20v-model%3D%22direction%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-switch%0A%20%20%20%20%20%20label%3D%22Disabled%22%0A%20%20%20%20%20%20v-model%3D%22disabled%22%0A%20%20%20%20%20%20%3Adisabled%3D%22false%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%0A%20%20%20%20%20%20label%3D%22Readonly%22%0A%20%20%20%20%20%20v-model%3D%22readonly%22%0A%20%20%20%20%20%20%3Areadonly%3D%22false%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%20label%3D%22HideDetails%22%20v-model%3D%22hideDetails%22%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22Input%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%2248%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22Textarea%22%0A%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20rows%3D%223%22%0A%20%20%20%20%20%20auto-grow%0A%20%20%20%20%20%20counter%3D%22255%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20label%3D%22Select%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%201%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%202%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%203%20%7D%2C%0A%20%20%20%20%5D%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%20label%3D%22Switch%22%20%2F%3E%0A%0A%20%20%20%20%3Cve-checkbox-group%20label%3D%22Checkbox%22%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%201%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%202%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%203%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-checkbox-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20label%3D%22Radio%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22Radio1%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22Radio2%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prepend%3E%3Cdiv%20style%3D%22width%3A%20100px%3B%22%3E%3C%2Fdiv%3E%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cve-button%3E%E6%8F%90%E4%BA%A4%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20density%3A%20ref('medium')%2C%0A%20%20%20%20%20%20%20%20direction%3A%20ref('horizontal')%2C%0A%20%20%20%20%20%20%20%20hideDetails%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20disabled%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20readonly%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:d((function(){return[c]})),default:d((function(){return[r(E,{density:e.density,direction:e.direction,"label-width":"100",disabled:e.disabled,readonly:e.readonly,"hide-details":e.hideDetails},{default:d((function(){return[r(p,{label:"Density",modelValue:e.density,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.density=t}),messages:"Messages"},{default:d((function(){return[r(m,{label:"compact"}),r(m,{label:"comfortable"}),r(m,{label:"medium"})]})),_:1},8,["modelValue"]),r(p,{label:"Direction",modelValue:e.direction,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.direction=t})},{default:d((function(){return[r(m,{label:"horizontal"}),r(m,{label:"vertical"})]})),_:1},8,["modelValue"]),r(v,{label:"Disabled",modelValue:e.disabled,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.disabled=t}),disabled:!1},null,8,["modelValue"]),r(v,{label:"Readonly",modelValue:e.readonly,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.readonly=t}),readonly:!1},null,8,["modelValue"]),r(v,{label:"HideDetails",modelValue:e.hideDetails,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.hideDetails=t})},null,8,["modelValue"]),r(A,{label:"Input",placeholder:"请输入",clearable:"",counter:"48"}),r(A,{label:"Textarea",type:"textarea",placeholder:"请输入",clearable:"",rows:"3","auto-grow":"",counter:"255"}),r(y,{label:"Select",placeholder:"请选择",items:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}],clearable:""}),r(v,{label:"Switch"}),r(C,{label:"Checkbox"},{default:d((function(){return[r(g,{label:"Checkbox 1"}),r(g,{label:"Checkbox 2"}),r(g,{label:"Checkbox 3"})]})),_:1}),r(p,{label:"Radio"},{default:d((function(){return[r(m,{label:"Radio1"}),r(m,{label:"Radio2"})]})),_:1}),r(D,null,{prepend:d((function(){return[f]})),default:d((function(){return[r(h,null,{default:d((function(){return[b]})),_:1})]})),_:1})]})),_:1},8,["density","direction","disabled","readonly","hide-details"])]})),_:1})])}]]),A=u("表单 Form"),y=u("演示"),g=u("API"),C=s("ul",null,[s("li",null,"表单控件 form-control"),s("li",null,"输入控件 input-control"),s("li",null,"选择控件 selection-control"),s("li",null,"选择组控件 selection-group-control"),s("li",null,"原生控件 native-control")],-1),h=u("Form Props"),D=u("Form Events"),E=u("FormControl Props"),x=u("FormControl Events"),F=u("InputControl Props"),_=u("InputControl Events"),k=u("SelectionControl Props"),V=u("SelectionControl Events"),B=u("SelectionGroupControl Props"),w=u("SelectionGroupControl Events"),S=(e("__pageData",{title:"表单 Form",headers:[{level:1,title:"表单 Form",slug:"表单-form"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Form Props",slug:"form-props"},{level:3,title:"Form Events",slug:"form-events"},{level:3,title:"FormControl Props",slug:"formcontrol-props"},{level:3,title:"FormControl Events",slug:"formcontrol-events"},{level:3,title:"InputControl Props",slug:"inputcontrol-props"},{level:3,title:"InputControl Events",slug:"inputcontrol-events"},{level:3,title:"SelectionControl Props",slug:"selectioncontrol-props"},{level:3,title:"SelectionControl Events",slug:"selectioncontrol-events"},{level:3,title:"SelectionGroupControl Props",slug:"selectiongroupcontrol-props"},{level:3,title:"SelectionGroupControl Events",slug:"selectiongroupcontrol-events"}],frontmatter:{category:"Form 表单组件"}}),{});e("default",Object.assign(S,{setup:function(e){return function(e,t){var l=n("ve-h1"),a=n("ve-h2"),u=n("ve-col"),s=n("ve-row"),p=n("ve-h3"),c=n("ve-table");return o(),i("div",null,[r(l,{id:"表单-form",tabindex:"-1"},{default:d((function(){return[A]})),_:1}),r(a,{id:"演示",tabindex:"-1"},{default:d((function(){return[y]})),_:1}),r(s,null,{default:d((function(){return[r(u,{cols:"12",md:"12"},{default:d((function(){return[r(s,null,{default:d((function(){return[r(u,{cols:"12"},{default:d((function(){return[r(m(v))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),r(a,{id:"api",tabindex:"-1"},{default:d((function(){return[g]})),_:1}),C,r(p,{id:"form-props",tabindex:"-1"},{default:d((function(){return[h]})),_:1}),r(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"label-width",type:"any"},{name:"hide-details",type:"any"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"fast-fail",type:"boolean",default:"false"},{name:"lazy-validation",type:"boolean",default:"false"},{name:"readonly",type:"boolean",default:"false"},{name:"model-value",type:"boolean",default:"false"}]}),r(p,{id:"form-events",tabindex:"-1"},{default:d((function(){return[D]})),_:1}),r(c,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"},{name:"resetValidation"},{name:"reset"},{name:"submit"}]}),r(p,{id:"formcontrol-props",tabindex:"-1"},{default:d((function(){return[E]})),_:1}),r(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"focused",type:"boolean",default:"false"},{name:"append-icon",type:"string"},{name:"prepend-icon",type:"string"},{name:"label",type:"string"},{name:"label-id",type:"string"},{name:"label-width",type:"string | number"},{name:"hide-details",type:"boolean | string",default:"false"},{name:"hint",type:"string"},{name:"messages",type:"array | string",default:"[]"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"}]}),r(p,{id:"formcontrol-events",tabindex:"-1"},{default:d((function(){return[x]})),_:1}),r(c,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"click:prepend"},{name:"click:label"},{name:"click:append"}]}),r(p,{id:"inputcontrol-props",tabindex:"-1"},{default:d((function(){return[F]})),_:1}),r(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"active",type:"boolean",default:"false"},{name:"dirty",type:"boolean",default:"false"},{name:"prefix",type:"string"},{name:"prefix-icon",type:"string"},{name:"suffix",type:"string"},{name:"suffix-icon",type:"string"},{name:"clearable",type:"boolean",default:"false"},{name:"clear-icon",type:"string",default:'"veno-ui:$clear"'},{name:"disabled",type:"boolean",default:"false"}]}),r(p,{id:"inputcontrol-events",tabindex:"-1"},{default:d((function(){return[_]})),_:1}),r(c,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"click:clear"},{name:"click:prepend-inner"},{name:"click:prefix"},{name:"click:suffix"},{name:"click:append-inner"},{name:"click:control"},{name:"update:active"},{name:"update:modelValue"}]}),r(p,{id:"selectioncontrol-props",tabindex:"-1"},{default:d((function(){return[k]})),_:1}),r(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"color",type:"string"},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"label",type:"string"},{name:"false-icon",type:"string"},{name:"true-icon",type:"string"},{name:"multiple",type:"boolean",default:"false"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"true-value",type:"any"},{name:"false-value",type:"any"},{name:"model-value",type:"any"},{name:"type",type:"string"},{name:"value",type:"any"},{name:"value-comparator",type:"function"},{name:"theme",type:"string"},{name:"density",type:"string",default:'"medium"'}]}),r(p,{id:"selectioncontrol-events",tabindex:"-1"},{default:d((function(){return[V]})),_:1}),r(c,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]}),r(p,{id:"selectiongroupcontrol-props",tabindex:"-1"},{default:d((function(){return[B]})),_:1}),r(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"name",type:"string"},{name:"false-icon",type:"string"},{name:"true-icon",type:"string"},{name:"multiple",type:"boolean",default:"false"},{name:"disabled",type:"boolean",default:"false"},{name:"readonly",type:"boolean",default:"false"},{name:"type",type:"string"},{name:"model-value",type:"any"}]}),r(p,{id:"selectiongroupcontrol-events",tabindex:"-1"},{default:d((function(){return[w]})),_:1}),r(c,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}}))}}}));
