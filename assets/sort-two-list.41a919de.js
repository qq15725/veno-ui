import{_ as e}from"./index.09ac0b2e.js";import{d as t,r as o,R as l,S as s,Y as r,b as A,V as a,m,D as i,M as d,X as u}from"./vendor.b9011e0d.js";const C=t({setup:()=>({items1:o([1,2,3,4]),items2:o([5,6,7])})}),v={title:"两个列表",headers:[],frontmatter:{}},n=d(" 两个列表 ");var E=e(C,[["render",function(e,t,o,C,v,E){const c=l("ve-list-item"),p=l("ve-drag-sort"),D=l("ve-list"),f=l("ve-card"),g=l("ve-col"),F=l("ve-row"),B=l("demo");return s(),r("div",null,[A(B,{file:"/packages/veno-ui/src/components/drag/docs/sort-two-list.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-drag-sort%0A%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22items1%22%0A%20%20%20%20%20%20%20%20%20%20%20%20group%3D%22group%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20item%2C%20on%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-on%3D%22on%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22cursor%3A%20move%3B%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-drag-sort%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%0A%20%20%20%20%3Cve-col%20%3Acols%3D%226%22%3E%0A%20%20%20%20%20%20%3Cve-card%3E%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-drag-sort%0A%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%22items2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20group%3D%22group%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20item%2C%20on%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-on%3D%22on%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22cursor%3A%20move%3B%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fve-drag-sort%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items1%3A%20ref(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20%20%20%20%20%20%20items2%3A%20ref(%5B5%2C%206%2C%207%5D)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:a((()=>[n])),default:a((()=>[A(F,null,{default:a((()=>[A(g,{cols:6},{default:a((()=>[A(f,null,{default:a((()=>[A(D,null,{default:a((()=>[A(p,{modelValue:e.items1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.items1=t),group:"group"},{item:a((({item:e,on:t})=>[A(c,m(i(t),{style:{cursor:"move"}}),{default:a((()=>[d(u(e),1)])),_:2},1040)])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),A(g,{cols:6},{default:a((()=>[A(f,null,{default:a((()=>[A(D,null,{default:a((()=>[A(p,{modelValue:e.items2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.items2=t),group:"group"},{item:a((({item:e,on:t})=>[A(c,m(i(t),{style:{cursor:"move"}}),{default:a((()=>[d(u(e),1)])),_:2},1040)])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}]]);export{v as __pageData,E as default};
