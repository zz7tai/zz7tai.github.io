if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>c(e,r),a={module:{uri:r},exports:n,require:l};i[r]=Promise.all(d.map((e=>a[e]||l(e)))).then((e=>(s(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/14/hello-world/index.html",revision:"7b86328e13ba0bdb6da5aa590fc7bdb1"},{url:"2022/04/17/遗忘的天梯赛/index.html",revision:"26925a173cd26039cffece23fac8a62c"},{url:"404.html",revision:"b786b5e840f02b5ec521dce301527b08"},{url:"archives/2022/04/index.html",revision:"4196258e92e490d65793e3535dc71c41"},{url:"archives/2022/index.html",revision:"f8f2a06502efb75ec514aa4695c1236c"},{url:"archives/index.html",revision:"fc77fda15d22d92bc98cafa728dca94d"},{url:"categories/index.html",revision:"96647ad150cc56db3bc9f9d91373cb46"},{url:"css/index.css",revision:"1018be9376124eb4663cb587ea21ed94"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"68edd17283445dc7c78baef51ae7d3f2"},{url:"img/2.png",revision:"a02c2d3d7e475bdc57f86411ae32a55e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/default.png",revision:"e5cbbf66435f5c8d691864ae7c6b46e2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"1423206c0474cc3ec9f48815208879c9"},{url:"index.html",revision:"2797082de52d29feff04431a43d0073b"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"222e2d3650af5f42c9a99bc053381ba5"},{url:"static/css/color.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"static/css/custom.css",revision:"4bc861f638159ce46ae7d90903399199"},{url:"tags/index.html",revision:"c9d4ce64b72d158d483b2a0974977f9a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
