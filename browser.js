// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=2147483647,t=2146435072,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,c="function"==typeof o?o.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,o,f;if(null==r)return i.call(r);t=r[c],f=c,e=null!=(o=r)&&a.call(o,f);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)},u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=r,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),t=e,r=(g&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,t;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),t=e,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,U="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,t;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),t=e,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var k,x={uint16:_,uint8:E};(k=new x.uint16(1))[0]=4660;var F=52===new x.uint8(k.buffer)[0],j=!0===F?1:0,N=new w(1),T=new y(N.buffer);function O(r){return N[0]=r,T[j]}function V(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var $=-.16666666666666632;function G(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*($+i*t):r-(i*(.5*e-n*t)-e-n*$)}var H,W,C=!0===F?0:1,L=new w(1),P=new y(L.buffer);!0===F?(H=1,W=0):(H=0,W=1);var R={HIGH:H,LOW:W},Z=new w(1),M=new y(Z.buffer),X=R.HIGH,Y=R.LOW;function z(r,e){return M[X]=r,M[Y]=e,Z[0]}var q=Math.floor,B=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY;function J(r){return r!=r}function K(r){return r===B||r===D}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null,rr=Object.defineProperty;function er(r){return"number"==typeof r}function tr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function nr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+tr(i):tr(i)+r,n&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!er(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=nr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=nr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ar.call(r.specifier)?ar.call(t):ir.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function cr(r){return"string"==typeof r}var fr=Math.abs,ur=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,yr=/e-(\d)$/,gr=/^(\d+)$/,dr=/^(\d+)e/,hr=/\.0$/,vr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":fr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=lr.call(t,wr,"$1e"),t=lr.call(t,vr,"e"),t=lr.call(t,hr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=lr.call(t,pr,"e+0$1"),t=lr.call(t,yr,"e-0$1"),r.alternate&&(t=lr.call(t,gr,"$1."),t=lr.call(t,dr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):ur.call(t)}function mr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ar(r,e,t){var n=e-r.length;return n<0?r:r=t?r+mr(n):mr(n)+r}var _r=String.fromCharCode,Er=isNaN,Ur=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,t,n,i,a,o,c,f,u;if(!Ur(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(cr(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Ir(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Er(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Er(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=or(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Er(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Er(a)?String(n.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=br(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ar(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fr(r){var e,t,n,i;for(t=[],i=0,n=kr.exec(r);n;)(e=r.slice(i,kr.lastIndex-n[0].length)).length&&t.push(e),t.push(xr(n)),i=kr.lastIndex,n=kr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function jr(r){return"string"==typeof r}function Nr(r){var e,t,n;if(!jr(r))throw new TypeError(Nr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Fr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Sr.apply(null,t)}var Tr,Or,Vr=Object.prototype,$r=Vr.toString,Gr=Vr.__defineGetter__,Hr=Vr.__defineSetter__,Wr=Vr.__lookupGetter__,Cr=Vr.__lookupSetter__,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$r.call(r))throw new TypeError(Nr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$r.call(t))throw new TypeError(Nr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Wr.call(r,e)||Cr.call(r,e)?(n=r.__proto__,r.__proto__=Vr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gr&&Gr.call(r,e,t.get),o&&Hr&&Hr.call(r,e,t.set),r};function Pr(r,e,t){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===F?(Tr=1,Or=0):(Tr=0,Or=1);var Rr={HIGH:Tr,LOW:Or},Zr=new w(1),Mr=new y(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,t,n){return Zr[0]=r,e[n]=Mr[Xr],e[n+t]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}Pr(qr,"assign",zr);var Br=[0,0];function Dr(r,e,t,n){return J(r)||K(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Pr((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,n){var i,a,o,c,f,u;return 0===n||0===r||J(r)||K(r)?r:(Dr(r,Jr,1,0),n+=Jr[1],n+=function(r){var e=O(r);return(e=(e&t)>>>20)-1023|0}(r=Jr[0]),n<-1074?(o=0,c=r,qr.assign(o,Br,1,0),f=Br[0],f&=e,u=O(c),z(f|=u&=2147483648,Br[1])):n>1023?r<0?D:B:(n<=-1023?(n+=52,a=2220446049250313e-31):a=1,qr.assign(r,Kr,1,0),i=Kr[0],i&=2148532223,a*z(i|=n+1023<<20,Kr[1])))}function re(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ne=16777216,ie=5.960464477539063e-8,ae=re(20),oe=re(20),ce=re(20),fe=re(20);function ue(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ie*v|0,fe[y]=v-ne*s|0,v=n[h-1]+s,h-=1;if(v=Qr(v,i),v-=8*q(.125*v),v-=d=0|v,l=0,i>0?(d+=y=fe[t-1]>>24-i,fe[t-1]-=y<<24-i,l=fe[t-1]>>23-i):0===i?l=fe[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=fe[y],0===u?0!==h&&(u=1,fe[y]=16777216-h):fe[y]=16777215-h;if(i>0)switch(i){case 1:fe[t-1]&=8388607;break;case 2:fe[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=Qr(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=fe[y];if(0===h){for(g=1;0===fe[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=ee[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return ue(r,e,t+=g,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===fe[t];)t-=1,i-=24;else(v=Qr(v,-i))>=ne?(s=ie*v|0,fe[t]=v-ne*s|0,i+=24,fe[t+=1]=s):fe[t]=0|v;for(s=Qr(1,i),y=t;y>=0;y--)n[y]=s*fe[y],s*=ie;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=te[g]*n[y+g];ce[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ce[y];for(e[0]=0===l?s:-s,s=ce[0]-s,y=1;y<=t;y++)s+=ce[y];return e[1]=0===l?s:-s,7&d}function se(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ae[f]=u<0?0:ee[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ae[o+(f-u)];oe[f]=i}return ue(r,e,4,oe,c,4,a,o,ae)}var le=Math.round;function pe(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=le(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(O(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(O(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var ye=1.5707963267341256,ge=6077100506506192e-26,de=2*ge,he=3*ge,ve=4*ge,we=[0,0,0],be=[0,0];function me(r,n){var i,a,o,c,f,u,s;if((o=O(r)&e|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?pe(r,o,n):o<=1073928572?r>0?(s=r-ye,n[0]=s-ge,n[1]=s-n[0]-ge,1):(s=r+ye,n[0]=s+ge,n[1]=s-n[0]+ge,-1):r>0?(s=r-2*ye,n[0]=s-de,n[1]=s-n[0]-de,2):(s=r+2*ye,n[0]=s+de,n[1]=s-n[0]+de,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?pe(r,o,n):r>0?(s=r-3*ye,n[0]=s-he,n[1]=s-n[0]-he,3):(s=r+3*ye,n[0]=s+he,n[1]=s-n[0]+he,-3):1075388923===o?pe(r,o,n):r>0?(s=r-4*ye,n[0]=s-ve,n[1]=s-n[0]-ve,4):(s=r+4*ye,n[0]=s+ve,n[1]=s-n[0]+ve,-4);if(o<1094263291)return pe(r,o,n);if(o>=t)return n[0]=NaN,n[1]=NaN,0;for(i=function(r){return L[0]=r,P[C]}(r),s=z(o-((a=(o>>20)-1046)<<20|0),i),f=0;f<2;f++)we[f]=0|s,s=16777216*(s-we[f]);for(we[2]=s,c=3;0===we[c-1];)c-=1;return u=se(we,be,a,c),r<0?(n[0]=-be[0],n[1]=-be[1],-u):(n[0]=be[0],n[1]=be[1],u)}var Ae=[0,0];return function(r){return(1-function(r){var n;if(n=O(r),(n&=e)<=1072243195)return n<1045430272?r:G(r,0);if(n>=t)return NaN;switch(3&me(r,Ae)){case 0:return G(Ae[0],Ae[1]);case 1:return V(Ae[0],Ae[1]);case 2:return-G(Ae[0],Ae[1]);default:return-V(Ae[0],Ae[1])}}(r))/2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).hacoversin=e();
//# sourceMappingURL=browser.js.map
