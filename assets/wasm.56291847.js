import{g as m,o as p,c as v,h as w,H as x,a2 as W}from"./index.d33c2df8.js";let i,y=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});y.decode();let f=null;function u(){return(f===null||f.buffer!==i.memory.buffer)&&(f=new Uint8Array(i.memory.buffer)),f}function b(e,t){return y.decode(u().subarray(e,e+t))}let d=0,_=new TextEncoder("utf-8");const A=typeof _.encodeInto=="function"?function(e,t){return _.encodeInto(e,t)}:function(e,t){const n=_.encode(e);return t.set(n),{read:e.length,written:n.length}};function g(e,t,n){if(n===void 0){const c=_.encode(e),l=t(c.length);return u().subarray(l,l+c.length).set(c),d=c.length,l}let o=e.length,a=t(o);const r=u();let s=0;for(;s<o;s++){const c=e.charCodeAt(s);if(c>127)break;r[a+s]=c}if(s!==o){s!==0&&(e=e.slice(s)),a=n(a,o,o=s+e.length*3);const c=u().subarray(a+s,a+o);s+=A(e,c).written}return d=s,a}function R(e){var t=g(e,i.__wbindgen_malloc,i.__wbindgen_realloc),n=d;i.hello(t,n)}function T(e){var t=g(e,i.__wbindgen_malloc,i.__wbindgen_realloc),n=d;i.welcome(t,n)}async function S(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}async function h(e){typeof e=="undefined"&&(e=new URL("/assets/vue_vite_wasm_demo_bg.4054a734.wasm",self.location));const t={};t.wbg={},t.wbg.__wbg_log_c9c40a53594ad3e5=function(a,r){console.log(b(a,r))},t.wbg.__wbg_alert_7652334aef9ee1c6=function(a,r){alert(b(a,r))},(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:o}=await S(await e,t);return i=n.exports,h.__wbindgen_wasm_module=o,i}const k=W("Rust + Wasm"),E={__name:"wasm",setup(e){h().then(n=>{R("\u5929\u554F")});const t=()=>{T("Tiven")};return(n,o)=>{const a=m("van-divider"),r=m("van-button");return p(),v("div",null,[w(a,null,{default:x(()=>[k]),_:1}),w(r,{type:"success",icon:"like-o",zise:"mini",text:"Hello, Rust + Wasm",onClick:t,"loading-text":"loading..."})])}}};export{E as default};
