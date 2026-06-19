var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function C(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?C(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ae());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ae():ee=!1}}}var ae;if(typeof y==`function`)ae=function(){y(ie)};else if(typeof MessageChannel<`u`){var C=new MessageChannel,oe=C.port2;C.port1.onmessage=ie,ae=function(){oe.postMessage(null)}}else ae=function(){_(ie,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ae()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),C=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case C:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ae:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function ge(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function E(e,t){me++,pe[me]=e.current,e.current=t}var _e=he(null),ve=he(null),ye=he(null),be=he(null);function xe(e,t){switch(E(ye,t),E(ve,e),E(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(_e),E(_e,e)}function Se(){ge(_e),ge(ve),ge(ye)}function Ce(e){e.memoizedState!==null&&E(be,e);var t=_e.current,n=Ud(t,e.type);t!==n&&(E(ve,e),E(_e,n))}function we(e){ve.current===e&&(ge(_e),ge(ve)),be.current===e&&(ge(be),Qf._currentValue=fe)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var D=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return D.call(Lt,e)?!0:D.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function O(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+O(t)):e.value!==``+O(t)&&(e.value=``+O(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,O(n)):Zt(e,o,O(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+O(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+O(n),t=t==null?n:``+O(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+O(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+O(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+O(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=O(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Cu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function k(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,A,Pn,Fn=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Nn=e.screenX-Pn.screenX,A=e.screenY-Pn.screenY):A=Nn=0,Pn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:A}}),In=On(Fn),j=On(h({},Fn,{dataTransfer:0})),Ln=On(h({},jn,{relatedTarget:0})),M=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),N=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),P=On(h({},kn,{data:0})),F={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=On(h({},jn,{key:function(e){if(e.key){var t=F[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=On(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=On(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=On(h({},kn,{newState:0,oldState:0})),Jn=[9,13,27,32],I=vn&&`CompositionEvent`in window,Yn=null;vn&&`documentMode`in document&&(Yn=document.documentMode);var Xn=vn&&`TextEvent`in window&&!Yn,Zn=vn&&(!I||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!I&&er(e,t)?(e=wn(),Cn=Sn=xn=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var L={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!L[e.type]:t===`textarea`}function or(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Od(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){xd(e,0)}function ur(e){if(Gt(Ot(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(vn){var pr;if(vn){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function R(){sr&&(sr.detachEvent(`onpropertychange`,gr),cr=sr=null)}function gr(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,fn(e)),_n(lr,t)}}function _r(e,t,n){e===`focusin`?(R(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,gr)):e===`focusout`&&R()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function yr(e,t){if(e===`click`)return ur(t)}function br(e,t){if(e===`input`||e===`change`)return ur(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!D.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=vn&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==Kt(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Cr(jr,r)||(jr=r,r=Od(Ar,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};vn&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),Nt(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case C:return e=si(31,n,t,a),e.elementType=C,e.lanes=o,e;case y:return fi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=si(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ne:return e=si(13,n,t,a),e.elementType=ne,e.lanes=o,e;case re:return e=si(19,n,t,a),e.elementType=re,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case ie:s=14;break a;case ae:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Je(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<yd.length;n++)X(yd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(eu===null?eu=e:eu.push.apply(eu,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=he(null),Wi=null,Gi=null;function Ki(e,t,n){E(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,ge(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=pd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=w.S;w.S=function(e,t){ru=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=he(null);function _a(){var e=ga.current;return e===null?Bl.pooledCache:e}function va(e,t){t===null?E(ga,ga.current):E(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Bl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function H(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Na(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ae&&Ea(i)===t.type)?(t=a(t,n.props),H(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),H(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),H(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case ae:return t=Ea(t),f(e,t,n)}if(de(t)||ce(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===te)return f(e,ea(e,t),n);Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ae:return n=Ea(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===te)return p(e,t,ea(e,n),r);Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ae:return r=Ea(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===te)return m(e,t,n,ea(t,r),i);Na(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ae&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),H(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),H(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case ae:return o=Ea(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===te)return b(e,r,ea(e,o),c);Na(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,zl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=da;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ua&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Jl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=he(null),Xa=he(0);function Za(e,t){e=Kl,E(Xa,e),E(Ya,t),Kl=e|t.baseLanes}function Qa(){E(Xa,Kl),E(Ya,Ya.current)}function $a(){Kl=Xa.current,ge(Ya),ge(Xa)}var eo=he(null),to=null;function no(e){var t=e.alternate;E(so,so.current&1),E(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){E(so,so.current),E(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(E(so,so.current),E(eo,e),to===null&&(to=e)):ao(e)}function ao(){E(so,so.current),E(eo,eo.current)}function oo(e){ge(eo),to===e&&(to=null),ge(so)}var so=he(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function G(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Ls:Rs,mo=!1,a=n(r,i),mo=!1,po&&(a=So(t,n,r,i)),xo(e),a}function xo(e){w.H=Is;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Zi(e)&&(tc=!0))}function So(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=zs,o=t(n,r)}while(po);return o}function Co(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function wo(){var e=ho!==0;return ho=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function Oo(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Ta(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===te)return $i(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),W,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((lo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Jl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Jl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(tc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=U,a=Oo(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((W||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),Bl===null)throw Error(i(349));o||lo&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=ko(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Ho(e){var t=ni(e,2);t!==null&&vu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),mo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,W,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(V){var n=Bl.formState;if(n!==null){a:{var r=U;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,U,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,U,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),W,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=W;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=ko(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();U.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(U.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=ko(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(zl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||lo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),U.lanes|=e,Jl|=e,n)}function ys(e,t,n,r){return Sr(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(q&261930)?(tc=!0,e.memoizedState=n):(e=_u(),U.lanes|=e,Jl|=e,t):(e=vs(e,n,r),Sr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Ms(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,ma(c,r),gu(e)):js(e,t,r,gu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,fe,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},gu())}function Ts(){return $i(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Ba(n);var r=Va(t,e,n);r!==null&&(vu(r,t,n),Ha(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=ti(e,t,n,r),n!==null&&(vu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,gu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ei(e,t,i,0),Bl===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return vu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&vu(t,e,2)}function Ns(e){var t=e.alternate;return e===U||t!==null&&t===U}function Ps(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Is={readContext:$i,use:jo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Is.useEffectEvent=yo;var Ls={readContext:$i,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(mo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(mo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,U,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Do();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Bl===null)throw Error(i(349));q&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=Bl.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,U)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(zl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:$i,use:jo,useCallback:gs,useContext:$i,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),W.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),W,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:$i,use:jo,useCallback:gs,useContext:$i,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return W===null?vs(n,e,t):ys(n,W.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,W,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(vu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(vu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(vu(t,e,n),Ha(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Yr(e)}function Ks(e){console.error(e)}function qs(e){Yr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=Ba(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Au():n.alternate===null&&ql===0&&(ql=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),qu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),qu(e,r,a)),!1}throw Error(i(435,n.tag))}return qu(e,r,a),Au(),!1}if(V)return t=eo.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Xs(e.stateNode,r,a),Ua(e,a),ql!==4&&(ql=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),$l===null?$l=[o]:$l.push(o),ql!==4&&(ql=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=G(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(V&&s&&ki(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),Qa(),ao(t)):(va(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),Qa(),io(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Fa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(ro(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=Bl,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),vu(r,e,s),ec;Au(),t=uc(e,t,n)}else e=o.treeContext,B=cf(s.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=lc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Qi(t),n=G(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(V&&r&&ki(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(V&&r&&ki(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=La||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=La||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Bi(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:ya()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Zl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(so.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(a?no(t):ao(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(no(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=Bl,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),vu(s,e,r),ec;af(c)||Au(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=ya():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Fa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,E(so,o),nc(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(so,so.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===ie){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ga(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=_i(Error(i(424)),t),Hi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Vd(ye.current).createElement(n),r[_t]=t,r[vt]=e,Q(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,ye.current),Mi=t,Pi=!0,a=B,Zd(t.type)?(lf=a,B=cf(r.firstChild)):B=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=G(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return bc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=_a(),a===null&&(a=Bl,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Du())e.flags|=8192;else throw Da=Ca,xa}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Ql|=t)}function Fc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=_e.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=_e.current,zi(t))Li(t,o);else{var s=Vd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Q(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||Ii(t,!0)}else e=Vd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return Se(),e===null&&wd(t.stateNode.containerInfo),Ic(t),null;case 10:return qi(t.type),Ic(t),null;case 19:if(ge(so),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(ql!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return E(so,so.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>iu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return Ic(t),null}else 2*Ie()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=so.current,E(so,a?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(so),null;case 4:return Se(),null;case 10:return qi(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&ge(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function zc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:ge(so);break;case 10:qi(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&ge(ga);break;case 24:qi(aa)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Y(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Y(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Y(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Y(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Y(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Y(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Y(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Y(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[vt]=t}catch(t){Y(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Q(t,r,n),t[_t]=e,t[vt]=n}catch(t){Y(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,zd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Y(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Y(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Y(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Y(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Y(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Y(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Y(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Y(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Zu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Q(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Q(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Q(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Y(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Y(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Y(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Y(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Y(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Y(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Y(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Y(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Y(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,zl=0,Bl=null,K=null,q=0,Vl=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=null,eu=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return zl&2&&q!==0?q&-q:w.T===null?mt():pd()}function _u(){if(Zl===0)if(!(q&536870912)||V){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Zl=e}else Zl=536870912;return e=eo.current,e!==null&&(e.flags|=32),Zl}function vu(e,t,n){(e===Bl&&(Vl===2||Vl===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,q,Zl,!1)),st(e,n),(!(zl&2)||e!==Bl)&&(e===Bl&&(!(zl&2)&&(Yl|=n),ql===4&&Su(e,q,Zl,!1)),ad(e))}function yu(e,t,n){if(zl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Wl&&!r&&Su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=$l;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Yl|=o,a=4;break a}o=eu,eu=a,o!==null&&(eu===null?eu=o:eu.push.apply(eu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Zl,!Ul);break a;case 2:eu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-Ie(),10<a)){if(Su(r,t,Zl,!Ul),nt(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Kd(bu.bind(null,r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,`Throttled`,-0,0),a);break a}bu(r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,null,-0,0)}}break}while(1);ad(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},jl(t,a,d);var m=(a&62914560)===a?nu-Ie():(a&4194048)===a?ru-Ie():0;if(m=qf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(J.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}J(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function Cu(){return zl&6?!0:(od(0,!1),!1)}function wu(){if(K!==null){if(Vl===0)var e=K.return;else e=K,Gi=Wi=null,Eo(e),Aa=null,ja=0,e=K;for(;e!==null;)zc(e.alternate,e),e=e.return;K=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),Bl=e,K=n=li(e.current,null),q=t,Vl=0,Hl=null,Ul=!1,Wl=rt(e,t),Gl=!1,Ql=Zl=Xl=Yl=Jl=ql=0,eu=$l=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,$r(),n}function Eu(e,t){U=null,w.H=Is,t===ba||t===Sa?(t=Oa(),Vl=3):t===xa?(t=Oa(),Vl=4):Vl=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,K===null&&(ql=1,Js(e,_i(t,e.current)))}function Du(){var e=eo.current;return e===null?!0:(q&4194048)===q?to===null:(q&62914560)===q||q&536870912?e===to:!1}function Ou(){var e=w.H;return w.H=Is,e===null?Is:e}function ku(){var e=w.A;return w.A=Ll,e}function Au(){ql=4,Ul||(q&4194048)!==q&&eo.current!==null||(Wl=!0),!(Jl&134217727)&&!(Yl&134217727)||Bl===null||Su(Bl,q,Zl,!1)}function ju(e,t,n){var r=zl;zl|=2;var i=Ou(),a=ku();(Bl!==e||q!==t)&&(au=null,Tu(e,t)),t=!1;var o=ql;a:do try{if(Vl!==0&&K!==null){var s=K,c=Hl;switch(Vl){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=Vl;if(Vl=0,Hl=null,Lu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=Vl,Vl=0,Hl=null,Lu(e,s,c,l)}}Mu(),o=ql;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,zl=r,w.H=i,w.A=a,K===null&&(Bl=null,q=0,$r()),o}function Mu(){for(;K!==null;)Fu(K)}function Nu(e,t){var n=zl;zl|=2;var r=Ou(),a=ku();Bl!==e||q!==t?(au=null,iu=Ie()+500,Tu(e,t)):Wl=rt(e,t);a:do try{if(Vl!==0&&K!==null){t=K;var o=Hl;b:switch(Vl){case 1:Vl=0,Hl=null,Lu(e,t,o,1);break;case 2:case 9:if(wa(o)){Vl=0,Hl=null,Iu(t);break}t=function(){Vl!==2&&Vl!==9||Bl!==e||(Vl=7),ad(e)},o.then(t,t);break a;case 3:Vl=7;break a;case 4:Vl=5;break a;case 7:wa(o)?(Vl=0,Hl=null,Iu(t)):(Vl=0,Hl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){Vl=0,Hl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Ru(u))}break b}}Vl=0,Hl=null,Lu(e,t,o,5);break;case 6:Vl=0,Hl=null,Lu(e,t,o,6);break;case 8:wu(),ql=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Gi=Wi=null,w.H=r,w.A=a,zl=n,K===null?(Bl=null,q=0,$r(),ql):0}function Pu(){for(;K!==null&&!Pe();)Fu(K)}function Fu(e){var t=Ac(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Ru(e):K=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Eo(t);default:zc(n,t),t=K=ui(t,Kl),t=Ac(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):K=t}function Lu(e,t,n,r){Gi=Wi=null,Eo(t),Aa=null,ja=0;var i=t.return;try{if($s(e,i,t,n,q)){ql=1,Js(e,_i(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;ql=1,Js(e,_i(n,e.current)),K=null;return}t.flags&32768?(V||r===1?e=!0:Wl||q&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Ul);return}e=t.return;var n=Lc(t.alternate,t,Kl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ql===0&&(ql=5)}function zu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);ql=6,K=null}function J(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Wu();while(su!==0);if(zl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,ct(e,n,o,s,c,l),e===Bl&&(K=Bl=null,q=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Qu(Be,function(){return Gu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=zl,zl|=4;try{il(e,t,n)}finally{zl=s,T.p=a,w.T=r}}su=1,Bu(),Vu(),Hu()}}function Bu(){if(su===1){su=0;var e=cu,t=lu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=zl;zl|=4;try{_l(t,e);var a=Bd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=z(s,h),v=z(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{zl=i,T.p=r,w.T=n}}e.current=t,su=2}}function Vu(){if(su===2){su=0;var e=cu,t=lu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=zl;zl|=4;try{al(e,t.alternate,t)}finally{zl=i,T.p=r,w.T=n}}su=3}}function Hu(){if(su===4||su===3){su=0,Fe();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Uu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}uu&3&&Wu(),ad(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,od(0,!1)}}function Uu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Wu(){return Bu(),Vu(),Hu(),Gu()}function Gu(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=pt(uu),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,zl&6)throw Error(i(331));var c=zl;if(zl|=4,Pl(o.current),El(o,o.current,s,n),zl=c,od(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Uu(e,t)}}function Ku(e,t,n){t=_i(n,t),t=Xs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(st(e,2),ad(e))}function Y(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=_i(n,e),n=Zs(2),r=Va(t,n,2),r!==null&&(Qs(n,r,t,e),st(r,2),ad(r));break}}t=t.return}}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Ju.bind(null,e,t,n),t.then(e,e))}function Ju(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Bl===e&&(q&n)===n&&(ql===4||ql===3&&(q&62914560)===q&&300>Ie()-nu?!(zl&2)&&Tu(e,0):Xl|=n,Ql===q&&(Ql=0)),ad(e)}function Yu(e,t){t===0&&(t=at()),e=ni(e,t),e!==null&&(st(e,t),ad(e))}function Xu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Zu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Yu(e,n)}function Qu(e,t){return Me(e,t)}var $u=null,ed=null,td=!1,nd=!1,rd=!1,id=0;function ad(e){e!==ed&&e.next===null&&(ed===null?$u=ed=e:ed=ed.next=e),nd=!0,td||(td=!0,fd())}function od(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=$u;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dd(r,a))}else a=q,a=nt(r,r===Bl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,dd(r,a));r=r.next}while(n);rd=!1}}function sd(){cd()}function cd(){nd=td=!1;var e=0;id!==0&&Gd()&&(e=id);for(var t=Ie(),n=null,r=$u;r!==null;){var i=r.next,a=ld(r,t);a===0?(r.next=null,n===null?$u=i:n.next=i,i===null&&(ed=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}su!==0&&su!==5||od(e,!1),id!==0&&(id=0)}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Bl,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Vl===2||Vl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=ud.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===Bl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),ld(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function dd(e,t){if(Wu())return null;yu(e,t,!0)}function fd(){Yd(function(){zl&6?Me(Re,sd):cd()})}function pd(){if(id===0){var e=ua;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),id=e}return id}function md(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function hd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=md((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?md(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?hd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?hd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var _d=0;_d<qr.length;_d++){var vd=qr[_d];Jr(vd.toLowerCase(),`on`+(vd[0].toUpperCase()+vd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var yd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),bd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));function xd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(bd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=j;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case zr:case Br:case Vr:l=M;break;case Gr:l=Gn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=N;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=k(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=kd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ad(s,c,l,d,!1),u!==null&&f!==null&&Ad(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=dr):v=yr;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(s,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(s,n,i)}var b;if(I)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else nr?er(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Zn&&n.locale!==`ko`&&(nr||x!==`onCompositionStart`?x===`onCompositionEnd`&&nr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,nr=!0)),y=Od(r,x),0<y.length&&(x=new P(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=tr(n),b!==null&&(x.data=b)))),(b=Xn?rr(e,n):ir(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new P(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),gd(s,e,r,n,i)}xd(s,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=k(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=k(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=k(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=k(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Fd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Fd(e,t,`name`,a.name,a,null),Fd(e,t,`formEncType`,a.formEncType,a,null),Fd(e,t,`formMethod`,a.formMethod,a,null),Fd(e,t,`formTarget`,a.formTarget,a,null)):(Fd(e,t,`encType`,a.encType,a,null),Fd(e,t,`method`,a.method,a,null),Fd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,zt(e,n,r))}}function Z(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Q(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Fd(e,t,o,s,n,null)}}a&&Fd(e,t,`srcSet`,n.srcSet,n,null),r&&Fd(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Fd(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Fd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Fd(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Fd(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<yd.length;r++)X(yd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Fd(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Z(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Fd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Fd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Fd(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Fd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Fd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Fd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Fd(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Fd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Fd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Fd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Fd(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Z(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Z(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Fd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Fd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===$?!1:($=e,!0):($=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=Cu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Q(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Q(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Q(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Q(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Q(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Q(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ye.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Q(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Q(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Q(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Q(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Q(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(vu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&vu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=gu();t=ft(t);var n=ni(e,t);n!==null&&vu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Ed(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}ad(a),!(zl&6)&&(iu=Ie()+500,od(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&vu(s,a,2),Cu(),ip(a,2)}if(a=dp(r),a===null&&Ed(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,gu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),Cu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,wd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=c(g()),y=()=>void 0,b=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},x=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},ee={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):x(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let s=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||s==null)throw new te;let c=i<<2|a>>4;if(r.push(c),o!==64){let e=a<<4&240|o>>2;if(r.push(e),s!==64){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},te=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},S=function(e){let t=b(e);return ee.encodeByteArray(t,!0)},ne=function(e){return S(e).replace(/\./g,``)},re=function(e){try{return ee.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};function ie(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}var ae=()=>ie().__FIREBASE_DEFAULTS__,C=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oe=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&re(e[1]);return t&&JSON.parse(t)},se=()=>{try{return y()||ae()||C()||oe()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ce=e=>se()?.emulatorHosts?.[e],le=e=>{let t=ce(e);if(!t)return;let n=t.lastIndexOf(`:`);if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]===`[`?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ue=()=>se()?.config,de=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function w(e,t){if(e.uid)throw Error(`The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`);let n={alg:`none`,type:`JWT`},r=t||`demo-project`,i=e.iat||0,a=e.sub||e.user_id;if(!a)throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:`custom`,identities:{}},...e};return[ne(JSON.stringify(n)),ne(JSON.stringify(o)),``].join(`.`)}function T(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function fe(){let e=se()?.forceEnvironment;if(e===`node`)return!0;if(e===`browser`)return!1;try{return Object.prototype.toString.call(global.process)===`[object process]`}catch{return!1}}function pe(){return!fe()&&!!navigator.userAgent&&navigator.userAgent.includes(`Safari`)&&!navigator.userAgent.includes(`Chrome`)}function me(){try{return typeof indexedDB==`object`}catch{return!1}}function he(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}var ge=`FirebaseError`,E=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ge,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}},_e=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ve(i,n):`Error`;return new E(r,`${this.serviceName}: ${a} (${r}).`,n)}};function ve(e,t){return e.replace(ye,(e,n)=>{let r=t[n];return r==null?`<${n}?>`:String(r)})}var ye=/\{\$([^}]+)}/g;function be(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(xe(n)&&xe(a)){if(!be(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function xe(e){return typeof e==`object`&&!!e}function Se(e){return e&&e._delegate?e._delegate:e}function Ce(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function we(e){return(await fetch(e,{credentials:`include`})).ok}var Te=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},Ee=`[DEFAULT]`,De=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new de;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}else if(n)return null;else throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ke(e))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=Ee){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ee){return this.instances.has(e)}getOptions(e=Ee){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Oe(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ee){return this.component?this.component.multipleInstances?e:Ee:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function Oe(e){return e===Ee?void 0:e}function ke(e){return e.instantiationMode===`EAGER`}var Ae=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new De(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},je=[],D;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(D||={});var Me={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Ne=D.INFO,Pe={[D.DEBUG]:`log`,[D.VERBOSE]:`log`,[D.INFO]:`info`,[D.WARN]:`warn`,[D.ERROR]:`error`},Fe=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=Pe[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Ie=class{constructor(e){this.name=e,this._logLevel=Ne,this._logHandler=Fe,this._userLogHandler=null,je.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?Me[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}},Le=(e,t)=>t.some(t=>e instanceof t),Re,ze;function Be(){return Re||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function Ve(){return ze||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var He=new WeakMap,Ue=new WeakMap,We=new WeakMap,Ge=new WeakMap,Ke=new WeakMap;function qe(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t($e(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&He.set(t,e)}).catch(()=>{}),Ke.set(t,e),t}function Je(e){if(Ue.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});Ue.set(e,t)}var Ye={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return Ue.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||We.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function Xe(e){Ye=e(Ye)}function Ze(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(et(this),t,...n);return We.set(r,t.sort?t.sort():[t]),$e(r)}:Ve().includes(e)?function(...t){return e.apply(et(this),t),$e(He.get(this))}:function(...t){return $e(e.apply(et(this),t))}}function Qe(e){return typeof e==`function`?Ze(e):(e instanceof IDBTransaction&&Je(e),Le(e,Be())?new Proxy(e,Ye):e)}function $e(e){if(e instanceof IDBRequest)return qe(e);if(Ge.has(e))return Ge.get(e);let t=Qe(e);return t!==e&&(Ge.set(e,t),Ke.set(t,e)),t}var et=e=>Ke.get(e);function tt(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=$e(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r($e(o.result),e.oldVersion,e.newVersion,$e(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var nt=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],rt=[`put`,`add`,`delete`,`clear`],it=new Map;function at(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(it.get(t))return it.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=rt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nt.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return it.set(t,a),a}Xe(e=>({...e,get:(t,n,r)=>at(t,n)||e.get(t,n,r),has:(t,n)=>!!at(t,n)||e.has(t,n)}));var ot=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(st(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(` `)}};function st(e){return e.getComponent()?.type===`VERSION`}var ct=`@firebase/app`,lt=`0.14.13`,ut=new Ie(`@firebase/app`),dt=`@firebase/app-compat`,ft=`@firebase/analytics-compat`,pt=`@firebase/analytics`,mt=`@firebase/app-check-compat`,ht=`@firebase/app-check`,gt=`@firebase/auth`,_t=`@firebase/auth-compat`,vt=`@firebase/database`,yt=`@firebase/data-connect`,bt=`@firebase/database-compat`,xt=`@firebase/functions`,St=`@firebase/functions-compat`,Ct=`@firebase/installations`,wt=`@firebase/installations-compat`,Tt=`@firebase/messaging`,Et=`@firebase/messaging-compat`,Dt=`@firebase/performance`,Ot=`@firebase/performance-compat`,kt=`@firebase/remote-config`,At=`@firebase/remote-config-compat`,jt=`@firebase/storage`,Mt=`@firebase/storage-compat`,Nt=`@firebase/firestore`,Pt=`@firebase/ai`,Ft=`@firebase/firestore-compat`,It=`firebase`,Lt=`12.14.0`,Rt=`[DEFAULT]`,zt={[ct]:`fire-core`,[dt]:`fire-core-compat`,[pt]:`fire-analytics`,[ft]:`fire-analytics-compat`,[ht]:`fire-app-check`,[mt]:`fire-app-check-compat`,[gt]:`fire-auth`,[_t]:`fire-auth-compat`,[vt]:`fire-rtdb`,[yt]:`fire-data-connect`,[bt]:`fire-rtdb-compat`,[xt]:`fire-fn`,[St]:`fire-fn-compat`,[Ct]:`fire-iid`,[wt]:`fire-iid-compat`,[Tt]:`fire-fcm`,[Et]:`fire-fcm-compat`,[Dt]:`fire-perf`,[Ot]:`fire-perf-compat`,[kt]:`fire-rc`,[At]:`fire-rc-compat`,[jt]:`fire-gcs`,[Mt]:`fire-gcs-compat`,[Nt]:`fire-fst`,[Ft]:`fire-fst-compat`,[Pt]:`fire-vertex`,"fire-js":`fire-js`,[It]:`fire-js-all`},Bt=new Map,Vt=new Map,O=new Map;function Ht(e,t){try{e.container.addComponent(t)}catch(n){ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ut(e){let t=e.name;if(O.has(t))return ut.debug(`There were multiple attempts to register component ${t}.`),!1;O.set(t,e);for(let t of Bt.values())Ht(t,e);for(let t of Vt.values())Ht(t,e);return!0}function Wt(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Gt(e){return e==null?!1:e.settings!==void 0}var Kt=new _e(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different options or config`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),qt=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Te(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create(`app-deleted`,{appName:this._name})}},Jt=Lt;function Yt(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:Rt,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw Kt.create(`bad-app-name`,{appName:String(i)});if(n||=ue(),!n)throw Kt.create(`no-options`);let a=Bt.get(i);if(a){if(be(n,a.options)&&be(r,a.config))return a;throw Kt.create(`duplicate-app`,{appName:i})}let o=new Ae(i);for(let e of O.values())o.addComponent(e);let s=new qt(n,r,o);return Bt.set(i,s),s}function Xt(e=Rt){let t=Bt.get(e);if(!t&&e===`[DEFAULT]`&&ue())return Yt();if(!t)throw Kt.create(`no-app`,{appName:e});return t}function Zt(e,t,n){let r=zt[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ut.warn(e.join(` `));return}Ut(new Te(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}var Qt=`firebase-heartbeat-database`,$t=1,en=`firebase-heartbeat-store`,tn=null;function nn(){return tn||=tt(Qt,$t,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(e=>{throw Kt.create(`idb-open`,{originalErrorMessage:e.message})}),tn}async function rn(e){try{let t=(await nn()).transaction(en),n=await t.objectStore(en).get(on(e));return await t.done,n}catch(e){if(e instanceof E)ut.warn(e.message);else{let t=Kt.create(`idb-get`,{originalErrorMessage:e?.message});ut.warn(t.message)}}}async function an(e,t){try{let n=(await nn()).transaction(en,`readwrite`);await n.objectStore(en).put(t,on(e)),await n.done}catch(e){if(e instanceof E)ut.warn(e.message);else{let t=Kt.create(`idb-set`,{originalErrorMessage:e?.message});ut.warn(t.message)}}}function on(e){return`${e.name}!${e.options.appId}`}var sn=1024,cn=30,ln=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new fn(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=un();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>cn){let e=mn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ut.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=un(),{heartbeatsToSend:t,unsentEntries:n}=dn(this._heartbeatsCache.heartbeats),r=ne(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ut.warn(e),``}}};function un(){return new Date().toISOString().substring(0,10)}function dn(e,t=sn){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(!e){if(n.push({agent:i.agent,dates:[i.date]}),pn(n)>t){n.pop();break}}else if(e.dates.push(i.date),pn(n)>t){e.dates.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var fn=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return me()?he().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await rn(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return an(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return an(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}};function pn(e){return ne(JSON.stringify({version:2,heartbeats:e})).length}function mn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function hn(e){Ut(new Te(`platform-logger`,e=>new ot(e),`PRIVATE`)),Ut(new Te(`heartbeat`,e=>new ln(e),`PRIVATE`)),Zt(ct,lt,e),Zt(ct,lt,`esm2020`),Zt(`fire-js`,``)}hn(``),Zt(`firebase`,`12.14.0`,`app`);var gn=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},_n={},k,vn;(function(){var e;function t(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(e,t,n){n||=0;let r=Array(16);if(typeof t==`string`)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let a=e.g[3],o;o=t+(a^n&(i^a))+r[0]+3614090360&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[1]+3905402710&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[2]+606105819&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[5]+1200080426&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[6]+2821735955&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[9]+2336552879&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[10]+4294925233&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[13]+4254626195&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[14]+2792965006&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^a&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[6]+3225465664&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[11]+643717713&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[10]+38016083&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[15]+3634488961&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[14]+3275163606&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[3]+4107603335&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[2]+4243563512&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[7]+1735328473&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^a)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[8]+2272392833&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[11]+1839030562&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[4]+1272893353&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[7]+4139469664&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[0]+3936430074&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[3]+3572445317&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[12]+3873151461&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[15]+530742520&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~a))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[7]+1126891415&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[14]+2878612391&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[3]+2399980690&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[10]+4293915773&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[15]+4264355552&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[6]+2734768916&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[11]+3174756917&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[2]+718787259&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}r.prototype.v=function(e,t){t===void 0&&(t=e.length);let n=t-this.blockSize,r=this.C,a=this.h,o=0;for(;o<t;){if(a==0)for(;o<=n;)i(this,e,o),o+=this.blockSize;if(typeof e==`string`){for(;o<t;)if(r[a++]=e.charCodeAt(o++),a==this.blockSize){i(this,r),a=0;break}}else for(;o<t;)if(r[a++]=e[o++],a==this.blockSize){i(this,r),a=0;break}}this.h=a,this.o+=t},r.prototype.A=function(){var e=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=this.o*8;for(var n=e.length-8;n<e.length;++n)e[n]=t&255,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};function a(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function o(e,t){this.h=t;let n=[],r=!0;for(let i=e.length-1;i>=0;i--){let a=e[i]|0;r&&a==t||(n[i]=a,r=!1)}this.g=n}var s={};function c(e){return-128<=e&&e<128?a(e,function(e){return new o([e|0],e<0?-1:0)}):new o([e|0],e<0?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return d;if(e<0)return g(l(-e));let t=[],n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new o(t,0)}function u(e,t){if(e.length==0)throw Error(`number format error: empty string`);if(t||=10,t<2||36<t)throw Error(`radix out of range: `+t);if(e.charAt(0)==`-`)return g(u(e.substring(1),t));if(e.indexOf(`-`)>=0)throw Error(`number format error: interior "-" character`);let n=l(t**8),r=d;for(let a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a);let o=parseInt(e.substring(a,a+i),t);i<8?(i=l(t**+i),r=r.j(i).add(l(o))):(r=r.j(n),r=r.add(l(o)))}return r}var d=c(0),f=c(1),p=c(16777216);e=o.prototype,e.m=function(){if(h(this))return-g(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){let r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e||=10,e<2||36<e)throw Error(`radix out of range: `+e);if(m(this))return`0`;if(h(this))return`-`+g(this).toString(e);let t=l(e**6);var n=this;let r=``;for(;;){let i=b(n,t).g;n=_(n,i.j(t));let a=((n.g.length>0?n.g[0]:n.h)>>>0).toString(e);if(n=i,m(n))return a+r;for(;a.length<6;)a=`0`+a;r=a+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h};function m(e){if(e.h!=0)return!1;for(let t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function h(e){return e.h==-1}e.l=function(e){return e=_(this,e),h(e)?-1:+!m(e)};function g(e){let t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new o(n,~e.h).add(f)}e.abs=function(){return h(this)?g(this):this},e.add=function(e){let t=Math.max(this.g.length,e.g.length),n=[],r=0;for(let i=0;i<=t;i++){let t=r+(this.i(i)&65535)+(e.i(i)&65535),a=(t>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=a>>>16,t&=65535,a&=65535,n[i]=a<<16|t}return new o(n,n[n.length-1]&-2147483648?-1:0)};function _(e,t){return e.add(g(t))}e.j=function(e){if(m(this)||m(e))return d;if(h(this))return h(e)?g(this).j(g(e)):g(g(this).j(e));if(h(e))return g(this.j(g(e)));if(this.l(p)<0&&e.l(p)<0)return l(this.m()*e.m());let t=this.g.length+e.g.length,n=[];for(var r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){let i=this.i(r)>>>16,a=this.i(r)&65535,o=e.i(t)>>>16,s=e.i(t)&65535;n[2*r+2*t]+=a*s,v(n,2*r+2*t),n[2*r+2*t+1]+=i*s,v(n,2*r+2*t+1),n[2*r+2*t+1]+=a*o,v(n,2*r+2*t+1),n[2*r+2*t+2]+=i*o,v(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new o(n,0)};function v(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function b(e,t){if(m(t))throw Error(`division by zero`);if(m(e))return new y(d,d);if(h(e))return t=b(g(e),t),new y(g(t.g),g(t.h));if(h(t))return t=b(e,g(t)),new y(g(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error(`slowDivide_ only works with positive integers.`);for(var n=f,r=t;r.l(e)<=0;)n=x(n),r=x(r);var i=ee(n,1),a=ee(r,1);for(r=ee(r,2),n=ee(n,2);!m(r);){var o=a.add(r);o.l(e)<=0&&(i=i.add(n),a=o),r=ee(r,1),n=ee(n,1)}return t=_(e,i.j(t)),new y(i,t)}for(i=d;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:2**(r-48),a=l(n),o=a.j(t);h(o)||o.l(e)>0;)n-=r,a=l(n),o=a.j(t);m(a)&&(a=f),i=i.add(a),e=_(e,o)}return new y(i,e)}e.B=function(e){return b(this,e).h},e.and=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new o(n,this.h&e.h)},e.or=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new o(n,this.h|e.h)},e.xor=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new o(n,this.h^e.h)};function x(e){let t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new o(n,e.h)}function ee(e,t){let n=t>>5;t%=32;let r=e.g.length-n,i=[];for(let a=0;a<r;a++)i[a]=t>0?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new o(i,e.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,vn=_n.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=u,k=_n.Integer=o}).apply(gn===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:gn);var yn=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},bn={},xn,Sn,Cn,wn,Tn,En,Dn,On;(function(){var e,t=Object.defineProperty;function n(e){e=[typeof globalThis==`object`&&globalThis,e,typeof window==`object`&&window,typeof self==`object`&&self,typeof yn==`object`&&yn];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error(`Cannot find global object`)}var r=n(this);function i(e,n){if(n)a:{var i=r;e=e.split(`.`);for(var a=0;a<e.length-1;a++){var o=e[a];if(!(o in i))break a;i=i[o]}e=e[e.length-1],a=i[e],n=n(a),n!=a&&n!=null&&t(i,e,{configurable:!0,writable:!0,value:n})}}i(`Symbol.dispose`,function(e){return e||Symbol(`Symbol.dispose`)}),i(`Array.prototype.values`,function(e){return e||function(){return this[Symbol.iterator]()}}),i(`Object.entries`,function(e){return e||function(e){var t=[],n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push([n,e[n]]);return t}});var a=a||{},o=this||self;function s(e){var t=typeof e;return t==`object`&&e!=null||t==`function`}function c(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return l=c,l.apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}var f=typeof AsyncContext<`u`&&typeof AsyncContext.Snapshot==`function`?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function p(e){let t=e.length;if(t>0){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function m(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];var n=typeof r;if(n=n==`object`?r?Array.isArray(r)?`array`:n:`null`:n,n==`array`||n==`object`&&typeof r.length==`number`){n=e.length||0;let t=r.length||0;e.length=n+t;for(let i=0;i<t;i++)e[n+i]=r[i]}else e.push(r)}}class h{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function g(e){o.setTimeout(()=>{throw e},0)}function _(){var e=te;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class v{constructor(){this.h=this.g=null}add(e,t){let n=y.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var y=new h(()=>new b,e=>e.reset());class b{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let x,ee=!1,te=new v,S=()=>{let e=Promise.resolve(void 0);x=()=>{e.then(ne)}};function ne(){for(var e;e=_();){try{e.h.call(e.g)}catch(e){g(e)}var t=y;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}ee=!1}function re(){this.u=this.u,this.C=this.C}re.prototype.u=!1,re.prototype.dispose=function(){this.u||(this.u=!0,this.N())},re.prototype[Symbol.dispose]=function(){this.dispose()},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener(`test`,e,t),o.removeEventListener(`test`,e,t)}catch{}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function oe(e,t){ie.call(this,e?e.type:``),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key=``,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType=``,this.i=null,e&&this.init(e,t)}d(oe,ie),oe.prototype.init=function(e,t){let n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget,t||(n==`mouseover`?t=e.fromElement:n==`mouseout`&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=r.clientX===void 0?r.pageX:r.clientX,this.clientY=r.clientY===void 0?r.pageY:r.clientY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX===void 0?e.pageX:e.clientX,this.clientY=e.clientY===void 0?e.pageY:e.clientY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||``,this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);let e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se=`closure_listenable_`+(Math.random()*1e6|0),ce=0;function le(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ce,this.da=this.fa=!1}function ue(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function de(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function w(e,t){for(let n in e)t.call(void 0,e[n],n,e)}function T(e){let t={};for(let n in e)t[n]=e[n];return t}let fe=`constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(` `);function pe(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<fe.length;t++)n=fe[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function me(e){this.src=e,this.g={},this.h=0}me.prototype.add=function(e,t,n,r,i){let a=e.toString();e=this.g[a],e||(e=this.g[a]=[],this.h++);let o=ge(e,t,r,i);return o>-1?(t=e[o],n||(t.fa=!1)):(t=new le(t,this.src,a,!!r,i),t.fa=n,e.push(t)),t};function he(e,t){let n=t.type;if(n in e.g){var r=e.g[n],i=Array.prototype.indexOf.call(r,t,void 0),a;(a=i>=0)&&Array.prototype.splice.call(r,i,1),a&&(ue(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ge(e,t,n,r){for(let i=0;i<e.length;++i){let a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}var E=`closure_lm_`+(Math.random()*1e6|0),_e={};function ve(e,t,n,r,i){if(r&&r.once)return xe(e,t,n,r,i);if(Array.isArray(t)){for(let a=0;a<t.length;a++)ve(e,t[a],n,r,i);return null}return n=Oe(n),e&&e[se]?e.J(t,n,s(r)?!!r.capture:!!r,i):ye(e,t,n,!1,r,i)}function ye(e,t,n,r,i,a){if(!t)throw Error(`Invalid event type`);let o=s(i)?!!i.capture:!!i,c=Ee(e);if(c||(e[E]=c=new me(e)),n=c.add(t,n,r,o,a),n.proxy)return n;if(r=be(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error(`addEventListener and attachEvent are unavailable.`);return n}function be(){function e(n){return t.call(e.src,e.listener,n)}let t=Te;return e}function xe(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)xe(e,t[a],n,r,i);return null}return n=Oe(n),e&&e[se]?e.K(t,n,s(r)?!!r.capture:!!r,i):ye(e,t,n,!0,r,i)}function Se(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)Se(e,t[a],n,r,i);else r=s(r)?!!r.capture:!!r,n=Oe(n),e&&e[se]?(e=e.i,a=String(t).toString(),a in e.g&&(t=e.g[a],n=ge(t,n,r,i),n>-1&&(ue(t[n]),Array.prototype.splice.call(t,n,1),t.length==0&&(delete e.g[a],e.h--)))):(e&&=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ge(t,n,r,i)),(n=e>-1?t[e]:null)&&Ce(n))}function Ce(e){if(typeof e!=`number`&&e&&!e.da){var t=e.src;if(t&&t[se])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(he(n,e),n.h==0&&(n.src=null,t[E]=null)):ue(e)}}}function we(e){return e in _e?_e[e]:_e[e]=`on`+e}function Te(e,t){if(e.da)e=!0;else{t=new oe(t,this);let n=e.listener,r=e.ha||e.src;e.fa&&Ce(e),e=n.call(r,t)}return e}function Ee(e){return e=e[E],e instanceof me?e:null}var De=`__closure_events_fn_`+(Math.random()*1e9>>>0);function Oe(e){return typeof e==`function`?e:(e[De]||(e[De]=function(t){return e.handleEvent(t)}),e[De])}function ke(){re.call(this),this.i=new me(this),this.M=this,this.G=null}d(ke,re),ke.prototype[se]=!0,ke.prototype.removeEventListener=function(e,t,n,r){Se(this,e,t,n,r)};function Ae(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,typeof t==`string`)t=new ie(t,e);else if(t instanceof ie)t.target=t.target||e;else{var i=t;t=new ie(r,e),pe(t,i)}i=!0;let a,o;if(n)for(o=n.length-1;o>=0;o--)a=t.g=n[o],i=je(a,r,!0,t)&&i;if(a=t.g=e,i=je(a,r,!0,t)&&i,i=je(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)a=t.g=n[o],i=je(a,r,!1,t)&&i}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var e=this.i;for(let t in e.g){let n=e.g[t];for(let e=0;e<n.length;e++)ue(n[e]);delete e.g[t],e.h--}}this.G=null},ke.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function je(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){let o=t[a];if(o&&!o.da&&o.capture==n){let t=o.listener,n=o.ha||o.src;o.fa&&he(e.i,o),i=t.call(n,r)!==!1&&i}}return i&&!r.defaultPrevented}function D(e,t){if(typeof e!=`function`)if(e&&typeof e.handleEvent==`function`)e=l(e.handleEvent,e);else throw Error(`Invalid listener argument`);return Number(t)>2147483647?-1:o.setTimeout(e,t||0)}function Me(e){e.g=D(()=>{e.g=null,e.i&&(e.i=!1,Me(e))},e.l);let t=e.h;e.h=null,e.m.apply(null,t)}class Ne extends re{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){re.call(this),this.h=e,this.g={}}d(Pe,re);var Fe=[];function Ie(e){de(e.g,function(e,t){this.g.hasOwnProperty(t)&&Ce(e)},e),e.g={}}Pe.prototype.N=function(){Pe.Z.N.call(this),Ie(this)},Pe.prototype.handleEvent=function(){throw Error(`EventHandler.handleEvent not implemented`)};var Le=o.JSON.stringify,Re=o.JSON.parse,ze=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function Be(){}function Ve(){}var He={OPEN:`a`,hb:`b`,ERROR:`c`,tb:`d`};function Ue(){ie.call(this,`d`)}d(Ue,ie);function We(){ie.call(this,`c`)}d(We,ie);var Ge={},Ke=null;function qe(){return Ke||=new ke}Ge.Ia=`serverreachability`;function Je(e){ie.call(this,Ge.Ia,e)}d(Je,ie);function Ye(e){let t=qe();Ae(t,new Je(t))}Ge.STAT_EVENT=`statevent`;function Xe(e,t){ie.call(this,Ge.STAT_EVENT,e),this.stat=t}d(Xe,ie);function Ze(e){let t=qe();Ae(t,new Xe(t,e))}Ge.Ja=`timingevent`;function Qe(e,t){ie.call(this,Ge.Ja,e),this.size=t}d(Qe,ie);function $e(e,t){if(typeof e!=`function`)throw Error(`Fn must not be null and must be a function`);return o.setTimeout(function(){e()},t)}function et(){this.g=!0}et.prototype.ua=function(){this.g=!1};function tt(e,t,n,r,i,a){e.info(function(){if(e.g)if(a){var o=``,s=a.split(`&`);for(let e=0;e<s.length;e++){var c=s[e].split(`=`);if(c.length>1){let e=c[0];c=c[1];let t=e.split(`_`);o=t.length>=2&&t[1]==`type`?o+(e+`=`+c+`&`):o+(e+`=redacted&`)}}}else o=null;else o=a;return`XMLHTTP REQ (`+r+`) [attempt `+i+`]: `+t+`
`+n+`
`+o})}function nt(e,t,n,r,i,a,o){e.info(function(){return`XMLHTTP RESP (`+r+`) [ attempt `+i+`]: `+t+`
`+n+`
`+a+` `+o})}function rt(e,t,n,r){e.info(function(){return`XMLHTTP TEXT (`+t+`): `+at(e,n)+(r?` `+r:``)})}function it(e,t){e.info(function(){return`TIMEOUT: `+t})}et.prototype.info=function(){};function at(e,t){if(!e.g)return t;if(!t)return null;try{let a=JSON.parse(t);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var n=a[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if(i!=`noop`&&i!=`stop`&&i!=`close`)for(let e=1;e<r.length;e++)r[e]=``}}}}return Le(a)}catch{return t}}var ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},st={ib:`complete`,Fb:`success`,ERROR:`error`,Ga:`abort`,xb:`ready`,yb:`readystatechange`,TIMEOUT:`timeout`,sb:`incrementaldata`,wb:`progress`,lb:`downloadprogress`,Nb:`uploadprogress`},ct;function lt(){}d(lt,Be),lt.prototype.g=function(){return new XMLHttpRequest},ct=new lt;function ut(e){return encodeURIComponent(String(e))}function dt(e){var t=1;e=e.split(`:`);let n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(`:`)),n}function ft(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new Pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pt}function pt(){this.i=null,this.g=``,this.h=!1}var mt={},ht={};function gt(e,t,n){e.M=1,e.A=Ht(Rt(t)),e.u=n,e.R=!0,_t(e,null)}function _t(e,t){e.F=Date.now(),xt(e),e.B=Rt(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),nn(n.i,`t`,r),e.C=0,n=e.j.L,e.h=new pt,e.g=Xn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Ne(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i=`readystatechange`;Array.isArray(i)||(i&&(Fe[0]=i.toString()),i=Fe);for(let e=0;e<i.length;e++){let a=ve(n,i[e],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.J?T(e.J):{},e.u?(e.v||=`POST`,t[`Content-Type`]=`application/x-www-form-urlencoded`,e.g.ea(e.B,e.v,e.u,t)):(e.v=`GET`,e.g.ea(e.B,e.v,null,t)),Ye(),tt(e.i,e.v,e.B,e.l,e.S,e.u)}ft.prototype.ba=function(e){e=e.target;let t=this.O;t&&A(e)==3?t.j():this.Y(e)},ft.prototype.Y=function(e){try{if(e==this.g)a:{let s=A(this.g),c=this.g.ya(),l=this.g.ca();if(!(s<3)&&(s!=3||this.g&&(this.h.h||this.g.la()||Pn(this.g)))){this.K||s!=4||c==7||Ye(c==8||l<=0?3:2),Ct(this);var t=this.g.ca();this.X=t;var n=vt(this);if(this.o=t==200,nt(this.i,this.v,this.B,this.l,this.S,s,t),this.o){if(this.U&&!this.L){b:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader(`X-HTTP-Initial-Response`):null)&&!C(r)){var a=r;break b}}a=null}if(e=a)rt(this.i,this.l,e,`Initial handshake response via X-HTTP-Initial-Response`),this.L=!0,Et(this,e);else{this.o=!1,this.m=3,Ze(12),Tt(this),wt(this);break a}}if(this.R){e=!0;let t;for(;!this.K&&this.C<n.length;)if(t=bt(this,n),t==ht){s==4&&(this.m=4,Ze(14),e=!1),rt(this.i,this.l,null,`[Incomplete Response]`);break}else if(t==mt){this.m=4,Ze(15),rt(this.i,this.l,n,`[Invalid Chunk]`),e=!1;break}else rt(this.i,this.l,t,null),Et(this,t);if(yt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),s!=4||n.length!=0||this.h.h||(this.m=1,Ze(16),e=!1),this.o=this.o&&e,!e)rt(this.i,this.l,n,`[Invalid Chunked Response]`),Tt(this),wt(this);else if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info(`Great, no buffering proxy detected. Bytes received: `+n.length),Un(o),o.P=!0,Ze(11))}}else rt(this.i,this.l,n,null),Et(this,n);s==4&&Tt(this),this.o&&!this.K&&(s==4?Kn(this.j,this):(this.o=!1,xt(this)))}else Fn(this.g),t==400&&n.indexOf(`Unknown SID`)>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),Tt(this),wt(this)}}}catch{}};function vt(e){if(!yt(e))return e.g.la();let t=Pn(e.g);if(t===``)return``;let n=``,r=t.length,i=A(e.g)==4;if(!e.h.i){if(typeof TextDecoder>`u`)return Tt(e),wt(e),``;e.h.i=new o.TextDecoder}for(let a=0;a<r;a++)e.h.h=!0,n+=e.h.i.decode(t[a],{stream:!(i&&a==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}function yt(e){return e.g?e.v==`GET`&&e.M!=2&&e.j.Aa:!1}function bt(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ht:(n=Number(t.substring(n,r)),isNaN(n)?mt:(r+=1,r+n>t.length?ht:(t=t.slice(r,r+n),e.C=r+n,t)))}ft.prototype.cancel=function(){this.K=!0,Tt(this)};function xt(e){e.T=Date.now()+e.H,St(e,e.H)}function St(e,t){if(e.D!=null)throw Error(`WatchDog timer not null`);e.D=$e(l(e.aa,e),t)}function Ct(e){e.D&&=(o.clearTimeout(e.D),null)}ft.prototype.aa=function(){this.D=null;let e=Date.now();e-this.T>=0?(it(this.i,this.B),this.M!=2&&(Ye(),Ze(17)),Tt(this),this.m=2,wt(this)):St(this,this.T-e)};function wt(e){e.j.I==0||e.K||Kn(e.j,e)}function Tt(e){Ct(e);var t=e.O;t&&typeof t.dispose==`function`&&t.dispose(),e.O=null,Ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function Et(e,t){try{var n=e.j;if(n.I!=0&&(n.g==e||jt(n.h,e))){if(!e.L&&jt(n.h,e)&&n.I==3){try{var r=n.Ba.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){a:if(!n.v){if(n.g)if(n.g.F+3e3<e.F)Gn(n),M(n);else break a;Hn(n),Ze(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&n.A==0&&!n.C&&(n.C=$e(l(n.Va,n),6e3));At(n.h)<=1&&n.ta&&(n.ta=void 0)}else Jn(n,11)}else if((e.L||n.g==e)&&Gn(n),!C(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t],u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],n.I==2)if(l[0]==`c`){n.M=l[1],n.ba=l[2];let t=l[3];t!=null&&(n.ka=t,n.j.info(`VER=`+n.ka));let i=l[4];i!=null&&(n.za=i,n.j.info(`SVER=`+n.za));let u=l[5];u!=null&&typeof u==`number`&&u>0&&(r=1.5*u,n.O=r,n.j.info(`backChannelRequestTimeoutMs_=`+r)),r=n;let d=e.g;if(d){let e=d.g?d.g.getResponseHeader(`X-Client-Wire-Protocol`):null;if(e){var a=r.h;a.g||e.indexOf(`spdy`)==-1&&e.indexOf(`quic`)==-1&&e.indexOf(`h2`)==-1||(a.j=a.l,a.g=new Set,a.h&&=(Mt(a,a.h),null))}if(r.G){let e=d.g?d.g.getResponseHeader(`X-HTTP-Session-Id`):null;e&&(r.wa=e,O(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info(`Handshake RTT: `+n.T+`ms`)),r=n;var o=e;if(r.na=Yn(r,r.L?r.ba:null,r.W),o.L){Nt(r.h,o);var s=o,c=r.O;c&&(s.H=c),s.D&&(Ct(s),xt(s)),r.g=o}else Vn(r);n.i.length>0&&P(n)}else l[0]!=`stop`&&l[0]!=`close`||Jn(n,7);else n.I==3&&(l[0]==`stop`||l[0]==`close`?l[0]==`stop`?Jn(n,7):Ln(n):l[0]!=`noop`&&n.l&&n.l.qa(l),n.A=0)}}Ye(4)}catch{}}var Dt=class{constructor(e,t){this.g=e,this.map=t}};function Ot(e){this.l=e||10,o.PerformanceNavigationTiming?(e=o.performance.getEntriesByType(`navigation`),e=e.length>0&&(e[0].nextHopProtocol==`hq`||e[0].nextHopProtocol==`h2`)):e=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kt(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function At(e){return e.h?1:e.g?e.g.size:0}function jt(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Mt(e,t){e.g?e.g.add(t):e.h=t}function Nt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ot.prototype.cancel=function(){if(this.i=Pt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let e of this.g.values())e.cancel();this.g.clear()}};function Pt(e){if(e.h!=null)return e.i.concat(e.h.G);if(e.g!=null&&e.g.size!==0){let t=e.i;for(let n of e.g.values())t=t.concat(n.G);return t}return p(e.i)}var Ft=RegExp(`^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$`);function It(e,t){if(e){e=e.split(`&`);for(let n=0;n<e.length;n++){let r=e[n].indexOf(`=`),i,a=null;r>=0?(i=e[n].substring(0,r),a=e[n].substring(r+1)):i=e[n],t(i,a?decodeURIComponent(a.replace(/\+/g,` `)):``)}}}function Lt(e){this.g=this.o=this.j=``,this.u=null,this.m=this.h=``,this.l=!1;let t;e instanceof Lt?(this.l=e.l,zt(this,e.j),this.o=e.o,this.g=e.g,Bt(this,e.u),this.h=e.h,Vt(this,rn(e.i)),this.m=e.m):e&&(t=String(e).match(Ft))?(this.l=!1,zt(this,t[1]||``,!0),this.o=Ut(t[2]||``),this.g=Ut(t[3]||``,!0),Bt(this,t[4]),this.h=Ut(t[5]||``,!0),Vt(this,t[6]||``,!0),this.m=Ut(t[7]||``)):(this.l=!1,this.i=new Zt(null,this.l))}Lt.prototype.toString=function(){let e=[];var t=this.j;t&&e.push(Wt(t,Kt,!0),`:`);var n=this.g;return(n||t==`file`)&&(e.push(`//`),(t=this.o)&&e.push(Wt(t,Kt,!0),`@`),e.push(ut(n).replace(/%25([0-9a-fA-F]{2})/g,`%$1`)),n=this.u,n!=null&&e.push(`:`,String(n))),(n=this.h)&&(this.g&&n.charAt(0)!=`/`&&e.push(`/`),e.push(Wt(n,n.charAt(0)==`/`?Jt:qt,!0))),(n=this.i.toString())&&e.push(`?`,n),(n=this.m)&&e.push(`#`,Wt(n,Xt)),e.join(``)},Lt.prototype.resolve=function(e){let t=Rt(this),n=!!e.j;n?zt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=e.u!=null;var r=e.h;if(n)Bt(t,e.u);else if(n=!!e.h){if(r.charAt(0)!=`/`)if(this.g&&!this.h)r=`/`+r;else{var i=t.h.lastIndexOf(`/`);i!=-1&&(r=t.h.slice(0,i+1)+r)}if(i=r,i==`..`||i==`.`)r=``;else if(i.indexOf(`./`)!=-1||i.indexOf(`/.`)!=-1){r=i.lastIndexOf(`/`,0)==0,i=i.split(`/`);let e=[];for(let t=0;t<i.length;){let n=i[t++];n==`.`?r&&t==i.length&&e.push(``):n==`..`?((e.length>1||e.length==1&&e[0]!=``)&&e.pop(),r&&t==i.length&&e.push(``)):(e.push(n),r=!0)}r=e.join(`/`)}else r=i}return n?t.h=r:n=e.i.toString()!==``,n?Vt(t,rn(e.i)):n=!!e.m,n&&(t.m=e.m),t};function Rt(e){return new Lt(e)}function zt(e,t,n){e.j=n?Ut(t,!0):t,e.j&&=e.j.replace(/:$/,``)}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error(`Bad port number `+t);e.u=t}else e.u=null}function Vt(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.l)):(n||(t=Wt(t,Yt)),e.i=new Zt(t,e.l))}function O(e,t,n){e.i.set(t,n)}function Ht(e){return O(e,`zx`,Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),e}function Ut(e,t){return e?t?decodeURI(e.replace(/%25/g,`%2525`)):decodeURIComponent(e):``}function Wt(e,t,n){return typeof e==`string`?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,`%$1`)),e):null}function Gt(e){return e=e.charCodeAt(0),`%`+(e>>4&15).toString(16)+(e&15).toString(16)}var Kt=/[#\/\?@]/g,qt=/[#\?:]/g,Jt=/[#\?]/g,Yt=/[#\?@]/g,Xt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qt(e){e.g||(e.g=new Map,e.h=0,e.i&&It(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g,` `)),n)}))}e=Zt.prototype,e.add=function(e,t){Qt(this),this.i=null,e=an(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $t(e,t){Qt(e),t=an(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function en(e,t){return Qt(e),t=an(e,t),e.g.has(t)}e.forEach=function(e,t){Qt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)};function tn(e,t){Qt(e);let n=[];if(typeof t==`string`)en(e,t)&&(n=n.concat(e.g.get(an(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}e.set=function(e,t){return Qt(this),this.i=null,e=an(this,e),en(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=tn(this,e),e.length>0?String(e[0]):t):t};function nn(e,t,n){$t(e,t),n.length>0&&(e.i=null,e.g.set(an(e,t),p(n)),e.h+=n.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return``;let e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];let i=ut(n);n=tn(this,n);for(let t=0;t<n.length;t++){let r=i;n[t]!==``&&(r+=`=`+ut(n[t])),e.push(r)}}return this.i=e.join(`&`)};function rn(e){let t=new Zt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function an(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(Qt(e),e.i=null,e.g.forEach(function(e,t){let n=t.toLowerCase();t!=n&&($t(this,t),nn(this,n,e))},e)),e.j=t}function sn(e,t){let n=new et;if(o.Image){let r=new Image;r.onload=u(ln,n,`TestLoadImage: loaded`,!0,t,r),r.onerror=u(ln,n,`TestLoadImage: error`,!1,t,r),r.onabort=u(ln,n,`TestLoadImage: abort`,!1,t,r),r.ontimeout=u(ln,n,`TestLoadImage: timeout`,!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function cn(e,t){let n=new et,r=new AbortController,i=setTimeout(()=>{r.abort(),ln(n,`TestPingServer: timeout`,!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?ln(n,`TestPingServer: ok`,!0,t):ln(n,`TestPingServer: server error`,!1,t)}).catch(()=>{clearTimeout(i),ln(n,`TestPingServer: error`,!1,t)})}function ln(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch{}}function un(){this.g=new ze}function dn(e){this.i=e.Sb||null,this.h=e.ab||!1}d(dn,Be),dn.prototype.g=function(){return new fn(this.i,this.h)};function fn(e,t){ke.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText=``,this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F=`GET`,this.D=``,this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(fn,ke),e=fn.prototype,e.open=function(e,t){if(this.readyState!=0)throw this.abort(),Error(`Error reopening a connection`);this.F=e,this.D=t,this.readyState=1,hn(this)},e.send=function(e){if(this.readyState!=1)throw this.abort(),Error(`need to call open() first. `);if(this.v.signal.aborted)throw this.abort(),Error(`Request was aborted.`);this.g=!0;let t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||o).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText=``,this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel(`Request was aborted.`).catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType===`arraybuffer`)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(o.ReadableStream!==void 0&&`body`in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error(`responseType must be empty for "streamBinaryChunks" mode responses.`);this.response=[]}else this.response=this.responseText=``,this.B=new TextDecoder;pn(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))};function pn(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array;(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?mn(this):hn(this),this.readyState==3&&pn(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,mn(this))},e.Na=function(e){this.g&&(this.response=e,mn(this))},e.ga=function(){this.g&&mn(this)};function mn(e){e.readyState=4,e.l=null,e.j=null,e.B=null,hn(e)}e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||``},e.getAllResponseHeaders=function(){if(!this.h)return``;let e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+`: `+n[1]),n=t.next();return e.join(`\r
`)};function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fn.prototype,"withCredentials",{get:function(){return this.m===`include`},set:function(e){this.m=e?`include`:`same-origin`}});function gn(e){let t=``;return de(e,function(e,n){t+=n,t+=`:`,t+=e,t+=`\r
`}),t}function _n(e,t,n){a:{for(r in n){var r=!1;break a}r=!0}r||(n=gn(n),typeof e==`string`||O(e,t,n))}function k(e){ke.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D=``,this.o=0,this.l=``,this.j=this.B=this.v=this.A=!1,this.m=null,this.F=``,this.H=!1}d(k,ke);var vn=/^https?$/i,kn=[`POST`,`PUT`];e=k.prototype,e.Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error(`[goog.net.XhrIo] Object is active with another request=`+this.D+`; newUri=`+e);t=t?t.toUpperCase():`GET`,this.D=e,this.l=``,this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ct.g(),this.g.onreadystatechange=f(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){An(this,e);return}if(e=n||``,n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys==`function`&&typeof r.get==`function`)for(let e of r.keys())n.set(e,r.get(e));else throw Error(`Unknown input type for opt_headers: `+String(r));r=Array.from(n.keys()).find(e=>e.toLowerCase()==`content-type`),i=o.FormData&&e instanceof o.FormData,!(Array.prototype.indexOf.call(kn,t,void 0)>=0)||r||i||n.set(`Content-Type`,`application/x-www-form-urlencoded;charset=utf-8`);for(let[e,t]of n)this.g.setRequestHeader(e,t);this.F&&(this.g.responseType=this.F),`withCredentials`in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&=(clearTimeout(this.m),null),this.v=!0,this.g.send(e),this.v=!1}catch(e){An(this,e)}};function An(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,jn(e),Nn(e)}function jn(e){e.A||(e.A=!0,Ae(e,`complete`),Ae(e,`error`))}e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Ae(this,`complete`),Ae(this,`abort`),Nn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),k.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Mn(this):this.Xa())},e.Xa=function(){Mn(this)};function Mn(e){if(e.h&&a!==void 0){if(e.v&&A(e)==4)setTimeout(e.Ca.bind(e),0);else if(Ae(e,`readystatechange`),A(e)==4){e.h=!1;try{let a=e.ca();a:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break a;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){let t=String(e.D).match(Ft)[1]||null;!t&&o.self&&o.self.location&&(t=o.self.location.protocol.slice(0,-1)),r=!vn.test(t?t.toLowerCase():``)}n=r}if(n)Ae(e,`complete`),Ae(e,`success`);else{e.o=6;try{var i=A(e)>2?e.g.statusText:``}catch{i=``}e.l=i+` [`+e.ca()+`]`,jn(e)}}finally{Nn(e)}}}}function Nn(e,t){if(e.g){e.m&&=(clearTimeout(e.m),null);let n=e.g;e.g=null,t||Ae(e,`ready`);try{n.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function A(e){return e.g?e.g.readyState:0}e.ca=function(){try{return A(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:``}catch{return``}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Re(t)}};function Pn(e){try{if(!e.g)return null;if(`response`in e.g)return e.g.response;switch(e.F){case``:case`text`:return e.g.responseText;case`arraybuffer`:if(`mozResponseArrayBuffer`in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Fn(e){let t={};e=(e.g&&A(e)>=2&&e.g.getAllResponseHeaders()||``).split(`\r
`);for(let r=0;r<e.length;r++){if(C(e[r]))continue;var n=dt(e[r]);let i=n[0];if(n=n[1],typeof n!=`string`)continue;n=n.trim();let a=t[i]||[];t[i]=a,a.push(n)}w(t,function(e){return e.join(`, `)})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l==`string`?this.l:String(this.l)};function In(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function j(e){this.za=0,this.i=[],this.j=new et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=In(`failFast`,!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=In(`baseRetryDelayMs`,5e3,e),this.Za=In(`retryDelaySeedMs`,1e4,e),this.Ta=In(`forwardChannelMaxRetries`,2,e),this.va=In(`forwardChannelRequestTimeoutMs`,2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M=``,this.h=new Ot(e&&e.concurrentRequestLimit),this.Ba=new un,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=j.prototype,e.ka=8,e.I=1,e.connect=function(e,t,n,r){Ze(0),this.W=e,this.H=t||{},n&&r!==void 0&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Yn(this,null,this.W),P(this)};function Ln(e){if(N(e),e.I==3){var t=e.V++,n=Rt(e.J);if(O(n,`SID`,e.M),O(n,`RID`,t),O(n,`TYPE`,`terminate`),zn(e,n),t=new ft(e,e.j,t),t.M=2,t.A=Ht(Rt(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.A.toString(),``)}catch{}!n&&o.Image&&(new Image().src=t.A,n=!0),n||(t.g=Xn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),xt(t)}I(e)}function M(e){e.g&&=(Un(e),e.g.cancel(),null)}function N(e){M(e),e.v&&=(o.clearTimeout(e.v),null),Gn(e),e.h.cancel(),e.m&&=(typeof e.m==`number`&&o.clearTimeout(e.m),null)}function P(e){if(!kt(e.h)&&!e.m){e.m=!0;var t=e.Ea;x||S(),ee||=(x(),!0),te.add(t,e),e.D=0}}function F(e,t){return At(e.h)>=e.h.j-+!!e.m?!1:e.m?(e.i=t.G.concat(e.i),!0):e.I==1||e.I==2||e.D>=(e.Sa?0:e.Ta)?!1:(e.m=$e(l(e.Ea,e,t),qn(e,e.D)),e.D++,!0)}e.Ea=function(e){if(this.m)if(this.m=null,this.I==1){if(!e){this.V=Math.floor(Math.random()*1e5),e=this.V++;let i=new ft(this,this.j,e),a=this.o;if(this.U&&(a?(a=T(a),pe(a,this.U)):a=this.U),this.u!==null||this.R||(i.J=a,a=null),this.S)a:{for(var t=0,n=0;n<this.i.length;n++){b:{var r=this.i[n];if(`__data__`in r.map&&(r=r.map.__data__,typeof r==`string`)){r=r.length;break b}r=void 0}if(r===void 0)break;if(t+=r,t>4096){t=n;break a}if(t===4096||n===this.i.length-1){t=n+1;break a}}t=1e3}else t=1e3;t=Bn(this,i,t),n=Rt(this.J),O(n,`RID`,e),O(n,`CVER`,22),this.G&&O(n,`X-HTTP-Session-Id`,this.G),zn(this,n),a&&(this.R?t=`headers=`+ut(gn(a))+`&`+t:this.u&&_n(n,this.u,a)),Mt(this.h,i),this.Ra&&O(n,`TYPE`,`init`),this.S?(O(n,`$req`,t),O(n,`SID`,`null`),i.U=!0,gt(i,n,null)):gt(i,n,t),this.I=2}}else this.I==3&&(e?Rn(this,e):this.i.length==0||kt(this.h)||Rn(this))};function Rn(e,t){var n=t?t.l:e.V++;let r=Rt(e.J);O(r,`SID`,e.M),O(r,`RID`,n),O(r,`AID`,e.K),zn(e,r),e.u&&e.o&&_n(r,e.u,e.o),n=new ft(e,e.j,n,e.D+1),e.u===null&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Bn(e,n,1e3),n.H=Math.round(e.va*.5)+Math.round(e.va*.5*Math.random()),Mt(e.h,n),gt(n,r,t)}function zn(e,t){e.H&&de(e.H,function(e,n){O(t,n,e)}),e.l&&de({},function(e,n){O(t,n,e)})}function Bn(e,t,n){n=Math.min(e.i.length,n);let r=e.l?l(e.l.Ka,e.l,e):null;a:{var i=e.i;let t=-1;for(;;){let e=[`count=`+n];t==-1?n>0?(t=i[0].g,e.push(`ofs=`+t)):t=0:e.push(`ofs=`+t);let c=!0;for(let l=0;l<n;l++){var a=i[l].g;let n=i[l].map;if(a-=t,a<0)t=Math.max(0,i[l].g-100),c=!1;else try{a=`req`+a+`_`||``;try{var o=n instanceof Map?n:Object.entries(n);for(let[t,n]of o){let r=n;s(n)&&(r=Le(n)),e.push(a+t+`=`+encodeURIComponent(r))}}catch(t){throw e.push(a+`type=_badmap`),t}}catch{r&&r(n)}}if(c){o=e.join(`&`);break a}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Vn(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;x||S(),ee||=(x(),!0),te.add(t,e),e.A=0}}function Hn(e){return e.g||e.v||e.A>=3?!1:(e.Y++,e.v=$e(l(e.Da,e),qn(e,e.A)),e.A++,!0)}e.Da=function(){if(this.v=null,Wn(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var e=4*this.T;this.j.info(`BP detection timer enabled: `+e),this.B=$e(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info(`BP detection timeout reached.`),this.j.info(`Buffering proxy detected and switch to long-polling!`),this.F=!1,this.P=!0,Ze(10),M(this),Wn(this))};function Un(e){e.B!=null&&(o.clearTimeout(e.B),e.B=null)}function Wn(e){e.g=new ft(e,e.j,`rpc`,e.Y),e.u===null&&(e.g.J=e.o),e.g.P=0;var t=Rt(e.na);O(t,`RID`,`rpc`),O(t,`SID`,e.M),O(t,`AID`,e.K),O(t,`CI`,e.F?`0`:`1`),!e.F&&e.ia&&O(t,`TO`,e.ia),O(t,`TYPE`,`xmlhttp`),zn(e,t),e.u&&e.o&&_n(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=Ht(Rt(t)),n.u=null,n.R=!0,_t(n,e)}e.Va=function(){this.C!=null&&(this.C=null,M(this),Hn(this),Ze(19))};function Gn(e){e.C!=null&&(o.clearTimeout(e.C),e.C=null)}function Kn(e,t){var n=null;if(e.g==t){Gn(e),Un(e),e.g=null;var r=2}else if(jt(e.h,t))n=t.G,Nt(e.h,t),r=1;else return;if(e.I!=0){if(t.o)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;r=qe(),Ae(r,new Qe(r,n)),P(e)}else Vn(e);else if(i=t.m,i==3||i==0&&t.X>0||!(r==1&&F(e,t)||r==2&&Hn(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Jn(e,5);break;case 4:Jn(e,10);break;case 3:Jn(e,6);break;default:Jn(e,2)}}}function qn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function Jn(e,t){if(e.j.info(`Error code `+t),t==2){var n=l(e.bb,e),r=e.Ua;let t=!r;r=new Lt(r||`//www.google.com/images/cleardot.gif`),o.location&&o.location.protocol==`http`||zt(r,`https`),Ht(r),t?sn(r.toString(),n):cn(r.toString(),n)}else Ze(2);e.I=0,e.l&&e.l.pa(t),I(e),N(e)}e.bb=function(e){e?(this.j.info(`Successfully pinged google.com`),Ze(2)):(this.j.info(`Failed to ping google.com`),Ze(1))};function I(e){if(e.I=0,e.ja=[],e.l){let t=Pt(e.h);(t.length!=0||e.i.length!=0)&&(m(e.ja,t),m(e.ja,e.i),e.h.i.length=0,p(e.i),e.i.length=0),e.l.oa()}}function Yn(e,t,n){var r=n instanceof Lt?Rt(n):new Lt(n);if(r.g!=``)t&&(r.g=t+`.`+r.g),Bt(r,r.u);else{var i=o.location;r=i.protocol,t=t?t+`.`+i.hostname:i.hostname,i=+i.port;let e=new Lt(null);r&&zt(e,r),t&&(e.g=t),i&&Bt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&O(r,n,t),O(r,`VER`,e.ka),zn(e,r),r}function Xn(e,t,n){if(t&&!e.L)throw Error(`Can't create secondary domain capable XhrIo object.`);return t=e.Aa&&!e.ma?new k(new dn({ab:n})):new k(e.ma),t.Fa(e.L),t}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zn(){}e=Zn.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Qn(){}Qn.prototype.g=function(e,t){return new $n(e,t)};function $n(e,t){ke.call(this),this.g=new j(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e[`X-Client-Protocol`]=`webchannel`:e={"X-Client-Protocol":`webchannel`}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e[`X-WebChannel-Content-Type`]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e[`X-WebChannel-Client-Profile`]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t&&=t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new nr(this)}d($n,ke),$n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$n.prototype.close=function(){Ln(this.g)},$n.prototype.o=function(e){var t=this.g;if(typeof e==`string`){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Le(e),e=n);t.i.push(new Dt(t.Ya++,e)),t.I==3&&P(t)},$n.prototype.N=function(){this.g.l=null,delete this.j,Ln(this.g),delete this.g,$n.Z.N.call(this)};function er(e){Ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){a:{for(let n in t){e=n;break a}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}d(er,Ue);function tr(){We.call(this),this.status=1}d(tr,We);function nr(e){this.g=e}d(nr,Zn),nr.prototype.ra=function(){Ae(this.g,`a`)},nr.prototype.qa=function(e){Ae(this.g,new er(e))},nr.prototype.pa=function(e){Ae(this.g,new tr)},nr.prototype.oa=function(){Ae(this.g,`b`)},Qn.prototype.createWebChannel=Qn.prototype.g,$n.prototype.send=$n.prototype.o,$n.prototype.open=$n.prototype.m,$n.prototype.close=$n.prototype.close,On=bn.createWebChannelTransport=function(){return new Qn},Dn=bn.getStatEventTarget=function(){return qe()},En=bn.Event=Ge,Tn=bn.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ot.NO_ERROR=0,ot.TIMEOUT=8,ot.HTTP_ERROR=6,wn=bn.ErrorCode=ot,st.COMPLETE=`complete`,Cn=bn.EventType=st,Ve.EventType=He,He.OPEN=`a`,He.CLOSE=`b`,He.ERROR=`c`,He.MESSAGE=`d`,ke.prototype.listen=ke.prototype.J,Sn=bn.WebChannel=Ve,bn.FetchXmlHttpFactory=dn,k.prototype.listenOnce=k.prototype.K,k.prototype.getLastError=k.prototype.Ha,k.prototype.getLastErrorCode=k.prototype.ya,k.prototype.getStatus=k.prototype.ca,k.prototype.getResponseJson=k.prototype.La,k.prototype.getResponseText=k.prototype.la,k.prototype.send=k.prototype.ea,k.prototype.setWithCredentials=k.prototype.Fa,xn=bn.XhrIo=k}).apply(yn===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:yn);var kn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?`uid:`+this.uid:`anonymous-user`}isEqual(e){return e.uid===this.uid}};kn.UNAUTHENTICATED=new kn(null),kn.GOOGLE_CREDENTIALS=new kn(`google-credentials-uid`),kn.FIRST_PARTY=new kn(`first-party-uid`),kn.MOCK_USER=new kn(`mock-user`);var An=`12.14.0`;function jn(e){An=e}var Mn=new Ie(`@firebase/firestore`);function Nn(){return Mn.logLevel}function A(e,...t){if(Mn.logLevel<=D.DEBUG){let n=t.map(In);Mn.debug(`Firestore (${An}): ${e}`,...n)}}function Pn(e,...t){if(Mn.logLevel<=D.ERROR){let n=t.map(In);Mn.error(`Firestore (${An}): ${e}`,...n)}}function Fn(e,...t){if(Mn.logLevel<=D.WARN){let n=t.map(In);Mn.warn(`Firestore (${An}): ${e}`,...n)}}function In(e){if(typeof e==`string`)return e;try{return function(e){return JSON.stringify(e)}(e)}catch{return e}}function j(e,t,n){let r=`Unexpected state`;typeof t==`string`?r=t:n=t,Ln(e,r,n)}function Ln(e,t,n){let r=`FIRESTORE (${An}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=` CONTEXT: `+JSON.stringify(n)}catch{r+=` CONTEXT: `+n}throw Pn(r),Error(r)}function M(e,t,n,r){let i=`Unexpected state`;typeof n==`string`?i=n:r=n,e||Ln(t,i,r)}function N(e,t){return e}var P={OK:`ok`,CANCELLED:`cancelled`,UNKNOWN:`unknown`,INVALID_ARGUMENT:`invalid-argument`,DEADLINE_EXCEEDED:`deadline-exceeded`,NOT_FOUND:`not-found`,ALREADY_EXISTS:`already-exists`,PERMISSION_DENIED:`permission-denied`,UNAUTHENTICATED:`unauthenticated`,RESOURCE_EXHAUSTED:`resource-exhausted`,FAILED_PRECONDITION:`failed-precondition`,ABORTED:`aborted`,OUT_OF_RANGE:`out-of-range`,UNIMPLEMENTED:`unimplemented`,INTERNAL:`internal`,UNAVAILABLE:`unavailable`,DATA_LOSS:`data-loss`},F=class extends E{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}},Rn=class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},zn=class{constructor(e,t){this.user=t,this.type=`OAuth`,this.headers=new Map,this.headers.set(`Authorization`,`Bearer ${e}`)}},Bn=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(kn.UNAUTHENTICATED)))}shutdown(){}},Vn=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}},Hn=class{constructor(e){this.t=e,this.currentUser=kn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){M(this.o===void 0,42304);let n=this.i,r=e=>this.i===n?Promise.resolve():(n=this.i,t(e)),i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable((()=>r(this.currentUser)))};let a=()=>{let t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{A(`FirebaseAuthCredentialsProvider`,`Auth detected`),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(A(`FirebaseAuthCredentialsProvider`,`Auth not yet detected`),i.resolve(),i=new Rn)}}),0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i===e?t?(M(typeof t.accessToken==`string`,31837,{l:t}),new zn(t.accessToken,this.currentUser)):null:(A(`FirebaseAuthCredentialsProvider`,`getToken aborted due to token change.`),this.getToken()))):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return M(e===null||typeof e==`string`,2055,{h:e}),new kn(e)}},Un=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type=`FirstParty`,this.user=kn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set(`X-Goog-AuthUser`,this.P);let e=this.A();return e&&this.R.set(`Authorization`,e),this.T&&this.R.set(`X-Goog-Iam-Authorization-Token`,this.T),this.R}},Wn=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Un(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(kn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}},Gn=class{constructor(e){this.value=e,this.type=`AppCheck`,this.headers=new Map,e&&e.length>0&&this.headers.set(`x-firebase-appcheck`,this.value)}},Kn=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){M(this.o===void 0,3512);let n=e=>{e.error!=null&&A(`FirebaseAppCheckTokenProvider`,`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,A(`FirebaseAppCheckTokenProvider`,`Received ${n?`new`:`existing`} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};let r=e=>{A(`FirebaseAppCheckTokenProvider`,`AppCheck detected`),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):A(`FirebaseAppCheckTokenProvider`,`AppCheck not yet detected`)}}),0)}getToken(){if(this.p)return Promise.resolve(new Gn(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(M(typeof e.token==`string`,44558,{tokenResult:e}),this.m=e.token,new Gn(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function qn(e){let t=typeof self<`u`&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues==`function`)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}var Jn=class{static newId(){let e=``;for(;e.length<20;){let t=qn(40);for(let n=0;n<t.length;++n)e.length<20&&t[n]<248&&(e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(t[n]%62))}return e}};function I(e,t){return e<t?-1:+(e>t)}function Yn(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return Qn(n)===Qn(i)?I(n,i):Qn(n)?1:-1}return I(e.length,t.length)}var Xn=55296,Zn=57343;function Qn(e){let t=e.charCodeAt(0);return t>=Xn&&t<=Zn}function $n(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}var er=`__name__`,tr=class e{constructor(e,t,n){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&j(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((e=>{n.push(e)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let i=0;i<r;i++){let r=e.compareSegments(t.get(i),n.get(i));if(r!==0)return r}return I(t.length,n.length)}static compareSegments(t,n){let r=e.isNumericId(t),i=e.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?e.extractNumericId(t).compare(e.extractNumericId(n)):Yn(t,n)}static isNumericId(e){return e.startsWith(`__id`)&&e.endsWith(`__`)}static extractNumericId(e){return k.fromString(e.substring(4,e.length-2))}},nr=class e extends tr{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join(`/`)}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join(`/`)}static fromString(...t){let n=[];for(let e of t){if(e.indexOf(`//`)>=0)throw new F(P.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);n.push(...e.split(`/`).filter((e=>e.length>0)))}return new e(n)}static emptyPath(){return new e([])}},rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ir=class e extends tr{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(e){return rr.test(e)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,`\\\\`).replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(`.`)}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===`__name__`}static keyField(){return new e([er])}static fromServerFormat(t){let n=[],r=``,i=0,a=()=>{if(r.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=``},o=!1;for(;i<t.length;){let e=t[i];if(e===`\\`){if(i+1===t.length)throw new F(P.INVALID_ARGUMENT,`Path has trailing escape character: `+t);let e=t[i+1];if(e!==`\\`&&e!==`.`&&e!=="`")throw new F(P.INVALID_ARGUMENT,`Path has invalid escape sequence: `+t);r+=e,i+=2}else e==="`"?(o=!o,i++):e!==`.`||o?(r+=e,i++):(a(),i++)}if(a(),o)throw new F(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}},L=class e{constructor(e){this.path=e}static fromPath(t){return new e(nr.fromString(t))}static fromName(t){return new e(nr.fromString(t).popFirst(5))}static empty(){return new e(nr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nr.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(t){return new e(new nr(t.slice()))}};function ar(e,t,n){if(!n)throw new F(P.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function or(e,t,n,r){if(!0===t&&!0===r)throw new F(P.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sr(e){if(!L.isDocumentKey(e))throw new F(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cr(e){return typeof e==`object`&&!!e&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function lr(e){if(e===void 0)return`undefined`;if(e===null)return`null`;if(typeof e==`string`)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e==`number`||typeof e==`boolean`)return``+e;if(typeof e==`object`){if(e instanceof Array)return`an array`;{let t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:`an object`}}return typeof e==`function`?`a function`:j(12329,{type:typeof e})}function ur(e,t){if(`_delegate`in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new F(P.INVALID_ARGUMENT,`Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?`);{let n=lr(e);throw new F(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function dr(e,t){let n={typeString:e};return t&&(n.value=t),n}function fr(e,t){if(!cr(e))throw new F(P.INVALID_ARGUMENT,`JSON must be an object`);let n;for(let r in t)if(t[r]){let i=t[r].typeString,a=`value`in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&o!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new F(P.INVALID_ARGUMENT,n);return!0}var pr=-62135596800,mr=1e6,hr=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3);return new e(n,Math.floor((t-1e3*n)*mr))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new F(P.INVALID_ARGUMENT,`Timestamp nanoseconds out of range: `+t);if(e<pr||e>=253402300800)throw new F(P.INVALID_ARGUMENT,`Timestamp seconds out of range: `+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mr}_compareTo(e){return this.seconds===e.seconds?I(this.nanoseconds,e.nanoseconds):I(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return`Timestamp(seconds=`+this.seconds+`, nanoseconds=`+this.nanoseconds+`)`}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(fr(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){let e=this.seconds-pr;return String(e).padStart(12,`0`)+`.`+String(this.nanoseconds).padStart(9,`0`)}};hr._jsonSchemaVersion=`firestore/timestamp/1.0`,hr._jsonSchema={type:dr(`string`,hr._jsonSchemaVersion),seconds:dr(`number`),nanoseconds:dr(`number`)};var R=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new hr(0,0))}static max(){return new e(new hr(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return`SnapshotVersion(`+this.timestamp.toString()+`)`}toTimestamp(){return this.timestamp}},gr=-1,_r=class{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}};_r.UNKNOWN_ID=-1;function vr(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new br(R.fromTimestamp(r===1e9?new hr(n+1,0):new hr(n,r)),L.empty(),t)}function yr(e){return new br(e.readTime,e.key,gr)}var br=class e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new e(R.min(),L.empty(),gr)}static max(){return new e(R.max(),L.empty(),gr)}};function xr(e,t){let n=e.readTime.compareTo(t.readTime);return n===0?(n=L.comparator(e.documentKey,t.documentKey),n===0?I(e.largestBatchId,t.largestBatchId):n):n}var Sr=`The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.`,Cr=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}};async function wr(e){if(e.code!==P.FAILED_PRECONDITION||e.message!==Sr)throw e;A(`LocalStore`,`Unexpectedly lost primary lease`)}var z=class e{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(t,n){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e(((e,r)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(e,r)},this.catchCallback=t=>{this.wrapFailure(n,t).next(e,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(t){try{let n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):e.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):e.reject(n)}static resolve(t){return new e(((e,n)=>{e(t)}))}static reject(t){return new e(((e,n)=>{n(t)}))}static waitFor(t){return new e(((e,n)=>{let r=0,i=0,a=!1;t.forEach((t=>{++r,t.next((()=>{++i,a&&i===r&&e()}),(e=>n(e)))})),a=!0,i===r&&e()}))}static or(t){let n=e.resolve(!1);for(let r of t)n=n.next((t=>t?e.resolve(t):r()));return n}static forEach(e,t){let n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(t,n){return new e(((e,r)=>{let i=t.length,a=Array(i),o=0;for(let s=0;s<i;s++){let c=s;n(t[c]).next((t=>{a[c]=t,++o,o===i&&e(a)}),(e=>r(e)))}}))}static doWhile(t,n){return new e(((e,r)=>{let i=()=>{!0===t()?n().next((()=>{i()}),r):e()};i()}))}};function Tr(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(`.`).slice(0,2).join(`.`):`-1`;return Number(n)}function Er(e){return e.name===`IndexedDbTransactionError`}var Dr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}};Dr.ce=-1;var Or=-1;function kr(e){return e==null}function Ar(e){return e===0&&1/e==-1/0}function jr(e){return typeof e==`number`&&Number.isInteger(e)&&!Ar(e)&&e<=2**53-1&&e>=-(2**53-1)}var Mr=``;function Nr(e){let t=``;for(let n=0;n<e.length;n++)t.length>0&&(t=Fr(t)),t=Pr(e.get(n),t);return Fr(t)}function Pr(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case`\0`:n+=``;break;case Mr:n+=``;break;default:n+=r}}return n}function Fr(e){return e+``}function Ir(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Lr(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Rr(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}var zr=class e{constructor(e,t){this.comparator=e,this.root=t||Vr.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Vr.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){let e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(`, `)}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}},Br=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Vr=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??e.EMPTY,this.right=a??e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return 2**this.check()<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw j(27949);return e+ +!this.isRed()}};Vr.EMPTY=null,Vr.RED=!0,Vr.BLACK=!1,Vr.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Vr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Hr=class e{constructor(e){this.comparator=e,this.data=new zr(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t===void 0?this.data.getIterator():this.data.getIteratorFrom(t);n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ur(this.data.getIterator())}getIteratorFrom(e){return new Ur(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let e=n.getNext().key,t=r.getNext().key;if(this.comparator(e,t)!==0)return!1}return!0}toArray(){let e=[];return this.forEach((t=>{e.push(t)})),e}toString(){let e=[];return this.forEach((t=>e.push(t))),`SortedSet(`+e.toString()+`)`}copy(t){let n=new e(this.comparator);return n.data=t,n}},Ur=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}},Wr=class e{constructor(e){this.fields=e,e.sort(ir.comparator)}static empty(){return new e([])}unionWith(t){let n=new Hr(ir.comparator);for(let e of this.fields)n=n.add(e);for(let e of t)n=n.add(e);return new e(n.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $n(this.fields,e.fields,((e,t)=>e.isEqual(t)))}},Gr=class extends Error{constructor(){super(...arguments),this.name=`Base64DecodeError`}},Kr=class e{constructor(e){this.binaryString=e}static fromBase64String(t){return new e(function(e){try{return atob(e)}catch(e){throw typeof DOMException<`u`&&e instanceof DOMException?new Gr(`Invalid base64 string: `+e):e}}(t))}static fromUint8Array(t){return new e(function(e){let t=``;for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return I(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Kr.EMPTY_BYTE_STRING=new Kr(``);var qr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(e){if(M(!!e,39018),typeof e==`string`){let t=0,n=qr.exec(e);if(M(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+`000000000`).substr(0,9),t=Number(e)}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Yr(e.seconds),nanos:Yr(e.nanos)}}function Yr(e){return typeof e==`number`?e:typeof e==`string`?Number(e):0}function Xr(e){return typeof e==`string`?Kr.fromBase64String(e):Kr.fromUint8Array(e)}var Zr=`server_timestamp`,Qr=`__type__`,$r=`__previous_value__`,ei=`__local_write_time__`;function ti(e){return(e?.mapValue?.fields||{})[Qr]?.stringValue===Zr}function ni(e){let t=e.mapValue.fields[$r];return ti(t)?ni(t):t}function ri(e){let t=Jr(e.mapValue.fields[ei].timestampValue);return new hr(t.seconds,t.nanos)}var ii=class{constructor(e,t,n,r,i,a,o,s,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=s,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=u}},ai=`(default)`,oi=class e{constructor(e,t){this.projectId=e,this.database=t||ai}static empty(){return new e(``,``)}get isDefaultDatabase(){return this.database===ai}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};function si(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,[`projectId`]))throw new F(P.INVALID_ARGUMENT,`"projectId" not provided in firebase.initializeApp.`);return new oi(e.options.projectId,t)}var ci=`__type__`,li=`__max__`,ui={mapValue:{fields:{__type__:{stringValue:li}}}},di=`__vector__`,fi=`value`;function pi(e){return`nullValue`in e?0:`booleanValue`in e?1:`integerValue`in e||`doubleValue`in e?2:`timestampValue`in e?3:`stringValue`in e?5:`bytesValue`in e?6:`referenceValue`in e?7:`geoPointValue`in e?8:`arrayValue`in e?9:`mapValue`in e?ti(e)?4:Ai(e)?9007199254740991:Oi(e)?10:11:j(28295,{value:e})}function mi(e,t){if(e===t)return!0;let n=pi(e);if(n!==pi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ri(e).isEqual(ri(t));case 3:return function(e,t){if(typeof e.timestampValue==`string`&&typeof t.timestampValue==`string`&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=Jr(e.timestampValue),r=Jr(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xr(e.bytesValue).isEqual(Xr(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Yr(e.geoPointValue.latitude)===Yr(t.geoPointValue.latitude)&&Yr(e.geoPointValue.longitude)===Yr(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if(`integerValue`in e&&`integerValue`in t)return Yr(e.integerValue)===Yr(t.integerValue);if(`doubleValue`in e&&`doubleValue`in t){let n=Yr(e.doubleValue),r=Yr(t.doubleValue);return n===r?Ar(n)===Ar(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return $n(e.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ir(n)!==Ir(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(r[e]===void 0||!mi(n[e],r[e])))return!1;return!0}(e,t);default:return j(52216,{left:e})}}function hi(e,t){return(e.values||[]).find((e=>mi(e,t)))!==void 0}function gi(e,t){if(e===t)return 0;let n=pi(e),r=pi(t);if(n!==r)return I(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return I(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=Yr(e.integerValue||e.doubleValue),r=Yr(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return _i(e.timestampValue,t.timestampValue);case 4:return _i(ri(e),ri(t));case 5:return Yn(e.stringValue,t.stringValue);case 6:return function(e,t){let n=Xr(e),r=Xr(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split(`/`),r=t.split(`/`);for(let e=0;e<n.length&&e<r.length;e++){let t=I(n[e],r[e]);if(t!==0)return t}return I(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=I(Yr(e.latitude),Yr(t.latitude));return n===0?I(Yr(e.longitude),Yr(t.longitude)):n}(e.geoPointValue,t.geoPointValue);case 9:return vi(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[fi]?.arrayValue,a=r[fi]?.arrayValue,o=I(i?.values?.length||0,a?.values?.length||0);return o===0?vi(i,a):o}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ui.mapValue&&t===ui.mapValue)return 0;if(e===ui.mapValue)return 1;if(t===ui.mapValue)return-1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){let t=Yn(r[e],a[e]);if(t!==0)return t;let o=gi(n[r[e]],i[a[e]]);if(o!==0)return o}return I(r.length,a.length)}(e.mapValue,t.mapValue);default:throw j(23264,{he:n})}}function _i(e,t){if(typeof e==`string`&&typeof t==`string`&&e.length===t.length)return I(e,t);let n=Jr(e),r=Jr(t),i=I(n.seconds,r.seconds);return i===0?I(n.nanos,r.nanos):i}function vi(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=gi(n[e],r[e]);if(t)return t}return I(n.length,r.length)}function yi(e){return bi(e)}function bi(e){return`nullValue`in e?`null`:`booleanValue`in e?``+e.booleanValue:`integerValue`in e?``+e.integerValue:`doubleValue`in e?``+e.doubleValue:`timestampValue`in e?function(e){let t=Jr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):`stringValue`in e?e.stringValue:`bytesValue`in e?function(e){return Xr(e).toBase64()}(e.bytesValue):`referenceValue`in e?function(e){return L.fromName(e).toString()}(e.referenceValue):`geoPointValue`in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):`arrayValue`in e?function(e){let t=`[`,n=!0;for(let r of e.values||[])n?n=!1:t+=`,`,t+=bi(r);return t+`]`}(e.arrayValue):`mapValue`in e?function(e){let t=Object.keys(e.fields||{}).sort(),n=`{`,r=!0;for(let i of t)r?r=!1:n+=`,`,n+=`${i}:${bi(e.fields[i])}`;return n+`}`}(e.mapValue):j(61005,{value:e})}function xi(e){switch(pi(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let t=ni(e);return t?16+xi(t):16;case 5:return 2*e.stringValue.length;case 6:return Xr(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce(((e,t)=>e+xi(t)),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Lr(e.fields,((e,n)=>{t+=e.length+xi(n)})),t}(e.mapValue);default:throw j(13486,{value:e})}}function Si(e){return!!e&&`integerValue`in e}function Ci(e){return Si(e)||function(e){return!!e&&`doubleValue`in e}(e)}function wi(e){return!!e&&`arrayValue`in e}function Ti(e){return!!e&&`nullValue`in e}function Ei(e){return!!e&&`doubleValue`in e&&isNaN(Number(e.doubleValue))}function Di(e){return!!e&&`mapValue`in e}function Oi(e){return(e?.mapValue?.fields||{})[ci]?.stringValue===di}function ki(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue==`object`)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return Lr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ki(n))),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ki(e.arrayValue.values[n]);return t}return{...e}}function Ai(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===li}var ji=class e{constructor(e){this.value=e}static empty(){return new e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(t)}setAll(e){let t=ir.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ki(e):r.push(i.lastSegment())}));let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());Di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Di(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Lr(t,((t,n)=>e[t]=n));for(let t of n)delete e[t]}clone(){return new e(ki(this.value))}};function Mi(e){let t=[];return Lr(e.fields,((e,n)=>{let r=new ir([e]);if(Di(n)){let e=Mi(n.mapValue).fields;if(e.length===0)t.push(r);else for(let n of e)t.push(r.child(n))}else t.push(r)})),new Wr(t)}var B=class e{constructor(e,t,n,r,i,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(t){return new e(t,0,R.min(),R.min(),R.min(),ji.empty(),0)}static newFoundDocument(t,n,r,i){return new e(t,1,n,R.min(),r,i,0)}static newNoDocument(t,n){return new e(t,2,n,R.min(),R.min(),ji.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,R.min(),R.min(),ji.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ji.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}},V=class{constructor(e,t){this.position=e,this.inclusive=t}};function Ni(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let a=t[i],o=e.position[i];if(r=a.field.isKeyField()?L.comparator(L.fromName(o.referenceValue),n.key):gi(o,n.data.field(a.field)),a.dir===`desc`&&(r*=-1),r!==0)break}return r}function Pi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!mi(e.position[n],t.position[n]))return!1;return!0}var Fi=class{constructor(e,t=`asc`){this.field=e,this.dir=t}};function Ii(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}var Li=class{},Ri=class e extends Li{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(t,n,r){return t.isKeyField()?n===`in`||n===`not-in`?this.createKeyFieldInFilter(t,n,r):new Ki(t,n,r):n===`array-contains`?new Xi(t,r):n===`in`?new Zi(t,r):n===`not-in`?new Qi(t,r):n===`array-contains-any`?new $i(t,r):new e(t,n,r)}static createKeyFieldInFilter(e,t,n){return t===`in`?new qi(e,n):new Ji(e,n)}matches(e){let t=e.data.field(this.field);return this.op===`!=`?t!==null&&t.nullValue===void 0&&this.matchesComparison(gi(t,this.value)):t!==null&&pi(this.value)===pi(t)&&this.matchesComparison(gi(t,this.value))}matchesComparison(e){switch(this.op){case`<`:return e<0;case`<=`:return e<=0;case`==`:return e===0;case`!=`:return e!==0;case`>`:return e>0;case`>=`:return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return[`<`,`<=`,`>`,`>=`,`!=`,`not-in`].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},zi=class e extends Li{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(t,n){return new e(t,n)}matches(e){return Bi(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}};function Bi(e){return e.op===`and`}function Vi(e){return Hi(e)&&Bi(e)}function Hi(e){for(let t of e.filters)if(t instanceof zi)return!1;return!0}function Ui(e){if(e instanceof Ri)return e.field.canonicalString()+e.op.toString()+yi(e.value);if(Vi(e))return e.filters.map((e=>Ui(e))).join(`,`);{let t=e.filters.map((e=>Ui(e))).join(`,`);return`${e.op}(${t})`}}function Wi(e,t){return e instanceof Ri?function(e,t){return t instanceof Ri&&e.op===t.op&&e.field.isEqual(t.field)&&mi(e.value,t.value)}(e,t):e instanceof zi?function(e,t){return t instanceof zi&&e.op===t.op&&e.filters.length===t.filters.length?e.filters.reduce(((e,n,r)=>e&&Wi(n,t.filters[r])),!0):!1}(e,t):void j(19439)}function Gi(e){return e instanceof Ri?function(e){return`${e.field.canonicalString()} ${e.op} ${yi(e.value)}`}(e):e instanceof zi?function(e){return e.op.toString()+` {`+e.getFilters().map(Gi).join(` ,`)+`}`}(e):`Filter`}var Ki=class extends Ri{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},qi=class extends Ri{constructor(e,t){super(e,`in`,t),this.keys=Yi(`in`,t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}},Ji=class extends Ri{constructor(e,t){super(e,`not-in`,t),this.keys=Yi(`not-in`,t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}};function Yi(e,t){return(t.arrayValue?.values||[]).map((e=>L.fromName(e.referenceValue)))}var Xi=class extends Ri{constructor(e,t){super(e,`array-contains`,t)}matches(e){let t=e.data.field(this.field);return wi(t)&&hi(t.arrayValue,this.value)}},Zi=class extends Ri{constructor(e,t){super(e,`in`,t)}matches(e){let t=e.data.field(this.field);return t!==null&&hi(this.value.arrayValue,t)}},Qi=class extends Ri{constructor(e,t){super(e,`not-in`,t)}matches(e){if(hi(this.value.arrayValue,{nullValue:`NULL_VALUE`}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hi(this.value.arrayValue,t)}},$i=class extends Ri{constructor(e,t){super(e,`array-contains-any`,t)}matches(e){let t=e.data.field(this.field);return!(!wi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>hi(this.value.arrayValue,e)))}},ea=class{constructor(e,t=null,n=[],r=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=o,this.Te=null}};function ta(e,t=null,n=[],r=[],i=null,a=null,o=null){return new ea(e,t,n,r,i,a,o)}function na(e){let t=N(e);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+=`|cg:`+t.collectionGroup),e+=`|f:`,e+=t.filters.map((e=>Ui(e))).join(`,`),e+=`|ob:`,e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(`,`),kr(t.limit)||(e+=`|l:`,e+=t.limit),t.startAt&&(e+=`|lb:`,e+=t.startAt.inclusive?`b:`:`a:`,e+=t.startAt.position.map((e=>yi(e))).join(`,`)),t.endAt&&(e+=`|ub:`,e+=t.endAt.inclusive?`a:`:`b:`,e+=t.endAt.position.map((e=>yi(e))).join(`,`)),t.Te=e}return t.Te}function ra(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ii(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Wi(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Pi(e.startAt,t.startAt)&&Pi(e.endAt,t.endAt)}function ia(e){return L.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}var aa=class{constructor(e,t=null,n=[],r=[],i=null,a=`F`,o=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=s,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}};function oa(e,t,n,r,i,a,o,s){return new aa(e,t,n,r,i,a,o,s)}function sa(e){return new aa(e)}function ca(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return L.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function ua(e){return e.collectionGroup!==null}function da(e){let t=N(e);if(t.Ie===null){t.Ie=[];let e=new Set;for(let n of t.explicitOrderBy)t.Ie.push(n),e.add(n.field.canonicalString());let n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:`asc`;(function(e){let t=new Hr(ir.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new Fi(r,n))})),e.has(ir.keyField().canonicalString())||t.Ie.push(new Fi(ir.keyField(),n))}return t.Ie}function fa(e){let t=N(e);return t.Ee||=pa(t,da(e)),t.Ee}function pa(e,t){if(e.limitType===`F`)return ta(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{let t=e.dir===`desc`?`asc`:`desc`;return new Fi(e.field,t)}));let n=e.endAt?new V(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new V(e.startAt.position,e.startAt.inclusive):null;return ta(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ma(e,t,n){return new aa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ha(e,t){return ra(fa(e),fa(t))&&e.limitType===t.limitType}function ga(e){return`${na(fa(e))}|lt:${e.limitType}`}function _a(e){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=` collectionGroup=`+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Gi(e))).join(`, `)}]`),kr(e.limit)||(t+=`, limit: `+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(`, `)}]`),e.startAt&&(t+=`, startAt: `,t+=e.startAt.inclusive?`b:`:`a:`,t+=e.startAt.position.map((e=>yi(e))).join(`,`)),e.endAt&&(t+=`, endAt: `,t+=e.endAt.inclusive?`a:`:`b:`,t+=e.endAt.position.map((e=>yi(e))).join(`,`)),`Target(${t})`}(fa(e))}; limitType=${e.limitType})`}function va(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return e.collectionGroup===null?L.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n):t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n)}(e,t)&&function(e,t){for(let n of da(e))if(!n.field.isKeyField()&&t.data.field(n.field)===null)return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){let r=Ni(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,da(e),t)||e.endAt&&!function(e,t,n){let r=Ni(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,da(e),t))}(e,t)}function ya(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ba(e){return(t,n)=>{let r=!1;for(let i of da(e)){let e=xa(i,t,n);if(e!==0)return e;r||=i.field.isKeyField()}return 0}}function xa(e,t,n){let r=e.field.isKeyField()?L.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return r!==null&&i!==null?gi(r,i):j(42886)}(e.field,t,n);switch(e.dir){case`asc`:return r;case`desc`:return-1*r;default:return j(19790,{direction:e.dir})}}var Sa=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,((t,n)=>{for(let[t,r]of n)e(t,r)}))}isEmpty(){return Rr(this.inner)}size(){return this.innerSize}},Ca=new zr(L.comparator);function wa(){return Ca}var Ta=new zr(L.comparator);function Ea(...e){let t=Ta;for(let n of e)t=t.insert(n.key,n);return t}function Da(e){let t=Ta;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Oa(){return Aa()}function ka(){return Aa()}function Aa(){return new Sa((e=>e.toString()),((e,t)=>e.isEqual(t)))}var ja=new zr(L.comparator),Ma=new Hr(L.comparator);function H(...e){let t=Ma;for(let n of e)t=t.add(n);return t}var Na=new Hr(I);function Pa(){return Na}function Fa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:`NaN`};if(t===1/0)return{doubleValue:`Infinity`};if(t===-1/0)return{doubleValue:`-Infinity`}}return{doubleValue:Ar(t)?`-0`:t}}function Ia(e){return{integerValue:``+e}}function La(e,t){return jr(t)?Ia(t):Fa(e,t)}var Ra=class{constructor(){this._=void 0}};function za(e,t,n){return e instanceof Ha?function(e,t){let n={fields:{[Qr]:{stringValue:Zr},[ei]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ti(t)&&(t=ni(t)),t&&(n.fields[$r]=t),{mapValue:n}}(n,t):e instanceof Ua?Wa(e,t):e instanceof Ga?Ka(e,t):e instanceof Ja?function(e,t){let n=Va(e,t),r=Qa(n)+Qa(e.Ae);return Si(n)&&Si(e.Ae)?Ia(r):Fa(e.serializer,r)}(e,t):e instanceof Ya?function(e,t){return Za(e,t,Math.min)}(e,t):e instanceof Xa?function(e,t){return Za(e,t,Math.max)}(e,t):void 0}function Ba(e,t,n){return e instanceof Ua?Wa(e,t):e instanceof Ga?Ka(e,t):n}function Va(e,t){return e instanceof Ja?Ci(t)?t:{integerValue:0}:null}var Ha=class extends Ra{},Ua=class extends Ra{constructor(e){super(),this.elements=e}};function Wa(e,t){let n=$a(t);for(let t of e.elements)n.some((e=>mi(e,t)))||n.push(t);return{arrayValue:{values:n}}}var Ga=class extends Ra{constructor(e){super(),this.elements=e}};function Ka(e,t){let n=$a(t);for(let t of e.elements)n=n.filter((e=>!mi(e,t)));return{arrayValue:{values:n}}}var qa=class extends Ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}},Ja=class extends qa{},Ya=class extends qa{},Xa=class extends qa{};function Za(e,t,n){if(!Ci(t))return e.Ae;let r=n(Qa(t),Qa(e.Ae));return Si(t)&&Si(e.Ae)?Ia(r):Fa(e.serializer,r)}function Qa(e){return Yr(e.integerValue||e.doubleValue)}function $a(e){return wi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function eo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ua&&t instanceof Ua||e instanceof Ga&&t instanceof Ga?$n(e.elements,t.elements,mi):e instanceof Ja&&t instanceof Ja||e instanceof Ya&&t instanceof Ya||e instanceof Xa&&t instanceof Xa?mi(e.Ae,t.Ae):e instanceof Ha&&t instanceof Ha}(e.transform,t.transform)}var to=class{constructor(e,t){this.version=e,this.transformResults=t}},no=class e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ro(e,t){return e.updateTime===void 0?e.exists===void 0||e.exists===t.isFoundDocument():t.isFoundDocument()&&t.version.isEqual(e.updateTime)}var io=class{};function ao(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new mo(e.key,no.none()):new U(e.key,e.data,no.none());{let n=e.data,r=ji.empty(),i=new Hr(ir.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);t===null&&e.length>1&&(e=e.popLast(),t=n.field(e)),t===null?r.delete(e):r.set(e,t),i=i.add(e)}return new W(e.key,r,new Wr(i.toArray()),no.none())}}function oo(e,t,n){e instanceof U?function(e,t,n){let r=e.value.clone(),i=fo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof W?function(e,t,n){if(!ro(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=fo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(uo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function so(e,t,n,r){return e instanceof U?function(e,t,n,r){if(!ro(e.precondition,t))return n;let i=e.value.clone(),a=po(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof W?function(e,t,n,r){if(!ro(e.precondition,t))return n;let i=po(e.fieldTransforms,r,t),a=t.data;return a.setAll(uo(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),n===null?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ro(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function co(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=Va(r.transform,e||null);i!=null&&(n===null&&(n=ji.empty()),n.set(r.field,i))}return n||null}function lo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return e===void 0&&t===void 0||!(!e||!t)&&$n(e,t,((e,t)=>eo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}var U=class extends io{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},W=class extends io{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function uo(e){let t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}})),t}function fo(e,t,n){let r=new Map;M(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,Ba(o,s,n[i]))}return r}function po(e,t,n){let r=new Map;for(let i of e){let e=i.transform,a=n.data.field(i.field);r.set(i.field,za(e,a,t))}return r}var mo=class extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},ho=class extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}},go=class{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];r.key.isEqual(e.key)&&oo(r,e,n[t])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=so(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=so(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ka();return this.mutations.forEach((r=>{let i=e.get(r.key),a=i.overlayedDocument,o=this.applyToLocalView(a,i.mutatedFields);o=t.has(r.key)?null:o;let s=ao(a,o);s!==null&&n.set(r.key,s),a.isValidDocument()||a.convertToNoDocument(R.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),H())}isEqual(e){return this.batchId===e.batchId&&$n(this.mutations,e.mutations,((e,t)=>lo(e,t)))&&$n(this.baseMutations,e.baseMutations,((e,t)=>lo(e,t)))}},_o=class e{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(t,n,r){M(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return ja}(),a=t.mutations;for(let e=0;e<a.length;e++)i=i.insert(a[e].key,r[e].version);return new e(t,n,r,i)}},vo=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}},yo=class{constructor(e,t){this.count=e,this.unchangedNames=t}},bo,G;function xo(e){switch(e){case P.OK:return j(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return j(15467,{code:e})}}function So(e){if(e===void 0)return Pn(`GRPC error has no .code`),P.UNKNOWN;switch(e){case bo.OK:return P.OK;case bo.CANCELLED:return P.CANCELLED;case bo.UNKNOWN:return P.UNKNOWN;case bo.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case bo.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case bo.INTERNAL:return P.INTERNAL;case bo.UNAVAILABLE:return P.UNAVAILABLE;case bo.UNAUTHENTICATED:return P.UNAUTHENTICATED;case bo.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case bo.NOT_FOUND:return P.NOT_FOUND;case bo.ALREADY_EXISTS:return P.ALREADY_EXISTS;case bo.PERMISSION_DENIED:return P.PERMISSION_DENIED;case bo.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case bo.ABORTED:return P.ABORTED;case bo.OUT_OF_RANGE:return P.OUT_OF_RANGE;case bo.UNIMPLEMENTED:return P.UNIMPLEMENTED;case bo.DATA_LOSS:return P.DATA_LOSS;default:return j(39323,{code:e})}}(G=bo||={})[G.OK=0]=`OK`,G[G.CANCELLED=1]=`CANCELLED`,G[G.UNKNOWN=2]=`UNKNOWN`,G[G.INVALID_ARGUMENT=3]=`INVALID_ARGUMENT`,G[G.DEADLINE_EXCEEDED=4]=`DEADLINE_EXCEEDED`,G[G.NOT_FOUND=5]=`NOT_FOUND`,G[G.ALREADY_EXISTS=6]=`ALREADY_EXISTS`,G[G.PERMISSION_DENIED=7]=`PERMISSION_DENIED`,G[G.UNAUTHENTICATED=16]=`UNAUTHENTICATED`,G[G.RESOURCE_EXHAUSTED=8]=`RESOURCE_EXHAUSTED`,G[G.FAILED_PRECONDITION=9]=`FAILED_PRECONDITION`,G[G.ABORTED=10]=`ABORTED`,G[G.OUT_OF_RANGE=11]=`OUT_OF_RANGE`,G[G.UNIMPLEMENTED=12]=`UNIMPLEMENTED`,G[G.INTERNAL=13]=`INTERNAL`,G[G.UNAVAILABLE=14]=`UNAVAILABLE`,G[G.DATA_LOSS=15]=`DATA_LOSS`;var Co=null;function wo(){return new TextEncoder}var To=new k([4294967295,4294967295],0);function Eo(e){let t=wo().encode(e),n=new vn;return n.update(t),new Uint8Array(n.digest())}function Do(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new k([n,r],0),new k([i,a],0)]}var Oo=class e{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ko(`Invalid padding: ${t}`);if(n<0||e.length>0&&this.hashCount===0)throw new ko(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ko(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=k.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(k.fromNumber(n)));return r.compare(To)===1&&(r=new k([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;let[t,n]=Do(Eo(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);if(!this.we(r))return!1}return!0}static create(t,n,r){let i=t%8==0?0:8-t%8,a=new e(new Uint8Array(Math.ceil(t/8)),i,n);return r.forEach((e=>a.insert(e))),a}insert(e){if(this.ge===0)return;let[t,n]=Do(Eo(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);this.Se(r)}}Se(e){let t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}},ko=class extends Error{constructor(){super(...arguments),this.name=`BloomFilterError`}},Ao=class e{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){let i=new Map;return i.set(t,jo.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(R.min(),i,new zr(I),wa(),H())}},jo=class e{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new e(r,n,H(),H(),H())}},Mo=class{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}},No=class{constructor(e,t){this.targetId=e,this.Ce=t}},Po=class{constructor(e,t,n=Kr.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}},Fo=class{constructor(e){this.targetId=e,this.ve=0,this.Fe=zo(),this.Me=Kr.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),n=H();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:j(38017,{changeType:i})}})),new jo(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=zo()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){--this.ve,M(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}},Io=`WatchChangeAggregator`,Lo=class{constructor(e){this.Ge=e,this.ze=new Map,this.je=wa(),this.Je=Ro(),this.He=Ro(),this.Ze=new zr(I)}Xe(e){for(let t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(let t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{let n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:j(56790,{state:e.state})}else A(Io,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((e,n)=>{this.nt(n)&&t(n)}))}it(e){let t=e.targetId,n=e.Ce.count,r=this.st(t);if(r){let i=r.target;if(ia(i))if(n===0){let e=new L(i.path);this.et(t,e,B.newNoDocument(e,R.min()))}else M(n===1,20013,{expectedCount:n});else{let r=this.ot(t);if(r!==n){let n=this._t(e),i=n?this.ut(n,e,r):1;if(i!==0){this.rt(t);let e=i===2?`TargetPurposeExistenceFilterMismatchBloom`:`TargetPurposeExistenceFilterMismatch`;this.Ze=this.Ze.insert(t,e)}Co?.o(function(e,t,n,r,i){let a={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(a.bloomFilter={applied:i===0,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),a}(r,e.Ce,this.Ge.lt(),n,i))}}}}_t(e){let t=e.Ce.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:n=``,padding:r=0},hashCount:i=0}=t,a,o;try{a=Xr(n).toUint8Array()}catch(e){if(e instanceof Gr)return Fn(`Decoding the base64 bloom filter in existence filter failed (`+e.message+`); ignoring the bloom filter and falling back to full re-query.`),null;throw e}try{o=new Oo(a,r,i)}catch(e){return Fn(e instanceof ko?`BloomFilter error: `:`Applying bloom filter failed: `,e),null}return o.ge===0?null:o}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){let n=this.Ge.getRemoteKeysForTarget(t),r=0;return n.forEach((n=>{let i=this.Ge.lt(),a=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(a)||(this.et(t,n,null),r++)})),r}Pt(e){let t=new Map;this.ze.forEach(((n,r)=>{let i=this.st(r);if(i){if(n.current&&ia(i.target)){let t=new L(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.et(r,t,B.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}}));let n=H();this.He.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{let t=this.st(e);return!t||t.purpose===`TargetPurposeLimboResolution`||(r=!1,!1)})),r&&(n=n.add(e))})),this.je.forEach(((t,n)=>n.setReadTime(e)));let r=new Ao(e,t,this.Ze,this.je,n);return this.je=wa(),this.Je=Ro(),this.He=Ro(),this.Ze=new zr(I),r}Ye(e,t){let n=this.ze.get(e);if(!n||!this.nt(e))return void A(Io,`addDocumentToTarget received document for unknown inactive target (${e})`);let r=this.It(e,t.key)?2:0;n.Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){let r=this.ze.get(e);r&&this.nt(e)?(this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):A(Io,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){let t=this.ze.get(e);if(!t)return 0;let n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(A(Io,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Fo(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new Hr(I),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new Hr(I),this.Je=this.Je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||A(Io,`Detected inactive target`,e),t}st(e){let t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Fo(e)),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}};function Ro(){return new zr(L.comparator)}function zo(){return new zr(L.comparator)}var Bo={asc:`ASCENDING`,desc:`DESCENDING`},Vo={"<":`LESS_THAN`,"<=":`LESS_THAN_OR_EQUAL`,">":`GREATER_THAN`,">=":`GREATER_THAN_OR_EQUAL`,"==":`EQUAL`,"!=":`NOT_EQUAL`,"array-contains":`ARRAY_CONTAINS`,in:`IN`,"not-in":`NOT_IN`,"array-contains-any":`ARRAY_CONTAINS_ANY`},Ho={and:`AND`,or:`OR`},Uo=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Wo(e,t){return e.useProto3Json||kr(t)?t:{value:t}}function Go(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,``).replace(`Z`,``)}.${(`000000000`+t.nanoseconds).slice(-9)}Z`:{seconds:``+t.seconds,nanos:t.nanoseconds}}function Ko(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function qo(e,t){return Go(e,t.toTimestamp())}function Jo(e){return M(!!e,49232),R.fromTimestamp(function(e){let t=Jr(e);return new hr(t.seconds,t.nanos)}(e))}function Yo(e,t){return Xo(e,t).canonicalString()}function Xo(e,t){let n=function(e){return new nr([`projects`,e.projectId,`databases`,e.database])}(e).child(`documents`);return t===void 0?n:n.child(t)}function Zo(e){let t=nr.fromString(e);return M(bs(t),10190,{key:t.toString()}),t}function Qo(e,t){return Yo(e.databaseId,t.path)}function $o(e,t){let n=Zo(t);if(n.get(1)!==e.databaseId.projectId)throw new F(P.INVALID_ARGUMENT,`Tried to deserialize key from different project: `+n.get(1)+` vs `+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new F(P.INVALID_ARGUMENT,`Tried to deserialize key from different database: `+n.get(3)+` vs `+e.databaseId.database);return new L(rs(n))}function es(e,t){return Yo(e.databaseId,t)}function ts(e){let t=Zo(e);return t.length===4?nr.emptyPath():rs(t)}function ns(e){return new nr([`projects`,e.databaseId.projectId,`databases`,e.databaseId.database]).canonicalString()}function rs(e){return M(e.length>4&&e.get(4)===`documents`,29091,{key:e.toString()}),e.popFirst(5)}function is(e,t,n){return{name:Qo(e,t),fields:n.value.mapValue.fields}}function as(e,t){let n;if(`targetChange`in t){t.targetChange;let r=function(e){return e===`NO_CHANGE`?0:e===`ADD`?1:e===`REMOVE`?2:e===`CURRENT`?3:e===`RESET`?4:j(39313,{state:e})}(t.targetChange.targetChangeType||`NO_CHANGE`),i=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(M(t===void 0||typeof t==`string`,58123),Kr.fromBase64String(t||``)):(M(t===void 0||t instanceof Buffer||t instanceof Uint8Array,16193),Kr.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause;n=new Po(r,i,a,o&&function(e){return new F(e.code===void 0?P.UNKNOWN:So(e.code),e.message||``)}(o)||null)}else if(`documentChange`in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=$o(e,r.document.name),a=Jo(r.document.updateTime),o=r.document.createTime?Jo(r.document.createTime):R.min(),s=new ji({mapValue:{fields:r.document.fields}}),c=B.newFoundDocument(i,a,o,s);n=new Mo(r.targetIds||[],r.removedTargetIds||[],c.key,c)}else if(`documentDelete`in t){t.documentDelete;let r=t.documentDelete;r.document;let i=$o(e,r.document),a=r.readTime?Jo(r.readTime):R.min(),o=B.newNoDocument(i,a);n=new Mo([],r.removedTargetIds||[],o.key,o)}else if(`documentRemove`in t){t.documentRemove;let r=t.documentRemove;r.document;let i=$o(e,r.document);n=new Mo([],r.removedTargetIds||[],i,null)}else{if(!(`filter`in t))return j(11601,{At:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,a=new yo(r,i),o=e.targetId;n=new No(o,a)}}return n}function os(e,t){let n;if(t instanceof U)n={update:is(e,t.key,t.value)};else if(t instanceof mo)n={delete:Qo(e,t.key)};else if(t instanceof W)n={update:is(e,t.key,t.data),updateMask:ys(t.fieldMask)};else{if(!(t instanceof ho))return j(16599,{Vt:t.type});n={verify:Qo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){let n=t.transform;if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),setToServerValue:`REQUEST_TIME`};if(n instanceof Ua)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ja)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof Xa)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw j(20930,{transform:t.transform})}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return t.updateTime===void 0?t.exists===void 0?j(27497):{exists:t.exists}:{updateTime:qo(e,t.updateTime)}}(e,t.precondition)),n}function ss(e,t){return e&&e.length>0?(M(t!==void 0,14353),e.map((e=>function(e,t){let n=e.updateTime?Jo(e.updateTime):Jo(t);return n.isEqual(R.min())&&(n=Jo(t)),new to(n,e.transformResults||[])}(e,t)))):[]}function cs(e,t){return{documents:[es(e,t.path)]}}function ls(e,t){let n={structuredQuery:{}},r=t.path,i;t.collectionGroup===null?(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]):(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]),n.parent=es(e,i);let a=function(e){if(e.length!==0)return vs(zi.create(e,`and`))}(t.filters);a&&(n.structuredQuery.where=a);let o=function(e){if(e.length!==0)return e.map((e=>function(e){return{field:gs(e.field),direction:ps(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);let s=Wo(e,t.limit);return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{dt:n,parent:i}}function us(e){let t=ts(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){M(r===1,65062);let e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){let t=fs(e);return t instanceof zi&&Vi(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Fi(_s(e.field),function(e){switch(e){case`ASCENDING`:return`asc`;case`DESCENDING`:return`desc`;default:return}}(e.direction))}(e)))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t=typeof e==`object`?e.value:e,kr(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){let t=!!e.before;return new V(e.values||[],t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){let t=!e.before;return new V(e.values||[],t)}(n.endAt)),oa(t,i,o,a,s,`F`,c,l)}function ds(e,t){let n=function(e){switch(e){case`TargetPurposeListen`:return null;case`TargetPurposeExistenceFilterMismatch`:return`existence-filter-mismatch`;case`TargetPurposeExistenceFilterMismatchBloom`:return`existence-filter-mismatch-bloom`;case`TargetPurposeLimboResolution`:return`limbo-document`;default:return j(28987,{purpose:e})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function fs(e){return e.unaryFilter===void 0?e.fieldFilter===void 0?e.compositeFilter===void 0?j(30097,{filter:e}):function(e){return zi.create(e.compositeFilter.filters.map((e=>fs(e))),function(e){switch(e){case`AND`:return`and`;case`OR`:return`or`;default:return j(1026)}}(e.compositeFilter.op))}(e):function(e){return Ri.create(_s(e.fieldFilter.field),function(e){switch(e){case`EQUAL`:return`==`;case`NOT_EQUAL`:return`!=`;case`GREATER_THAN`:return`>`;case`GREATER_THAN_OR_EQUAL`:return`>=`;case`LESS_THAN`:return`<`;case`LESS_THAN_OR_EQUAL`:return`<=`;case`ARRAY_CONTAINS`:return`array-contains`;case`IN`:return`in`;case`NOT_IN`:return`not-in`;case`ARRAY_CONTAINS_ANY`:return`array-contains-any`;case`OPERATOR_UNSPECIFIED`:return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):function(e){switch(e.unaryFilter.op){case`IS_NAN`:let t=_s(e.unaryFilter.field);return Ri.create(t,`==`,{doubleValue:NaN});case`IS_NULL`:let n=_s(e.unaryFilter.field);return Ri.create(n,`==`,{nullValue:`NULL_VALUE`});case`IS_NOT_NAN`:let r=_s(e.unaryFilter.field);return Ri.create(r,`!=`,{doubleValue:NaN});case`IS_NOT_NULL`:let i=_s(e.unaryFilter.field);return Ri.create(i,`!=`,{nullValue:`NULL_VALUE`});case`OPERATOR_UNSPECIFIED`:return j(61313);default:return j(60726)}}(e)}function ps(e){return Bo[e]}function ms(e){return Vo[e]}function hs(e){return Ho[e]}function gs(e){return{fieldPath:e.canonicalString()}}function _s(e){return ir.fromServerFormat(e.fieldPath)}function vs(e){return e instanceof Ri?function(e){if(e.op===`==`){if(Ei(e.value))return{unaryFilter:{field:gs(e.field),op:`IS_NAN`}};if(Ti(e.value))return{unaryFilter:{field:gs(e.field),op:`IS_NULL`}}}else if(e.op===`!=`){if(Ei(e.value))return{unaryFilter:{field:gs(e.field),op:`IS_NOT_NAN`}};if(Ti(e.value))return{unaryFilter:{field:gs(e.field),op:`IS_NOT_NULL`}}}return{fieldFilter:{field:gs(e.field),op:ms(e.op),value:e.value}}}(e):e instanceof zi?function(e){let t=e.getFilters().map((e=>vs(e)));return t.length===1?t[0]:{compositeFilter:{op:hs(e.op),filters:t}}}(e):j(54877,{filter:e})}function ys(e){let t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bs(e){return e.length>=4&&e.get(0)===`projects`&&e.get(2)===`databases`}function xs(e){return!!e&&typeof e._toProto==`function`&&e._protoValueType===`ProtoValue`}var Ss=class e{constructor(e,t,n,r,i=R.min(),a=R.min(),o=Kr.EMPTY_BYTE_STRING,s=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=s}withSequenceNumber(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}},Cs=class{constructor(e){this.gt=e}};function ws(e){let t=us({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType===`LAST`?ma(t,t.limit,`L`):t}var Ts=class{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if(`nullValue`in e)this.vt(t,5);else if(`booleanValue`in e)this.vt(t,10),t.Ft(+!!e.booleanValue);else if(`integerValue`in e)this.vt(t,15),t.Ft(Yr(e.integerValue));else if(`doubleValue`in e){let n=Yr(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),Ar(n)?t.Ft(0):t.Ft(n))}else if(`timestampValue`in e){let n=e.timestampValue;this.vt(t,20),typeof n==`string`&&(n=Jr(n)),t.Mt(`${n.seconds||``}`),t.Ft(n.nanos||0)}else if(`stringValue`in e)this.xt(e.stringValue,t),this.Ot(t);else if(`bytesValue`in e)this.vt(t,30),t.Nt(Xr(e.bytesValue)),this.Ot(t);else if(`referenceValue`in e)this.Bt(e.referenceValue,t);else if(`geoPointValue`in e){let n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else `mapValue`in e?Ai(e)?this.vt(t,2**53-1):Oi(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):`arrayValue`in e?(this.qt(e.arrayValue,t),this.Ot(t)):j(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};this.vt(t,55);for(let e of Object.keys(n))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){let n=e.fields||{};this.vt(t,53);let r=fi,i=n[r].arrayValue?.values?.length||0;this.vt(t,15),t.Ft(Yr(i)),this.xt(r,t),this.Dt(n[r],t)}qt(e,t){let n=e.values||[];this.vt(t,50);for(let e of n)this.Dt(e,t)}Bt(e,t){this.vt(t,37),L.fromName(e).path.forEach((e=>{this.vt(t,60),this.Ut(e,t)}))}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};Ts.$t=new Ts;var Es=class{constructor(){this.Sn=new Ds}addToCollectionParentIndex(e,t){return this.Sn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(br.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(br.min())}updateCollectionGroup(e,t,n){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}},Ds=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Hr(nr.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Hr(nr.comparator)).toArray()}},Os={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ks=41943040,As=class e{static withCacheSize(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};As.DEFAULT_COLLECTION_PERCENTILE=10,As.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,As.DEFAULT=new As(ks,As.DEFAULT_COLLECTION_PERCENTILE,As.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),As.DISABLED=new As(-1,0,0);var js=class e{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new e(0)}static _r(){return new e(-1)}},Ms=`LruGarbageCollector`,Ns=1048576;function Ps([e,t],[n,r]){let i=I(e,n);return i===0?I(t,r):i}var Fs=class{constructor(e){this.hr=e,this.buffer=new Hr(Ps),this.Pr=0}Tr(){return++this.Pr}Ir(e){let t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();Ps(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}},Is=class{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&=(this.Er.cancel(),null)}get started(){return this.Er!==null}Rr(e){A(Ms,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay(`lru_garbage_collection`,e,(async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Er(e)?A(Ms,`Ignoring IndexedDB error during garbage collection: `,e):await wr(e)}await this.Rr(3e5)}))}},Ls=class{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Dr.ce);let n=new Fs(t);return this.Ar.forEachTarget(e,(e=>n.Ir(e.sequenceNumber))).next((()=>this.Ar.dr(e,(e=>n.Ir(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(A(`LruGarbageCollector`,`Garbage collection skipped; disabled`),z.resolve(Os)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(A(`LruGarbageCollector`,`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Os):this.mr(e,t)))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,r,i,a,o,s,c,l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(A(`LruGarbageCollector`,`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,a=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,s=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Nn()<=D.DEBUG&&A(`LruGarbageCollector`,`LRU Garbage Collection\n\tCounted targets in ${a-l}ms\n\tDetermined least recently used ${r} in `+(o-a)+`ms
\tRemoved ${i} targets in `+(s-o)+`ms
\tRemoved ${e} documents in `+(c-s)+`ms
Total Duration: ${c-l}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}};function Rs(e,t){return new Ls(e,t)}var zs=class{constructor(){this.changes=new Sa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,B.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return n===void 0?this.getFromCache(e,t):z.resolve(n)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}},Bs=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}},Vs=class{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(n!==null&&so(n.mutation,e,Wr.empty(),hr.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,H()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=H()){let r=Oa();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ea();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){let n=Oa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,H())))}populateOverlays(e,t,n){let r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=wa(),a=Aa(),o=function(){return Aa()}();return t.forEach(((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(o===void 0||o.mutation instanceof W)?i=i.insert(t.key,t):o===void 0?a.set(t.key,Wr.empty()):(a.set(t.key,o.mutation.getFieldMask()),so(o.mutation,t,o.mutation.getFieldMask(),hr.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>a.set(e,t))),t.forEach(((e,t)=>o.set(e,new Bs(t,a.get(e)??null)))),o)))}recalculateAndSaveOverlays(e,t){let n=Aa(),r=new zr(((e,t)=>e-t)),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(let i of e)i.keys().forEach((e=>{let a=t.get(e);if(a===null)return;let o=n.get(e)||Wr.empty();o=i.applyToLocalView(a,o),n.set(e,o);let s=(r.get(i.batchId)||H()).add(e);r=r.insert(i.batchId,s)}))})).next((()=>{let a=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),s=r.key,c=r.value,l=ka();c.forEach((e=>{if(!i.has(e)){let r=ao(t.get(e),n.get(e));r!==null&&l.set(e,r),i=i.add(e)}})),a.push(this.documentOverlayCache.saveOverlays(e,s,l))}return z.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return la(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ua(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{let a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):z.resolve(Oa()),o=gr,s=i;return a.next((t=>z.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?z.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,s,t,H()))).next((e=>({batchId:o,changes:Da(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((e=>{let t=Ea();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,a=Ea();return this.indexManager.getCollectionParents(e,i).next((o=>z.forEach(o,(o=>{let s=function(e,t){return new aa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next((e=>{e.forEach(((e,t)=>{a=a.insert(e,t)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{let r=n.getKey();e.get(r)===null&&(e=e.insert(r,B.newInvalidDocument(r)))}));let n=Ea();return e.forEach(((e,r)=>{let a=i.get(e);a!==void 0&&so(a.mutation,r,Wr.empty(),hr.now()),va(t,r)&&(n=n.insert(e,r))})),n}))}},Hs=class{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return z.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Jo(e.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(e){return{name:e.name,query:ws(e.bundledQuery),readTime:Jo(e.readTime)}}(t)),z.resolve()}},Us=class{constructor(){this.overlays=new zr(L.comparator),this.Br=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){let n=Oa();return z.forEach(t,(t=>this.getOverlay(e,t).next((e=>{e!==null&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.wt(e,t,r)})),z.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Br.get(n);return r!==void 0&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Br.delete(n)),z.resolve()}getOverlaysForCollection(e,t,n){let r=Oa(),i=t.length+1,a=new L(t.child(``)),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){let e=o.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return z.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new zr(((e,t)=>e-t)),a=this.overlays.getIterator();for(;a.hasNext();){let e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);t===null&&(t=Oa(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=Oa(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return z.resolve(o)}wt(e,t,n){let r=this.overlays.get(n.key);if(r!==null){let e=this.Br.get(r.largestBatchId).delete(n.key);this.Br.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new vo(t,n));let i=this.Br.get(t);i===void 0&&(i=H(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}},Ws=class{constructor(){this.sessionToken=Kr.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}},Gs=class{constructor(){this.Lr=new Hr(Ks.kr),this.qr=new Hr(Ks.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){let n=new Ks(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.$r(new Ks(e,t))}Wr(e,t){e.forEach((e=>this.removeReference(e,t)))}Qr(e){let t=new L(new nr([])),n=new Ks(t,e),r=new Ks(t,e+1),i=[];return this.qr.forEachInRange([n,r],(e=>{this.$r(e),i.push(e.key)})),i}Gr(){this.Lr.forEach((e=>this.$r(e)))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){let t=new L(new nr([])),n=new Ks(t,e),r=new Ks(t,e+1),i=H();return this.qr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){let t=new Ks(e,0),n=this.Lr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}},Ks=class{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return L.comparator(e.key,t.key)||I(e.jr,t.jr)}static Kr(e,t){return I(e.jr,t.jr)||L.comparator(e.key,t.key)}},qs=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new Hr(Ks.kr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){let i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new go(i,t,n,r);this.mutationQueue.push(a);for(let t of r)this.Jr=this.Jr.add(new Ks(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return z.resolve(a)}lookupMutationBatch(e,t){return z.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=this.Zr(n),i=r<0?0:r;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Or:this.Xn-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new Ks(t,0),r=new Ks(t,1/0),i=[];return this.Jr.forEachInRange([n,r],(e=>{let t=this.Hr(e.jr);i.push(t)})),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Hr(I);return t.forEach((e=>{let t=new Ks(e,0),r=new Ks(e,1/0);this.Jr.forEachInRange([t,r],(e=>{n=n.add(e.jr)}))})),z.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;L.isDocumentKey(i)||(i=i.child(``));let a=new Ks(new L(i),0),o=new Hr(I);return this.Jr.forEachWhile((e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.jr)),!0)}),a),z.resolve(this.Xr(o))}Xr(e){let t=[];return e.forEach((e=>{let n=this.Hr(e);n!==null&&t.push(n)})),t}removeMutationBatch(e,t){M(this.Yr(t.batchId,`removed`)===0,55003),this.mutationQueue.shift();let n=this.Jr;return z.forEach(t.mutations,(r=>{let i=new Ks(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=n}))}tr(e){}containsKey(e,t){let n=new Ks(t,0),r=this.Jr.firstAfterOrEqual(n);return z.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){let t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}},Js=class{constructor(e){this.ei=e,this.docs=function(){return new zr(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return z.resolve(n?n.document.mutableCopy():B.newInvalidDocument(t))}getEntries(e,t){let n=wa();return t.forEach((e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():B.newInvalidDocument(e))})),z.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=wa(),a=t.path,o=new L(a.child(`__id-9223372036854775808__`)),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){let{key:e,value:{document:o}}=s.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||xr(yr(o),n)<=0||(r.has(o.key)||va(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,t,n,r){j(9500)}ti(e,t){return z.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ys(this)}getSize(e){return z.resolve(this.size)}},Ys=class extends zs{constructor(e){super(),this.Fr=e}applyChanges(e){let t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Fr.addEntry(e,r)):this.Fr.removeEntry(n)})),z.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}},Xs=class{constructor(e){this.persistence=e,this.ni=new Sa((e=>na(e)),ra),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.ri=0,this.ii=new Gs,this.targetCount=0,this.si=js.sr()}forEachTarget(e,t){return this.ni.forEach(((e,n)=>t(n))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),z.resolve()}cr(e){this.ni.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.si=new js(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.cr(t),z.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),--this.targetCount,z.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ni.forEach(((a,o)=>{o.sequenceNumber<=t&&n.get(o.targetId)===null&&(this.ni.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),z.waitFor(i).next((()=>r))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){let n=this.ni.get(t)||null;return z.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),z.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),z.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),z.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ii.zr(t);return z.resolve(n)}containsKey(e,t){return z.resolve(this.ii.containsKey(t))}},Zs=class{constructor(e,t){this.oi={},this.overlays={},this._i=new Dr(0),this.ai=!1,this.ai=!0,this.ui=new Ws,this.referenceDelegate=e(this),this.ci=new Xs(this),this.indexManager=new Es,this.remoteDocumentCache=function(e){return new Js(e)}((e=>this.referenceDelegate.li(e))),this.serializer=new Cs(t),this.hi=new Hs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Us,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new qs(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){A(`MemoryPersistence`,`Starting transaction:`,e);let r=new Qs(this._i.next());return this.referenceDelegate.Pi(),n(r).next((e=>this.referenceDelegate.Ti(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ii(e,t){return z.or(Object.values(this.oi).map((n=>()=>n.containsKey(e,t))))}},Qs=class extends Cr{constructor(e){super(),this.currentSequenceNumber=e}},$s=class e{constructor(e){this.persistence=e,this.Ei=new Gs,this.Ri=null}static Ai(t){return new e(t)}get Vi(){if(this.Ri)return this.Ri;throw j(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),z.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach((e=>this.Vi.add(e.toString())));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Vi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Pi(){this.Ri=new Set}Ti(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Vi,(n=>{let r=L.fromPath(n);return this.di(e,r).next((e=>{e||t.removeEntry(r,R.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.di(e,t).next((e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())}))}li(e){return 0}di(e,t){return z.or([()=>z.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}},ec=class e{constructor(e,t){this.persistence=e,this.mi=new Sa((e=>Nr(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=Rs(this,t)}static Ai(t,n){return new e(t,n)}Pi(){}Ti(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){let t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}gr(e){let t=0;return this.dr(e,(e=>{t++})).next((()=>t))}dr(e,t){return z.forEach(this.mi,((n,r)=>this.yr(e,n,r).next((e=>e?z.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ti(e,(r=>this.yr(e,r,t).next((e=>{e||(n++,i.removeEntry(r,R.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),z.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),z.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xi(e.data.value)),t}yr(e,t,n){return z.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.mi.get(t);return z.resolve(e!==void 0&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}},tc=class e{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=r}static Is(t,n){let r=H(),i=H();for(let e of n.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new e(t,n.fromCache,r,i)}},nc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}},rc=class{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return pe()?8:Tr(T())>0?6:4}()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.fs(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.gs(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;let n=new nc;return this.ps(e,t,n).next((r=>{if(i.result=r,this.Rs)return this.ys(e,t,n,r.size)}))})).next((()=>i.result))}ys(e,t,n,r){return n.documentReadCount<this.As?(Nn()<=D.DEBUG&&A(`QueryEngine`,`SDK will not create cache indexes for query:`,_a(t),`since it only creates cache indexes for collection contains`,`more than or equal to`,this.As,`documents`),z.resolve()):(Nn()<=D.DEBUG&&A(`QueryEngine`,`Query:`,_a(t),`scans`,n.documentReadCount,`local documents and returns`,r,`documents as results.`),n.documentReadCount>this.Vs*r?(Nn()<=D.DEBUG&&A(`QueryEngine`,`The SDK decides to create cache indexes for query:`,_a(t),`as using cache indexes may help improve performance.`),this.indexManager.createTargetIndexes(e,fa(t))):z.resolve())}fs(e,t){if(ca(t))return z.resolve(null);let n=fa(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=ma(t,null,`F`),n=fa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{let i=H(...r);return this.ds.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{let a=this.ws(t,r);return this.Ss(t,a,i,n.readTime)?this.fs(e,ma(t,null,`F`)):this.bs(e,a,t,n)}))))})))))}gs(e,t,n,r){return ca(t)||r.isEqual(R.min())?z.resolve(null):this.ds.getDocuments(e,n).next((i=>{let a=this.ws(t,i);return this.Ss(t,a,n,r)?z.resolve(null):(Nn()<=D.DEBUG&&A(`QueryEngine`,`Re-using previous result from %s to execute query: %s`,r.toString(),_a(t)),this.bs(e,a,t,vr(r,gr)).next((e=>e)))}))}ws(e,t){let n=new Hr(ba(e));return t.forEach(((t,r)=>{va(e,r)&&(n=n.add(r))})),n}Ss(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;let i=e.limitType===`F`?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ps(e,t,n){return Nn()<=D.DEBUG&&A(`QueryEngine`,`Using full collection scan to execute query:`,_a(t)),this.ds.getDocumentsMatchingQuery(e,t,br.min(),n)}bs(e,t,n,r){return this.ds.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}},ic=`LocalStore`,ac=3e8,oc=class{constructor(e,t,n,r){this.persistence=e,this.Ds=t,this.serializer=r,this.Cs=new zr(I),this.vs=new Sa((e=>na(e)),ra),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vs(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction(`Collect garbage`,`readwrite-primary`,(t=>e.collect(t,this.Cs)))}};function sc(e,t,n,r){return new oc(e,t,n,r)}async function cc(e,t){let n=N(e);return await n.persistence.runTransaction(`Handle user change`,`readonly`,(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.xs(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{let i=[],a=[],o=H();for(let e of r){i.push(e.batchId);for(let t of e.mutations)o=o.add(t.key)}for(let e of t){a.push(e.batchId);for(let t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Os:e,removedBatchIds:i,addedBatchIds:a})))}))}))}function lc(e,t){let n=N(e);return n.persistence.runTransaction(`Acknowledge batch`,`readwrite-primary`,(e=>{let r=t.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){let i=n.batch,a=i.keys(),o=z.resolve();return a.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{let a=n.docVersions.get(e);M(a!==null,48541),t.version.compareTo(a)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=H();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function uc(e){let t=N(e);return t.persistence.runTransaction(`Get last remote snapshot version`,`readonly`,(e=>t.ci.getLastRemoteSnapshotVersion(e)))}function dc(e,t){let n=N(e),r=t.snapshotVersion,i=n.Cs;return n.persistence.runTransaction(`Apply remote event`,`readwrite-primary`,(e=>{let a=n.Ms.newChangeBuffer({trackRemovals:!0});i=n.Cs;let o=[];t.targetChanges.forEach(((a,s)=>{let c=i.get(s);if(!c)return;o.push(n.ci.removeMatchingKeys(e,a.removedDocuments,s).next((()=>n.ci.addMatchingKeys(e,a.addedDocuments,s))));let l=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.get(s)===null?a.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(a.resumeToken,r)):l=l.withResumeToken(Kr.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()),i=i.insert(s,l),function(e,t,n){return e.resumeToken.approximateByteSize()===0||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=ac?!0:n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,a)&&o.push(n.ci.updateTargetData(e,l))}));let s=wa(),c=H();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(fc(e,a,t.documentUpdates).next((e=>{s=e.Ns,c=e.Bs}))),!r.isEqual(R.min())){let t=n.ci.getLastRemoteSnapshotVersion(e).next((t=>n.ci.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return z.waitFor(o).next((()=>a.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,s,c))).next((()=>s))})).then((e=>(n.Cs=i,e)))}function fc(e,t,n){let r=H(),i=H();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=wa();return n.forEach(((n,a)=>{let o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(R.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||a.version.compareTo(o.version)===0&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):A(ic,`Ignoring outdated watch update for `,n,`. Current version:`,o.version,` Watch version:`,a.version)})),{Ns:r,Bs:i}}))}function pc(e,t){let n=N(e);return n.persistence.runTransaction(`Get next mutation batch`,`readonly`,(e=>(t===void 0&&(t=Or),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function mc(e,t){let n=N(e);return n.persistence.runTransaction(`Allocate target`,`readwrite`,(e=>{let r;return n.ci.getTargetData(e,t).next((i=>i?(r=i,z.resolve(r)):n.ci.allocateTargetId(e).next((i=>(r=new Ss(t,i,`TargetPurposeListen`,e.currentSequenceNumber),n.ci.addTargetData(e,r).next((()=>r)))))))})).then((e=>{let r=n.Cs.get(e.targetId);return(r===null||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(e.targetId,e),n.vs.set(t,e.targetId)),e}))}async function hc(e,t,n){let r=N(e),i=r.Cs.get(t),a=n?`readwrite`:`readwrite-primary`;try{n||await r.persistence.runTransaction(`Release target`,a,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Er(e))throw e;A(ic,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Cs=r.Cs.remove(t),r.vs.delete(i.target)}function gc(e,t,n){let r=N(e),i=R.min(),a=H();return r.persistence.runTransaction(`Execute query`,`readwrite`,(e=>function(e,t,n){let r=N(e),i=r.vs.get(n);return i===void 0?r.ci.getTargetData(t,n):z.resolve(r.Cs.get(i))}(r,e,fa(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(e,t.targetId).next((e=>{a=e}))})).next((()=>r.Ds.getDocumentsMatchingQuery(e,t,n?i:R.min(),n?a:H()))).next((e=>(_c(r,ya(t),e),{documents:e,Ls:a})))))}function _c(e,t,n){let r=e.Fs.get(t)||R.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Fs.set(t,r)}var vc=class{constructor(){this.activeTargetIds=Pa()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},yc=class{constructor(){this.Co=new vc,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||`not-current`}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new vc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}},bc=class{Fo(e){}shutdown(){}},xc=`ConnectivityMonitor`,Sc=class{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener(`online`,this.Mo),window.removeEventListener(`offline`,this.Oo)}Lo(){window.addEventListener(`online`,this.Mo),window.addEventListener(`offline`,this.Oo)}xo(){A(xc,`Network connectivity changed: AVAILABLE`);for(let e of this.Bo)e(0)}No(){A(xc,`Network connectivity changed: UNAVAILABLE`);for(let e of this.Bo)e(1)}static v(){return typeof window<`u`&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}},Cc=null;function wc(){return Cc===null?Cc=function(){return 268435456+Math.round(2147483648*Math.random())}():Cc++,`0x`+Cc.toString(16)}var Tc=`RestConnection`,Ec={BatchGetDocuments:`batchGet`,Commit:`commit`,RunQuery:`runQuery`,RunAggregationQuery:`runAggregationQuery`,ExecutePipeline:`executePipeline`},Dc=class{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?`https`:`http`,n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+`://`+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Uo=this.databaseId.database===ai?`project_id=${n}`:`project_id=${n}&database_id=${r}`}$o(e,t,n,r,i){let a=wc(),o=this.Wo(e,t.toUriEncodedString());A(Tc,`Sending RPC '${e}' ${a}:`,o,n);let s={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(s,r,i);let{host:c}=new URL(o),l=Ce(c);return this.Go(e,o,s,n,l).then((t=>(A(Tc,`Received RPC '${e}' ${a}: `,t),t)),(t=>{throw Fn(Tc,`RPC '${e}' ${a} failed with error: `,t,`url: `,o,`request:`,n),t}))}zo(e,t,n,r,i,a){return this.$o(e,t,n,r,i)}Qo(e,t,n){e[`X-Goog-Api-Client`]=function(){return`gl-js/ fire/`+An}(),e[`Content-Type`]=`text/plain`,this.databaseInfo.appId&&(e[`X-Firebase-GMPID`]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Wo(e,t){let n=Ec[e],r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}},Oc=class{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}},kc=`WebChannelConnection`,Ac=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))},jc=class e extends Dc{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){e.u_||=(Ac(Dn(),En.STAT_EVENT,(e=>{e.stat===Tn.PROXY?A(kc,`STAT_EVENT: detected buffering proxy`):e.stat===Tn.NOPROXY&&A(kc,`STAT_EVENT: detected no buffering proxy`)})),!0)}Go(e,t,n,r,i){let a=wc();return new Promise(((i,o)=>{let s=new xn;s.setWithCredentials(!0),s.listenOnce(Cn.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case wn.NO_ERROR:let t=s.getResponseJson();A(kc,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case wn.TIMEOUT:A(kc,`RPC '${e}' ${a} timed out`),o(new F(P.DEADLINE_EXCEEDED,`Request time out`));break;case wn.HTTP_ERROR:let n=s.getStatus();if(A(kc,`RPC '${e}' ${a} failed with status:`,n,`response text:`,s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;t&&t.status&&t.message?o(new F(function(e){let t=e.toLowerCase().replace(/_/g,`-`);return Object.values(P).indexOf(t)>=0?t:P.UNKNOWN}(t.status),t.message)):o(new F(P.UNKNOWN,`Server responded with status `+s.getStatus()))}else o(new F(P.UNAVAILABLE,`Connection failed.`));break;default:j(9055,{c_:e,streamId:a,l_:s.getLastErrorCode(),h_:s.getLastError()})}}finally{A(kc,`RPC '${e}' ${a} completed.`)}}));let c=JSON.stringify(r);A(kc,`RPC '${e}' ${a} sending request:`,r),s.send(t,`POST`,c,n,15)}))}P_(t,n,r){let i=wc(),a=[this.qo,`/`,`google.firestore.v1.Firestore`,`/`,t,`/channel`],o=this.createWebChannelTransport(),s={httpSessionIdParam:`gsessionid`,initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(s.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Qo(s.initMessageHeaders,n,r),s.encodeInitMessageHeaders=!0;let l=a.join(``);A(kc,`Creating RPC '${t}' stream ${i}: ${l}`,s);let u=o.createWebChannel(l,s);this.T_(u);let d=!1,f=!1,p=new Oc({jo:e=>{f?A(kc,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(d||=(A(kc,`Opening RPC '${t}' stream ${i} transport.`),u.open(),!0),A(kc,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},Jo:()=>u.close()});return Ac(u,Sn.EventType.OPEN,(()=>{f||(A(kc,`RPC '${t}' stream ${i} transport opened.`),p.r_())})),Ac(u,Sn.EventType.CLOSE,(()=>{f||(f=!0,A(kc,`RPC '${t}' stream ${i} transport closed`),p.s_(),this.I_(u))})),Ac(u,Sn.EventType.ERROR,(e=>{f||(f=!0,Fn(kc,`RPC '${t}' stream ${i} transport errored. Name:`,e.name,`Message:`,e.message),p.s_(new F(P.UNAVAILABLE,`The operation could not be completed`)))})),Ac(u,Sn.EventType.MESSAGE,(e=>{if(!f){let n=e.data[0];M(!!n,16349);let r=n,a=r?.error||r[0]?.error;if(a){A(kc,`RPC '${t}' stream ${i} received error:`,a);let e=a.status,n=function(e){let t=bo[e];if(t!==void 0)return So(t)}(e),r=a.message;e===`NOT_FOUND`&&r.includes(`database`)&&r.includes(`does not exist`)&&r.includes(this.databaseId.database)&&Fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),n===void 0&&(n=P.INTERNAL,r=`Unknown error status: `+e+` with message `+a.message),f=!0,p.s_(new F(n,r)),u.close()}else A(kc,`RPC '${t}' stream ${i} received:`,n),p.o_(n)}})),e.a_(),setTimeout((()=>{p.i_()}),0),p}terminate(){this.__.forEach((e=>e.close())),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter((t=>t===e))}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e[`x-goog-api-key`]=this.databaseInfo.apiKey)}createWebChannelTransport(){return On()}};function Mc(e){return new jc(e)}function Nc(){return typeof document<`u`?document:null}function Pc(e){return new Uo(e,!0)}jc.u_=!1;var Fc=class{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=r,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();let t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&A(`ExponentialBackoff`,`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}},Ic=`PersistentStream`,Lc=class{constructor(e,t,n,r,i,a,o,s){this.Di=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Fc(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state===4?this.O_():this.auth()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&=(this.D_.cancel(),null)}K_(){this.C_&&=(this.C_.cancel(),null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e===4?t&&t.code===P.RESOURCE_EXHAUSTED?(Pn(t.toString()),Pn(`Using maximum backoff delay to prevent overloading the backend.`),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()):this.F_.reset(),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;let e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.b_===t&&this.Q_(e,n)}),(t=>{e((()=>{let e=new F(P.UNKNOWN,`Fetching auth token failed: `+t.message);return this.G_(e)}))}))}Q_(e,t){let n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho((()=>{n((()=>this.listener.Ho()))})),this.stream.Xo((()=>{n((()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.Xo())))})),this.stream.e_((e=>{n((()=>this.G_(e)))})),this.stream.onMessage((e=>{n((()=>++this.v_==1?this.j_(e):this.onNext(e)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return A(Ic,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget((()=>this.b_===e?t():(A(Ic,`stream callback skipped by getCloseGuardedDispatcher.`),Promise.resolve())))}}},Rc=class extends Lc{constructor(e,t,n,r,i,a){super(e,`listen_stream_connection_backoff`,`listen_stream_idle`,`health_check_timeout`,t,n,r,a),this.serializer=i}z_(e,t){return this.connection.P_(`Listen`,e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=as(this.serializer,e),n=function(e){if(!(`targetChange`in e))return R.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?R.min():t.readTime?Jo(t.readTime):R.min()}(e);return this.listener.J_(t,n)}H_(e){let t={};t.database=ns(this.serializer),t.addTarget=function(e,t){let n,r=t.target;if(n=ia(r)?{documents:cs(e,r)}:{query:ls(e,r).dt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ko(e,t.resumeToken);let r=Wo(e,t.expectedCount);r!==null&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(R.min())>0){n.readTime=Go(e,t.snapshotVersion.toTimestamp());let r=Wo(e,t.expectedCount);r!==null&&(n.expectedCount=r)}return n}(this.serializer,e);let n=ds(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){let t={};t.database=ns(this.serializer),t.removeTarget=e,this.k_(t)}},zc=class extends Lc{constructor(e,t,n,r,i,a){super(e,`write_stream_connection_backoff`,`write_stream_idle`,`health_check_timeout`,t,n,r,a),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_(`Write`,e,t)}j_(e){return M(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,M(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){M(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=ss(e.writeResults,e.commitTime),n=Jo(e.commitTime);return this.listener.ta(n,t)}na(){let e={};e.database=ns(this.serializer),this.k_(e)}Y_(e){let t={streamToken:this.lastStreamToken,writes:e.map((e=>os(this.serializer,e)))};this.k_(t)}},Bc=class{},Vc=class extends Bc{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new F(P.FAILED_PRECONDITION,`The client has already been terminated.`)}$o(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.$o(e,Xo(t,n),r,i,a))).catch((e=>{throw e.name===`FirebaseError`?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new F(P.UNKNOWN,e.toString())}))}zo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.zo(e,Xo(t,n),r,a,o,i))).catch((e=>{throw e.name===`FirebaseError`?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new F(P.UNKNOWN,e.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}};function Hc(e,t,n,r){return new Vc(e,t,n,r)}var Uc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state=`Unknown`,this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua(`Unknown`),this.oa=this.asyncQueue.enqueueAfterDelay(`online_state_timeout`,1e4,(()=>(this.oa=null,this.ca(`Backend didn't respond within 10 seconds.`),this.ua(`Offline`),Promise.resolve()))))}la(e){this.state===`Online`?this.ua(`Unknown`):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua(`Offline`)))}set(e){this.ha(),this.sa=0,e===`Online`&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pn(t),this._a=!1):A(`OnlineStateTracker`,t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}},Wc=`RemoteStore`,Gc=class{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new js(1e3),this.Aa=new js(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo((e=>{n.enqueueAndForget((async()=>{tl(this)&&(A(Wc,`Restarting streams for network reachability change.`),await async function(e){let t=N(e);t.Va.add(4),await qc(t),t.fa.set(`Unknown`),t.Va.delete(4),await Kc(t)}(this))}))})),this.fa=new Uc(n,r)}};async function Kc(e){if(tl(e))for(let t of e.da)await t(!0)}async function qc(e){for(let t of e.da)await t(!1)}function Jc(e,t){return e.Ia.get(t)||void 0}function Yc(e,t){let n=N(e),r=Jc(n,t.targetId);if(r!==void 0&&n.Ta.has(r))return;let i=function(e,t){let n=Jc(e,t);n!==void 0&&e.Ea.delete(n);let r=function(e,t){return t%2==0?e.Ra.next():e.Aa.next()}(e,t);return e.Ia.set(t,r),e.Ea.set(r,t),r}(n,t.targetId);A(Wc,`remoteStoreListen mapping SDK target ID to remote`,t.targetId,i);let a=new Ss(t.target,i,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.Ta.set(i,a),el(n)?$c(n):bl(n).x_()&&Zc(n,a)}function Xc(e,t){let n=N(e),r=bl(n),i=Jc(n,t);A(Wc,`remoteStoreUnlisten removing mapping of SDK target ID to remote`,t,i),n.Ta.delete(i),n.Ia.delete(t),n.Ea.delete(i),r.x_()&&Qc(n,i),n.Ta.size===0&&(r.x_()?r.B_():tl(n)&&n.fa.set(`Unknown`))}function Zc(e,t){if(e.ga.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){let n=e.Ea.get(t.targetId);if(n===void 0)return void A(Wc,`SDK target ID not found for remote ID: `+t.targetId);let r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}bl(e).H_(t)}function Qc(e,t){e.ga.$e(t),bl(e).Z_(t)}function $c(e){e.ga=new Lo({getRemoteKeysForTarget:t=>{let n=e.Ea.get(t);return n===void 0?H():e.remoteSyncer.getRemoteKeysForTarget(n)},Rt:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),bl(e).start(),e.fa.aa()}function el(e){return tl(e)&&!bl(e).M_()&&e.Ta.size>0}function tl(e){return N(e).Va.size===0}function nl(e){e.ga=void 0}async function rl(e){e.fa.set(`Online`)}async function il(e){e.Ta.forEach(((t,n)=>{Zc(e,t)}))}async function al(e,t){nl(e),el(e)?(e.fa.la(t),$c(e)):e.fa.set(`Unknown`)}async function ol(e,t,n){if(e.fa.set(`Online`),t instanceof Po&&t.state===2&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds){if(e.Ta.has(r)){let t=e.Ea.get(r);t!==void 0&&(await e.remoteSyncer.rejectListen(t,n),e.Ia.delete(t),e.Ea.delete(r)),e.Ta.delete(r)}e.ga.removeTarget(r)}}(e,t)}catch(n){A(Wc,`Failed to remove targets %s: %s `,t.targetIds.join(`,`),n),await sl(e,n)}else if(t instanceof Mo?e.ga.Xe(t):t instanceof No?e.ga.it(t):e.ga.tt(t),!n.isEqual(R.min()))try{let t=await uc(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.ga.Pt(t);n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{let r=e.Ta.get(t);r&&(e.Ta.set(t,r.withResumeToken(Kr.EMPTY_BYTE_STRING,r.snapshotVersion)),Qc(e,t),Zc(e,new Ss(r.target,t,n,r.sequenceNumber)))}));let r=function(e,t){let n=new Map;t.targetChanges.forEach(((t,r)=>{let i=e.Ea.get(r);i!==void 0&&n.set(i,t)}));let r=new zr(I);return t.targetMismatches.forEach(((t,n)=>{let i=e.Ea.get(t);i!==void 0&&(r=r.insert(i,n))})),new Ao(t.snapshotVersion,n,r,t.documentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(r)}(e,n)}catch(t){A(Wc,`Failed to raise snapshot:`,t),await sl(e,t)}}async function sl(e,t,n){if(!Er(t))throw t;e.Va.add(1),await qc(e),e.fa.set(`Offline`),n||=()=>uc(e.localStore),e.asyncQueue.enqueueRetryable((async()=>{A(Wc,`Retrying IndexedDB access`),await n(),e.Va.delete(1),await Kc(e)}))}function cl(e,t){return t().catch((n=>sl(e,n,t)))}async function ll(e){let t=N(e),n=xl(t),r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Or;for(;ul(t);)try{let e=await pc(t.localStore,r);if(e===null){t.Pa.length===0&&n.B_();break}r=e.batchId,dl(t,e)}catch(e){await sl(t,e)}fl(t)&&pl(t)}function ul(e){return tl(e)&&e.Pa.length<10}function dl(e,t){e.Pa.push(t);let n=xl(e);n.x_()&&n.X_&&n.Y_(t.mutations)}function fl(e){return tl(e)&&!xl(e).M_()&&e.Pa.length>0}function pl(e){xl(e).start()}async function ml(e){xl(e).na()}async function hl(e){let t=xl(e);for(let n of e.Pa)t.Y_(n.mutations)}async function gl(e,t,n){let r=e.Pa.shift(),i=_o.from(r,t,n);await cl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ll(e)}async function _l(e,t){t&&xl(e).X_&&await async function(e,t){if(function(e){return xo(e)&&e!==P.ABORTED}(t.code)){let n=e.Pa.shift();xl(e).N_(),await cl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ll(e)}}(e,t),fl(e)&&pl(e)}async function vl(e,t){let n=N(e);n.asyncQueue.verifyOperationInProgress(),A(Wc,`RemoteStore received new credentials`);let r=tl(n);n.Va.add(3),await qc(n),r&&n.fa.set(`Unknown`),await n.remoteSyncer.handleCredentialChange(t),n.Va.delete(3),await Kc(n)}async function yl(e,t){let n=N(e);t?(n.Va.delete(2),await Kc(n)):t||(n.Va.add(2),await qc(n),n.fa.set(`Unknown`))}function bl(e){return e.pa||(e.pa=function(e,t,n){let r=N(e);return r.ia(),new Rc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Ho:rl.bind(null,e),Xo:il.bind(null,e),e_:al.bind(null,e),J_:ol.bind(null,e)}),e.da.push((async t=>{t?(e.pa.N_(),el(e)?$c(e):e.fa.set(`Unknown`)):(await e.pa.stop(),nl(e))}))),e.pa}function xl(e){return e.ya||(e.ya=function(e,t,n){let r=N(e);return r.ia(),new zc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Ho:()=>Promise.resolve(),Xo:ml.bind(null,e),e_:_l.bind(null,e),ea:hl.bind(null,e),ta:gl.bind(null,e)}),e.da.push((async t=>{t?(e.ya.N_(),await ll(e)):(await e.ya.stop(),e.Pa.length>0&&(A(Wc,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))}))),e.ya}var Sl=class e{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,a){let o=new e(t,n,Date.now()+r,i,a);return o.start(r),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(P.CANCELLED,`Operation cancelled`+(e?`: `+e:``))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle===null?Promise.resolve():(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e))))))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Cl(e,t){if(Pn(`AsyncQueue`,`${t}: ${e}`),Er(e))return new F(P.UNAVAILABLE,`${t}: ${e}`);throw e}var wl=class e{static emptySet(t){return new e(t.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(e,t)=>L.comparator(e.key,t.key),this.keyedMap=Ea(),this.sortedSet=new zr(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){let e=n.getNext().key,t=r.getNext().key;if(!e.isEqual(t))return!1}return!0}toString(){let e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?`DocumentSet ()`:`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(t,n){let r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}},Tl=class{constructor(){this.wa=new zr(L.comparator)}track(e){let t=e.doc.key,n=this.wa.get(t);n?e.type!==0&&n.type===3?this.wa=this.wa.insert(t,e):e.type===3&&n.type!==1?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.wa=this.wa.remove(t):e.type===1&&n.type===2?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):j(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){let e=[];return this.wa.inorderTraversal(((t,n)=>{e.push(n)})),e}},El=class e{constructor(e,t,n,r,i,a,o,s,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,a){let o=[];return n.forEach((e=>{o.push({type:0,doc:e})})),new e(t,n,wl.emptySet(n),o,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}},Dl=class{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some((e=>e.Fa()))}},Ol=class{constructor(){this.queries=kl(),this.onlineState=`Unknown`,this.Ma=new Set}terminate(){(function(e,t){let n=N(e),r=n.queries;n.queries=kl(),r.forEach(((e,n)=>{for(let e of n.Ca)e.onError(t)}))})(this,new F(P.ABORTED,`Firestore shutting down`))}};function kl(){return new Sa((e=>ga(e)),ha)}async function Al(e,t){let n=N(e),r=3,i=t.query,a=n.queries.get(i);a?!a.va()&&t.Fa()&&(r=2):(a=new Dl,r=+!t.Fa());try{switch(r){case 0:a.Da=await n.onListen(i,!0);break;case 1:a.Da=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){let n=Cl(e,`Initialization of query '${_a(t.query)}' failed`);t.onError(n);return}n.queries.set(i,a),a.Ca.push(t),t.xa(n.onlineState),a.Da&&t.Oa(a.Da)&&Pl(n)}async function jl(e,t){let n=N(e),r=t.query,i=3,a=n.queries.get(r);if(a){let e=a.Ca.indexOf(t);e>=0&&(a.Ca.splice(e,1),a.Ca.length===0?i=+!t.Fa():!a.va()&&t.Fa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ml(e,t){let n=N(e),r=!1;for(let e of t){let t=e.query,i=n.queries.get(t);if(i){for(let t of i.Ca)t.Oa(e)&&(r=!0);i.Da=e}}r&&Pl(n)}function Nl(e,t,n){let r=N(e),i=r.queries.get(t);if(i)for(let e of i.Ca)e.onError(n);r.queries.delete(t)}function Pl(e){e.Ma.forEach((e=>{e.next()}))}var Fl,Il;(Il=Fl||={}).Na=`default`,Il.Cache=`cache`;var Ll=class{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState=`Unknown`,this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)n.type!==3&&t.push(n);e=new El(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;let n=t!==`Offline`;return(!this.options.$a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t===`Offline`)}qa(e){if(e.docChanges.length>0)return!0;let t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ua(e){e=El.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Fl.Cache}},Rl=class{constructor(e){this.key=e}},zl=class{constructor(e){this.key=e}},Bl=class{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=H(),this.mutatedKeys=H(),this.ru=ba(e),this.iu=new wl(this.ru)}get su(){return this.eu}ou(e,t){let n=t?t._u:new Tl,r=t?t.iu:this.iu,i=t?t.mutatedKeys:this.mutatedKeys,a=r,o=!1,s=this.query.limitType===`F`&&r.size===this.query.limit?r.last():null,c=this.query.limitType===`L`&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{let l=r.get(e),u=va(this.query,t)?t:null,d=!!l&&this.mutatedKeys.has(l.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),p=!1;l&&u?l.data.isEqual(u.data)?d!==f&&(n.track({type:3,doc:u}),p=!0):this.au(l,u)||(n.track({type:2,doc:u}),p=!0,(s&&this.ru(u,s)>0||c&&this.ru(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(s||c)&&(o=!0)),p&&(u?(a=a.add(u),i=f?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))})),this.query.limit!==null)for(;a.size>this.query.limit;){let e=this.query.limitType===`F`?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{iu:a,_u:n,Ss:o,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;let a=e._u.ba();a.sort(((e,t)=>function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{At:e})}};return n(e)-n(t)}(e.type,t.type)||this.ru(e.doc,t.doc))),this.uu(n),r??=!1;let o=t&&!r?this.cu():[],s=this.nu.size===0&&this.current&&!r?1:0,c=s!==this.tu;return this.tu=s,a.length!==0||c?{snapshot:new El(this.query,e.iu,i,a,e.mutatedKeys,s===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:o}:{lu:o}}xa(e){return this.current&&e===`Offline`?(this.current=!1,this.applyChanges({iu:this.iu,_u:new Tl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach((e=>this.eu=this.eu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.eu=this.eu.delete(e))),this.current=e.current)}cu(){if(!this.current)return[];let e=this.nu;this.nu=H(),this.iu.forEach((e=>{this.hu(e.key)&&(this.nu=this.nu.add(e.key))}));let t=[];return e.forEach((e=>{this.nu.has(e)||t.push(new zl(e))})),this.nu.forEach((n=>{e.has(n)||t.push(new Rl(n))})),t}Pu(e){this.eu=e.Ls,this.nu=H();let t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return El.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}},K=`SyncEngine`,q=class{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}},Vl=class{constructor(e){this.key=e,this.Iu=!1}},Hl=class{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Eu={},this.Ru=new Sa((e=>ga(e)),ha),this.Au=new Map,this.Vu=new Set,this.du=new zr(L.comparator),this.mu=new Map,this.fu=new Gs,this.gu={},this.pu=new Map,this.yu=js._r(),this.onlineState=`Unknown`,this.wu=void 0}get isPrimaryClient(){return!0===this.wu}};async function Ul(e,t,n=!0){let r=du(e),i,a=r.Ru.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.Tu()):i=await Gl(r,t,n,!0),i}async function Wl(e,t){await Gl(du(e),t,!0,!1)}async function Gl(e,t,n,r){let i=await mc(e.localStore,fa(t)),a=i.targetId,o=e.sharedClientState.addLocalQueryTarget(a,n),s;return r&&(s=await Kl(e,t,a,o===`current`,i.resumeToken)),e.isPrimaryClient&&n&&Yc(e.remoteStore,i),s}async function Kl(e,t,n,r,i){e.Su=(t,n,r)=>async function(e,t,n,r){let i=t.view.ou(n);i.Ss&&(i=await gc(e.localStore,t.query,!1).then((({documents:e})=>t.view.ou(e,i))));let a=r&&r.targetChanges.get(t.targetId),o=r&&r.targetMismatches.get(t.targetId)!=null,s=t.view.applyChanges(i,e.isPrimaryClient,a,o);return au(e,t.targetId,s.lu),s.snapshot}(e,t,n,r);let a=await gc(e.localStore,t,!0),o=new Bl(t,a.Ls),s=o.ou(a.documents),c=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!==`Offline`,i),l=o.applyChanges(s,e.isPrimaryClient,c);au(e,n,l.lu);let u=new q(t,n,o);return e.Ru.set(t,u),e.Au.has(n)?e.Au.get(n).push(t):e.Au.set(n,[t]),l.snapshot}async function ql(e,t,n){let r=N(e),i=r.Ru.get(t),a=r.Au.get(i.targetId);if(a.length>1)return r.Au.set(i.targetId,a.filter((e=>!ha(e,t)))),void r.Ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xc(r.remoteStore,i.targetId),ru(r,i.targetId)})).catch(wr)):(ru(r,i.targetId),await hc(r.localStore,i.targetId,!0))}async function Jl(e,t){let n=N(e),r=n.Ru.get(t),i=n.Au.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function Yl(e,t,n){let r=fu(e);try{let e=await function(e,t){let n=N(e),r=hr.now(),i=t.reduce(((e,t)=>e.add(t.key)),H()),a,o;return n.persistence.runTransaction(`Locally write mutations`,`readwrite`,(e=>{let s=wa(),c=H();return n.Ms.getEntries(e,i).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,s))).next((i=>{a=i;let o=[];for(let e of t){let t=co(e,a.get(e.key).overlayedDocument);t!=null&&o.push(new W(e.key,t,Mi(t.value.mapValue),no.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;let r=t.applyToLocalDocumentSet(a,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Da(a)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.gu[e.currentUser.toKey()];r||=new zr(I),r=r.insert(t,n),e.gu[e.currentUser.toKey()]=r}(r,e.batchId,n),await cu(r,e.changes),await ll(r.remoteStore)}catch(e){let t=Cl(e,`Failed to persist write`);n.reject(t)}}async function Xl(e,t){let n=N(e);try{let e=await dc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{let r=n.mu.get(t);r&&(M(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.Iu=!0:e.modifiedDocuments.size>0?M(r.Iu,14607):e.removedDocuments.size>0&&(M(r.Iu,42227),r.Iu=!1))})),await cu(n,e,t)}catch(e){await wr(e)}}function Zl(e,t,n){let r=N(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let e=[];r.Ru.forEach(((n,r)=>{let i=r.view.xa(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){let n=N(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(let e of n.Ca)e.xa(t)&&(r=!0)})),r&&Pl(n)}(r.eventManager,t),e.length&&r.Eu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ql(e,t,n){let r=N(e);r.sharedClientState.updateQueryState(t,`rejected`,n);let i=r.mu.get(t),a=i&&i.key;if(a){let e=new zr(L.comparator);e=e.insert(a,B.newNoDocument(a,R.min()));let n=H().add(a);await Xl(r,new Ao(R.min(),new Map,new zr(I),e,n)),r.du=r.du.remove(a),r.mu.delete(t),su(r)}else await hc(r.localStore,t,!1).then((()=>ru(r,t,n))).catch(wr)}async function $l(e,t){let n=N(e),r=t.batch.batchId;try{let e=await lc(n.localStore,t);nu(n,r,null),tu(n,r),n.sharedClientState.updateMutationState(r,`acknowledged`),await cu(n,e)}catch(e){await wr(e)}}async function eu(e,t,n){let r=N(e);try{let e=await function(e,t){let n=N(e);return n.persistence.runTransaction(`Reject batch`,`readwrite-primary`,(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(M(t!==null,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);nu(r,t,n),tu(r,t),r.sharedClientState.updateMutationState(t,`rejected`,n),await cu(r,e)}catch(e){await wr(e)}}function tu(e,t){(e.pu.get(t)||[]).forEach((e=>{e.resolve()})),e.pu.delete(t)}function nu(e,t,n){let r=N(e),i=r.gu[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.gu[r.currentUser.toKey()]=i}}function ru(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(let r of e.Au.get(t))e.Ru.delete(r),n&&e.Eu.bu(r,n);e.Au.delete(t),e.isPrimaryClient&&e.fu.Qr(t).forEach((t=>{e.fu.containsKey(t)||iu(e,t)}))}function iu(e,t){e.Vu.delete(t.path.canonicalString());let n=e.du.get(t);n!==null&&(Xc(e.remoteStore,n),e.du=e.du.remove(t),e.mu.delete(n),su(e))}function au(e,t,n){for(let r of n)r instanceof Rl?(e.fu.addReference(r.key,t),ou(e,r)):r instanceof zl?(A(K,`Document no longer in limbo: `+r.key),e.fu.removeReference(r.key,t),e.fu.containsKey(r.key)||iu(e,r.key)):j(19791,{Du:r})}function ou(e,t){let n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Vu.has(r)||(A(K,`New document in limbo: `+n),e.Vu.add(r),su(e))}function su(e){for(;e.Vu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Vu.values().next().value;e.Vu.delete(t);let n=new L(nr.fromString(t)),r=e.yu.next();e.mu.set(r,new Vl(n)),e.du=e.du.insert(n,r),Yc(e.remoteStore,new Ss(fa(sa(n.path)),r,`TargetPurposeLimboResolution`,Dr.ce))}}async function cu(e,t,n){let r=N(e),i=[],a=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach(((e,s)=>{o.push(r.Su(s,t,n).then((e=>{if((e||n)&&r.isPrimaryClient){let t=e?!e.fromCache:n?.targetChanges.get(s.targetId)?.current;r.sharedClientState.updateQueryState(s.targetId,t?`current`:`not-current`)}if(e){i.push(e);let t=tc.Is(s.targetId,e);a.push(t)}})))})),await Promise.all(o),r.Eu.J_(i),await async function(e,t){let n=N(e);try{await n.persistence.runTransaction(`notifyLocalViewChanges`,`readwrite`,(e=>z.forEach(t,(t=>z.forEach(t.Ps,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>z.forEach(t.Ts,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Er(e))throw e;A(ic,`Failed to update sequence numbers: `+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Cs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Cs=n.Cs.insert(t,i)}}}(r.localStore,a))}async function lu(e,t){let n=N(e);if(!n.currentUser.isEqual(t)){A(K,`User change. New user:`,t.toKey());let e=await cc(n.localStore,t);n.currentUser=t,function(e,t){e.pu.forEach((e=>{e.forEach((e=>{e.reject(new F(P.CANCELLED,t))}))})),e.pu.clear()}(n,`'waitForPendingWrites' promise is rejected due to a user change.`),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await cu(n,e.Os)}}function uu(e,t){let n=N(e),r=n.mu.get(t);if(r&&r.Iu)return H().add(r.key);{let e=H(),r=n.Au.get(t);if(!r)return e;for(let t of r){let r=n.Ru.get(t);e=e.unionWith(r.view.su)}return e}}function du(e){let t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ql.bind(null,t),t.Eu.J_=Ml.bind(null,t.eventManager),t.Eu.bu=Nl.bind(null,t.eventManager),t}function fu(e){let t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$l.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eu.bind(null,t),t}var pu=class{constructor(){this.kind=`memory`,this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return sc(this.persistence,new rc,e.initialUser,this.serializer)}Mu(e){return new Zs($s.Ai,this.serializer)}Fu(e){return new yc}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};pu.provider={build:()=>new pu};var mu=class extends pu{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){M(this.persistence.referenceDelegate instanceof ec,46915);let n=this.persistence.referenceDelegate.garbageCollector;return new Is(n,e.asyncQueue,t)}Mu(e){let t=this.cacheSizeBytes===void 0?As.DEFAULT:As.withCacheSize(this.cacheSizeBytes);return new Zs((e=>ec.Ai(e,t)),this.serializer)}},hu=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=lu.bind(null,this.syncEngine),await yl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ol}()}createDatastore(e){let t=Pc(e.databaseInfo.databaseId),n=Mc(e.databaseInfo);return Hc(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Gc(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Zl(this.syncEngine,e,0)),function(){return Sc.v()?new Sc:new bc}())}createSyncEngine(e,t){return function(e,t,n,r,i,a,o){let s=new Hl(e,t,n,r,i,a);return o&&(s.wu=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){let t=N(e);A(Wc,`RemoteStore shutting down.`),t.Va.add(5),await qc(t),t.ma.shutdown(),t.fa.set(`Unknown`)}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}};hu.provider={build:()=>new hu};var gu=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Pn(`Uncaught Error in snapshot listener:`,e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}},_u=`FirestoreClient`,vu=class{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=kn.UNAUTHENTICATED,this.clientId=Jn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{A(_u,`Received user=`,e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(A(_u,`Received new app check token=`,e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=Cl(t,`Failed to shutdown persistence`);e.reject(n)}})),e.promise}};async function yu(e,t){e.asyncQueue.verifyOperationInProgress(),A(_u,`Initializing OfflineComponentProvider`);let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await cc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function bu(e,t){e.asyncQueue.verifyOperationInProgress();let n=await xu(e);A(_u,`Initializing OnlineComponentProvider`),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>vl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>vl(t.remoteStore,n))),e._onlineComponents=t}async function xu(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A(_u,`Using user provided OfflineComponentProvider`);try{await yu(e,e._uninitializedComponentsProvider._offline)}catch(t){let n=t;if(!function(e){return e.name===`FirebaseError`?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!(typeof DOMException<`u`&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}(n))throw n;Fn(`Error using user provided cache. Falling back to memory cache: `+n),await yu(e,new pu)}}else A(_u,`Using default OfflineComponentProvider`),await yu(e,new mu(void 0));return e._offlineComponents}async function Su(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A(_u,`Using user provided OnlineComponentProvider`),await bu(e,e._uninitializedComponentsProvider._online)):(A(_u,`Using default OnlineComponentProvider`),await bu(e,new hu))),e._onlineComponents}function Cu(e){return Su(e).then((e=>e.syncEngine))}async function wu(e){let t=await Su(e),n=t.eventManager;return n.onListen=Ul.bind(null,t.syncEngine),n.onUnlisten=ql.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Wl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Jl.bind(null,t.syncEngine),n}function Tu(e,t,n,r){let i=new gu(r),a=new Ll(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Al(await wu(e),a))),()=>{i.ku(),e.asyncQueue.enqueueAndForget((async()=>jl(await wu(e),a)))}}function Eu(e,t,n={}){let r=new Rn;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){let a=new gu({next:s=>{a.ku(),t.enqueueAndForget((()=>jl(e,o)));let c=s.docs.has(n);!c&&s.fromCache?i.reject(new F(P.UNAVAILABLE,`Failed to get document because the client is offline.`)):c&&s.fromCache&&r&&r.source===`server`?i.reject(new F(P.UNAVAILABLE,`Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)`)):i.resolve(s)},error:e=>i.reject(e)}),o=new Ll(sa(n.path),a,{includeMetadataChanges:!0,$a:!0});return Al(e,o)}(await wu(e),e.asyncQueue,t,n,r))),r.promise}function Du(e,t){let n=new Rn;return e.asyncQueue.enqueueAndForget((async()=>Yl(await Cu(e),t,n))),n.promise}function Ou(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var ku=`ComponentProvider`,Au=new Map;function ju(e,t,n,r,i){return new ii(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ou(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}var Mu=`firestore.googleapis.com`,Nu=!0,Pu=class{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(P.INVALID_ARGUMENT,`Can't provide ssl option if host option is not set`);this.host=Mu,this.ssl=Nu}else this.host=e.host,this.ssl=e.ssl??Nu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ks;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ns)throw new F(P.INVALID_ARGUMENT,`cacheSizeBytes must be at least 1048576`);this.cacheSizeBytes=e.cacheSizeBytes}or(`experimentalForceLongPolling`,e.experimentalForceLongPolling,`experimentalAutoDetectLongPolling`,e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ou(e.experimentalLongPollingOptions??{}),function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Fu=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type=`firestore-lite`,this._persistenceKey=`(lite)`,this._settings=new Pu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask=`notTerminated`}get app(){if(!this._app)throw new F(P.FAILED_PRECONDITION,`Firestore was not initialized using the Firebase SDK. 'app' is not available`);return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==`notTerminated`}_setSettings(e){if(this._settingsFrozen)throw new F(P.FAILED_PRECONDITION,`Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.`);this._settings=new Pu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new Bn;switch(e.type){case`firstParty`:return new Wn(e.sessionIndex||`0`,e.iamToken||null,e.authTokenFactory||null);case`provider`:return e.client;default:throw new F(P.INVALID_ARGUMENT,`makeAuthCredentialsProvider failed due to invalid credential type`)}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask===`notTerminated`&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask===`notTerminated`?await this._terminate():this._terminateTask=`notTerminated`}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=Au.get(e);t&&(A(ku,`Removing Datastore`),Au.delete(e),t.terminate())}(this),Promise.resolve()}};function Iu(e,t,n,r={}){e=ur(e,Fu);let i=Ce(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},s=`${t}:${n}`;i&&we(`https://${s}`),a.host!==Mu&&a.host!==s&&Fn(`Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.`);let c={...a,host:s,ssl:i,emulatorOptions:r};if(!be(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if(typeof r.mockUserToken==`string`)t=r.mockUserToken,n=kn.MOCK_USER;else{t=w(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new F(P.INVALID_ARGUMENT,`mockUserToken must contain 'sub' or 'user_id' field!`);n=new kn(i)}e._authCredentials=new Vn(new zn(t,n))}}var Lu=class e{constructor(e,t,n){this.converter=t,this._query=n,this.type=`query`,this.firestore=e}withConverter(t){return new e(this.firestore,t,this._query)}},Ru=class e{constructor(e,t,n){this.converter=t,this._key=n,this.type=`document`,this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(fr(n,e._jsonSchema))return new e(t,r||null,new L(nr.fromString(n.referencePath)))}};Ru._jsonSchemaVersion=`firestore/documentReference/1.0`,Ru._jsonSchema={type:dr(`string`,Ru._jsonSchemaVersion),referencePath:dr(`string`)};var zu=class e extends Lu{constructor(e,t,n){super(e,t,sa(n)),this._path=n,this.type=`collection`}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ru(this.firestore,null,new L(e))}withConverter(t){return new e(this.firestore,t,this._path)}};function J(e,t,...n){if(e=Se(e),arguments.length===1&&(t=Jn.newId()),ar(`doc`,`path`,t),e instanceof Fu){let r=nr.fromString(t,...n);return sr(r),new Ru(e,null,new L(r))}{if(!(e instanceof Ru||e instanceof zu))throw new F(P.INVALID_ARGUMENT,`Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore`);let r=e._path.child(nr.fromString(t,...n));return sr(r),new Ru(e.firestore,e instanceof zu?e.converter:null,new L(r))}}var Bu=`AsyncQueue`,Vu=class{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Fc(this,`async_queue_retry`),this.cc=()=>{let e=Nc();e&&A(Bu,`Visibility state changed to `+e.visibilityState),this.F_.y_()},this.lc=e;let t=Nc();t&&typeof t.addEventListener==`function`&&t.addEventListener(`visibilitychange`,this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;let t=Nc();t&&typeof t.removeEventListener==`function`&&t.removeEventListener(`visibilitychange`,this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise((()=>{}));let t=new Rn;return this.Pc((()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.nc.push(e),this.Tc())))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Er(e))throw e;A(Bu,`Operation failed with retryable error: `+e)}this.nc.length>0&&this.F_.g_((()=>this.Tc()))}}Pc(e){let t=this.lc.then((()=>(this._c=!0,e().catch((e=>{throw this.oc=e,this._c=!1,Pn(`INTERNAL UNHANDLED ERROR: `,Hu(e)),e})).then((e=>(this._c=!1,e))))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);let r=Sl.createAndSchedule(this,e,t,n,(e=>this.Ic(e)));return this.sc.push(r),r}hc(){this.oc&&j(47125,{Ec:Hu(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(let t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then((()=>{this.sc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(let t of this.sc)if(t.skipDelay(),e!==`all`&&t.timerId===e)break;return this.Rc()}))}dc(e){this.uc.push(e)}Ic(e){let t=this.sc.indexOf(e);this.sc.splice(t,1)}};function Hu(e){let t=e.message||``;return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}var Uu=class extends Fu{constructor(e,t,n,r){super(e,t,n,r),this.type=`firestore`,this._queue=new Vu,this._persistenceKey=r?.name||`[DEFAULT]`}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Vu(e),this._firestoreClient=void 0,await e}}};function Wu(e,t){let n=typeof e==`object`?e:Xt(),r=typeof e==`string`?e:t||ai,i=Wt(n,`firestore`).getImmediate({identifier:r});if(!i._initialized){let e=le(`firestore`);e&&Iu(i,...e)}return i}function Gu(e){if(e._terminated)throw new F(P.FAILED_PRECONDITION,`The client has already been terminated.`);return e._firestoreClient||Ku(e),e._firestoreClient}function Ku(e){let t=e._freezeSettings(),n=ju(e._databaseId,e._app?.options.appId||``,e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new vu(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}var Y=class e{constructor(e){this._byteString=e}static fromBase64String(t){try{return new e(Kr.fromBase64String(t))}catch(e){throw new F(P.INVALID_ARGUMENT,`Failed to construct data from Base64 string: `+e)}}static fromUint8Array(t){return new e(Kr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return`Bytes(base64: `+this.toBase64()+`)`}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(fr(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};Y._jsonSchemaVersion=`firestore/bytes/1.0`,Y._jsonSchema={type:dr(`string`,Y._jsonSchemaVersion),bytes:dr(`string`)};var qu=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(P.INVALID_ARGUMENT,`Invalid field name at argument $(i + 1). Field names must not be empty.`);this._internalPath=new ir(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}},Ju=class{constructor(e){this._methodName=e}},Yu=class e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(P.INVALID_ARGUMENT,`Latitude must be a number between -90 and 90, but was: `+e);if(!isFinite(t)||t<-180||t>180)throw new F(P.INVALID_ARGUMENT,`Longitude must be a number between -180 and 180, but was: `+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return I(this._lat,e._lat)||I(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(fr(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};Yu._jsonSchemaVersion=`firestore/geoPoint/1.0`,Yu._jsonSchema={type:dr(`string`,Yu._jsonSchemaVersion),latitude:dr(`number`),longitude:dr(`number`)};var Xu=class e{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(fr(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e==`number`)))return new e(t.vectorValues);throw new F(P.INVALID_ARGUMENT,`Expected 'vectorValues' field to be a number array`)}}};Xu._jsonSchemaVersion=`firestore/vectorValue/1.0`,Xu._jsonSchema={type:dr(`string`,Xu._jsonSchemaVersion),vectorValues:dr(`object`)};var Zu=/^__.*__$/,Qu=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask===null?new U(e,this.data,t,this.fieldTransforms):new W(e,this.data,this.fieldMask,t,this.fieldTransforms)}},$u=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new W(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function ed(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{dataSource:e})}}var td=class e{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new e({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return hd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc(`Document fields must not be empty`);if(ed(this.dataSource)&&Zu.test(e))throw this.bc(`Document fields cannot begin and end with "__"`)}},nd=class{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Pc(e)}V(e,t,n,r=!1){return new td({dataSource:e,methodName:t,targetDoc:n,path:ir.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function rd(e){let t=e._freezeSettings(),n=Pc(e._databaseId);return new nd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function id(e,t,n,r,i,a={}){let o=e.V(a.merge||a.mergeFields?2:0,t,n,i);dd(`Data must be an object, but it was:`,o,r);let s=ld(r,o),c,l;if(a.merge)c=new Wr(o.fieldMask),l=o.fieldTransforms;else if(a.mergeFields){let e=[];for(let r of a.mergeFields){let i=fd(t,r,n);if(!o.contains(i))throw new F(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gd(e,i)||e.push(i)}c=new Wr(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Qu(new ji(s),c,l)}var ad=class e extends Ju{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(t){return t instanceof e}};function od(e,t,n,r){let i=e.V(1,t,n);dd(`Data must be an object, but it was:`,i,r);let a=[],o=ji.empty();return Lr(r,((e,r)=>{let s=md(t,e,n);r=Se(r);let c=i.wc(s);if(r instanceof ad)a.push(s);else{let e=cd(r,c);e!=null&&(a.push(s),o.set(s,e))}})),new $u(o,new Wr(a),i.fieldTransforms)}function sd(e,t,n,r,i,a){let o=e.V(1,t,n),s=[fd(t,r,n)],c=[i];if(a.length%2!=0)throw new F(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<a.length;e+=2)s.push(fd(t,a[e])),c.push(a[e+1]);let l=[],u=ji.empty();for(let e=s.length-1;e>=0;--e)if(!gd(l,s[e])){let t=s[e],n=c[e];n=Se(n);let r=o.wc(t);if(n instanceof ad)l.push(t);else{let e=cd(n,r);e!=null&&(l.push(t),u.set(t,e))}}return new $u(u,new Wr(l),o.fieldTransforms)}function cd(e,t){if(ud(e=Se(e)))return dd(`Unsupported field value:`,t,e),ld(e,t);if(e instanceof Ju)return function(e,t){if(!ed(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.bc(`Nested arrays are not supported`);return function(e,t){let n=[],r=0;for(let i of e){let e=cd(i,t.Sc(r));e??={nullValue:`NULL_VALUE`},n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if((e=Se(e))===null)return{nullValue:`NULL_VALUE`};if(typeof e==`number`)return La(t.serializer,e);if(typeof e==`boolean`)return{booleanValue:e};if(typeof e==`string`)return{stringValue:e};if(e instanceof Date){let n=hr.fromDate(e);return{timestampValue:Go(t.serializer,n)}}if(e instanceof hr){let n=new hr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Go(t.serializer,n)}}if(e instanceof Yu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Y)return{bytesValue:Ko(t.serializer,e._byteString)};if(e instanceof Ru){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yo(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Xu)return function(e,t){let n=e instanceof Xu?e.toArray():e;return{mapValue:{fields:{[ci]:{stringValue:di},[fi]:{arrayValue:{values:n.map((e=>{if(typeof e!=`number`)throw t.bc(`VectorValues must only contain numeric values.`);return Fa(t.serializer,e)}))}}}}}}(e,t);if(xs(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${lr(e)}`)}(e,t)}function ld(e,t){let n={};return Rr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Lr(e,((e,r)=>{let i=cd(r,t.gc(e));i!=null&&(n[e]=i)})),{mapValue:{fields:n}}}function ud(e){return!(typeof e!=`object`||!e||e instanceof Array||e instanceof Date||e instanceof hr||e instanceof Yu||e instanceof Y||e instanceof Ru||e instanceof Ju||e instanceof Xu||xs(e))}function dd(e,t,n){if(!ud(n)||!cr(n)){let r=lr(n);throw r===`an object`?t.bc(e+` a custom object`):t.bc(e+` `+r)}}function fd(e,t,n){if((t=Se(t))instanceof qu)return t._internalPath;if(typeof t==`string`)return md(e,t);throw hd(`Field path arguments must be of type string or `,e,!1,void 0,n)}var pd=RegExp(`[~\\*/\\[\\]]`);function md(e,t,n){if(t.search(pd)>=0)throw hd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qu(...t.split(`.`))._internalPath}catch{throw hd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hd(e,t,n,r,i){let a=r&&!r.isEmpty(),o=i!==void 0,s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=`. `;let c=``;return(a||o)&&(c+=` (found`,a&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=`)`),new F(P.INVALID_ARGUMENT,s+e+c)}function gd(e,t){return e.some((e=>e.isEqual(t)))}var _d=class{convertValue(e,t=`none`){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Yr(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t=`none`){let n={};return Lr(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){let t=e.fields?.[fi].arrayValue?.values?.map((e=>Yr(e.doubleValue)));return new Xu(t)}convertGeoPoint(e){return new Yu(Yr(e.latitude),Yr(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case`previous`:let n=ni(e);return n==null?null:this.convertValue(n,t);case`estimate`:return this.convertTimestamp(ri(e));default:return null}}convertTimestamp(e){let t=Jr(e);return new hr(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=nr.fromString(e);M(bs(n),9688,{name:e});let r=new oi(n.get(1),n.get(3)),i=new L(n.popFirst(5));return r.isEqual(t)||Pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}},vd=class extends _d{constructor(e){super(),this.firestore=e}convertBytes(e){return new Y(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ru(this.firestore,null,t)}},yd=`@firebase/firestore`,bd=`4.15.0`;function xd(e){return function(e,t){if(typeof e!=`object`||!e)return!1;let n=e;for(let e of t)if(e in n&&typeof n[e]==`function`)return!0;return!1}(e,[`next`,`error`,`complete`])}var X=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ru(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Sd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){let t=this._document.data.field(fd(`DocumentSnapshot.get`,e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Sd=class extends X{data(){return super.data()}};function Cd(e){if(e.limitType===`L`&&e.explicitOrderBy.length===0)throw new F(P.UNIMPLEMENTED,`limitToLast() queries require specifying at least one orderBy() clause`)}function wd(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}var Td=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Ed=class e extends X{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Dd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(fd(`DocumentSnapshot.get`,e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,`DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`);let t=this._document,n={};return n.type=e._jsonSchemaVersion,n.bundle=``,n.bundleSource=`DocumentSnapshot`,n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,`previous`),n.bundle=(this._firestore,this.ref.path,`NOT SUPPORTED`),n)}};Ed._jsonSchemaVersion=`firestore/documentSnapshot/1.0`,Ed._jsonSchema={type:dr(`string`,Ed._jsonSchemaVersion),bundleSource:dr(`string`,`DocumentSnapshot`),bundleName:dr(`string`),bundle:dr(`string`)};var Dd=class extends Ed{data(e={}){return super.data(e)}},Od=class e{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Td(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Dd(this._firestore,this._userDataWriter,n.key,n,new Td(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(P.INVALID_ARGUMENT,`To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().`);return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{let r=new Dd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Td(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:`added`,doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||e.type!==3)).map((t=>{let r=new Dd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Td(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return t.type!==0&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),t.type!==1&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:kd(t.type),doc:r,oldIndex:i,newIndex:a}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,`QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`);let t={};t.type=e._jsonSchemaVersion,t.bundleSource=`QuerySnapshot`,t.bundleName=Jn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let n=[],r=[],i=[];return this.docs.forEach((e=>{e._document!==null&&(n.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,`previous`)),i.push(e.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,`NOT SUPPORTED`),t}};function kd(e){switch(e){case 0:return`added`;case 2:case 3:return`modified`;case 1:return`removed`;default:return j(61501,{type:e})}}Od._jsonSchemaVersion=`firestore/querySnapshot/1.0`,Od._jsonSchema={type:dr(`string`,Od._jsonSchemaVersion),bundleSource:dr(`string`,`QuerySnapshot`),bundleName:dr(`string`),bundle:dr(`string`)};function Ad(e){e=ur(e,Ru);let t=ur(e.firestore,Uu);return Eu(Gu(t),e._key).then((n=>Fd(t,e,n)))}function jd(e,t,n){e=ur(e,Ru);let r=ur(e.firestore,Uu),i=wd(e.converter,t,n);return Pd(r,[id(rd(r),`setDoc`,e._key,i,e.converter!==null,n).toMutation(e._key,no.none())])}function Md(e,t,n,...r){e=ur(e,Ru);let i=ur(e.firestore,Uu),a=rd(i),o;return o=typeof(t=Se(t))==`string`||t instanceof qu?sd(a,`updateDoc`,e._key,t,n,r):od(a,`updateDoc`,e._key,t),Pd(i,[o.toMutation(e._key,no.exists(!0))])}function Nd(e,...t){e=Se(e);let n={includeMetadataChanges:!1,source:`default`},r=0;typeof t[r]!=`object`||xd(t[r])||(n=t[r++]);let i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(xd(t[r])){let e=t[r];t[r]=e.next?.bind(e),t[r+1]=e.error?.bind(e),t[r+2]=e.complete?.bind(e)}let a,o,s;if(e instanceof Ru)o=ur(e.firestore,Uu),s=sa(e._key.path),a={next:n=>{t[r]&&t[r](Fd(o,e,n))},error:t[r+1],complete:t[r+2]};else{let n=ur(e,Lu);o=ur(n.firestore,Uu),s=n._query;let i=new vd(o);a={next:e=>{t[r]&&t[r](new Od(o,i,n,e))},error:t[r+1],complete:t[r+2]},Cd(e._query)}return Tu(Gu(o),s,i,a)}function Pd(e,t){return Du(Gu(e),t)}function Fd(e,t,n){let r=n.docs.get(t._key);return new Ed(e,new vd(e),t._key,r,new Td(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){jn(Jt),Ut(new Te(`firestore`,((e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider(`app`).getImmediate(),a=new Uu(new Hn(e.getProvider(`auth-internal`)),new Kn(i,e.getProvider(`app-check-internal`)),si(i,n),i);return r={useFetchStreams:t,...r},a._setSettings(r),a}),`PUBLIC`).setMultipleInstances(!0)),Zt(yd,bd,e),Zt(yd,bd,`esm2020`)})();var Z=Wu(Yt({apiKey:`あなたのapiKey`,authDomain:`murdermystery-f537e.firebaseapp.com`,projectId:`murdermystery-f537e`,storageBucket:`murdermystery-f537e.firebasestorage.app`,messagingSenderId:`184071396432`,appId:`1:184071396432:web:0160e30d26f331bca20555`})),Q=`/`,Id={overview:`${Q}sheets/overview-sheet.png`,floorMapPages:[`${Q}sheets/maps/floor-map-1.png`,`${Q}sheets/maps/floor-map-2.png`],characters:{川岸道也:`${Q}sheets/characters/kawagishi-michiya.png`,宮崎圭:`${Q}sheets/characters/miyazaki-kei.png`,緑野大地:`${Q}sheets/characters/midorino-daichi.png`,黒坂秀樹:`${Q}sheets/characters/kurosaka-hideki.png`,谷アリス:`${Q}sheets/characters/tani-alice.png`},additional:{川岸道也:`${Q}sheets/additional/kawagishi-michiya.png`,宮崎圭:`${Q}sheets/additional/miyazaki-kei.png`,緑野大地:`${Q}sheets/additional/midorino-daichi.png`,黒坂秀樹:`${Q}sheets/additional/kurosaka-hideki.png`,谷アリス:`${Q}sheets/additional/tani-alice.png`},endings:{川岸道也:`${Q}sheets/endings/kawagishi-michiya.png`,宮崎圭:`${Q}sheets/endings/miyazaki-kei.png`,緑野大地:`${Q}sheets/endings/midorino-daichi.png`,黒坂秀樹:`${Q}sheets/endings/kurosaka-hideki.png`,谷アリス:`${Q}sheets/endings/tani-alice.png`},investigation:e=>`${Q}sheets/investigation/${e}.png`,specialInvestigation:e=>`${Q}sheets/special-investigation/${e}.png`},Ld=[`A`,`B`,`C`,`D`,`E`],Rd=[`川岸道也`,`宮崎圭`,`緑野大地`,`黒坂秀樹`,`谷アリス`],zd=[{slot:`A`,name:`川岸道也`},{slot:`B`,name:`宮崎圭`},{slot:`C`,name:`緑野大地`},{slot:`D`,name:`黒坂秀樹`},{slot:`E`,name:`谷アリス`}];function Bd(e){return Id.investigation(e)}var Vd=[1,2,3,4].flatMap(e=>[...zd.map(({slot:t,name:n})=>{let r=`item-${t}-${e}`;return{id:r,label:`調査${e}`,content:`${n}に関する調査${e}の内容`,owner:null,imageSrc:Bd(r),isPublic:!1,privateViewers:[],viewers:[]}}),{id:`victim-${e}`,label:`調査${e}`,content:`被害者・梅村萌絵の様子${e}の内容`,owner:null,imageSrc:Bd(`victim-${e}`),isPublic:!1,privateViewers:[],viewers:[]},{id:`villa-${e}`,label:`調査${e}`,content:`山荘の様子${e}の内容`,owner:null,imageSrc:Bd(`villa-${e}`),isPublic:!1,privateViewers:[],viewers:[]}]),Hd=[1,2,3,4,5].map(e=>({id:`special-${e}`,title:`特別調査${e}`,imageSrc:Id.specialInvestigation(`special-${e}`),isPublic:!1,viewers:[]})),Ud=[{id:`waiting`,title:`入室待機`,minutes:0,description:``},{id:`intro`,title:`作品概要ルール説明`,minutes:10,description:``},{id:`investigation1`,title:`調査前半`,minutes:20,description:``},{id:`break`,title:`休憩`,minutes:0,description:``},{id:`investigation2`,title:`調査後半`,minutes:20,description:``},{id:`debate`,title:`議論(密談不可)`,minutes:15,description:``},{id:`reasoning`,title:`推理`,minutes:5,description:``},{id:`vote`,title:`投票`,minutes:5,description:``},{id:`ending`,title:`エンディング・解説`,minutes:10,description:``}],Wd=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),$=o(((e,t)=>{t.exports=Wd()}))();function Gd({renderTitle:e,roomIdInput:t,setRoomIdInput:n,goCreateName:r,goJoinName:i}){let a=t.trim(),o=e=>{n(e.toUpperCase().replace(/[^A-Z0-9]/g,``).slice(0,8))};return(0,$.jsxs)(`main`,{className:`app dark-game-app home-page`,children:[e(),(0,$.jsxs)(`section`,{className:`card dark-panel home-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`ROOM MENU`}),(0,$.jsx)(`h2`,{children:`ルーム`}),(0,$.jsx)(`p`,{className:`home-lead`,children:`GMはルームを作成してください。参加者は共有されたルーム番号を入力して入室します。`}),(0,$.jsx)(`div`,{className:`home-actions`,children:(0,$.jsx)(`button`,{type:`button`,className:`primary-action-button home-create-button`,onClick:r,children:`ルーム作成`})}),(0,$.jsxs)(`div`,{className:`join-room-box`,"aria-label":`ルーム参加フォーム`,children:[(0,$.jsx)(`label`,{className:`input-label`,htmlFor:`room-id-input`,children:`ルーム番号`}),(0,$.jsx)(`div`,{className:`join-room-input-row solo-input-row`,children:(0,$.jsx)(`input`,{id:`room-id-input`,value:t,onChange:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&a&&i()},placeholder:`例：ABC123`,autoComplete:`off`,spellCheck:!1,inputMode:`text`,maxLength:8})}),(0,$.jsx)(`div`,{className:`home-actions join-home-actions`,children:(0,$.jsx)(`button`,{type:`button`,className:`primary-action-button home-join-button large-centered-button`,onClick:i,disabled:!a,children:`ルームに参加`})}),(0,$.jsx)(`p`,{className:`home-help-text`,children:`半角英数字で入力してください。Enterキーでも参加できます。`})]})]})]})}function Kd({renderTitle:e,title:t,playerName:n,setPlayerName:r,onDecide:i,onBack:a,decideLabel:o,subText:s}){return(0,$.jsxs)(`main`,{className:`app dark-game-app name-page`,children:[e(),(0,$.jsxs)(`section`,{className:`card dark-panel name-card centered-form-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`PLAYER NAME`}),(0,$.jsx)(`h2`,{children:t}),s&&(0,$.jsx)(`p`,{className:`muted-text`,children:s}),(0,$.jsx)(`label`,{className:`input-label`,htmlFor:`player-name-input`,children:`名前`}),(0,$.jsx)(`input`,{className:`name-input`,id:`player-name-input`,value:n,onChange:e=>r(e.target.value),placeholder:`名前を入力`,autoComplete:`off`}),(0,$.jsxs)(`div`,{className:`form-actions centered-form-actions`,children:[(0,$.jsx)(`button`,{className:`primary-action-button large-centered-button`,onClick:i,children:o}),(0,$.jsx)(`button`,{className:`large-secondary-button`,onClick:a,children:`戻る`})]})]})]})}function qd({renderTitle:e,room:t,isGm:n,onStart:r}){let i=t.players||{},a=Object.values(i).filter(Boolean).length;return(0,$.jsxs)(`main`,{className:`app dark-game-app waiting-page`,children:[e(),(0,$.jsxs)(`section`,{className:`card dark-panel waiting-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`WAITING ROOM`}),(0,$.jsx)(`h2`,{children:`参加者待機`}),(0,$.jsxs)(`p`,{className:`muted-text`,children:[`参加者がそろうまで待機してください。現在の参加者は `,a,` / `,Ld.length,` 人です。`]}),(0,$.jsxs)(`div`,{className:`waiting-player-list`,children:[(0,$.jsxs)(`div`,{className:`waiting-player-row waiting-gm-row`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`GM`}),(0,$.jsx)(`strong`,{children:t.gmName||`未設定`})]}),Ld.map(e=>(0,$.jsxs)(`div`,{className:`waiting-player-row`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`参加者`}),(0,$.jsx)(`strong`,{children:i[e]||`未参加`})]},e))]}),n&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:r,children:`キャラクター振り分けへ進む`})]})]})}function Jd({renderTitle:e,room:t,isGm:n,playerName:r,onAssign:i,onComplete:a}){let o=t.players||{},s=t.characterAssignments||{};return n?(0,$.jsxs)(`main`,{className:`app dark-game-app character-select-page`,children:[e(),(0,$.jsxs)(`section`,{className:`card dark-panel character-select-gm-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`GM CONTROL`}),(0,$.jsx)(`h2`,{children:`キャラクター振り分け`}),(0,$.jsx)(`p`,{className:`muted-text`,children:`参加者にキャラクターを割り当ててください。`}),(0,$.jsx)(`div`,{className:`character-assign-list`,children:Ld.map(e=>{let t=o[e],n=s[e]||``;return(0,$.jsxs)(`div`,{className:`character-assign-row`,children:[(0,$.jsxs)(`div`,{className:`character-assign-player`,children:[(0,$.jsx)(`span`,{className:`slot-badge`,children:e}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`info-label`,children:`参加者名`}),(0,$.jsx)(`strong`,{children:t||`未参加`})]})]}),(0,$.jsxs)(`select`,{value:n,disabled:!t,onChange:t=>i(e,t.target.value),children:[(0,$.jsx)(`option`,{value:``,children:`キャラクターを選択`}),Rd.map(e=>(0,$.jsx)(`option`,{value:e,children:e},e))]})]},e)})}),(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:a,children:`振り分けを完了して開始`})]})]}):(0,$.jsxs)(`main`,{className:`app dark-game-app character-select-page`,children:[e(),(0,$.jsxs)(`section`,{className:`card dark-panel character-select-player-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`CHARACTER ASSIGNMENT`}),(0,$.jsx)(`h2`,{children:`キャラクター選択`}),(0,$.jsx)(`div`,{className:`my-player-info single-info`,children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`info-label`,children:`あなたの名前`}),(0,$.jsx)(`strong`,{children:r})]})}),(0,$.jsxs)(`div`,{className:`character-assign-waiting-box`,children:[(0,$.jsxs)(`p`,{className:`character-assign-loading-text`,children:[`GMがキャラクターを振り分けています・・・`,(0,$.jsx)(`span`,{className:`loading-spinner`,"aria-label":`読み込み中`})]}),(0,$.jsx)(`p`,{className:`muted-text`,children:`この画面のまま待機してください。`})]})]})]})}var Yd={川岸道也:`role-kawagishi`,宮崎圭:`role-miyazaki`,緑野大地:`role-midorino`,黒坂秀樹:`role-kurosaka`,谷アリス:`role-tani`};function Xd(e,t=0){return e.imageSrcs?.[t]||e.imageSrc}var Zd={id:`overview`,title:`作品概要シート`,imageSrc:Id.overview},Qd={id:`floor-map`,title:`見取り図`,imageSrc:Id.floorMapPages[0],imageSrcs:Id.floorMapPages};function $d(e){return Yd[e]||`role-unknown`}function ef(e){let t=Id.characters[e];return t?{id:`character-${e}`,title:`${e}キャラシート`,imageSrc:t}:null}function tf(e){let t=Id.additional[e];return t?{id:`additional-${e}`,title:`${e}追加シート`,imageSrc:t}:null}function nf(e){return e.startsWith(`item-A-`)?`川岸道也`:e.startsWith(`item-B-`)?`宮崎圭`:e.startsWith(`item-C-`)?`緑野大地`:e.startsWith(`item-D-`)?`黒坂秀樹`:e.startsWith(`item-E-`)?`谷アリス`:e.startsWith(`victim-`)?`被害者の様子`:e.startsWith(`villa-`)?`山荘の様子`:`調査カード`}function rf(e){return{id:`investigation-card-${e.id}`,title:`${nf(e.id)} ${e.label}`,imageSrc:e.imageSrc||Id.investigation(e.id),kind:`investigation`,sourceId:e.id}}function af(e){return{id:`special-investigation-${e.id}`,title:e.title,imageSrc:e.imageSrc,kind:`special`,sourceId:e.id}}function of({renderTitle:e,room:t,isGm:n,myCharacter:r,playerName:i,onDistributeSheets:a,onStartQuestionTime:o,onNext:s,onShareSheetWithPlayer:c,onToggleSheetPublic:l}){let[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!0),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!1),[x,ee]=(0,_.useState)(100),[te,S]=(0,_.useState)(0),[ne,re]=(0,_.useState)(!1),ie=(0,_.useRef)({x:0,y:0}),[ae,C]=(0,_.useState)({x:0,y:0}),[oe,se]=(0,_.useState)(!1),ce=(0,_.useRef)({x:0,y:0}),le=t.phase===`opening`?`intro`:t.phase,ue=t.characterAssignments?.[r]||`未設定`,de=(0,_.useMemo)(()=>{let e=[Zd];if(n){let n=Ld.map(e=>t.characterAssignments?.[e]).filter(e=>!!e),r=n.map(e=>ef(e)).filter(e=>!!e),i=n.map(e=>tf(e)).filter(e=>!!e),a=(t.cells||[]).map(rf),o=(t.specialInvestigationSheets||[]).map(af);return e.push(...r,Qd,...i,...a,...o),e}if(t.characterSheetsDistributed){let t=ef(ue);t&&e.push(t),e.push(Qd)}if(t.additionalInfoDistributed){let t=tf(ue);t&&e.push(t)}let i=t.manualSheetViewers||{},a=new Set(Object.entries(i).filter(([,e])=>e.includes(r)).map(([e])=>e)),o=new Set(t.publicSheetIds||[]),s=Ld.map(e=>t.characterAssignments?.[e]).filter(e=>!!e),c=[...s.map(e=>ef(e)).filter(e=>!!e),Qd,...s.map(e=>tf(e)).filter(e=>!!e)];for(let t of c)(a.has(t.id)||o.has(t.id))&&!e.some(e=>e.id===t.id)&&e.push(t);let l=(t.cells||[]).filter(e=>e.owner===r||e.isPublic||e.viewers?.includes(r)||o.has(`investigation-card-${e.id}`)||a.has(`investigation-card-${e.id}`)).map(rf),u=(t.specialInvestigationSheets||[]).filter(e=>e.isPublic||e.viewers?.includes(r)||o.has(`special-investigation-${e.id}`)||a.has(`special-investigation-${e.id}`)).map(af);return e.push(...l,...u),e},[t,n,ue,r]),w=de.find(e=>e.id===u),T=Ld.filter(e=>!!t.players?.[e]),fe=t.investigationOrderDecided&&t.investigationTurnOrder?.length?t.investigationTurnOrder.filter(e=>T.includes(e)):T,pe=[{key:`GM`,roleName:`GM`,participantName:t.gmName,colorClass:`role-gm`},...fe.map(e=>{let n=t.characterAssignments?.[e]||`未設定`;return{key:e,roleName:n,participantName:t.players?.[e]||`未入室`,colorClass:$d(n)}})],me=t.questionTimeStarted?`質問タイム`:`作品概要ルール説明`;(0,_.useEffect)(()=>{let e=e=>{e.key.toLowerCase()===`e`&&u&&(e.preventDefault(),d(null))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[u]),(0,_.useEffect)(()=>{if(n)return;v(!0);let e=window.setTimeout(()=>v(!1),4200);return()=>window.clearTimeout(e)},[n,ue]),(0,_.useEffect)(()=>{n||t.characterSheetsDistributed&&h(!0)},[n,t.characterSheetsDistributed]);let he=e=>{b(!1),S(0),C({x:0,y:0}),d(t=>t===e?null:e)},ge=()=>{d(null)},E=e=>{ee(Math.min(400,Math.max(50,e)))},_e=e=>{let t=e.target;t.closest(`button`)||t.closest(`.sheet-image-stage`)||e.button===0&&(se(!0),ce.current={x:e.clientX,y:e.clientY},e.currentTarget.setPointerCapture(e.pointerId))},ve=e=>{if(!oe)return;let t=e.clientX-ce.current.x,n=e.clientY-ce.current.y;C(e=>({x:e.x+t,y:e.y+n})),ce.current={x:e.clientX,y:e.clientY}},ye=e=>{oe&&(se(!1),e.currentTarget.releasePointerCapture(e.pointerId))},be=e=>{e.button!==0&&e.button!==2||(e.preventDefault(),re(!0),ie.current={x:e.clientX,y:e.clientY},e.currentTarget.setPointerCapture(e.pointerId))},xe=e=>{if(!ne)return;e.preventDefault();let t=e.clientX-ie.current.x,n=e.clientY-ie.current.y;e.currentTarget.scrollLeft-=t,e.currentTarget.scrollTop-=n,ie.current={x:e.clientX,y:e.clientY}},Se=e=>{ne&&(re(!1),e.currentTarget.releasePointerCapture(e.pointerId))};return(0,$.jsxs)(`main`,{className:`app dark-game-app opening-page`,children:[e(),(0,$.jsxs)(`div`,{className:`opening-layout cinematic-layout`,children:[(0,$.jsxs)(`aside`,{className:`sheet-index-panel dark-side-panel`,children:[n?(0,$.jsxs)(`div`,{className:`side-role-name-card role-gm`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`あなたの役名`}),(0,$.jsx)(`strong`,{children:`GM`})]}):(0,$.jsxs)(`div`,{className:`side-role-name-card ${$d(ue)}`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`あなたの役名`}),(0,$.jsx)(`strong`,{children:ue})]}),(0,$.jsxs)(`div`,{className:`panel-heading-block`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`INDEX`}),(0,$.jsx)(`h2`,{children:`捜査資料`})]}),(0,$.jsx)(`div`,{className:`sheet-index-list`,children:de.map(e=>(0,$.jsxs)(`button`,{className:`sheet-index-button ${u===e.id?`active`:``}`,onClick:()=>he(e.id),"aria-pressed":u===e.id,children:[(0,$.jsx)(`span`,{children:e.title}),(0,$.jsx)(`small`,{children:u===e.id?`表示中 / クリックで閉じる`:`クリックで表示`})]},e.id))})]}),(0,$.jsxs)(`section`,{className:`card dark-panel opening-main-panel permanent-opening-panel`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`OPENING`}),(0,$.jsx)(`h2`,{children:me}),(0,$.jsx)(`p`,{className:`opening-player-name`,children:n?`GMとして進行中`:`あなたの名前：${i}`}),t.questionTimeStarted?(0,$.jsxs)(`div`,{className:`question-time-notice`,children:[(0,$.jsx)(`strong`,{children:`質問タイム`}),(0,$.jsx)(`p`,{children:`この時間では作品内容についてプレイヤー間で話すことは禁止です。`}),(0,$.jsx)(`p`,{children:`自分の情報を漏らしてはいけません。`})]}):(0,$.jsx)(`p`,{className:`opening-description`,children:`GMの案内に従い、作品概要と進行ルールを確認してください。このオープニング画面は、シートを開いている間も背景として保持されます。`}),n&&(0,$.jsxs)(`div`,{className:`opening-gm-control`,children:[!t.characterSheetsDistributed&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:a,children:`キャラシート配布`}),t.characterSheetsDistributed&&!t.questionTimeStarted&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:o,children:`質問タイムへ`}),t.characterSheetsDistributed&&t.questionTimeStarted&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:s,children:`調査順番決定へ`})]})]}),(0,$.jsxs)(`aside`,{className:`schedule-panel dark-side-panel`,children:[pe.length>0&&(0,$.jsx)(`div`,{className:`other-role-list`,"aria-label":`役名と参加者名`,children:pe.map(e=>(0,$.jsxs)(`div`,{className:`other-role-chip ${e.colorClass}`,children:[e.roleName,`：`,e.participantName]},e.key))}),(0,$.jsxs)(`div`,{className:`panel-heading-block`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`TIMELINE`}),(0,$.jsx)(`h2`,{children:`スケジュール`})]}),(0,$.jsx)(`ol`,{className:`schedule-list`,children:Ud.map(e=>(0,$.jsx)(`li`,{className:`schedule-item ${e.id===le?`current`:``}`,children:(0,$.jsx)(`div`,{className:`schedule-item-header`,children:(0,$.jsx)(`strong`,{children:e.title})})},e.id))})]})]}),w&&(0,$.jsx)(`div`,{className:`sheet-viewer-layer`,role:`dialog`,"aria-modal":`false`,"aria-label":w.title,children:(0,$.jsxs)(`section`,{className:`sheet-viewer-frame draggable-sheet-window ${oe?`is-window-dragging`:``}`,style:{transform:`translate(${ae.x}px, ${ae.y}px)`},onPointerDown:_e,onPointerMove:ve,onPointerUp:ye,onPointerCancel:ye,children:[(0,$.jsxs)(`div`,{className:`sheet-viewer-header`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`RECEIVED SHEET`}),(0,$.jsx)(`h2`,{children:w.title})]}),(0,$.jsxs)(`div`,{className:`sheet-viewer-actions`,children:[w.imageSrcs&&w.imageSrcs.length>1&&(0,$.jsxs)(`div`,{className:`sheet-page-controls`,"aria-label":`ページ切り替え`,children:[(0,$.jsx)(`button`,{onClick:()=>{b(!1),S(e=>Math.max(0,e-1))},disabled:te<=0,children:`←`}),(0,$.jsxs)(`span`,{children:[te+1,` / `,w.imageSrcs.length]}),(0,$.jsx)(`button`,{onClick:()=>{b(!1),S(e=>Math.min(w.imageSrcs.length-1,e+1))},disabled:te>=w.imageSrcs.length-1,children:`→`})]}),(0,$.jsxs)(`div`,{className:`sheet-zoom-controls`,"aria-label":`シートの拡大縮小`,children:[(0,$.jsx)(`button`,{onClick:()=>E(x-25),"aria-label":`縮小`,children:`−`}),(0,$.jsxs)(`span`,{children:[x,`%`]}),(0,$.jsx)(`button`,{onClick:()=>E(x+25),"aria-label":`拡大`,children:`＋`}),(0,$.jsx)(`button`,{onClick:()=>E(100),children:`等倍`})]}),n&&c&&l&&w&&(0,$.jsxs)(`div`,{className:`sheet-share-controls`,"aria-label":`シート共有操作`,children:[(0,$.jsx)(`button`,{onClick:()=>l(w),children:w.kind===`special`?t.specialInvestigationSheets?.find(e=>e.id===w.sourceId)?.isPublic?`全体公開を戻す`:`全体公開`:w.kind===`investigation`?t.cells?.find(e=>e.id===w.sourceId)?.isPublic?`全体公開を戻す`:`全体公開`:t.publicSheetIds?.includes(w.id)?`全体公開を戻す`:`全体公開`}),T.map(e=>(0,$.jsx)(`button`,{onClick:()=>c(w,e),children:(t.manualSheetViewers?.[w.id]||[]).includes(e)?`${t.players?.[e]}への送信を戻す`:`${t.players?.[e]}に送る`},e))]}),(0,$.jsx)(`button`,{className:`sheet-close-button`,onClick:ge,"aria-label":`シートを閉じる`,children:`閉じる`})]})]}),(0,$.jsx)(`div`,{className:`sheet-image-stage ${ne?`is-panning`:``}`,onPointerDown:be,onPointerMove:xe,onPointerUp:Se,onPointerCancel:Se,onContextMenu:e=>e.preventDefault(),children:y?(0,$.jsxs)(`div`,{className:`sheet-image-placeholder`,children:[(0,$.jsx)(`strong`,{children:`シート画像が未配置です`}),(0,$.jsxs)(`p`,{children:[`対応する画像を `,(0,$.jsx)(`code`,{children:`public/sheets/`}),` 以下に置くと、ここに表示されます。`]})]}):(0,$.jsx)(`div`,{className:`sheet-image-canvas`,style:{width:`${x}%`},children:(0,$.jsx)(`img`,{src:Xd(w,te),alt:w.title,className:`overview-sheet-image`,draggable:!1,onError:()=>b(!0)})})}),(0,$.jsx)(`p`,{className:`sheet-viewer-help`,children:`ウィンドウ本体を長押ししながらドラッグすると位置を動かせます。シート画像の上では左クリック長押し＋ドラッグで視点を移動できます。閉じるボタン / Eキー / 左の捜査資料で閉じられます。`})]})}),f&&(0,$.jsx)(`div`,{className:`receive-window-backdrop`,role:`dialog`,"aria-modal":`true`,children:(0,$.jsxs)(`div`,{className:`receive-window dark-modal`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`SYSTEM MESSAGE`}),(0,$.jsx)(`h2`,{children:`作品概要シートを受け取りました`}),(0,$.jsx)(`p`,{children:`左側の捜査資料から、いつでも表示できます。`}),(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>p(!1),children:`確認`})]})}),m&&(0,$.jsx)(`div`,{className:`receive-window-backdrop`,role:`dialog`,"aria-modal":`true`,children:(0,$.jsxs)(`div`,{className:`receive-window dark-modal`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`SYSTEM MESSAGE`}),(0,$.jsx)(`h2`,{children:`キャラシートを受け取りました`}),(0,$.jsx)(`p`,{children:`左側の捜査資料から、キャラクターシートと見取り図を確認できます。`}),(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>h(!1),children:`確認`})]})}),g&&(0,$.jsx)(`div`,{className:`role-reveal-splash`,"aria-live":`polite`,children:(0,$.jsxs)(`div`,{className:`role-reveal-card`,children:[(0,$.jsx)(`span`,{children:`あなたは`}),(0,$.jsxs)(`strong`,{children:[`「`,ue,`」`]}),(0,$.jsx)(`span`,{children:`です`})]})})]})}var sf=[{key:`A`,label:`川岸道也`,className:`cell-kawagishi`},{key:`B`,label:`宮崎圭`,className:`cell-miyazaki`},{key:`C`,label:`緑野大地`,className:`cell-midorino`},{key:`D`,label:`黒坂秀樹`,className:`cell-kurosaka`},{key:`E`,label:`谷アリス`,className:`cell-tani`},{key:`victim`,label:`被害者の様子`,className:`cell-victim`},{key:`villa`,label:`山荘の様子`,className:`cell-villa`}];function cf(e,t){return Ld.includes(e)?`item-${e}-${t}`:`${e}-${t}`}function lf(e){return e.startsWith(`item-A-`)?`cell-kawagishi`:e.startsWith(`item-B-`)?`cell-miyazaki`:e.startsWith(`item-C-`)?`cell-midorino`:e.startsWith(`item-D-`)?`cell-kurosaka`:e.startsWith(`item-E-`)?`cell-tani`:e.startsWith(`victim-`)?`cell-victim`:e.startsWith(`villa-`)?`cell-villa`:``}function uf(e){return e.startsWith(`item-A-`)?0:e.startsWith(`item-B-`)?1:e.startsWith(`item-C-`)?2:e.startsWith(`item-D-`)?3:e.startsWith(`item-E-`)?4:e.startsWith(`victim-`)?5:e.startsWith(`villa-`)?6:-1}function df(e){let t=e.match(/-(\d+)$/);return t?Number(t[1]):-1}function ff(e){let t=uf(e),n=[`川岸道也`,`宮崎圭`,`緑野大地`,`黒坂秀樹`,`谷アリス`];return t>=0&&t<n.length?n[t]:null}function pf(e){return e===`川岸道也`?`role-kawagishi`:e===`宮崎圭`?`role-miyazaki`:e===`緑野大地`?`role-midorino`:e===`黒坂秀樹`?`role-kurosaka`:e===`谷アリス`?`role-tani`:`role-unknown`}function mf(e,t){let n=df(e.id),r=uf(e.id);return n===1?!0:n<1||r<0?!1:t.some(e=>{if(!e.owner)return!1;let t=df(e.id),i=uf(e.id);return Math.abs(t-n)+Math.abs(i-r)===1})}function hf(e,t){return t?e.players?.[t]||e.characterAssignments?.[t]||t:`未取得`}function gf({room:e,isGm:t,myCharacter:n,playerName:r,onClaimCell:i,onToggleCellPublic:a,onToggleCellPrivateShare:o,onTransferCellPrivateTalkTarget:s,onUseThunder:c,onAddThunder:l,onGoBreak:u,onDistributeAdditionalInfo:d,onGoInvestigation2:f,onGoDebate:p,onUpdateInvestigationOrder:m,onStartInvestigation:h,onStartPrivateTalk:g,onEndPrivateTalk:v,onGoReasoning:y,onGoVote:b}){let[x,ee]=(0,_.useState)(null),[te,S]=(0,_.useState)(!1),[ne,re]=(0,_.useState)(!1),[ie,ae]=(0,_.useState)(e.investigationTurnOrder||Ld),[C,oe]=(0,_.useState)(!1),[se,ce]=(0,_.useState)([]),[le,ue]=(0,_.useState)(!1),[de,w]=(0,_.useState)(!1),T=e.phase===`break`,fe=e.phase===`debate`,pe=e.phase===`reasoning`,me=e.investigationRound||1,he=!!e.investigationStarted,ge=pe?`推理`:fe?`議論(密談不可)`:T?`休憩`:me===2?`調査後半`:`調査前半`,E=(0,_.useMemo)(()=>Ld.filter(t=>!!e.players?.[t]),[e.players]),_e=(0,_.useMemo)(()=>{let t=(e.investigationTurnOrder||E).filter(e=>E.includes(e));return t.length?t:E},[e.investigationTurnOrder,E]),ve=e.players?.[e.currentTurnCharacter]||e.characterAssignments?.[e.currentTurnCharacter]||e.currentTurnCharacter,ye=(0,_.useMemo)(()=>new Map(e.cells.map(e=>[e.id,e])),[e.cells]),be=Array.from({length:Math.max(0,Math.min(6,e.thunderCount))}),xe=x?ye.get(x):null,Se=e.privateTalk?.participants||[],Ce=!t&&Se.includes(n);(0,_.useEffect)(()=>{ae(_e)},[_e.join(`|`)]),(0,_.useEffect)(()=>{t||e.additionalInfoDistributed&&re(!0)},[t,e.additionalInfoDistributed]),(0,_.useEffect)(()=>{if(!e.investigationStarted||!e.investigationStartedAt)return;ue(!0);let t=window.setTimeout(()=>ue(!1),2600);return()=>window.clearTimeout(t)},[e.investigationStartedAt]),(0,_.useEffect)(()=>{if(!pe)return;w(!0);let e=window.setTimeout(()=>w(!1),2600);return()=>window.clearTimeout(e)},[pe]);let we=r=>!r||t||!e.privateTalk?.participants?.includes(n)||!r.owner||!e.privateTalk.participants.includes(r.owner)?!1:!!r.privateViewers?.includes(n),Te=e=>e?t?!0:e.owner===n||!!e.isPublic||!!e.viewers?.includes(n)||we(e):!1,Ee=r=>{if(!r||t||T||fe||pe||!e.investigationStarted||(e.thunderCount??0)<=0||r.owner||e.currentTurnCharacter!==n)return!1;let i=e.characterAssignments?.[n];return ff(r.id)===i?!1:mf(r,e.cells)},De=e=>{S(!1),ee(e.id)},Oe=e=>{if(e){if(Te(e)){De(e);return}Ee(e)&&i(e.id)}},ke=n=>n?!t&&Te(n)?!0:pe?Te(n):(T||fe)&&!t||!e.investigationStarted&&!t?!1:Te(n)||Ee(n):!1,Ae=!!(xe?.owner&&(t||xe.owner===n)),je=(0,_.useMemo)(()=>{if(!xe?.owner||!e.privateTalk?.participants?.length||!e.privateTalk.participants.includes(xe.owner))return;let r=e.privateTalk.participants.find(e=>e!==xe.owner);if(r&&!(!t&&xe.owner!==n))return r},[xe,e.privateTalk,t,n]),D=(e,t)=>{let n=[...ie];n[e]=t,ae(n)},Me=()=>{let e=ie.slice(0,E.length),t=e.filter(e=>E.includes(e)),n=new Set(t);if(t.length!==E.length||n.size!==E.length){alert(`調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください`);return}m(e)},Ne=e=>{ce(t=>t.includes(e)?t.filter(t=>t!==e):t.length>=2?[t[1],e]:[...t,e])};return!T&&!fe&&me===1&&!e.investigationOrderDecided?(0,$.jsxs)(`section`,{className:`card dark-panel investigation-card investigation-setup-panel`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`INVESTIGATION SETUP`}),(0,$.jsx)(`h2`,{children:ge}),t?(0,$.jsxs)(`div`,{className:`order-setup-box`,children:[(0,$.jsx)(`h3`,{children:`調査する順番を決めてください`}),(0,$.jsx)(`p`,{className:`muted-text`,children:`全員が一度ずつ入るように順番を設定してください。`}),(0,$.jsx)(`div`,{className:`order-select-list`,children:E.map((t,n)=>(0,$.jsxs)(`label`,{className:`order-select-row`,children:[(0,$.jsxs)(`span`,{children:[n+1,`番目`]}),(0,$.jsxs)(`select`,{value:ie[n]||``,onChange:e=>D(n,e.target.value),children:[(0,$.jsx)(`option`,{value:``,children:`選択`}),E.map(t=>(0,$.jsxs)(`option`,{value:t,children:[e.players?.[t],`（`,e.characterAssignments?.[t]||t,`）`]},t))]})]},n))}),(0,$.jsx)(`div`,{className:`investigation-actions-row gm-investigation-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:Me,children:`順番決定`})})]}):(0,$.jsx)(`div`,{className:`waiting-investigation-start-box`,children:(0,$.jsx)(`strong`,{children:`お待ちください`})})]}):(0,$.jsxs)(`section`,{className:`card dark-panel investigation-card investigation-board-panel ${T?`is-break`:``} ${fe?`is-debate`:``} ${pe?`is-reasoning`:``}`,children:[(0,$.jsxs)(`div`,{className:`investigation-header-row`,children:[(0,$.jsxs)(`div`,{className:`investigation-heading-block`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`INVESTIGATION`}),(0,$.jsx)(`h2`,{children:ge}),(0,$.jsx)(`p`,{className:`muted-text`,children:t?`GMとして進行中`:`あなたの名前：${r}`})]}),(0,$.jsxs)(`div`,{className:`investigation-status-area`,children:[!T&&!fe&&!pe&&(0,$.jsxs)(`div`,{className:`turn-status-card`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`現在の調査ターン`}),(0,$.jsx)(`strong`,{children:ve})]}),(0,$.jsx)(`div`,{className:`thunder-icons`,"aria-label":`雷 ${e.thunderCount}個`,children:be.map((e,t)=>(0,$.jsx)(`span`,{"aria-hidden":`true`,children:`⚡`},t))})]})]}),!T&&!fe&&!pe&&!he&&(0,$.jsxs)(`div`,{className:`board-start-pending-note`,children:[(0,$.jsx)(`strong`,{children:`調査開始前`}),(0,$.jsx)(`span`,{children:`GMが調査開始を押すまで、参加者は調査マスに触れません。`})]}),!fe&&e.privateTalk?.participants?.length===2&&(0,$.jsxs)(`div`,{className:`private-talk-banner ${Ce?`active-for-me`:``}`,children:[(0,$.jsx)(`strong`,{children:`密談中`}),(0,$.jsx)(`span`,{children:e.privateTalk.participants.map(t=>`${e.characterAssignments?.[t]||t}：${e.players?.[t]}`).join(` / `)}),Ce&&(0,$.jsx)(`em`,{children:`あなたは密談中です。所有カードを密談相手だけに見せられます。`})]}),T&&(0,$.jsxs)(`div`,{className:`break-notice-box`,children:[(0,$.jsx)(`strong`,{children:`休憩中`}),(0,$.jsx)(`p`,{children:`休憩中は作品内容の会話は禁止です。`}),(0,$.jsx)(`p`,{children:`追加情報が配布されるまで、参加者は調査カードに触れません。`})]}),(0,$.jsxs)(`div`,{className:`investigation-grid-wrap`,children:[(0,$.jsx)(`div`,{className:`investigation-board-grid`,"aria-label":`調査マス`,children:[1,2,3,4].flatMap(t=>sf.map(r=>{let i=cf(r.key,t),a=ye.get(i),o=a?.owner===n,s=!!a?.owner,c=!!a?.isPublic,l=!!(e.privateTalk?.participants?.length===2&&a?.privateViewers?.some(t=>e.privateTalk?.participants.includes(t))),u=Te(a),d=a?mf(a,e.cells):!1,f=(e.thunderCount??0)>0,p=e.characterAssignments?.[n],m=a?ff(a.id)===p:!1,h=hf(e,a?.owner),g=pf(a?.owner?e.characterAssignments?.[a.owner]:void 0),_=ke(a),v=u&&a?.imageSrc?{"--cell-image":`url(${a.imageSrc})`}:void 0;return(0,$.jsxs)(`button`,{className:`investigation-cell-square ${lf(i)} ${s?`claimed`:``} ${o?`mine`:``} ${c?`public`:``} ${l?`private-shared`:``} ${u?`viewable`:``} ${d?`unlocked`:`locked`} ${m?`own-column`:``} `,disabled:!_,onClick:()=>Oe(a),title:s?`取得済み`:f?d?`取得可能`:`未開放`:`雷がありません`,style:v,children:[(0,$.jsx)(`span`,{children:a?.label||`未設定`}),s&&(0,$.jsx)(`i`,{className:`cell-owner-marker ${g}`,"aria-label":`取得者：${h}`}),c&&(0,$.jsx)(`em`,{className:`cell-public-badge`,children:`公開中`}),l&&(0,$.jsx)(`em`,{className:`cell-private-badge`,children:`密談共有`}),!s&&(0,$.jsx)(`small`,{className:`cell-owner-badge`,children:f?d?`未取得`:`未開放`:`雷なし`})]},i)}))}),(0,$.jsx)(`div`,{className:`investigation-board-labels`,"aria-label":`調査列の対応表`,children:sf.map(e=>(0,$.jsx)(`div`,{className:`board-column-label ${e.className}`,children:e.label},e.key))})]}),t?(0,$.jsx)(`div`,{className:`investigation-actions-row gm-investigation-actions`,children:pe?(0,$.jsx)(`div`,{className:`compact-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:b,children:`投票へ`})}):fe?(0,$.jsx)(`div`,{className:`compact-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:y,children:`推理へ`})}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`compact-actions`,children:[(0,$.jsx)(`button`,{onClick:c,disabled:e.thunderCount<=0,children:`雷を消す`}),(0,$.jsx)(`button`,{onClick:l,disabled:e.thunderCount>=6,children:`雷を追加`})]}),(0,$.jsx)(`div`,{className:`compact-actions`,children:e.privateTalk?.participants?.length===2?(0,$.jsx)(`button`,{onClick:v,children:`密談解除`}):(0,$.jsx)(`button`,{onClick:()=>oe(!0),children:`密談`})}),T?(0,$.jsxs)(`div`,{className:`compact-actions`,children:[!e.additionalInfoDistributed&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:d,children:`追加情報を配布`}),e.additionalInfoDistributed&&(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:f,children:`調査後半へ進む`})]}):he?me===1?(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:u,children:`休憩へ`}):(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:p,children:`議論時間へ`}):(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:h,children:`調査開始`})]})}):(0,$.jsx)(`div`,{className:`investigation-actions-row investigation-actions-spacer`,"aria-hidden":`true`}),xe&&(0,$.jsx)(`div`,{className:`investigation-card-viewer-layer`,role:`dialog`,"aria-modal":`false`,"aria-label":xe.label,children:(0,$.jsxs)(`section`,{className:`investigation-card-viewer-frame dark-modal`,children:[(0,$.jsxs)(`div`,{className:`investigation-card-viewer-header`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`INVESTIGATION CARD`}),(0,$.jsx)(`h2`,{children:xe.label}),xe.isPublic&&(0,$.jsx)(`p`,{className:`public-state-text`,children:`全体公開中`}),e.privateTalk?.participants?.length===2&&xe.privateViewers?.length?(0,$.jsxs)(`p`,{className:`public-state-text`,children:[`密談共有中：`,xe.privateViewers.map(t=>e.players?.[t]||t).join(`、`)]}):null]}),(0,$.jsxs)(`div`,{className:`investigation-card-viewer-actions`,children:[Ae&&(0,$.jsx)(`button`,{onClick:()=>a(xe.id),children:xe.isPublic?`全体公開を戻す`:`全体公開する`}),je&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{onClick:()=>o(xe.id,je),children:xe.privateViewers?.includes(je)?`${e.players?.[je]}への密談共有を戻す`:`${e.players?.[je]}にだけ見せる`}),(0,$.jsx)(`button`,{onClick:()=>s(xe.id,je),children:`${e.players?.[je]}に譲渡する`})]}),(0,$.jsx)(`button`,{onClick:()=>ee(null),children:`閉じる`})]})]}),(0,$.jsx)(`div`,{className:`investigation-card-image-stage`,children:te||!xe.imageSrc?(0,$.jsxs)(`div`,{className:`sheet-image-placeholder`,children:[(0,$.jsx)(`strong`,{children:`調査カード画像が未配置です`}),(0,$.jsxs)(`p`,{children:[(0,$.jsxs)(`code`,{children:[`public/sheets/investigation/`,xe.id,`.png`]}),` を置くと表示されます。`]}),(0,$.jsx)(`p`,{children:xe.content})]}):(0,$.jsx)(`img`,{src:xe.imageSrc,alt:xe.label,className:`investigation-card-image`,draggable:!1,onError:()=>S(!0)})})]})}),C&&(0,$.jsx)(`div`,{className:`receive-window-backdrop`,role:`dialog`,"aria-modal":`true`,children:(0,$.jsxs)(`div`,{className:`receive-window dark-modal private-talk-dialog`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`PRIVATE TALK`}),(0,$.jsx)(`h2`,{children:`密談する二人を選んでください`}),(0,$.jsx)(`div`,{className:`private-talk-select-list`,children:E.map(t=>(0,$.jsxs)(`button`,{className:se.includes(t)?`selected`:``,onClick:()=>Ne(t),children:[e.characterAssignments?.[t]||t,`：`,e.players?.[t]]},t))}),(0,$.jsxs)(`div`,{className:`compact-actions`,children:[(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>{if(se.length!==2){alert(`密談する二人を選んでください`);return}g(se),oe(!1),ce([])},children:`決定`}),(0,$.jsx)(`button`,{onClick:()=>oe(!1),children:`キャンセル`})]})]})}),ne&&(0,$.jsx)(`div`,{className:`receive-window-backdrop`,role:`dialog`,"aria-modal":`true`,children:(0,$.jsxs)(`div`,{className:`receive-window dark-modal`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`SYSTEM MESSAGE`}),(0,$.jsx)(`h2`,{children:`追加情報シートを受け取りました`}),(0,$.jsx)(`p`,{children:`左側の捜査資料から、追加情報シートを確認できます。`}),(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>re(!1),children:`確認`})]})}),le&&(0,$.jsx)(`div`,{className:`role-reveal-splash investigation-start-splash`,"aria-live":`polite`,children:(0,$.jsx)(`div`,{className:`role-reveal-card`,children:(0,$.jsx)(`strong`,{children:me===2?`後半開始`:`調査開始`})})}),de&&(0,$.jsx)(`div`,{className:`role-reveal-splash investigation-end-splash`,"aria-live":`polite`,children:(0,$.jsx)(`div`,{className:`role-reveal-card`,children:(0,$.jsx)(`strong`,{children:`調査終了`})})})]})}function _f(e,t){return`${e.players?.[t]||`未入室`}：${e.characterAssignments?.[t]||`未設定`}`}function vf({room:e,isGm:t,myCharacter:n,playerName:r,onGoVote:i,onSubmitVote:a,onGoEnding:o,onGoReasoning:s}){let[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(e.phase===`reasoning`),g=(0,_.useMemo)(()=>Ld.filter(t=>!!e.players?.[t]),[e.players]),v=e.votes||{},y=!!v[n];return(0,_.useEffect)(()=>{if(e.phase!==`reasoning`)return;h(!0);let t=window.setTimeout(()=>h(!1),2600);return()=>window.clearTimeout(t)},[e.phase]),e.phase===`debate`?(0,$.jsxs)(`section`,{className:`card dark-panel reasoning-card debate-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`DEBATE`}),(0,$.jsx)(`h2`,{children:`議論(密談不可)`}),(0,$.jsx)(`p`,{className:`muted-text`,children:t?`GMとして進行中`:`あなたの名前：${r}`}),(0,$.jsx)(`p`,{children:`全体議論の時間です。この時間は密談できません。`}),t&&(0,$.jsx)(`div`,{className:`investigation-actions-row gm-investigation-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:s,children:`推理へ`})})]}):e.phase===`reasoning`?(0,$.jsxs)(`section`,{className:`card dark-panel reasoning-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`REASONING`}),(0,$.jsx)(`h2`,{children:`推理`}),(0,$.jsx)(`p`,{className:`muted-text`,children:t?`GMとして進行中`:`あなたの名前：${r}`}),(0,$.jsx)(`p`,{children:`取得した情報を整理し、犯人だと思う人物を決めてください。`}),t&&(0,$.jsx)(`div`,{className:`investigation-actions-row gm-investigation-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:i,children:`投票へ`})}),m&&(0,$.jsx)(`div`,{className:`role-reveal-splash investigation-end-splash`,"aria-live":`polite`,children:(0,$.jsx)(`div`,{className:`role-reveal-card`,children:(0,$.jsx)(`strong`,{children:`調査終了`})})})]}):t?(0,$.jsxs)(`section`,{className:`card dark-panel vote-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`VOTE`}),(0,$.jsx)(`h2`,{children:`投票時間`}),(0,$.jsx)(`p`,{className:`muted-text`,children:`全員の投票状況を確認できます。`}),(0,$.jsx)(`div`,{className:`vote-status-list`,children:g.map(t=>{let n=v[t];return(0,$.jsxs)(`div`,{className:`vote-status-row`,children:[(0,$.jsx)(`strong`,{children:_f(e,t)}),(0,$.jsx)(`span`,{children:n?`投票済み → ${_f(e,n)}`:`未投票`})]},t)})}),(0,$.jsxs)(`div`,{className:`manual-ending-box`,children:[(0,$.jsx)(`h3`,{children:`配布するエンディングシートを選択`}),(0,$.jsx)(`div`,{className:`ending-select-list`,children:Rd.map(e=>(0,$.jsx)(`button`,{className:f===e?`selected`:``,onClick:()=>p(e),children:e},e))})]}),(0,$.jsx)(`div`,{className:`investigation-actions-row gm-investigation-actions`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>o(f),disabled:!f,children:`エンディングシートを配布`})})]}):(0,$.jsxs)(`section`,{className:`card dark-panel vote-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`VOTE`}),(0,$.jsx)(`h2`,{children:`投票時間`}),(0,$.jsxs)(`p`,{className:`muted-text`,children:[`あなたの名前：`,r]}),(0,$.jsx)(`p`,{className:`vote-main-instruction`,children:`犯人だと思う人に投票してください`}),(0,$.jsx)(`div`,{className:`vote-target-list`,children:g.map(t=>(0,$.jsxs)(`button`,{className:c===t?`selected`:``,disabled:t===n||y,onClick:()=>l(t),children:[_f(e,t),t===n&&(0,$.jsx)(`small`,{children:`自分には投票できません`})]},t))}),y?(0,$.jsxs)(`div`,{className:`vote-completed-box`,children:[(0,$.jsx)(`strong`,{children:`投票済み`}),(0,$.jsx)(`p`,{children:`GMがエンディングシートを配布するまでお待ちください。`})]}):(0,$.jsx)(`div`,{className:`investigation-actions-row`,children:(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>{if(!c){alert(`投票する相手を選択してください`);return}d(c)},disabled:!c,children:`投票する`})}),u&&(0,$.jsx)(`div`,{className:`receive-window-backdrop`,role:`dialog`,"aria-modal":`true`,children:(0,$.jsxs)(`div`,{className:`receive-window dark-modal`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`VOTE CONFIRM`}),(0,$.jsx)(`h2`,{children:`投票確認`}),(0,$.jsxs)(`p`,{children:[_f(e,u),` に投票します。`]}),(0,$.jsx)(`p`,{children:`もう一度「投票する」を押すと確定します。`}),(0,$.jsxs)(`div`,{className:`compact-actions`,children:[(0,$.jsx)(`button`,{className:`primary-action-button`,onClick:()=>{u&&(a(u),d(null))},children:`投票する`}),(0,$.jsx)(`button`,{onClick:()=>d(null),children:`戻る`})]})]})})]})}function yf({room:e,isGm:t,playerName:n}){let r=e.endingSheetRoleName||`未確定`;return(0,$.jsxs)(`section`,{className:`card dark-panel ending-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`ENDING`}),(0,$.jsx)(`h2`,{children:`エンディング`}),(0,$.jsx)(`p`,{className:`muted-text`,children:t?`GMとして進行中`:`あなたの名前：${n}`}),(0,$.jsxs)(`div`,{className:`ending-sheet-notice`,children:[(0,$.jsxs)(`strong`,{children:[r,` のエンディングシートを配布しました`]}),(0,$.jsx)(`p`,{children:`左側の捜査資料からエンディングシートを確認できます。`})]})]})}var bf={川岸道也:`role-kawagishi`,宮崎圭:`role-miyazaki`,緑野大地:`role-midorino`,黒坂秀樹:`role-kurosaka`,谷アリス:`role-tani`};function xf(e,t=0){return e.imageSrcs?.[t]||e.imageSrc}var Sf={id:`overview`,title:`作品概要シート`,imageSrc:Id.overview},Cf={id:`floor-map`,title:`見取り図`,imageSrc:Id.floorMapPages[0],imageSrcs:Id.floorMapPages};function wf(e){return bf[e]||`role-unknown`}function Tf(e){let t=Id.characters[e];return t?{id:`character-${e}`,title:`${e}キャラシート`,imageSrc:t}:null}function Ef(e){let t=Id.additional[e];return t?{id:`additional-${e}`,title:`${e}追加シート`,imageSrc:t}:null}function Df(e){let t=Id.endings[e];return t?{id:`ending-${e}`,title:`${e}エンディング`,imageSrc:t}:null}function Of(e,t){return{id:`investigation-card-${t.id}`,title:`${Af(t.id)} ${t.label}`,imageSrc:t.imageSrc||Id.investigation(t.id),kind:`investigation`,sourceId:t.id}}function kf(e){return{id:`special-investigation-${e.id}`,title:e.title,imageSrc:e.imageSrc,kind:`special`,sourceId:e.id}}function Af(e){return e.startsWith(`item-A-`)?`川岸道也`:e.startsWith(`item-B-`)?`宮崎圭`:e.startsWith(`item-C-`)?`緑野大地`:e.startsWith(`item-D-`)?`黒坂秀樹`:e.startsWith(`item-E-`)?`谷アリス`:e.startsWith(`victim-`)?`被害者の様子`:e.startsWith(`villa-`)?`山荘の様子`:`調査カード`}function jf(){let[e,t]=(0,_.useState)(()=>sessionStorage.getItem(`joinedRoomId`)?`game`:`home`),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(()=>sessionStorage.getItem(`joinedRoomId`)||``),[o,s]=(0,_.useState)(()=>sessionStorage.getItem(`playerName`)||``),[c,l]=(0,_.useState)(()=>sessionStorage.getItem(`myCharacter`)||`A`),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(100),[y,b]=(0,_.useState)(0),[x,ee]=(0,_.useState)(!1),te=(0,_.useRef)({x:0,y:0}),[S,ne]=(0,_.useState)({x:0,y:0}),[re,ie]=(0,_.useState)(!1),ae=(0,_.useRef)({x:0,y:0}),C=c===`GM`;(0,_.useEffect)(()=>{i&&sessionStorage.setItem(`joinedRoomId`,i)},[i]),(0,_.useEffect)(()=>{sessionStorage.setItem(`playerName`,o)},[o]),(0,_.useEffect)(()=>{sessionStorage.setItem(`myCharacter`,c)},[c]),(0,_.useEffect)(()=>{if(!i)return;let e=Nd(J(Z,`rooms`,i),e=>{e.exists()?(d(e.data()),t(`game`)):(sessionStorage.removeItem(`joinedRoomId`),a(``),d(null),t(`home`))});return()=>e()},[i]);let oe=()=>!u||C?``:u.characterAssignments?.[c]||`未設定`,se=(0,_.useMemo)(()=>{if(!u)return[];let e=[Sf];if(C){let t=Ld.map(e=>u.characterAssignments?.[e]).filter(e=>!!e),n=t.map(e=>Tf(e)).filter(e=>!!e),r=t.map(e=>Ef(e)).filter(e=>!!e),i=(u.cells||[]).map(e=>Of(u,e)),a=(u.specialInvestigationSheets||[]).map(kf),o=Rd.map(e=>Df(e)).filter(e=>!!e);return e.push(...n,Cf,...r,...i,...a,...o),e}if(u.characterSheetsDistributed){let t=Tf(oe());t&&e.push(t),e.push(Cf)}if(u.additionalInfoDistributed){let t=Ef(oe());t&&e.push(t)}let t=u.manualSheetViewers||{},n=new Set(Object.entries(t).filter(([,e])=>e.includes(c)).map(([e])=>e)),r=new Set(u.publicSheetIds||[]),i=Ld.map(e=>u.characterAssignments?.[e]).filter(e=>!!e),a=[...i.map(e=>Tf(e)).filter(e=>!!e),Cf,...i.map(e=>Ef(e)).filter(e=>!!e)];for(let t of a)(n.has(t.id)||r.has(t.id))&&!e.some(e=>e.id===t.id)&&e.push(t);let o=(u.cells||[]).filter(e=>e.owner===c||e.isPublic||e.viewers?.includes(c)||r.has(`investigation-card-${e.id}`)||n.has(`investigation-card-${e.id}`)).map(e=>Of(u,e)),s=(u.specialInvestigationSheets||[]).filter(e=>e.isPublic||e.viewers?.includes(c)||r.has(`special-investigation-${e.id}`)||n.has(`special-investigation-${e.id}`)).map(kf);if(e.push(...o,...s),u.phase===`ending`&&u.endingSheetRoleName){let t=Df(u.endingSheetRoleName);t&&e.push(t)}return e},[u,C,c]),ce=se.find(e=>e.id===f);(0,_.useEffect)(()=>{let e=e=>{e.key.toLowerCase()===`e`&&f&&(e.preventDefault(),p(null))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[f]);let le=()=>(0,$.jsxs)(`header`,{className:`game-title-header`,children:[(0,$.jsx)(`h1`,{className:`game-title`,children:`マーダーミステリー 名前だけが生きている`}),i&&(0,$.jsxs)(`div`,{className:`header-actions`,children:[(0,$.jsx)(`button`,{className:`leave-room-button`,onClick:nt,children:`ルームから出る`}),(0,$.jsxs)(`div`,{className:`room-number`,children:[`ルーム番号：`,i]})]})]}),ue=e=>u?e===`opening`?`intro`:e===`investigation`?u.investigationRound===2?`investigation2`:`investigation1`:e===`break`?`break`:e===`debate`?`debate`:e===`reasoning`?`reasoning`:e===`vote`?`vote`:e===`ending`?`ending`:e:e,de=()=>{if(!u)return[];let e=[{key:`GM`,roleName:`GM`,participantName:u.gmName,colorClass:`role-gm`}],t=Ld.filter(e=>!!u.players?.[e]),n=(u.investigationOrderDecided&&u.investigationTurnOrder?.length?u.investigationTurnOrder.filter(e=>t.includes(e)):t).map(e=>{let t=u.characterAssignments?.[e]||`未設定`;return{key:e,roleName:t,participantName:u.players?.[e]||`未入室`,colorClass:wf(t)}});return[...e,...n]},w=()=>{if(!u)return null;let e=oe();return(0,$.jsxs)(`aside`,{className:`sheet-index-panel dark-side-panel`,children:[C?(0,$.jsxs)(`div`,{className:`side-role-name-card role-gm`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`あなたの役名`}),(0,$.jsx)(`strong`,{children:`GM`})]}):(0,$.jsxs)(`div`,{className:`side-role-name-card ${wf(e)}`,children:[(0,$.jsx)(`span`,{className:`info-label`,children:`あなたの役名`}),(0,$.jsx)(`strong`,{children:e})]}),(0,$.jsxs)(`div`,{className:`panel-heading-block`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`INDEX`}),(0,$.jsx)(`h2`,{children:`捜査資料`})]}),(0,$.jsx)(`div`,{className:`sheet-index-list`,children:se.map(e=>(0,$.jsxs)(`button`,{className:`sheet-index-button ${f===e.id?`active`:``}`,onClick:()=>{h(!1),b(0),p(t=>t===e.id?null:e.id)},"aria-pressed":f===e.id,children:[(0,$.jsx)(`span`,{children:e.title}),(0,$.jsx)(`small`,{children:f===e.id?`表示中 / クリックで閉じる`:`クリックで表示`})]},e.id))})]})},T=()=>{let e=de();return e.length?(0,$.jsx)(`div`,{className:`other-role-list`,"aria-label":`役名と参加者名`,children:e.map(e=>(0,$.jsxs)(`div`,{className:`other-role-chip ${e.colorClass}`,children:[e.roleName,`：`,e.participantName]},e.key))}):null},fe=()=>{if(!u)return null;let e=ue(u.phase);return(0,$.jsxs)(`aside`,{className:`schedule-panel dark-side-panel`,children:[T(),(0,$.jsxs)(`div`,{className:`panel-heading-block`,children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`TIMELINE`}),(0,$.jsx)(`h2`,{children:`スケジュール`})]}),(0,$.jsx)(`ol`,{className:`schedule-list`,children:Ud.map(t=>(0,$.jsx)(`li`,{className:`schedule-item ${t.id===e?`current`:``}`,children:(0,$.jsx)(`div`,{className:`schedule-item-header`,children:(0,$.jsx)(`strong`,{children:t.title})})},t.id))})]})},pe=e=>{v(Math.min(400,Math.max(50,e)))},me=e=>{let t=e.target;t.closest(`button`)||t.closest(`.sheet-image-stage`)||e.button===0&&(ie(!0),ae.current={x:e.clientX,y:e.clientY},e.currentTarget.setPointerCapture(e.pointerId))},he=e=>{if(!re)return;let t=e.clientX-ae.current.x,n=e.clientY-ae.current.y;ne(e=>({x:e.x+t,y:e.y+n})),ae.current={x:e.clientX,y:e.clientY}},ge=e=>{re&&(ie(!1),e.currentTarget.releasePointerCapture(e.pointerId))},E=e=>{e.button!==0&&e.button!==2||(e.preventDefault(),ee(!0),te.current={x:e.clientX,y:e.clientY},e.currentTarget.setPointerCapture(e.pointerId))},_e=e=>{if(!x)return;e.preventDefault();let t=e.clientX-te.current.x,n=e.clientY-te.current.y;e.currentTarget.scrollLeft-=t,e.currentTarget.scrollTop-=n,te.current={x:e.clientX,y:e.clientY}},ve=e=>{x&&(ee(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ye=()=>ce?(0,$.jsx)(`div`,{className:`sheet-viewer-layer persistent-sheet-viewer-layer`,role:`dialog`,"aria-modal":`false`,"aria-label":ce.title,children:(0,$.jsxs)(`section`,{className:`sheet-viewer-frame draggable-sheet-window ${re?`is-window-dragging`:``}`,style:{transform:`translate(${S.x}px, ${S.y}px)`},onPointerDown:me,onPointerMove:he,onPointerUp:ge,onPointerCancel:ge,children:[(0,$.jsxs)(`div`,{className:`sheet-viewer-header`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`section-kicker`,children:`RECEIVED SHEET`}),(0,$.jsx)(`h2`,{children:ce.title})]}),(0,$.jsxs)(`div`,{className:`sheet-viewer-actions`,children:[ce.imageSrcs&&ce.imageSrcs.length>1&&(0,$.jsxs)(`div`,{className:`sheet-page-controls`,"aria-label":`ページ切り替え`,children:[(0,$.jsx)(`button`,{onClick:()=>{h(!1),b(e=>Math.max(0,e-1))},disabled:y<=0,children:`←`}),(0,$.jsxs)(`span`,{children:[y+1,` / `,ce.imageSrcs.length]}),(0,$.jsx)(`button`,{onClick:()=>{h(!1),b(e=>Math.min(ce.imageSrcs.length-1,e+1))},disabled:y>=ce.imageSrcs.length-1,children:`→`})]}),(0,$.jsxs)(`div`,{className:`sheet-zoom-controls`,"aria-label":`シートの拡大縮小`,children:[(0,$.jsx)(`button`,{onClick:()=>pe(g-25),"aria-label":`縮小`,children:`−`}),(0,$.jsxs)(`span`,{children:[g,`%`]}),(0,$.jsx)(`button`,{onClick:()=>pe(g+25),"aria-label":`拡大`,children:`＋`}),(0,$.jsx)(`button`,{onClick:()=>pe(100),children:`等倍`})]}),C&&ce&&(0,$.jsxs)(`div`,{className:`sheet-share-controls`,"aria-label":`シート共有操作`,children:[(0,$.jsx)(`button`,{onClick:()=>Qe(ce),children:ce.kind===`investigation`?u?.cells?.find(e=>e.id===ce.sourceId)?.isPublic?`全体公開を戻す`:`全体公開`:ce.kind===`special`?u?.specialInvestigationSheets?.find(e=>e.id===ce.sourceId)?.isPublic?`全体公開を戻す`:`全体公開`:u?.publicSheetIds?.includes(ce.id)?`全体公開を戻す`:`全体公開`}),Ld.filter(e=>!!u?.players?.[e]).map(e=>(0,$.jsx)(`button`,{onClick:()=>Ze(ce,e),children:(u?.manualSheetViewers?.[ce.id]||[]).includes(e)?`${u?.players?.[e]}への送信を戻す`:`${u?.players?.[e]}に送る`},e))]}),(0,$.jsx)(`button`,{className:`sheet-close-button`,onClick:()=>p(null),"aria-label":`シートを閉じる`,children:`閉じる`})]})]}),(0,$.jsx)(`div`,{className:`sheet-image-stage ${x?`is-panning`:``}`,onPointerDown:E,onPointerMove:_e,onPointerUp:ve,onPointerCancel:ve,onContextMenu:e=>e.preventDefault(),children:m?(0,$.jsxs)(`div`,{className:`sheet-image-placeholder`,children:[(0,$.jsx)(`strong`,{children:`シート画像が未配置です`}),(0,$.jsxs)(`p`,{children:[`対応する画像を `,(0,$.jsx)(`code`,{children:`public/sheets/`}),` 以下に置くと、ここに表示されます。`]})]}):(0,$.jsx)(`div`,{className:`sheet-image-canvas`,style:{width:`${g}%`},children:(0,$.jsx)(`img`,{src:xf(ce,y),alt:ce.title,className:`overview-sheet-image`,draggable:!1,onError:()=>h(!0)})})}),(0,$.jsx)(`p`,{className:`sheet-viewer-help`,children:`ウィンドウ本体を長押ししながらドラッグすると位置を動かせます。シート画像の上では左クリック長押し＋ドラッグで視点を移動できます。閉じるボタン / Eキー / 左の捜査資料で閉じられます。`})]})}):null,be=e=>(0,$.jsxs)(`main`,{className:`app dark-game-app post-opening-page`,children:[le(),(0,$.jsxs)(`div`,{className:`opening-layout cinematic-layout post-opening-layout`,children:[w(),e,fe()]}),ye()]}),xe=()=>{s(``),t(`createName`)},Se=async()=>{let e=n.trim().toUpperCase();if(!e)return alert(`ルーム番号を入力して`);let i=await Ad(J(Z,`rooms`,e));if(!i.exists())return alert(`ルームが見つからない`);let a=i.data();if(a.phase!==`waiting`&&a.phase!==`characterSelect`)return alert(`オープニング開始後は新規参加できません`);r(e),s(``),t(`joinName`)},Ce=async()=>{let e=Math.random().toString(36).slice(2,8).toUpperCase();await jd(J(Z,`rooms`,e),{phase:`waiting`,gmName:o,players:{},characterAssignments:{},mainRoom:[],subRoom:[],currentTurnIndex:0,currentTurnCharacter:`A`,thunderCount:5,cells:Vd,specialInvestigationSheets:Hd,manualSheetViewers:{},publicSheetIds:[],characterSheetsDistributed:!1,questionTimeStarted:!1,investigationRound:1,investigationTurnOrder:Ld,investigationOrderDecided:!1,investigationStarted:!1,investigationStartedAt:null,investigationDurationSeconds:1200,additionalInfoDistributed:!1,privateTalk:null,votes:{},endingSheetRoleName:null}),l(`GM`),a(e),t(`game`)},we=async()=>{let e=n.trim().toUpperCase(),r=J(Z,`rooms`,e),i=await Ad(r);if(!i.exists()){alert(`ルームが見つからない`),t(`home`);return}let s=i.data();if(s.phase!==`waiting`&&s.phase!==`characterSelect`){alert(`オープニング開始後は新規参加できません`),t(`home`);return}let c=s.players||{};if([s.gmName,...Object.values(c)].includes(o)){alert(`その名前はすでに使われています`);return}let u=Ld.find(e=>!c[e]);if(!u){alert(`空いている参加枠がない`);return}await Md(r,{[`players.${u}`]:o}),l(u),a(e),t(`game`)},Te=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`characterSelect`})},Ee=async(e,t)=>{!u||!C||await Md(J(Z,`rooms`,i),{[`characterAssignments.${e}`]:t})},De=async()=>{if(!u||!C)return;let e=u.players||{},t=u.characterAssignments||{};if(!Object.keys(e).every(e=>t[e])){alert(`参加者全員のキャラクターを選択して`);return}let n=Object.keys(e).map(e=>t[e]);if(new Set(n).size!==n.length){alert(`キャラクターが重複しています。重複しないように振り分けてください`);return}await Md(J(Z,`rooms`,i),{phase:`opening`})},Oe=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{characterSheetsDistributed:!0,questionTimeStarted:!1})},ke=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{questionTimeStarted:!0})},Ae=async()=>{if(!u||!C)return;let e=Ld.filter(e=>!!u.players?.[e]);await Md(J(Z,`rooms`,i),{phase:`investigation`,investigationRound:1,investigationTurnOrder:e,investigationOrderDecided:!1,investigationStarted:!1,investigationStartedAt:null,currentTurnIndex:0,currentTurnCharacter:e[0]||`A`})},je=async e=>{if(!u||!C)return;let t=Ld.filter(e=>!!u.players?.[e]),n=e.filter(e=>t.includes(e)),r=Array.from(new Set(n));if(n.length!==t.length||r.length!==t.length){alert(`調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください`);return}await Md(J(Z,`rooms`,i),{investigationTurnOrder:n,investigationOrderDecided:!0,investigationStarted:!1,investigationStartedAt:null,currentTurnIndex:0,currentTurnCharacter:n[0]||`A`})},D=async()=>{if(!u||!C)return;let e=Ld.filter(e=>!!u.players?.[e]),t=(u.investigationTurnOrder||e).filter(t=>e.includes(t)),n=Array.from(new Set(t));if(!u.investigationOrderDecided){alert(`先に調査順番を決定してください`);return}if(t.length!==e.length||n.length!==e.length){alert(`調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください`);return}await Md(J(Z,`rooms`,i),{investigationTurnOrder:t,investigationStarted:!0,investigationStartedAt:Date.now(),investigationDurationSeconds:1200,currentTurnIndex:0,currentTurnCharacter:t[0]||`A`})},Me=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`break`,investigationStarted:!1,investigationStartedAt:null})},Ne=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{additionalInfoDistributed:!0})},Pe=async()=>{if(!u||!C)return;let e=Ld.filter(e=>!!u.players?.[e]);await Md(J(Z,`rooms`,i),{phase:`investigation`,investigationRound:2,investigationStarted:!1,investigationStartedAt:null,investigationOrderDecided:!0,investigationTurnOrder:u.investigationTurnOrder||e,currentTurnIndex:0,currentTurnCharacter:(u.investigationTurnOrder||e)[0]||`A`})},Fe=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`debate`,privateTalk:null,cells:(u.cells||[]).map(e=>({...e,privateViewers:[]})),investigationStarted:!1,investigationStartedAt:null})},Ie=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`reasoning`,investigationStarted:!1,investigationStartedAt:null})},Le=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`vote`,votes:{}})},Re=async e=>{if(!(!u||C)&&u.players?.[e]){if(e===c){alert(`自分には投票できません`);return}await Md(J(Z,`rooms`,i),{[`votes.${c}`]:e})}},ze=async e=>{!u||!C||await Md(J(Z,`rooms`,i),{phase:`ending`,endingSheetRoleName:e||null})},Be=async e=>{if(!u||!C)return;let t=Array.from(new Set(e)).filter(e=>!!u.players?.[e]);if(t.length!==2){alert(`密談する二人を選んでください`);return}let n=(u.cells||[]).map(e=>({...e,privateViewers:[]}));await Md(J(Z,`rooms`,i),{privateTalk:{participants:t},cells:n})},Ve=async()=>{if(!u||!C)return;let e=(u.cells||[]).map(e=>({...e,privateViewers:[]}));await Md(J(Z,`rooms`,i),{privateTalk:null,cells:e})},He=e=>e.startsWith(`item-A-`)?0:e.startsWith(`item-B-`)?1:e.startsWith(`item-C-`)?2:e.startsWith(`item-D-`)?3:e.startsWith(`item-E-`)?4:e.startsWith(`victim-`)?5:e.startsWith(`villa-`)?6:-1,Ue=e=>{let t=e.match(/-(\d+)$/);return t?Number(t[1]):-1},We=e=>{let t=[`川岸道也`,`宮崎圭`,`緑野大地`,`黒坂秀樹`,`谷アリス`];return e>=0&&e<t.length?t[e]:null},Ge=(e,t)=>{let n=Ue(e.id),r=He(e.id);return n===1?!0:n<1||r<0?!1:t.some(e=>{if(!e.owner)return!1;let t=Ue(e.id),i=He(e.id);return Math.abs(t-n)+Math.abs(i-r)===1})},Ke=(e,t,n)=>{if(u?.phase===`break`||!u?.investigationStarted||(u?.thunderCount??0)<=0||e.owner||u?.currentTurnCharacter!==t)return!1;let r=We(He(e.id)),i=u?.characterAssignments?.[t];return r&&i===r?!1:Ge(e,n)},qe=async e=>{if(!u||C)return;if(!u.investigationStarted){alert(`調査開始までお待ちください`);return}if(u.currentTurnCharacter!==c){alert(`今はあなたの調査ターンではない`);return}let t=u.cells.find(t=>t.id===e);if(!t)return;if(!Ke(t,c,u.cells)){alert(`この調査カードは取得できません`);return}let n=u.cells.map(t=>t.id===e?{...t,owner:c,isPublic:!1,privateViewers:[],viewers:[]}:t),r=(u.investigationTurnOrder||Ld).filter(e=>!!u.players?.[e]),a=r.indexOf(u.currentTurnCharacter),o=a>=0?(a+1)%r.length:0;await Md(J(Z,`rooms`,i),{cells:n,currentTurnIndex:o,currentTurnCharacter:r[o]||u.currentTurnCharacter})},Je=async e=>{if(!u)return;let t=u.cells.find(t=>t.id===e);if(!t||!C&&t.owner!==c)return;let n=u.cells.map(t=>t.id===e?{...t,isPublic:!t.isPublic}:t);await Md(J(Z,`rooms`,i),{cells:n})},Ye=async(e,t)=>{if(!u)return;let n=u.cells.find(t=>t.id===e);if(!n)return;let r=u.privateTalk?.participants||[];if(!r.includes(t)||!n.owner||!r.includes(n.owner)||!C&&n.owner!==c)return;let a=n.privateViewers||[],o=a.includes(t)?a.filter(e=>e!==t):[...a,t],s=u.cells.map(t=>t.id===e?{...t,privateViewers:o}:t);await Md(J(Z,`rooms`,i),{cells:s})},Xe=async(e,t)=>{if(!u)return;let n=u.cells.find(t=>t.id===e);if(!n)return;let r=u.privateTalk?.participants||[];if(!r.includes(t)||!n.owner||!r.includes(n.owner)||!C&&n.owner!==c)return;let a=u.cells.map(n=>n.id===e?{...n,owner:t,privateViewers:[],viewers:[]}:n);await Md(J(Z,`rooms`,i),{cells:a})},Ze=async(e,t)=>{if(!u||!C||!e.id)return;let n=(u.manualSheetViewers||{})[e.id]||[],r=n.includes(t)?n.filter(e=>e!==t):[...n,t],a={[`manualSheetViewers.${e.id}`]:r};e.kind===`investigation`&&e.sourceId&&(a.cells=(u.cells||[]).map(n=>{if(n.id!==e.sourceId)return n;let r=n.viewers||[],i=r.includes(t)?r.filter(e=>e!==t):[...r,t];return{...n,viewers:i}})),e.kind===`special`&&e.sourceId&&(a.specialInvestigationSheets=(u.specialInvestigationSheets||[]).map(n=>{if(n.id!==e.sourceId)return n;let r=n.viewers||[],i=r.includes(t)?r.filter(e=>e!==t):[...r,t];return{...n,viewers:i}})),await Md(J(Z,`rooms`,i),a)},Qe=async e=>{if(!u||!C||!e.id)return;if(e.kind===`investigation`&&e.sourceId){await Md(J(Z,`rooms`,i),{cells:(u.cells||[]).map(t=>t.id===e.sourceId?{...t,isPublic:!t.isPublic}:t)});return}if(e.kind===`special`&&e.sourceId){await Md(J(Z,`rooms`,i),{specialInvestigationSheets:(u.specialInvestigationSheets||[]).map(t=>t.id===e.sourceId?{...t,isPublic:!t.isPublic}:t)});return}let t=u.publicSheetIds||[],n=t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id];await Md(J(Z,`rooms`,i),{publicSheetIds:n})},$e=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{thunderCount:Math.max(0,u.thunderCount-1)})},et=async()=>{!u||!C||await Md(J(Z,`rooms`,i),{thunderCount:Math.min(6,u.thunderCount+1)})},tt=()=>{sessionStorage.removeItem(`joinedRoomId`),sessionStorage.removeItem(`playerName`),sessionStorage.removeItem(`myCharacter`),d(null),a(``),s(``),l(`A`),t(`home`)},nt=async()=>{if(!i||!u)return;if(C){tt();return}let e=J(Z,`rooms`,i),t={...u.players||{}};delete t[c];let n={...u.characterAssignments||{}};delete n[c],await Md(e,{players:t,characterAssignments:n}),tt()};return e===`home`?(0,$.jsx)(Gd,{renderTitle:le,roomIdInput:n,setRoomIdInput:r,goCreateName:xe,goJoinName:Se}):e===`createName`?(0,$.jsx)(Kd,{renderTitle:le,title:`名前入力`,playerName:o,setPlayerName:s,onDecide:()=>{if(!o.trim())return alert(`名前を入力して`);t(`createConfirm`)},onBack:()=>t(`home`),decideLabel:`名前を決定`}):e===`createConfirm`?(0,$.jsxs)(`main`,{className:`app dark-game-app confirm-page`,children:[le(),(0,$.jsxs)(`section`,{className:`card dark-panel confirm-card centered-form-card`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`CREATE ROOM`}),(0,$.jsx)(`h2`,{children:`確認`}),(0,$.jsx)(`p`,{className:`confirm-lead`,children:`この名前でGMとしてルームを作成しますか？`}),(0,$.jsxs)(`p`,{className:`confirm-name`,children:[`GM名：`,o]}),(0,$.jsxs)(`div`,{className:`form-actions centered-form-actions confirm-actions`,children:[(0,$.jsx)(`button`,{className:`primary-action-button large-centered-button`,onClick:Ce,children:`作成する`}),(0,$.jsx)(`button`,{className:`large-secondary-button`,onClick:()=>t(`createName`),children:`戻る`})]})]})]}):e===`joinName`?(0,$.jsx)(Kd,{renderTitle:le,title:`名前入力`,playerName:o,setPlayerName:s,onDecide:()=>{if(!o.trim())return alert(`名前を入力して`);we()},onBack:()=>t(`home`),decideLabel:`部屋に入る`,subText:`参加ルーム：${n}`}):u?u.phase===`waiting`?(0,$.jsx)(qd,{renderTitle:le,room:u,isGm:C,onStart:Te,onLeave:nt}):u.phase===`characterSelect`?(0,$.jsx)(Jd,{renderTitle:le,room:u,isGm:C,playerName:o,onAssign:Ee,onComplete:De}):u.phase===`opening`?(0,$.jsx)(of,{renderTitle:le,room:u,isGm:C,myCharacter:c,playerName:o,onDistributeSheets:Oe,onStartQuestionTime:ke,onNext:Ae,onShareSheetWithPlayer:Ze,onToggleSheetPublic:Qe,onLeave:nt}):u.phase===`investigation`||u.phase===`break`||u.phase===`debate`||u.phase===`reasoning`?be((0,$.jsx)(gf,{room:u,isGm:C,myCharacter:c,playerName:o,onClaimCell:qe,onToggleCellPublic:Je,onToggleCellPrivateShare:Ye,onUseThunder:$e,onAddThunder:et,onGoBreak:Me,onDistributeAdditionalInfo:Ne,onGoInvestigation2:Pe,onGoDebate:Fe,onUpdateInvestigationOrder:je,onStartInvestigation:D,onStartPrivateTalk:Be,onEndPrivateTalk:Ve,onTransferCellPrivateTalkTarget:Xe,onGoReasoning:Ie,onGoVote:Le,onLeave:nt})):u.phase===`vote`?be((0,$.jsx)(vf,{room:u,isGm:C,myCharacter:c,playerName:o,onGoVote:Le,onSubmitVote:Re,onGoEnding:ze,onGoReasoning:Ie})):be((0,$.jsx)(yf,{room:u,isGm:C,myCharacter:c,playerName:o,onLeave:nt})):(0,$.jsxs)(`main`,{className:`app`,children:[le(),(0,$.jsx)(`p`,{children:`読み込み中...`})]})}var Mf=`/* =========================================================
   Murder Mystery dark cinematic UI additions
   Append this file to src/style.css.
   ========================================================= */

:root {
  color-scheme: dark;
  --mm-bg: #020202;
  --mm-panel: rgba(14, 14, 16, 0.92);
  --mm-panel-strong: rgba(22, 22, 26, 0.96);
  --mm-border: rgba(221, 198, 137, 0.28);
  --mm-border-strong: rgba(239, 210, 139, 0.72);
  --mm-text: #f3efe5;
  --mm-muted: rgba(243, 239, 229, 0.66);
  --mm-gold: #d8b86a;
  --mm-red: #7c1f24;
  --mm-shadow: rgba(0, 0, 0, 0.62);
  --mm-story-illustration: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%20900%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%220%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23f3e6b1%22%20stop-opacity%3D%220.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23f3e6b1%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221600%22%20height%3D%22900%22%20fill%3D%22none%22%2F%3E%3Ccircle%20cx%3D%221240%22%20cy%3D%22170%22%20r%3D%2288%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cpath%20d%3D%22M0%20650L180%20540L360%20610L540%20500L720%20590L920%20460L1130%20585L1290%20500L1600%20640V900H0Z%22%20fill%3D%22%231a1b24%22%20fill-opacity%3D%220.55%22%2F%3E%3Cpath%20d%3D%22M0%20720L160%20655L300%20710L450%20600L620%20705L760%20620L930%20708L1100%20638L1260%20706L1430%20600L1600%20688V900H0Z%22%20fill%3D%22%23101015%22%20fill-opacity%3D%220.76%22%2F%3E%3Cg%20fill%3D%22%230a0b0f%22%20fill-opacity%3D%220.9%22%3E%3Cpath%20d%3D%22M1110%20690h160v110h-160z%22%2F%3E%3Cpath%20d%3D%22M1090%20690l100-74%20100%2074z%22%2F%3E%3Crect%20x%3D%221178%22%20y%3D%22736%22%20width%3D%2228%22%20height%3D%2264%22%20fill%3D%22%23131519%22%2F%3E%3Crect%20x%3D%221132%22%20y%3D%22726%22%20width%3D%2222%22%20height%3D%2222%22%20fill%3D%22%23d8b86a%22%20fill-opacity%3D%220.22%22%2F%3E%3Crect%20x%3D%221224%22%20y%3D%22726%22%20width%3D%2222%22%20height%3D%2222%22%20fill%3D%22%23d8b86a%22%20fill-opacity%3D%220.22%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%230c0d11%22%20fill-opacity%3D%220.92%22%3E%3Cpath%20d%3D%22M180%20760l26-78%2026%2078z%22%2F%3E%3Crect%20x%3D%22198%22%20y%3D%22760%22%20width%3D%2216%22%20height%3D%2272%22%2F%3E%3Cpath%20d%3D%22M260%20760l28-92%2028%2092z%22%2F%3E%3Crect%20x%3D%22280%22%20y%3D%22760%22%20width%3D%2216%22%20height%3D%2282%22%2F%3E%3Cpath%20d%3D%22M360%20760l24-70%2024%2070z%22%2F%3E%3Crect%20x%3D%22376%22%20y%3D%22760%22%20width%3D%2214%22%20height%3D%2268%22%2F%3E%3Cpath%20d%3D%22M1330%20748l24-78%2024%2078z%22%2F%3E%3Crect%20x%3D%221346%22%20y%3D%22748%22%20width%3D%2214%22%20height%3D%2276%22%2F%3E%3Cpath%20d%3D%22M1410%20748l28-90%2028%2090z%22%2F%3E%3Crect%20x%3D%221430%22%20y%3D%22748%22%20width%3D%2216%22%20height%3D%2286%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M0%20800C180%20760%20340%20860%20530%20818s280%2020%20430-2%20250-84%20380-60%20200%2038%20260%2024v120H0z%22%20fill%3D%22%2307080b%22%20fill-opacity%3D%220.94%22%2F%3E%3C%2Fsvg%3E");
}

html,
body,
#root {
  width: 100%;
  min-height: 100%;
  background: #000;
}

body {
  margin: 0;
  color: var(--mm-text);
  background: #000;
  font-family: "Yu Gothic", "Hiragino Kaku Gothic ProN", system-ui, sans-serif;
  overflow-x: hidden;
}

.dark-game-app,
.app {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 28px;
  color: var(--mm-text);
  background: #000;
}

.dark-game-app > *,
.app > * {
  position: relative;
  z-index: 1;
}

.dark-game-app::before,
.app::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.33;
  background-image:
    radial-gradient(circle at 78% 14%, rgba(216, 184, 106, 0.12), transparent 12%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 65%, rgba(0, 0, 0, 0.7) 100%),
    var(--mm-story-illustration);
  background-repeat: no-repeat;
  background-position: center top, center top, center bottom;
  background-size: 100% 100%, 100% 100%, cover;
  filter: saturate(0.9) blur(0.2px);
}

.dark-game-app::after,
.app::after {
  content: "";
  position: fixed;
  inset: auto 0 0 0;
  height: 34vh;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 36%, rgba(0, 0, 0, 0.84) 100%),
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.02), transparent 25%),
    radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.02), transparent 20%);
}

.game-title-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin: 0 0 28px;
  padding: 24px 28px 22px;
  overflow: hidden;
  border: 1px solid rgba(216, 184, 106, 0.34);
  border-radius: 0;
  background:
    linear-gradient(90deg, rgba(92, 18, 22, 0.34), transparent 44%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.006)),
    #050505;
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.72),
    inset 0 -1px 0 rgba(216, 184, 106, 0.16);
}

.game-title-header::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 16% 0%, rgba(216, 184, 106, 0.10), transparent 34%),
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.34) 100%);
  opacity: 1;
}

.game-title-header::after {
  content: "";
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 10px;
  height: 1px;
  background: linear-gradient(90deg, rgba(216, 184, 106, 0.68), transparent 72%);
  pointer-events: none;
}

.game-title {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: auto;
  max-width: min(80vw, calc(100% - 300px));
  margin: 0;
  color: #f8f0df;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "HGS明朝E", "Noto Serif JP", serif;
  font-size: clamp(1.45rem, 3.1vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.12;
  white-space: normal;
  overflow-wrap: anywhere;
  text-shadow:
    0 2px 0 #000,
    0 0 14px rgba(216, 184, 106, 0.15),
    0 0 26px rgba(124, 31, 36, 0.18);
}

.game-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 12px;
  background: linear-gradient(90deg, rgba(216, 184, 106, 0.82), rgba(216, 184, 106, 0.16), transparent);
}

.header-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.room-number {
  border: 1px solid rgba(216, 184, 106, 0.34);
  border-radius: 999px;
  padding: 8px 14px;
  color: var(--mm-text);
  background: rgba(0, 0, 0, 0.42);
  font-size: 0.92rem;
  letter-spacing: 0.06em;
}

.app button,
.app select,
.app input,
.dark-game-app button,
.dark-game-app select,
.dark-game-app input {
  font: inherit;
}

.app button,
.dark-game-app button {
  border: 1px solid rgba(216, 184, 106, 0.38);
  border-radius: 999px;
  padding: 10px 16px;
  color: var(--mm-text);
  background: linear-gradient(180deg, rgba(42, 34, 20, 0.96), rgba(10, 10, 10, 0.98));
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.36);
  cursor: pointer;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.app button:hover:not(:disabled),
.dark-game-app button:hover:not(:disabled) {
  transform: translateY(-1px);
  border-color: var(--mm-border-strong);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.44), 0 0 18px rgba(216, 184, 106, 0.08);
}

.app button:disabled,
.app select:disabled,
.dark-game-app button:disabled,
.dark-game-app select:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.app button:focus-visible,
.app select:focus-visible,
.app input:focus-visible,
.dark-game-app button:focus-visible,
.dark-game-app select:focus-visible,
.dark-game-app input:focus-visible {
  outline: 2px solid rgba(216, 184, 106, 0.88);
  outline-offset: 3px;
}

.leave-room-button {
  background: linear-gradient(180deg, rgba(91, 25, 30, 0.95), rgba(36, 9, 12, 0.95));
}

.primary-action-button {
  border-color: rgba(216, 184, 106, 0.7);
  background: linear-gradient(180deg, rgba(151, 105, 38, 0.95), rgba(77, 40, 18, 0.96));
  font-weight: 800;
  letter-spacing: 0.06em;
}

.card,
.dark-panel,
.dark-side-panel,
.dark-modal {
  border: 1px solid var(--mm-border);
  color: var(--mm-text);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.015)),
    var(--mm-panel);
  box-shadow: 0 22px 60px var(--mm-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(10px);
}

.card h2,
.dark-panel h2,
.dark-side-panel h2,
.dark-modal h2 {
  margin-top: 0;
  color: var(--mm-text);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", Georgia, serif;
  letter-spacing: 0.08em;
}

.section-kicker {
  display: inline-block;
  margin-bottom: 8px;
  color: var(--mm-gold);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.muted-text,
.opening-description,
.opening-player-name,
.sheet-viewer-help,
.opening-status-card p {
  color: var(--mm-muted);
}

/* ===== CharacterSelectScreen ===== */
.character-select-page {
  display: block;
}

.character-select-player-card,
.character-select-gm-card {
  max-width: 860px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 22px;
}

.my-player-info {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 22px 0;
}

.my-player-info.single-info {
  grid-template-columns: 1fr;
}

.my-player-info > div,
.assigned-character-box,
.character-assign-waiting-box,
.opening-status-card {
  border: 1px solid rgba(216, 184, 106, 0.24);
  border-radius: 16px;
  padding: 18px 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.014)),
    rgba(0, 0, 0, 0.34);
}

.info-label {
  display: block;
  margin-bottom: 7px;
  color: var(--mm-muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.my-player-info strong,
.assigned-character-box strong,
.character-assign-player strong,
.opening-status-card strong {
  color: var(--mm-text);
  font-size: 1.35rem;
  letter-spacing: 0.05em;
}

.assigned-character-box strong {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", Georgia, serif;
}

.character-assign-loading-text {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 10px;
  color: var(--mm-text);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", Georgia, serif;
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: 0.07em;
  text-shadow: 0 0 26px rgba(216, 184, 106, 0.18);
}

.loading-spinner {
  flex: 0 0 auto;
  display: inline-block;
  width: 34px;
  height: 34px;
  border: 4px solid rgba(216, 184, 106, 0.22);
  border-top-color: var(--mm-gold);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(216, 184, 106, 0.26);
  animation: loading-spin 0.85s linear infinite;
}

@keyframes loading-spin {
  to {
    transform: rotate(360deg);
  }
}

.character-assign-list {
  display: grid;
  gap: 12px;
  margin: 22px 0;
}

.character-assign-row {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 14px;
  align-items: center;
  padding: 14px;
  border: 1px solid rgba(216, 184, 106, 0.22);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.34);
}

.character-assign-player {
  display: flex;
  align-items: center;
  gap: 12px;
}

.slot-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(216, 184, 106, 0.55);
  border-radius: 999px;
  color: var(--mm-gold);
  background: rgba(0, 0, 0, 0.38);
  font-weight: 900;
}

.character-assign-row select {
  width: 100%;
  border: 1px solid rgba(216, 184, 106, 0.36);
  border-radius: 12px;
  padding: 10px 12px;
  color: var(--mm-text);
  background: #0b0b0d;
}

.character-assign-row option {
  color: #111;
  background: #fff;
}

/* Participant character-select screen must not reveal slot or assigned character. */
.character-select-player-card .my-player-info {
  grid-template-columns: 1fr;
}

.character-select-player-card .my-player-info > div:not(:first-child),
.character-select-player-card .assigned-character-box {
  display: none !important;
}

/* ===== WaitingScreen ===== */
.waiting-card {
  max-width: 860px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
}

.waiting-player-list {
  display: grid;
  gap: 10px;
  margin: 22px 0;
}

.waiting-player-row {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  border: 1px solid rgba(216, 184, 106, 0.20);
  border-radius: 12px;
  padding: 13px 15px;
  background: rgba(3, 3, 4, 0.78);
}

.waiting-player-row strong {
  color: var(--mm-text);
  font-size: 1.08rem;
  letter-spacing: 0.04em;
}

.waiting-gm-row {
  border-color: rgba(216, 184, 106, 0.38);
}

/* ===== OpeningScreen ===== */
.opening-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  gap: 18px;
  align-items: start;
}

.dark-side-panel {
  position: sticky;
  top: 18px;
  border-radius: 20px;
  padding: 18px;
}

.panel-heading-block h2 {
  margin-bottom: 14px;
  font-size: 1.12rem;
}

.sheet-index-button {
  width: 100%;
  display: grid;
  gap: 5px;
  text-align: left;
  border-radius: 14px;
  padding: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012)),
    rgba(0, 0, 0, 0.34);
}

.sheet-index-button span {
  font-weight: 800;
  letter-spacing: 0.04em;
}

.sheet-index-button small {
  color: var(--mm-muted);
}

.sheet-index-button.active {
  border-color: var(--mm-border-strong);
  box-shadow: 0 0 0 1px rgba(216, 184, 106, 0.18), 0 0 26px rgba(216, 184, 106, 0.12);
}

.opening-main-panel {
  min-height: 520px;
  border-radius: 24px;
  padding: 30px;
}

.permanent-opening-panel h2 {
  font-size: clamp(2rem, 3.7vw, 4rem);
  line-height: 1;
  text-shadow: 0 0 26px rgba(216, 184, 106, 0.16);
}

.opening-player-name {
  margin: 0 0 24px;
  letter-spacing: 0.06em;
}

.opening-status-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 22px 0;
}

.text-link-button {
  width: fit-content;
  margin-top: 14px;
  padding: 8px 14px;
}

.opening-description {
  max-width: 760px;
  line-height: 1.9;
}

.schedule-list {
  display: grid;
  gap: 8px;
  max-height: 70vh;
  margin: 0;
  padding-left: 0;
  overflow: auto;
  list-style: none;
  scrollbar-width: thin;
}

.schedule-item {
  position: relative;
  border: 1px solid rgba(216, 184, 106, 0.18);
  border-radius: 14px;
  padding: 11px 12px;
  background: rgba(0, 0, 0, 0.28);
}

.schedule-item.current {
  border-color: var(--mm-border-strong);
  background:
    linear-gradient(90deg, rgba(124, 31, 36, 0.38), rgba(216, 184, 106, 0.08)),
    rgba(0, 0, 0, 0.42);
  box-shadow: 0 0 0 1px rgba(216, 184, 106, 0.14), 0 0 28px rgba(216, 184, 106, 0.1);
  transform: translateX(-2px);
}

.schedule-item.current::before {
  content: "NOW";
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--mm-gold);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.schedule-item-header {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  padding-right: 42px;
}

.schedule-item-header strong {
  color: var(--mm-text);
  font-size: 0.94rem;
}

.schedule-item-header span,
.schedule-item p {
  color: var(--mm-muted);
}

.schedule-item p {
  margin: 7px 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
}

.sheet-viewer-layer {
  position: fixed;
  inset: 0;
  z-index: 800;
  display: grid;
  place-items: center;
  padding: 28px;
  pointer-events: none;
  background: transparent;
}

.sheet-viewer-frame {
  pointer-events: auto;
  width: min(860px, calc(100vw - 56px));
  max-height: calc(100vh - 56px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  border: 1px solid var(--mm-border-strong);
  border-radius: 14px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.012)),
    rgba(4, 4, 5, 0.98);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.86), 0 0 42px rgba(216, 184, 106, 0.10);
}

.sheet-viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(216, 184, 106, 0.22);
}

.sheet-viewer-header h2 {
  margin: 0;
}

.sheet-close-button {
  flex: 0 0 auto;
}

.sheet-image-stage {
  min-height: 360px;
  overflow: auto;
  padding: 18px;
  background:
    radial-gradient(circle at top, rgba(216, 184, 106, 0.09), transparent 30%),
    #050505;
}

.overview-sheet-image {
  display: block;
  width: min(100%, 794px);
  max-height: calc(100vh - 190px);
  height: auto;
  margin: 0 auto;
  border-radius: 6px;
  object-fit: contain;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.62);
}

.sheet-image-placeholder {
  display: grid;
  place-items: center;
  gap: 10px;
  min-height: 420px;
  border: 1px dashed rgba(216, 184, 106, 0.45);
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  color: var(--mm-muted);
}

.sheet-image-placeholder strong {
  color: var(--mm-text);
  font-size: 1.2rem;
}

.sheet-image-placeholder code {
  color: var(--mm-gold);
}

.sheet-viewer-help {
  margin: 0;
  padding: 12px 20px 16px;
  border-top: 1px solid rgba(216, 184, 106, 0.18);
  font-size: 0.86rem;
}

.receive-window-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.68);
}

.receive-window {
  width: min(480px, calc(100vw - 48px));
  border-radius: 22px;
  padding: 26px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.72), 0 0 46px rgba(216, 184, 106, 0.14);
}

.receive-window h2 {
  margin: 4px 0 12px;
  font-size: 1.65rem;
}

.receive-window p {
  color: var(--mm-muted);
  line-height: 1.7;
}


/* ===== Persistent panels after opening ===== */
.post-opening-shell {
  min-height: 100vh;
  background: #000;
}

.post-opening-content .app,
.post-opening-content .dark-game-app {
  padding-left: 286px;
  padding-right: 366px;
}

.persistent-sheet-index-panel,
.persistent-schedule-panel {
  position: fixed;
  z-index: 500;
  top: 28px;
  max-height: calc(100vh - 56px);
  overflow: auto;
}

.persistent-sheet-index-panel {
  left: 28px;
  width: 222px;
}

.persistent-schedule-panel {
  right: 28px;
  width: 302px;
}

.persistent-sheet-viewer-layer {
  z-index: 900;
}

/* ===== Final polish: reduce cheap-looking glow/texture and keep black-base design ===== */
.opening-page .dark-side-panel,
.opening-page .opening-main-panel,
.character-select-player-card,
.character-select-gm-card {
  border-radius: 12px;
}

.sheet-index-button,
.schedule-item,
.my-player-info > div,
.character-assign-waiting-box {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.032), rgba(255, 255, 255, 0.008)),
    rgba(3, 3, 4, 0.78);
}

.schedule-item.current {
  transform: none;
}

.schedule-item.current::before {
  content: "現在";
  top: 9px;
  right: 10px;
  color: var(--mm-gold);
}

.receive-window-backdrop {
  background: rgba(0, 0, 0, 0.76);
}

.receive-window {
  border-radius: 14px;
}

@media (max-width: 1120px) {
  .opening-layout {
    grid-template-columns: 1fr;
  }

  .dark-side-panel {
    position: static;
  }

  .schedule-list {
    max-height: none;
  }

  .post-opening-content .app,
  .post-opening-content .dark-game-app {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 300px;
  }

  .persistent-sheet-index-panel,
  .persistent-schedule-panel {
    position: fixed;
    max-height: 236px;
    top: 16px;
    width: calc(50vw - 28px);
  }

  .persistent-sheet-index-panel {
    left: 16px;
  }

  .persistent-schedule-panel {
    right: 16px;
  }
}

@media (max-width: 760px) {
  .dark-game-app,
  .app {
    padding: 16px;
  }

  .game-title-header {
    align-items: flex-start;
    flex-direction: column;
    padding: 18px;
  }

  .game-title {
    width: 100%;
    max-width: 100%;
    white-space: normal;
    font-size: clamp(1.35rem, 7.2vw, 2.25rem);
  }

  .header-actions {
    justify-content: flex-start;
  }

  .character-assign-row,
  .my-player-info,
  .opening-status-grid {
    grid-template-columns: 1fr;
  }

  .character-assign-loading-text {
    align-items: flex-start;
    flex-direction: column;
  }

  .sheet-viewer-layer {
    padding: 12px;
  }

  .sheet-viewer-frame {
    width: calc(100vw - 24px);
    max-height: calc(100vh - 24px);
  }

  .sheet-viewer-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .post-opening-content .app,
  .post-opening-content .dark-game-app {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 510px;
  }

  .persistent-sheet-index-panel,
  .persistent-schedule-panel {
    left: 16px;
    right: 16px;
    width: auto;
  }

  .persistent-sheet-index-panel {
    top: 16px;
  }

  .persistent-schedule-panel {
    top: 188px;
  }
}

/* =========================================================
   v7 requested fixes
   ========================================================= */

.game-title-header {
  align-items: center;
  gap: 18px;
  padding: 18px 22px 16px;
}

.game-title {
  max-width: min(80vw, calc(100% - 250px));
  font-size: clamp(1rem, 2.15vw, 2.15rem);
  letter-spacing: 0.025em;
  line-height: 1.12;
}

.game-title::after {
  margin-top: 8px;
}

.opening-layout,
.post-opening-layout {
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  align-items: stretch;
}

.post-opening-page {
  min-height: 100vh;
}

.post-opening-page .dark-side-panel,
.opening-page .dark-side-panel {
  position: sticky;
  top: 18px;
  max-height: calc(100vh - 36px);
  overflow: auto;
}

.side-role-name-card {
  margin-bottom: 16px;
  border: 1px solid rgba(216, 184, 106, 0.34);
  border-radius: 10px;
  padding: 14px;
  background: rgba(0, 0, 0, 0.54);
}

.side-role-name-card strong {
  display: block;
  color: #f8f0df;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif;
  font-size: 1.22rem;
  letter-spacing: 0.05em;
}

.sheet-viewer-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}

.sheet-zoom-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(216, 184, 106, 0.22);
  border-radius: 999px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.34);
}

.sheet-zoom-controls button {
  min-width: 38px;
  padding: 7px 10px;
}

.sheet-zoom-controls span {
  min-width: 54px;
  text-align: center;
  color: var(--mm-text);
  font-weight: 800;
}

.sheet-image-stage {
  overflow: auto;
}

.overview-sheet-image {
  max-width: none;
  transition: width 160ms ease;
}

.investigation-board-panel {
  min-height: calc(100vh - 166px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 12px;
  padding: 18px;
}

.investigation-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.investigation-header-row h2 {
  margin-bottom: 6px;
  font-size: clamp(1.4rem, 2.5vw, 2.5rem);
}

.investigation-status-compact {
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  gap: 10px;
  min-width: min(360px, 100%);
}

.investigation-status-compact > div {
  border: 1px solid rgba(216, 184, 106, 0.22);
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.36);
}

.investigation-status-compact strong {
  display: block;
  color: var(--mm-text);
  font-size: 1.05rem;
}

.investigation-grid-wrap {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.investigation-board-grid {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 8px;
  align-content: stretch;
  min-height: 420px;
}

.investigation-cell-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: 0;
  border-radius: 0 !important;
  padding: 8px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  text-align: center;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 12px 24px rgba(0, 0, 0, 0.42);
}

.investigation-cell-square span {
  font-size: clamp(0.85rem, 1.2vw, 1.12rem);
  font-weight: 900;
  letter-spacing: 0.04em;
}

.investigation-cell-square small {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.72rem;
}

.investigation-cell-square.claimed {
  filter: grayscale(0.18) brightness(0.72);
  opacity: 0.9;
}

.investigation-cell-square.mine {
  outline: 3px solid rgba(255, 255, 255, 0.9);
  outline-offset: -5px;
}

.cell-kawagishi {
  background: linear-gradient(180deg, #a5252d, #5c1117) !important;
  border-color: rgba(255, 106, 114, 0.72) !important;
}

.cell-miyazaki {
  background: linear-gradient(180deg, #1f67b8, #0d2d66) !important;
  border-color: rgba(106, 166, 255, 0.72) !important;
}

.cell-midorino {
  background: linear-gradient(180deg, #238048, #0c3f22) !important;
  border-color: rgba(101, 218, 145, 0.7) !important;
}

.cell-kurosaka {
  background: linear-gradient(180deg, #1b1b1d, #000) !important;
  border-color: rgba(238, 238, 238, 0.32) !important;
}

.cell-tani {
  color: #1b1300 !important;
  background: linear-gradient(180deg, #f3d24e, #a87910) !important;
  border-color: rgba(255, 229, 110, 0.78) !important;
}

.cell-tani small {
  color: rgba(28, 20, 0, 0.74);
}

.cell-victim {
  background: linear-gradient(180deg, #44464d, #1d1e22) !important;
  border-color: rgba(170, 175, 184, 0.52) !important;
}

.cell-villa {
  background: linear-gradient(180deg, #3a1c62, #170826) !important;
  border-color: rgba(156, 103, 232, 0.58) !important;
}

.investigation-board-labels {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
}

.board-column-label {
  border: 1px solid rgba(216, 184, 106, 0.18);
  padding: 8px 6px;
  color: #fff;
  font-size: clamp(0.72rem, 0.92vw, 0.9rem);
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.02em;
}

.board-column-label.cell-tani {
  color: #1b1300 !important;
}

.investigation-actions-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.compact-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.role-reveal-splash {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: grid;
  place-items: center;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.56);
  animation: roleRevealBackdrop 4.2s ease both;
}

.role-reveal-card {
  display: grid;
  gap: 14px;
  padding: 48px 62px;
  border: 1px solid rgba(216, 184, 106, 0.72);
  background: rgba(3, 3, 4, 0.94);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.8), 0 0 54px rgba(216, 184, 106, 0.12);
  text-align: center;
  animation: roleRevealText 4.2s ease both;
}

.role-reveal-card span {
  color: var(--mm-muted);
  font-size: clamp(1.4rem, 2.6vw, 2.8rem);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif;
  letter-spacing: 0.1em;
}

.role-reveal-card strong {
  color: #f8f0df;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif;
  font-size: clamp(3rem, 7vw, 7rem);
  letter-spacing: 0.06em;
  text-shadow: 0 0 24px rgba(216, 184, 106, 0.18);
}

@keyframes roleRevealBackdrop {
  0% { opacity: 0; }
  18% { opacity: 1; }
  82% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes roleRevealText {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.96);
  }
  18% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  82% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px) scale(1.01);
  }
}

@media (max-width: 1120px) {
  .opening-layout,
  .post-opening-layout {
    grid-template-columns: 1fr;
  }

  .post-opening-page .dark-side-panel,
  .opening-page .dark-side-panel {
    position: static;
    max-height: none;
  }

  .investigation-board-grid {
    min-height: 360px;
  }
}

@media (max-width: 760px) {
  .game-title {
    max-width: 100%;
    font-size: clamp(1rem, 5.4vw, 1.7rem);
  }

  .sheet-viewer-actions,
  .investigation-header-row,
  .investigation-actions-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .investigation-status-compact {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .investigation-board-grid,
  .investigation-board-labels {
    grid-template-columns: repeat(7, minmax(64px, 1fr));
    overflow-x: auto;
  }

  .investigation-grid-wrap {
    overflow-x: auto;
  }

  .investigation-cell-square {
    min-width: 64px;
  }

  .role-reveal-card {
    width: calc(100vw - 42px);
    box-sizing: border-box;
    padding: 34px 20px;
  }
}

/* =========================================================
   v8 requested fixes
   ========================================================= */

/* Keep title compact and prevent clipping. */
.game-title-header {
  overflow: visible;
}

.game-title {
  flex: 1 1 auto;
  max-width: calc(100% - 260px);
  font-size: clamp(0.92rem, 1.75vw, 1.72rem);
  line-height: 1.18;
  letter-spacing: 0.015em;
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: anywhere;
}

/* Character role color chips/cards. */
.side-role-name-card,
.other-role-chip {
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.035), 0 12px 28px rgba(0, 0, 0, 0.36);
}

.side-role-name-card.role-kawagishi,
.other-role-chip.role-kawagishi {
  background: linear-gradient(180deg, #5f161b, #2a080b);
  color: #fff3f1;
}

.side-role-name-card.role-miyazaki,
.other-role-chip.role-miyazaki {
  background: linear-gradient(180deg, #123c70, #06172e);
  color: #edf6ff;
}

.side-role-name-card.role-midorino,
.other-role-chip.role-midorino {
  background: linear-gradient(180deg, #174d2e, #071c10);
  color: #effff3;
}

.side-role-name-card.role-kurosaka,
.other-role-chip.role-kurosaka {
  background: linear-gradient(180deg, #18191c, #020203);
  color: #f2f2f2;
}

.side-role-name-card.role-tani,
.other-role-chip.role-tani {
  background: linear-gradient(180deg, #8a6a13, #3a2704);
  color: #fff5c7;
}

.side-role-name-card.role-unknown,
.other-role-chip.role-unknown {
  background: rgba(0, 0, 0, 0.54);
}

.side-role-name-card .info-label,
.side-role-name-card strong,
.other-role-chip {
  color: inherit;
}

.other-role-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
  margin-bottom: 16px;
}

.other-role-chip {
  border: 1px solid rgba(216, 184, 106, 0.2);
  border-radius: 8px;
  padding: 6px 7px;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif;
  font-size: 0.58rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 1.25;
}

/* Sheet viewer: real zoom above 100%, mouse wheel zoom, right/middle drag panning. */
.sheet-viewer-frame {
  width: min(980px, calc(100vw - 56px));
}

.sheet-image-stage {
  position: relative;
  min-height: 440px;
  overflow: auto;
  overscroll-behavior: contain;
  touch-action: none;
  cursor: default;
  user-select: none;
}

.sheet-image-stage.is-panning {
  cursor: grabbing;
}

.sheet-image-canvas {
  min-width: 420px;
  margin: 0 auto;
  transform-origin: top left;
}

.overview-sheet-image {
  display: block;
  width: 100% !important;
  max-width: none !important;
  max-height: none !important;
  height: auto !important;
  margin: 0 auto;
  user-select: none;
  -webkit-user-drag: none;
}

/* Investigation layout: use the same opening grid, and let the board fill the center. */
.post-opening-page {
  min-height: 100vh;
}

.post-opening-layout {
  min-height: calc(100vh - 128px);
}

.investigation-board-panel {
  height: calc(100vh - 128px);
  min-height: 560px;
  box-sizing: border-box;
  padding: 16px;
  overflow: hidden;
}

.investigation-status-area {
  display: grid;
  justify-items: end;
  gap: 10px;
  min-width: min(340px, 100%);
}

.turn-status-card {
  border: 1px solid rgba(216, 184, 106, 0.22);
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.36);
  min-width: 220px;
}

.turn-status-card strong {
  display: block;
  color: var(--mm-text);
  font-size: 1.05rem;
}

.thunder-icons {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  min-height: 28px;
  color: #d8b86a;
  font-size: 1.45rem;
  line-height: 1;
  text-shadow: 0 0 14px rgba(216, 184, 106, 0.24);
}

.investigation-status-compact,
.room-move-actions {
  display: none !important;
}

.investigation-grid-wrap {
  flex: 1 1 auto;
  min-height: 0;
}

.investigation-board-grid {
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  grid-template-columns: repeat(7, minmax(88px, 1fr));
  grid-template-rows: repeat(4, minmax(78px, 1fr));
  gap: 9px;
}

.investigation-cell-square {
  aspect-ratio: auto !important;
  min-width: 0;
  min-height: 0;
  height: 100%;
  border-radius: 2px !important;
  padding: 10px 8px !important;
}

.investigation-cell-square span {
  font-size: clamp(0.86rem, 1.05vw, 1.08rem);
}

.investigation-actions-row {
  flex: 0 0 auto;
}

/* Darker board colors to match the black/gold UI. */
.cell-kawagishi {
  background: linear-gradient(180deg, #65171c, #2a070a) !important;
  border-color: rgba(170, 54, 62, 0.62) !important;
}

.cell-miyazaki {
  background: linear-gradient(180deg, #123d73, #06162d) !important;
  border-color: rgba(71, 118, 183, 0.58) !important;
}

.cell-midorino {
  background: linear-gradient(180deg, #195331, #071d11) !important;
  border-color: rgba(68, 142, 91, 0.56) !important;
}

.cell-kurosaka {
  background: linear-gradient(180deg, #17181b, #010101) !important;
  border-color: rgba(210, 210, 210, 0.26) !important;
}

.cell-tani {
  color: #fff4c2 !important;
  background: linear-gradient(180deg, #8c6a12, #342304) !important;
  border-color: rgba(188, 153, 44, 0.58) !important;
}

.cell-tani small,
.board-column-label.cell-tani {
  color: #fff4c2 !important;
}

.cell-victim {
  background: linear-gradient(180deg, #363941, #17181c) !important;
  border-color: rgba(130, 135, 145, 0.42) !important;
}

.cell-villa {
  background: linear-gradient(180deg, #2c1648, #100519) !important;
  border-color: rgba(116, 76, 168, 0.48) !important;
}

@media (max-width: 1120px) {
  .investigation-board-panel {
    height: auto;
    min-height: 560px;
  }

  .post-opening-layout {
    min-height: auto;
  }
}

@media (max-width: 760px) {
  .game-title {
    max-width: 100%;
    font-size: clamp(0.95rem, 4.8vw, 1.48rem);
  }

  .other-role-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .other-role-chip {
    font-size: 0.52rem;
    padding: 5px 4px;
  }

  .sheet-image-canvas {
    min-width: 320px;
  }

  .investigation-status-area {
    justify-items: stretch;
    width: 100%;
  }

  .turn-status-card {
    min-width: 0;
  }
}

/* ===== v9 targeted fixes ===== */
.sheet-index-list {
  display: grid;
  gap: 8px;
}

.opening-gm-control {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.sheet-image-stage {
  cursor: grab;
}

.sheet-image-stage.is-panning {
  cursor: grabbing;
}

.sheet-image-stage img {
  cursor: inherit;
}

/* ===== v10 targeted fixes ===== */
.side-role-name-card.role-gm,
.other-role-chip.role-gm {
  background: linear-gradient(180deg, #3a2c55, #15101f);
  color: #f5efff;
}

.sheet-index-button {
  grid-template-columns: minmax(0, 1fr);
  min-height: 0;
  padding: 10px 11px;
  overflow: hidden;
}

.sheet-index-button span {
  min-width: 0;
  font-size: 0.82rem;
  line-height: 1.2;
  letter-spacing: 0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sheet-index-button small {
  font-size: 0.66rem;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.question-time-notice {
  margin-top: 22px;
  border: 1px solid rgba(216, 184, 106, 0.28);
  border-radius: 16px;
  padding: 18px 20px;
  background: rgba(0, 0, 0, 0.36);
  line-height: 1.8;
}

.question-time-notice strong {
  display: block;
  margin-bottom: 8px;
  color: var(--mm-gold);
  font-size: 1.1rem;
  letter-spacing: 0.08em;
}

.question-time-notice p {
  margin: 4px 0;
  color: var(--mm-text);
  font-weight: 700;
}

.other-role-list {
  grid-template-columns: 1fr;
}

.other-role-chip {
  text-align: left;
  font-size: 0.62rem;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Viewer drag behavior is intentionally inverted in TS. */
.sheet-image-stage {
  cursor: grab;
}

.sheet-image-stage.is-panning {
  cursor: grabbing;
}

.investigation-actions-row {
  min-height: 43px;
}

.investigation-actions-spacer {
  visibility: hidden;
  pointer-events: none;
}

.investigation-cell-square:disabled {
  opacity: 1;
  filter: none;
}

.investigation-cell-square.claimed {
  position: relative;
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.2),
    0 0 0 1px rgba(216, 184, 106, 0.22),
    0 16px 30px rgba(0, 0, 0, 0.35);
}

.investigation-cell-square.mine {
  box-shadow:
    inset 0 0 0 3px rgba(255, 255, 255, 0.52),
    0 0 0 2px rgba(216, 184, 106, 0.72),
    0 0 24px rgba(216, 184, 106, 0.16);
}

.cell-owner-badge {
  display: block;
  width: 100%;
  margin-top: 7px;
  border-radius: 999px;
  padding: 5px 7px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.96) !important;
  background: rgba(0, 0, 0, 0.46);
  font-size: clamp(0.58rem, 0.75vw, 0.72rem) !important;
  font-weight: 900;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.investigation-cell-square:not(.claimed) .cell-owner-badge {
  color: rgba(255, 255, 255, 0.62) !important;
  background: rgba(0, 0, 0, 0.22);
}

.investigation-card-viewer-layer {
  position: fixed;
  inset: 0;
  z-index: 850;
  display: grid;
  place-items: center;
  padding: 28px;
  pointer-events: none;
}

.investigation-card-viewer-frame {
  pointer-events: auto;
  width: min(760px, calc(100vw - 56px));
  max-height: calc(100vh - 56px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: hidden;
  border-radius: 22px;
}

.investigation-card-viewer-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(216, 184, 106, 0.22);
}

.investigation-card-viewer-header h2 {
  margin: 4px 0 6px;
}

.investigation-card-viewer-header p {
  margin: 0;
  color: var(--mm-muted);
}

.investigation-card-image-stage {
  min-height: 360px;
  overflow: auto;
  padding: 18px;
  background: #050505;
}

.investigation-card-image {
  display: block;
  width: min(100%, 680px);
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.62);
  user-select: none;
  -webkit-user-drag: none;
}

@media (max-width: 760px) {
  .other-role-list {
    grid-template-columns: 1fr;
  }

  .other-role-chip {
    font-size: 0.58rem;
  }

  .investigation-card-viewer-layer {
    padding: 12px;
  }

  .investigation-card-viewer-frame {
    width: calc(100vw - 24px);
    max-height: calc(100vh - 24px);
  }
}

/* ===== v11 targeted fixes ===== */
.break-notice-box {
  flex: 0 0 auto;
  border: 1px solid rgba(216, 184, 106, 0.32);
  border-radius: 14px;
  padding: 13px 16px;
  background: linear-gradient(90deg, rgba(76, 60, 28, 0.34), rgba(0, 0, 0, 0.32));
  color: var(--mm-text);
  line-height: 1.55;
}

.break-notice-box strong {
  display: block;
  margin-bottom: 4px;
  color: var(--mm-gold);
  letter-spacing: 0.08em;
}

.break-notice-box p {
  margin: 2px 0;
  color: var(--mm-muted);
  font-weight: 700;
}

.investigation-board-panel.is-break .investigation-board-grid {
  opacity: 0.92;
}

.investigation-cell-square.locked:not(.claimed) {
  filter: grayscale(0.35) brightness(0.72);
}

.investigation-cell-square.own-column:not(.claimed) {
  opacity: 0.64;
}

.investigation-cell-square.viewable {
  position: relative;
  overflow: hidden;
}

.investigation-cell-square.viewable::before {
  content: "";
  position: absolute;
  inset: 3px;
  z-index: 0;
  border-radius: 1px;
  background-image: var(--cell-image);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.88;
  filter: saturate(0.92) contrast(1.04) brightness(0.74);
}

.investigation-cell-square.viewable::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.58));
  pointer-events: none;
}

.investigation-cell-square > span,
.investigation-cell-square > small,
.investigation-cell-square > em {
  position: relative;
  z-index: 2;
}

.investigation-cell-square.claimed.owned-by-A {
  color: #381010 !important;
  background: linear-gradient(180deg, #efd2d2, #b86f73) !important;
  border-color: rgba(255, 210, 212, 0.82) !important;
}

.investigation-cell-square.claimed.owned-by-B {
  color: #0b203c !important;
  background: linear-gradient(180deg, #d7e8ff, #7fa9d9) !important;
  border-color: rgba(210, 231, 255, 0.82) !important;
}

.investigation-cell-square.claimed.owned-by-C {
  color: #0d2b18 !important;
  background: linear-gradient(180deg, #d7f0de, #77b489) !important;
  border-color: rgba(210, 242, 220, 0.82) !important;
}

.investigation-cell-square.claimed.owned-by-D {
  color: #141417 !important;
  background: linear-gradient(180deg, #e1e1e4, #85858d) !important;
  border-color: rgba(235, 235, 238, 0.82) !important;
}

.investigation-cell-square.claimed.owned-by-E {
  color: #342402 !important;
  background: linear-gradient(180deg, #fff0a8, #d4aa45) !important;
  border-color: rgba(255, 238, 150, 0.86) !important;
}

.investigation-cell-square.claimed .cell-owner-badge {
  color: rgba(0, 0, 0, 0.86) !important;
  background: rgba(255, 255, 255, 0.58);
}

.investigation-cell-square.claimed.viewable .cell-owner-badge,
.investigation-cell-square.claimed.viewable span,
.investigation-cell-square.claimed.viewable .cell-public-badge {
  color: #fff !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
}

.cell-public-badge {
  border-radius: 999px;
  padding: 3px 7px;
  color: #fff !important;
  background: rgba(216, 184, 106, 0.72);
  font-size: 0.58rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.public-state-text {
  color: var(--mm-gold) !important;
  font-weight: 900;
}

.investigation-card-viewer-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

/* Change victim color away from plain gray while keeping the dark cinematic palette. */
.cell-victim {
  color: #f4ece0 !important;
  background: linear-gradient(180deg, #4d2b22, #1b0d0a) !important;
  border-color: rgba(170, 96, 72, 0.5) !important;
}

.board-column-label.cell-victim {
  color: #f4ece0 !important;
}

/* Break phase: participants can still see visible images, but cannot click cards. */
.investigation-board-panel.is-break .investigation-cell-square:disabled {
  cursor: not-allowed;
}

@media (max-width: 760px) {
  .investigation-card-viewer-actions {
    justify-content: flex-start;
  }
}

/* ===== v12 secret talk, order setup, and timer ===== */
.investigation-setup-panel {
  min-height: 620px;
  border-radius: 12px;
  padding: 28px;
  box-sizing: border-box;
}

.order-setup-box,
.waiting-investigation-start-box {
  margin-top: 22px;
  border: 1px solid rgba(216, 184, 106, 0.28);
  border-radius: 16px;
  padding: 22px;
  background: rgba(0, 0, 0, 0.34);
}

.order-setup-box h3,
.waiting-investigation-start-box strong {
  display: block;
  margin: 0 0 10px;
  color: var(--mm-gold);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", serif;
  font-size: 1.35rem;
  letter-spacing: 0.08em;
}

.order-select-list {
  display: grid;
  gap: 10px;
  margin: 18px 0 22px;
}

.order-select-row {
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.order-select-row span {
  color: var(--mm-muted);
  font-weight: 900;
}

.order-select-row select {
  width: 100%;
  border: 1px solid rgba(216, 184, 106, 0.34);
  border-radius: 12px;
  padding: 10px 12px;
  color: var(--mm-text);
  background: #0b0b0d;
}

.order-select-row option {
  color: #111;
  background: #fff;
}

.waiting-investigation-start-box {
  min-height: 360px;
  display: grid;
  place-content: center;
  text-align: center;
}

.waiting-investigation-start-box p {
  max-width: 560px;
  color: var(--mm-muted);
  line-height: 1.8;
}

.investigation-timer-card {
  border: 1px solid rgba(216, 184, 106, 0.46);
  border-radius: 10px;
  padding: 10px 14px;
  min-width: 104px;
  text-align: center;
  color: var(--mm-gold);
  background: rgba(0, 0, 0, 0.45);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  box-shadow: inset 0 0 24px rgba(216, 184, 106, 0.05);
}

.private-talk-banner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 8px 14px;
  align-items: center;
  border: 1px solid rgba(216, 184, 106, 0.26);
  border-radius: 14px;
  padding: 12px 15px;
  background: linear-gradient(90deg, rgba(62, 48, 80, 0.42), rgba(0, 0, 0, 0.32));
}

.private-talk-banner strong {
  color: var(--mm-gold);
  letter-spacing: 0.12em;
}

.private-talk-banner span,
.private-talk-banner em {
  color: var(--mm-muted);
  font-style: normal;
}

.private-talk-banner em {
  grid-column: 1 / -1;
  font-weight: 800;
}

.private-talk-banner.active-for-me {
  border-color: rgba(216, 184, 106, 0.62);
  box-shadow: 0 0 28px rgba(216, 184, 106, 0.08);
}

.private-talk-select-list {
  display: grid;
  gap: 9px;
  margin: 18px 0 22px;
}

.private-talk-select-list button {
  width: 100%;
  text-align: left;
  border-radius: 12px;
}

.private-talk-select-list button.selected {
  border-color: var(--mm-border-strong);
  background: linear-gradient(180deg, rgba(151, 105, 38, 0.88), rgba(77, 40, 18, 0.92));
  box-shadow: 0 0 0 1px rgba(216, 184, 106, 0.15), 0 0 22px rgba(216, 184, 106, 0.12);
}

.cell-private-badge {
  border-radius: 999px;
  padding: 3px 7px;
  color: #fff !important;
  background: rgba(116, 76, 168, 0.78);
  font-size: 0.58rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.investigation-cell-square.private-shared:not(.public) {
  box-shadow: inset 0 0 0 2px rgba(166, 126, 230, 0.5), 0 0 14px rgba(116, 76, 168, 0.16);
}

.investigation-start-splash .role-reveal-card strong {
  font-size: clamp(3rem, 8vw, 7rem);
  letter-spacing: 0.18em;
}

/* Keep the reversed pan behavior understandable through cursor feedback. */
.sheet-image-stage {
  cursor: grab;
}

.sheet-image-stage.is-panning {
  cursor: grabbing;
}

@media (max-width: 760px) {
  .order-select-row {
    grid-template-columns: 1fr;
  }

  .private-talk-banner {
    grid-template-columns: 1fr;
  }

  .investigation-timer-card {
    width: fit-content;
  }
}

/* ===== v13 targeted fixes ===== */
.investigation-header-row {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: start;
  gap: 18px;
}

.investigation-heading-block {
  min-width: 0;
}

.investigation-timer-center {
  align-self: center;
  justify-self: center;
  margin-top: 22px;
}

.investigation-status-area {
  justify-self: end;
}

.board-start-pending-note {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(216, 184, 106, 0.28);
  border-radius: 12px;
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.34);
  color: var(--mm-muted);
  font-weight: 800;
}

.board-start-pending-note strong {
  color: var(--mm-gold);
  letter-spacing: 0.08em;
}

.waiting-investigation-start-box p {
  display: none !important;
}

/* Claimed cells should become a lighter version of the CARD COLUMN color, not the owner's color. */
.investigation-cell-square.claimed.cell-kawagishi {
  color: #fff2f2 !important;
  background: linear-gradient(180deg, #9b3b41, #5f171d) !important;
  border-color: rgba(245, 132, 140, 0.78) !important;
}

.investigation-cell-square.claimed.cell-miyazaki {
  color: #edf5ff !important;
  background: linear-gradient(180deg, #2e669e, #173b67) !important;
  border-color: rgba(126, 177, 230, 0.78) !important;
}

.investigation-cell-square.claimed.cell-midorino {
  color: #effff3 !important;
  background: linear-gradient(180deg, #36764e, #17422a) !important;
  border-color: rgba(122, 204, 150, 0.72) !important;
}

.investigation-cell-square.claimed.cell-kurosaka {
  color: #f4f4f5 !important;
  background: linear-gradient(180deg, #393a3f, #18191d) !important;
  border-color: rgba(222, 222, 226, 0.46) !important;
}

.investigation-cell-square.claimed.cell-tani {
  color: #fff7cf !important;
  background: linear-gradient(180deg, #b69228, #6d5012) !important;
  border-color: rgba(245, 211, 96, 0.78) !important;
}

.investigation-cell-square.claimed.cell-victim {
  color: #f7eee8 !important;
  background: linear-gradient(180deg, #704134, #3a1d17) !important;
  border-color: rgba(199, 125, 97, 0.62) !important;
}

.investigation-cell-square.claimed.cell-villa {
  color: #f2eaff !important;
  background: linear-gradient(180deg, #4b2c72, #26123d) !important;
  border-color: rgba(151, 111, 211, 0.66) !important;
}

.investigation-cell-square.claimed .cell-owner-badge {
  color: #fff !important;
  background: rgba(0, 0, 0, 0.46) !important;
}

.investigation-cell-square.private-shared:not(.public) {
  box-shadow:
    inset 0 0 0 2px rgba(166, 126, 230, 0.5),
    0 0 14px rgba(116, 76, 168, 0.16) !important;
}

@media (max-width: 760px) {
  .investigation-header-row {
    grid-template-columns: 1fr !important;
  }

  .investigation-timer-center,
  .investigation-status-area {
    justify-self: stretch;
    margin-top: 0;
  }
}

/* ===== v14 reasoning / vote / ending additions ===== */
.reasoning-card,
.vote-card,
.ending-card {
  min-height: 520px;
  border-radius: 24px;
  padding: 30px;
}

.reasoning-card h2,
.vote-card h2,
.ending-card h2 {
  font-size: clamp(2rem, 3.4vw, 3.8rem);
}

.vote-main-instruction {
  margin: 20px 0;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", Georgia, serif;
  font-size: clamp(1.4rem, 2.2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: 0.06em;
}

.vote-target-list,
.vote-status-list {
  display: grid;
  gap: 12px;
  margin: 22px 0;
}

.vote-target-list button {
  width: 100%;
  display: grid;
  gap: 5px;
  justify-items: start;
  border-radius: 16px;
  padding: 16px 18px;
  text-align: left;
}

.vote-target-list button.selected {
  border-color: var(--mm-border-strong);
  box-shadow: 0 0 0 1px rgba(216, 184, 106, 0.18), 0 0 26px rgba(216, 184, 106, 0.12);
}

.vote-target-list small {
  color: var(--mm-muted);
  font-size: 0.78rem;
}

.vote-status-row,
.vote-completed-box,
.ending-sheet-notice {
  border: 1px solid rgba(216, 184, 106, 0.24);
  border-radius: 16px;
  padding: 16px 18px;
  background: rgba(0, 0, 0, 0.34);
}

.vote-status-row {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}

.vote-status-row span,
.vote-completed-box p,
.ending-sheet-notice p {
  color: var(--mm-muted);
}

.investigation-end-splash .role-reveal-card strong {
  letter-spacing: 0.18em;
}

/* ===== v15 targeted fixes ===== */
.sheet-page-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(216, 184, 106, 0.24);
  border-radius: 999px;
  padding: 4px 6px;
  background: rgba(0, 0, 0, 0.32);
}

.sheet-page-controls span {
  min-width: 48px;
  text-align: center;
  color: var(--mm-gold);
  font-weight: 900;
  font-size: 0.8rem;
}

.investigation-cell-square {
  position: relative;
}

.cell-owner-marker {
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 4;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.82);
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.72);
  pointer-events: none;
}

.cell-owner-marker.role-kawagishi { background: #b42a34; }
.cell-owner-marker.role-miyazaki { background: #1f64b7; }
.cell-owner-marker.role-midorino { background: #247a44; }
.cell-owner-marker.role-kurosaka { background: #08080a; }
.cell-owner-marker.role-tani { background: #d5aa2f; }
.cell-owner-marker.role-unknown { background: #7d748c; }

.investigation-cell-square:disabled {
  opacity: 1 !important;
}

.debate-card {
  min-height: 520px;
}

.debate-timer-display {
  width: min(360px, 100%);
  margin: 30px auto;
  border: 1px solid rgba(216, 184, 106, 0.56);
  border-radius: 18px;
  padding: 22px 28px;
  text-align: center;
  color: var(--mm-gold);
  background: rgba(0, 0, 0, 0.42);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  text-shadow: 0 0 20px rgba(216, 184, 106, 0.18);
}

.debate-gm-controls,
.manual-ending-box {
  border: 1px solid rgba(216, 184, 106, 0.24);
  border-radius: 16px;
  padding: 18px 20px;
  background: rgba(0, 0, 0, 0.34);
}

.debate-time-input {
  display: grid;
  grid-template-columns: auto 120px;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.debate-time-input span {
  color: var(--mm-muted);
  font-weight: 800;
}

.debate-time-input input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(216, 184, 106, 0.32);
  border-radius: 10px;
  padding: 9px 10px;
  color: var(--mm-text);
  background: rgba(0, 0, 0, 0.42);
}

.ending-select-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

.ending-select-list button.selected,
.vote-target-list button.selected {
  border-color: var(--mm-border-strong) !important;
  box-shadow: 0 0 0 2px rgba(216, 184, 106, 0.22), 0 0 22px rgba(216, 184, 106, 0.12) !important;
}

.schedule-item p {
  display: none !important;
}

@media (max-width: 760px) {
  .ending-select-list {
    grid-template-columns: 1fr;
  }

  .debate-time-input {
    grid-template-columns: 1fr;
  }
}

/* ===== v16 targeted fixes ===== */
.sheet-share-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  max-width: 520px;
}

.sheet-share-controls button {
  padding: 7px 10px;
  font-size: 0.72rem;
}

.special-investigation-section {
  margin-top: 18px;
  border: 1px solid rgba(216, 184, 106, 0.22);
  border-radius: 18px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.28);
}

.special-investigation-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.special-investigation-heading strong {
  color: var(--mm-gold);
  letter-spacing: 0.08em;
}

.special-investigation-heading span {
  color: var(--mm-muted);
  font-size: 0.82rem;
}

.special-investigation-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.special-investigation-card {
  border: 1px solid rgba(216, 184, 106, 0.2);
  border-radius: 14px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.36);
}

.special-investigation-card.public {
  border-color: rgba(216, 184, 106, 0.62);
  box-shadow: 0 0 18px rgba(216, 184, 106, 0.08);
}

.special-investigation-open {
  width: 100%;
  display: grid;
  gap: 5px;
  justify-items: start;
  border-radius: 12px !important;
  padding: 12px !important;
  text-align: left;
}

.special-investigation-open strong {
  font-size: 0.92rem;
}

.special-investigation-open small {
  color: var(--mm-muted);
  font-size: 0.7rem;
}

.special-investigation-controls {
  display: grid;
  gap: 6px;
  margin-top: 8px;
}

.special-investigation-controls button {
  width: 100%;
  padding: 7px 8px !important;
  font-size: 0.68rem;
}

.investigation-board-panel.is-debate .investigation-board-grid {
  opacity: 1;
}

.inline-debate-controls {
  width: min(760px, 100%);
}

.investigation-board-panel.is-debate .investigation-cell-square:disabled,
.investigation-cell-square:disabled {
  opacity: 1 !important;
  filter: none !important;
}

@media (max-width: 1280px) {
  .special-investigation-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .special-investigation-list {
    grid-template-columns: 1fr;
  }

  .special-investigation-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* ===== Home screen usability polish ===== */
.home-page {
  display: flex;
  flex-direction: column;
}

.home-card {
  width: min(760px, calc(100vw - 56px));
  margin: 28px auto 0;
  padding: clamp(28px, 4vw, 48px);
  border-radius: 18px;
  text-align: center;
}

.home-card h2 {
  margin-bottom: 12px;
  font-size: clamp(2rem, 4.6vw, 3.6rem);
}

.home-lead {
  max-width: 560px;
  margin: 0 auto 30px;
  color: var(--mm-muted);
  line-height: 1.85;
}

.home-actions {
  display: flex;
  justify-content: center;
  margin: 26px 0 34px;
}

.home-create-button {
  min-width: min(420px, 86vw);
  min-height: 76px;
  padding: 20px 42px;
  font-size: clamp(1.35rem, 2.6vw, 2rem);
  letter-spacing: 0.16em;
}

.join-room-box {
  display: grid;
  gap: 10px;
  max-width: 620px;
  margin: 0 auto;
  padding-top: 26px;
  border-top: 1px solid rgba(216, 184, 106, 0.20);
  text-align: left;
}

.input-label {
  color: var(--mm-gold);
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.join-room-input-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: stretch;
}

.join-room-input-row input {
  min-height: 52px;
  border: 1px solid rgba(216, 184, 106, 0.36);
  border-radius: 14px;
  padding: 0 18px;
  color: var(--mm-text);
  background: rgba(0, 0, 0, 0.56);
  font-size: 1.16rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.join-room-input-row input::placeholder {
  color: rgba(243, 239, 229, 0.34);
}

.join-room-input-row input:hover,
.join-room-input-row input:focus {
  border-color: rgba(239, 210, 139, 0.76);
  background: rgba(20, 16, 10, 0.72);
}

.home-join-button {
  min-width: 160px;
}

.home-help-text {
  margin: 2px 0 0;
  color: var(--mm-muted);
  font-size: 0.84rem;
  line-height: 1.6;
}

/* Make every actionable button visibly change color on hover. */
.app button:hover:not(:disabled),
.dark-game-app button:hover:not(:disabled) {
  color: #fff8e8;
  background:
    linear-gradient(180deg, rgba(183, 125, 45, 0.98), rgba(88, 44, 17, 0.98));
}

.app button:active:not(:disabled),
.dark-game-app button:active:not(:disabled) {
  transform: translateY(0);
  background:
    linear-gradient(180deg, rgba(96, 58, 22, 0.98), rgba(32, 19, 10, 0.98));
}

.leave-room-button:hover:not(:disabled) {
  background:
    linear-gradient(180deg, rgba(132, 34, 41, 0.98), rgba(61, 14, 18, 0.98));
}

.sheet-index-button:hover:not(:disabled),
.vote-target-list button:hover:not(:disabled),
.ending-select-list button:hover:not(:disabled),
.private-talk-select-list button:hover:not(:disabled) {
  background:
    linear-gradient(180deg, rgba(72, 54, 26, 0.96), rgba(16, 13, 9, 0.98));
}

@media (max-width: 760px) {
  .home-card {
    width: calc(100vw - 32px);
    margin-top: 16px;
    padding: 24px 18px;
  }

  .home-create-button {
    width: 100%;
    min-width: 0;
  }

  .join-room-input-row {
    grid-template-columns: 1fr;
  }

  .home-join-button {
    width: 100%;
    min-height: 54px;
  }
}



/* ===== Centered form improvements ===== */
.centered-form-card,
.confirm-card,
.name-card {
  width: min(760px, calc(100vw - 56px));
  margin: 28px auto 0;
  padding: clamp(28px, 4vw, 46px);
  border-radius: 18px;
  text-align: center;
}

.name-card h2,
.confirm-card h2 {
  margin-bottom: 12px;
  font-size: clamp(2rem, 4.2vw, 3.2rem);
}

.name-card .muted-text,
.confirm-lead {
  max-width: 540px;
  margin: 0 auto 22px;
  line-height: 1.8;
}

.name-input,
.name-card input {
  width: min(540px, 100%);
  min-height: 58px;
  margin: 8px auto 0;
  border: 1px solid rgba(216, 184, 106, 0.36);
  border-radius: 14px;
  padding: 0 18px;
  color: var(--mm-text);
  background: rgba(0, 0, 0, 0.56);
  font-size: 1.12rem;
}

.name-card .input-label,
.confirm-name {
  display: block;
  text-align: center;
}

.confirm-name {
  margin: 0 auto 18px;
  color: #f8f0df;
  font-size: 1.2rem;
  letter-spacing: 0.06em;
}

.centered-form-actions,
.confirm-actions,
.join-home-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.large-centered-button,
.large-secondary-button,
.home-join-button {
  min-width: min(420px, 86vw);
  min-height: 68px;
  padding: 18px 34px;
  font-size: clamp(1.15rem, 2.1vw, 1.55rem);
  letter-spacing: 0.08em;
}

.large-secondary-button {
  background: linear-gradient(180deg, rgba(50, 42, 28, 0.95), rgba(12, 12, 12, 0.98));
}

.join-room-input-row.solo-input-row {
  grid-template-columns: 1fr;
}

.join-home-actions {
  margin: 20px 0 0;
}

/* ===== Draggable sheet window ===== */
.draggable-sheet-window {
  position: relative;
  will-change: transform;
}

.sheet-viewer-frame.is-window-dragging {
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.84), 0 0 50px rgba(216, 184, 106, 0.18);
}

.sheet-viewer-header {
  cursor: grab;
  user-select: none;
}

.sheet-viewer-frame.is-window-dragging .sheet-viewer-header {
  cursor: grabbing;
}

.sheet-image-stage {
  cursor: grab;
}

.sheet-image-stage.is-panning {
  cursor: grabbing;
}

@media (max-width: 760px) {
  .centered-form-card,
  .confirm-card,
  .name-card {
    width: calc(100vw - 32px);
    margin-top: 16px;
    padding: 24px 18px;
  }

  .large-centered-button,
  .large-secondary-button,
  .home-join-button {
    width: 100%;
    min-width: 0;
  }
}
`;function Nf(){let e=`murder-mystery-force-style`;if(document.getElementById(e))return;let t=document.createElement(`style`);t.id=e,t.setAttribute(`data-source`,`src/forceStyle.ts`),t.textContent=Mf,document.head.appendChild(t),document.documentElement.setAttribute(`data-mm-style`,`forced`)}Nf(),v.createRoot(document.getElementById(`root`)).render((0,$.jsx)(_.StrictMode,{children:(0,$.jsx)(jf,{})}));