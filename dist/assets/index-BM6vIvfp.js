var Zb=Object.defineProperty;var eP=(t,e,n)=>e in t?Zb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yd=(t,e,n)=>(eP(t,typeof e!="symbol"?e+"":e,n),n);function tP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nP(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var xw={exports:{}},jc={},Ow={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),rP=Symbol.for("react.portal"),iP=Symbol.for("react.fragment"),sP=Symbol.for("react.strict_mode"),oP=Symbol.for("react.profiler"),aP=Symbol.for("react.provider"),lP=Symbol.for("react.context"),uP=Symbol.for("react.forward_ref"),cP=Symbol.for("react.suspense"),dP=Symbol.for("react.memo"),fP=Symbol.for("react.lazy"),qv=Symbol.iterator;function hP(t){return t===null||typeof t!="object"?null:(t=qv&&t[qv]||t["@@iterator"],typeof t=="function"?t:null)}var Nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dw=Object.assign,Lw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||Nw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mw(){}Mw.prototype=Ys.prototype;function um(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||Nw}var cm=um.prototype=new Mw;cm.constructor=um;Dw(cm,Ys.prototype);cm.isPureReactComponent=!0;var Kv=Array.isArray,jw=Object.prototype.hasOwnProperty,dm={current:null},Vw={key:!0,ref:!0,__self:!0,__source:!0};function Uw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jw.call(e,r)&&!Vw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:za,type:t,key:s,ref:o,props:i,_owner:dm.current}}function pP(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function mP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gv=/\/+/g;function Xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mP(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case za:case rP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xd(o,0):r,Kv(i)?(n="",t!=null&&(n=t.replace(Gv,"$&/")+"/"),su(i,e,n,"",function(u){return u})):i!=null&&(fm(i)&&(i=pP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xd(s,a);o+=su(s,e,n,l,i)}else if(l=hP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xd(s,a++),o+=su(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},ou={transition:null},vP={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:dm};re.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ys;re.Fragment=iP;re.Profiler=oP;re.PureComponent=um;re.StrictMode=sP;re.Suspense=cP;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jw.call(e,l)&&!Vw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:za,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:lP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aP,_context:t},t.Consumer=t};re.createElement=Uw;re.createFactory=function(t){var e=Uw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:uP,render:t}};re.isValidElement=fm;re.lazy=function(t){return{$$typeof:fP,_payload:{_status:-1,_result:t},_init:gP}};re.memo=function(t,e){return{$$typeof:dP,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=ou.transition;ou.transition={};try{t()}finally{ou.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return wt.current.useCallback(t,e)};re.useContext=function(t){return wt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};re.useEffect=function(t,e){return wt.current.useEffect(t,e)};re.useId=function(){return wt.current.useId()};re.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return wt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};re.useRef=function(t){return wt.current.useRef(t)};re.useState=function(t){return wt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return wt.current.useTransition()};re.version="18.2.0";Ow.exports=re;var I=Ow.exports;const Vc=lm(I),yP=tP({__proto__:null,default:Vc},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _P=I,wP=Symbol.for("react.element"),EP=Symbol.for("react.fragment"),SP=Object.prototype.hasOwnProperty,TP=_P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IP={key:!0,ref:!0,__self:!0,__source:!0};function Fw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SP.call(e,r)&&!IP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wP,type:t,key:s,ref:o,props:i,_owner:TP.current}}jc.Fragment=EP;jc.jsx=Fw;jc.jsxs=Fw;xw.exports=jc;var h=xw.exports,lh={},$w={exports:{}},Vt={},zw={exports:{}},Bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,B){var J=L.length;L.push(B);e:for(;0<J;){var ce=J-1>>>1,xe=L[ce];if(0<i(xe,B))L[ce]=B,L[J]=xe,J=ce;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],J=L.pop();if(J!==B){L[0]=J;e:for(var ce=0,xe=L.length,$t=xe>>>1;ce<$t;){var On=2*(ce+1)-1,Nn=L[On],Jr=On+1,yl=L[Jr];if(0>i(Nn,J))Jr<xe&&0>i(yl,Nn)?(L[ce]=yl,L[Jr]=J,ce=Jr):(L[ce]=Nn,L[On]=J,ce=On);else if(Jr<xe&&0>i(yl,J))L[ce]=yl,L[Jr]=J,ce=Jr;else break e}}return B}function i(L,B){var J=L.sortIndex-B.sortIndex;return J!==0?J:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(L){if(y=!1,v(L),!w)if(n(l)!==null)w=!0,De(S);else{var B=n(u);B!==null&&Rt(E,B.startTime-L)}}function S(L,B){w=!1,y&&(y=!1,g(x),x=-1),m=!0;var J=f;try{for(v(B),d=n(l);d!==null&&(!(d.expirationTime>B)||L&&!$());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var xe=ce(d.expirationTime<=B);B=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&r(l),v(B)}else r(l);d=n(l)}if(d!==null)var $t=!0;else{var On=n(u);On!==null&&Rt(E,On.startTime-B),$t=!1}return $t}finally{d=null,f=J,m=!1}}var T=!1,A=null,x=-1,P=5,k=-1;function $(){return!(t.unstable_now()-k<P)}function z(){if(A!==null){var L=t.unstable_now();k=L;var B=!0;try{B=A(!0,L)}finally{B?H():(T=!1,A=null)}}else T=!1}var H;if(typeof p=="function")H=function(){p(z)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,xn=G.port2;G.port1.onmessage=z,H=function(){xn.postMessage(null)}}else H=function(){_(z,0)};function De(L){A=L,T||(T=!0,H())}function Rt(L,B){x=_(function(){L(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){w||m||(w=!0,De(S))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var J=f;f=B;try{return L()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=f;f=L;try{return B()}finally{f=J}},t.unstable_scheduleCallback=function(L,B,J){var ce=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,L={id:c++,callback:B,priorityLevel:L,startTime:J,expirationTime:xe,sortIndex:-1},J>ce?(L.sortIndex=J,e(u,L),n(l)===null&&L===n(u)&&(y?(g(x),x=-1):y=!0,Rt(E,J-ce))):(L.sortIndex=xe,e(l,L),w||m||(w=!0,De(S))),L},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(L){var B=f;return function(){var J=f;f=B;try{return L.apply(this,arguments)}finally{f=J}}}})(Bw);zw.exports=Bw;var kP=zw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ww=I,Mt=kP;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hw=new Set,Zo={};function Di(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)Hw.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,bP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qv={},Yv={};function PP(t){return uh.call(Yv,t)?!0:uh.call(Qv,t)?!1:bP.test(t)?Yv[t]=!0:(Qv[t]=!0,!1)}function CP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AP(t,e,n,r){if(e===null||typeof e>"u"||CP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var hm=/[\-:]([a-z])/g;function pm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hm,pm);rt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hm,pm);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hm,pm);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function mm(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AP(e,n,i,r)&&(n=null),r||i===null?PP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),qw=Symbol.for("react.provider"),Kw=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),fh=Symbol.for("react.suspense_list"),ym=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Gw=Symbol.for("react.offscreen"),Xv=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Xv&&t[Xv]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Jd;function So(t){if(Jd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jd=e&&e[1]||""}return`
`+Jd+t}var Zd=!1;function ef(t,e){if(!t||Zd)return"";Zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function RP(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case ch:return"Profiler";case gm:return"StrictMode";case dh:return"Suspense";case fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kw:return(t.displayName||"Context")+".Consumer";case qw:return(t._context.displayName||"Context")+".Provider";case vm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ym:return e=t.displayName||null,e!==null?e:hh(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return hh(t(e))}catch{}}return null}function xP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hh(e);case 8:return e===gm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OP(t){var e=Qw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=OP(t))}function Yw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xw(t,e){e=e.checked,e!=null&&mm(t,"checked",e,!1)}function mh(t,e){Xw(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||Cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(To(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function Jw(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,e1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NP=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){NP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function t1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function n1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=t1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DP=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(DP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=null;function _m(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,ms=null,gs=null;function ny(t){if(t=Ha(t)){if(typeof Sh!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Bc(e),Sh(t.stateNode,t.type,e))}}function r1(t){ms?gs?gs.push(t):gs=[t]:ms=t}function i1(){if(ms){var t=ms,e=gs;if(gs=ms=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function s1(t,e){return t(e)}function o1(){}var tf=!1;function a1(t,e,n){if(tf)return t(e,n);tf=!0;try{return s1(t,e,n)}finally{tf=!1,(ms!==null||gs!==null)&&(o1(),i1())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Th=!1;if(Hn)try{var co={};Object.defineProperty(co,"passive",{get:function(){Th=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Th=!1}function LP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Lo=!1,Au=null,Ru=!1,Ih=null,MP={onError:function(t){Lo=!0,Au=t}};function jP(t,e,n,r,i,s,o,a,l){Lo=!1,Au=null,LP.apply(MP,arguments)}function VP(t,e,n,r,i,s,o,a,l){if(jP.apply(this,arguments),Lo){if(Lo){var u=Au;Lo=!1,Au=null}else throw Error(R(198));Ru||(Ru=!0,Ih=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if(Li(t)!==t)throw Error(R(188))}function UP(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ry(i),t;if(s===r)return ry(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function u1(t){return t=UP(t),t!==null?c1(t):null}function c1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c1(t);if(e!==null)return e;t=t.sibling}return null}var d1=Mt.unstable_scheduleCallback,iy=Mt.unstable_cancelCallback,FP=Mt.unstable_shouldYield,$P=Mt.unstable_requestPaint,Oe=Mt.unstable_now,zP=Mt.unstable_getCurrentPriorityLevel,wm=Mt.unstable_ImmediatePriority,f1=Mt.unstable_UserBlockingPriority,xu=Mt.unstable_NormalPriority,BP=Mt.unstable_LowPriority,h1=Mt.unstable_IdlePriority,Uc=null,_n=null;function WP(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:KP,HP=Math.log,qP=Math.LN2;function KP(t){return t>>>=0,t===0?32:31-(HP(t)/qP|0)|0}var Il=64,kl=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Io(a):(s&=o,s!==0&&(r=Io(s)))}else o=n&~i,o!==0?r=Io(o):s!==0&&(r=Io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function GP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=GP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p1(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function YP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Em(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function m1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g1,Sm,v1,y1,_1,bh=!1,bl=[],Er=null,Sr=null,Tr=null,na=new Map,ra=new Map,cr=[],XP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sy(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ha(e),e!==null&&Sm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JP(t,e,n,r,i){switch(e){case"focusin":return Er=fo(Er,t,e,n,r,i),!0;case"dragenter":return Sr=fo(Sr,t,e,n,r,i),!0;case"mouseover":return Tr=fo(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return na.set(s,fo(na.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ra.set(s,fo(ra.get(s)||null,t,e,n,r,i)),!0}return!1}function w1(t){var e=ri(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=l1(n),e!==null){t.blockedOn=e,_1(t.priority,function(){v1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eh=r,n.target.dispatchEvent(r),Eh=null}else return e=Ha(n),e!==null&&Sm(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){au(t)&&n.delete(e)}function ZP(){bh=!1,Er!==null&&au(Er)&&(Er=null),Sr!==null&&au(Sr)&&(Sr=null),Tr!==null&&au(Tr)&&(Tr=null),na.forEach(oy),ra.forEach(oy)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,ZP)))}function ia(t){function e(i){return ho(i,t)}if(0<bl.length){ho(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&ho(Er,t),Sr!==null&&ho(Sr,t),Tr!==null&&ho(Tr,t),na.forEach(e),ra.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)w1(n),n.blockedOn===null&&cr.shift()}var vs=tr.ReactCurrentBatchConfig,Nu=!0;function eC(t,e,n,r){var i=le,s=vs.transition;vs.transition=null;try{le=1,Tm(t,e,n,r)}finally{le=i,vs.transition=s}}function tC(t,e,n,r){var i=le,s=vs.transition;vs.transition=null;try{le=4,Tm(t,e,n,r)}finally{le=i,vs.transition=s}}function Tm(t,e,n,r){if(Nu){var i=Ph(t,e,n,r);if(i===null)hf(t,e,r,Du,n),sy(t,r);else if(JP(i,t,e,n,r))r.stopPropagation();else if(sy(t,r),e&4&&-1<XP.indexOf(t)){for(;i!==null;){var s=Ha(i);if(s!==null&&g1(s),s=Ph(t,e,n,r),s===null&&hf(t,e,r,Du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hf(t,e,r,null,n)}}var Du=null;function Ph(t,e,n,r){if(Du=null,t=_m(r),t=ri(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Du=t,null}function E1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zP()){case wm:return 1;case f1:return 4;case xu:case BP:return 16;case h1:return 536870912;default:return 16}default:return 16}}var gr=null,Im=null,lu=null;function S1(){if(lu)return lu;var t,e=Im,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function ay(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:ay,this.isPropagationStopped=ay,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},km=Ut(Xs),Wa=Ie({},Xs,{view:0,detail:0}),nC=Ut(Wa),rf,sf,po,Fc=Ie({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(rf=t.screenX-po.screenX,sf=t.screenY-po.screenY):sf=rf=0,po=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),ly=Ut(Fc),rC=Ie({},Fc,{dataTransfer:0}),iC=Ut(rC),sC=Ie({},Wa,{relatedTarget:0}),of=Ut(sC),oC=Ie({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),aC=Ut(oC),lC=Ie({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uC=Ut(lC),cC=Ie({},Xs,{data:0}),uy=Ut(cC),dC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hC[t])?!!e[t]:!1}function bm(){return pC}var mC=Ie({},Wa,{key:function(t){if(t.key){var e=dC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gC=Ut(mC),vC=Ie({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=Ut(vC),yC=Ie({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),_C=Ut(yC),wC=Ie({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),EC=Ut(wC),SC=Ie({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TC=Ut(SC),IC=[9,13,27,32],Pm=Hn&&"CompositionEvent"in window,Mo=null;Hn&&"documentMode"in document&&(Mo=document.documentMode);var kC=Hn&&"TextEvent"in window&&!Mo,T1=Hn&&(!Pm||Mo&&8<Mo&&11>=Mo),dy=" ",fy=!1;function I1(t,e){switch(t){case"keyup":return IC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function bC(t,e){switch(t){case"compositionend":return k1(e);case"keypress":return e.which!==32?null:(fy=!0,dy);case"textInput":return t=e.data,t===dy&&fy?null:t;default:return null}}function PC(t,e){if(es)return t==="compositionend"||!Pm&&I1(t,e)?(t=S1(),lu=Im=gr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T1&&e.locale!=="ko"?null:e.data;default:return null}}var CC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CC[t.type]:e==="textarea"}function b1(t,e,n,r){r1(r),e=Lu(e,"onChange"),0<e.length&&(n=new km("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,sa=null;function AC(t){j1(t,0)}function $c(t){var e=rs(t);if(Yw(e))return t}function RC(t,e){if(t==="change")return e}var P1=!1;if(Hn){var af;if(Hn){var lf="oninput"in document;if(!lf){var py=document.createElement("div");py.setAttribute("oninput","return;"),lf=typeof py.oninput=="function"}af=lf}else af=!1;P1=af&&(!document.documentMode||9<document.documentMode)}function my(){jo&&(jo.detachEvent("onpropertychange",C1),sa=jo=null)}function C1(t){if(t.propertyName==="value"&&$c(sa)){var e=[];b1(e,sa,t,_m(t)),a1(AC,e)}}function xC(t,e,n){t==="focusin"?(my(),jo=e,sa=n,jo.attachEvent("onpropertychange",C1)):t==="focusout"&&my()}function OC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(sa)}function NC(t,e){if(t==="click")return $c(e)}function DC(t,e){if(t==="input"||t==="change")return $c(e)}function LC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:LC;function oa(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!an(t[i],e[i]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function A1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R1(){for(var t=window,e=Cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cu(t.document)}return e}function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MC(t){var e=R1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A1(n.ownerDocument.documentElement,n)){if(r!==null&&Cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vy(n,s);var o=vy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jC=Hn&&"documentMode"in document&&11>=document.documentMode,ts=null,Ch=null,Vo=null,Ah=!1;function yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ah||ts==null||ts!==Cu(r)||(r=ts,"selectionStart"in r&&Cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&oa(Vo,r)||(Vo=r,r=Lu(Ch,"onSelect"),0<r.length&&(e=new km("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},uf={},x1={};Hn&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function zc(t){if(uf[t])return uf[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x1)return uf[t]=e[n];return t}var O1=zc("animationend"),N1=zc("animationiteration"),D1=zc("animationstart"),L1=zc("transitionend"),M1=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){M1.set(t,e),Di(e,[t])}for(var cf=0;cf<_y.length;cf++){var df=_y[cf],VC=df.toLowerCase(),UC=df[0].toUpperCase()+df.slice(1);zr(VC,"on"+UC)}zr(O1,"onAnimationEnd");zr(N1,"onAnimationIteration");zr(D1,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(L1,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function wy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VP(r,e,void 0,t),t.currentTarget=null}function j1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wy(i,a,u),s=l}}}if(Ru)throw t=Ih,Ru=!1,Ih=null,t}function he(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(V1(e,t,2,!1),n.add(r))}function ff(t,e,n){var r=0;e&&(r|=4),V1(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Al]){t[Al]=!0,Hw.forEach(function(n){n!=="selectionchange"&&(FC.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,ff("selectionchange",!1,e))}}function V1(t,e,n,r){switch(E1(e)){case 1:var i=eC;break;case 4:i=tC;break;default:i=Tm}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}a1(function(){var u=s,c=_m(n),d=[];e:{var f=M1.get(t);if(f!==void 0){var m=km,w=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":m=gC;break;case"focusin":w="focus",m=of;break;case"focusout":w="blur",m=of;break;case"beforeblur":case"afterblur":m=of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=_C;break;case O1:case N1:case D1:m=aC;break;case L1:m=EC;break;case"scroll":m=nC;break;case"wheel":m=TC;break;case"copy":case"cut":case"paste":m=uC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cy}var y=(e&4)!==0,_=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=ta(p,g),E!=null&&y.push(la(p,E,v)))),_)break;p=p.return}0<y.length&&(f=new m(f,w,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Eh&&(w=n.relatedTarget||n.fromElement)&&(ri(w)||w[qn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?ri(w):null,w!==null&&(_=Li(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(y=ly,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=cy,E="onPointerLeave",g="onPointerEnter",p="pointer"),_=m==null?f:rs(m),v=w==null?f:rs(w),f=new y(E,p+"leave",m,n,c),f.target=_,f.relatedTarget=v,E=null,ri(c)===u&&(y=new y(g,p+"enter",w,n,c),y.target=v,y.relatedTarget=_,E=y),_=E,m&&w)t:{for(y=m,g=w,p=0,v=y;v;v=qi(v))p++;for(v=0,E=g;E;E=qi(E))v++;for(;0<p-v;)y=qi(y),p--;for(;0<v-p;)g=qi(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=qi(y),g=qi(g)}y=null}else y=null;m!==null&&Ey(d,f,m,y,!1),w!==null&&_!==null&&Ey(d,_,w,y,!0)}}e:{if(f=u?rs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=RC;else if(hy(f))if(P1)S=DC;else{S=OC;var T=xC}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=NC);if(S&&(S=S(t,u))){b1(d,S,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&gh(f,"number",f.value)}switch(T=u?rs(u):window,t){case"focusin":(hy(T)||T.contentEditable==="true")&&(ts=T,Ch=u,Vo=null);break;case"focusout":Vo=Ch=ts=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,yy(d,n,c);break;case"selectionchange":if(jC)break;case"keydown":case"keyup":yy(d,n,c)}var A;if(Pm)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else es?I1(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(T1&&n.locale!=="ko"&&(es||x!=="onCompositionStart"?x==="onCompositionEnd"&&es&&(A=S1()):(gr=c,Im="value"in gr?gr.value:gr.textContent,es=!0)),T=Lu(u,x),0<T.length&&(x=new uy(x,t,null,n,c),d.push({event:x,listeners:T}),A?x.data=A:(A=k1(n),A!==null&&(x.data=A)))),(A=kC?bC(t,n):PC(t,n))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new uy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}j1(d,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ta(t,n),s!=null&&r.unshift(la(t,s,i)),s=ta(t,e),s!=null&&r.push(la(t,s,i))),t=t.return}return r}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):i||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $C=/\r\n?/g,zC=/\u0000|\uFFFD/g;function Sy(t){return(typeof t=="string"?t:""+t).replace($C,`
`).replace(zC,"")}function Rl(t,e,n){if(e=Sy(e),Sy(t)!==e&&n)throw Error(R(425))}function Mu(){}var Rh=null,xh=null;function Oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,BC=typeof clearTimeout=="function"?clearTimeout:void 0,Ty=typeof Promise=="function"?Promise:void 0,WC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ty<"u"?function(t){return Ty.resolve(null).then(t).catch(HC)}:Nh;function HC(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ia(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),hn="__reactFiber$"+Js,ua="__reactProps$"+Js,qn="__reactContainer$"+Js,Dh="__reactEvents$"+Js,qC="__reactListeners$"+Js,KC="__reactHandles$"+Js;function ri(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[hn])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[hn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Bc(t){return t[ua]||null}var Lh=[],is=-1;function Br(t){return{current:t}}function ge(t){0>is||(t.current=Lh[is],Lh[is]=null,is--)}function de(t,e){is++,Lh[is]=t.current,t.current=e}var Dr={},ht=Br(Dr),bt=Br(!1),yi=Dr;function As(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function ju(){ge(bt),ge(ht)}function ky(t,e,n){if(ht.current!==Dr)throw Error(R(168));de(ht,e),de(bt,n)}function U1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,xP(t)||"Unknown",i));return Ie({},n,r)}function Vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,yi=ht.current,de(ht,t),de(bt,bt.current),!0}function by(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=U1(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,ge(bt),ge(ht),de(ht,t)):ge(bt),de(bt,n)}var Mn=null,Wc=!1,mf=!1;function F1(t){Mn===null?Mn=[t]:Mn.push(t)}function GC(t){Wc=!0,F1(t)}function Wr(){if(!mf&&Mn!==null){mf=!0;var t=0,e=le;try{var n=Mn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,Wc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),d1(wm,Wr),i}finally{le=e,mf=!1}}return null}var ss=[],os=0,Uu=null,Fu=0,zt=[],Bt=0,_i=null,Un=1,Fn="";function Zr(t,e){ss[os++]=Fu,ss[os++]=Uu,Uu=t,Fu=e}function $1(t,e,n){zt[Bt++]=Un,zt[Bt++]=Fn,zt[Bt++]=_i,_i=t;var r=Un;t=Fn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Un=1<<32-sn(e)+i|n<<i|r,Fn=s+t}else Un=1<<s|n<<i|r,Fn=t}function Am(t){t.return!==null&&(Zr(t,1),$1(t,1,0))}function Rm(t){for(;t===Uu;)Uu=ss[--os],ss[os]=null,Fu=ss[--os],ss[os]=null;for(;t===_i;)_i=zt[--Bt],zt[Bt]=null,Fn=zt[--Bt],zt[Bt]=null,Un=zt[--Bt],zt[Bt]=null}var Lt=null,Ot=null,_e=!1,en=null;function z1(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:Un,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(_e){var e=Ot;if(e){var n=e;if(!Py(t,e)){if(Mh(t))throw Error(R(418));e=Ir(n.nextSibling);var r=Lt;e&&Py(t,e)?z1(r,n):(t.flags=t.flags&-4097|2,_e=!1,Lt=t)}}else{if(Mh(t))throw Error(R(418));t.flags=t.flags&-4097|2,_e=!1,Lt=t}}}function Cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function xl(t){if(t!==Lt)return!1;if(!_e)return Cy(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oh(t.type,t.memoizedProps)),e&&(e=Ot)){if(Mh(t))throw B1(),Error(R(418));for(;e;)z1(t,e),e=Ir(e.nextSibling)}if(Cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?Ir(t.stateNode.nextSibling):null;return!0}function B1(){for(var t=Ot;t;)t=Ir(t.nextSibling)}function Rs(){Ot=Lt=null,_e=!1}function xm(t){en===null?en=[t]:en.push(t)}var QC=tr.ReactCurrentBatchConfig;function Jt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $u=Br(null),zu=null,as=null,Om=null;function Nm(){Om=as=zu=null}function Dm(t){var e=$u.current;ge($u),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){zu=t,Om=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Om!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(zu===null)throw Error(R(308));as=t,zu.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var ii=null;function Lm(t){ii===null?ii=[t]:ii.push(t)}function W1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Em(t,n)}}function Ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bu(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(f=e,m=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){d=w.call(m,d,f);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,f=typeof w=="function"?w.call(m,d,f):w,f==null)break e;d=Ie({},d,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=o,t.lanes=o,t.memoizedState=d}}function Ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var q1=new Ww.Component().refs;function Uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Pr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(on(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Pr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(on(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Pr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(on(e,t,r,n),cu(e,t,r))}};function xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(i,s):!0}function K1(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Pt(e)?yi:ht.current,r=e.contextTypes,s=(r=r!=null)?As(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=q1,Mm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Pt(e)?yi:ht.current,i.context=As(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),Bu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===q1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ny(t){var e=t._init;return e(t._payload)}function G1(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Cr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,E){return p===null||p.tag!==6?(p=Sf(v,g.mode,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,E){var S=v.type;return S===Zi?c(g,p,v.props.children,E,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&Ny(S)===p.type)?(E=i(p,v.props),E.ref=mo(g,p,v),E.return=g,E):(E=gu(v.type,v.key,v.props,null,g.mode,E),E.ref=mo(g,p,v),E.return=g,E)}function u(g,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Tf(v,g.mode,E),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,E,S){return p===null||p.tag!==7?(p=pi(v,g.mode,E,S),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sf(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case El:return v=gu(p.type,p.key,p.props,null,g.mode,v),v.ref=mo(g,null,p),v.return=g,v;case Ji:return p=Tf(p,g.mode,v),p.return=g,p;case ar:var E=p._init;return d(g,E(p._payload),v)}if(To(p)||uo(p))return p=pi(p,g.mode,v,null),p.return=g,p;Ol(g,p)}return null}function f(g,p,v,E){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case El:return v.key===S?l(g,p,v,E):null;case Ji:return v.key===S?u(g,p,v,E):null;case ar:return S=v._init,f(g,p,S(v._payload),E)}if(To(v)||uo(v))return S!==null?null:c(g,p,v,E,null);Ol(g,v)}return null}function m(g,p,v,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(p,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case El:return g=g.get(E.key===null?v:E.key)||null,l(p,g,E,S);case Ji:return g=g.get(E.key===null?v:E.key)||null,u(p,g,E,S);case ar:var T=E._init;return m(g,p,v,T(E._payload),S)}if(To(E)||uo(E))return g=g.get(v)||null,c(p,g,E,S,null);Ol(p,E)}return null}function w(g,p,v,E){for(var S=null,T=null,A=p,x=p=0,P=null;A!==null&&x<v.length;x++){A.index>x?(P=A,A=null):P=A.sibling;var k=f(g,A,v[x],E);if(k===null){A===null&&(A=P);break}t&&A&&k.alternate===null&&e(g,A),p=s(k,p,x),T===null?S=k:T.sibling=k,T=k,A=P}if(x===v.length)return n(g,A),_e&&Zr(g,x),S;if(A===null){for(;x<v.length;x++)A=d(g,v[x],E),A!==null&&(p=s(A,p,x),T===null?S=A:T.sibling=A,T=A);return _e&&Zr(g,x),S}for(A=r(g,A);x<v.length;x++)P=m(A,g,x,v[x],E),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?x:P.key),p=s(P,p,x),T===null?S=P:T.sibling=P,T=P);return t&&A.forEach(function($){return e(g,$)}),_e&&Zr(g,x),S}function y(g,p,v,E){var S=uo(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var T=S=null,A=p,x=p=0,P=null,k=v.next();A!==null&&!k.done;x++,k=v.next()){A.index>x?(P=A,A=null):P=A.sibling;var $=f(g,A,k.value,E);if($===null){A===null&&(A=P);break}t&&A&&$.alternate===null&&e(g,A),p=s($,p,x),T===null?S=$:T.sibling=$,T=$,A=P}if(k.done)return n(g,A),_e&&Zr(g,x),S;if(A===null){for(;!k.done;x++,k=v.next())k=d(g,k.value,E),k!==null&&(p=s(k,p,x),T===null?S=k:T.sibling=k,T=k);return _e&&Zr(g,x),S}for(A=r(g,A);!k.done;x++,k=v.next())k=m(A,g,x,k.value,E),k!==null&&(t&&k.alternate!==null&&A.delete(k.key===null?x:k.key),p=s(k,p,x),T===null?S=k:T.sibling=k,T=k);return t&&A.forEach(function(z){return e(g,z)}),_e&&Zr(g,x),S}function _(g,p,v,E){if(typeof v=="object"&&v!==null&&v.type===Zi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case El:e:{for(var S=v.key,T=p;T!==null;){if(T.key===S){if(S=v.type,S===Zi){if(T.tag===7){n(g,T.sibling),p=i(T,v.props.children),p.return=g,g=p;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&Ny(S)===T.type){n(g,T.sibling),p=i(T,v.props),p.ref=mo(g,T,v),p.return=g,g=p;break e}n(g,T);break}else e(g,T);T=T.sibling}v.type===Zi?(p=pi(v.props.children,g.mode,E,v.key),p.return=g,g=p):(E=gu(v.type,v.key,v.props,null,g.mode,E),E.ref=mo(g,p,v),E.return=g,g=E)}return o(g);case Ji:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Tf(v,g.mode,E),p.return=g,g=p}return o(g);case ar:return T=v._init,_(g,p,T(v._payload),E)}if(To(v))return w(g,p,v,E);if(uo(v))return y(g,p,v,E);Ol(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Sf(v,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return _}var xs=G1(!0),Q1=G1(!1),qa={},wn=Br(qa),ca=Br(qa),da=Br(qa);function si(t){if(t===qa)throw Error(R(174));return t}function jm(t,e){switch(de(da,e),de(ca,t),de(wn,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}ge(wn),de(wn,e)}function Os(){ge(wn),ge(ca),ge(da)}function Y1(t){si(da.current);var e=si(wn.current),n=yh(e,t.type);e!==n&&(de(ca,t),de(wn,n))}function Vm(t){ca.current===t&&(ge(wn),ge(ca))}var Se=Br(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function Um(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var du=tr.ReactCurrentDispatcher,vf=tr.ReactCurrentBatchConfig,wi=0,Te=null,Fe=null,qe=null,Hu=!1,Uo=!1,fa=0,YC=0;function it(){throw Error(R(321))}function Fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function $m(t,e,n,r,i,s){if(wi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,du.current=t===null||t.memoizedState===null?e2:t2,t=n(r,i),Uo){s=0;do{if(Uo=!1,fa=0,25<=s)throw Error(R(301));s+=1,qe=Fe=null,e.updateQueue=null,du.current=n2,t=n(r,i)}while(Uo)}if(du.current=qu,e=Fe!==null&&Fe.next!==null,wi=0,qe=Fe=Te=null,Hu=!1,e)throw Error(R(300));return t}function zm(){var t=fa!==0;return fa=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Te.memoizedState=qe=t:qe=qe.next=t,qe}function Qt(){if(Fe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?Te.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(R(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?Te.memoizedState=qe=t:qe=qe.next=t}return qe}function ha(t,e){return typeof e=="function"?e(t):e}function yf(t){var e=Qt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Te.lanes|=c,Ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,an(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _f(t){var e=Qt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function X1(){}function J1(t,e){var n=Te,r=Qt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,Bm(tE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,pa(9,eE.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(R(349));wi&30||Z1(n,e,i)}return i}function Z1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eE(t,e,n,r){e.value=n,e.getSnapshot=r,nE(e)&&rE(t)}function tE(t,e,n){return n(function(){nE(e)&&rE(t)})}function nE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function rE(t){var e=Kn(t,1);e!==null&&on(e,t,1,-1)}function Dy(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=ZC.bind(null,Te,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iE(){return Qt().memoizedState}function fu(t,e,n,r){var i=fn();Te.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Fm(r,o.deps)){i.memoizedState=pa(e,n,s,r);return}}Te.flags|=t,i.memoizedState=pa(1|e,n,s,r)}function Ly(t,e){return fu(8390656,8,t,e)}function Bm(t,e){return qc(2048,8,t,e)}function sE(t,e){return qc(4,2,t,e)}function oE(t,e){return qc(4,4,t,e)}function aE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lE(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,aE.bind(null,e,t),n)}function Wm(){}function uE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dE(t,e,n){return wi&21?(an(n,e)||(n=p1(),Te.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function XC(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=vf.transition;vf.transition={};try{t(!1),e()}finally{le=n,vf.transition=r}}function fE(){return Qt().memoizedState}function JC(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hE(t))pE(e,n);else if(n=W1(t,e,n,r),n!==null){var i=_t();on(n,t,r,i),mE(n,e,r)}}function ZC(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hE(t))pE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,an(a,o)){var l=e.interleaved;l===null?(i.next=i,Lm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W1(t,e,i,r),n!==null&&(i=_t(),on(n,t,r,i),mE(n,e,r))}}function hE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function pE(t,e){Uo=Hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Em(t,n)}}var qu={readContext:Gt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},e2={readContext:Gt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Ly,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,aE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JC.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Dy,useDebugValue:Wm,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Dy(!1),e=t[0];return t=XC.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=fn();if(_e){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Ke===null)throw Error(R(349));wi&30||Z1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ly(tE.bind(null,r,s,t),[t]),r.flags|=2048,pa(9,eE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=Ke.identifierPrefix;if(_e){var n=Fn,r=Un;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t2={readContext:Gt,useCallback:uE,useContext:Gt,useEffect:Bm,useImperativeHandle:lE,useInsertionEffect:sE,useLayoutEffect:oE,useMemo:cE,useReducer:yf,useRef:iE,useState:function(){return yf(ha)},useDebugValue:Wm,useDeferredValue:function(t){var e=Qt();return dE(e,Fe.memoizedState,t)},useTransition:function(){var t=yf(ha)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:X1,useSyncExternalStore:J1,useId:fE,unstable_isNewReconciler:!1},n2={readContext:Gt,useCallback:uE,useContext:Gt,useEffect:Bm,useImperativeHandle:lE,useInsertionEffect:sE,useLayoutEffect:oE,useMemo:cE,useReducer:_f,useRef:iE,useState:function(){return _f(ha)},useDebugValue:Wm,useDeferredValue:function(t){var e=Qt();return Fe===null?e.memoizedState=t:dE(e,Fe.memoizedState,t)},useTransition:function(){var t=_f(ha)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:X1,useSyncExternalStore:J1,useId:fE,unstable_isNewReconciler:!1};function Ns(t,e){try{var n="",r=e;do n+=RP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r2=typeof WeakMap=="function"?WeakMap:Map;function gE(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,Xh=r),$h(t,e)},n}function vE(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$h(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function My(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new r2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=v2.bind(null,t,e,n),e.then(t,t))}function jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var i2=tr.ReactCurrentOwner,kt=!1;function vt(t,e,n,r){e.child=t===null?Q1(e,null,n,r):xs(e,t.child,n,r)}function Uy(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=$m(t,e,n,r,s,i),n=zm(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(_e&&n&&Am(e),e.flags|=1,vt(t,e,r,i),e.child)}function Fy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yE(t,e,s,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function yE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(oa(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return zh(t,e,n,r,i)}function _E(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(us,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(us,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(us,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(us,xt),xt|=r;return vt(t,e,i,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zh(t,e,n,r,i){var s=Pt(n)?yi:ht.current;return s=As(e,s),ys(e,i),n=$m(t,e,n,r,s,i),r=zm(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(_e&&r&&Am(e),e.flags|=1,vt(t,e,n,i),e.child)}function $y(t,e,n,r,i){if(Pt(n)){var s=!0;Vu(e)}else s=!1;if(ys(e,i),e.stateNode===null)hu(t,e),K1(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=Pt(n)?yi:ht.current,u=As(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Oy(e,o,r,u),lr=!1;var f=e.memoizedState;o.state=f,Bu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||bt.current||lr?(typeof c=="function"&&(Uh(e,n,c,r),l=e.memoizedState),(a=lr||xy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Jt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=Pt(n)?yi:ht.current,l=As(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Oy(e,o,r,l),lr=!1,f=e.memoizedState,o.state=f,Bu(e,r,o,i);var w=e.memoizedState;a!==d||f!==w||bt.current||lr?(typeof m=="function"&&(Uh(e,n,m,r),w=e.memoizedState),(u=lr||xy(e,n,u,r,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&by(e,n,!1),Gn(t,e,s);r=e.stateNode,i2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&by(e,n,!0),e.child}function EE(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),jm(t,e.containerInfo)}function zy(t,e,n,r,i){return Rs(),xm(i),e.flags|=256,vt(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function SE(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Se,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hh(n),e.memoizedState=Wh,t):Hm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return s2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hm(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&xm(r),xs(e,t.child,null,n),t=Hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wf(Error(R(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=Wh,s);if(!(e.mode&1))return Nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=wf(s,r,void 0),Nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),on(r,t,i,-1))}return Xm(),r=wf(Error(R(421))),Nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=y2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=Ir(i.nextSibling),Lt=e,_e=!0,en=null,t!==null&&(zt[Bt++]=Un,zt[Bt++]=Fn,zt[Bt++]=_i,Un=t.id,Fn=t.overflow,_i=e),e=Hm(e,r.children),e.flags|=4096,e)}function By(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vh(t.return,e,n)}function Ef(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&By(t,n,e);else if(t.tag===19)By(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ef(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ef(e,!0,n,null,s);break;case"together":Ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o2(t,e,n){switch(e.tag){case 3:EE(e),Rs();break;case 5:Y1(e);break;case 1:Pt(e.type)&&Vu(e);break;case 4:jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de($u,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?SE(t,e,n):(de(Se,Se.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);de(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,_E(t,e,n)}return Gn(t,e,n)}var IE,qh,kE,bE;IE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qh=function(){};kE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(wn.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=vh(t,i),r=vh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mu)}_h(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bE=function(t,e,n,r){n!==r&&(e.flags|=4)};function go(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function a2(t,e,n){var r=e.pendingProps;switch(Rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Pt(e.type)&&ju(),st(e),null;case 3:return r=e.stateNode,Os(),ge(bt),ge(ht),Um(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(ep(en),en=null))),qh(t,e),st(e),null;case 5:Vm(e);var i=si(da.current);if(n=e.type,t!==null&&e.stateNode!=null)kE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return st(e),null}if(t=si(wn.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[ua]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ko.length;i++)he(ko[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Jv(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":ey(r,s),he("invalid",r)}_h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,t),i=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Sl(r),Zv(r,s,!0);break;case"textarea":Sl(r),ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[ua]=r,IE(t,e,!1,!1),e.stateNode=t;e:{switch(o=wh(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ko.length;i++)he(ko[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Jv(t,r),i=ph(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),he("invalid",t);break;case"textarea":ey(t,r),i=vh(t,r),he("invalid",t);break;default:i=r}_h(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?n1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&mm(t,s,l,o))}switch(n){case"input":Sl(t),Zv(t,r,!1);break;case"textarea":Sl(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)bE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=si(da.current),si(wn.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return st(e),null;case 13:if(ge(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Ot!==null&&e.mode&1&&!(e.flags&128))B1(),Rs(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[hn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else en!==null&&(ep(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?ze===0&&(ze=3):Xm())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Os(),qh(t,e),t===null&&aa(e.stateNode.containerInfo),st(e),null;case 10:return Dm(e.type._context),st(e),null;case 17:return Pt(e.type)&&ju(),st(e),null;case 19:if(ge(Se),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)go(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Ds&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return st(e),null}else 2*Oe()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Se.current,de(Se,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Ym(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function l2(t,e){switch(Rm(e),e.tag){case 1:return Pt(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),ge(bt),ge(ht),Um(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vm(e),null;case 13:if(ge(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Se),null;case 4:return Os(),null;case 10:return Dm(e.type._context),null;case 22:case 23:return Ym(),null;case 24:return null;default:return null}}var Dl=!1,ut=!1,u2=typeof WeakSet=="function"?WeakSet:Set,j=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){be(t,e,r)}}var Wy=!1;function c2(t,e){if(Rh=Nu,t=R1(),Cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Nu=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,_=w.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:Jt(e.type,y),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){be(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return w=Wy,Wy=!1,w}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function PE(t){var e=t.alternate;e!==null&&(t.alternate=null,PE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[ua],delete e[Dh],delete e[qC],delete e[KC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CE(t){return t.tag===5||t.tag===3||t.tag===4}function Hy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mu));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Ye=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)AE(t,e,n),n=n.sibling}function AE(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:ut||ls(n,e);case 6:var r=Ye,i=Zt;Ye=null,ir(t,e,n),Ye=r,Zt=i,Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),ia(t)):pf(Ye,n.stateNode));break;case 4:r=Ye,i=Zt,Ye=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),Ye=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ut&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ir(t,e,n),ut=r):ir(t,e,n);break;default:ir(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u2),e.forEach(function(r){var i=_2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Zt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Zt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Ye===null)throw Error(R(160));AE(s,o,i),Ye=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RE(e,t),e=e.sibling}function RE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),dn(t),r&4){try{Fo(3,t,t.return),Kc(3,t)}catch(y){be(t,t.return,y)}try{Fo(5,t,t.return)}catch(y){be(t,t.return,y)}}break;case 1:Xt(e,t),dn(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(Xt(e,t),dn(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{ea(i,"")}catch(y){be(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xw(i,s),wh(a,o);var u=wh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?n1(i,d):c==="dangerouslySetInnerHTML"?e1(i,d):c==="children"?ea(i,d):mm(i,c,d,u)}switch(a){case"input":mh(i,s);break;case"textarea":Jw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ps(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[ua]=s}catch(y){be(t,t.return,y)}}break;case 6:if(Xt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){be(t,t.return,y)}}break;case 3:if(Xt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(y){be(t,t.return,y)}break;case 4:Xt(e,t),dn(t);break;case 13:Xt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gm=Oe())),r&4&&qy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||c,Xt(e,t),ut=u):Xt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,m=f.child,f.tag){case 0:case 11:case 14:case 15:Fo(4,f,f.return);break;case 1:ls(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){be(r,n,y)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Gy(d);continue}}m!==null?(m.return=f,j=m):Gy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t1("display",o))}catch(y){be(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){be(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(e,t),dn(t),r&4&&qy(t);break;case 21:break;default:Xt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CE(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var s=Hy(t);Yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hy(t);Qh(t,a,o);break;default:throw Error(R(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function d2(t,e,n){j=t,xE(t)}function xE(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Dl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=Dl;var u=ut;if(Dl=o,(ut=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):l!==null?(l.return=o,j=l):Qy(i);for(;s!==null;)j=s,xE(s),s=s.sibling;j=i,Dl=a,ut=u}Ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Ky(t)}}function Ky(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ry(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ut||e.flags&512&&Gh(e)}catch(f){be(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Gy(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Qy(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Gh(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Gh(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var f2=Math.ceil,Ku=tr.ReactCurrentDispatcher,qm=tr.ReactCurrentOwner,qt=tr.ReactCurrentBatchConfig,oe=0,Ke=null,je=null,et=0,xt=0,us=Br(0),ze=0,ma=null,Ei=0,Gc=0,Km=0,$o=null,Tt=null,Gm=0,Ds=1/0,Ln=null,Gu=!1,Xh=null,br=null,Ll=!1,vr=null,Qu=0,zo=0,Jh=null,pu=-1,mu=0;function _t(){return oe&6?Oe():pu!==-1?pu:pu=Oe()}function Pr(t){return t.mode&1?oe&2&&et!==0?et&-et:QC.transition!==null?(mu===0&&(mu=p1()),mu):(t=le,t!==0||(t=window.event,t=t===void 0?16:E1(t.type)),t):1}function on(t,e,n,r){if(50<zo)throw zo=0,Jh=null,Error(R(185));Ba(t,n,r),(!(oe&2)||t!==Ke)&&(t===Ke&&(!(oe&2)&&(Gc|=n),ze===4&&dr(t,et)),Ct(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ds=Oe()+500,Wc&&Wr()))}function Ct(t,e){var n=t.callbackNode;QP(t,e);var r=Ou(t,t===Ke?et:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?GC(Yy.bind(null,t)):F1(Yy.bind(null,t)),WC(function(){!(oe&6)&&Wr()}),n=null;else{switch(m1(r)){case 1:n=wm;break;case 4:n=f1;break;case 16:n=xu;break;case 536870912:n=h1;break;default:n=xu}n=UE(n,OE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function OE(t,e){if(pu=-1,mu=0,oe&6)throw Error(R(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Ou(t,t===Ke?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yu(t,r);else{e=r;var i=oe;oe|=2;var s=DE();(Ke!==t||et!==e)&&(Ln=null,Ds=Oe()+500,hi(t,e));do try{m2();break}catch(a){NE(t,a)}while(!0);Nm(),Ku.current=s,oe=i,je!==null?e=0:(Ke=null,et=0,e=ze)}if(e!==0){if(e===2&&(i=kh(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=ma,hi(t,0),dr(t,r),Ct(t,Oe()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!h2(i)&&(e=Yu(t,r),e===2&&(s=kh(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=ma,hi(t,0),dr(t,r),Ct(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:ei(t,Tt,Ln);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Gm+500-Oe(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nh(ei.bind(null,t,Tt,Ln),e);break}ei(t,Tt,Ln);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f2(r/1960))-r,10<r){t.timeoutHandle=Nh(ei.bind(null,t,Tt,Ln),r);break}ei(t,Tt,Ln);break;case 5:ei(t,Tt,Ln);break;default:throw Error(R(329))}}}return Ct(t,Oe()),t.callbackNode===n?OE.bind(null,t):null}function Zh(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&ep(e)),t}function ep(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function h2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Km,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Yy(t){if(oe&6)throw Error(R(327));_s();var e=Ou(t,0);if(!(e&1))return Ct(t,Oe()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=kh(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=ma,hi(t,0),dr(t,e),Ct(t,Oe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,Tt,Ln),Ct(t,Oe()),null}function Qm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ds=Oe()+500,Wc&&Wr())}}function Si(t){vr!==null&&vr.tag===0&&!(oe&6)&&_s();var e=oe;oe|=1;var n=qt.transition,r=le;try{if(qt.transition=null,le=1,t)return t()}finally{le=r,qt.transition=n,oe=e,!(oe&6)&&Wr()}}function Ym(){xt=us.current,ge(us)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BC(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Os(),ge(bt),ge(ht),Um();break;case 5:Vm(r);break;case 4:Os();break;case 13:ge(Se);break;case 19:ge(Se);break;case 10:Dm(r.type._context);break;case 22:case 23:Ym()}n=n.return}if(Ke=t,je=t=Cr(t.current,null),et=xt=e,ze=0,ma=null,Km=Gc=Ei=0,Tt=$o=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function NE(t,e){do{var n=je;try{if(Nm(),du.current=qu,Hu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hu=!1}if(wi=0,qe=Fe=Te=null,Uo=!1,fa=0,qm.current=null,n===null||n.return===null){ze=1,ma=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=jy(o);if(m!==null){m.flags&=-257,Vy(m,o,a,s,e),m.mode&1&&My(s,u,e),e=m,l=u;var w=e.updateQueue;if(w===null){var y=new Set;y.add(l),e.updateQueue=y}else w.add(l);break e}else{if(!(e&1)){My(s,u,e),Xm();break e}l=Error(R(426))}}else if(_e&&a.mode&1){var _=jy(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Vy(_,o,a,s,e),xm(Ns(l,a));break e}}s=l=Ns(l,a),ze!==4&&(ze=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=gE(s,l,e);Ay(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(br===null||!br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=vE(s,a,e);Ay(s,E);break e}}s=s.return}while(s!==null)}ME(n)}catch(S){e=S,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function DE(){var t=Ku.current;return Ku.current=qu,t===null?qu:t}function Xm(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(Ei&268435455)&&!(Gc&268435455)||dr(Ke,et)}function Yu(t,e){var n=oe;oe|=2;var r=DE();(Ke!==t||et!==e)&&(Ln=null,hi(t,e));do try{p2();break}catch(i){NE(t,i)}while(!0);if(Nm(),oe=n,Ku.current=r,je!==null)throw Error(R(261));return Ke=null,et=0,ze}function p2(){for(;je!==null;)LE(je)}function m2(){for(;je!==null&&!FP();)LE(je)}function LE(t){var e=VE(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?ME(t):je=e,qm.current=null}function ME(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l2(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,je=null;return}}else if(n=a2(n,e,xt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);ze===0&&(ze=5)}function ei(t,e,n){var r=le,i=qt.transition;try{qt.transition=null,le=1,g2(t,e,n,r)}finally{qt.transition=i,le=r}return null}function g2(t,e,n,r){do _s();while(vr!==null);if(oe&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YP(t,s),t===Ke&&(je=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,UE(xu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=le;le=1;var a=oe;oe|=4,qm.current=null,c2(t,n),RE(n,t),MC(xh),Nu=!!Rh,xh=Rh=null,t.current=n,d2(n),$P(),oe=a,le=o,qt.transition=s}else t.current=n;if(Ll&&(Ll=!1,vr=t,Qu=i),s=t.pendingLanes,s===0&&(br=null),WP(n.stateNode),Ct(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=Xh,Xh=null,t;return Qu&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Jh?zo++:(zo=0,Jh=t):zo=0,Wr(),null}function _s(){if(vr!==null){var t=m1(Qu),e=qt.transition,n=le;try{if(qt.transition=null,le=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Qu=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Fo(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,m=c.return;if(PE(c),c===u){j=null;break}if(f!==null){f.return=m,j=f;break}j=m}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,j=g;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(S){be(a,a.return,S)}if(a===o){j=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,j=E;break e}j=a.return}}if(oe=i,Wr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Uc,t)}catch{}r=!0}return r}finally{le=n,qt.transition=e}}return!1}function Xy(t,e,n){e=Ns(n,e),e=gE(t,e,1),t=kr(t,e,1),e=_t(),t!==null&&(Ba(t,1,e),Ct(t,e))}function be(t,e,n){if(t.tag===3)Xy(t,t,n);else for(;e!==null;){if(e.tag===3){Xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Ns(n,t),t=vE(e,t,1),e=kr(e,t,1),t=_t(),e!==null&&(Ba(e,1,t),Ct(e,t));break}}e=e.return}}function v2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(et&n)===n&&(ze===4||ze===3&&(et&130023424)===et&&500>Oe()-Gm?hi(t,0):Km|=n),Ct(t,e)}function jE(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=_t();t=Kn(t,e),t!==null&&(Ba(t,e,n),Ct(t,n))}function y2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jE(t,n)}function _2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),jE(t,n)}var VE;VE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,o2(t,e,n);kt=!!(t.flags&131072)}else kt=!1,_e&&e.flags&1048576&&$1(e,Fu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hu(t,e),t=e.pendingProps;var i=As(e,ht.current);ys(e,n),i=$m(null,e,r,t,i,n);var s=zm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Vu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mm(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&Am(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=E2(r),t=Jt(r,t),i){case 0:e=zh(null,e,r,t,n);break e;case 1:e=$y(null,e,r,t,n);break e;case 11:e=Uy(null,e,r,t,n);break e;case 14:e=Fy(null,e,r,Jt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),$y(t,e,r,i,n);case 3:e:{if(EE(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H1(t,e),Bu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(R(423)),e),e=zy(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(R(424)),e),e=zy(t,e,r,n,i);break e}else for(Ot=Ir(e.stateNode.containerInfo.firstChild),Lt=e,_e=!0,en=null,n=Q1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=Gn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Y1(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oh(r,i)?o=null:s!==null&&Oh(r,s)&&(e.flags|=32),wE(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return SE(t,e,n);case 4:return jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Uy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de($u,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!bt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),Fy(t,e,r,i,n);case 15:return yE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),hu(t,e),e.tag=1,Pt(r)?(t=!0,Vu(e)):t=!1,ys(e,n),K1(e,r,i),Fh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return TE(t,e,n);case 22:return _E(t,e,n)}throw Error(R(156,e.tag))};function UE(t,e){return d1(t,e)}function w2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new w2(t,e,n,r)}function Jm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E2(t){if(typeof t=="function")return Jm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vm)return 11;if(t===ym)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return pi(n.children,i,s,e);case gm:o=8,i|=8;break;case ch:return t=Ht(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case dh:return t=Ht(13,n,e,i),t.elementType=dh,t.lanes=s,t;case fh:return t=Ht(19,n,e,i),t.elementType=fh,t.lanes=s,t;case Gw:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qw:o=10;break e;case Kw:o=9;break e;case vm:o=11;break e;case ym:o=14;break e;case ar:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pi(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Gw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sf(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function S2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zm(t,e,n,r,i,s,o,a,l){return t=new S2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mm(s),t}function T2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function FE(t){if(!t)return Dr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Pt(n))return U1(t,n,e)}return e}function $E(t,e,n,r,i,s,o,a,l){return t=Zm(n,r,!0,t,i,s,o,a,l),t.context=FE(null),n=t.current,r=_t(),i=Pr(n),s=Wn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,Ba(t,i,r),Ct(t,r),t}function Yc(t,e,n,r){var i=e.current,s=_t(),o=Pr(i);return n=FE(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(on(t,i,o,s),cu(t,i,o)),o}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eg(t,e){Jy(t,e),(t=t.alternate)&&Jy(t,e)}function I2(){return null}var zE=typeof reportError=="function"?reportError:function(t){console.error(t)};function tg(t){this._internalRoot=t}Xc.prototype.render=tg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Yc(t,e,null,null)};Xc.prototype.unmount=tg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){Yc(null,t,null,null)}),e[qn]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=y1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&w1(t)}};function ng(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function k2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xu(o);s.call(u)}}var o=$E(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[qn]=o.current,aa(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xu(l);a.call(u)}}var l=Zm(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=l,t[qn]=l.current,aa(t.nodeType===8?t.parentNode:t),Si(function(){Yc(e,l,n,r)}),l}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xu(o);a.call(l)}}Yc(e,o,t,i)}else o=k2(n,e,t,i,r);return Xu(o)}g1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(Em(e,n|1),Ct(e,Oe()),!(oe&6)&&(Ds=Oe()+500,Wr()))}break;case 13:Si(function(){var r=Kn(t,1);if(r!==null){var i=_t();on(r,t,1,i)}}),eg(t,1)}};Sm=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=_t();on(e,t,134217728,n)}eg(t,134217728)}};v1=function(t){if(t.tag===13){var e=Pr(t),n=Kn(t,e);if(n!==null){var r=_t();on(n,t,e,r)}eg(t,e)}};y1=function(){return le};_1=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Sh=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(R(90));Yw(r),mh(r,i)}}}break;case"textarea":Jw(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};s1=Qm;o1=Si;var b2={usingClientEntryPoint:!1,Events:[Ha,rs,Bc,r1,i1,Qm]},vo={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},P2={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u1(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||I2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Uc=Ml.inject(P2),_n=Ml}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b2;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ng(e))throw Error(R(200));return T2(t,e,null,n)};Vt.createRoot=function(t,e){if(!ng(t))throw Error(R(299));var n=!1,r="",i=zE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zm(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,aa(t.nodeType===8?t.parentNode:t),new tg(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=u1(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Si(t)};Vt.hydrate=function(t,e,n){if(!Jc(e))throw Error(R(200));return Zc(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!ng(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$E(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};Vt.render=function(t,e,n){if(!Jc(e))throw Error(R(200));return Zc(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(R(40));return t._reactRootContainer?(Si(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Qm;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Zc(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function BE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BE)}catch(t){console.error(t)}}BE(),$w.exports=Vt;var C2=$w.exports,e_=C2;lh.createRoot=e_.createRoot,lh.hydrateRoot=e_.hydrateRoot;/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const t_="popstate";function A2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return tp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ju(i)}return x2(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function WE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function R2(){return Math.random().toString(36).substr(2,8)}function n_(t,e){return{usr:t.state,key:t.key,idx:e}}function tp(t,e,n,r){return n===void 0&&(n=null),ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||R2()})}function Ju(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function x2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=yr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ga({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=yr.Pop;let _=c(),g=_==null?null:_-u;u=_,l&&l({action:a,location:y.location,delta:g})}function f(_,g){a=yr.Push;let p=tp(y.location,_,g);n&&n(p,_),u=c()+1;let v=n_(p,u),E=y.createHref(p);try{o.pushState(v,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function m(_,g){a=yr.Replace;let p=tp(y.location,_,g);n&&n(p,_),u=c();let v=n_(p,u),E=y.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function w(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Ju(_);return p=p.replace(/ $/,"%20"),Ne(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(t_,d),l=_,()=>{i.removeEventListener(t_,d),l=null}},createHref(_){return e(i,_)},createURL:w,encodeLocation(_){let g=w(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(_){return o.go(_)}};return y}var r_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(r_||(r_={}));function O2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zs(e):e,i=rg(r.pathname||"/",n);if(i==null)return null;let s=HE(t);N2(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=H2(i);o=z2(s[a],l)}return o}function HE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),HE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:F2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qE(s.path))i(s,o,l)}),e}function qE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function N2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D2=/^:[\w-]+$/,L2=3,M2=2,j2=1,V2=10,U2=-2,i_=t=>t==="*";function F2(t,e){let n=t.split("/"),r=n.length;return n.some(i_)&&(r+=U2),e&&(r+=M2),n.filter(i=>!i_(i)).reduce((i,s)=>i+(D2.test(s)?L2:s===""?j2:V2),r)}function $2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function z2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=B2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ar([i,c.pathname]),pathnameBase:Q2(Ar([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ar([i,c.pathnameBase]))}return s}function B2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=W2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[d];return m&&!w?u[f]=void 0:u[f]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function W2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),WE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function H2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return WE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function q2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t;return{pathname:n?n.startsWith("/")?n:K2(n,e):e,search:Y2(r),hash:X2(i)}}function K2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function If(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ig(t,e){let n=G2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=ga({},t),Ne(!i.pathname||!i.pathname.includes("?"),If("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),If("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),If("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=q2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),Q2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,X2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function J2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KE=["post","put","patch","delete"];new Set(KE);const Z2=["get",...KE];new Set(Z2);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const og=I.createContext(null),eA=I.createContext(null),Hr=I.createContext(null),ed=I.createContext(null),nr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=I.createContext(null);function tA(t,e){let{relative:n}=e===void 0?{}:e;eo()||Ne(!1);let{basename:r,navigator:i}=I.useContext(Hr),{hash:s,pathname:o,search:a}=XE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eo(){return I.useContext(ed)!=null}function Ka(){return eo()||Ne(!1),I.useContext(ed).location}function QE(t){I.useContext(Hr).static||I.useLayoutEffect(t)}function Mi(){let{isDataRoute:t}=I.useContext(nr);return t?pA():nA()}function nA(){eo()||Ne(!1);let t=I.useContext(og),{basename:e,future:n,navigator:r}=I.useContext(Hr),{matches:i}=I.useContext(nr),{pathname:s}=Ka(),o=JSON.stringify(ig(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return QE(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=sg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ar([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function YE(){let{matches:t}=I.useContext(nr),e=t[t.length-1];return e?e.params:{}}function XE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Hr),{matches:i}=I.useContext(nr),{pathname:s}=Ka(),o=JSON.stringify(ig(i,r.v7_relativeSplatPath));return I.useMemo(()=>sg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function rA(t,e){return iA(t,e)}function iA(t,e,n,r){eo()||Ne(!1);let{navigator:i}=I.useContext(Hr),{matches:s}=I.useContext(nr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ka(),c;if(e){var d;let _=typeof e=="string"?Zs(e):e;l==="/"||(d=_.pathname)!=null&&d.startsWith(l)||Ne(!1),c=_}else c=u;let f=c.pathname||"/",m=f;if(l!=="/"){let _=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=O2(t,{pathname:m}),y=uA(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Ar([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Ar([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&y?I.createElement(ed.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:yr.Pop}},y):y}function sA(){let t=hA(),e=J2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const oA=I.createElement(sA,null);class aA extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(nr.Provider,{value:this.props.routeContext},I.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lA(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(og);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(nr.Provider,{value:e},r)}function uA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||Ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:m}=n,w=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let m,w=!1,y=null,_=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||oA,l&&(u<0&&f===0?(mA("route-fallback",!1),w=!0,_=null):u===f&&(w=!0,_=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),p=()=>{let v;return m?v=y:w?v=_:d.route.Component?v=I.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,I.createElement(lA,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?I.createElement(aA,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var JE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(JE||{}),Zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zu||{});function cA(t){let e=I.useContext(og);return e||Ne(!1),e}function dA(t){let e=I.useContext(eA);return e||Ne(!1),e}function fA(t){let e=I.useContext(nr);return e||Ne(!1),e}function ZE(t){let e=fA(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function hA(){var t;let e=I.useContext(GE),n=dA(Zu.UseRouteError),r=ZE(Zu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pA(){let{router:t}=cA(JE.UseNavigateStable),e=ZE(Zu.UseNavigateStable),n=I.useRef(!1);return QE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}const s_={};function mA(t,e,n){!e&&!s_[t]&&(s_[t]=!0)}function gA(t){let{to:e,replace:n,state:r,relative:i}=t;eo()||Ne(!1);let{future:s,static:o}=I.useContext(Hr),{matches:a}=I.useContext(nr),{pathname:l}=Ka(),u=Mi(),c=sg(e,ig(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return I.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Dn(t){Ne(!1)}function vA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1,future:a}=t;eo()&&Ne(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:w="default"}=r,y=I.useMemo(()=>{let _=rg(c,l);return _==null?null:{location:{pathname:_,search:d,hash:f,state:m,key:w},navigationType:i}},[l,c,d,f,m,w,i]);return y==null?null:I.createElement(Hr.Provider,{value:u},I.createElement(ed.Provider,{children:n,value:y}))}function yA(t){let{children:e,location:n}=t;return rA(np(e),n)}new Promise(()=>{});function np(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,np(r.props.children,s));return}r.type!==Dn&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=np(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rp(){return rp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rp.apply(this,arguments)}function _A(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EA(t,e){return t.button===0&&(!e||e==="_self")&&!wA(t)}const SA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],TA="6";try{window.__reactRouterVersion=TA}catch{}const IA="startTransition",o_=yP[IA];function kA(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=A2({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(d=>{u&&o_?o_(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(vA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const bA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=_A(e,SA),{basename:m}=I.useContext(Hr),w,y=!1;if(typeof u=="string"&&PA.test(u)&&(w=u,bA))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=rg(E.pathname,m);E.origin===v.origin&&S!=null?u=S+E.search+E.hash:y=!0}catch{}let _=tA(u,{relative:i}),g=CA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||g(v)}return I.createElement("a",rp({},f,{href:w||_,onClick:y||s?r:p,ref:n,target:l}))});var a_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(a_||(a_={}));var l_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(l_||(l_={}));function CA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Mi(),u=Ka(),c=XE(t,{relative:o});return I.useCallback(d=>{if(EA(d,n)){d.preventDefault();let f=r!==void 0?r:Ju(u)===Ju(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function AA(){return h.jsx("section",{className:"search",children:h.jsx("div",{class:"search__container",children:h.jsx("input",{class:"search__input",type:"text",placeholder:"Search"})})})}var u_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new xA;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OA=function(t){const e=eS(t);return tS.encodeByteArray(e,!0)},ec=function(t){return OA(t).replace(/\./g,"")},nS=function(t){try{return tS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=()=>NA().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof u_>"u")return;const t=u_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nS(t[1]);return e&&JSON.parse(e)},td=()=>{try{return DA()||LA()||MA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rS=t=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iS=t=>{const e=rS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sS=()=>{var t;return(t=td())===null||t===void 0?void 0:t.config},oS=t=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ec(JSON.stringify(n)),ec(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function UA(){var t;const e=(t=td())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $A(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zA(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BA(){return!UA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lS(){try{return typeof indexedDB=="object"}catch{return!1}}function WA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HA,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,r)}}function qA(t,e){return t.replace(KA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KA=/\{\$([^}]+)}/g;function GA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(c_(s)&&c_(o)){if(!tc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function c_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QA(t,e){const n=new YA(t,e);return n.subscribe.bind(n)}class YA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kf),i.error===void 0&&(i.error=kf),i.complete===void 0&&(i.complete=kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eR(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZA(t){return t===ti?void 0:t}function eR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const nR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},rR=ie.INFO,iR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},sR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ag{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=sR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const oR=(t,e)=>e.some(n=>t instanceof n);let d_,f_;function aR(){return d_||(d_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return f_||(f_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uS=new WeakMap,ip=new WeakMap,cS=new WeakMap,bf=new WeakMap,lg=new WeakMap;function uR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uS.set(n,t)}).catch(()=>{}),lg.set(e,t),e}function cR(t){if(ip.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ip.set(t,e)}let sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dR(t){sp=t(sp)}function fR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return cS.set(r,e.sort?e.sort():[e]),Rr(r)}:lR().includes(t)?function(...e){return t.apply(Pf(this),e),Rr(uS.get(this))}:function(...e){return Rr(t.apply(Pf(this),e))}}function hR(t){return typeof t=="function"?fR(t):(t instanceof IDBTransaction&&cR(t),oR(t,aR())?new Proxy(t,sp):t)}function Rr(t){if(t instanceof IDBRequest)return uR(t);if(bf.has(t))return bf.get(t);const e=hR(t);return e!==t&&(bf.set(t,e),lg.set(e,t)),e}const Pf=t=>lg.get(t);function pR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],Cf=new Map;function h_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cf.set(e,s),s}dR(t=>({...t,get:(e,n,r)=>h_(e,n)||t.get(e,n,r),has:(e,n)=>!!h_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const op="@firebase/app",p_="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new ag("@firebase/app"),_R="@firebase/app-compat",wR="@firebase/analytics-compat",ER="@firebase/analytics",SR="@firebase/app-check-compat",TR="@firebase/app-check",IR="@firebase/auth",kR="@firebase/auth-compat",bR="@firebase/database",PR="@firebase/database-compat",CR="@firebase/functions",AR="@firebase/functions-compat",RR="@firebase/installations",xR="@firebase/installations-compat",OR="@firebase/messaging",NR="@firebase/messaging-compat",DR="@firebase/performance",LR="@firebase/performance-compat",MR="@firebase/remote-config",jR="@firebase/remote-config-compat",VR="@firebase/storage",UR="@firebase/storage-compat",FR="@firebase/firestore",$R="@firebase/firestore-compat",zR="firebase",BR="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="[DEFAULT]",WR={[op]:"fire-core",[_R]:"fire-core-compat",[ER]:"fire-analytics",[wR]:"fire-analytics-compat",[TR]:"fire-app-check",[SR]:"fire-app-check-compat",[IR]:"fire-auth",[kR]:"fire-auth-compat",[bR]:"fire-rtdb",[PR]:"fire-rtdb-compat",[CR]:"fire-fn",[AR]:"fire-fn-compat",[RR]:"fire-iid",[xR]:"fire-iid-compat",[OR]:"fire-fcm",[NR]:"fire-fcm-compat",[DR]:"fire-perf",[LR]:"fire-perf-compat",[MR]:"fire-rc",[jR]:"fire-rc-compat",[VR]:"fire-gcs",[UR]:"fire-gcs-compat",[FR]:"fire-fst",[$R]:"fire-fst-compat","fire-js":"fire-js",[zR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map,lp=new Map;function HR(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(lp.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;lp.set(e,t);for(const n of nc.values())HR(n,t);return!0}function nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new Ga("app","Firebase",qR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=BR;function dS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ap,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=sS()),!n)throw xr.create("no-options");const s=nc.get(i);if(s){if(tc(n,s.options)&&tc(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new tR(i);for(const l of lp.values())o.addComponent(l);const a=new KR(n,r,o);return nc.set(i,a),a}function ug(t=ap){const e=nc.get(t);if(!e&&t===ap&&sS())return dS();if(!e)throw xr.create("no-app",{appName:t});return e}function En(t,e,n){var r;let i=(r=WR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Ii(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="firebase-heartbeat-database",QR=1,ya="firebase-heartbeat-store";let Af=null;function fS(){return Af||(Af=pR(GR,QR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Af}async function YR(t){try{const n=(await fS()).transaction(ya),r=await n.objectStore(ya).get(hS(t));return await n.done,r}catch(e){if(e instanceof Rn)Ti.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function m_(t,e){try{const r=(await fS()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,hS(t)),await r.done}catch(n){if(n instanceof Rn)Ti.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(r.message)}}}function hS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=1024,JR=30*24*60*60*1e3;class ZR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=g_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=JR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=g_(),{heartbeatsToSend:r,unsentEntries:i}=ex(this._heartbeatsCache.heartbeats),s=ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function g_(){return new Date().toISOString().substring(0,10)}function ex(t,e=XR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),v_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),v_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lS()?WA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function v_(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){Ii(new Lr("platform-logger",e=>new vR(e),"PRIVATE")),Ii(new Lr("heartbeat",e=>new ZR(e),"PRIVATE")),En(op,p_,t),En(op,p_,"esm2017"),En("fire-js","")}nx("");var rx="firebase",ix="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(rx,ix,"app");var sx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,cg=cg||{},Q=sx||self;function rd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ox(t){return Object.prototype.hasOwnProperty.call(t,Rf)&&t[Rf]||(t[Rf]=++ax)}var Rf="closure_uid_"+(1e9*Math.random()>>>0),ax=0;function lx(t,e,n){return t.call.apply(t.bind,arguments)}function ux(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=lx:dt=ux,dt.apply(null,arguments)}function jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var cx=0;qr.prototype.s=!1;qr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),cx!=0)&&ox(this)};qr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function y_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var dx=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function _a(t){return/^[\s\xa0]*$/.test(t)}function id(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return id().indexOf(t)!=-1}function fg(t){return fg[" "](t),t}fg[" "]=function(){};function fx(t,e){var n=iO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hx=pn("Opera"),Ls=pn("Trident")||pn("MSIE"),mS=pn("Edge"),up=mS||Ls,gS=pn("Gecko")&&!(id().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),px=id().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function vS(){var t=Q.document;return t?t.documentMode:void 0}var cp;e:{var xf="",Of=function(){var t=id();if(gS)return/rv:([^\);]+)(\)|;)/.exec(t);if(mS)return/Edge\/([\d\.]+)/.exec(t);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(px)return/WebKit\/(\S+)/.exec(t);if(hx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Of&&(xf=Of?Of[1]:""),Ls){var Nf=vS();if(Nf!=null&&Nf>parseFloat(xf)){cp=String(Nf);break e}}cp=xf}var dp;if(Q.document&&Ls){var __=vS();dp=__||parseInt(cp,10)||void 0}else dp=void 0;var mx=dp;function wa(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gS){e:{try{fg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wa.$.h.call(this)}}Qe(wa,ft);var gx={2:"touch",3:"pen",4:"mouse"};wa.prototype.h=function(){wa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xa="closure_listenable_"+(1e6*Math.random()|0),vx=0;function yx(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++vx,this.fa=this.ia=!1}function sd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _x(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yS(t){const e={};for(const n in t)e[n]=t[n];return e}const w_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _S(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<w_.length;s++)n=w_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function od(t){this.src=t,this.g={},this.h=0}od.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yx(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function fp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var pg="closure_lm_"+(1e6*Math.random()|0),Df={};function wS(t,e,n,r,i){if(r&&r.once)return SS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wS(t,e[s],n,r,i);return null}return n=vg(n),t&&t[Xa]?t.O(e,n,Ya(r)?!!r.capture:!!r,i):ES(t,e,n,!1,r,i)}function ES(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ya(i)?!!i.capture:!!i,a=gg(t);if(a||(t[pg]=a=new od(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(IS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wx(){function t(n){return e.call(t.src,t.listener,n)}const e=Ex;return t}function SS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)SS(t,e[s],n,r,i);return null}return n=vg(n),t&&t[Xa]?t.P(e,n,Ya(r)?!!r.capture:!!r,i):ES(t,e,n,!0,r,i)}function TS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TS(t,e[s],n,r,i);else r=Ya(r)?!!r.capture:!!r,n=vg(n),t&&t[Xa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hp(s,n,r,i),-1<n&&(sd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,i)),(n=-1<t?e[t]:null)&&mg(n))}function mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xa])fp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gg(e))?(fp(n,t),n.h==0&&(n.src=null,e[pg]=null)):sd(t)}}}function IS(t){return t in Df?Df[t]:Df[t]="on"+t}function Ex(t,e){if(t.fa)t=!0;else{e=new wa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mg(t),t=n.call(r,e)}return t}function gg(t){return t=t[pg],t instanceof od?t:null}var Lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function vg(t){return typeof t=="function"?t:(t[Lf]||(t[Lf]=function(e){return t.handleEvent(e)}),t[Lf])}function Ge(){qr.call(this),this.i=new od(this),this.S=this,this.J=null}Qe(Ge,qr);Ge.prototype[Xa]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){TS(this,t,e,n,r)};function tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(r,t),_S(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Vl(o,r,!0,e)&&i}if(o=e.g=t,i=Vl(o,r,!0,e)&&i,i=Vl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Vl(o,r,!1,e)&&i}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sd(n[r]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&fp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var yg=Q.JSON.stringify;class Sx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Tx(){var t=_g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ix{constructor(){this.h=this.g=null}add(e,n){const r=kS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kS=new Sx(()=>new kx,t=>t.reset());class kx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Px(t){Q.setTimeout(()=>{throw t},0)}let Ea,Sa=!1,_g=new Ix,bS=()=>{const t=Q.Promise.resolve(void 0);Ea=()=>{t.then(Cx)}};var Cx=()=>{for(var t;t=Tx();){try{t.h.call(t.g)}catch(n){Px(n)}var e=kS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sa=!1};function ad(t,e){Ge.call(this),this.h=t||1,this.g=e||Q,this.j=dt(this.qb,this),this.l=Date.now()}Qe(ad,Ge);D=ad.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(wg(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ad.$.N.call(this),wg(this),delete this.g};function Eg(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function PS(t){t.g=Eg(()=>{t.g=null,t.i&&(t.i=!1,PS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ax extends qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:PS(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ta(t){qr.call(this),this.h=t,this.g={}}Qe(Ta,qr);var E_=[];function CS(t,e,n,r){Array.isArray(n)||(n&&(E_[0]=n.toString()),n=E_);for(var i=0;i<n.length;i++){var s=wS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function AS(t){hg(t.g,function(e,n){this.g.hasOwnProperty(n)&&mg(e)},t),t.g={}}Ta.prototype.N=function(){Ta.$.N.call(this),AS(this)};Ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ld(){this.g=!0}ld.prototype.Ea=function(){this.g=!1};function Rx(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nx(t,n)+(r?" "+r:"")})}function Ox(t,e){t.info(function(){return"TIMEOUT: "+e})}ld.prototype.info=function(){};function Nx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yg(n)}catch{return e}}var Vi={},S_=null;function ud(){return S_=S_||new Ge}Vi.Ta="serverreachability";function RS(t){ft.call(this,Vi.Ta,t)}Qe(RS,ft);function Ia(t){const e=ud();tt(e,new RS(e))}Vi.STAT_EVENT="statevent";function xS(t,e){ft.call(this,Vi.STAT_EVENT,t),this.stat=e}Qe(xS,ft);function yt(t){const e=ud();tt(e,new xS(e,t))}Vi.Ua="timingevent";function OS(t,e){ft.call(this,Vi.Ua,t),this.size=e}Qe(OS,ft);function Ja(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var cd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},NS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sg(){}Sg.prototype.h=null;function T_(t){return t.h||(t.h=t.i())}function DS(){}var Za={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Tg(){ft.call(this,"d")}Qe(Tg,ft);function Ig(){ft.call(this,"c")}Qe(Ig,ft);var pp;function dd(){}Qe(dd,Sg);dd.prototype.g=function(){return new XMLHttpRequest};dd.prototype.i=function(){return{}};pp=new dd;function el(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ta(this),this.P=Dx,t=up?125:void 0,this.V=new ad(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new LS}function LS(){this.i=null,this.g="",this.h=!1}var Dx=45e3,MS={},mp={};D=el.prototype;D.setTimeout=function(t){this.P=t};function gp(t,e,n){t.L=1,t.A=hd(Qn(e)),t.u=n,t.S=!0,jS(t,null)}function jS(t,e){t.G=Date.now(),tl(t),t.B=Qn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),HS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new LS,t.g=fT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ax(dt(t.Pa,t,t.g),t.O)),CS(t.U,t.g,"readystatechange",t.nb),e=t.I?yS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ia(),Rx(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&mn(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=mn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||up||this.g&&(this.h.h||this.g.ja()||P_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Ia(3):Ia(2)),fd(this);var n=this.g.da();this.ca=n;t:if(VS(this)){var r=P_(this.g);t="";var i=r.length,s=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),Bo(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xx(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_a(a)){var u=a;break t}}u=null}if(n=u)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vp(this,n);else{this.i=!1,this.s=3,yt(12),oi(this),Bo(this);break e}}this.S?(US(this,c,o),up&&this.i&&c==3&&(CS(this.U,this.V,"tick",this.mb),this.V.start())):(cs(this.j,this.m,o,null),vp(this,o)),c==4&&oi(this),this.i&&!this.J&&(c==4?lT(this.l,this):(this.i=!1,tl(this)))}else tO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),oi(this),Bo(this)}}}catch{}finally{}};function VS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function US(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=Lx(t,n),i==mp){e==4&&(t.s=4,yt(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==MS){t.s=4,yt(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),vp(t,i);VS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rg(e),e.M=!0,yt(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),oi(t),Bo(t))}D.mb=function(){if(this.g){var t=mn(this.g),e=this.g.ja();this.o<e.length&&(fd(this),US(this,t,e),this.i&&t!=4&&tl(this))}};function Lx(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?mp:(n=Number(e.substring(n,r)),isNaN(n)?MS:(r+=1,r+n>e.length?mp:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,oi(this)};function tl(t){t.Y=Date.now()+t.P,FS(t,t.P)}function FS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ja(dt(t.lb,t),e)}function fd(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Ox(this.j,this.B),this.L!=2&&(Ia(),yt(17)),oi(this),this.s=2,Bo(this)):FS(this,this.Y-t)};function Bo(t){t.l.H==0||t.J||lT(t.l,t)}function oi(t){fd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wg(t.V),AS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function vp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yp(n.i,t))){if(!t.K&&yp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sc(n),vd(n);else break e;Ag(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ja(dt(n.ib,n),6e3));if(1>=GS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ai(n,11)}else if((t.K||n.g==t)&&sc(n),!_a(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kg(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,me(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=dT(r,r.J?r.pa:null,r.Y),o.K){QS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(fd(a),tl(a)),r.g=o}else oT(r);0<n.j.length&&yd(n)}else u[0]!="stop"&&u[0]!="close"||ai(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ai(n,7):Cg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ia(4)}catch{}}function Mx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $S(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jx(t),r=Mx(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var zS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mi){this.h=t.h,rc(this,t.j),this.s=t.s,this.g=t.g,ic(this,t.m),this.l=t.l;var e=t.i,n=new ka;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),I_(this,n),this.o=t.o}else t&&(e=String(t).match(zS))?(this.h=!1,rc(this,e[1]||"",!0),this.s=Co(e[2]||""),this.g=Co(e[3]||"",!0),ic(this,e[4]),this.l=Co(e[5]||"",!0),I_(this,e[6]||"",!0),this.o=Co(e[7]||"")):(this.h=!1,this.i=new ka(null,this.h))}mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ao(e,k_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ao(e,k_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ao(n,n.charAt(0)=="/"?$x:Fx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ao(n,Bx)),t.join("")};function Qn(t){return new mi(t)}function rc(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ic(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function I_(t,e,n){e instanceof ka?(t.i=e,Wx(t.i,t.h)):(n||(e=Ao(e,zx)),t.i=new ka(e,t.h))}function me(t,e,n){t.i.set(e,n)}function hd(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ao(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ux),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ux(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var k_=/[#\/\?@]/g,Fx=/[#\?:]/g,$x=/[#\?]/g,zx=/[#\?@]/g,Bx=/#/g;function ka(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kr(t){t.g||(t.g=new Map,t.h=0,t.i&&Vx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ka.prototype;D.add=function(t,e){Kr(this),this.i=null,t=to(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function BS(t,e){Kr(t),e=to(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function WS(t,e){return Kr(t),e=to(t,e),t.g.has(e)}D.forEach=function(t,e){Kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){Kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){Kr(this);let e=[];if(typeof t=="string")WS(this,t)&&(e=e.concat(this.g.get(to(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Kr(this),this.i=null,t=to(this,t),WS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function HS(t,e,n){BS(t,e),0<n.length&&(t.i=null,t.g.set(to(t,e),dg(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function to(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Wx(t,e){e&&!t.j&&(Kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(BS(this,r),HS(this,i,n))},t)),t.j=e}var Hx=class{constructor(t,e){this.g=t,this.map=e}};function qS(t){this.l=t||qx,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qx=10;function KS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function GS(t){return t.h?1:t.g?t.g.size:0}function yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kg(t,e){t.g?t.g.add(e):t.h=e}function QS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qS.prototype.cancel=function(){if(this.i=YS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function YS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dg(t.i)}var Kx=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function Gx(){this.g=new Kx}function Qx(t,e,n){const r=n||"";try{$S(t,function(i,s){let o=i;Ya(i)&&(o=yg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Yx(t,e){const n=new ld;if(Q.Image){const r=new Image;r.onload=jl(Ul,n,r,"TestLoadImage: loaded",!0,e),r.onerror=jl(Ul,n,r,"TestLoadImage: error",!1,e),r.onabort=jl(Ul,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=jl(Ul,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ul(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function pd(t){this.l=t.ec||null,this.j=t.ob||!1}Qe(pd,Sg);pd.prototype.g=function(){return new md(this.l,this.j)};pd.prototype.i=function(t){return function(){return t}}({});function md(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(md,Ge);var bg=0;D=md.prototype;D.open=function(t,e){if(this.readyState!=bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ba(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nl(this)),this.readyState=bg};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;XS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function XS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nl(this):ba(this),this.readyState==3&&XS(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,nl(this))};D.Ya=function(t){this.g&&(this.response=t,nl(this))};D.ka=function(){this.g&&nl(this)};function nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ba(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ba(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(md.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Xx=Q.JSON.parse;function Ce(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=JS,this.L=this.M=!1}Qe(Ce,Ge);var JS="",Jx=/^https?$/i,Zx=["POST","PUT"];D=Ce.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pp.g(),this.C=this.u?T_(this.u):T_(pp),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){b_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=pS(Zx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tT(this),0<this.B&&((this.L=eO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Eg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){b_(this,s)}};function eO(t){return Ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof cg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function b_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ZS(t),gd(t)}function ZS(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),gd(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gd(this,!0)),Ce.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?eT(this):this.kb())};D.kb=function(){eT(this)};function eT(t){if(t.h&&typeof cg<"u"&&(!t.C[1]||mn(t)!=4||t.da()!=2)){if(t.v&&mn(t)==4)Eg(t.La,0,t);else if(tt(t,"readystatechange"),mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(zS)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!Jx.test(i?i.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var s=2<mn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ZS(t)}}finally{gd(t)}}}}function gd(t,e){if(t.g){tT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function tT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function mn(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Xx(e)}};function P_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case JS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tO(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_a(t[r]))continue;var n=bx(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}_x(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nT(t){let e="";return hg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Pg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function yo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rT(t){this.Ga=0,this.j=[],this.l=new ld,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=yo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=yo("baseRetryDelayMs",5e3,t),this.hb=yo("retryDelaySeedMs",1e4,t),this.eb=yo("forwardChannelMaxRetries",2,t),this.xa=yo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qS(t&&t.concurrentRequestLimit),this.Ja=new Gx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=rT.prototype;D.ra=8;D.H=1;function Cg(t){if(iT(t),t.H==3){var e=t.W++,n=Qn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),rl(t,n),e=new el(t,t.l,e),e.L=2,e.A=hd(Qn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=fT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),tl(e)}cT(t)}function vd(t){t.g&&(Rg(t),t.g.cancel(),t.g=null)}function iT(t){vd(t),t.u&&(Q.clearTimeout(t.u),t.u=null),sc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function yd(t){if(!KS(t.i)&&!t.m){t.m=!0;var e=t.Na;Ea||bS(),Sa||(Ea(),Sa=!0),_g.add(e,t),t.C=0}}function nO(t,e){return GS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ja(dt(t.Na,t,e),uT(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new el(this,this.l,t);let s=this.s;if(this.U&&(s?(s=yS(s),_S(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sT(this,i,e),n=Qn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),rl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(nT(s)))+"&"+e:this.o&&Pg(n,this.o,s)),kg(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,gp(i,n,null)):gp(i,n,e),this.H=2}}else this.H==3&&(t?C_(this,t):this.j.length==0||KS(this.i)||C_(this))};function C_(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),rl(t,r),t.o&&t.s&&Pg(r,t.o,t.s),n=new el(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=sT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),kg(t.i,n),gp(n,r,e)}function rl(t,e){t.na&&hg(t.na,function(n,r){me(e,r,n)}),t.h&&$S({},function(n,r){me(e,r,n)})}function sT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Qx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function oT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ea||bS(),Sa||(Ea(),Sa=!0),_g.add(e,t),t.A=0}}function Ag(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ja(dt(t.Ma,t),uT(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,aT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ja(dt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),vd(this),aT(this))};function Rg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function aT(t){t.g=new el(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),rl(t,e),t.o&&t.s&&Pg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=hd(Qn(e)),n.u=null,n.S=!0,jS(n,t)}D.ib=function(){this.v!=null&&(this.v=null,vd(this),Ag(this),yt(19))};function sc(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function lT(t,e){var n=null;if(t.g==e){sc(t),Rg(t),t.g=null;var r=2}else if(yp(t.i,e))n=e.F,QS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=ud(),tt(r,new OS(r,n)),yd(t)}else oT(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&nO(t,e)||r==2&&Ag(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ai(t,5);break;case 4:ai(t,10);break;case 3:ai(t,6);break;default:ai(t,2)}}}function uT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ai(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new mi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||rc(n,"https"),hd(n)),Yx(n.toString(),r)}else yt(2);t.H=0,t.h&&t.h.za(e),cT(t),iT(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function cT(t){if(t.H=0,t.ma=[],t.h){const e=YS(t.i);(e.length!=0||t.j.length!=0)&&(y_(t.ma,e),y_(t.ma,t.j),t.i.i.length=0,dg(t.j),t.j.length=0),t.h.ya()}}function dT(t,e,n){var r=n instanceof mi?Qn(n):new mi(n);if(r.g!="")e&&(r.g=e+"."+r.g),ic(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new mi(null);r&&rc(s,r),e&&(s.g=e),i&&ic(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),rl(t,r),r}function fT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ce(new pd({ob:n})):new Ce(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function hT(){}D=hT.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function oc(){if(Ls&&!(10<=Number(mx)))throw Error("Environmental error: no available transport.")}oc.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){Ge.call(this),this.g=new rT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_a(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new no(this)}Qe(jt,Ge);jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=dT(t,null,t.Y),yd(t)};jt.prototype.close=function(){Cg(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yg(t),t=n);e.j.push(new Hx(e.fb++,t)),e.H==3&&yd(e)};jt.prototype.N=function(){this.g.h=null,delete this.j,Cg(this.g),delete this.g,jt.$.N.call(this)};function pT(t){Tg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(pT,Tg);function mT(){Ig.call(this),this.status=1}Qe(mT,Ig);function no(t){this.g=t}Qe(no,hT);no.prototype.Ba=function(){tt(this.g,"a")};no.prototype.Aa=function(t){tt(this.g,new pT(t))};no.prototype.za=function(t){tt(this.g,new mT)};no.prototype.ya=function(){tt(this.g,"b")};function rO(){this.blockSize=-1}function ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(ln,rO);ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Mf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Mf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Mf(this,r),i=0;break}}this.h=i,this.i+=e};ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var iO={};function xg(t){return-128<=t&&128>t?fx(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return ws;if(0>t)return Je(gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_p;return new ue(e,0)}function gT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(gT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),r=ws,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=gn(Math.pow(e,s)),r=r.R(s).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var _p=4294967296,ws=xg(0),wp=xg(1),A_=xg(16777216);D=ue.prototype;D.ea=function(){if(Wt(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_p+r)*e,e*=_p}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($n(this))return"0";if(Wt(this))return"-"+Je(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,r="";;){var i=lc(n,e).g;n=ac(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,$n(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}D.X=function(t){return t=ac(this,t),Wt(t)?-1:$n(t)?0:1};function Je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(wp)}D.abs=function(){return Wt(this)?Je(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function ac(t,e){return t.add(Je(e))}D.R=function(t){if($n(this)||$n(t))return ws;if(Wt(this))return Wt(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(Wt(t))return Je(this.R(Je(t)));if(0>this.X(A_)&&0>t.X(A_))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Fl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Fl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function Fl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _o(t,e){this.g=t,this.h=e}function lc(t,e){if($n(e))throw Error("division by zero");if($n(t))return new _o(ws,ws);if(Wt(t))return e=lc(Je(t),e),new _o(Je(e.g),Je(e.h));if(Wt(e))return e=lc(t,Je(e)),new _o(Je(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wp,r=e;0>=r.X(t);)n=R_(n),r=R_(r);var i=Ki(n,1),s=Ki(r,1);for(r=Ki(r,2),n=Ki(n,2);!$n(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ki(r,1),n=Ki(n,1)}return e=ac(t,i.R(e)),new _o(i,e)}for(i=ws;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gn(n),o=s.R(e);Wt(o)||0<o.X(t);)n-=r,s=gn(n),o=s.R(e);$n(s)&&(s=wp),i=i.add(s),t=ac(t,o)}return new _o(i,t)}D.gb=function(t){return lc(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function R_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Ki(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ue(i,t.h)}oc.prototype.createWebChannel=oc.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;cd.NO_ERROR=0;cd.TIMEOUT=8;cd.HTTP_ERROR=6;NS.COMPLETE="complete";DS.EventType=Za;Za.OPEN="a";Za.CLOSE="b";Za.ERROR="c";Za.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;ln.prototype.digest=ln.prototype.l;ln.prototype.reset=ln.prototype.reset;ln.prototype.update=ln.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=gn;ue.fromString=gT;var sO=function(){return new oc},oO=function(){return ud()},jf=cd,aO=NS,lO=Vi,x_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$l=DS,uO=Ce,cO=ln,Es=ue;const O_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new ag("@firebase/firestore");function wo(){return ki.logLevel}function N(t,...e){if(ki.logLevel<=ie.DEBUG){const n=e.map(Og);ki.debug(`Firestore (${ro}): ${t}`,...n)}}function Pn(t,...e){if(ki.logLevel<=ie.ERROR){const n=e.map(Og);ki.error(`Firestore (${ro}): ${t}`,...n)}}function Ms(t,...e){if(ki.logLevel<=ie.WARN){const n=e.map(Og);ki.warn(`Firestore (${ro}): ${t}`,...n)}}function Og(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function fe(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class fO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hO{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new vT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new at(e)}}class pO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new gO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function js(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Pa{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const _O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Pa{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return _O.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(we.fromString(e))}static fromName(e){return new F(we.fromString(e).popFirst(5))}static empty(){return new F(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new we(e.slice()))}}function wO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Mr(i,F.empty(),e)}function EO(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Y.min(),F.empty(),-1)}static max(){return new Mr(Y.max(),F.empty(),-1)}}function SO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==TO)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Sn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Wo(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Dg(r.target.error);this.V.reject(new Wo(e,i))}}static open(e,n,r,i){try{return new Ng(n,e.transaction(i,r))}catch(s){throw new Wo(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new bO(n)}}class li{constructor(e,n,r){this.name=e,this.version=n,this.p=r,li.S(Ve())===12.2&&Pn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),ni(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lS())return!1;if(li.C())return!0;const e=Ve(),n=li.S(e),r=0<n&&n<10,i=li.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Wo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Wo(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Ng.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),b.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ni(this.k.delete())}}class Wo extends V{constructor(e,n){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function sl(t){return t.name==="IndexedDbTransactionError"}class bO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ni(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),ni(this.store.add(e))}get(e){return ni(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),ni(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),ni(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new b((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=Dg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new kO(a),u=n(a.primaryKey,a.value,l);if(u instanceof b){const c=u.catch(d=>(l.done(),b.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ni(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Dg(r.target.error);n(i)}})}let N_=!1;function Dg(t){const e=li.S(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return N_||(N_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Lg._e=-1;function _d(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function PO(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zl(this.root,e,this.comparator,!0)}}class zl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L_(this.data.getIterator())}getIteratorFrom(e){return new L_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class L_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new nt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wT("Invalid base64 string: "+s):s}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const CO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=CO.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jg(t){const e=t.mapValue.fields.__previous_value__;return Mg(e)?jg(e):e}function Ca(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mg(t)?4:RO(t)?9007199254740991:10:K()}function Cn(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),a=jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bi(i.bytesValue).isEqual(bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?uc(o)===uc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(D_(o)!==D_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Cn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Ra(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return M_(t.timestampValue,e.timestampValue);case 4:return M_(Ca(t),Ca(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=bi(s),l=bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ae(a[u],l[u]);if(c!==0)return c}return ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Me(s.latitude),Me(o.latitude));return a!==0?a:ae(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Vs(a[u],l[u]);if(c)return c}return ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Bl.mapValue&&o===Bl.mapValue)return 0;if(s===Bl.mapValue)return 1;if(o===Bl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=ae(l[d],c[d]);if(f!==0)return f;const m=Vs(a[l[d]],u[c[d]]);if(m!==0)return m}return ae(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function M_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=jr(t),r=jr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Us(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return F.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ep(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ep(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Sp(t){return!!t&&"integerValue"in t}function Vg(t){return!!t&&"arrayValue"in t}function j_(t){return!!t&&"nullValue"in t}function V_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vu(t){return!!t&&"mapValue"in t}function Ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ho(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Ho(this.value))}}function ET(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Ze([n]);if(vu(r)){const s=ET(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,Y.min(),Y.min(),Y.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,Y.min(),Y.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,Y.min(),Y.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.position=e,this.inclusive=n}}function U_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function F_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function xO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{}class $e extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NO(e,n,r):n==="array-contains"?new MO(e,r):n==="in"?new jO(e,r):n==="not-in"?new VO(e,r):n==="array-contains-any"?new UO(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DO(e,r):new LO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new An(e,n)}matches(e){return TT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function TT(t){return t.op==="and"}function IT(t){return OO(t)&&TT(t)}function OO(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Tp(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(IT(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function kT(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&Cn(r.value,i.value)}(t,e):t instanceof An?function(r,i){return i instanceof An&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kT(o,i.filters[a]),!0):!1}(t,e):void K()}function bT(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(bT).join(" ,")+"}"}(t):"Filter"}class NO extends $e{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class DO extends $e{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LO extends $e{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class MO extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vg(n)&&Ra(n.arrayValue,this.value)}}class jO extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ra(this.value.arrayValue,n)}}class VO extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ra(this.value.arrayValue,n)}}class UO extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function $_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FO(t,e,n,r,i,s,o)}function Ug(t){const e=X(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_d(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.ce=n}return e.ce}function Fg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F_(t.startAt,e.startAt)&&F_(t.endAt,e.endAt)}function Ip(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function $O(t,e,n,r,i,s,o,a){return new wd(t,e,n,r,i,s,o,a)}function $g(t){return new wd(t)}function z_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zO(t){return t.collectionGroup!==null}function qo(t){const e=X(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(Ze.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new dc(s,r))}),n.has(Ze.keyField().canonicalString())||e.le.push(new dc(Ze.keyField(),r))}return e.le}function Tn(t){const e=X(t);return e.he||(e.he=BO(e,qo(t))),e.he}function BO(t,e){if(t.limitType==="F")return $_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dc(i.field,s)});const n=t.endAt?new cc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cc(t.startAt.position,t.startAt.inclusive):null;return $_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kp(t,e,n){return new wd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ed(t,e){return Fg(Tn(t),Tn(e))&&t.limitType===e.limitType}function CT(t){return`${Ug(Tn(t))}|lt:${t.limitType}`}function Qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bT(i)).join(", ")}]`),_d(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(Tn(t))}; limitType=${t.limitType})`}function Sd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of qo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=U_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,qo(r),i)||r.endAt&&!function(o,a,l){const u=U_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,qo(r),i))}(t,e)}function WO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AT(t){return(e,n)=>{let r=!1;for(const i of qo(t)){const s=HO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HO(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Vs(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _T(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new ke(F.comparator);function Yn(){return qO}const RT=new ke(F.comparator);function Ro(...t){let e=RT;for(const n of t)e=e.insert(n.key,n);return e}function xT(t){let e=RT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ui(){return Ko()}function OT(){return Ko()}function Ko(){return new io(t=>t.toString(),(t,e)=>t.isEqual(e))}const KO=new ke(F.comparator),GO=new nt(F.comparator);function ne(...t){let e=GO;for(const n of t)e=e.add(n);return e}const QO=new nt(ae);function YO(){return QO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function DT(t){return{integerValue:""+t}}function XO(t,e){return PO(e)?DT(e):NT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this._=void 0}}function JO(t,e,n){return t instanceof fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mg(s)&&(s=jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xa?MT(t,e):t instanceof Oa?jT(t,e):function(i,s){const o=LT(i,s),a=B_(o)+B_(i.Ie);return Sp(o)&&Sp(i.Ie)?DT(a):NT(i.serializer,a)}(t,e)}function ZO(t,e,n){return t instanceof xa?MT(t,e):t instanceof Oa?jT(t,e):n}function LT(t,e){return t instanceof hc?function(r){return Sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fc extends Td{}class xa extends Td{constructor(e){super(),this.elements=e}}function MT(t,e){const n=VT(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oa extends Td{constructor(e){super(),this.elements=e}}function jT(t,e){let n=VT(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class hc extends Td{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function B_(t){return Me(t.integerValue||t.doubleValue)}function VT(t){return Vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xa&&i instanceof xa||r instanceof Oa&&i instanceof Oa?js(r.elements,i.elements,Cn):r instanceof hc&&i instanceof hc?Cn(r.Ie,i.Ie):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class tN{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function UT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zg(t.key,Kt.none()):new ol(t.key,t.data,Kt.none());{const n=t.data,r=It.empty();let i=new nt(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new Nt(i.toArray()),Kt.none())}}function nN(t,e,n){t instanceof ol?function(i,s,o){const a=i.value.clone(),l=H_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(i,s,o){if(!yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=H_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(FT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Go(t,e,n,r){return t instanceof ol?function(s,o,a,l){if(!yu(s.precondition,o))return a;const u=s.value.clone(),c=q_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(s,o,a,l){if(!yu(s.precondition,o))return a;const u=q_(s.fieldTransforms,l,o),c=o.data;return c.setAll(FT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=LT(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function W_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&js(r,i,(s,o)=>eN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function H_(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZO(o,a,n[i]))}return r}function q_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JO(s,o,e))}return r}class zg extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iN extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=UT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,r)=>W_(n,r))&&js(this.baseMutations,e.baseMutations,(n,r)=>W_(n,r))}}class Bg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return KO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,se;function lN(t){switch(t){default:return K();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function $T(t){if(t===void 0)return Pn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Le.OK:return C.OK;case Le.CANCELLED:return C.CANCELLED;case Le.UNKNOWN:return C.UNKNOWN;case Le.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Le.INTERNAL:return C.INTERNAL;case Le.UNAVAILABLE:return C.UNAVAILABLE;case Le.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Le.NOT_FOUND:return C.NOT_FOUND;case Le.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Le.ABORTED:return C.ABORTED;case Le.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Le.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new Es([4294967295,4294967295],0);function K_(t){const e=uN().encode(t),n=new cO;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Es([n,r],0),new Es([i,s],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Es.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Es.fromNumber(r)));return i.compare(cN)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=K_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=K_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kd(Y.min(),i,new ke(ae),Yn(),ne())}}class al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new al(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class zT{constructor(e,n){this.targetId=e,this.fe=n}}class BT{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Q_{constructor(){this.ge=0,this.pe=X_(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new al(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=X_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,fe(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class dN{constructor(e){this.Be=e,this.ke=new Map,this.qe=Yn(),this.Qe=Y_(),this.Ke=new ke(ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ip(s))if(r===0){const o=new F(s.path);this.We(n,o,ct.newNoDocument(o,Y.min()))}else fe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=bi(r).toUint8Array()}catch(l){if(l instanceof wT)return Ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Wg(o,i,s)}catch(l){return Ms(l instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ip(a.target)){const l=new F(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ct.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ne();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new kd(e,n,this.Ke,this.qe,r);return this.qe=Yn(),this.Qe=Y_(),this.Ke=new ke(ae),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Q_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new nt(ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Q_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Y_(){return new ke(F.comparator)}function X_(){return new ke(F.comparator)}const fN={asc:"ASCENDING",desc:"DESCENDING"},hN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pN={and:"AND",or:"OR"};class mN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bp(t,e){return t.useProto3Json||_d(e)?e:{value:e}}function pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gN(t,e){return pc(t,e.toTimestamp())}function In(t){return fe(!!t),Y.fromTimestamp(function(n){const r=jr(n);return new Be(r.seconds,r.nanos)}(t))}function Hg(t,e){return Pp(t,e).canonicalString()}function Pp(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HT(t){const e=we.fromString(t);return fe(YT(e)),e}function Cp(t,e){return Hg(t.databaseId,e.path)}function Vf(t,e){const n=HT(e);if(n.get(1)!==t.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(KT(n))}function qT(t,e){return Hg(t.databaseId,e)}function vN(t){const e=HT(t);return e.length===4?we.emptyPath():KT(e)}function Ap(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J_(t,e,n){return{name:Cp(t,e),fields:n.value.mapValue.fields}}function yN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(fe(c===void 0||typeof c=="string"),pt.fromBase64String(c||"")):(fe(c===void 0||c instanceof Uint8Array),pt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?C.UNKNOWN:$T(u.code);return new V(c,u.message||"")}(o);n=new BT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vf(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):Y.min(),a=new It({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new _u(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vf(t,r.document),s=r.readTime?In(r.readTime):Y.min(),o=ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vf(t,r.document),s=r.removedTargetIds||[];n=new _u([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aN(i,s),a=r.targetId;n=new zT(a,o)}}return n}function _N(t,e){let n;if(e instanceof ol)n={update:J_(t,e.key,e.value)};else if(e instanceof zg)n={delete:Cp(t,e.key)};else if(e instanceof Gr)n={update:J_(t,e.key,e.data),updateMask:CN(e.fieldMask)};else{if(!(e instanceof iN))return K();n={verify:Cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function wN(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?In(i.updateTime):In(s);return o.isEqual(Y.min())&&(o=In(s)),new tN(o,i.transformResults||[])}(n,e))):[]}function EN(t,e){return{documents:[qT(t,e.path)]}}function SN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qT(t,i);const s=function(u){if(u.length!==0)return QT(An.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:Yi(f.field),direction:kN(f.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function TN(t){let e=vN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=GT(d);return f instanceof An&&IT(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(w){return new dc(Xi(w.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,_d(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new cc(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,m=d.values||[];return new cc(m,f)}(n.endAt)),$O(e,i,o,s,a,"F",l,u)}function IN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xi(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xi(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xi(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>GT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function kN(t){return fN[t]}function bN(t){return hN[t]}function PN(t){return pN[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return Ze.fromServerFormat(t.fieldPath)}function QT(t){return t instanceof $e?function(n){if(n.op==="=="){if(V_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NAN"}};if(j_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(V_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NAN"}};if(j_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(n.field),op:bN(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(i=>QT(i));return r.length===1?r[0]:{compositeFilter:{op:PN(n.op),filters:r}}}(t):K()}function CN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.ct=e}}function RN(t){const e=TN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this._n=new ON}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Mr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class ON{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Fs(0)}static Ln(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.changes=new io(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Go(r.mutation,i,Nt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ro();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=Ko(),a=function(){return Ko()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Gr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Go(c.mutation,u,c.mutation.getFieldMask(),Be.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new DN(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ko();let i=new ke((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Nt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=OT();c.forEach(f=>{if(!s.has(f)){const m=UT(n.get(f),r.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(ui());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:xT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ro();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,l=>{const u=function(d,f){return new wd(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ct.newInvalidDocument(c)))});let a=Ro();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Go(c.mutation,u,Nt.empty(),Be.now()),Sd(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:In(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:RN(i.bundledQuery),readTime:In(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.overlays=new ke(F.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ui();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=ui(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ui(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oN(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.Pr=new nt(He.Ir),this.Tr=new nt(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new He(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new F(new we([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new F(new we([])),r=new He(n,e),i=new He(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return F.comparator(e.key,n.key)||ae(e.pr,n.pr)}static Er(e,n){return ae(e.pr,n.pr)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new nt(He.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ae);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new He(new F(s),0);let a=new nt(ae);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),b.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new He(n,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.vr=e,this.docs=function(){return new ke(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||SO(EO(c),r)<=0||(i.has(c.key)||Sd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FN(this)}getSize(e){return b.resolve(this.size)}}class FN extends NN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.persistence=e,this.Mr=new io(n=>Ug(n),Fg),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new qg,this.targetCount=0,this.Lr=Fs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n){this.Br={},this.overlays={},this.kr=new Lg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new $N(this),this.indexManager=new xN,this.remoteDocumentCache=function(i){return new UN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new AN(n),this.$r=new MN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new VN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new BN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class BN extends IO{constructor(e){super(),this.currentSequenceNumber=e}}class Kg{constructor(e){this.persistence=e,this.zr=new qg,this.jr=null}static Hr(e){return new Kg(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const i=F.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return BA()?8:li.v(Ve())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WN;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(wo()<=ie.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(wo()<=ie.DEBUG&&N("QueryEngine","Query:",Qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(wo()<=ie.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):b.resolve())}ji(e,n){if(z_(n))return b.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kp(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,kp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return z_(n)||i.isEqual(Y.min())?b.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?b.resolve(null):(wo()<=ie.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qi(n)),this.es(e,o,n,wO(i,-1)).next(a=>a))})}Zi(e,n){let r=new nt(AT(e));return n.forEach((i,s)=>{Sd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return wo()<=ie.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Qi(n)),this.zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ke(ae),this.rs=new io(s=>Ug(s),Fg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function KN(t,e,n,r){return new qN(t,e,n,r)}async function XT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function GN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let m=b.resolve();return f.forEach(w=>{m=m.next(()=>c.getEntry(l,w)).next(y=>{const _=u.docVersions.get(w);fe(_!==null),y.version.compareTo(_)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function QN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let m=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(pt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(y,_,g){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=Yn(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YN(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(Y.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function YN(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function XN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Rp(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sl(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Z_(t,e,n){const r=X(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=X(l),f=d.rs.get(c);return f!==void 0?b.resolve(d.ns.get(f)):d.Qr.getTargetData(u,c)}(r,o,Tn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(a=>(ZN(r,WO(e),a),{documents:a,hs:s})))}function ZN(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class e0{constructor(){this.activeTargetIds=YO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eD{constructor(){this.no=new e0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new e0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl=null;function Uf(){return Wl===null?Wl=function(){return 268435456+Math.round(2147483648*Math.random())}():Wl++,"0x"+Wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class iD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Uf(),l=this.bo(n,r.toUriEncodedString());N("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ms("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=nD[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Uf();return new Promise((o,a)=>{const l=new uO;l.setWithCredentials(!0),l.listenOnce(aO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jf.NO_ERROR:const c=l.getResponseJson();N(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case jf.TIMEOUT:N(ot,`RPC '${e}' ${s} timed out`),a(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case jf.HTTP_ERROR:const d=l.getStatus();if(N(ot,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const w=function(_){const g=_.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(g)>=0?g:C.UNKNOWN}(m.status);a(new V(w,m.message))}else a(new V(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{N(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);N(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Uf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sO(),a=oO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");N(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,m=!1;const w=new rD({lo:_=>{m?N(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(f||(N(ot,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),N(ot,`RPC '${e}' stream ${i} sending:`,_),d.send(_))},ho:()=>d.close()}),y=(_,g,p)=>{_.listen(g,v=>{try{p(v)}catch(E){setTimeout(()=>{throw E},0)}})};return y(d,$l.EventType.OPEN,()=>{m||N(ot,`RPC '${e}' stream ${i} transport opened.`)}),y(d,$l.EventType.CLOSE,()=>{m||(m=!0,N(ot,`RPC '${e}' stream ${i} transport closed`),w.Vo())}),y(d,$l.EventType.ERROR,_=>{m||(m=!0,Ms(ot,`RPC '${e}' stream ${i} transport errored:`,_),w.Vo(new V(C.UNAVAILABLE,"The operation could not be completed")))}),y(d,$l.EventType.MESSAGE,_=>{var g;if(!m){const p=_.data[0];fe(!!p);const v=p,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){N(ot,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let T=function(P){const k=Le[P];if(k!==void 0)return $T(k)}(S),A=E.message;T===void 0&&(T=C.INTERNAL,A="Unknown error status: "+S+" with message "+E.message),m=!0,w.Vo(new V(T,A)),d.close()}else N(ot,`RPC '${e}' stream ${i} received:`,p),w.mo(p)}}),y(a,lO.STAT_EVENT,_=>{_.stat===x_.PROXY?N(ot,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===x_.NOPROXY&&N(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}function Ff(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){return new mN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ZT(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sD extends eI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=yN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?In(o.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Ap(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ip(l)?{documents:EN(s,l)}:{query:SN(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WT(s,o.resumeToken);const u=bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=pc(s,o.snapshotVersion.toTimestamp());const u=bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=IN(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Ap(this.serializer),n.removeTarget=e,this.t_(n)}}class oD extends eI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=wN(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.T_(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ap(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_N(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Pp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Pp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(C.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class lD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Pn(n),this.g_=!1):N("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=X(l);u.v_.add(4),await ll(u),u.x_.set("Unknown"),u.v_.delete(4),await Pd(u)}(this))})}),this.x_=new lD(r,i)}}async function Pd(t){if(Fi(t))for(const e of t.F_)await e(!0)}async function ll(t){for(const e of t.F_)await e(!1)}function tI(t,e){const n=X(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Jg(n)?Xg(n):so(n).Jo()&&Yg(n,e))}function Qg(t,e){const n=X(t),r=so(n);n.C_.delete(e),r.Jo()&&nI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Fi(n)&&n.x_.set("Unknown"))}function Yg(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}so(t).c_(e)}function nI(t,e){t.O_.Oe(e),so(t).l_(e)}function Xg(t){t.O_=new dN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),so(t).start(),t.x_.p_()}function Jg(t){return Fi(t)&&!so(t).Ho()&&t.C_.size>0}function Fi(t){return X(t).v_.size===0}function rI(t){t.O_=void 0}async function cD(t){t.C_.forEach((e,n)=>{Yg(t,e)})}async function dD(t,e){rI(t),Jg(t)?(t.x_.S_(e),Xg(t)):t.x_.set("Unknown")}async function fD(t,e,n){if(t.x_.set("Online"),e instanceof BT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mc(t,r)}else if(e instanceof _u?t.O_.$e(e):e instanceof zT?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Y.min()))try{const r=await JT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(pt.EMPTY_BYTE_STRING,c.snapshotVersion)),nI(s,l);const d=new _r(c.target,l,u,c.sequenceNumber);Yg(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await mc(t,r)}}async function mc(t,e,n){if(!sl(e))throw e;t.v_.add(1),await ll(t),t.x_.set("Offline"),n||(n=()=>JT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Pd(t)})}function iI(t,e){return e().catch(n=>mc(t,n,e))}async function Cd(t){const e=X(t),n=Vr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;hD(e);)try{const i=await XN(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,pD(e,i)}catch(i){await mc(e,i)}sI(e)&&oI(e)}function hD(t){return Fi(t)&&t.D_.length<10}function pD(t,e){t.D_.push(e);const n=Vr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function sI(t){return Fi(t)&&!Vr(t).Ho()&&t.D_.length>0}function oI(t){Vr(t).start()}async function mD(t){Vr(t).d_()}async function gD(t){const e=Vr(t);for(const n of t.D_)e.I_(n.mutations)}async function vD(t,e,n){const r=t.D_.shift(),i=Bg.from(r,e,n);await iI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cd(t)}async function yD(t,e){e&&Vr(t).P_&&await async function(r,i){if(function(o){return lN(o)&&o!==C.ABORTED}(i.code)){const s=r.D_.shift();Vr(r).Zo(),await iI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cd(r)}}(t,e),sI(t)&&oI(t)}async function n0(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Fi(n);n.v_.add(3),await ll(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Pd(n)}async function _D(t,e){const n=X(t);e?(n.v_.delete(2),await Pd(n)):e||(n.v_.add(2),await ll(n),n.x_.set("Unknown"))}function so(t){return t.N_||(t.N_=function(n,r,i){const s=X(n);return s.R_(),new sD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:cD.bind(null,t),To:dD.bind(null,t),u_:fD.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Jg(t)?Xg(t):t.x_.set("Unknown")):(await t.N_.stop(),rI(t))})),t.N_}function Vr(t){return t.L_||(t.L_=function(n,r,i){const s=X(n);return s.R_(),new oD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:mD.bind(null,t),To:yD.bind(null,t),E_:gD.bind(null,t),T_:vD.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Cd(t)):(await t.L_.stop(),t.D_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ev(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),sl(t))return new V(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.B_=new ke(F.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $s{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $s(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class ED{constructor(){this.queries=new io(e=>CT(e),Ed),this.onlineState="Unknown",this.W_=new Set}}async function aI(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new wD,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ev(o,`Initialization of query '${Qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&tv(n)}async function lI(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&tv(n)}function TD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function tv(t){t.W_.forEach(e=>{e.next()})}var xp,i0;(i0=xp||(xp={})).j_="default",i0.Cache="cache";class uI{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==xp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class ID{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ne(),this.mutatedKeys=ne(),this.ha=AT(e),this.Pa=new Ss(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new r0,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),m=Sd(this.query,d)?d:null,w=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;f&&m?f.data.isEqual(m.data)?w!==y&&(r.track({type:3,doc:m}),_=!0):this.da(f,m)||(r.track({type:2,doc:m}),_=!0,(l&&this.ha(m,l)>0||u&&this.ha(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),_=!0):f&&!m&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,d)=>function(m,w){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(m)-y(w)}(c.type,d.type)||this.ha(c.doc,d.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new $s(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new r0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ne(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new dI(r))}),this.la.forEach(r=>{e.has(r)||n.push(new cI(r))}),n}fa(e){this.ua=e.hs,this.la=ne();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return $s.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class kD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bD{constructor(e){this.key=e,this.pa=!1}}class PD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new io(a=>CT(a),Ed),this.Sa=new Map,this.ba=new Set,this.Da=new ke(F.comparator),this.Ca=new Map,this.va=new qg,this.Fa={},this.Ma=new Map,this.xa=Fs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function CD(t,e,n=!0){const r=vI(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await fI(r,e,n,!0),i}async function AD(t,e){const n=vI(t);await fI(n,e,!0,!1)}async function fI(t,e,n,r){const i=await JN(t.localStore,Tn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await RD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tI(t.remoteStore,i),a}async function RD(t,e,n,r,i){t.Na=(d,f,m)=>async function(y,_,g,p){let v=_.view.Ta(g);v.Xi&&(v=await Z_(y.localStore,_.query,!1).then(({documents:A})=>_.view.Ta(A,v)));const E=p&&p.targetChanges.get(_.targetId),S=p&&p.targetMismatches.get(_.targetId)!=null,T=_.view.applyChanges(v,y.isPrimaryClient,E,S);return o0(y,_.targetId,T.Va),T.snapshot}(t,d,f,m);const s=await Z_(t.localStore,e,!0),o=new ID(e,s.hs),a=o.Ta(s.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);o0(t,n,u.Va);const c=new kD(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function xD(t,e,n){const r=X(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Ed(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qg(r.remoteStore,i.targetId),Op(r,i.targetId)}).catch(il)):(Op(r,i.targetId),await Rp(r.localStore,i.targetId,!0))}async function OD(t,e){const n=X(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qg(n.remoteStore,r.targetId))}async function ND(t,e,n){const r=FD(t);try{const i=await function(o,a){const l=X(o),u=Be.now(),c=a.reduce((m,w)=>m.add(w.key),ne());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=Yn(),y=ne();return l.os.getEntries(m,c).next(_=>{w=_,w.forEach((g,p)=>{p.isValidDocument()||(y=y.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,w)).next(_=>{d=_;const g=[];for(const p of a){const v=rN(p,d.get(p.key).overlayedDocument);v!=null&&g.push(new Gr(p.key,v,ET(v.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(_=>{f=_;const g=_.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(m,_.batchId,g)})}).then(()=>({batchId:f.batchId,changes:xT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new ke(ae)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ul(r,i.changes),await Cd(r.remoteStore)}catch(i){const s=ev(i,"Failed to persist write");n.reject(s)}}async function hI(t,e){const n=X(t);try{const r=await QN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?fe(o.pa):i.removedDocuments.size>0&&(fe(o.pa),o.pa=!1))}),await ul(n,r,e)}catch(r){await il(r)}}function s0(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.Q_)f.G_(a)&&(u=!0)}),u&&tv(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new ke(F.comparator);o=o.insert(s,ct.newNoDocument(s,Y.min()));const a=ne().add(s),l=new kd(Y.min(),new Map,new ke(ae),o,a);await hI(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),nv(r)}else await Rp(r.localStore,e,!1).then(()=>Op(r,e,n)).catch(il)}async function LD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await GN(n.localStore,e);mI(n,r,null),pI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ul(n,i)}catch(i){await il(i)}}async function MD(t,e,n){const r=X(t);try{const i=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(fe(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mI(r,e,n),pI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ul(r,i)}catch(i){await il(i)}}function pI(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function mI(t,e,n){const r=X(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||gI(t,r)})}function gI(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Qg(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),nv(t))}function o0(t,e,n){for(const r of n)r instanceof cI?(t.va.addReference(r.key,e),jD(t,r)):r instanceof dI?(N("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||gI(t,r.key)):K()}function jD(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(N("SyncEngine","New document in limbo: "+n),t.ba.add(r),nv(t))}function nv(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new F(we.fromString(e)),r=t.xa.next();t.Ca.set(r,new bD(n)),t.Da=t.Da.insert(n,r),tI(t.remoteStore,new _r(Tn($g(n.path)),r,"TargetPurposeLimboResolution",Lg._e))}}async function ul(t,e,n){const r=X(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gg.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=X(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>b.forEach(u,f=>b.forEach(f.qi,m=>c.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>b.forEach(f.Qi,m=>c.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!sl(d))throw d;N("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const m=c.ns.get(f),w=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(w);c.ns=c.ns.insert(f,y)}}}(r.localStore,s))}async function VD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await XT(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new V(C.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ul(n,r.us)}}function UD(t,e){const n=X(t),r=n.Ca.get(e);if(r&&r.pa)return ne().add(r.key);{let i=ne();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function vI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DD.bind(null,e),e.ya.u_=SD.bind(null,e.eventManager),e.ya.La=TD.bind(null,e.eventManager),e}function FD(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MD.bind(null,e),e}class a0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KN(this.persistence,new HN,e.initialUser,this.serializer)}createPersistence(e){return new zN(Kg.Hr,this.serializer)}createSharedClientState(e){return new eD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $D{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>s0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VD.bind(null,this.syncEngine),await _D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ED}()}createDatastore(e){const n=bd(e.databaseInfo.databaseId),r=function(s){return new iD(s)}(e.databaseInfo);return function(s,o,a,l){return new aD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new uD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>s0(this.syncEngine,n,0),function(){return t0.D()?new t0:new tD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new PD(i,s,o,a,l,u);return c&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);N("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ll(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=yT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ev(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $f(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WD(t);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>n0(e.remoteStore,i)),t._onlineComponents=e}function BD(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function WD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await $f(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!BD(n))throw n;Ms("Error using user provided cache. Falling back to memory cache: "+n),await $f(t,new a0)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await $f(t,new a0);return t._offlineComponents}async function _I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await l0(t,new $D))),t._onlineComponents}function HD(t){return _I(t).then(e=>e.syncEngine)}async function wI(t){const e=await _I(t),n=e.eventManager;return n.onListen=CD.bind(null,e.syncEngine),n.onUnlisten=xD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OD.bind(null,e.syncEngine),n}function qD(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new yI({next:f=>{o.enqueueAndForget(()=>lI(s,d));const m=f.docs.has(a);!m&&f.fromCache?u.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&l&&l.source==="server"?u.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new uI($g(a.path),c,{includeMetadataChanges:!0,ta:!0});return aI(s,d)}(await wI(t),t.asyncQueue,e,n,r)),r.promise}function KD(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new yI({next:f=>{o.enqueueAndForget(()=>lI(s,d)),f.fromCache&&l.source==="server"?u.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new uI(a,c,{includeMetadataChanges:!0,ta:!0});return aI(s,d)}(await wI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e,n){if(!n)throw new V(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GD(t,e,n,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!F.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function d0(t){if(F.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rv(t);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ad{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dO;switch(r.type){case"firstParty":return new mO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(N("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function QD(t,e,n,r={}){var i;const s=(t=un(t,Ad))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=aS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new fO(new vT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rd(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Or extends Rd{constructor(e,n,r){super(e,n,$g(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new F(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function xd(t,e,...n){if(t=Ue(t),SI("collection","path",e),t instanceof Ad){const r=we.fromString(e,...n);return d0(r),new Or(t,null,r)}{if(!(t instanceof At||t instanceof Or))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return d0(r),new Or(t.firestore,null,r)}}function cn(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=yT.newId()),SI("doc","path",e),t instanceof Ad){const r=we.fromString(e,...n);return c0(r),new At(t,null,new F(r))}{if(!(t instanceof At||t instanceof Or))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return c0(r),new At(t.firestore,t instanceof Or?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new ZT(this,"async_queue_retry"),this.cu=()=>{const n=Ff();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ff();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Ff();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Sn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!sl(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Zg.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&K()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class $i extends Ad{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new YD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||II(this),this._firestoreClient.terminate()}}function TI(t,e){const n=typeof t=="object"?t:ug(),r=typeof t=="string"?t:e||"(default)",i=nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iS("firestore");s&&QD(i,...s)}return i}function iv(t){return t._firestoreClient||II(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function II(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new AO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,EI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(pt.fromBase64String(e))}catch(n){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^__.*__$/;class JD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}class kI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class av{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new av(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return gc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(bI(this.Vu)&&XD.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class ZD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bd(e)}Cu(e,n,r,i=!1){return new av({Vu:e,methodName:n,Du:r,path:Ze.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lv(t){const e=t._freezeSettings(),n=bd(t._databaseId);return new ZD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PI(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);uv("Data must be an object, but it was:",o,r);const a=CI(r,o);let l,u;if(s.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Np(e,d,n);if(!o.contains(f))throw new V(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);RI(c,f)||c.push(f)}l=new Nt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new JD(new It(a),l,u)}class Nd extends sv{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nd}}function eL(t,e,n,r){const i=t.Cu(1,e,n);uv("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Ui(r,(l,u)=>{const c=cv(e,l,n);u=Ue(u);const d=i.yu(c);if(u instanceof Nd)s.push(c);else{const f=Dd(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new Nt(s);return new kI(o,a,i.fieldTransforms)}function tL(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[Np(e,r,n)],l=[i];if(s.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Np(e,s[f])),l.push(s[f+1]);const u=[],c=It.empty();for(let f=a.length-1;f>=0;--f)if(!RI(u,a[f])){const m=a[f];let w=l[f];w=Ue(w);const y=o.yu(m);if(w instanceof Nd)u.push(m);else{const _=Dd(w,y);_!=null&&(u.push(m),c.set(m,_))}}const d=new Nt(u);return new kI(c,d,o.fieldTransforms)}function Dd(t,e){if(AI(t=Ue(t)))return uv("Unsupported field value:",e,t),CI(t,e);if(t instanceof sv)return function(r,i){if(!bI(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Dd(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:pc(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pc(i.serializer,s)}}if(r instanceof ov)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zs)return{bytesValue:WT(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${rv(r)}`)}(t,e)}function CI(t,e){const n={};return _T(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=Dd(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof ov||t instanceof zs||t instanceof At||t instanceof sv)}function uv(t,e,n){if(!AI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=rv(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Np(t,e,n){if((e=Ue(e))instanceof Od)return e._internalPath;if(typeof e=="string")return cv(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const nL=new RegExp("[~\\*/\\[\\]]");function cv(t,e,n){if(e.search(nL)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Od(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(C.INVALID_ARGUMENT,a+t+l)}function RI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rL extends xI{data(){return super.data()}}function OI(t,e){return typeof e=="string"?cv(t,e):e instanceof Od?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sL{convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ov(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);fe(YT(r));const i=new Aa(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DI extends xI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wu extends DI{data(e={}){return super.data(e)}}class oL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wu(this._firestore,this._userDataWriter,r.key,r,new Oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:aL(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){t=un(t,At);const e=un(t.firestore,$i);return qD(iv(e),t._key).then(n=>dL(e,t,n))}class LI extends sL{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function dv(t){t=un(t,Rd);const e=un(t.firestore,$i),n=iv(e),r=new LI(e);return iL(t._query),KD(n,t._query).then(i=>new oL(e,r,t,i))}function fv(t,e,n){t=un(t,At);const r=un(t.firestore,$i),i=NI(t.converter,e,n);return Ld(r,[PI(lv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kt.none())])}function lL(t,e,n,...r){t=un(t,At);const i=un(t.firestore,$i),s=lv(i);let o;return o=typeof(e=Ue(e))=="string"||e instanceof Od?tL(s,"updateDoc",t._key,e,n,r):eL(s,"updateDoc",t._key,e),Ld(i,[o.toMutation(t._key,Kt.exists(!0))])}function uL(t){return Ld(un(t.firestore,$i),[new zg(t._key,Kt.none())])}function cL(t,e){const n=un(t.firestore,$i),r=cn(t),i=NI(t.converter,e);return Ld(n,[PI(lv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function Ld(t,e){return function(r,i){const s=new Sn;return r.asyncQueue.enqueueAndForget(async()=>ND(await HD(r),i,s)),s.promise}(iv(t),e)}function dL(t,e,n){const r=n.docs.get(e._key),i=new LI(t);return new DI(t,i,e._key,r,new Oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ro=i})(ji),Ii(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new hO(r.getProvider("auth-internal")),new vO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),En(O_,"4.5.0",e),En(O_,"4.5.0","esm2017")})();function hv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function MI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fL=MI,jI=new Ga("auth","Firebase",MI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new ag("@firebase/auth");function hL(t,...e){vc.logLevel<=ie.WARN&&vc.warn(`Auth (${ji}): ${t}`,...e)}function Eu(t,...e){vc.logLevel<=ie.ERROR&&vc.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw pv(t,...e)}function kn(t,...e){return pv(t,...e)}function VI(t,e,n){const r=Object.assign(Object.assign({},fL()),{[e]:n});return new Ga("auth","Firebase",r).create(e,{appName:t.name})}function pL(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),VI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jI.create(t,...e)}function q(t,e,...n){if(!t)throw pv(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function Xn(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mL(){return h0()==="http:"||h0()==="https:"}function h0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mL()||FA()||"connection"in navigator)?navigator.onLine:!0}function vL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=VA()||$A()}get(){return gL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=new cl(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,r,i={}){return FI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),UI.fetch()($I(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function FI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yL),e);try{const i=new EL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VI(t,c,u);Yt(t,c)}}catch(i){if(i instanceof Rn)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function dl(t,e,n,r,i={}){const s=await Yr(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $I(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mv(t.config,i):`${t.config.apiScheme}://${i}`}function wL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),_L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function p0(t){return t!==void 0&&t.enterprise!==void 0}class SL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TL(t,e){return Yr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function kL(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bL(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=gv(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qo(zf(i.auth_time)),issuedAtTime:Qo(zf(i.iat)),expirationTime:Qo(zf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zf(t){return Number(t)*1e3}function gv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=nS(n);return i?JSON.parse(i):(Eu("Failed to decode base64 JWT payload"),null)}catch(i){return Eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PL(t){const e=gv(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&CL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Na(t,kL(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OL(s.providerUserInfo):[],a=xL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function RL(t){const e=Ue(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OL(t){return t.map(e=>{var{providerId:n}=e,r=hv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NL(t,e){const n=await FI(t,{},async()=>{const r=Qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$I(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DL(t,e){return Yr(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Da;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Na(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bL(this,e)}reload(){return RL(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Na(this,IL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:S,providerData:T,stsTokenManager:A}=n;q(v&&A,e,"internal-error");const x=Da.fromJSON(this.name,A);q(typeof v=="string",e,"internal-error"),sr(d,e.name),sr(f,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof S=="boolean",e,"internal-error"),sr(m,e.name),sr(w,e.name),sr(y,e.name),sr(_,e.name),sr(g,e.name),sr(p,e.name);const P=new gi({uid:v,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:S,photoURL:w,phoneNumber:m,tenantId:y,stsTokenManager:x,createdAt:g,lastLoginAt:p});return T&&Array.isArray(T)&&(P.providerData=T.map(k=>Object.assign({},k))),_&&(P._redirectEventId=_),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Da;i.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Map;function Bn(t){Xn(t instanceof Function,"Expected a class definition");let e=m0.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BI.type="NONE";const g0=BI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Su(this.userKey,i.apiKey,s),this.fullPersistenceKey=Su("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Bn(g0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bn(g0);const o=Su(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=gi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(GI(e))return"Blackberry";if(QI(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||HI(e))&&!e.includes("edge/"))return"Chrome";if(KI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WI(t=Ve()){return/firefox\//i.test(t)}function vv(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HI(t=Ve()){return/crios\//i.test(t)}function qI(t=Ve()){return/iemobile/i.test(t)}function KI(t=Ve()){return/android/i.test(t)}function GI(t=Ve()){return/blackberry/i.test(t)}function QI(t=Ve()){return/webos/i.test(t)}function Md(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LL(t=Ve()){var e;return Md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ML(){return zA()&&document.documentMode===10}function YI(t=Ve()){return Md(t)||KI(t)||QI(t)||GI(t)||/windows phone/i.test(t)||qI(t)}function jL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e=[]){let n;switch(t){case"Browser":n=v0(Ve());break;case"Worker":n=`${v0(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=6;class $L{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new y0(this),this.idTokenSubscription=new y0(this),this.beforeStateQueue=new VL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UL(this),n=new $L(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return Ue(t)}class y0{constructor(e){this.auth=e,this.observer=null,this.addObserver=QA(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BL(t){jd=t}function JI(t){return jd.loadJS(t)}function WL(){return jd.recaptchaEnterpriseScript}function HL(){return jd.gapiScript}function qL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KL="recaptcha-enterprise",GL="NO_RECAPTCHA";class QL{constructor(e){this.type=KL,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{TL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new SL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;p0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(GL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&p0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=WL();l.length!==0&&(l+=a),JI(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function _0(t,e,n,r=!1){const i=new QL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Lp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t,e){const n=nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tc(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function XL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JL(t,e,n){const r=Xr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ZI(e),{host:o,port:a}=ZL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eM()}function ZI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZL(t){const e=ZI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:w0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:w0(o)}}}function w0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function tM(t,e){return Yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(t,e){return dl(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function iM(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends yv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new La(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new La(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lp(e,n,"signInWithPassword",nM);case"emailLink":return rM(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lp(e,r,"signUpPassword",tM);case"emailLink":return iM(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return dl(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM="http://localhost";class Ci extends yv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:sM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aM(t){const e=bo(Po(t)).link,n=e?bo(Po(e)).deep_link_id:null,r=bo(Po(t)).deep_link_id;return(r?bo(Po(r)).link:null)||r||n||e||t}class _v{constructor(e){var n,r,i,s,o,a;const l=bo(Po(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=oM((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aM(e);try{return new _v(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.providerId=oo.PROVIDER_ID}static credential(e,n){return La._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_v.parseLink(n);return q(r,"argument-error"),La._fromEmailAndCode(e,r.code,r.tenantId)}}oo.PROVIDER_ID="password";oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends wv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends fl{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends fl{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends fl{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(t,e){return dl(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gi._fromIdTokenResponse(e,r,i),o=E0(r);return new Ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=E0(r);return new Ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function E0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _c(e,n,r,i)}}function ek(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,s,e,r):s})}async function uM(t,e,n=!1){const r=await Na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Na(t,ek(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=gv(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e,n=!1){const r="signIn",i=await ek(t,r,e),s=await Ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dM(t,e){return tk(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fM(t,e,n){const r=Xr(t),o=await Lp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&nk(t),l}),a=await Ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function hM(t,e,n){return dM(Ue(t),oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nk(t),r})}function pM(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function mM(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function rk(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}const wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(){const t=Ve();return vv(t)||Md(t)}const vM=1e3,yM=10;class sk extends ik{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gM()&&jL(),this.fallbackToPolling=YI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ML()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sk.type="LOCAL";const _M=sk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok extends ik{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ok.type="SESSION";const ak=ok;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await wM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ev("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function SM(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function TM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kM(){return lk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="firebaseLocalStorageDb",bM=1,Ec="firebaseLocalStorage",ck="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ud(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function PM(){const t=indexedDB.deleteDatabase(uk);return new hl(t).toPromise()}function Mp(){const t=indexedDB.open(uk,bM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:ck})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await PM(),e(await Mp()))})})}async function S0(t,e,n){const r=Ud(t,!0).put({[ck]:e,value:n});return new hl(r).toPromise()}async function CM(t,e){const n=Ud(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=Ud(t,!0).delete(e);return new hl(n).toPromise()}const AM=800,RM=3;class dk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(kM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TM(),!this.activeServiceWorker)return;this.sender=new EM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mp();return await S0(e,wc,"1"),await T0(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>S0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ud(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dk.type="LOCAL";const xM=dk;new cl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t,e){return e?Bn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends yv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OM(t){return tk(t.auth,new Sv(t),t.bypassAuthState)}function NM(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),cM(n,new Sv(t),t.bypassAuthState)}async function DM(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uM(n,new Sv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OM;case"linkViaPopup":case"linkViaRedirect":return DM;case"reauthViaPopup":case"reauthViaRedirect":return NM;default:Yt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=new cl(2e3,1e4);async function pk(t,e,n){const r=Xr(t);pL(t,e,wv);const i=fk(r,n);return new ci(r,"signInViaPopup",e,i).executeNotNull()}class ci extends hk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Ev();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LM.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="pendingRedirect",Tu=new Map;class jM extends hk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await VM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VM(t,e){const n=$M(e),r=FM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UM(t,e){Tu.set(t._key(),e)}function FM(t){return Bn(t._redirectPersistence)}function $M(t){return Su(MM,t.config.apiKey,t.name)}async function zM(t,e,n=!1){const r=Xr(t),i=fk(r,e),o=await new jM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=10*60*1e3;class WM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BM&&this.cachedEventUids.clear(),this.cachedEventUids.has(I0(e))}saveEventToCache(e){this.cachedEventUids.add(I0(e)),this.lastProcessedEventTime=Date.now()}}function I0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GM=/^https?/;async function QM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qM(t);for(const n of e)try{if(YM(n))return}catch{}Yt(t,"unauthorized-domain")}function YM(t){const e=Dp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GM.test(n))return!1;if(KM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new cl(3e4,6e4);function k0(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JM(t){return new Promise((e,n)=>{var r,i,s;function o(){k0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k0(),n(kn(t,"network-request-failed"))},timeout:XM.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bn().gapi)===null||s===void 0)&&s.load)o();else{const a=qL("iframefcb");return bn()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},JI(`${HL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Iu=null,e})}let Iu=null;function ZM(t){return Iu=Iu||JM(t),Iu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=new cl(5e3,15e3),t4="__/auth/iframe",n4="emulator/auth/iframe",r4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s4(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mv(e,n4):`https://${t.config.authDomain}/${t4}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=i4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qa(r).slice(1)}`}async function o4(t){const e=await ZM(t),n=bn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:s4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},e4.get());function l(){bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l4=500,u4=600,c4="_blank",d4="http://localhost";class b0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f4(t,e,n,r=l4,i=u4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},a4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=HI(u)?c4:n),WI(u)&&(e=e||d4,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,w])=>`${f}${m}=${w},`,"");if(LL(u)&&a!=="_self")return h4(e||"",a),new b0(null);const d=window.open(e||"",a,c);q(d,t,"popup-blocked");try{d.focus()}catch{}return new b0(d)}function h4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4="__/auth/handler",m4="emulator/auth/handler",g4=encodeURIComponent("fac");async function P0(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof wv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof fl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${g4}=${encodeURIComponent(l)}`:"";return`${v4(t)}?${Qa(a).slice(1)}${u}`}function v4({config:t}){return t.emulator?mv(t,m4):`https://${t.authDomain}/${p4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="webStorageSupport";class y4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ak,this._completeRedirectFn=zM,this._overrideRedirectResult=UM}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await P0(e,n,r,Dp(),i);return f4(e,o,Ev())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await P0(e,n,r,Dp(),i);return SM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await o4(e),r=new WM(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bf,{type:Bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bf];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return YI()||vv()||Md()}}const _4=y4;var C0="@firebase/auth",A0="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function S4(t){Ii(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XI(t)},u=new zL(r,i,s,l);return XL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new Lr("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new w4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(C0,A0,E4(t)),En(C0,A0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4=5*60,I4=oS("authIdTokenMaxAge")||T4;let R0=null;const k4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I4)return;const i=n==null?void 0:n.token;R0!==i&&(R0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fd(t=ug()){const e=nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YL(t,{popupRedirectResolver:_4,persistence:[xM,_M,ak]}),r=oS("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=k4(r);mM(n,s,()=>s(n.currentUser)),pM(n,o=>s(o))}const i=rS("auth");return i&&JL(n,`http://${i}`),n}function b4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});S4("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="firebasestorage.googleapis.com",vk="storageBucket",P4=2*60*1e3,C4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Rn{constructor(e,n,r=0){super(Wf(e),`Firebase Storage: ${n} (${Wf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Wf(t){return"storage/"+t}function Tv(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function A4(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function R4(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function x4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function O4(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function N4(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function D4(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function L4(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function M4(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function j4(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function V4(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vk+"' property when initializing the app?")}function U4(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function F4(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $4(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jp(t){return new Re(Ae.INVALID_ARGUMENT,t)}function yk(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function z4(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yo(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Eo(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw j4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),w={bucket:1,path:3},y=n===gk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:m,indices:w,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const S=v[E],T=S.regex.exec(e);if(T){const A=T[S.indices.bucket];let x=T[S.indices.path];x||(x=""),r=new Dt(A,x),S.postModify(r);break}}if(r==null)throw M4(e);return r}}class B4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function d(_){i=setTimeout(()=>{i=null,t(m,l())},_)}function f(){s&&clearTimeout(s)}function m(_,...g){if(u){f();return}if(_){f(),c.call(null,_,...g);return}if(l()||o){f(),c.call(null,_,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let w=!1;function y(_){w||(w=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),d(0)):_||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function H4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t){return t!==void 0}function K4(t){return typeof t=="object"&&!Array.isArray(t)}function Iv(t){return typeof t=="string"||t instanceof String}function x0(t){return kv()&&t instanceof Blob}function kv(){return typeof Blob<"u"}function O0(t,e,n,r){if(r<e)throw jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _k(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vi||(vi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ql(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===vi.NO_ERROR,l=s.getStatus();if(!a||G4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===vi.ABORT;r(!1,new ql(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ql(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());q4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Tv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?yk():L4();o(l)}else{const l=D4();o(l)}};this.canceled_?n(!1,new ql(!1,null,!0)):this.backoffId_=W4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&H4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ql{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Y4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function X4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function J4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ej(t,e,n,r,i,s,o=!0){const a=_k(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return J4(u,e),Y4(u,n),X4(u,s),Z4(u,r),new Q4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nj(...t){const e=tj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kv())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ij(t){if(typeof atob>"u")throw $4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hf{constructor(e,n){this.data=e,this.contentType=n||null}}function sj(t,e){switch(t){case vn.RAW:return new Hf(wk(e));case vn.BASE64:case vn.BASE64URL:return new Hf(Ek(t,e));case vn.DATA_URL:return new Hf(aj(e),lj(e))}throw Tv()}function wk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oj(t){let e;try{e=decodeURIComponent(t)}catch{throw Yo(vn.DATA_URL,"Malformed data URL.")}return wk(e)}function Ek(t,e){switch(t){case vn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Yo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Yo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ij(e)}catch(i){throw i.message.includes("polyfill")?i:Yo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Sk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Yo(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aj(t){const e=new Sk(t);return e.base64?Ek(vn.BASE64,e.rest):oj(e.rest)}function lj(t){return new Sk(t).contentType}function uj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){let r=0,i="";x0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(x0(this.data_)){const r=this.data_,i=rj(r,e,n);return i===null?null:new pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(kv()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(nj.apply(null,n))}else{const n=e.map(o=>Iv(o)?sj(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new pr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){let e;try{e=JSON.parse(t)}catch{return null}return K4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ik(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fj(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||fj}}let Kl=null;function hj(t){return!Iv(t)||t.length<2?t:Ik(t)}function kk(){if(Kl)return Kl;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return hj(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),Kl=t,Kl}function pj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pj(r,t),r}function bk(t,e,n){const r=Tk(e);return r===null?null:mj(t,r,n)}function gj(t,e,n,r){const i=Tk(e);if(i===null||!Iv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),m=bv(f,n,r),w=_k({alt:"media",token:u});return m+w})[0]}function vj(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Pk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){if(!t)throw Tv()}function yj(t,e){function n(r,i){const s=bk(t,i,e);return Ck(s!==null),s}return n}function _j(t,e){function n(r,i){const s=bk(t,i,e);return Ck(s!==null),gj(s,i,t.host,t._protocol)}return n}function Ak(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=O4():i=x4():n.getStatus()===402?i=R4(t.bucket):n.getStatus()===403?i=N4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function wj(t){const e=Ak(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=A4(t.path)),s.serverResponse=i.serverResponse,s}return n}function Ej(t,e,n){const r=e.fullServerUrl(),i=bv(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Pk(i,s,_j(t,n),o);return a.errorHandler=wj(e),a}function Sj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Tj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Sj(null,e)),r}function Ij(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Tj(e,r,i),c=vj(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=pr.getBlob(d,r,f);if(m===null)throw U4();const w={name:u.fullPath},y=bv(s,t.host,t._protocol),_="POST",g=t.maxUploadRetryTime,p=new Pk(y,_,yj(t,n),g);return p.urlParams=w,p.headers=o,p.body=m.uploadData(),p.errorHandler=Ak(e),p}class kj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bj extends kj{initXhr(){this.xhr_.responseType="text"}}function Rk(){return new bj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ik(this._location.path)}get storage(){return this._service}get parent(){const e=cj(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw z4(e)}}function Pj(t,e,n){t._throwIfRoot("uploadBytes");const r=Ij(t.storage,t._location,kk(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,Rk).then(i=>({metadata:i,ref:t}))}function Cj(t){t._throwIfRoot("getDownloadURL");const e=Ej(t.storage,t._location,kk());return t.storage.makeRequestWithTokens(e,Rk).then(n=>{if(n===null)throw F4();return n})}function Aj(t,e){const n=dj(t._location.path,e),r=new Dt(t._location.bucket,n);return new Ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t){return/^[A-Za-z]+:\/\//.test(t)}function xj(t,e){return new Ri(t,e)}function xk(t,e){if(t instanceof Pv){const n=t;if(n._bucket==null)throw V4();const r=new Ri(n,n._bucket);return e!=null?xk(r,e):r}else return e!==void 0?Aj(t,e):t}function Oj(t,e){if(e&&Rj(e)){if(t instanceof Pv)return xj(t,e);throw jp("To use ref(service, url), the first argument must be a Storage instance.")}else return xk(t,e)}function N0(t,e){const n=e==null?void 0:e[vk];return n==null?null:Dt.makeFromBucketSpec(n,t)}function Nj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:aS(i,t.app.options.projectId))}class Pv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=P4,this._maxUploadRetryTime=C4,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=N0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=N0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new B4(yk());{const o=ej(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const D0="@firebase/storage",L0="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="storage";function Cv(t,e,n){return t=Ue(t),Pj(t,e,n)}function tn(t){return t=Ue(t),Cj(t)}function nn(t,e){return t=Ue(t),Oj(t,e)}function Nk(t=ug(),e){t=Ue(t);const r=nd(t,Ok).getImmediate({identifier:e}),i=iS("storage");return i&&Dj(r,...i),r}function Dj(t,e,n,r={}){Nj(t,e,n,r)}function Lj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pv(n,r,i,e,ji)}function Mj(){Ii(new Lr(Ok,Lj,"PUBLIC").setMultipleInstances(!0)),En(D0,L0,""),En(D0,L0,"esm2017")}Mj();const jj={apiKey:"AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E",authDomain:"tienda-fa7e8.firebaseapp.com",databaseURL:"https://tienda-fa7e8-default-rtdb.firebaseio.com",projectId:"tienda-fa7e8",storageBucket:"tienda-fa7e8.appspot.com",messagingSenderId:"117697052879",appId:"1:117697052879:web:e70dbf632fc084fce9f7ba",measurementId:"G-722C6BWG3J"},ao=dS(jj),Bi=TI(ao),Wi=Fd(ao),mr=Nk(ao),Av="3",Dk=t=>{console.error("Error de inicio de sesión:",t.code);let e="";switch(t.code){case"auth/account-exists-with-different-credential":e="Ya existe una cuenta con un método de inicio de sesión diferente.";break;case"auth/email-already-in-use":e="El correo electrónico ya está en uso con otra cuenta.";break;case"auth/wrong-password":e="La contraseña es incorrecta. Por favor, inténtalo de nuevo.";break;case"auth/user-not-found":e="No se encontró una cuenta con este correo electrónico.";break;case"auth/user-disabled":e="La cuenta ha sido deshabilitada. Contacta al soporte para más información.";break;case"auth/too-many-requests":e="Hemos detectado demasiadas solicitudes desde tu dispositivo. Por favor, espera un momento e inténtalo de nuevo.";break;default:e=`Error al iniciar sesión. ${t.message}`;break}return e};async function Vj(){const t=new jn;try{const n=(await pk(Wi,t)).user,r=n.email||"",i=n.displayName||"",s=n.photoURL||"",o=cn(Bi,"users",n.uid);return(await zi(o)).exists()||await fv(o,{avatar:s,email:r,names:i,gender:"",birthday_date:"",address:"",ci:"",userTypeId:Av}),n}catch(e){throw new Error(Dk(e))}}async function Uj(){const t=new Vn;try{const e=await pk(Wi,t);console.log(e);const n=e.user,r=cn(Bi,"users",n.uid);return(await zi(r)).exists()||await fv(r,{avatar:n.photoURL||"",email:n.email||"",names:n.displayName||"",gender:"",birthday_date:"",address:"",ci:"",userTypeId:Av}),n}catch(e){throw new Error(Dk(e))}}const Fj=async t=>{const{email:e,password:n,...r}=t;try{const s=(await fM(Wi,e,n)).user;return await fv(cn(Bi,"users",s.uid),{...r,email:e,userTypeId:Av}),console.log("Usuario creado con éxito:",s.uid),s.uid}catch(i){throw console.error("Error al crear el usuario:",i),i}},$j=async()=>{const t=Wi.currentUser;if(!t)return null;const e=cn(Bi,"users",t.uid),n=await zi(e);return n.exists()?n.data():(console.error("No se encontró el perfil del usuario en Firestore."),null)};function zj({cartitem:t}){const[e,n]=I.useState(null),r=Mi(),i=Fd(),[s,o]=I.useState({});I.useEffect(()=>{const l=rk(i,async u=>{if(u){const c=await $j(u.uid);n(c)}else n(null)});return()=>l()},[]),I.useEffect(()=>{(async()=>{try{const u=await tn(nn(mr,"Iconos/shop.png")),c=await tn(nn(mr,"Iconos/shopping-cart.png")),d=await tn(nn(mr,"Iconos/logout.png"));o({storeIcon:u,shoppingCartIcon:c,logoutIcon:d})}catch(u){console.error("Error al obtener las URL de los iconos:",u)}})()});const a=()=>{i.signOut(),r("/iniciarsesion")};return h.jsxs("nav",{className:"nav",children:[h.jsx("img",{src:s.storeIcon,alt:"Store Icon"}),h.jsx(lt,{to:"/",className:"nombre-sitio",children:"Store"}),h.jsx(AA,{}),h.jsx("ul",{className:"navegacion",children:e?h.jsxs("li",{children:[h.jsx("div",{className:"cart",children:h.jsxs(lt,{to:"/cart",className:"cart-link",children:[h.jsx("img",{src:s.shoppingCartIcon,alt:"Carrito"}),h.jsx("span",{children:t.length===0?"":t.length})]})}),e.userTypeId==="1"&&h.jsx(lt,{to:"/admin/:activepage",className:"perfil-link",children:h.jsx("img",{src:e.avatar||"/user-profile.png",alt:"Perfil",className:"navbar-avatar",style:{borderRadius:"20%",width:"50px",height:"50px"}})}),e.userTypeId==="2"&&h.jsx(lt,{to:"/admin/crud-productos",className:"perfil-link",children:h.jsx("img",{src:e.avatar||"/user-profile.png",alt:"Perfil",className:"navbar-avatar",style:{borderRadius:"20%",width:"50px",height:"50px"}})}),e.userTypeId==="3"&&h.jsx(lt,{to:"/perfil",className:"perfil-link",children:h.jsx("img",{src:e.avatar||"/user-profile.png",alt:"Perfil",className:"navbar-avatar",style:{borderRadius:"20%",width:"50px",height:"50px",objectfit:"cover"}})}),h.jsx("button",{onClick:a,className:"logout-button",title:"Cerrar Sesión",alt:"Cerrar Sesión",children:h.jsx("img",{src:s.logoutIcon})})]}):h.jsxs("li",{className:"links",children:[h.jsx(lt,{to:"/iniciarsesion",children:"Iniciar sesión"}),h.jsx(lt,{to:"/registrarse",children:"Registrarse"})]})})]})}const Gi=[{id:1,imgUrl:"src/presentation/assets/tienda.jpg"},{id:2,imgUrl:"src/presentation/assets/tienda2.jpg"},{id:3,imgUrl:"src/presentation/assets/tienda3.jpg"}];function Bj(){const t=I.useRef(),[e,n]=I.useState(0),r=i=>{const s=Gi.length;let o=e;i==="next"?o=(e+1)%s:i==="prev"&&(o=(e-1+s)%s),n(o)};return I.useEffect(()=>{const s=t.current.querySelectorAll(".cascade-slider_item");s.forEach(a=>a.classList.remove("now","next","prev")),s[e].classList.add("now"),s[(e+1)%Gi.length].classList.add("next"),s[(e-1+Gi.length)%Gi.length].classList.add("prev");const o=setInterval(()=>{r("next")},3500);return()=>clearInterval(o)},[e]),h.jsxs("div",{className:"cascade-slider_container",id:"cascade-slider",children:[h.jsx("div",{className:"cascade-slider_slides",ref:t,children:Gi.map((i,s)=>h.jsx("div",{className:"cascade-slider_item",children:h.jsx("img",{src:i.imgUrl,alt:`tienda ${i.id}`})},s))}),h.jsx("ol",{className:"cascade-slider_nav",children:Gi.map((i,s)=>h.jsx("li",{className:`cascade-slider_dot ${s===e?"cur":""}`},`dot-${s}`))}),h.jsx("span",{className:"cascade-slider_arrow cascade-slider_arrow-left","data-action":"prev",onClick:()=>r("prev"),children:"❬"}),h.jsx("span",{className:"cascade-slider_arrow cascade-slider_arrow-right","data-action":"next",onClick:()=>r("next"),children:"❭"})]})}var Lk={},Mk={},$d={},jk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(jk);var Wj="Expected a function",M0=NaN,Hj="[object Symbol]",qj=/^\s+|\s+$/g,Kj=/^[-+]0x[0-9a-f]+$/i,Gj=/^0b[01]+$/i,Qj=/^0o[0-7]+$/i,Yj=parseInt,Xj=typeof _l=="object"&&_l&&_l.Object===Object&&_l,Jj=typeof self=="object"&&self&&self.Object===Object&&self,Zj=Xj||Jj||Function("return this")(),eV=Object.prototype,tV=eV.toString,nV=Math.max,rV=Math.min,qf=function(){return Zj.Date.now()};function iV(t,e,n){var r,i,s,o,a,l,u=0,c=!1,d=!1,f=!0;if(typeof t!="function")throw new TypeError(Wj);e=j0(e)||0,Vp(n)&&(c=!!n.leading,d="maxWait"in n,s=d?nV(j0(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function m(T){var A=r,x=i;return r=i=void 0,u=T,o=t.apply(x,A),o}function w(T){return u=T,a=setTimeout(g,e),c?m(T):o}function y(T){var A=T-l,x=T-u,P=e-A;return d?rV(P,s-x):P}function _(T){var A=T-l,x=T-u;return l===void 0||A>=e||A<0||d&&x>=s}function g(){var T=qf();if(_(T))return p(T);a=setTimeout(g,y(T))}function p(T){return a=void 0,f&&r?m(T):(r=i=void 0,o)}function v(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function E(){return a===void 0?o:p(qf())}function S(){var T=qf(),A=_(T);if(r=arguments,i=this,l=T,A){if(a===void 0)return w(l);if(d)return a=setTimeout(g,e),m(l)}return a===void 0&&(a=setTimeout(g,e)),o}return S.cancel=v,S.flush=E,S}function Vp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function sV(t){return!!t&&typeof t=="object"}function oV(t){return typeof t=="symbol"||sV(t)&&tV.call(t)==Hj}function j0(t){if(typeof t=="number")return t;if(oV(t))return M0;if(Vp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Vp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(qj,"");var n=Gj.test(t);return n||Qj.test(t)?Yj(t.slice(2),n?2:8):Kj.test(t)?M0:+t}var aV=iV,Vk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Vk);var zd=Vk.exports,O={},Rv={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(I);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=r})(Rv);Object.defineProperty(O,"__esModule",{value:!0});O.checkSpecKeys=O.checkNavigable=O.changeSlide=O.canUseDOM=O.canGoNext=void 0;O.clamp=Fk;O.extractObject=void 0;O.filterSettings=SV;O.validSettings=O.swipeStart=O.swipeMove=O.swipeEnd=O.slidesOnRight=O.slidesOnLeft=O.slideHandler=O.siblingDirection=O.safePreventDefault=O.lazyStartIndex=O.lazySlidesOnRight=O.lazySlidesOnLeft=O.lazyEndIndex=O.keyHandler=O.initializedState=O.getWidth=O.getTrackLeft=O.getTrackCSS=O.getTrackAnimateCSS=O.getTotalSlides=O.getSwipeDirection=O.getSlideCount=O.getRequiredLazySlides=O.getPreClones=O.getPostClones=O.getOnDemandLazySlides=O.getNavigableIndexes=O.getHeight=void 0;var lV=Uk(I),uV=Uk(Rv);function Uk(t){return t&&t.__esModule?t:{default:t}}function Ma(t){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ma(t)}function V0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ye(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(n),!0).forEach(function(r){cV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cV(t,e,n){return e=dV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dV(t){var e=fV(t,"string");return Ma(e)=="symbol"?e:String(e)}function fV(t,e){if(Ma(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ma(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fk(t,e,n){return Math.max(e,Math.min(t,n))}var ks=O.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},$k=O.getOnDemandLazySlides=function(e){for(var n=[],r=zk(e),i=Bk(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};O.getRequiredLazySlides=function(e){for(var n=[],r=zk(e),i=Bk(e),s=r;s<i;s++)n.push(s);return n};var zk=O.lazyStartIndex=function(e){return e.currentSlide-hV(e)},Bk=O.lazyEndIndex=function(e){return e.currentSlide+pV(e)},hV=O.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},pV=O.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Up=O.getWidth=function(e){return e&&e.offsetWidth||0},Wk=O.getHeight=function(e){return e&&e.offsetHeight||0},Hk=O.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},qk=O.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};O.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};O.initializedState=function(e){var n=lV.default.Children.count(e.children),r=e.listRef,i=Math.ceil(Up(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(Up(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&Wk(r.querySelector('[data-index="0"]')),c=u*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=n-1-e.initialSlide);var f=e.lazyLoadedList||[],m=$k(ye(ye({},e),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(m);var w={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return e.autoplaying===null&&e.autoplay&&(w.autoplaying="playing"),w};O.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,d=e.slidesToScroll,f=e.slidesToShow,m=e.useCSS,w=e.lazyLoadedList;if(n&&r)return{};var y=o,_,g,p,v={},E={},S=s?o:Fk(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&w.indexOf(y)<0&&(w=w.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:w,targetSlide:y},E={animating:!1,targetSlide:y}}else _=y,y<0?(_=y+a,s?a%d!==0&&(_=a-a%d):_=0):!qk(e)&&y>u?y=_=u:c&&y>=a?(y=s?a:a-1,_=s?0:a-1):y>=a&&(_=y-a,s?a%d!==0&&(_=0):_=a-f),!s&&y+f>=a&&(_=a-f),g=Tc(ye(ye({},e),{},{slideIndex:y})),p=Tc(ye(ye({},e),{},{slideIndex:_})),s||(g===p&&(y=_),g=p),l&&(w=w.concat($k(ye(ye({},e),{},{currentSlide:y})))),m?(v={animating:!0,currentSlide:_,trackStyle:Kk(ye(ye({},e),{},{left:g})),lazyLoadedList:w,targetSlide:S},E={animating:!1,currentSlide:_,trackStyle:Sc(ye(ye({},e),{},{left:p})),swipeLeft:null,targetSlide:S}):v={currentSlide:_,trackStyle:Sc(ye(ye({},e),{},{left:p})),lazyLoadedList:w,targetSlide:S};return{state:v,nextState:E}};O.changeSlide=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,d=e.currentSlide,f=e.targetSlide,m=e.lazyLoad,w=e.infinite;if(o=c%l!==0,r=o?0:(c-d)%l,n.message==="previous")s=r===0?l:u-r,a=d-s,m&&!w&&(i=d-s,a=i===-1?c-1:i),w||(a=f-l);else if(n.message==="next")s=r===0?l:r,a=d+s,m&&!w&&(a=(d+l)%c+r),w||(a=f+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,w){var y=yV(ye(ye({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};O.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};O.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&ks(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};O.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,m=n.swiped,w=n.swiping,y=n.slideCount,_=n.slidesToScroll,g=n.infinite,p=n.touchObject,v=n.swipeEvent,E=n.listHeight,S=n.listWidth;if(!r){if(i)return ks(e);s&&o&&a&&ks(e);var T,A={},x=Tc(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var P=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!w&&P>10)return{scrolling:!0};a&&(p.swipeLength=P);var k=(l?-1:1)*(p.curX>p.startX?1:-1);a&&(k=p.curY>p.startY?1:-1);var $=Math.ceil(y/_),z=Hk(n.touchObject,a),H=p.swipeLength;return g||(u===0&&(z==="right"||z==="down")||u+1>=$&&(z==="left"||z==="up")||!qk(n)&&(z==="left"||z==="up"))&&(H=p.swipeLength*c,d===!1&&f&&(f(z),A.edgeDragged=!0)),!m&&v&&(v(z),A.swiped=!0),s?T=x+H*(E/S)*k:l?T=x-H*k:T=x+H*k,a&&(T=x+H*k),A=ye(ye({},A),{},{touchObject:p,swipeLeft:T,trackStyle:Sc(ye(ye({},n),{},{left:T}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(A.swiping=!0,ks(e)),A}};O.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,m=n.targetSlide,w=n.currentSlide,y=n.infinite;if(!r)return i&&ks(e),{};var _=l?u/a:o/a,g=Hk(s,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!s.swipeLength)return p;if(s.swipeLength>_){ks(e),f&&f(g);var v,E,S=y?w:m;switch(g){case"left":case"up":E=S+F0(n),v=c?U0(n,E):E,p.currentDirection=0;break;case"right":case"down":E=S-F0(n),v=c?U0(n,E):E,p.currentDirection=1;break;default:v=S}p.triggerSlideHandler=v}else{var T=Tc(n);p.trackStyle=Kk(ye(ye({},n),{},{left:T}))}return p};var mV=O.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},U0=O.checkNavigable=function(e,n){var r=mV(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},F0=O.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+Wk(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+Up(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},xv=O.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},Sc=O.getTrackCSS=function(e){xv(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=vV(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=ye(ye({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},Kk=O.getTrackAnimateCSS=function(e){xv(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Sc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},Tc=O.getTrackLeft=function(e){if(e.unslick)return 0;xv(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,d=e.variableWidth,f=e.slideHeight,m=e.fade,w=e.vertical,y=0,_,g,p=0;if(m||e.slideCount===1)return 0;var v=0;if(i?(v=-ku(e),o%l!==0&&n+l>o&&(v=-(n>o?a-(n-o):o%l)),s&&(v+=parseInt(a/2))):(o%l!==0&&n+l>o&&(v=a-o%l),s&&(v=parseInt(a/2))),y=v*u,p=v*f,w?_=n*f*-1+p:_=n*u*-1+y,d===!0){var E,S=r&&r.node;if(E=n+ku(e),g=S&&S.childNodes[E],_=g?g.offsetLeft*-1:0,s===!0){E=i?n+ku(e):n,g=S&&S.children[E],_=0;for(var T=0;T<E;T++)_-=S&&S.children[T]&&S.children[T].offsetWidth;_-=parseInt(e.centerPadding),_+=g&&(c-g.offsetWidth)/2}}return _},ku=O.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},gV=O.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},vV=O.getTotalSlides=function(e){return e.slideCount===1?1:ku(e)+e.slideCount+gV(e)},yV=O.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+_V(e)?"left":"right":e.targetSlide<e.currentSlide-wV(e)?"right":"left"},_V=O.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},wV=O.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};O.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var EV=O.validSettings=Object.keys(uV.default);function SV(t){return EV.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Bd={};Object.defineProperty(Bd,"__esModule",{value:!0});Bd.Track=void 0;var ur=Gk(I),Kf=Gk(zd),Gf=O;function Gk(t){return t&&t.__esModule?t:{default:t}}function Bs(t){"@babel/helpers - typeof";return Bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bs(t)}function Fp(){return Fp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fp.apply(this,arguments)}function TV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Yk(r.key),r)}}function IV(t,e,n){return e&&$0(t.prototype,e),n&&$0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function kV(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$p(t,e)}function $p(t,e){return $p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$p(t,e)}function bV(t){var e=Qk();return function(){var r=Ic(t),i;if(e){var s=Ic(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return PV(this,i)}}function PV(t,e){if(e&&(Bs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zp(t)}function zp(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Qk(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qk=function(){return!!t})()}function Ic(t){return Ic=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ic(t)}function z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function St(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z0(Object(n),!0).forEach(function(r){Bp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bp(t,e,n){return e=Yk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yk(t){var e=CV(t,"string");return Bs(e)=="symbol"?e:String(e)}function CV(t,e){if(Bs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Qf=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},AV=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Yf=function(e,n){return e.key||n},RV=function(e){var n,r=[],i=[],s=[],o=ur.default.Children.count(e.children),a=(0,Gf.lazyStartIndex)(e),l=(0,Gf.lazyEndIndex)(e);return ur.default.Children.forEach(e.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?d=u:d=ur.default.createElement("div",null);var m=AV(St(St({},e),{},{index:c})),w=d.props.className||"",y=Qf(St(St({},e),{},{index:c}));if(r.push(ur.default.cloneElement(d,{key:"original"+Yf(d,c),"data-index":c,className:(0,Kf.default)(y,w),tabIndex:"-1","aria-hidden":!y["slick-active"],style:St(St({outline:"none"},d.props.style||{}),m),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(f)}})),e.infinite&&e.fade===!1){var _=o-c;_<=(0,Gf.getPreClones)(e)&&(n=-_,n>=a&&(d=u),y=Qf(St(St({},e),{},{index:n})),i.push(ur.default.cloneElement(d,{key:"precloned"+Yf(d,n),"data-index":n,tabIndex:"-1",className:(0,Kf.default)(y,w),"aria-hidden":!y["slick-active"],style:St(St({},d.props.style||{}),m),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(f)}}))),n=o+c,n<l&&(d=u),y=Qf(St(St({},e),{},{index:n})),s.push(ur.default.cloneElement(d,{key:"postcloned"+Yf(d,n),"data-index":n,tabIndex:"-1",className:(0,Kf.default)(y,w),"aria-hidden":!y["slick-active"],style:St(St({},d.props.style||{}),m),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(f)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};Bd.Track=function(t){kV(n,t);var e=bV(n);function n(){var r;TV(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Bp(zp(r),"node",null),Bp(zp(r),"handleRef",function(a){r.node=a}),r}return IV(n,[{key:"render",value:function(){var i=RV(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return ur.default.createElement("div",Fp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(ur.default.PureComponent);var Wd={};function Ws(t){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(t)}Object.defineProperty(Wd,"__esModule",{value:!0});Wd.Dots=void 0;var Gl=Xk(I),xV=Xk(zd),B0=O;function Xk(t){return t&&t.__esModule?t:{default:t}}function W0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function OV(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?W0(Object(n),!0).forEach(function(r){NV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function NV(t,e,n){return e=Jk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function DV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Jk(r.key),r)}}function LV(t,e,n){return e&&H0(t.prototype,e),n&&H0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Jk(t){var e=MV(t,"string");return Ws(e)=="symbol"?e:String(e)}function MV(t,e){if(Ws(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jV(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Wp(t,e)}function Wp(t,e){return Wp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Wp(t,e)}function VV(t){var e=Zk();return function(){var r=kc(t),i;if(e){var s=kc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return UV(this,i)}}function UV(t,e){if(e&&(Ws(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FV(t)}function FV(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Zk(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Zk=function(){return!!t})()}function kc(t){return kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kc(t)}var $V=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Wd.Dots=function(t){jV(n,t);var e=VV(n);function n(){return DV(this,n),e.apply(this,arguments)}return LV(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,m=$V({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),w={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],_=0;_<m;_++){var g=(_+1)*u-1,p=l?g:(0,B0.clamp)(g,0,d-1),v=p-(u-1),E=l?v:(0,B0.clamp)(v,0,d-1),S=(0,xV.default)({"slick-active":l?f>=E&&f<=p:f===E}),T={message:"dots",index:_,slidesToScroll:u,currentSlide:f},A=this.clickHandler.bind(this,T);y=y.concat(Gl.default.createElement("li",{key:_,className:S},Gl.default.cloneElement(this.props.customPaging(_),{onClick:A})))}return Gl.default.cloneElement(this.props.appendDots(y),OV({className:this.props.dotsClass},w))}}]),n}(Gl.default.PureComponent);var Hs={};function qs(t){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(t)}Object.defineProperty(Hs,"__esModule",{value:!0});Hs.PrevArrow=Hs.NextArrow=void 0;var bs=tb(I),eb=tb(zd),zV=O;function tb(t){return t&&t.__esModule?t:{default:t}}function bc(){return bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bc.apply(this,arguments)}function q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Pc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q0(Object(n),!0).forEach(function(r){BV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function BV(t,e,n){return e=ib(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ib(r.key),r)}}function rb(t,e,n){return e&&K0(t.prototype,e),n&&K0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ib(t){var e=WV(t,"string");return qs(e)=="symbol"?e:String(e)}function WV(t,e){if(qs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Hp(t,e)}function Hp(t,e){return Hp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Hp(t,e)}function ob(t){var e=ab();return function(){var r=Cc(t),i;if(e){var s=Cc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return HV(this,i)}}function HV(t,e){if(e&&(qs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qV(t)}function qV(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ab(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ab=function(){return!!t})()}function Cc(t){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(t)}Hs.PrevArrow=function(t){sb(n,t);var e=ob(n);function n(){return nb(this,n),e.apply(this,arguments)}return rb(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,eb.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=bs.default.cloneElement(this.props.prevArrow,Pc(Pc({},o),a)):l=bs.default.createElement("button",bc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(bs.default.PureComponent);Hs.NextArrow=function(t){sb(n,t);var e=ob(n);function n(){return nb(this,n),e.apply(this,arguments)}return rb(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,zV.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,eb.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=bs.default.cloneElement(this.props.nextArrow,Pc(Pc({},o),a)):l=bs.default.createElement("button",bc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(bs.default.PureComponent);var lb=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),qp=typeof window<"u"&&typeof document<"u"&&window.document===document,Ac=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),KV=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ac):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),GV=2;function QV(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){KV(s)}function a(){var l=Date.now();if(n){if(l-i<GV)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var YV=20,XV=["top","right","bottom","left","width","height","size","weight"],JV=typeof MutationObserver<"u",ZV=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=QV(this.refresh.bind(this),YV)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!qp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),JV?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!qp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=XV.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),ub=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Ks=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Ac},cb=Hd(0,0,0,0);function Rc(t){return parseFloat(t)||0}function G0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+Rc(s)},0)}function e3(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=Rc(o)}return n}function t3(t){var e=t.getBBox();return Hd(0,0,e.width,e.height)}function n3(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return cb;var r=Ks(t).getComputedStyle(t),i=e3(r),s=i.left+i.right,o=i.top+i.bottom,a=Rc(r.width),l=Rc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=G0(r,"left","right")+s),Math.round(l+o)!==n&&(l-=G0(r,"top","bottom")+o)),!i3(t)){var u=Math.round(a+s)-e,c=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return Hd(i.left,i.top,a,l)}var r3=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Ks(t).SVGGraphicsElement}:function(t){return t instanceof Ks(t).SVGElement&&typeof t.getBBox=="function"}}();function i3(t){return t===Ks(t).document.documentElement}function s3(t){return qp?r3(t)?t3(t):n3(t):cb}function o3(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return ub(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Hd(t,e,n,r){return{x:t,y:e,width:n,height:r}}var a3=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Hd(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=s3(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),l3=function(){function t(e,n){var r=o3(n);ub(this,{target:e,contentRect:r})}return t}(),u3=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new lb,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ks(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new a3(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ks(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new l3(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),db=typeof WeakMap<"u"?new WeakMap:new lb,fb=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ZV.getInstance(),r=new u3(e,n,this);db.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){fb.prototype[t]=function(){var e;return(e=db.get(this))[t].apply(e,arguments)}});var c3=function(){return typeof Ac.ResizeObserver<"u"?Ac.ResizeObserver:fb}();const d3=Object.freeze(Object.defineProperty({__proto__:null,default:c3},Symbol.toStringTag,{value:"Module"})),f3=nP(d3);Object.defineProperty($d,"__esModule",{value:!0});$d.InnerSlider=void 0;var gt=pl(I),h3=pl(jk),p3=pl(aV),m3=pl(zd),Ee=O,g3=Bd,v3=Wd,Q0=Hs,y3=pl(f3);function pl(t){return t&&t.__esModule?t:{default:t}}function xi(t){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xi(t)}function xc(){return xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xc.apply(this,arguments)}function _3(t,e){if(t==null)return{};var n=w3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function w3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Y0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Y0(Object(n),!0).forEach(function(r){te(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function E3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,pb(r.key),r)}}function S3(t,e,n){return e&&X0(t.prototype,e),n&&X0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function T3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Kp(t,e)}function Kp(t,e){return Kp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Kp(t,e)}function I3(t){var e=hb();return function(){var r=Oc(t),i;if(e){var s=Oc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return k3(this,i)}}function k3(t,e){if(e&&(xi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ee(t)}function ee(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hb(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(hb=function(){return!!t})()}function Oc(t){return Oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Oc(t)}function te(t,e,n){return e=pb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pb(t){var e=b3(t,"string");return xi(e)=="symbol"?e:String(e)}function b3(t,e){if(xi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}$d.InnerSlider=function(t){T3(n,t);var e=I3(n);function n(r){var i;E3(this,n),i=e.call(this,r),te(ee(i),"listRefHandler",function(o){return i.list=o}),te(ee(i),"trackRefHandler",function(o){return i.track=o}),te(ee(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ee.getHeight)(o)+"px"}}),te(ee(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ee.getOnDemandLazySlides)(W(W({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=W({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new y3.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),te(ee(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),te(ee(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ee.getOnDemandLazySlides)(W(W({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=gt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:gt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),te(ee(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,p3.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),te(ee(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),te(ee(i),"updateState",function(o,a,l){var u=(0,Ee.initializedState)(o);o=W(W(W({},o),u),{},{slideIndex:u.currentSlide});var c=(0,Ee.getTrackLeft)(o);o=W(W({},o),{},{left:c});var d=(0,Ee.getTrackCSS)(o);(a||gt.default.Children.count(i.props.children)!==gt.default.Children.count(o.children))&&(u.trackStyle=d),i.setState(u,l)}),te(ee(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Ee.getPreClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Ee.getPostClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(A){l.push(A.props.style.width),o+=A.props.style.width});for(var d=0;d<u;d++)a+=l[l.length-1-d],o+=l[l.length-1-d];for(var f=0;f<c;f++)o+=l[f];for(var m=0;m<i.state.currentSlide;m++)a+=l[m];var w={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:w}}var _=gt.default.Children.count(i.props.children),g=W(W(W({},i.props),i.state),{},{slideCount:_}),p=(0,Ee.getPreClones)(g)+(0,Ee.getPostClones)(g)+_,v=100/i.props.slidesToShow*p,E=100/p,S=-E*((0,Ee.getPreClones)(g)+i.state.currentSlide)*v/100;i.props.centerMode&&(S+=(100-E*v/100)/2);var T={width:v+"%",left:S+"%"};return{slideWidth:E+"%",trackStyle:T}}),te(ee(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var c=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(f){d(f),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),te(ee(i),"progressiveLazyLoad",function(){for(var o=[],a=W(W({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Ee.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Ee.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),te(ee(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,m=l.afterChange,w=i.state.currentSlide,y=(0,Ee.slideHandler)(W(W(W({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),_=y.state,g=y.nextState;if(_){c&&c(w,_.currentSlide);var p=_.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),m&&m(w),delete i.animationEndCallback),i.setState(_,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),g&&(i.animationEndCallback=setTimeout(function(){var v=g.animating,E=_3(g,["animating"]);i.setState(E,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),m&&m(_.currentSlide),delete i.animationEndCallback})},f))})}}),te(ee(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=W(W({},i.props),i.state),u=(0,Ee.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),te(ee(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),te(ee(i),"keyHandler",function(o){var a=(0,Ee.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),te(ee(i),"selectHandler",function(o){i.changeSlide(o)}),te(ee(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),te(ee(i),"enableBodyScroll",function(){window.ontouchmove=null}),te(ee(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ee.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),te(ee(i),"swipeMove",function(o){var a=(0,Ee.swipeMove)(o,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),te(ee(i),"swipeEnd",function(o){var a=(0,Ee.swipeEnd)(o,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),te(ee(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),te(ee(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),te(ee(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),te(ee(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),te(ee(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ee.canGoNext)(W(W({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),te(ee(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),te(ee(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),te(ee(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),te(ee(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),te(ee(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),te(ee(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),te(ee(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),te(ee(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),te(ee(i),"render",function(){var o=(0,m3.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=W(W({},i.props),i.state),l=(0,Ee.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=W(W({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,Ee.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=W(W({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=gt.default.createElement(v3.Dots,d)}var m,w,y=(0,Ee.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(m=gt.default.createElement(Q0.PrevArrow,y),w=gt.default.createElement(Q0.NextArrow,y));var _=null;i.props.vertical&&(_={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=W(W({},_),g),v=i.props.touchMove,E={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},S={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(E={className:"slick-list"},S={className:o}),gt.default.createElement("div",S,i.props.unslick?"":m,gt.default.createElement("div",xc({ref:i.listRefHandler},E),gt.default.createElement(g3.Track,xc({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=W(W({},h3.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:gt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=W(W({},i.state),s),i}return S3(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(xi(i[l])==="object"||typeof i[l]=="function"||isNaN(i[l]))&&i[l]!==this.props[l]){s=!0;break}}return s||gt.default.Children.count(this.props.children)!==gt.default.Children.count(i.children)}}]),n}(gt.default.Component);var P3=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},C3=P3,A3=C3,R3=function(t){var e=/[height|width]$/;return e.test(t)},J0=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=A3(r),R3(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},x3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=J0(n),r<t.length-1&&(e+=", ")}),e):J0(t)},O3=x3,Xf,Z0;function N3(){if(Z0)return Xf;Z0=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Xf=t,Xf}var Jf,ew;function mb(){if(ew)return Jf;ew=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Jf={isFunction:n,isArray:e,each:t},Jf}var Zf,tw;function D3(){if(tw)return Zf;tw=1;var t=N3(),e=mb().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Zf=n,Zf}var eh,nw;function L3(){if(nw)return eh;nw=1;var t=D3(),e=mb(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[o].addHandler(d)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},eh=s,eh}var th,rw;function M3(){if(rw)return th;rw=1;var t=L3();return th=new t,th}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(I),n=$d,r=o(O3),i=o(Rv),s=O;function o(P){return P&&P.__esModule?P:{default:P}}function a(P){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},a(P)}function l(){return l=Object.assign?Object.assign.bind():function(P){for(var k=1;k<arguments.length;k++){var $=arguments[k];for(var z in $)Object.prototype.hasOwnProperty.call($,z)&&(P[z]=$[z])}return P},l.apply(this,arguments)}function u(P,k){var $=Object.keys(P);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(P);k&&(z=z.filter(function(H){return Object.getOwnPropertyDescriptor(P,H).enumerable})),$.push.apply($,z)}return $}function c(P){for(var k=1;k<arguments.length;k++){var $=arguments[k]!=null?arguments[k]:{};k%2?u(Object($),!0).forEach(function(z){S(P,z,$[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors($)):u(Object($)).forEach(function(z){Object.defineProperty(P,z,Object.getOwnPropertyDescriptor($,z))})}return P}function d(P,k){if(!(P instanceof k))throw new TypeError("Cannot call a class as a function")}function f(P,k){for(var $=0;$<k.length;$++){var z=k[$];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(P,T(z.key),z)}}function m(P,k,$){return k&&f(P.prototype,k),$&&f(P,$),Object.defineProperty(P,"prototype",{writable:!1}),P}function w(P,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(k&&k.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),k&&y(P,k)}function y(P,k){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(z,H){return z.__proto__=H,z},y(P,k)}function _(P){var k=v();return function(){var z=E(P),H;if(k){var G=E(this).constructor;H=Reflect.construct(z,arguments,G)}else H=z.apply(this,arguments);return g(this,H)}}function g(P,k){if(k&&(a(k)==="object"||typeof k=="function"))return k;if(k!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(P)}function p(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function v(){try{var P=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v=function(){return!!P})()}function E(P){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function($){return $.__proto__||Object.getPrototypeOf($)},E(P)}function S(P,k,$){return k=T(k),k in P?Object.defineProperty(P,k,{value:$,enumerable:!0,configurable:!0,writable:!0}):P[k]=$,P}function T(P){var k=A(P,"string");return a(k)=="symbol"?k:String(k)}function A(P,k){if(a(P)!="object"||!P)return P;var $=P[Symbol.toPrimitive];if($!==void 0){var z=$.call(P,k||"default");if(a(z)!="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(k==="string"?String:Number)(P)}var x=(0,s.canUseDOM)()&&M3();t.default=function(P){w($,P);var k=_($);function $(z){var H;return d(this,$),H=k.call(this,z),S(p(H),"innerSliderRefHandler",function(G){return H.innerSlider=G}),S(p(H),"slickPrev",function(){return H.innerSlider.slickPrev()}),S(p(H),"slickNext",function(){return H.innerSlider.slickNext()}),S(p(H),"slickGoTo",function(G){var xn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return H.innerSlider.slickGoTo(G,xn)}),S(p(H),"slickPause",function(){return H.innerSlider.pause("paused")}),S(p(H),"slickPlay",function(){return H.innerSlider.autoPlay("play")}),H.state={breakpoint:null},H._responsiveMediaHandlers=[],H}return m($,[{key:"media",value:function(H,G){x.register(H,G),this._responsiveMediaHandlers.push({query:H,handler:G})}},{key:"componentDidMount",value:function(){var H=this;if(this.props.responsive){var G=this.props.responsive.map(function(De){return De.breakpoint});G.sort(function(De,Rt){return De-Rt}),G.forEach(function(De,Rt){var L;Rt===0?L=(0,r.default)({minWidth:0,maxWidth:De}):L=(0,r.default)({minWidth:G[Rt-1]+1,maxWidth:De}),(0,s.canUseDOM)()&&H.media(L,function(){H.setState({breakpoint:De})})});var xn=(0,r.default)({minWidth:G.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(xn,function(){H.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(H){x.unregister(H.query,H.handler)})}},{key:"render",value:function(){var H=this,G,xn;this.state.breakpoint?(xn=this.props.responsive.filter(function(Nn){return Nn.breakpoint===H.state.breakpoint}),G=xn[0].settings==="unslick"?"unslick":c(c(c({},i.default),this.props),xn[0].settings)):G=c(c({},i.default),this.props),G.centerMode&&(G.slidesToScroll>1,G.slidesToScroll=1),G.fade&&(G.slidesToShow>1,G.slidesToScroll>1,G.slidesToShow=1,G.slidesToScroll=1);var De=e.default.Children.toArray(this.props.children);De=De.filter(function(Nn){return typeof Nn=="string"?!!Nn.trim():!!Nn}),G.variableWidth&&(G.rows>1||G.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),G.variableWidth=!1);for(var Rt=[],L=null,B=0;B<De.length;B+=G.rows*G.slidesPerRow){for(var J=[],ce=B;ce<B+G.rows*G.slidesPerRow;ce+=G.slidesPerRow){for(var xe=[],$t=ce;$t<ce+G.slidesPerRow&&(G.variableWidth&&De[$t].props.style&&(L=De[$t].props.style.width),!($t>=De.length));$t+=1)xe.push(e.default.cloneElement(De[$t],{key:100*B+10*ce+$t,tabIndex:-1,style:{width:"".concat(100/G.slidesPerRow,"%"),display:"inline-block"}}));J.push(e.default.createElement("div",{key:10*B+ce},xe))}G.variableWidth?Rt.push(e.default.createElement("div",{key:B,style:{width:L}},J)):Rt.push(e.default.createElement("div",{key:B},J))}if(G==="unslick"){var On="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:On},De)}else Rt.length<=G.slidesToShow&&!G.infinite&&(G.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(G)),Rt)}}]),$}(e.default.Component)})(Mk);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Mk);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(Lk);const j3=lm(Lk),V3=t=>{const{onClick:e}=t;return h.jsx("div",{className:"control-btn",onClick:e,children:h.jsx("button",{className:"next",children:h.jsx("i",{className:"fas fa-long-arrow-alt-right"})})})},U3=t=>{const{onClick:e}=t;return h.jsx("div",{className:"control-btn",onClick:e,children:h.jsx("button",{className:"prev",children:h.jsx("i",{className:"fas fa-long-arrow-alt-left"})})})},F3=({productItems:t,productos:e,addtoCart:n})=>{var r={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,nextArrow:h.jsx(V3,{}),prevArrow:h.jsx(U3,{})};return h.jsx(h.Fragment,{children:h.jsx(j3,{...r,children:e.map(i=>h.jsx("div",{className:"box",children:h.jsxs("div",{className:"product mtop",children:[h.jsxs("div",{className:"img",id:t.id,children:[h.jsx("span",{className:"discount",children:i.description}),h.jsx("img",{src:i.pictures||"src/presentation/assets/flash/flash-1.png",alt:""}),h.jsxs("div",{className:"product-like",children:[h.jsx("label",{children:"0"})," ",h.jsx("br",{}),h.jsx("i",{className:"far fa-heart",onClick:""})]})]}),h.jsxs("div",{className:"product-details",children:[h.jsx("h3",{children:i.product_name}),h.jsxs("div",{className:"rate",children:[h.jsx("i",{className:"far fa-star"}),h.jsx("i",{className:"far fa-star"}),h.jsx("i",{className:"far fa-star"}),h.jsx("i",{className:"far fa-star"}),h.jsx("i",{className:"far fa-star"})]}),h.jsxs("div",{className:"price",children:[h.jsxs("h4",{children:[i.unitary_price,".00"]}),h.jsx("button",{onClick:()=>n(i),children:h.jsx("i",{className:"fas fa-plus"})})]})]})]})},i.id))})})},nh=({productItems:t,addtoCart:e,productos:n,titulo:r})=>h.jsx(h.Fragment,{children:h.jsx("section",{className:"flash",children:h.jsxs("div",{className:"contenedor",children:[h.jsxs("div",{className:"heading f_flex",children:[h.jsx("i",{className:"fa fa-bolt"}),h.jsxs("h1",{children:["Productos ",r]})]}),h.jsx(F3,{productItems:t,addtoCart:e,productos:n})]})})});function $3({productItems:t,productos:e,addtoCart:n}){return I.useState(!1),h.jsxs("div",{className:"container",children:[h.jsx(Bj,{}),h.jsx(nh,{productItems:t,productos:e,addtoCart:n,titulo:"recien añadidos"}),h.jsx(nh,{productItems:t,productos:e,addtoCart:n,titulo:"Mas puntuado"}),h.jsx(nh,{productItems:t,productos:e,addtoCart:n,titulo:"Mas vendidos"})]})}function iw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iw(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nc(t){"@babel/helpers - typeof";return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nc(t)}function z3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function B3(t,e,n){return e&&sw(t.prototype,e),n&&sw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ov(t,e){return H3(t)||K3(t,e)||gb(t,e)||Q3()}function ml(t){return W3(t)||q3(t)||gb(t)||G3()}function W3(t){if(Array.isArray(t))return Gp(t)}function H3(t){if(Array.isArray(t))return t}function q3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function K3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gb(t,e){if(t){if(typeof t=="string")return Gp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gp(t,e)}}function Gp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function G3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ow=function(){},Nv={},vb={},yb=null,_b={mark:ow,measure:ow};try{typeof window<"u"&&(Nv=window),typeof document<"u"&&(vb=document),typeof MutationObserver<"u"&&(yb=MutationObserver),typeof performance<"u"&&(_b=performance)}catch{}var Y3=Nv.navigator||{},aw=Y3.userAgent,lw=aw===void 0?"":aw,Ur=Nv,ve=vb,uw=yb,Ql=_b;Ur.document;var rr=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",wb=~lw.indexOf("MSIE")||~lw.indexOf("Trident/"),Yl,Xl,Jl,Zl,eu,Jn="___FONT_AWESOME___",Qp=16,Eb="fa",Sb="svg-inline--fa",Oi="data-fa-i2svg",Yp="data-fa-pseudo-element",X3="data-fa-pseudo-element-pending",Dv="data-prefix",Lv="data-icon",cw="fontawesome-i2svg",J3="async",Z3=["HTML","HEAD","STYLE","SCRIPT"],Tb=function(){try{return!0}catch{return!1}}(),pe="classic",Pe="sharp",Mv=[pe,Pe];function gl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[pe]}})}var ja=gl((Yl={},We(Yl,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(Yl,Pe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Yl)),Va=gl((Xl={},We(Xl,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(Xl,Pe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Xl)),Ua=gl((Jl={},We(Jl,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(Jl,Pe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Jl)),eU=gl((Zl={},We(Zl,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(Zl,Pe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Zl)),tU=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ib="fa-layers-text",nU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rU=gl((eu={},We(eu,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(eu,Pe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),eu)),kb=[1,2,3,4,5,6,7,8,9,10],iU=kb.concat([11,12,13,14,15,16,17,18,19,20]),sU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],di={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fa=new Set;Object.keys(Va[pe]).map(Fa.add.bind(Fa));Object.keys(Va[Pe]).map(Fa.add.bind(Fa));var oU=[].concat(Mv,ml(Fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",di.GROUP,di.SWAP_OPACITY,di.PRIMARY,di.SECONDARY]).concat(kb.map(function(t){return"".concat(t,"x")})).concat(iU.map(function(t){return"w-".concat(t)})),Xo=Ur.FontAwesomeConfig||{};function aU(t){var e=ve.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ve&&typeof ve.querySelector=="function"){var uU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uU.forEach(function(t){var e=Ov(t,2),n=e[0],r=e[1],i=lU(aU(n));i!=null&&(Xo[r]=i)})}var bb={styleDefault:"solid",familyDefault:"classic",cssPrefix:Eb,replacementClass:Sb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xo.familyPrefix&&(Xo.cssPrefix=Xo.familyPrefix);var Gs=M(M({},bb),Xo);Gs.autoReplaceSvg||(Gs.observeMutations=!1);var U={};Object.keys(bb).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Gs[t]=n,Jo.forEach(function(r){return r(U)})},get:function(){return Gs[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Gs.cssPrefix=e,Jo.forEach(function(n){return n(U)})},get:function(){return Gs.cssPrefix}});Ur.FontAwesomeConfig=U;var Jo=[];function cU(t){return Jo.push(t),function(){Jo.splice(Jo.indexOf(t),1)}}var or=Qp,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dU(t){if(!(!t||!rr)){var e=ve.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ve.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ve.head.insertBefore(e,r),t}}var fU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $a(){for(var t=12,e="";t-- >0;)e+=fU[Math.random()*62|0];return e}function lo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function jv(t){return t.classList?lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Pb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Pb(t[n]),'" ')},"").trim()}function qd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vv(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function pU(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function mU(t){var e=t.transform,n=t.width,r=n===void 0?Qp:n,i=t.height,s=i===void 0?Qp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wb?l+="translate(".concat(e.x/or-r/2,"em, ").concat(e.y/or-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/or,"em), calc(-50% + ").concat(e.y/or,"em)) "):l+="translate(".concat(e.x/or,"em, ").concat(e.y/or,"em) "),l+="scale(".concat(e.size/or*(e.flipX?-1:1),", ").concat(e.size/or*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var gU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cb(){var t=Eb,e=Sb,n=U.cssPrefix,r=U.replacementClass,i=gU;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var dw=!1;function rh(){U.autoAddCss&&!dw&&(dU(Cb()),dw=!0)}var vU={mixout:function(){return{dom:{css:Cb,insertCss:rh}}},hooks:function(){return{beforeDOMElementCreation:function(){rh()},beforeI2svg:function(){rh()}}}},Zn=Ur||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var rn=Zn[Jn],Ab=[],yU=function t(){ve.removeEventListener("DOMContentLoaded",t),Dc=1,Ab.map(function(e){return e()})},Dc=!1;rr&&(Dc=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),Dc||ve.addEventListener("DOMContentLoaded",yU));function _U(t){rr&&(Dc?setTimeout(t,0):Ab.push(t))}function vl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Pb(t):"<".concat(e," ").concat(hU(r),">").concat(s.map(vl).join(""),"</").concat(e,">")}function fw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wU=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ih=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?wU(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function EU(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Xp(t){var e=EU(t);return e.length===1?e[0].toString(16):null}function SU(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function hw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Jp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=hw(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,hw(e)):rn.styles[t]=M(M({},rn.styles[t]||{}),s),t==="fas"&&Jp("fa",e)}var tu,nu,ru,ds=rn.styles,TU=rn.shims,IU=(tu={},We(tu,pe,Object.values(Ua[pe])),We(tu,Pe,Object.values(Ua[Pe])),tu),Uv=null,Rb={},xb={},Ob={},Nb={},Db={},kU=(nu={},We(nu,pe,Object.keys(ja[pe])),We(nu,Pe,Object.keys(ja[Pe])),nu);function bU(t){return~oU.indexOf(t)}function PU(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!bU(i)?i:null}var Lb=function(){var e=function(s){return ih(ds,function(o,a,l){return o[l]=ih(a,s,{}),o},{})};Rb=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),xb=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Db=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ds||U.autoFetchSvg,r=ih(TU,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Ob=r.names,Nb=r.unicodes,Uv=Kd(U.styleDefault,{family:U.familyDefault})};cU(function(t){Uv=Kd(t.styleDefault,{family:U.familyDefault})});Lb();function Fv(t,e){return(Rb[t]||{})[e]}function CU(t,e){return(xb[t]||{})[e]}function fi(t,e){return(Db[t]||{})[e]}function Mb(t){return Ob[t]||{prefix:null,iconName:null}}function AU(t){var e=Nb[t],n=Fv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fr(){return Uv}var $v=function(){return{prefix:null,iconName:null,rest:[]}};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?pe:n,i=ja[r][t],s=Va[r][t]||Va[r][i],o=t in rn.styles?t:null;return s||o||null}var pw=(ru={},We(ru,pe,Object.keys(Ua[pe])),We(ru,Pe,Object.keys(Ua[Pe])),ru);function Gd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},We(e,pe,"".concat(U.cssPrefix,"-").concat(pe)),We(e,Pe,"".concat(U.cssPrefix,"-").concat(Pe)),e),o=null,a=pe;(t.includes(s[pe])||t.some(function(u){return pw[pe].includes(u)}))&&(a=pe),(t.includes(s[Pe])||t.some(function(u){return pw[Pe].includes(u)}))&&(a=Pe);var l=t.reduce(function(u,c){var d=PU(U.cssPrefix,c);if(ds[c]?(c=IU[a].includes(c)?eU[a][c]:c,o=c,u.prefix=c):kU[a].indexOf(c)>-1?(o=c,u.prefix=Kd(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[pe]&&c!==s[Pe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?Mb(u.iconName):{},m=fi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ds.far&&ds.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},$v());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Pe&&(ds.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=fi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Fr()||"fas"),l}var RU=function(){function t(){z3(this,t),this.definitions={}}return B3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Jp(a,o[a]);var l=Ua[pe][a];l&&Jp(l,o[a]),Lb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),mw=[],fs={},Ps={},xU=Object.keys(Ps);function OU(t,e){var n=e.mixoutsTo;return mw=t,fs={},Object.keys(Ps).forEach(function(r){xU.indexOf(r)===-1&&delete Ps[r]}),mw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Nc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){fs[o]||(fs[o]=[]),fs[o].push(s[o])})}r.provides&&r.provides(Ps)}),n}function Zp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=fs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ni(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fs[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ps[t]?Ps[t].apply(null,e):void 0}function em(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fr();if(e)return e=fi(n,e)||e,fw(jb.definitions,n,e)||fw(rn.styles,n,e)}var jb=new RU,NU=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Ni("noAuto")},DU={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Ni("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,_U(function(){MU({autoReplaceSvgRoot:n}),Ni("watch",e)})}},LU={icon:function(e){if(e===null)return null;if(Nc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kd(e[0]);return{prefix:r,iconName:fi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(tU))){var i=Gd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Fr(),iconName:fi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Fr();return{prefix:s,iconName:fi(s,e)||e}}}},Ft={noAuto:NU,config:U,dom:DU,parse:LU,library:jb,findIconDefinition:em,toHtml:vl},MU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ve:n;(Object.keys(rn.styles).length>0||U.autoFetchSvg)&&rr&&U.autoReplaceSvg&&Ft.dom.i2svg({node:r})};function Qd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return vl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(rr){var r=ve.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function jU(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Vv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=qd(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function VU(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function zv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,w=r.found?r:n,y=w.width,_=w.height,g=i==="fak",p=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(P){return d.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(d.classes).join(" "),v={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};m&&(v.attributes[Oi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||$a())},children:[l]}),delete v.attributes.title);var S=M(M({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},E),d.styles)}),T=r.found&&n.found?er("generateAbstractMask",S)||{children:[],attributes:{}}:er("generateAbstractIcon",S)||{children:[],attributes:{}},A=T.children,x=T.attributes;return S.children=A,S.attributes=x,a?VU(S):jU(S)}function gw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Oi]="");var c=M({},o.styles);Vv(i)&&(c.transform=mU({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=qd(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function UU(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=qd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sh=rn.styles;function tm(t){var e=t[0],n=t[1],r=t.slice(4),i=Ov(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(di.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(di.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(di.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var FU={found:!1,width:512,height:512};function $U(t,e){!Tb&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function nm(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Fr()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=Mb(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&sh[e]&&sh[e][t]){var o=sh[e][t];return r(tm(o))}$U(t,e),r(M(M({},FU),{},{icon:U.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var vw=function(){},rm=U.measurePerformance&&Ql&&Ql.mark&&Ql.measure?Ql:{mark:vw,measure:vw},No='FA "6.5.1"',zU=function(e){return rm.mark("".concat(No," ").concat(e," begins")),function(){return Vb(e)}},Vb=function(e){rm.mark("".concat(No," ").concat(e," ends")),rm.measure("".concat(No," ").concat(e),"".concat(No," ").concat(e," begins"),"".concat(No," ").concat(e," ends"))},Bv={begin:zU,end:Vb},bu=function(){};function yw(t){var e=t.getAttribute?t.getAttribute(Oi):null;return typeof e=="string"}function BU(t){var e=t.getAttribute?t.getAttribute(Dv):null,n=t.getAttribute?t.getAttribute(Lv):null;return e&&n}function WU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function HU(){if(U.autoReplaceSvg===!0)return Pu.replace;var t=Pu[U.autoReplaceSvg];return t||Pu.replace}function qU(t){return ve.createElementNS("http://www.w3.org/2000/svg",t)}function KU(t){return ve.createElement(t)}function Ub(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?qU:KU:n;if(typeof t=="string")return ve.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Ub(o,{ceFn:r}))}),i}function GU(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Ub(i),n)}),n.getAttribute(Oi)===null&&U.keepOriginalSource){var r=ve.createComment(GU(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~jv(n).indexOf(U.replacementClass))return Pu.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return vl(a)}).join(`
`);n.setAttribute(Oi,""),n.innerHTML=o}};function _w(t){t()}function Fb(t,e){var n=typeof e=="function"?e:bu;if(t.length===0)n();else{var r=_w;U.mutateApproach===J3&&(r=Ur.requestAnimationFrame||_w),r(function(){var i=HU(),s=Bv.begin("mutate");t.map(i),s(),n()})}}var Wv=!1;function $b(){Wv=!0}function im(){Wv=!1}var Lc=null;function ww(t){if(uw&&U.observeMutations){var e=t.treeCallback,n=e===void 0?bu:e,r=t.nodeCallback,i=r===void 0?bu:r,s=t.pseudoElementsCallback,o=s===void 0?bu:s,a=t.observeMutationsRoot,l=a===void 0?ve:a;Lc=new uw(function(u){if(!Wv){var c=Fr();lo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!yw(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&yw(d.target)&&~sU.indexOf(d.attributeName))if(d.attributeName==="class"&&BU(d.target)){var f=Gd(jv(d.target)),m=f.prefix,w=f.iconName;d.target.setAttribute(Dv,m||c),w&&d.target.setAttribute(Lv,w)}else WU(d.target)&&i(d.target)})}}),rr&&Lc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QU(){Lc&&Lc.disconnect()}function YU(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function XU(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Gd(jv(t));return i.prefix||(i.prefix=Fr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=CU(i.prefix,t.innerText)||Fv(i.prefix,Xp(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function JU(t){var e=lo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||$a()):(e["aria-hidden"]="true",e.focusable="false")),e}function ZU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ew(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=XU(t),r=n.iconName,i=n.prefix,s=n.rest,o=JU(t),a=Zp("parseNodeAttributes",{},t),l=e.styleParser?YU(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var e5=rn.styles;function zb(t){var e=U.autoReplaceSvg==="nest"?Ew(t,{styleParser:!1}):Ew(t);return~e.extra.classes.indexOf(Ib)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var $r=new Set;Mv.map(function(t){$r.add("fa-".concat(t))});Object.keys(ja[pe]).map($r.add.bind($r));Object.keys(ja[Pe]).map($r.add.bind($r));$r=ml($r);function Sw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();var n=ve.documentElement.classList,r=function(d){return n.add("".concat(cw,"-").concat(d))},i=function(d){return n.remove("".concat(cw,"-").concat(d))},s=U.autoFetchSvg?$r:Mv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(e5));s.includes("fa")||s.push("fa");var o=[".".concat(Ib,":not([").concat(Oi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Oi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=lo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Bv.begin("onTree"),u=a.reduce(function(c,d){try{var f=zb(d);f&&c.push(f)}catch(m){Tb||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){Fb(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function t5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zb(t).then(function(n){n&&Fb([n],e)})}function n5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:em(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:em(i||{})),t(r,M(M({},n),{},{mask:i}))}}var r5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?yn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,w=m===void 0?null:m,y=n.classes,_=y===void 0?[]:y,g=n.attributes,p=g===void 0?{}:g,v=n.styles,E=v===void 0?{}:v;if(e){var S=e.prefix,T=e.iconName,A=e.icon;return Qd(M({type:"icon"},e),function(){return Ni("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(f?p["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(w||$a()):(p["aria-hidden"]="true",p.focusable="false")),zv({icons:{main:tm(A),mask:l?tm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:M(M({},yn),i),symbol:o,title:f,maskId:c,titleId:w,extra:{attributes:p,styles:E,classes:_}})})}},i5={mixout:function(){return{icon:n5(r5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sw,n.nodeCallback=t5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ve:r,s=n.callback,o=s===void 0?function(){}:s;return Sw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,w){Promise.all([nm(i,a),c.iconName?nm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=Ov(y,2),g=_[0],p=_[1];m([n,zv({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=qd(a);l.length>0&&(i.style=l);var u;return Vv(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},s5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Qd({type:"layer"},function(){Ni("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(ml(s)).join(" ")},children:o}]})}}}},o5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Qd({type:"counter",content:n},function(){return Ni("beforeDOMElementCreation",{content:n,params:r}),UU({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(ml(a))}})})}}}},a5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?yn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return Qd({type:"text",content:n},function(){return Ni("beforeDOMElementCreation",{content:n,params:r}),gw({content:n,transform:M(M({},yn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(U.cssPrefix,"-layers-text")].concat(ml(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wb){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gw({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},l5=new RegExp('"',"ug"),Tw=[1105920,1112319];function u5(t){var e=t.replace(l5,""),n=SU(e,0),r=n>=Tw[0]&&n<=Tw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Xp(i?e[0]:e),isSecondary:r||i}}function Iw(t,e){var n="".concat(X3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=lo(t.children),o=s.filter(function(A){return A.getAttribute(Yp)===e})[0],a=Ur.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(nU),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Pe:pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Va[f][l[2].toLowerCase()]:rU[f][u],w=u5(d),y=w.value,_=w.isSecondary,g=l[0].startsWith("FontAwesome"),p=Fv(m,y),v=p;if(g){var E=AU(y);E.iconName&&E.prefix&&(p=E.iconName,m=E.prefix)}if(p&&!_&&(!o||o.getAttribute(Dv)!==m||o.getAttribute(Lv)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var S=ZU(),T=S.extra;T.attributes[Yp]=e,nm(p,m).then(function(A){var x=zv(M(M({},S),{},{icons:{main:A,mask:$v()},prefix:m,iconName:v,extra:T,watchable:!0})),P=ve.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=x.map(function(k){return vl(k)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function c5(t){return Promise.all([Iw(t,"::before"),Iw(t,"::after")])}function d5(t){return t.parentNode!==document.head&&!~Z3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function kw(t){if(rr)return new Promise(function(e,n){var r=lo(t.querySelectorAll("*")).filter(d5).map(c5),i=Bv.begin("searchPseudoElements");$b(),Promise.all(r).then(function(){i(),im(),e()}).catch(function(){i(),im(),n()})})}var f5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=kw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ve:r;U.searchPseudoElements&&kw(i)}}},bw=!1,h5={mixout:function(){return{dom:{unwatch:function(){$b(),bw=!0}}}},hooks:function(){return{bootstrap:function(){ww(Zp("mutationObserverCallbacks",{}))},noAuto:function(){QU()},watch:function(n){var r=n.observeMutationsRoot;bw?im():ww(Zp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},p5={mixout:function(){return{parse:{transform:function(n){return Pw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Pw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),m.path)}]}]}}}},oh={x:0,y:0,width:"100%",height:"100%"};function Cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function m5(t){return t.tag==="g"?t.children:[t]}var g5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Gd(i.split(" ").map(function(o){return o.trim()})):$v();return s.prefix||(s.prefix=Fr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=pU({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:M(M({},oh),{},{fill:"white"})},y=c.children?{children:c.children.map(Cw)}:{},_={tag:"g",attributes:M({},m.inner),children:[Cw(M({tag:c.tag,attributes:M(M({},c.attributes),m.path)},y))]},g={tag:"g",attributes:M({},m.outer),children:[_]},p="mask-".concat(a||$a()),v="clip-".concat(a||$a()),E={tag:"mask",attributes:M(M({},oh),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:m5(f)},E]};return r.push(S,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},oh)}),{children:r,attributes:i}}}},v5={provides:function(e){var n=!1;Ur.matchMedia&&(n=Ur.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},y5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},_5=[vU,i5,s5,o5,a5,f5,h5,p5,g5,v5,y5];OU(_5,{mixoutsTo:Ft});Ft.noAuto;Ft.config;Ft.library;Ft.dom;var sm=Ft.parse;Ft.findIconDefinition;Ft.toHtml;var w5=Ft.icon;Ft.layer;Ft.text;Ft.counter;var Bb={exports:{}},E5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S5=E5,T5=S5;function Wb(){}function Hb(){}Hb.resetWarningCache=Wb;var I5=function(){function t(r,i,s,o,a,l){if(l!==T5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Hb,resetWarningCache:Wb};return n.PropTypes=n,n};Bb.exports=I5();var k5=Bb.exports;const Z=lm(k5);function Aw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Aw(Object(n),!0).forEach(function(r){hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Aw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mc(t){"@babel/helpers - typeof";return Mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(t)}function hs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P5(t,e){if(t==null)return{};var n=b5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function om(t){return C5(t)||A5(t)||R5(t)||x5()}function C5(t){if(Array.isArray(t))return am(t)}function A5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function R5(t,e){if(t){if(typeof t=="string")return am(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return am(t,e)}}function am(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,w=t.border,y=t.listItem,_=t.flip,g=t.size,p=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":w,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},hs(e,"fa-".concat(g),typeof g<"u"&&g!==null),hs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),hs(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),hs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function N5(t){return t=t-0,t===t}function qb(t){return N5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var D5=["style"];function L5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function M5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=qb(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[L5(i)]=s:e[i]=s,e},{})}function Kb(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Kb(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=M5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[qb(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=P5(n,D5);return i.attrs.style=wr(wr({},i.attrs.style),o),t.apply(void 0,[e.tag,wr(wr({},i.attrs),a)].concat(om(r)))}var Gb=!1;try{Gb=!0}catch{}function j5(){if(!Gb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rw(t){if(t&&Mc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sm.icon)return sm.icon(t);if(t===null)return null;if(t&&Mc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ah(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?hs({},t,e):{}}var Qs=Vc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Rw(n),c=ah("classes",[].concat(om(O5(t)),om(s.split(" ")))),d=ah("transform",typeof t.transform=="string"?sm.transform(t.transform):t.transform),f=ah("mask",Rw(r)),m=w5(u,wr(wr(wr(wr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return j5("Could not find icon",u),null;var w=m.abstract,y={ref:e};return Object.keys(t).forEach(function(_){Qs.defaultProps.hasOwnProperty(_)||(y[_]=t[_])}),V5(w[0],y)});Qs.displayName="FontAwesomeIcon";Qs.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};Qs.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var V5=Kb.bind(null,Vc.createElement),U5={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},F5={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};function $5(){const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(!1);Mi();const l=Fd(),u=y=>e(y.target.value),c=y=>r(y.target.value),d=async y=>{y.preventDefault();try{const _=await hM(l,t,n),g=cn(Bi,"users",_.user.uid),p=await zi(g);if(!p.exists()){s("No existe una cuenta asociada a este email.");return}const v=p.data().userTypeId;window.location.href=`/?userType=${v}`}catch(_){w(_)}},f=async()=>{try{await Uj(),window.location.href="/"}catch(y){w(y)}},m=async()=>{try{await Vj(),window.location.href="/"}catch(y){w(y)}},w=y=>{console.error("Error de inicio de sesión:",y.code||y.message);let _="";switch(y.code){case"auth/account-exists-with-different-credential":_="Ya existe una cuenta con un método de inicio de sesión diferente.";break;case"auth/email-already-in-use":_="El correo electrónico ya está en uso con otra cuenta.";break;case"auth/wrong-password":_="La contraseña es incorrecta. Por favor, inténtalo de nuevo.";break;case"auth/user-not-found":_="No se encontró una cuenta con este correo electrónico.";break;case"auth/user-disabled":_="La cuenta ha sido deshabilitada. Contacta al soporte para más información.";break;case"auth/too-many-requests":_="Hemos detectado demasiadas solicitudes desde tu dispositivo. Por favor, espera un momento e inténtalo de nuevo.";break;case"auth/invalid-credential":_="La credencial proporcionada es inválida. Por favor, verifica tus datos e inténtalo de nuevo.";break;default:_=`Error al iniciar sesión. ${y.message}`;break}s(_),a(!0),setTimeout(()=>{a(!1),s("")},5e3)};return h.jsx("section",{className:"login-container",children:h.jsx("div",{className:"login-box",children:h.jsxs("form",{onSubmit:d,children:[h.jsx("h2",{children:"Iniciar sesión"}),o&&h.jsx("div",{className:"error-message",children:i}),h.jsxs("div",{className:`input-box ${t?"active":""}`,children:[h.jsx("span",{className:"icon",children:h.jsx("ion-icon",{name:"mail"})}),h.jsx("input",{type:"email",required:!0,value:t,onChange:u}),h.jsx("label",{children:"Email"})]}),h.jsxs("div",{className:`input-box ${n?"active":""}`,children:[h.jsx("span",{className:"icon",children:h.jsx("ion-icon",{name:"lock-closed"})}),h.jsx("input",{type:"password",required:!0,value:n,onChange:c}),h.jsx("label",{children:"Contraseña"})]}),h.jsx("button",{type:"submit",className:"login-btn",children:"Iniciar sesión"}),h.jsxs("button",{type:"button",onClick:f,className:"google-btn",children:[h.jsx(Qs,{icon:U5,className:"google-icon"}),h.jsx("span",{className:"btn-text",children:"Google"})]}),h.jsxs("button",{type:"button",onClick:m,className:"facebook-btn",children:[h.jsx(Qs,{icon:F5,className:"icon"}),h.jsx("span",{className:"btn-text",children:"Facebook"})]}),h.jsx("div",{className:"register-link",children:h.jsxs("p",{children:["¿Aún no tienes una cuenta? ",h.jsx(lt,{to:"/registrarse",children:"Registrarse"})]})})]})})})}const Qb=I.createContext(),z5=()=>I.useContext(Qb),B5=({children:t})=>{const[e,n]=I.useState(null),[r,i]=I.useState(!0);return I.useEffect(()=>rk(Wi,o=>{n(o),i(!1)}),[]),h.jsx(Qb.Provider,{value:{currentUser:e},children:!r&&t})},iu=({children:t})=>{const{currentUser:e}=z5();return e?t:h.jsx(gA,{to:"/iniciarsesion"})},W5={productItems:[{id:1,discount:50,cover:"src/presentation/assets/flash/flash-1.png",name:"Shoes",price:100},{id:2,discount:40,cover:"src/presentation/assets/flash/flash-2.png",name:"Watch",price:20},{id:3,discount:40,cover:"src/presentation/assets/flash/flash-3.png",name:"Smart Mobile Black",price:200},{id:4,discount:40,cover:"src/presentation/assets/flash/flash-4.png",name:"Smart Watch Black",price:50},{id:5,discount:50,cover:"src/presentation/assets/flash/flash-1.png",name:"Shoes",price:100},{id:6,discount:50,cover:"src/presentation/assets/flash/flash-1.png",name:"Shoes",price:100}]},Hi=TI(ao);Fd(ao);const Hv=Nk(ao);class Yb{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.description=n,this.pictures=r,this.banner_pictures=i,this.CategoryID=s,this.product_name=o,this.stock=a,this.unitary_price=u,this.gramaje=l,this.state=c||(a>=1?"disponible":"No disponible")}toFirestore(){return{description:this.description,pictures:this.pictures,banner_pictures:this.banner_pictures,CategoryID:this.CategoryID,product_name:this.product_name,stock:this.stock,unitary_price:this.unitary_price,gramaje:this.gramaje,state:this.state}}}async function H5(){const t=xd(Hi,"products"),e=await dv(t),n=[];return e.forEach(r=>{const i=r.data(),s=new Yb(r.id,i.description,i.pictures,i.banner_pictures,i.CategoryID,i.product_name,i.stock,i.gramaje,i.unitary_price,i.state);n.push(s)}),n}async function q5(t){const e=cn(Hi,"products",t),n=await zi(e);if(!n.exists())throw new Error("Product not found");const r=n.data();return new Yb(n.id,r.description,r.pictures,r.banner_pictures,r.CategoryID,r.product_name,r.stock,r.gramaje,r.unitary_price,n.state)}async function K5(t){if(!t)throw new Error("No file provided for upload.");const e=nn(Hv,`products/${t.name}`),n=await Cv(e,t);return tn(n.ref)}async function G5(t,e){const n=e?await K5(e):null,r=t.stock>=1?"disponible":"No disponible",i={description:t.description,pictures:n,banner_pictures:n,CategoryID:t.CategoryID,product_name:t.product_name,stock:t.stock,unitary_price:t.unitary_price,gramaje:t.gramaje,state:r};if(!i.CategoryID)throw new Error("CategoryID is undefined or not set.");return(await cL(xd(Hi,"products"),i)).id}async function Q5(t,e){const n=Object.entries(e).reduce((i,[s,o])=>(o!==void 0&&(i[s]=o),i),{}),r=cn(Hi,"products",t);await lL(r,n)}async function Y5(t){const e=cn(Hi,"products",t);await uL(e)}async function X5(){const t=xd(Hi,"product_categories"),e=await dv(t),n=[];return e.forEach(r=>{n.push({id:r.id,...r.data()})}),n}const J5="3";function Z5(){const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,d]=I.useState(""),[f,m]=I.useState(!0),w=Mi(),y=T=>e(T.target.value),_=T=>r(T.target.value),g=T=>s(T.target.value),p=T=>a(T.target.value),v=T=>u(T.target.value),E=T=>d(T.target.value),S=async T=>{if(T.preventDefault(),o!==l){m(!1);return}try{await Fj({email:i,password:o,names:`${t} ${n}`,address:"",gender:"",birthday_date:"",ci:"",avatar:"",userTypeId:J5}),w("/")}catch(A){console.error("Error al registrar usuario:",A.message)}};return h.jsx("section",{className:"register-container",children:h.jsx("div",{className:"login-box",children:h.jsxs("form",{onSubmit:S,children:[h.jsx("h2",{children:"Registrarse"}),h.jsxs("div",{className:`input-box ${t?"active":""}`,children:[h.jsx("input",{type:"text",autoComplete:"nope",required:!0,value:t,onChange:y}),h.jsx("label",{children:"Nombre"})]}),h.jsxs("div",{className:`input-box ${n?"active":""}`,children:[h.jsx("input",{type:"text",autoComplete:"nope",required:!0,value:n,onChange:_}),h.jsx("label",{children:"Apellido"})]}),h.jsxs("div",{className:`input-box ${c?"active":""}`,children:[h.jsx("input",{type:"text",autoComplete:"nope",required:!0,value:c,onChange:E}),h.jsx("label",{children:"Dirección"})]}),h.jsxs("div",{className:`input-box ${i?"active":""}`,children:[h.jsx("input",{type:"email",autoComplete:"nope",required:!0,value:i,onChange:g}),h.jsx("label",{children:"Email"})]}),h.jsxs("div",{className:`input-box ${o?"active":""}`,children:[h.jsx("input",{type:"password",autoComplete:"nope",required:!0,value:o,onChange:p}),h.jsx("label",{children:"Contraseña"})]}),h.jsxs("div",{className:`input-box ${l?"active":""}`,children:[h.jsx("input",{type:"password",autoComplete:"nope",required:!0,value:l,onChange:v}),h.jsx("label",{children:"Confirmar Contraseña"})]}),!f&&isClicked&&h.jsx("p",{style:{color:"#FFFF99"},children:"Las contraseñas no coinciden"}),h.jsx("button",{type:"submit",disabled:!f,children:"Registrarse"}),h.jsx("div",{className:"register-link",children:h.jsxs("p",{children:["¿Ya tienes una cuenta? ",h.jsx(lt,{to:"/iniciarsesion",children:"Iniciar sesión"})]})})]})})})}function Xb(){const[t,e]=I.useState({product_name:"",description:"",unitary_price:"",stock:"",category_id:"",gramaje:"",image:null}),[n,r]=I.useState([]);I.useEffect(()=>{(async()=>{const l=(await dv(xd(Hi,"product_categories"))).docs.map(u=>({id:u.id,name:u.data().name}));r(l)})()},[]);const i=o=>{const{name:a,value:l,files:u}=o.target;e(a==="image"?{...t,image:u[0]}:{...t,[a]:l})},s=async o=>{if(o.preventDefault(),!t.image){alert("Por favor, selecciona una imagen para el producto.");return}const a=nn(Hv,`products/${t.image.name}`),l=await Cv(a,t.image),u=await tn(l.ref),c={...t,CategoryID:t.category_id,unitary_price:Number(t.unitary_price),stock:Number(t.stock),gramaje:Number(t.gramaje)};try{console.log(c),await G5({...c,pictures:u},t.image),alert("Producto agregado con éxito")}catch(d){console.error("Error al agregar el producto:",d),alert("Error al agregar el producto. Por favor, revisa la consola para más detalles.")}};return h.jsxs("form",{onSubmit:s,className:"add-product-form",children:[h.jsx("h2",{className:"name",children:"Agregar Producto"}),h.jsx("input",{type:"text",name:"product_name",placeholder:"Nombre del Producto",onChange:i,required:!0}),h.jsx("textarea",{name:"description",placeholder:"Descripción",onChange:i,required:!0}),h.jsxs("select",{name:"category_id",onChange:i,required:!0,children:[h.jsx("option",{value:"",children:"Categoria"}),n.map(o=>h.jsx("option",{value:o.id,children:o.name},o.id))]}),h.jsx("input",{type:"number",name:"unitary_price",placeholder:"Precio Unitario",onChange:i,required:!0}),h.jsx("input",{type:"number",name:"stock",placeholder:"Stock",onChange:i,required:!0}),h.jsx("input",{type:"number",name:"gramaje",placeholder:"Gramaje (g/m²)",onChange:i,required:!0}),h.jsx("input",{type:"file",name:"image",onChange:i,required:!0}),h.jsx("button",{type:"submit",children:"Agregar Producto"})]})}class eF extends I.Component{constructor(){super(...arguments);Yd(this,"state",{userData:null});Yd(this,"loadUserData",async()=>{const n=Wi.currentUser;if(n){const r=cn(Bi,"users",n.uid);try{const i=await zi(r);i.exists()?this.setState({userData:i.data()}):console.log("No se encontró el documento!")}catch(i){console.log("Error al obtener el documento:",i)}}else console.log("El usuario no está autenticado.")})}componentDidMount(){this.loadUserData()}render(){const{userData:n}=this.state;if(!n)return h.jsx("div",{children:"Cargando..."});const{avatar:r,names:i,email:s,gender:o,address:a,birthday_date:l,ci:u,userTypeID:c}=n;return h.jsx("div",{className:"profile-container",children:h.jsxs("div",{className:"profile-card",children:[h.jsx("h2",{className:"my",children:"Mi cuenta"}),h.jsx("div",{className:"avatar-container",children:h.jsx("img",{src:r||"default-avatar.png",alt:"Perfil",className:"avatar"})}),h.jsx("h1",{className:"name",children:i||"Nombre no disponible"}),h.jsx("p",{className:"email",children:s||"Email no disponible"})]})})}}function tF(){const t=[{id:112345,date:"12/12/2021",status:"Entregado",total:1e3},{id:112346,date:"12/12/2021",status:"En camino",total:1600},{id:112347,date:"12/12/2021",status:"Entregado",total:2e3},{id:112348,date:"12/12/2021",status:"Cancelado",total:100}];return h.jsxs("div",{className:"tusordenes",children:[h.jsx("h1",{className:"mainhead",children:"Tus Ordenes"}),h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Nro Orden"}),h.jsx("th",{children:"Fecha"}),h.jsx("th",{children:"Estado"}),h.jsx("th",{children:"Total"})]})}),h.jsx("tbody",{children:t.map((e,n)=>h.jsxs("tr",{children:[h.jsx("td",{children:e.id}),h.jsx("td",{children:e.date}),h.jsx("td",{children:h.jsx("p",{children:e.status})}),h.jsx("td",{children:e.total})]},n))})]})]})}function nF(){return h.jsxs(h.Fragment,{children:[h.jsx(eF,{}),h.jsx(tF,{})]})}function rF(){const[t,e]=I.useState(null);if(I.useEffect(()=>{(async()=>{const d=Wi.currentUser;if(d){const f=cn(Bi,"users",d.uid);try{const m=await zi(f);m.exists()?e(m.data()):console.log("No se encontró el documento!")}catch(m){console.log("Error al obtener el documento:",m)}}else console.log("El usuario no está autenticado.")})()},[]),!t)return h.jsx("div",{children:"Cargando..."});const{avatar:n,names:r,email:i,gender:s,address:o,birthday_date:a,ci:l,userTypeID:u}=t;return h.jsx("div",{className:"user-profile-container",children:h.jsxs("div",{className:"user-cont",children:[h.jsxs("div",{className:"user-image-cont",children:[h.jsx("div",{className:"user-image-div",children:h.jsx("img",{src:n||"/src/presentation/assets/user-profile.png",alt:"perfil",className:"user-img"})}),h.jsxs("div",{className:"below-info",children:[h.jsx("span",{className:"user-info-name",children:r||"Nombre no disponible"}),h.jsx("span",{className:"user-info-email",children:i||"Email no disponible"})]})]}),h.jsxs("div",{className:"user-info",children:[h.jsxs("div",{className:"user-info-div",children:[h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Nombre: "}),h.jsx("span",{className:"user-info-span",children:(r==null?void 0:r.split(" ")[0])||"Nombre"})]}),h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Apellido: "}),h.jsx("span",{children:(r==null?void 0:r.split(" ").slice(1).join(" "))||"Apellido"})]}),h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Fecha de Nacimiento: "}),h.jsx("span",{children:a||""})]})]}),h.jsxs("div",{className:"user-info-div",children:[h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Dirección: "}),h.jsx("span",{children:o||""})]}),h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Correo Electrónico: "}),h.jsx("span",{children:i||""})]}),h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Género: "}),h.jsx("span",{children:s||""})]})]}),h.jsxs("div",{className:"user-info-div",children:[h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Carnet de Identidad: "}),h.jsx("span",{children:l||""})]}),h.jsxs("div",{className:"stat",children:[h.jsx("h4",{children:"Tipo de Usuario:"}),h.jsx("span",{children:u||""})]})]})]})]})})}const iF="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20class='ionicon'%20viewBox='0%200%20512%20512'%3e%3cpath%20d='M402%20168c-2.93%2040.67-33.1%2072-66%2072s-63.12-31.32-66-72c-3-42.31%2026.37-72%2066-72s69%2030.46%2066%2072z'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3cpath%20d='M336%20304c-65.17%200-127.84%2032.37-143.54%2095.41-2.08%208.34%203.15%2016.59%2011.72%2016.59h263.65c8.57%200%2013.77-8.25%2011.72-16.59C463.85%20335.36%20401.18%20304%20336%20304z'%20fill='none'%20stroke='currentColor'%20stroke-miterlimit='10'%20stroke-width='32'/%3e%3cpath%20d='M200%20185.94c-2.34%2032.48-26.72%2058.06-53%2058.06s-50.7-25.57-53-58.06C91.61%20152.15%20115.34%20128%20147%20128s55.39%2024.77%2053%2057.94z'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3cpath%20d='M206%20306c-18.05-8.27-37.93-11.45-59-11.45-52%200-102.1%2025.85-114.65%2076.2-1.65%206.66%202.53%2013.25%209.37%2013.25H154'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='32'/%3e%3c/svg%3e",sF="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20class='ionicon'%20viewBox='0%200%20512%20512'%3e%3cpath%20d='M384%20224v184a40%2040%200%2001-40%2040H104a40%2040%200%2001-40-40V168a40%2040%200%200140-40h167.48'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3cpath%20d='M459.94%2053.25a16.06%2016.06%200%2000-23.22-.56L424.35%2065a8%208%200%20000%2011.31l11.34%2011.32a8%208%200%200011.34%200l12.06-12c6.1-6.09%206.67-16.01.85-22.38zM399.34%2090L218.82%20270.2a9%209%200%2000-2.31%203.93L208.16%20299a3.91%203.91%200%20004.86%204.86l24.85-8.35a9%209%200%20003.93-2.31L422%20112.66a9%209%200%20000-12.66l-9.95-10a9%209%200%2000-12.71%200z'/%3e%3c/svg%3e",oF="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20class='ionicon'%20viewBox='0%200%20512%20512'%3e%3crect%20x='64'%20y='320'%20width='48'%20height='160'%20rx='8'%20ry='8'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3crect%20x='288'%20y='224'%20width='48'%20height='256'%20rx='8'%20ry='8'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3crect%20x='400'%20y='112'%20width='48'%20height='368'%20rx='8'%20ry='8'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3crect%20x='176'%20y='32'%20width='48'%20height='448'%20rx='8'%20ry='8'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='32'/%3e%3c/svg%3e",aF="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20class='ionicon'%20viewBox='0%200%20512%20512'%3e%3cpath%20d='M258.9%2048C141.92%2046.42%2046.42%20141.92%2048%20258.9c1.56%20112.19%2092.91%20203.54%20205.1%20205.1%20117%201.6%20212.48-93.9%20210.88-210.88C462.44%20140.91%20371.09%2049.56%20258.9%2048zm126.42%20327.25a4%204%200%2001-6.14-.32%20124.27%20124.27%200%2000-32.35-29.59C321.37%20329%20289.11%20320%20256%20320s-65.37%209-90.83%2025.34a124.24%20124.24%200%2000-32.35%2029.58%204%204%200%2001-6.14.32A175.32%20175.32%200%200180%20259c-1.63-97.31%2078.22-178.76%20175.57-179S432%20158.81%20432%20256a175.32%20175.32%200%2001-46.68%20119.25z'/%3e%3cpath%20d='M256%20144c-19.72%200-37.55%207.39-50.22%2020.82s-19%2032-17.57%2051.93C191.11%20256%20221.52%20288%20256%20288s64.83-32%2067.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39%20151.44%20275.59%20144%20256%20144z'/%3e%3c/svg%3e";function lF({activepage:t,productos:e}){return h.jsx("div",{className:"navwrapper",children:h.jsxs("div",{className:"subnav secondnav",children:[h.jsxs(lt,{to:"/admin/AdminInfo",className:t==="AdminInfo"?"navbutton selected":"navbutton",children:[h.jsx("div",{className:"navicon",style:{backgroundColor:"transparent"},children:h.jsx("img",{src:aF,alt:"Admin",style:{width:"25px",height:"25px",filter:"invert(100%)"}})}),h.jsx("div",{className:"navlabel",children:"Usuario"})]}),h.jsxs(lt,{to:"/admin/crud-productos",className:t==="crud-productos"?"navbutton selected":"navbutton",children:[h.jsx("div",{className:"navicon",style:{backgroundColor:"transparent"},children:h.jsx("img",{src:sF,alt:"Create",style:{width:"25px",height:"25px",filter:"invert(100%)"}})}),h.jsx("div",{className:"navlabel",children:"Crud Productos"})]}),h.jsxs(lt,{to:"/admin/dashboard",className:t==="dashboard"?"navbutton selected":"navbutton",children:[h.jsx("div",{className:"navicon",style:{backgroundColor:"transparent"},children:h.jsx("img",{src:oF,alt:"Stats",style:{width:"25px",height:"25px",filter:"invert(100%)"}})}),h.jsx("div",{className:"navlabel",children:"Dashboard"})]}),h.jsxs(lt,{to:"/admin/crud-empleados",className:t==="crud-empleados"?"navbutton selected":"navbutton",children:[h.jsx("div",{className:"navicon",style:{backgroundColor:"transparent"},children:h.jsx("img",{src:iF,alt:"People",style:{width:"25px",height:"25px",filter:"invert(100%)"}})}),h.jsx("div",{className:"navlabel",children:"Ver Empleados"})]})]})})}function uF({productos:t}){const[e,n]=I.useState(t),r=Mi(),i=async o=>{try{await Y5(o),n(e.filter(a=>a.id!==o))}catch(a){console.error("Error al eliminar el producto:",a),alert("Error al eliminar el producto. Por favor, revisa la consola para más detalles.")}},s=o=>{r(`/admin/edit-product/${o}`)};return h.jsxs("div",{className:"crud-productos",children:[h.jsx("div",{className:"crud-options",children:h.jsx(lt,{to:"/admin/add-product",children:h.jsxs("button",{children:[h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),"Añadir producto"]})})}),h.jsxs("div",{className:"table-container",children:[h.jsx("table",{children:h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"ID producto"}),h.jsx("th",{children:"Nombre producto"}),h.jsx("th",{children:"Descripción"}),h.jsx("th",{children:"Stock"}),h.jsx("th",{children:"Acciones"})]})})}),h.jsx("div",{className:"scrollable-content",children:h.jsx("table",{children:h.jsx("tbody",{children:t.map(o=>h.jsxs("tr",{children:[h.jsx("td",{children:o.id}),h.jsx("td",{children:o.product_name}),h.jsx("td",{children:h.jsx("p",{children:o.description})}),h.jsx("td",{children:o.stock}),h.jsxs("td",{id:"acciones",children:[h.jsx("button",{id:"editar",onClick:()=>s(o.id),children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})}),h.jsx("button",{id:"borrar",onClick:()=>i(o.id),children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})]})]},o.id))})})})]})]})}function cF(){return h.jsx(h.Fragment,{children:"CrudEmpleados"})}function dF(){return h.jsx(h.Fragment,{children:"Dashboard"})}function Jb(){const[t,e]=I.useState({product_name:"",description:"",unitary_price:"",stock:"",category_id:"",gramaje:"",image:null,imageUrl:""}),[n,r]=I.useState([]),{productId:i}=YE(),s=Mi();I.useEffect(()=>{console.log(i);const l=async()=>{try{const c=await q5(i);e({...c,CategoryID:c.CategoryID,gramaje:c.gramaje,imageUrl:c.imageUrl})}catch(c){console.error("Error fetching product data:",c)}},u=async()=>{try{const c=await X5();r(c)}catch(c){console.error("Error fetching categories:",c)}};l(),u()},[i]);const o=l=>{const{name:u,value:c,files:d}=l.target;if(u==="image"&&d){const f=d[0];e(m=>({...m,image:f})),e(m=>({...m,imageUrl:URL.createObjectURL(f)}))}else e(f=>({...f,[u]:c}))},a=async l=>{l.preventDefault();let u={...t};if(t.image instanceof File)try{const c=nn(Hv,`products/${t.image.name}`),d=await Cv(c,t.image),f=await tn(d.ref);u.imageUrl=f,delete u.image}catch(c){console.error("Error uploading new image:",c);return}try{await Q5(i,u),s("/admin/crud-productos")}catch(c){console.error("Error updating product:",c)}};return t?h.jsxs("div",{className:"edit-product-form",children:[h.jsx("h2",{children:"Editar Producto"}),h.jsxs("form",{onSubmit:a,children:[h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"product_name",children:"Nombre del Producto"}),h.jsx("input",{id:"product_name",type:"text",name:"product_name",value:t.product_name||"",onChange:o,required:!0})]}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"description",children:"Descripción"}),h.jsx("textarea",{id:"description",name:"description",value:t.description||"",onChange:o,required:!0})]}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"category_id",children:"Categoría"}),h.jsxs("select",{id:"CategoryID",name:"category_id",value:t.category_id||"",onChange:o,required:!0,children:[h.jsx("option",{value:"",children:"Categoría"}),n.map(l=>h.jsx("option",{value:l.id,children:l.name},l.id))]})]}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"unitary_price",children:"Precio Unitario"}),h.jsx("input",{id:"unitary_price",type:"number",name:"unitary_price",value:t.unitary_price||"",onChange:o,required:!0})]}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"stock",children:"Stock"}),h.jsx("input",{id:"stock",type:"number",name:"stock",value:t.stock||"",onChange:o,required:!0})]}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"gramaje",children:"Gramaje (g/m²)"}),h.jsx("input",{id:"gramaje",type:"number",name:"gramaje",value:t.gramaje||"",onChange:o,required:!0})]}),h.jsx("img",{src:t.pictures,alt:"Product",className:"product-image"}),h.jsxs("div",{className:"form-field",children:[h.jsx("label",{htmlFor:"image",children:"Imagen"}),h.jsx("input",{type:"file",name:"image",onChange:o}),t.imageUrl&&h.jsx("div",{className:"image-preview",children:h.jsx("img",{src:t.imageUrl,alt:"Vista previa"})})]}),h.jsx("button",{type:"submit",children:"Guardar Cambios"})]})]}):h.jsx("div",{children:"Cargando..."})}function fF({productos:t}){const{activepage:e}=YE();return h.jsx("div",{children:h.jsxs("div",{className:"admin-sidebar",children:[h.jsx("div",{className:"left",children:h.jsx(lF,{activepage:e,productos:t})}),h.jsxs("div",{className:"right",children:[e==="crud-productos"&&h.jsx(uF,{productos:t}),e==="crud-empleados"&&h.jsx(cF,{}),e==="dashboard"&&h.jsx(dF,{}),e==="add-product"&&h.jsx(Xb,{}),e==="edit-product"&&h.jsx(Jb,{}),e==="AdminInfo"&&h.jsx(rF,{})]})]})})}function hF({productos:t}){return h.jsx(h.Fragment,{children:h.jsx(fF,{productos:t})})}function pF(){const[t,e]=I.useState({});return I.useEffect(()=>{(async()=>{try{const r=await tn(nn(mr,"Iconos/whatsapp.png")),i=await tn(nn(mr,"Iconos/facebook.png")),s=await tn(nn(mr,"Iconos/instagram.png")),o=await tn(nn(mr,"Iconos/twitter.png")),a=await tn(nn(mr,"Iconos/shop.png"));e({whatsapp:r,facebook:i,instagram:s,twitter:o,storeIcon:a})}catch(r){console.error("Error al obtener las URL de los iconos:",r)}})()},[]),h.jsxs("footer",{className:"footer",children:[h.jsxs("div",{className:"footer-top",children:[h.jsxs("div",{className:"footer-contact",children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Teléfono:"})," +591 60032422, +591 70841830"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Email:"})," ",h.jsx("a",{href:"mailto:tienda@Chambicitos.com",children:"tienda@Chambicitos.com"})]})]}),h.jsxs("div",{className:"footer-social",children:[h.jsx("a",{href:"https://wa.me/59160032422",target:"_blank",rel:"noopener noreferrer",children:h.jsx("img",{src:t.whatsapp,alt:"WhatsApp"})}),h.jsx("a",{href:"https://www.facebook.com/Chambis",target:"_blank",rel:"noopener noreferrer",children:h.jsx("img",{src:t.facebook,alt:"Facebook"})}),h.jsx("a",{href:"https://www.instagram.com/Chambis",target:"_blank",rel:"noopener noreferrer",children:h.jsx("img",{src:t.instagram,alt:"Instagram"})}),h.jsx("a",{href:"https://twitter.com/Chambis",target:"_blank",rel:"noopener noreferrer",children:h.jsx("img",{src:t.twitter,alt:"Twitter"})})]})]}),h.jsxs("div",{className:"footer-bottom",children:[h.jsxs("div",{className:"footer-legal",children:[h.jsx(lt,{to:"/terminos",children:"Términos y Condiciones"}),h.jsx(lt,{to:"/privacidad",children:"Política de Privacidad"})]}),h.jsxs("div",{className:"footer-brand",children:[h.jsx("img",{src:t.storeIcon}),h.jsx("p",{children:"Tienda Los Chambis"})]}),h.jsx("div",{className:"footer-copy",children:h.jsxs("p",{children:["© ",new Date().getFullYear()," Chambis Developer - Todos los derechos reservados"]})})]})]})}function mF({cartitem:t,addtoCart:e,decreaseQty:n}){const r=t.reduce((i,s)=>i+s.qty*s.unitary_price,0);return h.jsx(h.Fragment,{children:h.jsx("section",{className:"cart-items",children:h.jsxs("div",{className:"contenedor d_flex",children:[h.jsxs("div",{className:"cart-details",children:[t.length===0&&h.jsx("h1",{className:"no-items produto",children:" no hay productos en el carrito"}),t.map(i=>{const s=i.unitary_price*i.qty;return h.jsxs("div",{className:"cart-list product d_flex",children:[h.jsx("div",{className:"img",children:h.jsx("img",{src:i.pictures,alt:""})}),h.jsxs("div",{className:"cart-details",children:[h.jsx("h3",{children:i.product_name}),h.jsxs("h4",{children:[i.unitary_price,".00 * ",i.qty]}),h.jsxs("span",{children:["Bs",s,".00"]})]}),h.jsxs("div",{className:"cart-items-function",children:[h.jsx("div",{className:"removeCart",children:h.jsx("button",{children:h.jsx("i",{className:"fas fa-times"})})}),h.jsxs("div",{className:"cartControl d_flex",children:[h.jsx("button",{className:"incCart",onClick:()=>e(i),children:h.jsx("i",{className:"fa fa-plus"})}),h.jsx("button",{className:"desCart",onClick:()=>n(i),children:h.jsx("i",{className:"fas fa-minus"})})]})]})]})})]}),h.jsxs("div",{className:"cart-total product",children:[h.jsx("h3",{id:"detalle",children:"Detalle del pedido"}),h.jsxs("div",{className:"d_flex",children:[h.jsx("h4",{children:"Precio total :"}),h.jsxs("h3",{id:"precio-total",children:["$",r,".00"]})]})]})]})})})}function gF(){const{productItems:t}=W5,[e,n]=I.useState([]),[r,i]=I.useState([]);I.useEffect(()=>{H5().then(a=>{console.log("Productos obtenidos:",a),n(a)}).catch(a=>{console.error("Error fetching products:",a)})},[]);const s=a=>{const l=r.find(u=>u.id===a.id);i(l?r.map(u=>u.id===a.id?{...l,qty:l.qty+1}:u):[...r,{...a,qty:1}])},o=a=>{const l=r.find(u=>u.id===a.id);l.qty===1?i(r.filter(u=>u.id!==a.id)):i(r.map(u=>u.id===a.id?{...l,qty:l.qty-1}:u))};return h.jsx(B5,{children:h.jsxs(kA,{children:[h.jsx(zj,{cartitem:r}),h.jsxs(yA,{children:[h.jsx(Dn,{path:"/",element:h.jsx($3,{productItems:t,productos:e,addtoCart:s})}),h.jsx(Dn,{path:"/cart",element:h.jsx(mF,{cartitem:r,addtoCart:s,decreaseQty:o})}),h.jsx(Dn,{path:"/iniciarsesion",element:h.jsx($5,{})}),h.jsx(Dn,{path:"/registrarse",element:h.jsx(Z5,{})}),h.jsx(Dn,{path:"/addproduct",element:h.jsx(iu,{children:h.jsx(Xb,{})})}),h.jsx(Dn,{path:"/admin/edit-product/:productId",element:h.jsx(iu,{children:h.jsx(Jb,{})})}),h.jsx(Dn,{path:"/perfil",element:h.jsx(iu,{children:h.jsx(nF,{})})}),h.jsx(Dn,{path:"/admin/:activepage",element:h.jsx(iu,{children:h.jsx(hF,{productos:e})})})]}),h.jsx(pF,{})]})})}lh.createRoot(document.getElementById("root")).render(h.jsx(Vc.StrictMode,{children:h.jsx(gF,{})}));
