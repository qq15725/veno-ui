if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const a=s=>l(s,i),c={module:{uri:i},exports:o,require:a};e[i]=Promise.all(n.map((s=>c[s]||a(s)))).then((s=>(r(...s),o)))}}define(["./workbox-f3064871"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.06c7e3e1.js",revision:null},{url:"assets/app.9d1a588d.css",revision:null},{url:"assets/dark.2367edb8.js",revision:null},{url:"assets/Demo.98c4b08d.js",revision:null},{url:"assets/palette.26e5d385.js",revision:null},{url:"assets/README.0324046d.js",revision:null},{url:"assets/README.07a87623.js",revision:null},{url:"assets/README.09986b60.js",revision:null},{url:"assets/README.14e095f9.js",revision:null},{url:"assets/README.155cbb8e.js",revision:null},{url:"assets/README.19b6167b.js",revision:null},{url:"assets/README.1f4cb458.js",revision:null},{url:"assets/README.269a91c3.js",revision:null},{url:"assets/README.2735e137.js",revision:null},{url:"assets/README.273b82b1.js",revision:null},{url:"assets/README.280f5868.js",revision:null},{url:"assets/README.2c48619f.js",revision:null},{url:"assets/README.34e16ff0.js",revision:null},{url:"assets/README.38197bfa.js",revision:null},{url:"assets/README.3ce2de65.js",revision:null},{url:"assets/README.48e95e39.js",revision:null},{url:"assets/README.4b9195df.js",revision:null},{url:"assets/README.4ddcb7ad.js",revision:null},{url:"assets/README.52ac9eef.js",revision:null},{url:"assets/README.5dfad97f.js",revision:null},{url:"assets/README.5e9bc6c0.js",revision:null},{url:"assets/README.5fc4cb23.js",revision:null},{url:"assets/README.65df6e77.js",revision:null},{url:"assets/README.6cd08820.js",revision:null},{url:"assets/README.714279f0.js",revision:null},{url:"assets/README.77b16100.js",revision:null},{url:"assets/README.7f28bd3b.js",revision:null},{url:"assets/README.8a40930a.js",revision:null},{url:"assets/README.a712ffd4.js",revision:null},{url:"assets/README.abe3f954.js",revision:null},{url:"assets/README.aeb7d251.js",revision:null},{url:"assets/README.b3049047.js",revision:null},{url:"assets/README.b5af26cc.js",revision:null},{url:"assets/README.b67469d5.js",revision:null},{url:"assets/README.b75169c2.js",revision:null},{url:"assets/README.b91626a6.js",revision:null},{url:"assets/README.c760bee3.js",revision:null},{url:"assets/README.c7f8399b.js",revision:null},{url:"assets/README.ca545ce0.js",revision:null},{url:"assets/README.ca75633b.js",revision:null},{url:"assets/README.ca9a42e0.js",revision:null},{url:"assets/README.d2d2d1ff.js",revision:null},{url:"assets/README.dbec1563.js",revision:null},{url:"assets/README.df625316.js",revision:null},{url:"assets/README.e6b3f182.js",revision:null},{url:"assets/README.e88a5797.js",revision:null},{url:"assets/README.fc4f81c6.js",revision:null},{url:"assets/start.18dc7b43.js",revision:null},{url:"assets/vendor.d4043d31.js",revision:null},{url:"components/alert.html",revision:"723723df2327fbed8166c002e21f273c"},{url:"components/anchor.html",revision:"2786732b812b43ebeb1610ac06131e1d"},{url:"components/avatar.html",revision:"b05b49a3910d290849c635cc7df7fc28"},{url:"components/badge.html",revision:"59ce4b785925e636c16a28536cfe20f2"},{url:"components/breadcrumb.html",revision:"b99a6980cef0c569807adced2f0ef113"},{url:"components/button.html",revision:"16e56a2e7a0134bf50c7115c06256b8c"},{url:"components/card.html",revision:"ef0d3700280c7f794727a62afbac80f6"},{url:"components/carousel.html",revision:"5e4a2c1fb20be2f47d711ad561b22cf8"},{url:"components/checkbox.html",revision:"b09c47393f18cb5da4623f33dc6cc021"},{url:"components/code.html",revision:"a969b9788376b738ff16ba258f5ff930"},{url:"components/date-picker.html",revision:"2cc749f8c7f995b8cedd9811b142b2e7"},{url:"components/device.html",revision:"8986dcad664b413157ebb053b9fcb83d"},{url:"components/dialog.html",revision:"cbdfa3bbb30aa7f0cac2bd5a5513990a"},{url:"components/divider.html",revision:"b45661e16cef561d351d9ee3a6ca65d9"},{url:"components/draggable-resizable.html",revision:"599b8b13421197c89763f1da7e650a51"},{url:"components/draggable-sortable.html",revision:"004b8c824856db190636fd915cf3c13a"},{url:"components/draggable.html",revision:"948ea4e1e4a9a6caf95d4bf3d5d4b2aa"},{url:"components/drawer.html",revision:"75a18c6049c7a08e81aaffe3d3a18754"},{url:"components/form.html",revision:"d3b1f2ff09e8ead82aa8ab6568ea6cb8"},{url:"components/grid.html",revision:"479d32d26edd401db91abf428dab0737"},{url:"components/hover.html",revision:"6eb2964a5c6bbbbb9390beb500932d16"},{url:"components/icon.html",revision:"369f3834aabdb57be8ce7b4151584dd4"},{url:"components/image.html",revision:"c97626a0e9a787c0dc8f48784448ea66"},{url:"components/input.html",revision:"eac38d9262e725f3e741156148441278"},{url:"components/layout.html",revision:"ed4038ff400059e7b01b6e72543dcdc7"},{url:"components/lazy.html",revision:"a729615f07ce013ecf944ec83a9c81da"},{url:"components/link.html",revision:"1870ffc13d46e8ab36d8e2c166d1247d"},{url:"components/list.html",revision:"f45fbbc0757ccd84cd8ab0c6be556a23"},{url:"components/menu.html",revision:"f70eeac0b5b5a044ecc52b2c89995f33"},{url:"components/message-provider.html",revision:"c2504a18836e7107b6bf867ac39427a4"},{url:"components/notification-provider.html",revision:"88b5dc65b4ae6410007fbfcdd4368e28"},{url:"components/overlay.html",revision:"d06b9fa91797b5e47b8ad07e4a1463cf"},{url:"components/pagination.html",revision:"303984a643ed24534490c9b2a4ac40de"},{url:"components/paper.html",revision:"8321639e43ffab10ca6ff76f1ae2ed61"},{url:"components/progress.html",revision:"13423c2c00d27315235f41cf28201810"},{url:"components/radio.html",revision:"5299251eb42b090cfddf1e4d79e77d59"},{url:"components/responsive.html",revision:"6b1884f5a5778b7a988a8b70a588085d"},{url:"components/scrollbar.html",revision:"61a14d7a9ff06987747021169c46a3b5"},{url:"components/select.html",revision:"82ccb0c3ad155dbf520ec7ccf995451d"},{url:"components/spacer.html",revision:"9f3ba721ea2d0983549640ed5917b900"},{url:"components/switch.html",revision:"f63c98436f2c4d7c4ea9bcb74b4f5672"},{url:"components/table.html",revision:"d64bb7af4a950b98b707c6fccfc02835"},{url:"components/tabs.html",revision:"7665aaf9e996d33b1eb28da8b9bc5995"},{url:"components/tag.html",revision:"f0bfeb64a5ab71529f562ed4536278a6"},{url:"components/tooltip.html",revision:"532305db8f286f60221a7dfa2198d286"},{url:"components/transition.html",revision:"f1fe31efed2dc702e3ad782050ea5241"},{url:"components/typography.html",revision:"a3f436357ca31de4048b93328a6efc72"},{url:"index.html",revision:"fc9b09bc376a7464a996700b12db36d0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"c7882f790afc381a82db141bdbd70560"},{url:"zh/palette.html",revision:"c7db159a868289df42170478837835f6"},{url:"zh/start.html",revision:"aec265a469d7e19af4d579b3fc47a622"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
