if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const a=s=>l(s,i),t={module:{uri:i},exports:o,require:a};e[i]=Promise.all(n.map((s=>t[s]||a(s)))).then((s=>(r(...s),o)))}}define(["./workbox-f3064871"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.9edf3da3.js",revision:null},{url:"assets/app.cba83cb0.css",revision:null},{url:"assets/close.4c33a851.js",revision:null},{url:"assets/dark.7c1d3e80.js",revision:null},{url:"assets/Demo.e0744a95.js",revision:null},{url:"assets/palette.0a5d7fc4.js",revision:null},{url:"assets/README.0449ffdf.js",revision:null},{url:"assets/README.064e456c.js",revision:null},{url:"assets/README.06c377f5.js",revision:null},{url:"assets/README.0a125584.js",revision:null},{url:"assets/README.0fb0d687.js",revision:null},{url:"assets/README.10fd0736.js",revision:null},{url:"assets/README.15e38a71.js",revision:null},{url:"assets/README.17560d59.js",revision:null},{url:"assets/README.1a6d57d4.js",revision:null},{url:"assets/README.1d6e37d8.js",revision:null},{url:"assets/README.2809fb93.js",revision:null},{url:"assets/README.2ccb478e.js",revision:null},{url:"assets/README.326a7721.js",revision:null},{url:"assets/README.3766e37b.js",revision:null},{url:"assets/README.41bae8d1.js",revision:null},{url:"assets/README.4753daba.js",revision:null},{url:"assets/README.481b1444.js",revision:null},{url:"assets/README.5a265828.js",revision:null},{url:"assets/README.657806d3.js",revision:null},{url:"assets/README.6934aa38.js",revision:null},{url:"assets/README.6f2e9bdc.js",revision:null},{url:"assets/README.747a13ad.js",revision:null},{url:"assets/README.75d64973.js",revision:null},{url:"assets/README.79d13327.js",revision:null},{url:"assets/README.7a8ad55e.js",revision:null},{url:"assets/README.7b8a785a.js",revision:null},{url:"assets/README.8233f473.js",revision:null},{url:"assets/README.9a47e0f9.js",revision:null},{url:"assets/README.9c982078.js",revision:null},{url:"assets/README.a3494196.js",revision:null},{url:"assets/README.add7d08d.js",revision:null},{url:"assets/README.b3e17b68.js",revision:null},{url:"assets/README.b5b1cc33.js",revision:null},{url:"assets/README.b86bbfe9.js",revision:null},{url:"assets/README.bfac1ef6.js",revision:null},{url:"assets/README.c2957095.js",revision:null},{url:"assets/README.c2fddc72.js",revision:null},{url:"assets/README.c5948239.js",revision:null},{url:"assets/README.c635d229.js",revision:null},{url:"assets/README.cd7042be.js",revision:null},{url:"assets/README.d11ba17d.js",revision:null},{url:"assets/README.dfb1e939.js",revision:null},{url:"assets/README.e2355c48.js",revision:null},{url:"assets/README.eaa655a2.js",revision:null},{url:"assets/README.f0751096.js",revision:null},{url:"assets/README.f0c0e58e.js",revision:null},{url:"assets/README.fc46e732.js",revision:null},{url:"assets/start.5eb6a4aa.js",revision:null},{url:"assets/vendor.960e51e5.js",revision:null},{url:"components/alert.html",revision:"a7053a5f30613398dbc39eba83b738e5"},{url:"components/anchor.html",revision:"47642c9fd5187b3fd486a730a4388e01"},{url:"components/avatar.html",revision:"33227ee467b7de36e5bd1fb3f7142064"},{url:"components/badge.html",revision:"b609d9ede76e877c224d683d85c81143"},{url:"components/breadcrumb.html",revision:"c759470275b8f158d89a16234b68ea9e"},{url:"components/button.html",revision:"bd4c428a1efe36fedc538ce4825542d9"},{url:"components/card.html",revision:"26952a7746d0bf83788cbd05a2d85e90"},{url:"components/carousel.html",revision:"d33a05c16c6562662dd8bb821b05432a"},{url:"components/checkbox.html",revision:"8869346e07e95d7fecb8f7006c402dfa"},{url:"components/code.html",revision:"dceb8a0cac3c971471e014bf863b2db4"},{url:"components/date-picker.html",revision:"a681a049c65c4641f2f906c778ffaf8b"},{url:"components/device.html",revision:"20f88b7f8d8087cb8e8e4f546bcccb7b"},{url:"components/dialog.html",revision:"bde873f244998b4fe9922ceed10b64b3"},{url:"components/divider.html",revision:"e5da068f96d413438879a56391f387c3"},{url:"components/draggable-resizable.html",revision:"9287a228d4623359796a6b8826b46760"},{url:"components/draggable-sortable.html",revision:"26298349283d615a82f286448341b316"},{url:"components/draggable.html",revision:"e4b3875415c4fa49afc047905b6f96b8"},{url:"components/drawer.html",revision:"9683654471c34cdf8aa7d7bb2a08e90c"},{url:"components/form.html",revision:"6caa3540bd6d816b42454dbc83ddef39"},{url:"components/grid.html",revision:"89be7fa1217640f92009bbb3fa827b2d"},{url:"components/hover.html",revision:"28a97c0388f588bc7b8a8b7f7df8d893"},{url:"components/icon.html",revision:"99f6597353e3755936575d2684c92612"},{url:"components/image.html",revision:"9a971835e3c9dc262968b2115984042f"},{url:"components/input.html",revision:"1616eb32eeef28ed067756be988eaf38"},{url:"components/layout.html",revision:"681a976d747e38e53a512f427762d925"},{url:"components/lazy.html",revision:"dca9d7a825b85a7f2be52e473a43357e"},{url:"components/link.html",revision:"6e8150a33522dd4fdb4cd0ac70444556"},{url:"components/list.html",revision:"08151ff13e24628538ebb3fd32814e0b"},{url:"components/menu.html",revision:"a045048b9c2d602ec02531965f423d8b"},{url:"components/message-provider.html",revision:"5a42363b74403989cdcf932425b20ca4"},{url:"components/notification-provider.html",revision:"8ffc64c82f3d5b600be136c8695345d0"},{url:"components/overlay.html",revision:"28031ca31ae673339b40002ef10d3f52"},{url:"components/pagination.html",revision:"fcb2f043b6bc13f967024cc54210cdb2"},{url:"components/paper.html",revision:"687232c51bba540108f156878f6ec95d"},{url:"components/progress.html",revision:"d71213095f36b0a76ea04456e78a9c46"},{url:"components/radio.html",revision:"c02604b2e7386fe313b0538fc232efba"},{url:"components/responsive.html",revision:"fb308194a22c796f73153a74cb17679c"},{url:"components/scrollbar.html",revision:"9b356fdc99251eabdf5aba16f1b6ff74"},{url:"components/select.html",revision:"d320278cf474343420a2af1a08986be2"},{url:"components/spacer.html",revision:"16bdc011c61613294b3341c9450c1c5f"},{url:"components/switch.html",revision:"acedc0c6ba4d0d2d3aa0284e2aa70ec9"},{url:"components/table.html",revision:"c6c1405498dbdc363f59dcbf25e14f5a"},{url:"components/tabs.html",revision:"0a8baa8ae26c72fd2e028896a978ab03"},{url:"components/tag.html",revision:"8c871757b7a1d8c4cb2484077b0d5ba0"},{url:"components/tooltip.html",revision:"0babb39e6b63b9b14e535aae590ff13e"},{url:"components/transition.html",revision:"854f8c63c01b5f8f7ff90ef91e001f10"},{url:"components/typography.html",revision:"b0c1099ec947a700ada4e8c86c85ba05"},{url:"index.html",revision:"a9665e49fd80b04ef5832f8efbd76393"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"a507d602f3153ea1c7bd69631de7fb79"},{url:"zh/palette.html",revision:"0ad476c8b0fb8820943a43020558ed03"},{url:"zh/start.html",revision:"0ea23057d44d70c8537686850d987b90"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));