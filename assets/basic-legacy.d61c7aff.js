System.register(["./index-legacy.d725e61e.js","./switch-legacy.b0e4a333.js","./dialog-legacy.00d8d3c7.js","./table-legacy.ca870456.js","./vendor-legacy.7b34909f.js","./form-control-legacy.c81669f2.js","./label-legacy.d137d362.js","./selection-control-legacy.382a0925.js","./pagination-legacy.25271d7a.js"],(function(e){"use strict";var a,t,r,l,d,n,A,o,i,s,u,m,c,C,f,E,D,v;return{setters:[function(e){a=e._,t=e.G,r=e.B,l=e.X,d=e.U,n=e.a},function(e){A=e.S},function(e){o=e.D},function(e){i=e.T},function(e){s=e.d,u=e.r,m=e.O,c=e.U,C=e.a,f=e.Q,E=e.a4,D=e.a5,v=e.K},function(){},function(){},function(){},function(){}],execute:function(){var h=s({setup:function(){return{border:u(!0),hideHeader:u(!1),fixedHeader:u(!1),noData:u(!1),headers:u([{text:"Name",width:200,value:"name"},{text:"Salary",width:160,value:"salary",sortable:!0,filters:[23e3]},{text:"Address",width:600,value:"address"},{text:"Email",width:300,value:"email"},{value:"operation",width:100,align:"center",fixed:!0}]),items:u([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])}}}),p=(e("__pageData",{title:"基本用法",headers:[],frontmatter:{}}),v(" 基本用法 ")),B=v("查看"),x=v("取消"),b=v("确认");e("default",a(h,[["render",function(e,a,s,u,v,h){var y=A,g=t,F=r,k=l,w=d,H=o,R=i,V=n;return m(),c("div",null,[C(V,{file:"/packages/veno-ui/src/components/table/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20%3Acol-props%3D%22%7B%20cols%3A%20'auto'%20%7D%22%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%22%20v-model%3D%22border%22%20%2F%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E9%9A%90%E8%97%8F%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22hideHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22fixedHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%22%20v-model%3D%22noData%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-grid%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20%3Aborder%3D%22border%22%0A%20%20%20%20%3Ahide-header%3D%22hideHeader%22%0A%20%20%20%20%3Afixed-header%3D%22fixedHeader%22%0A%20%20%20%20%3Aheight%3D%22fixedHeader%20%3F%20250%20%3A%20undefined%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22noData%20%3F%20%5B%5D%20%3A%20items%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.operation%3E%0A%20%20%20%20%20%20%3Cve-dialog%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%9F%A5%E7%9C%8B%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20border%3A%20ref(true)%2C%0A%20%20%20%20%20%20%20%20hideHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20fixedHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20noData%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20width%3A%20200%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20width%3A%20160%2C%20value%3A%20'salary'%2C%20sortable%3A%20true%2C%20filters%3A%20%5B23000%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20width%3A%20600%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20width%3A%20300%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'operation'%2C%20width%3A%20100%2C%20align%3A%20'center'%2C%20fixed%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:f((function(){return[p]})),default:f((function(){return[C(g,{"col-props":{cols:"auto"}},{default:f((function(){return[C(y,{label:"显示边框",modelValue:e.border,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.border=a})},null,8,["modelValue"]),C(y,{label:"隐藏表头",modelValue:e.hideHeader,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.hideHeader=a})},null,8,["modelValue"]),C(y,{label:"固定表头",modelValue:e.fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.fixedHeader=a})},null,8,["modelValue"]),C(y,{label:"暂无数据",modelValue:e.noData,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.noData=a})},null,8,["modelValue"])]})),_:1}),C(R,{border:e.border,"hide-header":e.hideHeader,"fixed-header":e.fixedHeader,height:e.fixedHeader?250:void 0,headers:e.headers,items:e.noData?[]:e.items},{"item.operation":f((function(){return[C(H,null,{activator:f((function(e){var a=e.props;return[C(F,E(D(a)),{default:f((function(){return[B]})),_:2},1040)]})),default:f((function(e){var a=e.isActive;return[C(w,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:f((function(){return[C(k),C(F,{class:"mr-3",onClick:function(e){return a.value=!1}},{default:f((function(){return[x]})),_:2},1032,["onClick"]),C(F,{color:"primary",onClick:function(e){return a.value=!1}},{default:f((function(){return[b]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:1})]})),_:1},8,["border","hide-header","fixed-header","height","headers","items"])]})),_:1})])}]]))}}}));
