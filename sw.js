if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.1b64eb5b.js",revision:null},{url:"assets/app.9d1a588d.css",revision:null},{url:"assets/dark.cddb20db.js",revision:null},{url:"assets/Demo.0c9e587f.js",revision:null},{url:"assets/palette.9db0ddb5.js",revision:null},{url:"assets/README.07120c78.js",revision:null},{url:"assets/README.0897e2d8.js",revision:null},{url:"assets/README.095a1463.js",revision:null},{url:"assets/README.0ff10e8b.js",revision:null},{url:"assets/README.1326da63.js",revision:null},{url:"assets/README.1a639adc.js",revision:null},{url:"assets/README.1c96d923.js",revision:null},{url:"assets/README.1db28efd.js",revision:null},{url:"assets/README.2101b5ab.js",revision:null},{url:"assets/README.2377494d.js",revision:null},{url:"assets/README.291b17e1.js",revision:null},{url:"assets/README.389e76a7.js",revision:null},{url:"assets/README.3ece20fc.js",revision:null},{url:"assets/README.3fc9bc07.js",revision:null},{url:"assets/README.4474aeca.js",revision:null},{url:"assets/README.51b8dc32.js",revision:null},{url:"assets/README.52d1a597.js",revision:null},{url:"assets/README.5846e7a2.js",revision:null},{url:"assets/README.5f767e0b.js",revision:null},{url:"assets/README.5fbcb01a.js",revision:null},{url:"assets/README.62c92846.js",revision:null},{url:"assets/README.6eac9684.js",revision:null},{url:"assets/README.7677c353.js",revision:null},{url:"assets/README.8255d1e3.js",revision:null},{url:"assets/README.831f4464.js",revision:null},{url:"assets/README.876ab628.js",revision:null},{url:"assets/README.877b1f73.js",revision:null},{url:"assets/README.87fe7f18.js",revision:null},{url:"assets/README.9de235fe.js",revision:null},{url:"assets/README.a77a20b5.js",revision:null},{url:"assets/README.a933917f.js",revision:null},{url:"assets/README.aba69235.js",revision:null},{url:"assets/README.be74635f.js",revision:null},{url:"assets/README.c7eb872d.js",revision:null},{url:"assets/README.ca42347e.js",revision:null},{url:"assets/README.cf5253f2.js",revision:null},{url:"assets/README.d2c41246.js",revision:null},{url:"assets/README.d7f22e59.js",revision:null},{url:"assets/README.d9a293fd.js",revision:null},{url:"assets/README.dc6da58d.js",revision:null},{url:"assets/README.ef7e1046.js",revision:null},{url:"assets/README.f03965a5.js",revision:null},{url:"assets/README.f6c6cb96.js",revision:null},{url:"assets/README.f7b4511c.js",revision:null},{url:"assets/README.f7ea73f5.js",revision:null},{url:"assets/README.fd09fa6f.js",revision:null},{url:"assets/README.fd80d153.js",revision:null},{url:"assets/start.156494e6.js",revision:null},{url:"assets/vendor.34ae33de.js",revision:null},{url:"components/alert.html",revision:"8b540fbd0167c7a3a637e227be5c87d6"},{url:"components/anchor.html",revision:"22cde77323c18261f18385f9db8a71e2"},{url:"components/avatar.html",revision:"f0b646746337bf1ce72e9283725a1213"},{url:"components/badge.html",revision:"9bc9bda1ebf785dd375f6d08ff43d21e"},{url:"components/breadcrumb.html",revision:"357965ee2846d9bd1b08caf736147b21"},{url:"components/button.html",revision:"bb5e77c24d1b21b824ec34b0e1032abe"},{url:"components/card.html",revision:"8977968dae6e5eb02437687224f06042"},{url:"components/carousel.html",revision:"bcc8308a10c739f2bf72f6253c71b560"},{url:"components/checkbox.html",revision:"f668f66e46a03d8116f8b39e969a8d6f"},{url:"components/code.html",revision:"706615db826537896ef35b638eecac03"},{url:"components/date-picker.html",revision:"bd5e3af85aa954732dc39945571f2ba5"},{url:"components/device.html",revision:"0fa3fee384c19e55ae31f2c3b53bd251"},{url:"components/dialog.html",revision:"43f1b1d43034f80dc5f17ec1377cf338"},{url:"components/divider.html",revision:"3ffe529c57766aa725e75e264bbe354d"},{url:"components/draggable-resizable.html",revision:"2df8e335ddc4b99183e26877cf895b86"},{url:"components/draggable-sortable.html",revision:"3afda273adf2ddcc067679e6ca9f79df"},{url:"components/draggable.html",revision:"9fb0b839bc4629507ff96df04cde51bf"},{url:"components/drawer.html",revision:"aeff8ea32573f36f9bab2c2ef400ecf1"},{url:"components/form.html",revision:"fa67d7d53a9941b6f8e13e24fa45c91e"},{url:"components/grid.html",revision:"06d271eeba12aa50f89103a1bdc44b0c"},{url:"components/hover.html",revision:"43ea3ed4f9f4f56ce7c4c7eb87323ba4"},{url:"components/icon.html",revision:"f5ba7e8035edb2d89fd9fa4e3b6d9c16"},{url:"components/image.html",revision:"5a398efb45cef880a4d27ed8ae2b1648"},{url:"components/input.html",revision:"f731d087d0462f0b2128a99739fabcb6"},{url:"components/layout.html",revision:"c1df3a2780df166b3512d6d76e06d548"},{url:"components/lazy.html",revision:"59c1a010ab4318c737e56cb53aa00038"},{url:"components/link.html",revision:"5742c5d505a80d762adec88b4a0cc5e3"},{url:"components/list.html",revision:"1533c9bc264d764fcf8b0509a9331ab5"},{url:"components/menu.html",revision:"f9a238a22b9f19255d7225bb8e71c0b6"},{url:"components/message-provider.html",revision:"0c3046aea93d12b87de2db27e7043d75"},{url:"components/notification-provider.html",revision:"8b1ed0a5bf52ca75d2ec34bbac07bfca"},{url:"components/overlay.html",revision:"1fa5efb04c4d6a789666a5cfa226bfff"},{url:"components/pagination.html",revision:"a1d9814839bded8ee4b0ad42e291e6bb"},{url:"components/paper.html",revision:"9c525601feacc4d9a4f65d653106ac97"},{url:"components/progress.html",revision:"92484c6755f19fdb9c4ad94f38bc29f4"},{url:"components/radio.html",revision:"85dce04e6125e7ed7c15a76ed8c062a2"},{url:"components/responsive.html",revision:"661235dee4315a531e5ef9cdab502eba"},{url:"components/scrollbar.html",revision:"fa50cf962cd8c352a301de2cceba6df5"},{url:"components/select.html",revision:"e6c1a05bab0fc33bf46d4bbf5905b486"},{url:"components/spacer.html",revision:"fc73c518c2c165419736155ae0028bde"},{url:"components/switch.html",revision:"7ba1ee0bc091fc059d4970195ed593d1"},{url:"components/table.html",revision:"398054daee601fde3dd26f72bef78af3"},{url:"components/tabs.html",revision:"c569e8f8fbba38fe4c58b3e493cd2ec3"},{url:"components/tag.html",revision:"01d12cbc6ef7f44b43bb35b612ff2405"},{url:"components/tooltip.html",revision:"a81eeaeb0464dbb41a6b4c2b8b63984a"},{url:"components/transition.html",revision:"c7a75037080d18cb0edf4611fe4c5965"},{url:"components/typography.html",revision:"3f4362cb9b2a4662cbfc1c76589a03b1"},{url:"index.html",revision:"20cbc33da739f2a297987bc791323821"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"1305e2fbd6c23398568987408b9d27ac"},{url:"zh/palette.html",revision:"fe6fc213411757725ffe42c73d2c0f3c"},{url:"zh/start.html",revision:"96abd637abf8605e38e56152447d2721"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
