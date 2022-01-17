import{_ as e,B as a,a as A}from"./index.d58ac58d.js";import{T as s}from"./table.ee9eb202.js";import{d as l,r,P as d,U as o,a as m,R as t,K as n}from"./vendor.bd78ac10.js";import"./pagination.7d0fdd60.js";const i=l({setup:()=>({tableRef:r(),headers:r([{text:"Name",value:"name"},{text:"Salary",value:"salary"},{text:"Address",value:"address"},{text:"Email",value:"email"}]),items:r([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])})}),C={title:"数据导出",headers:[],frontmatter:{}},p=n(" 导出CSV ");var c=e(i,[["render",function(e,l,r,n,i,C){const c=a,f=s,u=A;return d(),o("div",null,[m(u,{title:"数据导出",slug:"数据导出",file:"/packages/veno-ui/src/components/table/docs/export.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%0A%20%20%20%20%40click%3D%22tableRef.exportCSV('%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0')%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%20%20color%3D%22primary%22%0A%20%20%3E%0A%20%20%20%20%E5%AF%BC%E5%87%BACSV%0A%20%20%3C%2Fve-button%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20ref%3D%22tableRef%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20tableRef%3A%20ref()%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20value%3A%20'salary'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t((()=>[m(c,{onClick:l[0]||(l[0]=a=>e.tableRef.exportCSV("文件名称")),class:"mb-3",color:"primary"},{default:t((()=>[p])),_:1}),m(f,{ref:"tableRef",headers:e.headers,items:e.items},null,8,["headers","items"])])),_:1})])}]]);export{C as __pageData,c as default};