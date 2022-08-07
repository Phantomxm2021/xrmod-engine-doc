"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[5970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,h=d["".concat(u,".").concat(v)]||d[v]||f[v]||i;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71455:(e,n,t)=>{t.d(n,{HI:()=>F,TV:()=>L});var r=t(67294),o=t(73935);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}function c(e){var n=(0,r.useRef)({fn:e,curr:void 0}).current;if(n.fn=e,!n.curr){var t=Object.create(null);Object.keys(e).forEach((function(e){t[e]=function(){var t;return(t=n.fn[e]).call.apply(t,[n.fn].concat([].slice.call(arguments)))}})),n.curr=t}return n.curr}function u(e){return(0,r.useReducer)((function(e,n){return i({},e,"function"==typeof n?n(e):n)}),e)}var l=(0,r.createContext)(void 0),s="undefined"!=typeof window&&"ontouchstart"in window,f=function(e,n,t){return Math.max(Math.min(e,t),n)},d=function(e,n,t){return void 0===n&&(n=0),void 0===t&&(t=0),f(e,1*(1-t),Math.max(6,n)*(1+t))},v="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?r.useEffect:r.useLayoutEffect;function h(e,n,t){var o=(0,r.useRef)(n);o.current=n,(0,r.useEffect)((function(){function n(e){o.current(e)}return e&&window.addEventListener(e,n,t),function(){e&&window.removeEventListener(e,n)}}),[e])}var m=["container"];function p(e){var n=e.container,t=void 0===n?document.body:n,c=a(e,m);return(0,o.createPortal)(r.createElement("div",i({},c)),t)}function g(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function y(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function w(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function b(){return(0,r.useEffect)((function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n}}),[]),null}function x(e){var n=e.touches[0],t=n.clientX,r=n.clientY;if(e.touches.length>=2){var o=e.touches[1],i=o.clientX,a=o.clientY;return[(t+i)/2,(r+a)/2,Math.sqrt(Math.pow(i-t,2)+Math.pow(a-r,2))]}return[t,r,0]}var C=function(e,n,t,r){var o=t*n,i=(o-r)/2,a=void 0,c=e;return o<=r?(a=1,c=0):e>0&&i-e<=0?(a=2,c=i):e<0&&i+e<=0&&(a=3,c=-i),[a,c]};function E(e,n,t,r,o,i,a,c,u,l){void 0===a&&(a=innerWidth/2),void 0===c&&(c=innerHeight/2),void 0===u&&(u=0),void 0===l&&(l=0);var s=C(e,i,t,innerWidth)[0],f=C(n,i,r,innerHeight),d=innerWidth/2,v=innerHeight/2;return{x:a-i/o*(a-(d+e))-d+(r/t>=3&&t*i===innerWidth?0:s?u/2:u),y:c-i/o*(c-(v+n))-v+(f[0]?l/2:l),lastCX:a,lastCY:c}}function k(e,n,t){var r=e%180!=0;return r?[t,n,r]:[n,t,r]}function P(e,n,t){var r=k(t,innerWidth,innerHeight),o=r[0],i=r[1],a=0,c=o,u=i,l=e/n*i,s=n/e*o;return e<o&&n<i?(c=e,u=n):e<o&&n>=i?c=l:e>=o&&n<i||e/n>o/i?u=s:n/e>=3&&!r[2]?a=((u=s)-i)/2:c=l,{width:c,height:u,x:0,y:a,pause:!0}}function M(e,n){var t=n.leading,o=void 0!==t&&t,i=n.maxWait,a=n.wait,c=void 0===a?i||0:a,u=(0,r.useRef)(e);u.current=e;var l=(0,r.useRef)(0),s=(0,r.useRef)(),f=function(){return s.current&&clearTimeout(s.current)},d=(0,r.useCallback)((function(){var e=[].slice.call(arguments),n=Date.now();function t(){l.current=n,f(),u.current.apply(null,e)}var r=l.current,a=n-r;if(0===r&&(o&&t(),l.current=n),void 0!==i){if(a>i)return void t()}else a<c&&(l.current=n);f(),s.current=setTimeout((function(){t(),l.current=0}),c)}),[c,i,o]);return d.cancel=f,d}var R=function(e,n,t){return _(e,n,t,100,(function(e){return e}),(function(){return _(n,e,t)}))},O=function(e){return 1-Math.pow(1-e,4)};function _(e,n,t,r,o,i){void 0===r&&(r=400),void 0===o&&(o=O);var a=n-e;if(0!==a){var c=Date.now(),u=0,l=function(){var n=Math.min(1,(Date.now()-c)/r);t(e+o(n)*a)&&n<1?s():(cancelAnimationFrame(u),n>=1&&i&&i())};s()}function s(){u=requestAnimationFrame(l)}}var X={T:0,L:0,W:0,H:0,FIT:void 0},Y=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e},N=["className"];function S(e){var n=e.className,t=a(e,N);return r.createElement("div",i({className:"PhotoView__Spinner "+n},t),r.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},r.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var T=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function W(e){var n=e.src,t=e.loaded,o=e.broken,c=e.className,u=e.onPhotoLoad,l=e.loadingElement,s=e.brokenElement,f=a(e,T),d=Y();return n&&!o?r.createElement(r.Fragment,null,r.createElement("img",i({className:"PhotoView__Photo"+(c?" "+c:""),src:n,onLoad:function(e){var n=e.target;d.current&&u({loaded:!0,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight})},onError:function(){d.current&&u({broken:!0})},alt:""},f)),!t&&(r.createElement("span",{className:"PhotoView__icon"},l)||r.createElement(S,{className:"PhotoView__icon"}))):s?r.createElement("span",{className:"PhotoView__icon"},"function"==typeof s?s({src:n}):s):null}var V={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function j(e){var n=e.item,t=n.src,o=n.render,a=n.width,l=void 0===a?0:a,f=n.height,m=void 0===f?0:f,p=n.originRef,g=e.visible,y=e.speed,w=e.easing,b=e.wrapClassName,O=e.className,N=e.style,S=e.loadingElement,T=e.brokenElement,j=e.onPhotoTap,A=e.onMaskTap,I=e.onReachMove,D=e.onReachUp,H=e.onPhotoResize,L=e.isActive,F=e.expose,B=u(V),z=B[0],q=B[1],K=(0,r.useRef)(0),U=Y(),G=z.naturalWidth,Z=void 0===G?l:G,J=z.naturalHeight,Q=void 0===J?m:J,$=z.width,ee=void 0===$?l:$,ne=z.height,te=void 0===ne?m:ne,re=z.loaded,oe=void 0===re?!t:re,ie=z.broken,ae=z.x,ce=z.y,ue=z.touched,le=z.stopRaf,se=z.maskTouched,fe=z.rotate,de=z.scale,ve=z.CX,he=z.CY,me=z.lastX,pe=z.lastY,ge=z.lastCX,ye=z.lastCY,we=z.lastScale,be=z.touchTime,xe=z.touchLength,Ce=z.pause,Ee=z.reach,ke=c({onScale:function(e){return Pe(d(e))},onRotate:function(e){fe!==e&&(F({rotate:e}),q(i({rotate:e},P(Z,Q,e))))}});function Pe(e,n,t){de!==e&&(F({scale:e}),q(i({scale:e},E(ae,ce,ee,te,de,e,n,t),e<=1&&{x:0,y:0})))}var Me=M((function(e,n,t){if(void 0===t&&(t=0),(ue||se)&&L){var r=k(fe,ee,te),o=r[0],a=r[1];if(0===t&&0===K.current){var c=Math.abs(e-ve)<=20,u=Math.abs(n-he)<=20;if(c&&u)return void q({lastCX:e,lastCY:n});K.current=c?n>he?3:2:1}var l=e-ge,s=n-ye,f=void 0;if(0===t){var v=C(l+me,de,o,innerWidth)[0],h=C(s+pe,de,a,innerHeight);f=function(e,n,t,r){return n&&1===e||"x"===r?"x":t&&e>1||"y"===r?"y":void 0}(K.current,v,h[0],Ee),void 0!==f&&I(f,e,n,de)}if("x"===f||se)return void q({reach:"x"});var m=d(de+(t-xe)/100/2*de,Z/ee,.2);F({scale:m}),q(i({touchLength:t,reach:f,scale:m},E(ae,ce,ee,te,de,m,e,n,l,s)))}}),{maxWait:8});function Re(e){return!le&&!ue&&(U.current&&q(i({},e,{pause:g})),U.current)}var Oe,_e,Xe,Ye,Ne,Se,Te,We,Ve=(Ne=function(e){return Re({x:e})},Se=function(e){return Re({y:e})},Te=function(e){return U.current&&(F({scale:e}),q({scale:e})),!ue&&U.current},We=c({X:function(e){return Ne(e)},Y:function(e){return Se(e)},S:function(e){return Te(e)}}),function(e,n,t,r,o,i,a,c,u,l,s){var f=k(l,o,i),d=f[0],v=f[1],h=C(e,c,d,innerWidth),m=h[0],p=h[1],g=C(n,c,v,innerHeight),y=g[0],w=g[1],b=Date.now()-s;if(b>=200||c!=a||Math.abs(u-a)>1){var x=E(e,n,o,i,a,c),P=x.x,M=x.y,O=m?p:P!==e?P:null,X=y?w:M!==n?M:null;return null!==O&&_(e,O,We.X),null!==X&&_(n,X,We.Y),void(c!=a&&_(a,c,We.S))}var Y=(e-t)/b,N=(n-r)/b,S=Math.sqrt(Math.pow(Y,2)+Math.pow(N,2)),T=!1,W=!1;!function(e,n){var t=e,r=0,o=void 0,i=0,a=function(i){o||(o=i);var a=i-o,l=Math.sign(e),s=-.001*l,f=Math.sign(-t)*Math.pow(t,2)*2e-4,d=t*a+(s+f)*Math.pow(a,2)/2;r+=d,o=i,l*(t+=(s+f)*a)<=0?u():n(r)?c():u()};function c(){i=requestAnimationFrame(a)}function u(){cancelAnimationFrame(i)}c()}(S,(function(t){var r=e+t*(Y/S),o=n+t*(N/S),i=C(r,a,d,innerWidth),c=i[0],u=i[1],l=C(o,a,v,innerHeight),s=l[0],f=l[1];if(c&&!T&&(T=!0,m?_(r,u,We.X):R(u,r+(r-u),We.X)),s&&!W&&(W=!0,y?_(o,f,We.Y):R(f,o+(o-f),We.Y)),T&&W)return!1;var h=T||We.X(u),p=W||We.Y(f);return h&&p}))}),je=(Oe=j,_e=function(e,n){Ee||Pe(1!==de?1:Math.max(2,Z/ee),e,n)},Xe=(0,r.useRef)(0),Ye=M((function(){Xe.current=0,Oe.apply(void 0,[].slice.call(arguments))}),{wait:300}),function(){var e=[].slice.call(arguments);Xe.current+=1,Ye.apply(void 0,e),Xe.current>=2&&(Ye.cancel(),Xe.current=0,_e.apply(void 0,e))});function Ae(e,n){if(K.current=0,(ue||se)&&L){q({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var t=d(de,Z/ee);if(Ve(ae,ce,me,pe,ee,te,de,t,we,fe,be),D(e,n),ve===e&&he===n){if(ue)return void je(e,n);se&&A(e,n)}}}function Ie(e,n,t){void 0===t&&(t=0),q({touched:!0,CX:e,CY:n,lastCX:e,lastCY:n,lastX:ae,lastY:ce,lastScale:de,touchLength:t,touchTime:Date.now()})}function De(e){q({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:ae,lastY:ce})}h(s?void 0:"mousemove",(function(e){e.preventDefault(),Me(e.clientX,e.clientY)})),h(s?void 0:"mouseup",(function(e){Ae(e.clientX,e.clientY)})),h(s?"touchmove":void 0,(function(e){e.preventDefault();var n=x(e);Me.apply(void 0,n)}),{passive:!1}),h(s?"touchend":void 0,(function(e){var n=e.changedTouches[0];Ae(n.clientX,n.clientY)}),{passive:!1}),h("resize",M((function(){oe&&!ue&&(q(P(Z,Q,fe)),H())}),{maxWait:8})),v((function(){L&&F(i({scale:de,rotate:fe},ke))}),[L]);var He=function(e,n,t,o,i,a,l,s,f,d){var h=function(e,n,t,o,i){var a=(0,r.useRef)(!1),c=u({lead:!0,scale:t}),l=c[0],s=l.lead,f=l.scale,d=c[1],h=M((function(e){try{return i(!0),d({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}}),{wait:o});return v((function(){a.current?(i(!1),d({lead:!0}),h(t)):a.current=!0}),[t]),s?[e*f,n*f,t/f]:[e*t,n*t,1]}(a,l,s,f,d),m=h[0],p=h[1],g=h[2],y=function(e,n,t,o,i){var a=(0,r.useState)(X),u=a[0],l=a[1],s=(0,r.useState)(0),f=s[0],d=s[1],v=(0,r.useRef)(),h=c({OK:function(){return e&&d(4)}});function m(e){i(!1),d(e)}return(0,r.useEffect)((function(){if(v.current||(v.current=Date.now()),t){if(function(e,n){var t=e&&e.current;if(t&&1===t.nodeType){var r=t.getBoundingClientRect();n({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===t.tagName?getComputedStyle(t).objectFit:void 0})}}(n,l),e)return Date.now()-v.current<250?(d(1),requestAnimationFrame((function(){d(2),requestAnimationFrame((function(){return m(3)}))})),void setTimeout(h.OK,o)):void d(4);m(5)}}),[e,t]),[f,u]}(e,n,t,f,d),w=y[0],b=y[1],x=b.W,C=b.FIT,E=innerWidth/2,k=innerHeight/2,P=w<3||w>4;return[P?x?b.L:E:o+(E-a*s/2),P?x?b.T:k:i+(k-l*s/2),m,P&&C?m*(b.H/x):p,0===w?g:P?x/(a*s)||.01:g,P?C?1:0:1,w,C]}(g,p,oe,ae,ce,ee,te,de,y,(function(e){return q({pause:e})})),Le=He[4],Fe=He[6],Be="transform "+y+"ms "+w,ze={className:O,onMouseDown:s?void 0:function(e){e.stopPropagation(),0===e.button&&Ie(e.clientX,e.clientY,0)},onTouchStart:s?function(e){e.stopPropagation(),Ie.apply(void 0,x(e))}:void 0,onWheel:function(e){if(!Ee){var n=d(de-e.deltaY/100/2,Z/ee);q({stopRaf:!0}),Pe(n,e.clientX,e.clientY)}},style:{width:He[2],height:He[3],opacity:He[5],objectFit:4===Fe?void 0:He[7],transform:fe?"rotate("+fe+"deg)":void 0,transition:Fe>2?Be+", opacity "+y+"ms ease, height "+(Fe<4?y/2:Fe>4?y:0)+"ms "+w:void 0}};return r.createElement("div",{className:"PhotoView__PhotoWrap"+(b?" "+b:""),style:N,onMouseDown:!s&&L?De:void 0,onTouchStart:s&&L?function(e){return De(e.touches[0])}:void 0},r.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+Le+", 0, 0, "+Le+", "+He[0]+", "+He[1]+")",transition:ue||Ce?void 0:Be,willChange:L?"transform":void 0}},t?r.createElement(W,i({src:t,loaded:oe,broken:ie},ze,{onPhotoLoad:function(e){q(i({},e,e.loaded&&P(e.naturalWidth||0,e.naturalHeight||0,fe)))},loadingElement:S,brokenElement:T})):o&&o({attrs:ze,scale:Le,rotate:fe})))}var A={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function I(e){var n=e.loop,t=void 0===n?3:n,o=e.speed,i=e.easing,a=e.photoClosable,l=e.maskClosable,d=void 0===l||l,m=e.maskOpacity,x=void 0===m?1:m,C=e.pullClosable,E=void 0===C||C,k=e.bannerVisible,P=void 0===k||k,M=e.overlayRender,R=e.toolbarRender,O=e.className,_=e.maskClassName,X=e.photoClassName,Y=e.photoWrapClassName,N=e.loadingElement,S=e.brokenElement,T=e.images,W=e.index,V=void 0===W?0:W,I=e.onIndexChange,D=e.visible,H=e.onClose,L=e.afterClose,F=e.portalContainer,B=u(A),z=B[0],q=B[1],K=(0,r.useState)(0),U=K[0],G=K[1],Z=z.x,J=z.touched,Q=z.pause,$=z.lastCX,ee=z.lastCY,ne=z.bg,te=void 0===ne?x:ne,re=z.lastBg,oe=z.overlay,ie=z.minimal,ae=z.scale,ce=z.rotate,ue=z.onScale,le=z.onRotate,se=e.hasOwnProperty("index"),fe=se?V:U,de=se?I:G,ve=(0,r.useRef)(fe),he=T.length,me=T[fe],pe="boolean"==typeof t?t:he>t,ge=function(e,n){var t=(0,r.useReducer)((function(e){return!e}),!1)[1],o=(0,r.useRef)(0),i=function(n,t){var i=(0,r.useRef)(n);function a(e){i.current=e}return(0,r.useMemo)((function(){var n;n=a,e?(n(e),o.current=1):o.current=2}),[n]),[i.current,a]}(e),a=i[1];return[i[0],o.current,function(){t(),2===o.current&&(a(!1),n&&n()),o.current=0}]}(D,L),ye=ge[0],we=ge[1],be=ge[2];v((function(){if(ye)return q({pause:!0,x:fe*-(innerWidth+20)}),void(ve.current=fe);q(A)}),[ye]);var xe=c({close:function(e){le&&le(0),q({overlay:!0,lastBg:te}),H(e)},changeIndex:function(e,n){void 0===n&&(n=!1);var t=pe?ve.current+(e-fe):e,r=he-1,o=f(t,0,r),i=pe?t:o,a=innerWidth+20;q({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*i,pause:n}),ve.current=i,de&&de(pe?e<0?r:e>r?0:e:o)}}),Ce=xe.close,Ee=xe.changeIndex;function ke(e){return e?Ce():q({overlay:!oe})}function Pe(){q({x:-(innerWidth+20)*fe,lastCX:void 0,lastCY:void 0,pause:!0}),ve.current=fe}function Me(e,n,t,r){"x"===e?function(e){if(void 0!==$){var n=e-$,t=n;!pe&&(0===fe&&n>0||fe===he-1&&n<0)&&(t=n/2),q({touched:!0,lastCX:$,x:-(innerWidth+20)*ve.current+t,pause:!1})}else q({touched:!0,lastCX:e,x:Z,pause:!1})}(n):"y"===e&&function(e,n){if(void 0!==ee){var t=null===x?null:f(x,.01,x-Math.abs(e-ee)/100/4);q({touched:!0,lastCY:ee,bg:1===n?t:x,minimal:1===n})}else q({touched:!0,lastCY:e,bg:te,minimal:!0})}(t,r)}function Re(e,n){var t=e-(null!=$?$:e),r=n-(null!=ee?ee:n),o=!1;if(t<-40)Ee(fe+1);else if(t>40)Ee(fe-1);else{var i=-(innerWidth+20)*ve.current;Math.abs(r)>100&&ie&&E&&(o=!0,Ce()),q({touched:!1,x:i,lastCX:void 0,lastCY:void 0,bg:x,overlay:!!o||oe})}}h("keydown",(function(e){if(D)switch(e.key){case"ArrowLeft":Ee(fe-1,!0);break;case"ArrowRight":Ee(fe+1,!0);break;case"Escape":Ce()}}));var Oe,_e,Xe,Ye=(Oe=T,_e=fe,Xe=pe,(0,r.useMemo)((function(){var e=Oe.length;return Xe?Oe.concat(Oe).concat(Oe).slice(e+_e-1,e+_e+2):Oe.slice(Math.max(_e-1,0),Math.min(_e+2,e+1))}),[Oe,_e,Xe]));if(!ye)return null;var Ne=oe&&!we,Se=D?te:re,Te=ue&&le&&{images:T,index:fe,visible:D,onClose:Ce,onIndexChange:Ee,overlayVisible:Ne,overlay:me&&me.overlay,scale:ae,rotate:ce,onScale:ue,onRotate:le},We=o?o(we):400,Ve=i?i(we):"cubic-bezier(0.25, 0.8, 0.25, 1)",je=o?o(3):600,Ae=i?i(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return r.createElement(p,{className:"PhotoView-Portal"+(Ne?"":" PhotoView-Slider__clean")+(D?"":" PhotoView-Slider__willClose")+(O?" "+O:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:F},D&&r.createElement(b,null),r.createElement("div",{className:"PhotoView-Slider__Backdrop"+(_?" "+_:"")+(1===we?" PhotoView-Slider__fadeIn":2===we?" PhotoView-Slider__fadeOut":""),style:{background:Se?"rgba(0, 0, 0, "+Se+")":void 0,transitionTimingFunction:Ve,transitionDuration:(J?0:We)+"ms",animationDuration:We+"ms"},onAnimationEnd:be}),P&&r.createElement("div",{className:"PhotoView-Slider__BannerWrap"},r.createElement("div",{className:"PhotoView-Slider__Counter"},fe+1," / ",he),r.createElement("div",{className:"PhotoView-Slider__BannerRight"},R&&Te&&R(Te),r.createElement(g,{className:"PhotoView-Slider__toolbarIcon",onClick:Ce}))),Ye.map((function(e,n){var t=pe||0!==fe?ve.current-1+n:fe+n;return r.createElement(j,{key:pe?e.key+"/"+e.src+"/"+t:e.key,item:e,speed:We,easing:Ve,visible:D,onReachMove:Me,onReachUp:Re,onPhotoTap:function(){return ke(a)},onMaskTap:function(){return ke(d)},wrapClassName:Y,className:X,style:{left:(innerWidth+20)*t+"px",transform:"translate3d("+Z+"px, 0px, 0)",transition:J||Q?void 0:"transform "+je+"ms "+Ae},loadingElement:N,brokenElement:S,onPhotoResize:Pe,isActive:(me&&me.key)===e.key,expose:q})})),!s&&P&&r.createElement(r.Fragment,null,(pe||0!==fe)&&r.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Ee(fe-1,!0)}},r.createElement(y,null)),(pe||fe+1<he)&&r.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Ee(fe+1,!0)}},r.createElement(w,null))),M&&Te&&r.createElement("div",{className:"PhotoView-Slider__Overlay"},M(Te)))}var D=["children","onIndexChange","onVisibleChange"],H={images:[],visible:!1,index:0};function L(e){var n=e.children,t=e.onIndexChange,o=e.onVisibleChange,s=a(e,D),f=u(H),d=f[0],v=f[1],h=(0,r.useRef)(0),m=d.images,p=d.visible,g=d.index,y=c({nextId:function(){return h.current+=1},update:function(e){var n=m.findIndex((function(n){return n.key===e.key}));if(n>-1){var t=m.slice();return t.splice(n,1,e),void v({images:t})}v((function(n){return{images:n.images.concat(e)}}))},remove:function(e){v((function(n){var t=n.images.filter((function(n){return n.key!==e}));return{images:t,index:Math.min(t.length-1,g)}}))},show:function(e){var n=m.findIndex((function(n){return n.key===e}));v({visible:!0,index:n}),o&&o(!0,n,d)}}),w=c({close:function(){v({visible:!1}),o&&o(!1,g,d)},changeIndex:function(e){v({index:e}),t&&t(e,d)}}),b=(0,r.useMemo)((function(){return i({},d,y)}),[d,y]);return r.createElement(l.Provider,{value:b},n,r.createElement(I,i({images:m,visible:p,index:g,onIndexChange:w.changeIndex,onClose:w.close},s)))}var F=function(e){var n,t,o=e.src,i=e.render,a=e.overlay,u=e.width,s=e.height,f=e.children,d=(0,r.useContext)(l),v=(n=function(){return d.nextId()},(t=(0,r.useRef)({sign:!1,fn:void 0}).current).sign||(t.sign=!0,t.fn=n()),t.fn),h=(0,r.useRef)(null);(0,r.useEffect)((function(){return function(){d.remove(v)}}),[]);var m=c({render:function(e){return i&&i(e)},click:function(e){d.show(v),function(e,n){if(f){var t=f.props.onClick;t&&t(n)}}(0,e)}});return(0,r.useEffect)((function(){d.update({key:v,src:o,originRef:h,render:m.render,overlay:a,width:u,height:s})}),[o]),f?r.Children.only((0,r.cloneElement)(f,{onClick:m.click,ref:h})):null}}}]);