"use strict";var g=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var p=g(function(J,l){
var x=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-floor/dist'),T=require('@stdlib/blas-ext-base-gindex-of-greater-than/dist').ndarray;function s(r,a,v,e,n){var t,o,i,q,u,d,f,c,y;if(t=v.data,o=v.accessors[0],f=o(t,n),c=o(t,n+(r-1)*e),x(f)||x(c))return T(r,a,t,e,n);if(f>=c)return f>a?0:-1;for(u=0,d=r;u<d;){if(q=u+k((d-u)/2),y=o(t,n+q*e),x(y))return i=T(r-u,a,t,e,n+u*e),i<0?i:i+u;a<y?d=q:u=q+1}return u===r?-1:u}l.exports=s
});var G=g(function(K,b){
var O=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-floor/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),S=require('@stdlib/blas-ext-base-gindex-of-greater-than/dist').ndarray,z=p();function A(r,a,v,e,n){var t,o,i,q,u,d,f,c;if(r<=0)return-1;if(f=R(v),f.accessorProtocol)return z(r,a,f,e,n);if(u=v[n],d=v[n+(r-1)*e],O(u)||O(d))return S(r,a,v,e,n);if(u>=d)return u>a?0:-1;for(i=0,q=r;i<q;){if(o=i+P((q-i)/2),c=v[n+o*e],O(c))return t=S(r-i,a,v,e,n+i*e),t<0?t:t+i;a<c?q=o:i=o+1}return i===r?-1:i}b.exports=A
});var w=g(function(L,h){
var B=require('@stdlib/strided-base-stride2offset/dist'),C=G();function D(r,a,v,e){return C(r,a,v,e,B(r,e))}h.exports=D
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=w(),H=G();F(j,"ndarray",H);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
