if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>c(e,r),o={module:{uri:r},exports:n,require:l};i[r]=Promise.all(d.map((e=>o[e]||l(e)))).then((e=>(s(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/14/hello-world/index.html",revision:"406e20b7969e94a24b7fa2ca0d933a09"},{url:"2022/04/17/遗忘的天梯赛/index.html",revision:"a55f9bbc0b9ffe9371ab45b8dec07e92"},{url:"404.html",revision:"0060fe5e57bb2883598e702feaad4f79"},{url:"archives/2022/04/index.html",revision:"37c6ad6ec324facfbca672cd60a2c8a5"},{url:"archives/2022/index.html",revision:"4e1c3877288b725eee4908a22155e402"},{url:"archives/index.html",revision:"e34e42dd3859f93d4a349bc34ddfeb51"},{url:"categories/index.html",revision:"271ed17d4e24f228bc385ad35c3e17c2"},{url:"css/index.css",revision:"1018be9376124eb4663cb587ea21ed94"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"68edd17283445dc7c78baef51ae7d3f2"},{url:"img/2.png",revision:"a02c2d3d7e475bdc57f86411ae32a55e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/default.png",revision:"e5cbbf66435f5c8d691864ae7c6b46e2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"1423206c0474cc3ec9f48815208879c9"},{url:"index.html",revision:"eb011042d50b578900873d095ad56f7d"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"ac825667b52c8a52b2dc813e4bd32b70"},{url:"static/css/color.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"static/css/custom.css",revision:"4bc861f638159ce46ae7d90903399199"},{url:"tags/index.html",revision:"40180c189077c314961f46cd6de69c58"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
