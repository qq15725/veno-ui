if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),t={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.76fedf28.js",revision:null},{url:"assets/app.e429dfb1.css",revision:null},{url:"assets/dark.447082d4.js",revision:null},{url:"assets/Demo.47cbe474.js",revision:null},{url:"assets/palette.5dd2ad31.js",revision:null},{url:"assets/README.01669d0a.js",revision:null},{url:"assets/README.065935f4.js",revision:null},{url:"assets/README.06896ce6.js",revision:null},{url:"assets/README.17755f73.js",revision:null},{url:"assets/README.1946d83a.js",revision:null},{url:"assets/README.1c33f56f.js",revision:null},{url:"assets/README.1f7cd1ce.js",revision:null},{url:"assets/README.24008ea6.js",revision:null},{url:"assets/README.2422db9b.js",revision:null},{url:"assets/README.254e4547.js",revision:null},{url:"assets/README.263b0a80.js",revision:null},{url:"assets/README.278bb226.js",revision:null},{url:"assets/README.282b6c70.js",revision:null},{url:"assets/README.2ba37620.js",revision:null},{url:"assets/README.31b8db07.js",revision:null},{url:"assets/README.38176b01.js",revision:null},{url:"assets/README.4a8ff385.js",revision:null},{url:"assets/README.5838abd7.js",revision:null},{url:"assets/README.5e87f6e7.js",revision:null},{url:"assets/README.61299c82.js",revision:null},{url:"assets/README.6344e7a7.js",revision:null},{url:"assets/README.69dd3e1d.js",revision:null},{url:"assets/README.734a1ee9.js",revision:null},{url:"assets/README.7bcd7e4a.js",revision:null},{url:"assets/README.82f10626.js",revision:null},{url:"assets/README.89df6a10.js",revision:null},{url:"assets/README.9935697e.js",revision:null},{url:"assets/README.9add29d8.js",revision:null},{url:"assets/README.9d3885ac.js",revision:null},{url:"assets/README.a3a501da.js",revision:null},{url:"assets/README.b42a4656.js",revision:null},{url:"assets/README.c0215a92.js",revision:null},{url:"assets/README.c629fe99.js",revision:null},{url:"assets/README.c7e2a217.js",revision:null},{url:"assets/README.cc31661c.js",revision:null},{url:"assets/README.d25a3b17.js",revision:null},{url:"assets/README.d5d5a8bd.js",revision:null},{url:"assets/README.d68086a6.js",revision:null},{url:"assets/README.d84da0dd.js",revision:null},{url:"assets/README.da590316.js",revision:null},{url:"assets/README.daa91003.js",revision:null},{url:"assets/README.dcfa335f.js",revision:null},{url:"assets/README.dd4cbb5e.js",revision:null},{url:"assets/README.e458cbb1.js",revision:null},{url:"assets/README.e64eaf4f.js",revision:null},{url:"assets/README.f9b632e9.js",revision:null},{url:"assets/README.ff73cfa6.js",revision:null},{url:"assets/start.cb83f2d8.js",revision:null},{url:"assets/vendor.95f12914.js",revision:null},{url:"components/alert.html",revision:"e51b011b47aa257d0516f46b3170ad85"},{url:"components/anchor.html",revision:"5b9fc9e4997b372ed829bca0a8a36239"},{url:"components/avatar.html",revision:"7608d7856a92d712abcbd38bee888f73"},{url:"components/badge.html",revision:"68d7e112fb986ca8ad2ae5d22a1a0c03"},{url:"components/breadcrumb.html",revision:"b37558b819fd62187ab1897be43eb64e"},{url:"components/button.html",revision:"9b19c8eb3a2dd5736d7e8ffa47d01273"},{url:"components/card.html",revision:"b4406030ee772fc38205fca0fd497c39"},{url:"components/carousel.html",revision:"42bcbb5c238b0746f43937cbfb9db5f9"},{url:"components/checkbox.html",revision:"dcbdd29d92616a63d17b9abfab6cd301"},{url:"components/code.html",revision:"0bb592502917772a09ef9d5ed39e39a7"},{url:"components/date-picker.html",revision:"2629b0778f8f43924040a270fa357435"},{url:"components/device.html",revision:"6379bb168378e0aa4e41e8a7fa23bf20"},{url:"components/dialog.html",revision:"587f79cde9016af85498d0b2f9756f89"},{url:"components/divider.html",revision:"f3ac5e34834c0baf12b0397759c8c17f"},{url:"components/draggable-resizable.html",revision:"22f951c6d469d5141e279305d56569bf"},{url:"components/draggable-sortable.html",revision:"a308677a35aff11be0675d35bff32ffa"},{url:"components/draggable.html",revision:"9df11c247fabfe3feaceb05c102da550"},{url:"components/drawer.html",revision:"cbe093e2587d93cce7d1310ba0578d6a"},{url:"components/form.html",revision:"60e62dc82de547be249e1c38d67e3162"},{url:"components/grid.html",revision:"9a8aeff7168470600806f13ea8b8de45"},{url:"components/hover.html",revision:"a2b56440cd8db2b1f0903f156cd6494c"},{url:"components/icon.html",revision:"12db6f8cdbe86f76d38a9a05da605597"},{url:"components/image.html",revision:"6a6bfef2353f3adb648783c4ea2069e7"},{url:"components/input.html",revision:"887a4110ca3fe1fd79da45d586211dfc"},{url:"components/layout.html",revision:"70ad821306c0ca6b047a36bc7c3ae391"},{url:"components/lazy.html",revision:"3f3f13e93b6ee00ea647ac3e1780ffa7"},{url:"components/link.html",revision:"86eb24745e7129c0836994336bcfcf3d"},{url:"components/list.html",revision:"ce2a7702f1e6f51b3909626b06656563"},{url:"components/menu.html",revision:"31c0894077fa25c1f3aa25d0913225e1"},{url:"components/message-provider.html",revision:"9a349ecd18b2dd55e584665c81d99f33"},{url:"components/notification-provider.html",revision:"691cabe3516ef207f715621a50121e43"},{url:"components/overlay.html",revision:"8a530c678c69a19540b6c65babc37ec8"},{url:"components/pagination.html",revision:"29938c4d10bdc0ac55f679cba216935d"},{url:"components/paper.html",revision:"9be33e2de30d8b374fa043ebc3045583"},{url:"components/progress.html",revision:"70ac75f1dc3fc8d9ffeb4cc76850a402"},{url:"components/radio.html",revision:"89101eb872132e4daf6a685b8977285c"},{url:"components/responsive.html",revision:"2d087e74f95c7d44471e390c0699c3c9"},{url:"components/scrollbar.html",revision:"f454bb3d3e1ac1d17689492585b8e483"},{url:"components/select.html",revision:"a21811aabfb146ba3b3688f0a4c7261a"},{url:"components/spacer.html",revision:"8c8294fe4af4e050027f73755fecb771"},{url:"components/switch.html",revision:"69b99a3e0a3154eaf7a1c53c7af22c92"},{url:"components/table.html",revision:"d8e07a7d0c44a24041ae251ab84e2ac8"},{url:"components/tabs.html",revision:"2132af9db11a6ea5da36f91572e249d4"},{url:"components/tag.html",revision:"4ef877230c0f3f7527e24537dfad23c2"},{url:"components/tooltip.html",revision:"f65b54f890675481b7eeab461a0eb0d3"},{url:"components/transition.html",revision:"afaf348c4591c3714fd7364f61deb98a"},{url:"components/typography.html",revision:"b72caeb92d79c0c7cbf3f6fae3b30f10"},{url:"index.html",revision:"b20b91feb0e87d058fc09640547d813a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"cde21a3f390189c5e64f1723e589250e"},{url:"zh/palette.html",revision:"7cb9244e0449e92b735864884314c0e3"},{url:"zh/start.html",revision:"0ccb59c18fb6ef82689ae4d7c1e5e2a4"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
