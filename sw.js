if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let i={};const o=s=>l(s,a),u={module:{uri:a},exports:i,require:o};e[a]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),i)))}}define(["./workbox-04207ca7"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-legacy.2acc33f1.js",revision:null},{url:"assets/app.788600e3.css",revision:null},{url:"assets/app.9c5e80ed.js",revision:null},{url:"assets/close-legacy.47e91fe1.js",revision:null},{url:"assets/close.c43e4b5e.js",revision:null},{url:"assets/dark-legacy.0beb9746.js",revision:null},{url:"assets/dark.f7d6b7f0.js",revision:null},{url:"assets/dashboard-legacy.f09d8f2d.js",revision:null},{url:"assets/dashboard.f63bb717.js",revision:null},{url:"assets/Demo-legacy.451c3214.js",revision:null},{url:"assets/Demo.eeb4f37c.js",revision:null},{url:"assets/palette-legacy.b71e2dff.js",revision:null},{url:"assets/palette.91b76075.js",revision:null},{url:"assets/polyfills-legacy.3f588d16.js",revision:null},{url:"assets/README-legacy.00e6167d.js",revision:null},{url:"assets/README-legacy.08356294.js",revision:null},{url:"assets/README-legacy.0b4560f3.js",revision:null},{url:"assets/README-legacy.0ca0e9ce.js",revision:null},{url:"assets/README-legacy.13a3d4e4.js",revision:null},{url:"assets/README-legacy.1d6bb788.js",revision:null},{url:"assets/README-legacy.1ed38a18.js",revision:null},{url:"assets/README-legacy.238071e6.js",revision:null},{url:"assets/README-legacy.2ed2048d.js",revision:null},{url:"assets/README-legacy.3595c198.js",revision:null},{url:"assets/README-legacy.3ebb7c9a.js",revision:null},{url:"assets/README-legacy.404ae754.js",revision:null},{url:"assets/README-legacy.4a1e4f3c.js",revision:null},{url:"assets/README-legacy.5106c4dd.js",revision:null},{url:"assets/README-legacy.52c94d5f.js",revision:null},{url:"assets/README-legacy.547e65d1.js",revision:null},{url:"assets/README-legacy.642fac81.js",revision:null},{url:"assets/README-legacy.645160fb.js",revision:null},{url:"assets/README-legacy.69c88389.js",revision:null},{url:"assets/README-legacy.6ca60a15.js",revision:null},{url:"assets/README-legacy.7226d90b.js",revision:null},{url:"assets/README-legacy.778744f4.js",revision:null},{url:"assets/README-legacy.7b844c7a.js",revision:null},{url:"assets/README-legacy.826f44fe.js",revision:null},{url:"assets/README-legacy.8600387f.js",revision:null},{url:"assets/README-legacy.8a652a00.js",revision:null},{url:"assets/README-legacy.8bfac5db.js",revision:null},{url:"assets/README-legacy.904eedd2.js",revision:null},{url:"assets/README-legacy.9b7d65af.js",revision:null},{url:"assets/README-legacy.9c0439b5.js",revision:null},{url:"assets/README-legacy.9c19128e.js",revision:null},{url:"assets/README-legacy.a4a76643.js",revision:null},{url:"assets/README-legacy.ac290c0a.js",revision:null},{url:"assets/README-legacy.b523a4e6.js",revision:null},{url:"assets/README-legacy.b7ca0019.js",revision:null},{url:"assets/README-legacy.bafb9f68.js",revision:null},{url:"assets/README-legacy.c00fede5.js",revision:null},{url:"assets/README-legacy.c376e778.js",revision:null},{url:"assets/README-legacy.ca19c9fe.js",revision:null},{url:"assets/README-legacy.d5e98e3f.js",revision:null},{url:"assets/README-legacy.d7fd48f7.js",revision:null},{url:"assets/README-legacy.dc4c7c8c.js",revision:null},{url:"assets/README-legacy.e10971da.js",revision:null},{url:"assets/README-legacy.e57ba6d9.js",revision:null},{url:"assets/README-legacy.f7b3ac9c.js",revision:null},{url:"assets/README-legacy.fa5798ec.js",revision:null},{url:"assets/README-legacy.fe9dcbe0.js",revision:null},{url:"assets/README.070f2679.js",revision:null},{url:"assets/README.090b4644.js",revision:null},{url:"assets/README.0d8da9d5.js",revision:null},{url:"assets/README.0d97f7c4.js",revision:null},{url:"assets/README.0ec88ddb.js",revision:null},{url:"assets/README.1219abb6.js",revision:null},{url:"assets/README.13fe28fb.js",revision:null},{url:"assets/README.18029d28.js",revision:null},{url:"assets/README.211c679d.js",revision:null},{url:"assets/README.24edfba0.js",revision:null},{url:"assets/README.25722a71.js",revision:null},{url:"assets/README.2b82871d.js",revision:null},{url:"assets/README.32a6e418.js",revision:null},{url:"assets/README.417ad401.js",revision:null},{url:"assets/README.49031e31.js",revision:null},{url:"assets/README.5987c713.js",revision:null},{url:"assets/README.5a36e3a4.js",revision:null},{url:"assets/README.65c53a0a.js",revision:null},{url:"assets/README.7156cd00.js",revision:null},{url:"assets/README.734ea122.js",revision:null},{url:"assets/README.81df2312.js",revision:null},{url:"assets/README.86caea18.js",revision:null},{url:"assets/README.874b0105.js",revision:null},{url:"assets/README.8c80fb44.js",revision:null},{url:"assets/README.9240f2ff.js",revision:null},{url:"assets/README.96af9a25.js",revision:null},{url:"assets/README.9b8f774c.js",revision:null},{url:"assets/README.9e48c7d4.js",revision:null},{url:"assets/README.a068cddc.js",revision:null},{url:"assets/README.a4d80b1e.js",revision:null},{url:"assets/README.a9192a70.js",revision:null},{url:"assets/README.ae3707a3.js",revision:null},{url:"assets/README.b2d579f2.js",revision:null},{url:"assets/README.b3fd1056.js",revision:null},{url:"assets/README.b4519bdd.js",revision:null},{url:"assets/README.bc98151f.js",revision:null},{url:"assets/README.c3f9f80c.js",revision:null},{url:"assets/README.c785b57a.js",revision:null},{url:"assets/README.c7907bbc.js",revision:null},{url:"assets/README.d07deccd.js",revision:null},{url:"assets/README.d462c0dc.js",revision:null},{url:"assets/README.df3d26e7.js",revision:null},{url:"assets/README.e03a3e91.js",revision:null},{url:"assets/README.e9f08284.js",revision:null},{url:"assets/README.eb7dd48d.js",revision:null},{url:"assets/README.ecfb0904.js",revision:null},{url:"assets/README.ed06fd71.js",revision:null},{url:"assets/settings-legacy.84ea5140.js",revision:null},{url:"assets/settings.bd901e17.js",revision:null},{url:"assets/star-outline-legacy.a8a22b0e.js",revision:null},{url:"assets/star-outline.f4e435d7.js",revision:null},{url:"assets/start-legacy.54d078ad.js",revision:null},{url:"assets/start.df3b87d3.js",revision:null},{url:"components/alert.html",revision:"83650db5ca4814acf036e4fa2474fee3"},{url:"components/anchor.html",revision:"0a8f993aa5ab7e72f4a38b6802304126"},{url:"components/avatar.html",revision:"b995aae80d92b517c54e0a9126834926"},{url:"components/badge.html",revision:"0a87164c4f1a872f22634700570f96a3"},{url:"components/breadcrumb.html",revision:"762d4dbd153cc556e293ad1fe74579cd"},{url:"components/button.html",revision:"787fb92e29cd6ffff0abb539c9118a47"},{url:"components/card.html",revision:"bc8eb8a9f5c0d4f4e581c1e36814e024"},{url:"components/carousel.html",revision:"5443ea2ae3350e0093ff53a787c70f48"},{url:"components/checkbox.html",revision:"a21c077187119ae900088cb9f83d89cc"},{url:"components/code.html",revision:"5a40770c327b61dbf5d0255d317f3354"},{url:"components/date-picker.html",revision:"155abe00b6434fe5887cb6cf78a49107"},{url:"components/device.html",revision:"aad99ab8a00727a4679e518b8e3a8ee7"},{url:"components/dialog.html",revision:"1d9eb7b476210a780144abb8f7f4605d"},{url:"components/divider.html",revision:"6e44eb5831cb03c28dad1055d1cd13ca"},{url:"components/draggable-resizable.html",revision:"1c7be3cd340d4809a39215b57824a48c"},{url:"components/draggable-sortable.html",revision:"0001e8c217a119aa05a5c218133aa6a4"},{url:"components/draggable.html",revision:"e18cf8479b99f97c4b851ec3e71088f6"},{url:"components/drawer.html",revision:"c09067cdf58748484065596fde636806"},{url:"components/form.html",revision:"f8ac82fcdeecee12443eda420f501cf6"},{url:"components/grid.html",revision:"5eb1fb75261ee5bb45a773fa61df1e27"},{url:"components/hover.html",revision:"3bdc60473279658282ac3686787fde80"},{url:"components/icon.html",revision:"f3be4216cd44adaa3dc91a96c719f7f4"},{url:"components/image.html",revision:"d8d7d9980313df8f3c69380e72d866a8"},{url:"components/input.html",revision:"414f00d017668446caa32976215e5859"},{url:"components/layout.html",revision:"70f7043f19b8560e6b61da8674fe64d8"},{url:"components/lazy.html",revision:"a22cdfcff1af8c7b2b6ffe8e770a3fd5"},{url:"components/link.html",revision:"9debc9126669843f9536c17ea6af8a41"},{url:"components/list.html",revision:"a6b4e97fb1c558979e497f18283330b6"},{url:"components/menu.html",revision:"92b42238b5e45c6ce44b29ec678d0ed1"},{url:"components/message-provider.html",revision:"c4e5d9f60008a5e13f8cff61a6e9e1e9"},{url:"components/notification-provider.html",revision:"0aa852ce60bddb8d7b72dd3bec5766eb"},{url:"components/overlay.html",revision:"13e6b67ba9b2d536cba39949a9982fad"},{url:"components/pagination.html",revision:"c50a26833b46f29079093d7fecbdaf05"},{url:"components/paper.html",revision:"6dffdf1a5d3d1765330988af123394d1"},{url:"components/progress.html",revision:"7338ba0d1a1d84806c9a80194f2863c8"},{url:"components/radio.html",revision:"813746c8aab30d88e14287f9d98fb3a4"},{url:"components/responsive.html",revision:"cd8d058dc9ce728b9641110005ce51f3"},{url:"components/scrollbar.html",revision:"6eb3d26616892728ed86def5489902bb"},{url:"components/select.html",revision:"2b4108097427a7af249168d287ef8d03"},{url:"components/spacer.html",revision:"b444f15ef895cadb28510e35c5c43d58"},{url:"components/switch.html",revision:"e463110dc92f9e5c1e4c254658634982"},{url:"components/table.html",revision:"432ebdb7656212db8c04d43757a829b9"},{url:"components/tabs.html",revision:"0361958595723ec1d47bd348ac0ce0dc"},{url:"components/tag.html",revision:"36b2ff9103da7ff3deedcb80bbb101d8"},{url:"components/tooltip.html",revision:"3e325f70506b18addf8520fea1fe805a"},{url:"components/transition.html",revision:"f0185b3a47db6fabc64b6548635084a0"},{url:"components/typography.html",revision:"38286456eef8374059fce1063cdc8e50"},{url:"index.html",revision:"d42afdbf3f84784c270e6dd7dd0a84a2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"3f34dcd916f86af4ab92be8a89432370"},{url:"zh/palette.html",revision:"df2f4b08029884cc1dfe59bb87b909b0"},{url:"zh/start.html",revision:"5aef2a6002b9168251344c4e46311fc1"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
