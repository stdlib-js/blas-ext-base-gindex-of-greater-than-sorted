"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var l=f(function(R,d){
var g=require('@stdlib/math-base-special-floor/dist');function p(r,e,t,u,s){var n,i,o,a,v;for(n=t.data,i=t.accessors[0],a=0,v=r;a<v;)o=a+g((v-a)/2),e<i(n,s+o*u)?v=o:a=o+1;return a===r?-1:a}d.exports=p
});var c=f(function(z,q){
var O=require('@stdlib/math-base-special-floor/dist'),G=require('@stdlib/array-base-arraylike2object/dist'),S=l();function T(r,e,t,u,s){var n,i,o,a;if(r<=0)return-1;if(a=G(t),a.accessorProtocol)return S(r,e,a,u,s);for(i=0,o=r;i<o;)n=i+O((o-i)/2),e<t[s+n*u]?o=n:i=n+1;return i===r?-1:i}q.exports=T
});var x=f(function(A,h){
var b=require('@stdlib/strided-base-stride2offset/dist'),m=c();function w(r,e,t,u){return m(r,e,t,u,b(r,u))}h.exports=w
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=x(),k=c();j(y,"ndarray",k);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
