if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.29a6db23.js",revision:null},{url:"assets/app.d47538c6.css",revision:null},{url:"assets/dark.ae1786f1.js",revision:null},{url:"assets/Demo.2dbc48b0.js",revision:null},{url:"assets/palette.578b3139.js",revision:null},{url:"assets/README.0a078143.js",revision:null},{url:"assets/README.17bf4c53.js",revision:null},{url:"assets/README.1c4d0f0f.js",revision:null},{url:"assets/README.1ca2fd5b.js",revision:null},{url:"assets/README.1d716109.js",revision:null},{url:"assets/README.2571de8d.js",revision:null},{url:"assets/README.26be0d4f.js",revision:null},{url:"assets/README.28293155.js",revision:null},{url:"assets/README.373e350d.js",revision:null},{url:"assets/README.3e15a302.js",revision:null},{url:"assets/README.4c62c322.js",revision:null},{url:"assets/README.4ca771fa.js",revision:null},{url:"assets/README.52b51cc9.js",revision:null},{url:"assets/README.57000a9e.js",revision:null},{url:"assets/README.5ed16cb2.js",revision:null},{url:"assets/README.5f2f7d3b.js",revision:null},{url:"assets/README.66d0f94d.js",revision:null},{url:"assets/README.6c167be0.js",revision:null},{url:"assets/README.70a93f97.js",revision:null},{url:"assets/README.80f6fe98.js",revision:null},{url:"assets/README.82bd1ba4.js",revision:null},{url:"assets/README.83983000.js",revision:null},{url:"assets/README.855d5692.js",revision:null},{url:"assets/README.87b7dfd3.js",revision:null},{url:"assets/README.89122d62.js",revision:null},{url:"assets/README.8b6d15e0.js",revision:null},{url:"assets/README.8c2922d9.js",revision:null},{url:"assets/README.8c469ada.js",revision:null},{url:"assets/README.9840e4c7.js",revision:null},{url:"assets/README.9fe79744.js",revision:null},{url:"assets/README.a6353744.js",revision:null},{url:"assets/README.a9430b49.js",revision:null},{url:"assets/README.ae3e7acf.js",revision:null},{url:"assets/README.b0fc29ff.js",revision:null},{url:"assets/README.baec838e.js",revision:null},{url:"assets/README.bff39c54.js",revision:null},{url:"assets/README.c0945baa.js",revision:null},{url:"assets/README.c3e8ba2a.js",revision:null},{url:"assets/README.c5536988.js",revision:null},{url:"assets/README.cbc32786.js",revision:null},{url:"assets/README.d29f7c17.js",revision:null},{url:"assets/README.da383e52.js",revision:null},{url:"assets/README.da4cc671.js",revision:null},{url:"assets/README.dcdad7c0.js",revision:null},{url:"assets/README.decb8b04.js",revision:null},{url:"assets/README.ec46a28a.js",revision:null},{url:"assets/README.f7813501.js",revision:null},{url:"assets/start.a465bdee.js",revision:null},{url:"assets/vendor.d4043d31.js",revision:null},{url:"components/alert.html",revision:"48a14cbe8b2f692a372857d421ef2862"},{url:"components/anchor.html",revision:"523846516b4666450e4694d40dd15792"},{url:"components/avatar.html",revision:"eff16f5523fec45923e6da703c029dfd"},{url:"components/badge.html",revision:"30274bc940f571940e604158ac0e3490"},{url:"components/breadcrumb.html",revision:"7249e7d6c9227b0401ad79370962204c"},{url:"components/button.html",revision:"e57a27f49721befb8e92bd7cdd8e42b0"},{url:"components/card.html",revision:"e821f4abad1e64382725ac074d3357cc"},{url:"components/carousel.html",revision:"f03c19883ec159a0c49650d1c75ac778"},{url:"components/checkbox.html",revision:"68645f7be6e534cd7251e94cb5abd61b"},{url:"components/code.html",revision:"c3c0302e479d80e42b713d8f304f11e1"},{url:"components/date-picker.html",revision:"45c26b0c639f4f6398fc0e787f164a5f"},{url:"components/device.html",revision:"8edead5ecd8296cbdd4956a3d7aa013e"},{url:"components/dialog.html",revision:"e3fc6fa3d2808da04bd6a825a873bdcb"},{url:"components/divider.html",revision:"b52da1d6fbcc0ce1150a89f333608947"},{url:"components/draggable-resizable.html",revision:"247f555e3d6d9db1429f97fd1299aaed"},{url:"components/draggable-sortable.html",revision:"b914269585ade2b1f2eea43b6595112c"},{url:"components/draggable.html",revision:"df9d2a8e51beb41e381399d67f498ecc"},{url:"components/drawer.html",revision:"0e48d8b073b2d8014b15a975d5af94ae"},{url:"components/form.html",revision:"e77b3a43ee4d255bee1f3b5c81238778"},{url:"components/grid.html",revision:"1114b2fb712a4423314a28d127f297e4"},{url:"components/hover.html",revision:"0e5227bb19801f0668ccd91d10c2e9b2"},{url:"components/icon.html",revision:"811e868f82f9d8a36a7716af594eff2a"},{url:"components/image.html",revision:"730f81235d250343f2e46ee292589608"},{url:"components/input.html",revision:"b676f053d9c33127f10400870c353b17"},{url:"components/layout.html",revision:"2be038473cbb9a56816e04f34062683e"},{url:"components/lazy.html",revision:"afaa390633989e10305079fcc1c47542"},{url:"components/link.html",revision:"782c6c9976e001fb2d01ca9e84a5b32f"},{url:"components/list.html",revision:"0f056dc31e85d82d536000a54bbc1d4e"},{url:"components/menu.html",revision:"abcb981a86a84d48cbf0a22c9fa544b9"},{url:"components/message-provider.html",revision:"05e3dc600b88dce39fa711688a91520d"},{url:"components/notification-provider.html",revision:"b733e3fae612d82a95d4c3c73bcb621e"},{url:"components/overlay.html",revision:"b645ac06ba2f80b102d0dc905b60920e"},{url:"components/pagination.html",revision:"2275de31e95848bb4a8ada30a11ea7cb"},{url:"components/paper.html",revision:"62b6cb6c9818263b3bf3a5ee3fa70aa8"},{url:"components/progress.html",revision:"793c4abc3277bfc8897e77933530ba57"},{url:"components/radio.html",revision:"93fe120a0b3d74da496917e2a404091c"},{url:"components/responsive.html",revision:"4d7768fc34f2b243b186ce9af8d750df"},{url:"components/scrollbar.html",revision:"356f66ad68d1ef04540fc69ac39cacad"},{url:"components/select.html",revision:"dc9ad473bbbdf8ea91512b74f6972127"},{url:"components/spacer.html",revision:"83abe0a3575441361d49cb44fbfc6cad"},{url:"components/switch.html",revision:"d07f3712c412c7b2eb86267337ec9631"},{url:"components/table.html",revision:"ee1eb9c82d6155945345a5c6687aafce"},{url:"components/tabs.html",revision:"2ec20dd7087d08cbaa51242313b89860"},{url:"components/tag.html",revision:"45f678aafeefc48bb6c11da5911310a2"},{url:"components/tooltip.html",revision:"93d73d52f680141913e57873baa2834a"},{url:"components/transition.html",revision:"a4bcc217dc9c0d1f4d661fdfb13ed127"},{url:"components/typography.html",revision:"fc11adc6f23c26f0f2f4192770e421eb"},{url:"index.html",revision:"787c49672bb1d458651ce4787238fd8b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"16661117040d058097453b45cfbd5cd7"},{url:"zh/palette.html",revision:"fcaa25db446732588efb8f97a9735b03"},{url:"zh/start.html",revision:"1df26d1c5f547fd8f0396a3bbbc80ea9"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
