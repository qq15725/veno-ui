if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let i={};const o=s=>l(s,a),c={module:{uri:a},exports:i,require:o};e[a]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),i)))}}define(["./workbox-82e5aebe"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-legacy.6f546635.js",revision:null},{url:"assets/app.1c400987.js",revision:null},{url:"assets/app.788600e3.css",revision:null},{url:"assets/close-legacy.f93844f4.js",revision:null},{url:"assets/close.31bfb86a.js",revision:null},{url:"assets/dark-legacy.dc72b32b.js",revision:null},{url:"assets/dark.24c3f13a.js",revision:null},{url:"assets/dashboard-legacy.400ead43.js",revision:null},{url:"assets/dashboard.beecdad4.js",revision:null},{url:"assets/Demo-legacy.d5055c16.js",revision:null},{url:"assets/Demo.0d56bf01.js",revision:null},{url:"assets/palette-legacy.e9a80e50.js",revision:null},{url:"assets/palette.f48368fc.js",revision:null},{url:"assets/polyfills-legacy.d37ebf6a.js",revision:null},{url:"assets/README-legacy.02754bf2.js",revision:null},{url:"assets/README-legacy.0a13fe50.js",revision:null},{url:"assets/README-legacy.0e9c8ce5.js",revision:null},{url:"assets/README-legacy.1189d1ba.js",revision:null},{url:"assets/README-legacy.1ad7f196.js",revision:null},{url:"assets/README-legacy.21c94db8.js",revision:null},{url:"assets/README-legacy.266257f4.js",revision:null},{url:"assets/README-legacy.2c7ace24.js",revision:null},{url:"assets/README-legacy.385fcffe.js",revision:null},{url:"assets/README-legacy.4708c764.js",revision:null},{url:"assets/README-legacy.49befff3.js",revision:null},{url:"assets/README-legacy.4cbd4535.js",revision:null},{url:"assets/README-legacy.4d59341d.js",revision:null},{url:"assets/README-legacy.4d7f9c9b.js",revision:null},{url:"assets/README-legacy.4faac4e1.js",revision:null},{url:"assets/README-legacy.4fcc69c4.js",revision:null},{url:"assets/README-legacy.50553cd5.js",revision:null},{url:"assets/README-legacy.5a3763d4.js",revision:null},{url:"assets/README-legacy.5da51e4e.js",revision:null},{url:"assets/README-legacy.66077f64.js",revision:null},{url:"assets/README-legacy.68b6a863.js",revision:null},{url:"assets/README-legacy.6b82f756.js",revision:null},{url:"assets/README-legacy.6c792848.js",revision:null},{url:"assets/README-legacy.6f3919b4.js",revision:null},{url:"assets/README-legacy.72e50b1d.js",revision:null},{url:"assets/README-legacy.7a4f172b.js",revision:null},{url:"assets/README-legacy.83ca131c.js",revision:null},{url:"assets/README-legacy.86607243.js",revision:null},{url:"assets/README-legacy.877ece88.js",revision:null},{url:"assets/README-legacy.91fcdd1b.js",revision:null},{url:"assets/README-legacy.a3b8d9d2.js",revision:null},{url:"assets/README-legacy.a42a8cb9.js",revision:null},{url:"assets/README-legacy.a457f0c3.js",revision:null},{url:"assets/README-legacy.a49b87bd.js",revision:null},{url:"assets/README-legacy.ad6b068a.js",revision:null},{url:"assets/README-legacy.adc4bdb6.js",revision:null},{url:"assets/README-legacy.add7e01b.js",revision:null},{url:"assets/README-legacy.be5fc220.js",revision:null},{url:"assets/README-legacy.c2b0489a.js",revision:null},{url:"assets/README-legacy.c43432bd.js",revision:null},{url:"assets/README-legacy.cb8c7f84.js",revision:null},{url:"assets/README-legacy.cbfb133e.js",revision:null},{url:"assets/README-legacy.ce865e76.js",revision:null},{url:"assets/README-legacy.d302980c.js",revision:null},{url:"assets/README-legacy.e1f335aa.js",revision:null},{url:"assets/README-legacy.f3eb27ed.js",revision:null},{url:"assets/README-legacy.f8683573.js",revision:null},{url:"assets/README.026617ab.js",revision:null},{url:"assets/README.0cf241b8.js",revision:null},{url:"assets/README.1ee72979.js",revision:null},{url:"assets/README.249d2b6c.js",revision:null},{url:"assets/README.2c8bd2bf.js",revision:null},{url:"assets/README.2d92cdad.js",revision:null},{url:"assets/README.47ad4355.js",revision:null},{url:"assets/README.49593374.js",revision:null},{url:"assets/README.4a79382f.js",revision:null},{url:"assets/README.4f51e841.js",revision:null},{url:"assets/README.5070e6e6.js",revision:null},{url:"assets/README.56552b54.js",revision:null},{url:"assets/README.595625ca.js",revision:null},{url:"assets/README.5dbed312.js",revision:null},{url:"assets/README.6cf827ca.js",revision:null},{url:"assets/README.6dc5e46d.js",revision:null},{url:"assets/README.7501057c.js",revision:null},{url:"assets/README.7b09ef08.js",revision:null},{url:"assets/README.807086d4.js",revision:null},{url:"assets/README.80fafc6e.js",revision:null},{url:"assets/README.832bd9ac.js",revision:null},{url:"assets/README.8485da23.js",revision:null},{url:"assets/README.8cd74118.js",revision:null},{url:"assets/README.91d150ad.js",revision:null},{url:"assets/README.96e7954c.js",revision:null},{url:"assets/README.9775348c.js",revision:null},{url:"assets/README.9cbd72ba.js",revision:null},{url:"assets/README.9e8b4fbf.js",revision:null},{url:"assets/README.9ead90d0.js",revision:null},{url:"assets/README.a2c8e264.js",revision:null},{url:"assets/README.ae151505.js",revision:null},{url:"assets/README.b1f1a386.js",revision:null},{url:"assets/README.bc020369.js",revision:null},{url:"assets/README.c567626f.js",revision:null},{url:"assets/README.c9847466.js",revision:null},{url:"assets/README.d1ca9def.js",revision:null},{url:"assets/README.d4a7f58a.js",revision:null},{url:"assets/README.d7d90691.js",revision:null},{url:"assets/README.dce5370d.js",revision:null},{url:"assets/README.ec0b8144.js",revision:null},{url:"assets/README.ec2f948f.js",revision:null},{url:"assets/README.edef1bc5.js",revision:null},{url:"assets/README.eff5766b.js",revision:null},{url:"assets/README.f015a3d0.js",revision:null},{url:"assets/README.f11b1f43.js",revision:null},{url:"assets/README.f36dc416.js",revision:null},{url:"assets/README.fe2174f3.js",revision:null},{url:"assets/settings-legacy.76daa861.js",revision:null},{url:"assets/settings.4c9899d2.js",revision:null},{url:"assets/star-outline-legacy.9e7818cc.js",revision:null},{url:"assets/star-outline.083e4390.js",revision:null},{url:"assets/start-legacy.0e70ca8b.js",revision:null},{url:"assets/start.0f936da5.js",revision:null},{url:"components/alert.html",revision:"5b74e97318b226e51fe72be9cb2eaf17"},{url:"components/anchor.html",revision:"3977219a0f281d24ff4a6115304599a8"},{url:"components/avatar.html",revision:"8ac20cf5d64bf5ece977c83ce8a68fc7"},{url:"components/badge.html",revision:"8d700fa2a1e6d8aa42d09fc942727399"},{url:"components/breadcrumb.html",revision:"322939638cc3ec5063aef2df503cd8a7"},{url:"components/button.html",revision:"00e1019b735205e369e09eeb4a8d9fa4"},{url:"components/card.html",revision:"8374f4452856ac133ebfaa9391e49fd0"},{url:"components/carousel.html",revision:"4c3457654c4248bd79d786bb2762b5aa"},{url:"components/checkbox.html",revision:"e557d7cea23609782912bc6d7d23ded7"},{url:"components/code.html",revision:"a58a5af2742634f710fd929a58c8774e"},{url:"components/date-picker.html",revision:"3fc65f7dfb1efb5528ff57ab152d33e0"},{url:"components/device.html",revision:"ae30f6e34e191d1ea1c3a02ecdbf6b0d"},{url:"components/dialog.html",revision:"0fd9d77a07e333009442c03152763e01"},{url:"components/divider.html",revision:"d04a531c61ecb46b1594c9ce00e5567d"},{url:"components/draggable-resizable.html",revision:"d5b46c4916a88e69adf6a8ff635be4a0"},{url:"components/draggable-sortable.html",revision:"2db366d0434aede533f0e8c8f84b9749"},{url:"components/draggable.html",revision:"913d85e6054489792193c9f8a21e1d9b"},{url:"components/drawer.html",revision:"ad37f0a4b8306559716cad10970e2b00"},{url:"components/form.html",revision:"4eca0ed13a7d502b4c6d75e525b3a28d"},{url:"components/grid.html",revision:"0dd2d625194ea4b204422a4d13754632"},{url:"components/hover.html",revision:"de5979cbfddcb8f578dfdb00042fc903"},{url:"components/icon.html",revision:"d09619daf03e3c494cca3624ee317026"},{url:"components/image.html",revision:"6db2391a132af9ed2437f13b2f2ff7f8"},{url:"components/input.html",revision:"e4167a9814fd13c0a0f3c6a86b5a45f9"},{url:"components/layout.html",revision:"e5ba2b5c4d31079ad4ac4acbed67ce94"},{url:"components/lazy.html",revision:"baeb8ee5e3edc47440b56b5ae1249bad"},{url:"components/link.html",revision:"68fd58be2e27cb1e89fd6ab1b007ab7d"},{url:"components/list.html",revision:"e04cb4304d72b33852bfd7d4c501573e"},{url:"components/menu.html",revision:"9754a5e724e4406ccc4c06bd81199993"},{url:"components/message-provider.html",revision:"9f2863af57fcb28f16bc313faa9cc476"},{url:"components/notification-provider.html",revision:"b83cc6daa68aa52dd893346b1eb1bf39"},{url:"components/overlay.html",revision:"c84c09b4d826c0a90f3bb032b5b2e9f7"},{url:"components/pagination.html",revision:"fb03e95daca1d75c0a5c5722c0b8b858"},{url:"components/paper.html",revision:"f49abd17d42a8f51bc8324a73a43da25"},{url:"components/progress.html",revision:"b4d220e3bbc54c18c45acba78133a8e7"},{url:"components/radio.html",revision:"79c197abba3ea20f94cb2b5701d0ecaf"},{url:"components/responsive.html",revision:"1460ad89228794db3dc20cb7b452af51"},{url:"components/scrollbar.html",revision:"af04ea8527db84e6b1431946c1c2c422"},{url:"components/select.html",revision:"624f95796ce7374673e1c8fdefee0e78"},{url:"components/spacer.html",revision:"699304e3891c0093160b6e1c19289238"},{url:"components/switch.html",revision:"99f6e9b67cf20ecac40718acd50be863"},{url:"components/table.html",revision:"6c25d8b07026cb2678a5e7091126d4e6"},{url:"components/tabs.html",revision:"905b4a65244251bc1dea727a29154391"},{url:"components/tag.html",revision:"f0c66c410d56d34dbcc0b188bbc37254"},{url:"components/tooltip.html",revision:"33b456d53d96bb23e31107679913a62c"},{url:"components/transition.html",revision:"9a14699320ba98b5a56468dea0f81254"},{url:"components/typography.html",revision:"debfa602123afb558edee864427565d7"},{url:"index.html",revision:"07609e3ecadc977125fd36b5c5659f13"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"95ee45dfb35fa1019d39f34a24d5bde6"},{url:"zh/palette.html",revision:"8da72a7b18b8136988a4f1c536503e78"},{url:"zh/start.html",revision:"9973efc8ce81467bfe29dfdb1cf78560"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
