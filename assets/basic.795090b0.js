import{_ as e,S as a,B as d,W as l,a as A}from"./index.d58ac58d.js";import{S as r}from"./switch.99cce6d7.js";import{D as t}from"./dialog.29ffacde.js";import{T as o}from"./table.ee9eb202.js";import{d as i,r as s,P as m,U as n,a as C,R as E,a5 as c,a6 as u,K as p}from"./vendor.bd78ac10.js";import"./form-control.90b71109.js";import"./label.bc29fd15.js";import"./selection-control.d0b48479.js";import"./pagination.7d0fdd60.js";const D=i({setup:()=>({border:s(!0),hideHeader:s(!1),fixedHeader:s(!1),noData:s(!1),headers:s([{text:"Name",width:200,value:"name"},{text:"Salary",width:160,value:"salary",sortable:!0,filters:[23e3]},{text:"Address",width:600,value:"address"},{text:"Email",width:300,value:"email"},{value:"operation",width:100,align:"center",fixed:!0}]),items:s([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),f={title:"基本用法",headers:[],frontmatter:{}},v=p("查看"),h=p("取消"),b=p("确认");var B=e(D,[["render",function(e,i,s,p,D,f){const B=r,x=a,F=d,k=l,w=t,H=o,y=A;return m(),n("div",null,[C(y,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/table/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%22%20v-model%3D%22border%22%20%2F%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E9%9A%90%E8%97%8F%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22hideHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22fixedHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%22%20v-model%3D%22noData%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20%3Aborder%3D%22border%22%0A%20%20%20%20%3Ahide-header%3D%22hideHeader%22%0A%20%20%20%20%3Afixed-header%3D%22fixedHeader%22%0A%20%20%20%20%3Aheight%3D%22fixedHeader%20%3F%20250%20%3A%20undefined%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22noData%20%3F%20%5B%5D%20%3A%20items%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.operation%3E%0A%20%20%20%20%20%20%3Cve-dialog%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%9F%A5%E7%9C%8B%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20border%3A%20ref(true)%2C%0A%20%20%20%20%20%20%20%20hideHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20fixedHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20noData%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20width%3A%20200%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20width%3A%20160%2C%20value%3A%20'salary'%2C%20sortable%3A%20true%2C%20filters%3A%20%5B23000%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20width%3A%20600%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20width%3A%20300%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'operation'%2C%20width%3A%20100%2C%20align%3A%20'center'%2C%20fixed%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:E((()=>[C(x,null,{default:E((()=>[C(B,{label:"显示边框",modelValue:e.border,"onUpdate:modelValue":i[0]||(i[0]=a=>e.border=a)},null,8,["modelValue"]),C(B,{label:"隐藏表头",modelValue:e.hideHeader,"onUpdate:modelValue":i[1]||(i[1]=a=>e.hideHeader=a)},null,8,["modelValue"]),C(B,{label:"固定表头",modelValue:e.fixedHeader,"onUpdate:modelValue":i[2]||(i[2]=a=>e.fixedHeader=a)},null,8,["modelValue"]),C(B,{label:"暂无数据",modelValue:e.noData,"onUpdate:modelValue":i[3]||(i[3]=a=>e.noData=a)},null,8,["modelValue"])])),_:1}),C(H,{border:e.border,"hide-header":e.hideHeader,"fixed-header":e.fixedHeader,height:e.fixedHeader?250:void 0,headers:e.headers,items:e.noData?[]:e.items},{"item.operation":E((()=>[C(w,null,{activator:E((({props:e})=>[C(F,c(u(e)),{default:E((()=>[v])),_:2},1040)])),default:E((({isActive:e})=>[C(k,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:E((()=>[C(x),C(F,{class:"mr-3",onClick:a=>e.value=!1},{default:E((()=>[h])),_:2},1032,["onClick"]),C(F,{color:"primary",onClick:a=>e.value=!1},{default:E((()=>[b])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["border","hide-header","fixed-header","height","headers","items"])])),_:1})])}]]);export{f as __pageData,B as default};
