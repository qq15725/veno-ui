if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let i={};const o=s=>l(s,a),u={module:{uri:a},exports:i,require:o};e[a]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),i)))}}define(["./workbox-04207ca7"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-legacy.71d5c959.js",revision:null},{url:"assets/app.1148c71a.js",revision:null},{url:"assets/app.788600e3.css",revision:null},{url:"assets/close-legacy.440b5bfd.js",revision:null},{url:"assets/close.1c6b8362.js",revision:null},{url:"assets/dark-legacy.034ef2b8.js",revision:null},{url:"assets/dark.d83b8b7b.js",revision:null},{url:"assets/dashboard-legacy.88c54161.js",revision:null},{url:"assets/dashboard.4e35ecdf.js",revision:null},{url:"assets/Demo-legacy.d8a4bffe.js",revision:null},{url:"assets/Demo.68157264.js",revision:null},{url:"assets/palette-legacy.c72aeaa9.js",revision:null},{url:"assets/palette.14d9913a.js",revision:null},{url:"assets/polyfills-legacy.d37ebf6a.js",revision:null},{url:"assets/README-legacy.048866d9.js",revision:null},{url:"assets/README-legacy.0ba53845.js",revision:null},{url:"assets/README-legacy.0f9ed03c.js",revision:null},{url:"assets/README-legacy.1046efd9.js",revision:null},{url:"assets/README-legacy.12cd6584.js",revision:null},{url:"assets/README-legacy.1e2831bd.js",revision:null},{url:"assets/README-legacy.1e576894.js",revision:null},{url:"assets/README-legacy.22e0ab13.js",revision:null},{url:"assets/README-legacy.2417e0b3.js",revision:null},{url:"assets/README-legacy.2b55043d.js",revision:null},{url:"assets/README-legacy.3104479c.js",revision:null},{url:"assets/README-legacy.3dabe5d6.js",revision:null},{url:"assets/README-legacy.3e7754cc.js",revision:null},{url:"assets/README-legacy.4185a8d2.js",revision:null},{url:"assets/README-legacy.4226e338.js",revision:null},{url:"assets/README-legacy.43443008.js",revision:null},{url:"assets/README-legacy.44753fb4.js",revision:null},{url:"assets/README-legacy.47608406.js",revision:null},{url:"assets/README-legacy.5b545205.js",revision:null},{url:"assets/README-legacy.5df4a3a2.js",revision:null},{url:"assets/README-legacy.5e6d305c.js",revision:null},{url:"assets/README-legacy.630e7b3d.js",revision:null},{url:"assets/README-legacy.65391567.js",revision:null},{url:"assets/README-legacy.65a1ea6c.js",revision:null},{url:"assets/README-legacy.68aa5da9.js",revision:null},{url:"assets/README-legacy.6998863f.js",revision:null},{url:"assets/README-legacy.75c6f606.js",revision:null},{url:"assets/README-legacy.90620b3a.js",revision:null},{url:"assets/README-legacy.95127c6c.js",revision:null},{url:"assets/README-legacy.9c77ff89.js",revision:null},{url:"assets/README-legacy.ad158cb9.js",revision:null},{url:"assets/README-legacy.ad382344.js",revision:null},{url:"assets/README-legacy.b0946190.js",revision:null},{url:"assets/README-legacy.b177b323.js",revision:null},{url:"assets/README-legacy.b4b47359.js",revision:null},{url:"assets/README-legacy.bd7740f9.js",revision:null},{url:"assets/README-legacy.c831943b.js",revision:null},{url:"assets/README-legacy.cebcb84b.js",revision:null},{url:"assets/README-legacy.cf01b4e8.js",revision:null},{url:"assets/README-legacy.cfba4d23.js",revision:null},{url:"assets/README-legacy.d5e27c16.js",revision:null},{url:"assets/README-legacy.e2fbe7de.js",revision:null},{url:"assets/README-legacy.e30cebbd.js",revision:null},{url:"assets/README-legacy.ec8d7b66.js",revision:null},{url:"assets/README-legacy.ee45776f.js",revision:null},{url:"assets/README-legacy.f7b06d99.js",revision:null},{url:"assets/README-legacy.fd7b0098.js",revision:null},{url:"assets/README.064ef7db.js",revision:null},{url:"assets/README.07e5051d.js",revision:null},{url:"assets/README.0b6b0cd8.js",revision:null},{url:"assets/README.0bac51d4.js",revision:null},{url:"assets/README.0c856bac.js",revision:null},{url:"assets/README.0deeafbe.js",revision:null},{url:"assets/README.12339527.js",revision:null},{url:"assets/README.154490d0.js",revision:null},{url:"assets/README.237e7446.js",revision:null},{url:"assets/README.273e9631.js",revision:null},{url:"assets/README.2eaec3ea.js",revision:null},{url:"assets/README.319993d3.js",revision:null},{url:"assets/README.39f55119.js",revision:null},{url:"assets/README.3d508a59.js",revision:null},{url:"assets/README.3e1ec4f4.js",revision:null},{url:"assets/README.3eeb89cb.js",revision:null},{url:"assets/README.40d4c7bb.js",revision:null},{url:"assets/README.457d5d85.js",revision:null},{url:"assets/README.46a3d50a.js",revision:null},{url:"assets/README.4f79f4e9.js",revision:null},{url:"assets/README.53ba7a73.js",revision:null},{url:"assets/README.53f50675.js",revision:null},{url:"assets/README.63f16778.js",revision:null},{url:"assets/README.681fb086.js",revision:null},{url:"assets/README.71520711.js",revision:null},{url:"assets/README.74489640.js",revision:null},{url:"assets/README.757acace.js",revision:null},{url:"assets/README.76cdfa2f.js",revision:null},{url:"assets/README.7749bf39.js",revision:null},{url:"assets/README.7af2f782.js",revision:null},{url:"assets/README.84e833c9.js",revision:null},{url:"assets/README.8797dea8.js",revision:null},{url:"assets/README.962caf69.js",revision:null},{url:"assets/README.96ea2bc8.js",revision:null},{url:"assets/README.accf3266.js",revision:null},{url:"assets/README.be1ff99d.js",revision:null},{url:"assets/README.c11885dd.js",revision:null},{url:"assets/README.c1bba53c.js",revision:null},{url:"assets/README.c42a6f95.js",revision:null},{url:"assets/README.cc29cc48.js",revision:null},{url:"assets/README.d845220f.js",revision:null},{url:"assets/README.d8dcd5ff.js",revision:null},{url:"assets/README.e4ea62a5.js",revision:null},{url:"assets/README.e532968b.js",revision:null},{url:"assets/README.e8ab9bd2.js",revision:null},{url:"assets/README.f75c6a31.js",revision:null},{url:"assets/README.fbc2aae3.js",revision:null},{url:"assets/settings-legacy.47714e20.js",revision:null},{url:"assets/settings.05fc0770.js",revision:null},{url:"assets/star-outline-legacy.bae9ec9d.js",revision:null},{url:"assets/star-outline.c6768eed.js",revision:null},{url:"assets/start-legacy.8a55a6e7.js",revision:null},{url:"assets/start.ac7dde64.js",revision:null},{url:"components/alert.html",revision:"b86d2fe3e3062f94dc4950993ddf4f66"},{url:"components/anchor.html",revision:"d9107ce44b66e5e46172b0efa4426ada"},{url:"components/avatar.html",revision:"6504367c49325c99bea08e048c5766bd"},{url:"components/badge.html",revision:"8d30dc7b1ad019d35892b1f54683cd80"},{url:"components/breadcrumb.html",revision:"eff86aaf11172dc04a5317e35f2d22a0"},{url:"components/button.html",revision:"5f76b79b5be01b31d0e5ecdde1e19ce7"},{url:"components/card.html",revision:"bde1be4f43f71451290cb6dc9d8aaaf0"},{url:"components/carousel.html",revision:"899a62ebaeba5b8bef23f9e5357bf9a8"},{url:"components/checkbox.html",revision:"f7fb16e46e46a2ed5dd5cb56b1f4804f"},{url:"components/code.html",revision:"e5cbb5441334a64ec037c0749f6e722e"},{url:"components/date-picker.html",revision:"634507db25adf392c2c4dee036f52060"},{url:"components/device.html",revision:"0d3174703f996d5e2431760948fe6e4c"},{url:"components/dialog.html",revision:"f83cc8433eb1741d18d4cccd6fe8f1f4"},{url:"components/divider.html",revision:"6ca8628ec78797cfa2155a3b1022f710"},{url:"components/draggable-resizable.html",revision:"a4fc25c864a1edacfbabf10e0e76172e"},{url:"components/draggable-sortable.html",revision:"20a7a59303e68bb61393089cffe0e788"},{url:"components/draggable.html",revision:"38a5d5e2a1d203bf14aa53f58c396424"},{url:"components/drawer.html",revision:"83f9a14219d7623219989bb0da3e9eb8"},{url:"components/form.html",revision:"05af3aa37eba76d3e9b9aaf924e309d8"},{url:"components/grid.html",revision:"bf0f3f9a2840f990798efa8a71852bbb"},{url:"components/hover.html",revision:"28574c6072d10d5b179371ae64e368ea"},{url:"components/icon.html",revision:"81ccaaafca6a8acef608edfe871f4d76"},{url:"components/image.html",revision:"20876fdf0453d23b03a183263c9e61dc"},{url:"components/input.html",revision:"76cd087f7073deed76d477b94343b767"},{url:"components/layout.html",revision:"4e0ae056aef7c0a57e2c6ae1b7cfeca6"},{url:"components/lazy.html",revision:"f77d3c79f75ffd4d14922736f164e191"},{url:"components/link.html",revision:"f352495671e53fb584449f1754833d3e"},{url:"components/list.html",revision:"1bcbbae39c256ac24477d0b586a45f8e"},{url:"components/menu.html",revision:"e481ba05474544f48e3b43c7aa04a8e9"},{url:"components/message-provider.html",revision:"6f41baa59939e82a25c390effe59ea4f"},{url:"components/notification-provider.html",revision:"75eb553e0acaf945b2c7bd618b955ad1"},{url:"components/overlay.html",revision:"122ed5804f42006342a13d7accf913ef"},{url:"components/pagination.html",revision:"6a7990ea96f4c97acc1a7edbe26fdbda"},{url:"components/paper.html",revision:"9585ec49f2b194708f3568745fa2e1dd"},{url:"components/progress.html",revision:"d0c2c706a8d6e94eb4a9ad2f76553841"},{url:"components/radio.html",revision:"c799b50ecce2216788b6a9471ffcd1db"},{url:"components/responsive.html",revision:"8e0be3efb0000753990b810a20819d52"},{url:"components/scrollbar.html",revision:"7898dc7a3b3ea13cb20b1e9efae293ec"},{url:"components/select.html",revision:"bb6d17706f0280e3d1ac2c71e6e9c331"},{url:"components/spacer.html",revision:"5ae3f0c431807f39bef65753536f777a"},{url:"components/switch.html",revision:"dd56023d5dd4ebf416e1620743f6e1c1"},{url:"components/table.html",revision:"0e14fb779f2929fa3a4fe8ed68dd6733"},{url:"components/tabs.html",revision:"e8932519d39af18005b31ad3d880ef44"},{url:"components/tag.html",revision:"4553179fa8b8e6b033cbfd05aac1abf0"},{url:"components/tooltip.html",revision:"812b9ce14c492c30e6cdcc53cd6770e4"},{url:"components/transition.html",revision:"e20ca716e769c3d9db797bdb4945ccdf"},{url:"components/typography.html",revision:"c03c30dc1ab738d033fbe6aff28d3df7"},{url:"index.html",revision:"55548f6b743b002ea5572486d3930638"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"6a269bda5e385daaca3bff5c29987eee"},{url:"zh/palette.html",revision:"fc414fcbb1f432a288c100e831d2a6d1"},{url:"zh/start.html",revision:"c158bc45d24b7aaf97023df8030d8caf"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
