if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>n(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(l.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-a2b61380"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.0d7b462e.js",revision:null},{url:"assets/app.6a4a5a2f.css",revision:null},{url:"assets/Demo.019d3f95.js",revision:null},{url:"assets/palette.0d400892.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/README.03727263.js",revision:null},{url:"assets/README.074eb843.js",revision:null},{url:"assets/README.14dbe06b.js",revision:null},{url:"assets/README.17438523.js",revision:null},{url:"assets/README.1aa2fa57.js",revision:null},{url:"assets/README.280cbdbf.js",revision:null},{url:"assets/README.2a432dd2.js",revision:null},{url:"assets/README.2cde8bba.js",revision:null},{url:"assets/README.31fc355b.js",revision:null},{url:"assets/README.3431c6d7.js",revision:null},{url:"assets/README.3886ca66.js",revision:null},{url:"assets/README.3996e441.js",revision:null},{url:"assets/README.3a6ef5d5.js",revision:null},{url:"assets/README.3f8631b4.js",revision:null},{url:"assets/README.46decb99.js",revision:null},{url:"assets/README.561775c9.js",revision:null},{url:"assets/README.56219038.js",revision:null},{url:"assets/README.60a2ed36.js",revision:null},{url:"assets/README.62ccc912.js",revision:null},{url:"assets/README.64c5cfa4.js",revision:null},{url:"assets/README.68376de9.js",revision:null},{url:"assets/README.6e6eb23f.js",revision:null},{url:"assets/README.765291bc.js",revision:null},{url:"assets/README.77222d54.js",revision:null},{url:"assets/README.773e0fa2.js",revision:null},{url:"assets/README.7837627b.js",revision:null},{url:"assets/README.88b4fc12.js",revision:null},{url:"assets/README.8c2c37d7.js",revision:null},{url:"assets/README.952fe344.js",revision:null},{url:"assets/README.9deef7bf.js",revision:null},{url:"assets/README.9f9102f4.js",revision:null},{url:"assets/README.b653201d.js",revision:null},{url:"assets/README.c4ba5a64.js",revision:null},{url:"assets/README.c747b9be.js",revision:null},{url:"assets/README.caf05ebb.js",revision:null},{url:"assets/README.cd5fb265.js",revision:null},{url:"assets/README.d1053562.js",revision:null},{url:"assets/README.d335b308.js",revision:null},{url:"assets/README.d75cf6ad.js",revision:null},{url:"assets/README.dc319eb1.js",revision:null},{url:"assets/README.ddd543de.js",revision:null},{url:"assets/README.e9d8d161.js",revision:null},{url:"assets/README.ed0d484b.js",revision:null},{url:"assets/start.0cda90b6.js",revision:null},{url:"assets/vendor.3ce0eb89.js",revision:null},{url:"components/alert.html",revision:"4626b587f430a81d97ffdbc30ddde6cc"},{url:"components/anchor.html",revision:"1bcdf40618fc996e46b78bfdd09c8c91"},{url:"components/avatar.html",revision:"da57b3805c30462ecee8355acd37c0dd"},{url:"components/badge.html",revision:"f8188a049a4913ca39aadc965bac6b7f"},{url:"components/breadcrumb.html",revision:"17c0e400ee92901b6970f7e0b542d171"},{url:"components/button.html",revision:"c7a088ed999a6ee84df095db291015bf"},{url:"components/card.html",revision:"5e719348385c4006901d6a72107776b5"},{url:"components/carousel.html",revision:"1854f20aef951c76895b99c7a51a62c0"},{url:"components/checkbox.html",revision:"0050d442311e79b6261622dfe1783252"},{url:"components/code.html",revision:"fdb4698011e45ba283ed82c698b3d9a9"},{url:"components/date-picker.html",revision:"2ef917b75273dba8690d51b7b3c7281d"},{url:"components/device.html",revision:"8cba7a83dbfdf2f4d5e32d64a866881a"},{url:"components/dialog.html",revision:"9a7ada5b613f2b758a3334e8e1de50b0"},{url:"components/divider.html",revision:"7943d8398192be0e27979e685cb9350f"},{url:"components/drag.html",revision:"814aad517a4a2a077f718c307bc22cbc"},{url:"components/drawer.html",revision:"e09ed47716197a0d354b5483b3250d11"},{url:"components/form.html",revision:"eb500f63487036d6fc2175ae1a603b17"},{url:"components/grid.html",revision:"b8b5f49d3381228b18b58af8c2a606c8"},{url:"components/hover.html",revision:"f501d5d9f89d547c1fe5c49873b99add"},{url:"components/icon.html",revision:"4ed7a91feb91983e2bae76710800c964"},{url:"components/image.html",revision:"d2d6a8bafbd1459284c8167520c14cb4"},{url:"components/input.html",revision:"c045dcea02d3bb2877f9bbe9c4c796a2"},{url:"components/layout.html",revision:"bfe6f0c6f9fabdd1176159becdfa38b5"},{url:"components/lazy.html",revision:"5e122c215a4ef39a05d0a773c0acdb5e"},{url:"components/link.html",revision:"9f2fd71f0fffb8b2aed3411c116ec44f"},{url:"components/list.html",revision:"840bce46a3841d4dca7fc4cf6c9f328d"},{url:"components/menu.html",revision:"4de4ea235328d5db0179d012a3297002"},{url:"components/message-provider.html",revision:"4ebc2088854aacbdaaef3e604af9eaa1"},{url:"components/notification-provider.html",revision:"dc34b3aafdebabf521b95a90c7ddd004"},{url:"components/overlay.html",revision:"902ca4d53f59d323ef5df2d6f80eef82"},{url:"components/pagination.html",revision:"bbc7160039f4ebf0c0161f23bd391768"},{url:"components/paper.html",revision:"8dbc4a7fc910060273e033eb2f944a86"},{url:"components/progress.html",revision:"d37ee2cc2c590fe7ba143dd5ea90dca0"},{url:"components/radio.html",revision:"dff9d96dc275313b4b5f72c541c7f26a"},{url:"components/responsive.html",revision:"efd2cff2548e01dc09e1868e52a80601"},{url:"components/select.html",revision:"7cd690df900d83c4e0e68e974d8cda83"},{url:"components/spacer.html",revision:"03ac68d61388f757de5860b18925e68e"},{url:"components/switch.html",revision:"7fb1e675c7452e94a0d746c0fece7845"},{url:"components/table.html",revision:"58bce252f358c38472dd3164b412b00b"},{url:"components/tag.html",revision:"b87338da516b7370d0f171accd3f9289"},{url:"components/tooltip.html",revision:"91dfd10769b292ef2c2c1e72517aaa76"},{url:"components/transition.html",revision:"d3da38a50d008f3526be8cba936bf780"},{url:"components/typography.html",revision:"c63f685d9f22f232d13fc37b6087fb95"},{url:"index.html",revision:"fadb2a780c196d5c72560cd693a202e2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/palette.html",revision:"65731f5cdd98f3407cf4fd08a3f91687"},{url:"zh/start.html",revision:"b6b5bd60e7eddfd52f7838a0ee3f89d0"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
