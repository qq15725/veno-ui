System.register(["./app-legacy.134a3af4.js","./Demo-legacy.cc21e8a4.js"],(function(e){"use strict";var a,t,i,n,r,s,o,l,d,p,A,m,c,u,g,C,h,f,D,v,y,b,E,B,x,P,k,_,w,F;return{setters:[function(e){a=e.y,t=e.z,i=e._,n=e.q,r=e.s,s=e.u,o=e.v,l=e.av,d=e.aw,p=e.x,A=e.aG,m=e.S,c=e.G,u=e.$,g=e.ax,C=e.T,h=e.C,f=e.b0,D=e.a8,v=e.J,y=e.p,b=e.a0,E=e.ad,B=e.H,x=e.d,P=e.R,k=e.n,_=e.I,w=e.k},function(e){F=e._}],execute:function(){const R=a({setup:()=>({border:t(!0),hideHeader:t(!1),fixedHeader:t(!1),noData:t(!1),headers:t([{text:"Name",width:200,value:"name"},{text:"Salary",width:160,value:"salary",sortable:!0,filters:[23e3]},{text:"Address",width:600,value:"address"},{text:"Email",width:300,value:"email"},{value:"operation",width:100,align:"center",fixed:!0}]),items:t([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),L=p("查看"),S=p("取消"),z=p("确认");var H=i(R,[["render",function(e,a,t,i,p,h){const f=A,D=m,v=c,y=u,b=g,E=C,B=F;return n(),r("div",null,[s(B,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/table/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20class%3D%22mb-3%22%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%22%20v-model%3D%22border%22%20%2F%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E9%9A%90%E8%97%8F%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22hideHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22fixedHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%22%20v-model%3D%22noData%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20%3Aborder%3D%22border%22%0A%20%20%20%20%3Ahide-header%3D%22hideHeader%22%0A%20%20%20%20%3Afixed-header%3D%22fixedHeader%22%0A%20%20%20%20%3Aheight%3D%22fixedHeader%20%3F%20250%20%3A%20undefined%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22noData%20%3F%20%5B%5D%20%3A%20items%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.operation%3E%0A%20%20%20%20%20%20%3Cve-dialog%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%9F%A5%E7%9C%8B%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20border%3A%20ref(true)%2C%0A%20%20%20%20%20%20%20%20hideHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20fixedHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20noData%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20width%3A%20200%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20width%3A%20160%2C%20value%3A%20'salary'%2C%20sortable%3A%20true%2C%20filters%3A%20%5B23000%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20width%3A%20600%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20width%3A%20300%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'operation'%2C%20width%3A%20100%2C%20align%3A%20'center'%2C%20fixed%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[s(D,{class:"mb-3"},{default:o((()=>[s(f,{label:"显示边框",modelValue:e.border,"onUpdate:modelValue":a[0]||(a[0]=a=>e.border=a)},null,8,["modelValue"]),s(f,{label:"隐藏表头",modelValue:e.hideHeader,"onUpdate:modelValue":a[1]||(a[1]=a=>e.hideHeader=a)},null,8,["modelValue"]),s(f,{label:"固定表头",modelValue:e.fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=a=>e.fixedHeader=a)},null,8,["modelValue"]),s(f,{label:"暂无数据",modelValue:e.noData,"onUpdate:modelValue":a[3]||(a[3]=a=>e.noData=a)},null,8,["modelValue"])])),_:1}),s(E,{border:e.border,"hide-header":e.hideHeader,"fixed-header":e.fixedHeader,height:e.fixedHeader?250:void 0,headers:e.headers,items:e.noData?[]:e.items},{"item.operation":o((()=>[s(b,null,{activator:o((({props:e})=>[s(v,l(d(e)),{default:o((()=>[L])),_:2},1040)])),default:o((({isActive:e})=>[s(y,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:o((()=>[s(D),s(v,{class:"mr-3",onClick:a=>e.value=!1},{default:o((()=>[S])),_:2},1032,["onClick"]),s(v,{color:"primary",onClick:a=>e.value=!1},{default:o((()=>[z])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["border","hide-header","fixed-header","height","headers","items"])])),_:1})])}]]);const W=a({setup:()=>({headers:t([{text:"Name",value:"name"}]),items:t([{name:"Jane Doe"},{name:"Alisa Ross"},{name:"Kevin Sandra"},{name:"Ed Hellen"},{name:"William Smith"}])})});var V=i(W,[["render",function(e,a,t,i,l,d){const p=C,A=F;return n(),r("div",null,[s(A,{title:"隐藏分页器",slug:"隐藏分页器",file:"/packages/veno-ui/src/components/table/docs/hide-pagination.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-table%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20hide-pagination%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20'Jane%20Doe'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20'Alisa%20Ross'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20'Kevin%20Sandra'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20'Ed%20Hellen'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20'William%20Smith'%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[s(p,{headers:e.headers,items:e.items,"hide-pagination":""},null,8,["headers","items"])])),_:1})])}]]);const J=a({setup:()=>({headers:t([{$type:"selection"},{text:"Name",value:"name"},{text:"Salary",value:"salary"},{text:"Address",value:"address"},{text:"Email",value:"email"}]),items:t([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}]),selected:t([])})});var j=i(J,[["render",function(e,a,t,i,l,d){const p=C,A=h,m=F;return n(),r("div",null,[s(m,{title:"选中行",slug:"选中行",file:"/packages/veno-ui/src/components/table/docs/selection.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-table%0A%20%20%20%20%3Aheaders%3D%22headers%22%0A%20%20%20%20item-key%3D%22name%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20v-model%3Aselected%3D%22selected%22%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20value%3A%20'salary'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[s(p,{headers:e.headers,"item-key":"name",items:e.items,selected:e.selected,"onUpdate:selected":a[0]||(a[0]=a=>e.selected=a)},null,8,["headers","items","selected"]),s(A,{class:"mt-3 p-3",code:e.selected,theme:"dark"},null,8,["code"])])),_:1})])}]]);const O=a({setup:()=>({tableRef:t(),headers:t([{text:"Name",value:"name"},{text:"Salary",value:"salary"},{text:"Address",value:"address"},{text:"Email",value:"email"}]),items:t([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),N=p(" 导出CSV ");var T=i(O,[["render",function(e,a,t,i,l,d){const p=c,A=C,m=F;return n(),r("div",null,[s(m,{title:"数据导出",slug:"数据导出",file:"/packages/veno-ui/src/components/table/docs/export.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%0A%20%20%20%20%40click%3D%22tableRef.exportCSV('%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0')%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%20%20color%3D%22primary%22%0A%20%20%3E%0A%20%20%20%20%E5%AF%BC%E5%87%BACSV%0A%20%20%3C%2Fve-button%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20ref%3D%22tableRef%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20tableRef%3A%20ref()%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20value%3A%20'salary'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[s(p,{onClick:a[0]||(a[0]=a=>e.tableRef.exportCSV("文件名称")),class:"mb-3",color:"primary"},{default:o((()=>[N])),_:1}),s(A,{ref:"tableRef",headers:e.headers,items:e.items},null,8,["headers","items"])])),_:1})])}]]);function $(e={}){return new Promise((a=>{const t=new XMLHttpRequest;var i;t.open("GET",`https://cps.fdota.com/products?${i=e,Object.keys(i).map((e=>e.replace(/[A-Z]/,(e=>`_${e.toLowerCase()}`))+`=${i[e]}`)).join("&")}`),t.onreadystatechange=function(){4==t.readyState&&a(JSON.parse(t.responseText))},t.send(null)}))}const q=a({setup(){const e=t({perPage:10,perPageOptions:[10,24,50,100],showQuickJumper:!0,showPerPageSelect:!0}),a=t(!1),i=t([]);async function n(t={}){a.value=!0;const{data:n,meta:{current_page:r,per_page:s,total:o}}=await $(t);i.value=n,e.value={...e.value,page:r,perPage:s,total:o},a.value=!1}return f((()=>n())),{handleOptions:({sortBy:e,sortDesc:a,pagination:{page:t,perPage:i}})=>{n({page:t,perPage:i,sortBy:e,descending:a[0]?"desc":"asc"})},loading:a,headers:t([{text:"封面",width:80,value:"cover"},{text:"标题",minWidth:200,value:"short_title"},{text:"原价",width:120,value:"coupons.0.coupon_product.original_price"},{text:"券后价",width:120,value:"coupons.0.coupon_product.price"},{text:"销量",width:120,value:"sales_count",sortable:!0},{text:"分类",width:120,value:"category_unionid"},{text:"商家",width:150,value:"shop.name"},{text:"商家地址",width:120,value:"provcity"}]),items:i,pagination:e,fetch:n}}});var K=i(q,[["render",function(e,a,t,i,l,d){const A=y,m=b,c=E,u=C,g=F;return n(),r("div",null,[s(g,{title:"服务端数据",slug:"服务端数据",file:"/packages/veno-ui/src/components/table/docs/remote.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-table%0A%20%20%20%20remote%0A%20%20%20%20fixed-header%0A%20%20%20%20height%3D%22400%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20%3Apagination%3D%22pagination%22%0A%20%20%20%20%40update%3Aoptions%3D%22handleOptions%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.short_title%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%20%20%3Atext%3D%22item.title%22%0A%20%20%20%20%20%20%20%20%3Aopen-delay%3D%22500%22%0A%20%20%20%20%20%20%20%20anchor%3D%22top%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-link%20%3Ahref%3D%22item.url%22%20target%3D%22_blank%22%20v-bind%3D%22props%22%3E%7B%7B%20item.short_title%20%7D%7D%3C%2Fve-link%3E%0A%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Ctemplate%20%23item.cover%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-image%20%3Asrc%3D%22item.cover%22%20width%3D%2250%22%20%3Aaspect-ratio%3D%221%22%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20onMounted%20%7D%20from%20'vue'%0A%0A%20%20function%20stringify%20(queryString)%20%7B%0A%20%20%20%20return%20Object.keys(queryString)%0A%20%20%20%20%20%20%20%20%20%20.map(k%20%3D%3E%20k.replace(%2F%5BA-Z%5D%2F%2C%20v%20%3D%3E%20%60_%24%7B%20v.toLowerCase()%20%7D%60)%20%2B%20%60%3D%24%7B%20queryString%5Bk%5D%20%7D%60)%0A%20%20%20%20%20%20%20%20%20%20.join('%26')%0A%20%20%7D%0A%0A%20%20function%20api%20(params%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20xhr%20%3D%20new%20XMLHttpRequest()%0A%20%20%20%20%20%20xhr.open('GET'%2C%20%60https%3A%2F%2Fcps.fdota.com%2Fproducts%3F%24%7B%20stringify(params)%20%7D%60)%0A%20%20%20%20%20%20xhr.onreadystatechange%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(xhr.readyState%20%3D%3D%204)%20%7B%0A%20%20%20%20%20%20%20%20%20%20resolve(JSON.parse(xhr.responseText))%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20xhr.send(null)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20pagination%20%3D%20ref(%7B%0A%20%20%20%20%20%20%20%20perPage%3A%2010%2C%0A%20%20%20%20%20%20%20%20perPageOptions%3A%20%5B10%2C%2024%2C%2050%2C%20100%5D%2C%0A%20%20%20%20%20%20%20%20showQuickJumper%3A%20true%2C%0A%20%20%20%20%20%20%20%20showPerPageSelect%3A%20true%2C%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%20%20%20%20%20%20const%20items%20%3D%20ref(%5B%5D)%0A%0A%20%20%20%20%20%20async%20function%20fetch%20(query%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20%20%20%20%20const%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%2C%0A%20%20%20%20%20%20%20%20%20%20meta%3A%20%7B%20current_page%3A%20page%2C%20per_page%3A%20perPage%2C%20total%20%7D%0A%20%20%20%20%20%20%20%20%7D%20%3D%20await%20api(query)%0A%20%20%20%20%20%20%20%20items.value%20%3D%20data%0A%20%20%20%20%20%20%20%20pagination.value%20%3D%20%7B%20...pagination.value%2C%20page%2C%20perPage%2C%20total%20%7D%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20onMounted(()%20%3D%3E%20fetch())%0A%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20handleOptions%3A%20(%7B%20sortBy%2C%20sortDesc%2C%20pagination%3A%20%7B%20page%2C%20perPage%20%7D%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20fetch(%7B%20page%2C%20perPage%2C%20sortBy%2C%20descending%3A%20sortDesc%5B0%5D%20%3F%20'desc'%20%3A%20'asc'%20%7D)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%B0%81%E9%9D%A2'%2C%20width%3A%2080%2C%20value%3A%20'cover'%2C%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E6%A0%87%E9%A2%98'%2C%20minWidth%3A%20200%2C%20value%3A%20'short_title'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%8E%9F%E4%BB%B7'%2C%20width%3A%20120%2C%20value%3A%20'coupons.0.coupon_product.original_price'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%88%B8%E5%90%8E%E4%BB%B7'%2C%20width%3A%20120%2C%20value%3A%20'coupons.0.coupon_product.price'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E9%94%80%E9%87%8F'%2C%20width%3A%20120%2C%20value%3A%20'sales_count'%2C%20sortable%3A%20true%2C%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%88%86%E7%B1%BB'%2C%20width%3A%20120%2C%20value%3A%20'category_unionid'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%95%86%E5%AE%B6'%2C%20width%3A%20150%2C%20value%3A%20'shop.name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'%E5%95%86%E5%AE%B6%E5%9C%B0%E5%9D%80'%2C%20width%3A%20120%2C%20value%3A%20'provcity'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%20%20pagination%2C%0A%20%20%20%20%20%20%20%20fetch%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:o((()=>[s(u,{remote:"","fixed-header":"",height:"400",headers:e.headers,items:e.items,loading:e.loading,pagination:e.pagination,"onUpdate:options":e.handleOptions},{"item.short_title":o((({item:e})=>[s(m,{text:e.title,"open-delay":500,anchor:"top"},{activator:o((({props:a})=>[s(A,D({href:e.url,target:"_blank"},a),{default:o((()=>[p(v(e.short_title),1)])),_:2},1040,["href"])])),_:2},1032,["text"])])),"item.cover":o((({item:e})=>[s(c,{src:e.cover,width:"50","aspect-ratio":1},null,8,["src"])])),_:1},8,["headers","items","loading","pagination","onUpdate:options"])])),_:1})])}]]);const I=p("表格 Table"),U=p("演示"),G=p("API"),M=p("Table Props"),Q=p("Table Events"),X=p("Pagination Props"),Z=p("Pagination Events"),Y=(e("__pageData",{title:"表格 Table",headers:[{level:1,title:"表格 Table",slug:"表格-table"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"隐藏分页器",slug:"隐藏分页器"},{level:3,title:"选中行",slug:"选中行"},{level:3,title:"数据导出",slug:"数据导出"},{level:3,title:"服务端数据",slug:"服务端数据"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{meta:{category:"Data 数据展示"}}}),{});e("default",Object.assign(Y,{setup:e=>(e,a)=>{const t=B,i=x,l=w,d=P,A=k,m=h,c=C;return n(),r("div",null,[s(t,{id:"表格-table",tabindex:"-1"},{default:o((()=>[I])),_:1}),s(i,{id:"演示",tabindex:"-1"},{default:o((()=>[U])),_:1}),s(d,null,{default:o((()=>[s(l,{cols:"12",md:"12"},{default:o((()=>[s(d,null,{default:o((()=>[s(l,{cols:"12"},{default:o((()=>[s(_(H))])),_:1}),s(l,{cols:"12"},{default:o((()=>[s(_(V))])),_:1}),s(l,{cols:"12"},{default:o((()=>[s(_(j))])),_:1}),s(l,{cols:"12"},{default:o((()=>[s(_(T))])),_:1}),s(l,{cols:"12"},{default:o((()=>[s(_(K))])),_:1})])),_:1})])),_:1})])),_:1}),s(i,{id:"api",tabindex:"-1"},{default:o((()=>[G])),_:1}),s(A,{id:"table-props",tabindex:"-1"},{default:o((()=>[M])),_:1}),s(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"hide-border",default:!1,type:"boolean",descriptions:[{language:"zh",name:"hideBorder",description:"隐藏边框",source:"table"}],description:"隐藏边框"},{name:"hide-header",default:!1,type:"boolean",descriptions:[{language:"zh",name:"hideHeader",description:"隐藏表头",source:"table"}],description:"隐藏表头"},{name:"fixed-header",default:!1,type:"boolean",descriptions:[{language:"zh",name:"fixedHeader",description:"固定表头",source:"table"}],description:"固定表头"},{name:"headers",default:[],type:"array",descriptions:[{language:"zh",name:"headers",description:"表头",source:"table"}],description:"表头"},{name:"selected",default:[],type:"array",descriptions:[{language:"zh",name:"selected",description:"已选择的",source:"table"}],description:"已选择的"},{name:"sort-icon",default:"!$sort!",type:"string",descriptions:[{language:"zh",name:"sortIcon",description:"排序的图标",source:"table"}],description:"排序的图标"},{name:"sort-active-color",default:"!primary!",type:"string",descriptions:[{language:"zh",name:"sortActiveColor",description:"排序激活时的颜色",source:"table"}],description:"排序激活时的颜色"},{name:"loading",default:!1,type:"boolean",descriptions:[{language:"zh",name:"loading",description:"加载中",source:"table"}],description:"加载中"},{name:"item-key",default:"!id!",type:"string",descriptions:[{language:"zh",name:"itemKey",description:"唯一键",source:"table"}],description:"唯一键"},{name:"hide-pagination",default:!1,type:"boolean",descriptions:[{language:"zh",name:"hidePagination",description:"隐藏分页",source:"table"}],description:"隐藏分页"},{name:"remote",source:"data-iterator",default:!1,type:"boolean",descriptions:[]},{name:"items",source:"data-iterator",default:[],type:"array",descriptions:[]},{name:"must-sort",source:"data-iterator",default:!1,type:"boolean",descriptions:[]},{name:"multi-sort",source:"data-iterator",default:!1,type:"boolean",descriptions:[]},{name:"sort-by",source:"data-iterator",default:[],type:"string | array",descriptions:[]},{name:"sort-desc",source:"data-iterator",default:[],type:"boolean | array",descriptions:[]},{name:"custom-sort",source:"data-iterator",default:"((a, b) => {}",type:"function",descriptions:[]},{name:"locale",source:"data-iterator",default:"!en-US!",type:"string",descriptions:[]},{name:"pagination",source:"data-iterator",type:"object",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"paper",default:"!contained!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!0,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"paper",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]},{name:"beautify-scrollbar",source:"scrollbar",default:!0,type:"boolean",descriptions:[{language:"zh",name:"beautifyScrollbar",description:"美化滚动条",source:"scrollbar"}],description:"美化滚动条"}]},{"item.type":o((({item:e})=>[s(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[p(v(e.type),1)])),_:2},1024)])),"item.default":o((({item:e})=>[s(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[p(v("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1},8,["items"]),s(A,{id:"table-events",tabindex:"-1"},{default:o((()=>[Q])),_:1}),s(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:pagination"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"},{name:"update:selected"}]}),s(A,{id:"pagination-props",tabindex:"-1"},{default:o((()=>[X])),_:1}),s(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"active-color",default:"!primary!",type:"string",descriptions:[{language:"zh",name:"activeColor",description:"激活时的颜色",source:"pagination"}],description:"激活时的颜色"},{name:"aria-label",default:"!分页导航!",type:"string",descriptions:[{language:"zh",name:"ariaLabel",description:"导航的无障碍标签值",source:"pagination"}],description:"导航的无障碍标签值"},{name:"current-page-aria-label",default:"!当前页 {0}!",type:"string",descriptions:[{language:"zh",name:"currentPageAriaLabel",description:"当前页的无障碍标签值",source:"pagination"}],description:"当前页的无障碍标签值"},{name:"disabled",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"是否禁用",source:"pagination"}],description:"是否禁用"},{name:"ellipsis",default:"!...!",type:"string",descriptions:[{language:"zh",name:"ellipsis",description:"省略值",source:"pagination"}],description:"省略值"},{name:"first-aria-label",default:"!首页!",type:"string",descriptions:[{language:"zh",name:"firstAriaLabel",description:"第一页的无障碍标签值",source:"pagination"}],description:"第一页的无障碍标签值"},{name:"first-page",default:1,type:"number | string",descriptions:[{language:"zh",name:"firstPage",description:"第一页初始值",source:"pagination"}],description:"第一页初始值"},{name:"first-icon",default:"!$first!",type:"string",descriptions:[{language:"zh",name:"firstIcon",description:"第一页的按钮图标",source:"pagination"}],description:"第一页的按钮图标"},{name:"last-aria-label",default:"!最后页!",type:"string",descriptions:[{language:"zh",name:"lastAriaLabel",description:"最后一页的无障碍标签值",source:"pagination"}],description:"最后一页的无障碍标签值"},{name:"last-icon",default:"!$last!",type:"string",descriptions:[{language:"zh",name:"lastIcon",description:"最后一页的按钮图标",source:"pagination"}],description:"最后一页的按钮图标"},{name:"model-value",type:"number | string",descriptions:[{language:"zh",name:"modelValue",description:"当前页",source:"pagination"}],description:"当前页"},{name:"next-aria-label",default:"!下一页!",type:"string",descriptions:[{language:"zh",name:"nextAriaLabel",description:"下一页的无障碍标签值",source:"pagination"}],description:"下一页的无障碍标签值"},{name:"next-icon",default:"!$next!",type:"string",descriptions:[{language:"zh",name:"nextIcon",description:"下一页的按钮图标",source:"pagination"}],description:"下一页的按钮图标"},{name:"prev-icon",default:"!$prev!",type:"string",descriptions:[{language:"zh",name:"prevIcon",description:"上一页的按钮图标",source:"pagination"}],description:"上一页的按钮图标"},{name:"page-aria-label",default:"!转到页面 {0}!",type:"string",descriptions:[{language:"zh",name:"pageAriaLabel",description:"页面的无障碍标签值",source:"pagination"}],description:"页面的无障碍标签值"},{name:"per-page",default:10,type:"number | string",descriptions:[{language:"zh",name:"perPage",description:"每页条数",source:"pagination"}],description:"每页条数"},{name:"per-page-options",default:[10,20,50,100],type:"array",descriptions:[{language:"zh",name:"perPageOptions",description:"每页条数可选项",source:"pagination"}],description:"每页条数可选项"},{name:"previous-aria-label",default:"!上一页!",type:"string",descriptions:[{language:"zh",name:"previousAriaLabel",description:"上一页的无障碍标签值",source:"pagination"}],description:"上一页的无障碍标签值"},{name:"show-first-last-page",default:!1,type:"boolean",descriptions:[{language:"zh",name:"showFirstLastPage",description:"显示首页和最后一页",source:"pagination"}],description:"显示首页和最后一页"},{name:"show-quick-jumper",default:!1,type:"boolean",descriptions:[{language:"zh",name:"showQuickJumper",description:"显示快速跳跃",source:"pagination"}],description:"显示快速跳跃"},{name:"show-per-page-select",default:!1,type:"boolean",descriptions:[{language:"zh",name:"showPerPageSelect",description:"显示每页条数选择器",source:"pagination"}],description:"显示每页条数选择器"},{name:"total",default:0,type:"number | string",descriptions:[{language:"zh",name:"total",description:"总条数",source:"pagination"}],description:"总条数"},{name:"total-visible",type:"number | string",descriptions:[{language:"zh",name:"totalVisible",description:"总显示页数",source:"pagination"}],description:"总显示页数"},{name:"tag",source:"paper",default:"!nav!",type:"string",descriptions:[]},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"paper",default:"!text!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"paper",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]}]},{"item.type":o((({item:e})=>[s(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[p(v(e.type),1)])),_:2},1024)])),"item.default":o((({item:e})=>[s(m,{color:"secondary",inline:"",class:"p-1"},{default:o((()=>[p(v("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1},8,["items"]),s(A,{id:"pagination-events",tabindex:"-1"},{default:o((()=>[Z])),_:1}),s(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"},{name:"update:perPage"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}}))}}}));