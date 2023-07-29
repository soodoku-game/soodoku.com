(()=>{"use strict";const e=(e,t)=>[...Array(e).keys()].map((e=>t(e))),t=e(9,(e=>e+1)),o={getRow:e=>e%9,getCol:e=>Math.floor(e/9),getIndex:(e,t)=>9*t+e,getZone:(e,t)=>{const n=void 0===t?e:9*t+e,r=o.getRow(n),s=o.getCol(n),i=Math.floor(s/3);return 3*Math.floor(r/3)+i},getZoneIndexs:(e=0)=>{let t=[0,1,2],o=[0,1,2],n=[];for(let r in o){let s=o[r];for(let o in t){let r=t[o];n.push(9*(s+3*Math.floor(e/3))+(r+e%3*3))}}return n}},n=e=>{const t=null==e?0:e.length;if(!t)return[];let o=-1;const n=t-1,r=[].concat(e);for(;++o<t;){const e=o+Math.floor(Math.random()*(n-o+1)),t=r[e];r[e]=r[o],r[o]=t}return r},r=(e,t,n,s,i,l)=>{let u,a=o.getRow(i),f=o.getCol(i),h=o.getZone(i);if(i>=81)return!0;if(-1!==e[i])return r(e,t,n,s,i+1,l);for(let o in l)if(u=l[o],!t[a][u]&&!n[f][u]&&!s[h][u]){if(e[i]=u,t[a][u]=!0,n[f][u]=!0,s[h][u]=!0,r(e,t,n,s,i+1,l))return!0;e[i]=-1,t[a][u]=!1,n[f][u]=!1,s[h][u]=!1}return!1},s=(e,t,n,r,i,l,u)=>{if(u.finishes>1)return;if(i>=81){for(let t=0;t<e.length;++t)if(-1==e[t])return;return u.finishes++,void(u.answer=e)}let a,f=o.getRow(i),h=o.getCol(i),g=o.getZone(i);if(-1===e[i])for(let o in l)a=l[o],t[f][a]||n[h][a]||r[g][a]||(e[i]=a,t[f][a]=!0,n[h][a]=!0,r[g][a]=!0,s([...e],[...t],[...n],[...r],i+1,l,u),e[i]=-1,t[f][a]=!1,n[h][a]=!1,r[g][a]=!1);else s(e,t,n,r,i+1,l,u)};class i{constructor(i,l=!1){if(this.puzzle=i,!i||81!=i.length)throw new Error("is not a 9 * 9 matrix sudoku puzzle");let u,a,f,h=[],g=e(9,(()=>e(10,(()=>!1)))),c=e(9,(()=>e(10,(()=>!1)))),w=e(9,(()=>e(10,(()=>!1))));this.puzzle.forEach(((e,t)=>{u=o.getRow(t),a=o.getCol(t),f=o.getZone(t),-1!==e&&(g[u][e]=!0,c[a][e]=!0,w[f][e]=!0),h.push(e)}));let m=!1;const p=(new Date).getTime();let d=n(t),z=-1;for(let e=0;e<81;++e)if(-1===h[e]){z=e;break}if(l){const e={count:0,finishes:0};if(s(h,g,c,w,z,d,e),e.finishes>1)throw new Error("puzzle is not one-solution sudoku");0==e.finishes?m=!1:(h=e.answer,m=!0)}else m=r(h,g,c,w,z,d);if(!m)throw new Error("not found the solution. is that you give me the puzzle with mistake?");this.answer=h,this.timecount=(new Date).getTime()-p}getPuzzle(){return this.puzzle}getSolution(){return this.answer}}const l=(t,r)=>{r>=10&&(console.log(`reduce the difficulty : ${t} -> ${t-2}`),r=1,t-=2);let s=0,u=n(e(9,(e=>e))),a=e(81,(e=>4==o.getZone(e%9,e/9)?u[s++]+1:-1)),f=((t,r)=>{const s=e(9,(e=>o.getZoneIndexs(e)[Math.random()])).sort(),l=[];t.map(((e,t)=>{s.length>0&&s[0]==t?s.splice(0,1):l.push(t)}));let u=n(l),a=0;for(let e in u){if(a>=r)break;let o=u[e];if(-1!=t[o]){let e=t[o];t[o]=-1;try{a++,new i(t,!0)}catch{t[o]=e,a--}}}return a==r?t:[]})(new i(a).getSolution(),t);return 0===f.length?l(t,r+1):f};onmessage=function({data:e}){if(isNaN(e))postMessage("Please write two numbers");else{const t=Date.now(),o=((e=40)=>{const t=Math.max(Math.min(Math.round(e),80),10);return l(81-t,1)})(e).map((e=>-1===e?0:e)),n=Date.now();console.log(`Complexity ${e}. Time ${(n-t)/1e3}.`),postMessage(o)}}})();