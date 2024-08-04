// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=2147483647,t=2146435072,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,c="function"==typeof o?o.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,o,f;if(null==r)return i.call(r);t=r[c],f=c,e=null!=(o=r)&&a.call(o,f);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)},u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=r,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),t=e,r=(g&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,t;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),t=e,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,t;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),t=e,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var k,x={uint16:_,uint8:E};(k=new x.uint16(1))[0]=4660;var F=52===new x.uint8(k.buffer)[0],j=!0===F?1:0,T=new w(1),N=new y(T.buffer);function O(r){return T[0]=r,N[j]}function V(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var $=-.16666666666666632,G=.00833333333332249,H=-.0001984126982985795,W=27557313707070068e-22,C=-2.5050760253406863e-8,L=1.58969099521155e-10;function P(r,e){var t,n,i;return t=G+(i=r*r)*(H+i*W)+i*(i*i)*(C+i*L),n=i*r,0===e?r+n*($+i*t):r-(i*(.5*e-n*t)-e-n*$)}var R,Z,M=1048575,X=!0===F?0:1,Y=new w(1),z=new y(Y.buffer);!0===F?(R=1,Z=0):(R=0,Z=1);var q={HIGH:R,LOW:Z},B=new w(1),D=new y(B.buffer),J=q.HIGH,K=q.LOW;function Q(r,e){return D[J]=r,D[K]=e,B[0]}var rr=Math.floor,er=Number.POSITIVE_INFINITY,tr=Number.NEGATIVE_INFINITY,nr=1023,ir=1023,ar=-1023,or=-1074;function cr(r){return r!=r}function fr(r){return r===er||r===tr}var ur=2147483648,sr="function"==typeof Object.defineProperty?Object.defineProperty:null,lr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function gr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+yr(i):yr(i)+r,n&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function vr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,Ir=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Fr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ar.call(t,xr,"$1e"),t=Ar.call(t,kr,"e"),t=Ar.call(t,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ar.call(t,_r,"e+0$1"),t=Ar.call(t,Er,"e-0$1"),r.alternate&&(t=Ar.call(t,Ur,"$1."),t=Ar.call(t,Sr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function jr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Tr=String.fromCharCode,Nr=Array.isArray;function Or(r){return r!=r}function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,n,i,a,o,c,f,u,s,l,p,y;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Or(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Or(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=vr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Or(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Or(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Fr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=n.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Hr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){var e,t;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}var Lr,Pr,Rr=Object.prototype,Zr=Rr.toString,Mr=Rr.__defineGetter__,Xr=Rr.__defineSetter__,Yr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Yr.call(r,e)||zr.call(r,e)?(n=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Mr&&Mr.call(r,e,t.get),o&&Xr&&Xr.call(r,e,t.set),r};function Br(r,e,t){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===F?(Lr=1,Pr=0):(Lr=0,Pr=1);var Dr={HIGH:Lr,LOW:Pr},Jr=new w(1),Kr=new y(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}Br(te,"assign",ee);var ne=[0,0],ie=22250738585072014e-324,ae=4503599627370496;function oe(r,e,t,n){return cr(r)||fr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ie?(e[n]=r*ae,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Br((function(r){return oe(r,[0,0],1,0)}),"assign",oe);var ce=2220446049250313e-31,fe=2148532223,ue=[0,0],se=[0,0];function le(r,n){var i,a,o,c,f,u;return 0===n||0===r||cr(r)||fr(r)?r:(oe(r,ue,1,0),r=ue[0],n+=ue[1],n+=function(r){var e=O(r);return(e=(e&t)>>>20)-nr|0}(r),n<or?(o=0,c=r,te.assign(o,ne,1,0),f=ne[0],f&=e,u=O(c),Q(f|=u&=ur,ne[1])):n>ir?r<0?tr:er:(n<=ar?(n+=52,a=ce):a=1,te.assign(r,se,1,0),i=se[0],i&=fe,a*Q(i|=n+nr<<20,se[1])))}function pe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],de=16777216,he=5.960464477539063e-8,ve=pe(20),we=pe(20),be=pe(20),me=pe(20);function Ae(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=he*v|0,me[y]=v-de*s|0,v=n[h-1]+s,h-=1;if(v=le(v,i),v-=8*rr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=me[t-1]>>24-i,me[t-1]-=y<<24-i,l=me[t-1]>>23-i):0===i?l=me[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=me[y],0===u?0!==h&&(u=1,me[y]=16777216-h):me[y]=16777215-h;if(i>0)switch(i){case 1:me[t-1]&=8388607;break;case 2:me[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=le(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=me[y];if(0===h){for(g=1;0===me[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=ye[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return Ae(r,e,t+=g,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===me[t];)t-=1,i-=24;else(v=le(v,-i))>=de?(s=he*v|0,me[t]=v-de*s|0,i+=24,me[t+=1]=s):me[t]=0|v;for(s=le(1,i),y=t;y>=0;y--)n[y]=s*me[y],s*=he;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ge[g]*n[y+g];be[t-y]=s}for(s=0,y=t;y>=0;y--)s+=be[y];for(e[0]=0===l?s:-s,s=be[0]-s,y=1;y<=t;y++)s+=be[y];return e[1]=0===l?s:-s,7&d}function _e(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ve[f]=u<0?0:ye[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ve[o+(f-u)];we[f]=i}return Ae(r,e,4,we,c,4,a,o,ve)}var Ee=Math.round,Ue=.6366197723675814,Se=1.5707963267341256,Ie=6077100506506192e-26,ke=6077100506303966e-26,xe=20222662487959506e-37,Fe=20222662487111665e-37,je=84784276603689e-45,Te=2047;function Ne(r,e,t){var n,i,a,o,c;return a=r-(n=Ee(r*Ue))*Se,o=n*Ie,c=e>>20|0,t[0]=a-o,c-(O(t[0])>>20&Te)>16&&(o=n*xe-((i=a)-(a=i-(o=n*ke))-o),t[0]=a-o,c-(O(t[0])>>20&Te)>49&&(o=n*je-((i=a)-(a=i-(o=n*Fe))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Oe=0,Ve=16777216,$e=1.5707963267341256,Ge=6077100506506192e-26,He=2*Ge,We=3*Ge,Ce=4*Ge,Le=598523,Pe=1072243195,Re=1073928572,Ze=1074752122,Me=1074977148,Xe=1075183036,Ye=1075388923,ze=1075594811,qe=1094263291,Be=[0,0,0],De=[0,0];function Je(r,n){var i,a,o,c,f,u,s;if((o=O(r)&e|0)<=Pe)return n[0]=r,n[1]=0,0;if(o<=Ze)return(o&M)===Le?Ne(r,o,n):o<=Re?r>0?(s=r-$e,n[0]=s-Ge,n[1]=s-n[0]-Ge,1):(s=r+$e,n[0]=s+Ge,n[1]=s-n[0]+Ge,-1):r>0?(s=r-2*$e,n[0]=s-He,n[1]=s-n[0]-He,2):(s=r+2*$e,n[0]=s+He,n[1]=s-n[0]+He,-2);if(o<=ze)return o<=Xe?o===Me?Ne(r,o,n):r>0?(s=r-3*$e,n[0]=s-We,n[1]=s-n[0]-We,3):(s=r+3*$e,n[0]=s+We,n[1]=s-n[0]+We,-3):o===Ye?Ne(r,o,n):r>0?(s=r-4*$e,n[0]=s-Ce,n[1]=s-n[0]-Ce,4):(s=r+4*$e,n[0]=s+Ce,n[1]=s-n[0]+Ce,-4);if(o<qe)return Ne(r,o,n);if(o>=t)return n[0]=NaN,n[1]=NaN,0;for(i=function(r){return Y[0]=r,z[X]}(r),s=Q(o-((a=(o>>20)-1046)<<20|0),i),f=0;f<2;f++)Be[f]=0|s,s=(s-Be[f])*Ve;for(Be[2]=s,c=3;Be[c-1]===Oe;)c-=1;return u=_e(Be,De,a,c),r<0?(n[0]=-De[0],n[1]=-De[1],-u):(n[0]=De[0],n[1]=De[1],u)}var Ke=1072243195,Qe=1045430272,rt=[0,0];return function(r){return(1-function(r){var n;if(n=O(r),(n&=e)<=Ke)return n<Qe?r:P(r,0);if(n>=t)return NaN;switch(3&Je(r,rt)){case 0:return P(rt[0],rt[1]);case 1:return V(rt[0],rt[1]);case 2:return-P(rt[0],rt[1]);default:return-V(rt[0],rt[1])}}(r))/2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).hacoversin=e();
//# sourceMappingURL=index.js.map
