import{_ as b}from"./Demo.e02a2cc1.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{h as w,m as k,y as F,T as C,a8 as P,$ as R,S as $,B,l as L,W as S,d as H,f as V,C as W,R as j,g as T}from"./app.15350231.js";import{b as E,r as d,m as O,W as g,Y as h,j as e,S as a,n as N,O as p,X as z,a4 as U,a5 as q,u as _}from"./vendor.7cd31a5c.js";const I=E({setup(){const t=d(),r=d(!1),u=d([]);function c(s={}){return s=Object.keys(s).map(o=>o.replace(/[A-Z]/,n=>`_${n.toLowerCase()}`)+`=${s[o]}`).join("&"),new Promise(o=>{const n=new XMLHttpRequest;n.open("GET",`https://cps.fdota.com/products?${s}`),n.onreadystatechange=function(){n.readyState==4&&o(JSON.parse(n.responseText))},n.send(null)})}async function A(s={}){r.value=!0;const{data:o,meta:{current_page:n,per_page:l,total:f}}=await c(s);u.value=o,t.value={page:n,perPage:l,total:f},r.value=!1}return O(()=>A()),{handleOptions:({sortBy:s,sortDesc:o,pagination:{page:n,perPage:l}})=>{A({page:n,perPage:l,sortBy:s,descending:o[0]?"desc":"asc"})},loading:r,headers:d([{text:"\u5C01\u9762",width:80,value:"cover"},{text:"\u6807\u9898",minWidth:200,value:"short_title"},{text:"\u539F\u4EF7",width:120,value:"coupons.0.coupon_product.original_price"},{text:"\u5238\u540E\u4EF7",width:120,value:"coupons.0.coupon_product.price"},{text:"\u9500\u91CF",width:120,value:"sales_count",sortable:!0},{text:"\u5206\u7C7B",width:120,value:"category_unionid"},{text:"\u5546\u5BB6",width:150,value:"shop.name"},{text:"\u5546\u5BB6\u5730\u5740",width:120,value:"provcity"}]),items:u,pagination:t,fetch:A}}});function J(t,r,u,c,A,s){const o=w,n=k,l=F,f=C,v=P,D=b;return g(),h("div",null,[e(D,{title:"\u670D\u52A1\u7AEF\u6570\u636E",slug:"\u670D\u52A1\u7AEF\u6570\u636E",file:"/packages/veno-ui/src/components/table/docs/remote.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-lazy%3E%0A%20%20%20%20%3Cve-table%0A%20%20%20%20%20%20remote%0A%20%20%20%20%20%20fixed-header%0A%20%20%20%20%20%20height%3D%22400%22%0A%20%20%20%20%20%20%3Aheaders%3D%22headers%22%0A%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20%20%20%3Apagination%3D%22pagination%22%0A%20%20%20%20%20%20%40update%3Aoptions%3D%22handleOptions%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23item.short_title%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-tooltip%0A%20%20%20%20%20%20%20%20%20%20%23activator%3D%22%7B%20props%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%3Atext%3D%22item.title%22%0A%20%20%20%20%20%20%20%20%20%20%3Aopen-delay%3D%22500%22%0A%20%20%20%20%20%20%20%20%20%20anchor%3D%22top%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-link%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ahref%3D%22item.url%22%0A%20%20%20%20%20%20%20%20%20%20%20%20target%3D%22_blank%22%0A%20%20%20%20%20%20%20%20%20%20%20%20v-bind%3D%22props%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.short_title%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-link%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-tooltip%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%3Ctemplate%20%23item.cover%3D%22%7B%20item%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-image%20%3Asrc%3D%22item.cover%22%20width%3D%2250%22%20%3Aaspect-ratio%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fve-table%3E%0A%20%20%3C%2Fve-lazy%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%2C%20onMounted%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20pagination%20%3D%20ref()%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%20%20%20%20%20%20const%20items%20%3D%20ref(%5B%5D)%0A%0A%20%20%20%20%20%20function%20apiFetch%20(query%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20%20%20%20%20query%20%3D%20Object.keys(query).map(k%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20k.replace(%2F%5BA-Z%5D%2F%2C%20v%20%3D%3E%20%60_%24%7B%20v.toLowerCase()%20%7D%60)%20%2B%20%60%3D%24%7B%20query%5Bk%5D%20%7D%60%0A%20%20%20%20%20%20%20%20%7D).join('%26')%0A%0A%20%20%20%20%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20xhr%20%3D%20new%20XMLHttpRequest()%0A%20%20%20%20%20%20%20%20%20%20xhr.open('GET'%2C%20%60https%3A%2F%2Fcps.fdota.com%2Fproducts%3F%24%7B%20query%20%7D%60)%0A%20%20%20%20%20%20%20%20%20%20xhr.onreadystatechange%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(xhr.readyState%20%3D%3D%204)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(JSON.parse(xhr.responseText))%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20xhr.send(null)%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20async%20function%20fetch%20(query%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20%20%20%20%20const%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%2C%0A%20%20%20%20%20%20%20%20%20%20meta%3A%20%7B%20current_page%3A%20page%2C%20per_page%3A%20perPage%2C%20total%20%7D%0A%20%20%20%20%20%20%20%20%7D%20%3D%20await%20apiFetch(query)%0A%20%20%20%20%20%20%20%20items.value%20%3D%20data%0A%20%20%20%20%20%20%20%20pagination.value%20%3D%20%7B%20page%2C%20perPage%2C%20total%20%7D%0A%20%20%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20onMounted(()%20%3D%3E%20fetch())%0A%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20handleOptions%3A%20(%7B%20sortBy%2C%20sortDesc%2C%20pagination%3A%20%7B%20page%2C%20perPage%20%7D%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20fetch(%7B%20page%2C%20perPage%2C%20sortBy%2C%20descending%3A%20sortDesc%5B0%5D%20%3F%20'desc'%20%3A%20'asc'%20%7D)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%B0%81%E9%9D%A2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2080%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'cover'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E6%A0%87%E9%A2%98'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20minWidth%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'short_title'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%8E%9F%E4%BB%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'coupons.0.coupon_product.original_price'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%88%B8%E5%90%8E%E4%BB%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'coupons.0.coupon_product.price'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E9%94%80%E9%87%8F'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'sales_count'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sortable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%88%86%E7%B1%BB'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'category_unionid'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%95%86%E5%AE%B6'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20150%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'shop.name'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%95%86%E5%AE%B6%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20120%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'provcity'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%20%20pagination%2C%0A%20%20%20%20%20%20%20%20fetch%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:a(()=>[e(v,null,{default:a(()=>[e(f,{remote:"","fixed-header":"",height:"400",headers:t.headers,items:t.items,loading:t.loading,pagination:t.pagination,"onUpdate:options":t.handleOptions},{"item.short_title":a(({item:m})=>[e(n,{text:m.title,"open-delay":500,anchor:"top"},{activator:a(({props:i})=>[e(o,N({href:m.url,target:"_blank"},i),{default:a(()=>[p(z(m.short_title),1)]),_:2},1040,["href"])]),_:2},1032,["text"])]),"item.cover":a(({item:m})=>[e(l,{src:m.cover,width:"50","aspect-ratio":1},null,8,["src"])]),_:1},8,["headers","items","loading","pagination","onUpdate:options"])]),_:1})]),_:1})])}var M=y(I,[["render",J]]);const K=E({setup(){return{border:d(!0),hideHeader:d(!1),fixedHeader:d(!1),noData:d(!1),headers:d([{text:"Name",width:200,value:"name"},{text:"Salary",width:160,value:"salary",sortable:!0,filters:[23e3]},{text:"Address",width:600,value:"address"},{text:"Email",width:300,value:"email"},{value:"operation",width:100,align:"center",fixed:!0}]),items:d([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])}}}),X=p("\u67E5\u770B"),G=p("\u53D6\u6D88"),Z=p("\u786E\u8BA4");function Y(t,r,u,c,A,s){const o=R,n=$,l=B,f=L,v=S,D=C,m=b;return g(),h("div",null,[e(m,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/table/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%22%20v-model%3D%22border%22%20%2F%3E%0A%20%20%20%20%3Cve-switch%20label%3D%22%E9%9A%90%E8%97%8F%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22hideHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%22%20v-model%3D%22fixedHeader%22%20%2F%3E%20%20%0A%20%20%20%20%3Cve-switch%20label%3D%22%E6%9A%82%E6%97%A0%E6%95%B0%E6%8D%AE%22%20v-model%3D%22noData%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20%3Aborder%3D%22border%22%0A%20%20%20%20%3Ahide-header%3D%22hideHeader%22%0A%20%20%20%20%3Afixed-header%3D%22fixedHeader%22%0A%20%20%20%20%3Aheight%3D%22fixedHeader%20%3F%20250%20%3A%20undefined%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22noData%20%3F%20%5B%5D%20%3A%20items%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item.operation%3E%0A%20%20%20%20%20%20%3Cve-dialog%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E6%9F%A5%E7%9C%8B%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fve-dialog%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20border%3A%20ref(true)%2C%0A%20%20%20%20%20%20%20%20hideHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20fixedHeader%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20noData%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20width%3A%20200%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20width%3A%20160%2C%20value%3A%20'salary'%2C%20sortable%3A%20true%2C%20filters%3A%20%5B23000%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20width%3A%20600%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20width%3A%20300%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'operation'%2C%20width%3A%20100%2C%20align%3A%20'center'%2C%20fixed%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:a(()=>[e(n,null,{default:a(()=>[e(o,{label:"\u663E\u793A\u8FB9\u6846",modelValue:t.border,"onUpdate:modelValue":r[0]||(r[0]=i=>t.border=i)},null,8,["modelValue"]),e(o,{label:"\u9690\u85CF\u8868\u5934",modelValue:t.hideHeader,"onUpdate:modelValue":r[1]||(r[1]=i=>t.hideHeader=i)},null,8,["modelValue"]),e(o,{label:"\u56FA\u5B9A\u8868\u5934",modelValue:t.fixedHeader,"onUpdate:modelValue":r[2]||(r[2]=i=>t.fixedHeader=i)},null,8,["modelValue"]),e(o,{label:"\u6682\u65E0\u6570\u636E",modelValue:t.noData,"onUpdate:modelValue":r[3]||(r[3]=i=>t.noData=i)},null,8,["modelValue"])]),_:1}),e(D,{border:t.border,"hide-header":t.hideHeader,"fixed-header":t.fixedHeader,height:t.fixedHeader?250:void 0,headers:t.headers,items:t.noData?[]:t.items},{"item.operation":a(()=>[e(v,null,{activator:a(({props:i})=>[e(l,U(q(i)),{default:a(()=>[X]),_:2},1040)]),default:a(({isActive:i})=>[e(f,{title:"\u786E\u8BA4",text:"\u4E00\u4E9B\u4F8B\u5B50\u6587\u672C\u5185\u5BB9",width:"400"},{actions:a(()=>[e(n),e(l,{class:"mr-3",onClick:x=>i.value=!1},{default:a(()=>[G]),_:2},1032,["onClick"]),e(l,{color:"primary",onClick:x=>i.value=!1},{default:a(()=>[Z]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["border","hide-header","fixed-header","height","headers","items"])]),_:1})])}var Q=y(K,[["render",Y]]);const e0=E({setup(){return{tableRef:d(),headers:d([{text:"Name",value:"name"},{text:"Salary",value:"salary"},{text:"Address",value:"address"},{text:"Email",value:"email"}]),items:d([{name:"Jane Doe",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com"},{name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}])}}}),a0=p(" \u5BFC\u51FACSV ");function t0(t,r,u,c,A,s){const o=B,n=C,l=b;return g(),h("div",null,[e(l,{title:"\u6570\u636E\u5BFC\u51FA",slug:"\u6570\u636E\u5BFC\u51FA",file:"/packages/veno-ui/src/components/table/docs/export.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-button%0A%20%20%20%20%40click%3D%22tableRef.exportCSV('%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0')%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%20%20color%3D%22primary%22%0A%20%20%3E%0A%20%20%20%20%E5%AF%BC%E5%87%BACSV%0A%20%20%3C%2Fve-button%3E%0A%0A%20%20%3Cve-table%0A%20%20%20%20ref%3D%22tableRef%22%0A%20%20%20%20%3Aheaders%3D%22headers%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20tableRef%3A%20ref()%2C%0A%20%20%20%20%20%20%20%20headers%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Name'%2C%20value%3A%20'name'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Salary'%2C%20value%3A%20'salary'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Address'%2C%20value%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20text%3A%20'Email'%2C%20value%3A%20'email'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Jane%20Doe'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2023000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'32%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'jane.doe%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Alisa%20Ross'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2025000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'35%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'alisa.ross%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Kevin%20Sandra'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2022000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'31%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'kevin.sandra%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'Ed%20Hellen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2017000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'42%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'ed.hellen%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'William%20Smith'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20salary%3A%2027000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'62%20Park%20Road%2C%20London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20email%3A%20'william.smith%40example.com'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:a(()=>[e(o,{onClick:r[0]||(r[0]=f=>t.tableRef.exportCSV("\u6587\u4EF6\u540D\u79F0")),class:"mb-3",color:"primary"},{default:a(()=>[a0]),_:1}),e(n,{ref:"tableRef",headers:t.headers,items:t.items},null,8,["headers","items"])]),_:1})])}var n0=y(e0,[["render",t0]]);const o0=p("\u8868\u683C Table"),r0=p("\u6F14\u793A"),s0=p("API"),l0=p("Table Props"),i0=p("Table Events"),d0=p("Pagination Props"),p0=p("Pagination Events"),C0={title:"\u8868\u683C Table",headers:[{level:1,title:"\u8868\u683C Table",slug:"\u8868\u683C-table"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u670D\u52A1\u7AEF\u6570\u636E",slug:"\u670D\u52A1\u7AEF\u6570\u636E"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6570\u636E\u5BFC\u51FA",slug:"\u6570\u636E\u5BFC\u51FA"},{level:2,title:"API",slug:"api"},{level:3,title:"Table Props",slug:"table-props"},{level:3,title:"Table Events",slug:"table-events"},{level:3,title:"Pagination Props",slug:"pagination-props"},{level:3,title:"Pagination Events",slug:"pagination-events"}],frontmatter:{meta:{category:"Data \u6570\u636E\u5C55\u793A"}}},A0={},g0=Object.assign(A0,{setup(t){return(r,u)=>{const c=H,A=V,s=W,o=j,n=T,l=C;return g(),h("div",null,[e(c,{id:"\u8868\u683C-table",tabindex:"-1"},{default:a(()=>[o0]),_:1}),e(A,{id:"\u6F14\u793A",tabindex:"-1"},{default:a(()=>[r0]),_:1}),e(o,null,{default:a(()=>[e(s,{cols:"12",md:"12"},{default:a(()=>[e(o,null,{default:a(()=>[e(s,{cols:"12"},{default:a(()=>[e(_(M))]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(_(Q))]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(_(n0))]),_:1})]),_:1})]),_:1})]),_:1}),e(A,{id:"api",tabindex:"-1"},{default:a(()=>[s0]),_:1}),e(n,{id:"table-props",tabindex:"-1"},{default:a(()=>[l0]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"hide-border",type:"boolean",default:"false"},{name:"hide-header",type:"boolean",default:"false"},{name:"fixed-header",type:"boolean",default:"false"},{name:"headers",type:"array",default:"[]"},{name:"sort-icon",type:"string",default:'"$sort"'},{name:"sort-active-color",type:"string",default:'"primary"'},{name:"loading",type:"boolean",default:"false"},{name:"item-key",type:"string",default:'"id"'},{name:"hide-pagination",type:"boolean",default:"false"},{name:"remote",source:"data-iterator",type:"boolean",default:"false"},{name:"items",source:"data-iterator",type:"array",default:"[]"},{name:"must-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"multi-sort",source:"data-iterator",type:"boolean",default:"false"},{name:"sort-by",source:"data-iterator",type:"string | array",default:"[]"},{name:"sort-desc",source:"data-iterator",type:"boolean | array",default:"[]"},{name:"custom-sort",source:"data-iterator",type:"function",default:'"((a, b) => {}"'},{name:"locale",source:"data-iterator",type:"string",default:'"en-US"'},{name:"pagination",source:"data-iterator",type:"object"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"true"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),e(n,{id:"table-events",tabindex:"-1"},{default:a(()=>[i0]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:pagination"},{name:"update:sortBy"},{name:"update:sortDesc"},{name:"update:options"}]}),e(n,{id:"pagination-props",tabindex:"-1"},{default:a(()=>[d0]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"disabled",type:"boolean",default:"false"},{name:"total-visible",type:"any"},{name:"first-icon",type:"string",default:'"$first"'},{name:"prev-icon",type:"string",default:'"$prev"'},{name:"next-icon",type:"string",default:'"$next"'},{name:"last-icon",type:"string",default:'"$last"'},{name:"aria-label",type:"string",default:'"\u5206\u9875\u5BFC\u822A"'},{name:"page-aria-label",type:"string",default:'"\u8F6C\u5230\u9875\u9762 {0}"'},{name:"current-page-aria-label",type:"string",default:'"\u5F53\u524D\u9875 {0}"'},{name:"first-aria-label",type:"string",default:'"\u9996\u9875"'},{name:"previous-aria-label",type:"string",default:'"\u4E0A\u4E00\u9875"'},{name:"next-aria-label",type:"string",default:'"\u4E0B\u4E00\u9875"'},{name:"last-aria-label",type:"string",default:'"\u6700\u540E\u9875"'},{name:"ellipsis",type:"string",default:'"..."'},{name:"show-first-last-page",type:"boolean",default:"false"},{name:"active-color",type:"string",default:'"primary"'},{name:"first-page",source:"pagination",type:"number | string",default:"1"},{name:"last-page",source:"pagination",type:"number | string",default:"1"},{name:"page",source:"pagination",type:"number | string"},{name:"per-page",source:"pagination",type:"number | string",default:"10"},{name:"tag",source:"paper",type:"string",default:'"nav"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"text"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]},null,8,["items"]),e(n,{id:"pagination-events",tabindex:"-1"},{default:a(()=>[p0]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:page"},{name:"first"},{name:"prev"},{name:"next"},{name:"last"}]})])}}});export{C0 as __pageData,g0 as default};
