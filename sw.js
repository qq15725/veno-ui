if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),t={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.b54cae47.css",revision:null},{url:"assets/app.dbd8bea5.js",revision:null},{url:"assets/close.6c5cdc0c.js",revision:null},{url:"assets/dark.5fee01f5.js",revision:null},{url:"assets/dashboard.9c7238b6.js",revision:null},{url:"assets/Demo.84a6e12f.js",revision:null},{url:"assets/palette.a473ce1c.js",revision:null},{url:"assets/README.04140db9.js",revision:null},{url:"assets/README.0c369407.js",revision:null},{url:"assets/README.0e0990cf.js",revision:null},{url:"assets/README.0fea89f6.js",revision:null},{url:"assets/README.1efb2d69.js",revision:null},{url:"assets/README.28e90a12.js",revision:null},{url:"assets/README.2a5f0590.js",revision:null},{url:"assets/README.320a67ac.js",revision:null},{url:"assets/README.400a41e0.js",revision:null},{url:"assets/README.4a1fbbbd.js",revision:null},{url:"assets/README.4d3999af.js",revision:null},{url:"assets/README.4e82927e.js",revision:null},{url:"assets/README.4f08a728.js",revision:null},{url:"assets/README.52d136d8.js",revision:null},{url:"assets/README.5721bf15.js",revision:null},{url:"assets/README.6198025f.js",revision:null},{url:"assets/README.6461deb1.js",revision:null},{url:"assets/README.67197104.js",revision:null},{url:"assets/README.6ec8f0ec.js",revision:null},{url:"assets/README.7165e64b.js",revision:null},{url:"assets/README.779a13ca.js",revision:null},{url:"assets/README.7fc08132.js",revision:null},{url:"assets/README.8ac60bf4.js",revision:null},{url:"assets/README.8eaaaaf9.js",revision:null},{url:"assets/README.8fc709b6.js",revision:null},{url:"assets/README.90f29ed2.js",revision:null},{url:"assets/README.983db324.js",revision:null},{url:"assets/README.9a11ca1a.js",revision:null},{url:"assets/README.a4e9b37f.js",revision:null},{url:"assets/README.a553fe0f.js",revision:null},{url:"assets/README.a6f56087.js",revision:null},{url:"assets/README.b7b27dd9.js",revision:null},{url:"assets/README.bbf4832c.js",revision:null},{url:"assets/README.c28eef21.js",revision:null},{url:"assets/README.cb904659.js",revision:null},{url:"assets/README.d13b1bab.js",revision:null},{url:"assets/README.d4b6b129.js",revision:null},{url:"assets/README.d75a0f8b.js",revision:null},{url:"assets/README.d8db0700.js",revision:null},{url:"assets/README.dd05b60b.js",revision:null},{url:"assets/README.e8f51ec1.js",revision:null},{url:"assets/README.e8fd373e.js",revision:null},{url:"assets/README.ec847142.js",revision:null},{url:"assets/README.f88a0b67.js",revision:null},{url:"assets/README.fa807801.js",revision:null},{url:"assets/README.fd074414.js",revision:null},{url:"assets/README.ff7209ab.js",revision:null},{url:"assets/settings.c0ea89bb.js",revision:null},{url:"assets/star-outline.9de48514.js",revision:null},{url:"assets/start.8a2e22ee.js",revision:null},{url:"assets/vendor.fb128dab.js",revision:null},{url:"components/alert.html",revision:"20adf811c430fe7130c69866e1111dcf"},{url:"components/anchor.html",revision:"d2b737ccab275c3ed9fc5087f9734a0b"},{url:"components/avatar.html",revision:"a58b534f1800e5d269f6c4395ad0d703"},{url:"components/badge.html",revision:"ac697a1c5441de74684b0994218fdfcc"},{url:"components/breadcrumb.html",revision:"0d9987860f2cdad9657687795a3238ad"},{url:"components/button.html",revision:"f595749fc581f7b62d685e2e734bb68a"},{url:"components/card.html",revision:"61df815a112045364ac66b3d0ebf4a2e"},{url:"components/carousel.html",revision:"650a74d126f2fa6d907766f956d03a22"},{url:"components/checkbox.html",revision:"3abf87613ecc0f899f2770a608d95996"},{url:"components/code.html",revision:"8d42fa6262bab5cb9f7b80fa60a44546"},{url:"components/date-picker.html",revision:"ca0492dfdb8ea0e7cb39e9fd3484c588"},{url:"components/device.html",revision:"a7feba87b1aa531479a5eefb691226ef"},{url:"components/dialog.html",revision:"e5653ea6edd1d0c455ddc5a62f1c87e5"},{url:"components/divider.html",revision:"cdce0350d56e308b3f55a7e09ce7df62"},{url:"components/draggable-resizable.html",revision:"b6059cac89a8394e4cdeb5e34ad88b62"},{url:"components/draggable-sortable.html",revision:"c695c62dfb340c7427c54d240b41144f"},{url:"components/draggable.html",revision:"010feac301c25a652e1abadc629409bc"},{url:"components/drawer.html",revision:"94ec14c32eff3ee292fadd4bfa765c26"},{url:"components/form.html",revision:"3a23637c28e74f00c64651454e294e2c"},{url:"components/grid.html",revision:"28d0ed088ea8e5ea84c65c1a84f61709"},{url:"components/hover.html",revision:"90bb4c44845f77b80cafaa3ee963a097"},{url:"components/icon.html",revision:"743135b4f71ffe3814098c2fe4aadbdc"},{url:"components/image.html",revision:"13c730d08cbc79fd81991ffdbb2a1f97"},{url:"components/input.html",revision:"688a37a31ad1ea19666b1e8c93eade08"},{url:"components/layout.html",revision:"79b0c2af8474bd568cb27129aed39438"},{url:"components/lazy.html",revision:"c7f1b980388b5427952e2e7092212a49"},{url:"components/link.html",revision:"2f76f0766751a3b2738748fec15f9551"},{url:"components/list.html",revision:"b885c00248e7182518bf8b49666775da"},{url:"components/menu.html",revision:"33021bfba85ffb9f9117aa934dd070eb"},{url:"components/message-provider.html",revision:"8a83e4970a7795420bc7555e42049281"},{url:"components/notification-provider.html",revision:"d50cec39481c01f0555705d82c970ea7"},{url:"components/overlay.html",revision:"7df3ee88cbc2b5c91b62ede01c7f8bfd"},{url:"components/pagination.html",revision:"e68b4b173a2489eca487d62d660c9bc0"},{url:"components/paper.html",revision:"db98e0126b23daa2a602385529ee719b"},{url:"components/progress.html",revision:"3d764bbd28e673f78fb5d7ef282b5f4e"},{url:"components/radio.html",revision:"8f763f18ee154ce50436d9215b832f43"},{url:"components/responsive.html",revision:"26be65e927ce30c7f36c8cd2fb196fde"},{url:"components/scrollbar.html",revision:"a2d094533e3621954b421817b8b29cf1"},{url:"components/select.html",revision:"703955b1a036b0b4081f6d1b1c3d0de3"},{url:"components/spacer.html",revision:"624284f7495ac8ac2df5ff6d9d784ee6"},{url:"components/switch.html",revision:"eb6059eeea879c56a92747fc725d9057"},{url:"components/table.html",revision:"8b68981e8398652231b469ff699b0834"},{url:"components/tabs.html",revision:"6b3e7a518c1ea4039b32915cceafedc5"},{url:"components/tag.html",revision:"709036ddd9744cea123eaa6d05ab76aa"},{url:"components/tooltip.html",revision:"58ce5238adff32a88052fdd77d1892dc"},{url:"components/transition.html",revision:"9084bcfe028d37ba9b070525928051f8"},{url:"components/typography.html",revision:"b83e83fc4bf1f42d6995ae8496bf8bd8"},{url:"index.html",revision:"7995beb94324c57df2c79696bab2c6d9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"7f9acb243e3aaf8fa564afa0beb4655d"},{url:"zh/palette.html",revision:"0917a170efac22032698b971d0eccfe6"},{url:"zh/start.html",revision:"a6637696f98f05161ec926076f063617"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
