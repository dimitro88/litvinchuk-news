(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+fGH":function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t.Articles="articles",t}({})},WAaD:function(t,r,e){"use strict";e.d(r,"a",(function(){return p}));var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}for(var s=[],u=0;u<256;++u)s[u]=(u+256).toString(16).substr(1);var i=function(t,r,e){var n=r&&e||0;"string"==typeof t&&(r="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r)for(var u=0;u<16;++u)r[n+u]=o[u];return r||function(t,r){var e=0;return[s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]]].join("")}(o)},c=e("fXoL");let p=(()=>{class t{constructor(){}static generateId(){return i()}saveEntity(r,e){const n=Object.assign(Object.assign({},e),{id:t.generateId()}),o=JSON.parse(localStorage.getItem(r));return o?(o.push(n),localStorage.setItem(r,JSON.stringify(o))):localStorage.setItem(r,JSON.stringify([n])),JSON.parse(JSON.stringify(n))}getAll(t){return JSON.parse(localStorage.getItem(t))}getById(t,r){const e=JSON.parse(localStorage.getItem(t));return e?e.find(t=>t.id===r):null}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);