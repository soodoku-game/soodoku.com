if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const l=e=>r(e,o),c={module:{uri:o},exports:f,require:l};i[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(s(...e),f)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"9d5c99ceb699e8db8323df5554e7a079"},{url:"/418.b091.js",revision:null},{url:"/548.a8d5.js",revision:null},{url:"/apple-touch-icon.png",revision:"7a18f90af990ee98cd6407d457477794"},{url:"/barlow.woff2",revision:"700ab8c9fe150f2e542f2f90514e0860"},{url:"/core.763f.js",revision:null},{url:"/core.css",revision:"0253515a000023374b82470c723230dd"},{url:"/favicon-32x32.png",revision:"e2c2d4204c5b57bd17d97df0074f7fa9"},{url:"/favicon.ico",revision:"75f6756075454a104f1a6e75459114c8"},{url:"/icon.svg",revision:"f65874ec85611af876f27cc935139ff4"},{url:"/index.html",revision:"9d5c99ceb699e8db8323df5554e7a079"},{url:"/insights.js",revision:"a12c0b980880aaec4f0816f7662e8749"},{url:"/lang/en.js",revision:"92d0e397dca381527e5a1b5ea5ef8a0a"},{url:"/lang/tr.js",revision:"136c116c0bb7792e5c01500295ecdf98"},{url:"/level/0.json",revision:"77eb95342a1715daa52e176dfa080300"},{url:"/libs.229b.js",revision:null},{url:"/main.63f1.js",revision:null},{url:"/main.css",revision:"a31d6f8ffe83dc3cb48375f7b96b8b31"},{url:"/manifest.webmanifest",revision:"a38d7fbfc414c1a65b340b14e063178d"},{url:"/open.woff2",revision:"e80d0d67f9b2de529f6c54fb23b48e5a"}],{}),e.cleanupOutdatedCaches(),self.__WB_DISABLE_DEV_LOGS=!0}));
