var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,o=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(n)for(var t of n(a))r.call(a,t)&&i(e,t,a[t]);return e},s=(e,n)=>a(e,t(n));import{_ as d}from"./index.cc0d1799.js";import{d as A,r as m,R as u,V as p,Y as c,b as f,U as C,a4 as v,a5 as b,M as g,m as D,X as h,u as y}from"./vendor.0627d41c.js";const E=A({setup:()=>({border:m(!0),hideHeader:m(!1),fixedHeader:m(!1),noData:m(!1),headers:m([{text:"Name",width:200,value:"name"},{text:"Salary",width:160,value:"salary",sortable:!0,filters:[23e3]},{text:"Address",width:600,value:"address"},{text:"Email",width:300,value:"email"},{value:"operation",width:100,align:"center",fixed:!0}]),items:m([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),x=g(" 基本用法 "),B=g("查看"),w=g("取消"),_=g("确认");var F=d(E,[["render",function(e,a,t,n,l,r){const i=u("ve-switch"),o=u("ve-grid"),s=u("ve-button"),d=u("ve-spacer"),A=u("ve-card"),m=u("ve-dialog"),g=u("ve-table"),D=u("demo");return p(),c("div",null,[f(D,{file:"/packages/veno-ui/src/components/table/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20%3Acol-props%3D%22%7B%20cols%3A%20'auto'%20%7D%22%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%22%20v-model%3D%22border%22%20%2F%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E9%9A%90%E8%97%8F%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22hideHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22fixedHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%22%20v-model%3D%22noData%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-grid%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20%3Aborder%3D%22border%22%0A%20%20%20%20%3Ahide-header%3D%22hideHeader%22%0A%20%20%20%20%3Afixed-header%3D%22fixedHeader%22%0A%20%20%20%20%3Aheight%3D%22fixedHeader%20%3F%20250%20%3A%20undefined%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22noData%20%3F%20%5B%5D%20%3A%20items%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.operation%3E%0A%20%20%20%20%20%20%3Cve-dialog%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%9F%A5%E7%9C%8B%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20border%3A%20ref(true)%2C%0A%20%20%20%20%20%20%20%20hideHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20fixedHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20noData%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20width%3A%20200%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20width%3A%20160%2C%20value%3A%20'salary'%2C%20sortable%3A%20true%2C%20filters%3A%20%5B23000%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20width%3A%20600%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20width%3A%20300%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'operation'%2C%20width%3A%20100%2C%20align%3A%20'center'%2C%20fixed%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:C((()=>[x])),default:C((()=>[f(o,{"col-props":{cols:"auto"}},{default:C((()=>[f(i,{label:"显示边框",modelValue:e.border,"onUpdate:modelValue":a[0]||(a[0]=a=>e.border=a)},null,8,["modelValue"]),f(i,{label:"隐藏表头",modelValue:e.hideHeader,"onUpdate:modelValue":a[1]||(a[1]=a=>e.hideHeader=a)},null,8,["modelValue"]),f(i,{label:"固定表头",modelValue:e.fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=a=>e.fixedHeader=a)},null,8,["modelValue"]),f(i,{label:"暂无数据",modelValue:e.noData,"onUpdate:modelValue":a[3]||(a[3]=a=>e.noData=a)},null,8,["modelValue"])])),_:1}),f(g,{border:e.border,"hide-header":e.hideHeader,"fixed-header":e.fixedHeader,height:e.fixedHeader?250:void 0,headers:e.headers,items:e.noData?[]:e.items},{"item.operation":C((()=>[f(m,null,{activator:C((({props:e})=>[f(s,v(b(e)),{default:C((()=>[B])),_:2},1040)])),default:C((({isActive:e})=>[f(A,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:C((()=>[f(d),f(s,{class:"mr-3",onClick:a=>e.value=!1},{default:C((()=>[w])),_:2},1032,["onClick"]),f(s,{color:"primary",onClick:a=>e.value=!1},{default:C((()=>[_])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["border","hide-header","fixed-header","height","headers","items"])])),_:1})])}]]);const k=A({setup:()=>({tableRef:m(),headers:m([{text:"Name",value:"name"},{text:"Salary",value:"salary"},{text:"Address",value:"address"},{text:"Email",value:"email"}]),items:m([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),P=g(" 数据导出 "),R=g(" 导出CSV ");var L=d(k,[["render",function(e,a,t,n,l,r){const i=u("ve-button"),o=u("ve-table"),s=u("demo");return p(),c("div",null,[f(s,{file:"/packages/veno-ui/src/components/table/docs/export.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%0A%20%20%20%20%40click%3D%22tableRef.exportCSV('%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0')%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%20%20color%3D%22primary%22%0A%20%20%3E%0A%20%20%20%20%E5%AF%BC%E5%87%BACSV%0A%20%20%3C%2Fve-button%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20ref%3D%22tableRef%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20tableRef%3A%20ref()%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20value%3A%20'salary'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:C((()=>[P])),default:C((()=>[f(i,{onClick:a[0]||(a[0]=a=>e.tableRef.exportCSV("文件名称")),class:"mb-3",color:"primary"},{default:C((()=>[R])),_:1}),f(o,{ref:"tableRef",headers:e.headers,items:e.items},null,8,["headers","items"])])),_:1})])}]]);const j=A({setup(){const e=m({page:1,perPage:10,lastPage:0}),a=m(!1),t=m([]);function n(){return n=this,l=null,r=function*(){a.value=!0;const{data:n,meta:l}=yield function(e={}){return e=Object.keys(e).map((a=>a.replace(/[A-Z]/,(e=>`_${e.toLowerCase()}`))+`=${e[a]}`)).join("&"),new Promise((a=>{const t=new XMLHttpRequest;t.open("GET",`http://cps.fdota.com/products?${e}`),t.onreadystatechange=function(){4==t.readyState&&a(JSON.parse(t.responseText))},t.send(null)}))}(e.value);t.value=n,e.value=Object.keys(l).reduce(((e,a)=>s(o({},e),{[a.replace(/_([a-z])/,((e,a)=>`${a.toUpperCase()}`))]:l[a]})),{}),a.value=!1},new Promise(((e,a)=>{var t=e=>{try{o(r.next(e))}catch(t){a(t)}},i=e=>{try{o(r.throw(e))}catch(t){a(t)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(t,i);o((r=r.apply(n,l)).next())}));var n,l,r}return n(),{loading:a,headers:m([{text:"封面",width:80,value:"cover"},{text:"标题",minWidth:200,value:"short_title"},{text:"原价",width:120,value:"coupons.0.coupon_product.original_price"},{text:"券后价",width:120,value:"coupons.0.coupon_product.price"},{text:"销量",width:120,value:"sales_count",sortable:!0},{text:"分类",width:120,value:"category_unionid"},{text:"商家",width:150,value:"shop.name"},{text:"商家地址",width:120,value:"provcity"}]),items:t,pagination:e,fetch:n}}}),H=g(" 服务端数据 ");var S=d(j,[["render",function(e,a,t,n,l,r){const i=u("ve-link"),d=u("ve-tooltip"),A=u("ve-image"),m=u("ve-table"),v=u("ve-lazy"),b=u("demo");return p(),c("div",null,[f(b,{file:"/packages/veno-ui/src/components/table/docs/remote.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-lazy%3E%0A%20%20%20%20%3Cve-table%0A%20%20%20%20%20%20remote%0A%20%20%20%20%20%20fixed-header%0A%20%20%20%20%20%20height%3D%22400%22%0A%20%20%20%20%20%20%3Aheaders%3D%22headers%22%0A%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20%20%20v-bind%3D%22pagination%22%0A%20%20%20%20%20%20%40update%3Aoptions%3D%22options%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20pagination%20%3D%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20...pagination%2C%0A%20%20%20%20%20%20%20%20%20%20descending%3A%20options.sortDesc%5B0%5D%20%3F%20'desc'%20%3A%20'asc'%2C%0A%20%20%20%20%20%20%20%20%20%20...options%2C%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20fetch()%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23item.short_title%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%3Atext%3D%22item.title%22%0A%20%20%20%20%20%20%20%20%20%20%3Aopen-delay%3D%22500%22%0A%20%20%20%20%20%20%20%20%20%20anchor%3D%22top%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-link%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ahref%3D%22item.url%22%0A%20%20%20%20%20%20%20%20%20%20%20%20target%3D%22_blank%22%0A%20%20%20%20%20%20%20%20%20%20%20%20v-bind%3D%22props%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.short_title%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-link%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%3Ctemplate%20%23item.cover%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-image%20%3Asrc%3D%22item.cover%22%20width%3D%2250%22%20%3Aaspect-ratio%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-table%3E%0A%20%20%3C%2Fve-lazy%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20pagination%20%3D%20ref(%7B%0A%20%20%20%20%20%20%20%20page%3A%201%2C%0A%20%20%20%20%20%20%20%20perPage%3A%2010%2C%0A%20%20%20%20%20%20%20%20lastPage%3A%200%2C%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%20%20%20%20%20%20const%20items%20%3D%20ref(%5B%5D)%0A%0A%20%20%20%20%20%20function%20apiFetch%20(query%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20%20%20%20%20query%20%3D%20Object.keys(query).map(k%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20k.replace(%2F%5BA-Z%5D%2F%2C%20v%20%3D%3E%20%60_%24%7B%20v.toLowerCase()%20%7D%60)%20%2B%20%60%3D%24%7B%20query%5Bk%5D%20%7D%60%0A%20%20%20%20%20%20%20%20%7D).join('%26')%0A%0A%20%20%20%20%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20xhr%20%3D%20new%20XMLHttpRequest()%0A%20%20%20%20%20%20%20%20%20%20xhr.open('GET'%2C%20%60http%3A%2F%2Fcps.fdota.com%2Fproducts%3F%24%7B%20query%20%7D%60)%0A%20%20%20%20%20%20%20%20%20%20xhr.onreadystatechange%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(xhr.readyState%20%3D%3D%204)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(JSON.parse(xhr.responseText))%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20xhr.send(null)%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20async%20function%20fetch%20()%20%7B%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20%20%20%20%20const%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%2C%0A%20%20%20%20%20%20%20%20%20%20meta%0A%20%20%20%20%20%20%20%20%7D%20%3D%20await%20apiFetch(pagination.value)%0A%20%20%20%20%20%20%20%20items.value%20%3D%20data%0A%20%20%20%20%20%20%20%20pagination.value%20%3D%20Object.keys(meta).reduce((obj%2C%20v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...obj%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Bv.replace(%2F_(%5Ba-z%5D)%2F%2C%20(_%2C%20v)%20%3D%3E%20%60%24%7B%20v.toUpperCase()%20%7D%60)%5D%3A%20meta%5Bv%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%7D)%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20fetch()%0A%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%B0%81%E9%9D%A2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2080%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'cover'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E6%A0%87%E9%A2%98'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20minWidth%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'short_title'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%8E%9F%E4%BB%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'coupons.0.coupon_product.original_price'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%88%B8%E5%90%8E%E4%BB%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'coupons.0.coupon_product.price'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E9%94%80%E9%87%8F'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'sales_count'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sortable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'category_unionid'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%95%86%E5%AE%B6'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20150%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'shop.name'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%95%86%E5%AE%B6%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'provcity'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%20%20pagination%2C%0A%20%20%20%20%20%20%20%20fetch%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:C((()=>[H])),default:C((()=>[f(v,null,{default:C((()=>[f(m,D({remote:"","fixed-header":"",height:"400",headers:e.headers,items:e.items,loading:e.loading},e.pagination,{"onUpdate:options":a[0]||(a[0]=a=>{e.pagination=o(s(o({},e.pagination),{descending:a.sortDesc[0]?"desc":"asc"}),a),e.fetch()})}),{"item.short_title":C((({item:e})=>[f(d,{text:e.title,"open-delay":500,anchor:"top"},{activator:C((({props:a})=>[f(i,D({href:e.url,target:"_blank"},a),{default:C((()=>[g(h(e.short_title),1)])),_:2},1040,["href"])])),_:2},1032,["text"])])),"item.cover":C((({item:e})=>[f(A,{src:e.cover,width:"50","aspect-ratio":1},null,8,["src"])])),_:1},16,["headers","items","loading"])])),_:1})])),_:1})])}]]);const V=g("表格 Table"),O=g("演示"),T=g("API"),U=g("Table Props"),$=g("Table Events"),q=g("Pagination Props"),z=g("Pagination Events"),J={title:"表格 Table",headers:[{level:1,title:"表格 Table",slug:"表格-table"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据导出",slug:"数据导出"},{level:3,title:"服务端数据",slug:"服务端数据"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{category:"Data 数据展示"}},N={},W=Object.assign(N,{setup:e=>(e,a)=>{const t=u("ve-h1"),n=u("ve-h2"),l=u("ve-col"),r=u("ve-row"),i=u("ve-h3"),o=u("ve-table");return p(),c("div",null,[f(t,{id:"表格-table",tabindex:"-1"},{default:C((()=>[V])),_:1}),f(n,{id:"演示",tabindex:"-1"},{default:C((()=>[O])),_:1}),f(r,null,{default:C((()=>[f(l,{cols:"12",md:"12"},{default:C((()=>[f(r,null,{default:C((()=>[f(l,{cols:"12"},{default:C((()=>[f(y(F))])),_:1}),f(l,{cols:"12"},{default:C((()=>[f(y(L))])),_:1}),f(l,{cols:"12"},{default:C((()=>[f(y(S))])),_:1})])),_:1})])),_:1})])),_:1}),f(n,{id:"api",tabindex:"-1"},{default:C((()=>[T])),_:1}),f(i,{id:"table-props",tabindex:"-1"},{default:C((()=>[U])),_:1}),f(o,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"hide-border",type:"boolean",default:"false"},{name:"hide-header",type:"boolean",default:"false"},{name:"fixed-header",type:"boolean",default:"false"},{name:"headers",type:"array",default:"[]"},{name:"sort-icon",type:"string",default:'"veno-ui:$sort"'},{name:"sort-active-color",type:"string",default:'"primary"'},{name:"loading",type:"boolean",default:"false"},{name:"item-key",type:"string",default:'"id"'},{name:"pagination",type:"object | boolean",default:"true"},{name:"remote",type:"boolean",default:"false"},{name:"items",type:"array",default:"[]"},{name:"must-sort",type:"boolean",default:"false"},{name:"multi-sort",type:"boolean",default:"false"},{name:"sort-by",type:"string | array",default:"[]"},{name:"sort-desc",type:"boolean | array",default:"[]"},{name:"custom-sort",type:"function",default:'"((a, b) => {}"'},{name:"locale",type:"string",default:'"en-US"'},{name:"first-page",type:"number | string",default:"1"},{name:"last-page",type:"number | string",default:"1"},{name:"page",type:"number | string"},{name:"per-page",type:"number | string",default:"10"},{name:"total",type:"number | string"},{name:"tag",type:"string",default:'"div"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"contained"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number",default:'"medium"'},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"true"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"}]},null,8,["items"]),f(i,{id:"table-events",tabindex:"-1"},{default:C((()=>[$])),_:1}),f(o,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"}]}),f(i,{id:"pagination-props",tabindex:"-1"},{default:C((()=>[q])),_:1}),f(o,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"veno-ui:$first"'},{name:"prev-icon",type:"string",default:'"veno-ui:$prev"'},{name:"next-icon",type:"string",default:'"veno-ui:$next"'},{name:"last-icon",type:"string",default:'"veno-ui:$last"'},{name:"aria-label",type:"string",default:'"分页导航"'},{name:"page-aria-label",type:"string",default:'"转到页面 {0}"'},{name:"current-page-aria-label",type:"string",default:'"当前页 {0}"'},{name:"first-aria-label",type:"string",default:'"首页"'},{name:"previous-aria-label",type:"string",default:'"上一页"'},{name:"next-aria-label",type:"string",default:'"下一页"'},{name:"last-aria-label",type:"string",default:'"最后页"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",type:"number | string",default:"1"},{name:"last-page",type:"number | string",default:"1"},{name:"page",type:"number | string"},{name:"per-page",type:"number | string",default:"10"},{name:"total",type:"number | string"},{name:"tag",type:"string",default:'"nav"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"text"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number",default:'"medium"'},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"}]},null,8,["items"]),f(i,{id:"pagination-events",tabindex:"-1"},{default:C((()=>[z])),_:1}),f(o,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}});export{J as __pageData,W as default};