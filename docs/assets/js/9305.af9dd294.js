"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9305],{40404:(e,t,r)=>{r.d(t,{a:()=>n,c:()=>i});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function i(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}},19261:(e,t,r)=>{r.d(t,{d:()=>n});const n={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},8976:(e,t,r)=>{r.d(t,{d:()=>n});const n={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"div#more-menu":{position:"absolute",boxSizing:"border-box",top:"0",left:"0",width:"100%",transform:"translateY(-100%)",backgroundColor:"var(--dyte-colors-background-1000, #000)",padding:"16px 12px",borderRadius:"18px 18px 0 0"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager",["dyte-sidebar",{view:"full-screen"}]],"dyte-meeting[meeting=joined].activeSidebar.md":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager",["dyte-sidebar",{view:"full-screen"}]],"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":{children:["div#header-left","div#header-center","div#header-right"]},"dyte-header.sm":["div#header-left","div#header-right"],"div#header-left":["dyte-logo","dyte-recording-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count"],"dyte-logo":{props:{logo:"",config:{designTokens:{logo:"https://app.dyte.io/dyte-logo/dyte.svg"}}}},"dyte-stage":{states:["activeSidebar"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":["dyte-grid","dyte-notifications",["dyte-sidebar",{view:"sidebar"}]],"dyte-stage.activeSidebar.sm":["dyte-grid","dyte-notifications"],"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar"]},"dyte-participant-tile[meeting=setup]":{children:["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"]},"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":{children:["dyte-name-tag"]},"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-controlbar.activeMoreMenu.sm":["div#controlbar-mobile","div#more-menu"],"dyte-controlbar.activeMoreMenu.md":["div#controlbar-mobile","div#more-menu"],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-leave-button","dyte-more-toggle"],"div#more-menu":[["dyte-chat-toggle",{variant:"horizontal"}],["dyte-participants-toggle",{variant:"horizontal"}],["dyte-polls-toggle",{variant:"horizontal"}],["dyte-plugins-toggle",{variant:"horizontal"}],["dyte-fullscreen-toggle",{variant:"horizontal"}],["dyte-screenshare-toggle",{variant:"horizontal"}],["dyte-settings-toggle",{variant:"horizontal"}]],"div#controlbar-left":["dyte-leave-button","dyte-screen-share-toggle","dyte-fullscreen-toggle","dyte-recording-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-settings-toggle"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},88853:(e,t,r)=>{r.d(t,{l:()=>i});var n=r(40404),i=(0,n.c)((function(e,t){var r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",a="[object Function]",c="[object Object]",d=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[o]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l[a]=l["[object Map]"]=l["[object Number]"]=l[c]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1;var u="object"==typeof n.a&&n.a&&n.a.Object===Object&&n.a,g="object"==typeof self&&self&&self.Object===Object&&self,f=u||g||Function("return this")(),y=t&&!t.nodeType&&t,p=y&&e&&!e.nodeType&&e,h=p&&p.exports===y,v=h&&u.process,m=function(){try{var e=p&&p.require&&p.require("util").types;return e||v&&v.binding&&v.binding("util")}catch(t){}}(),b=m&&m.isTypedArray;function _(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var j,x,w,S=Array.prototype,z=Function.prototype,A=Object.prototype,O=f["__core-js_shared__"],C=z.toString,P=A.hasOwnProperty,k=(j=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"",I=A.toString,T=C.call(Object),M=RegExp("^"+C.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=h?f.Buffer:void 0,q=f.Symbol,E=f.Uint8Array,R=F?F.allocUnsafe:void 0,U=(x=Object.getPrototypeOf,w=Object,function(e){return x(w(e))}),$=Object.create,D=A.propertyIsEnumerable,B=S.splice,V=q?q.toStringTag:void 0,L=function(){try{var e=pe(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),Y=F?F.isBuffer:void 0,N=Math.max,W=Date.now,G=pe(f,"Map"),H=pe(Object,"create"),J=function(){function e(){}return function(t){if(!Oe(t))return{};if($)return $(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function K(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Q(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function X(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Z(e){var t=this.__data__=new Q(e);this.size=t.size}function ee(e,t){var r=xe(e),n=!r&&je(e),i=!r&&!n&&Se(e),o=!r&&!n&&!i&&Pe(e),a=r||n||i||o,c=a?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],d=c.length;for(var s in e)!t&&!P.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||he(s,d))||c.push(s);return c}function te(e,t,r){(void 0!==r&&!_e(e[t],r)||void 0===r&&!(t in e))&&ie(e,t,r)}function re(e,t,r){var n=e[t];P.call(e,t)&&_e(n,r)&&(void 0!==r||t in e)||ie(e,t,r)}function ne(e,t){for(var r=e.length;r--;)if(_e(e[r][0],t))return r;return-1}function ie(e,t,r){"__proto__"==t&&L?L(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}K.prototype.clear=function(){this.__data__=H?H(null):{},this.size=0},K.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},K.prototype.get=function(e){var t=this.__data__;if(H){var n=t[e];return n===r?void 0:n}return P.call(t,e)?t[e]:void 0},K.prototype.has=function(e){var t=this.__data__;return H?void 0!==t[e]:P.call(t,e)},K.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=H&&void 0===t?r:t,this},Q.prototype.clear=function(){this.__data__=[],this.size=0},Q.prototype.delete=function(e){var t=this.__data__,r=ne(t,e);return!(r<0)&&(r==t.length-1?t.pop():B.call(t,r,1),--this.size,!0)},Q.prototype.get=function(e){var t=this.__data__,r=ne(t,e);return r<0?void 0:t[r][1]},Q.prototype.has=function(e){return ne(this.__data__,e)>-1},Q.prototype.set=function(e,t){var r=this.__data__,n=ne(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},X.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(G||Q),string:new K}},X.prototype.delete=function(e){var t=ye(this,e).delete(e);return this.size-=t?1:0,t},X.prototype.get=function(e){return ye(this,e).get(e)},X.prototype.has=function(e){return ye(this,e).has(e)},X.prototype.set=function(e,t){var r=ye(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Z.prototype.clear=function(){this.__data__=new Q,this.size=0},Z.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Z.prototype.get=function(e){return this.__data__.get(e)},Z.prototype.has=function(e){return this.__data__.has(e)},Z.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Q){var n=r.__data__;if(!G||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new X(n)}return r.set(e,t),this.size=r.size,this};var oe,ae=function(e,t,r){for(var n=-1,i=Object(e),o=r(e),a=o.length;a--;){var c=o[oe?a:++n];if(!1===t(i[c],c,i))break}return e};function ce(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?function(e){var t=P.call(e,V),r=e[V];try{e[V]=void 0;var n=!0}catch(o){}var i=I.call(e);n&&(t?e[V]=r:delete e[V]);return i}(e):function(e){return I.call(e)}(e)}function de(e){return Ce(e)&&ce(e)==o}function se(e){return!(!Oe(e)||function(e){return!!k&&k in e}(e))&&(ze(e)?M:d).test(function(e){if(null!=e){try{return C.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e))}function le(e){if(!Oe(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t=ve(e),r=[];for(var n in e)("constructor"!=n||!t&&P.call(e,n))&&r.push(n);return r}function ue(e,t,r,n,i){e!==t&&ae(t,(function(o,a){if(i||(i=new Z),Oe(o))!function(e,t,r,n,i,o,a){var d=me(e,r),s=me(t,r),l=a.get(s);if(l)return void te(e,r,l);var u=o?o(d,s,r+"",e,t,a):void 0,g=void 0===u;if(g){var f=xe(s),y=!f&&Se(s),p=!f&&!y&&Pe(s);u=s,f||y||p?xe(d)?u=d:Ce(_=d)&&we(_)?u=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(d):y?(g=!1,u=function(e,t){if(t)return e.slice();var r=e.length,n=R?R(r):new e.constructor(r);return e.copy(n),n}(s,!0)):p?(g=!1,h=s,v=!0?(m=h.buffer,b=new m.constructor(m.byteLength),new E(b).set(new E(m)),b):h.buffer,u=new h.constructor(v,h.byteOffset,h.length)):u=[]:function(e){if(!Ce(e)||ce(e)!=c)return!1;var t=U(e);if(null===t)return!0;var r=P.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&C.call(r)==T}(s)||je(s)?(u=d,je(d)?u=function(e){return function(e,t,r,n){var i=!r;r||(r={});var o=-1,a=t.length;for(;++o<a;){var c=t[o],d=n?n(r[c],e[c],c,r,e):void 0;void 0===d&&(d=e[c]),i?ie(r,c,d):re(r,c,d)}return r}(e,ke(e))}(d):Oe(d)&&!ze(d)||(u=function(e){return"function"!=typeof e.constructor||ve(e)?{}:J(U(e))}(s))):g=!1}var h,v,m,b;var _;g&&(a.set(s,u),i(u,s,n,o,a),a.delete(s));te(e,r,u)}(e,t,a,r,ue,n,i);else{var d=n?n(me(e,a),o,a+"",e,t,i):void 0;void 0===d&&(d=o),te(e,a,d)}}),ke)}function ge(e,t){return be(function(e,t,r){return t=N(void 0===t?e.length-1:t,0),function(){for(var n=arguments,i=-1,o=N(n.length-t,0),a=Array(o);++i<o;)a[i]=n[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=n[i];return c[t]=r(a),_(e,this,c)}}(e,t,Me),e+"")}var fe=L?function(e,t){return L(e,"toString",{configurable:!0,enumerable:!1,value:(r=t,function(){return r}),writable:!0});var r}:Me;function ye(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function pe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return se(r)?r:void 0}function he(e,t){var r=typeof e;return!!(t=null==t?i:t)&&("number"==r||"symbol"!=r&&s.test(e))&&e>-1&&e%1==0&&e<t}function ve(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||A)}function me(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var be=function(e){var t=0,r=0;return function(){var n=W(),i=16-(n-r);if(r=n,i>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(fe);function _e(e,t){return e===t||e!=e&&t!=t}var je=de(function(){return arguments}())?de:function(e){return Ce(e)&&P.call(e,"callee")&&!D.call(e,"callee")},xe=Array.isArray;function we(e){return null!=e&&Ae(e.length)&&!ze(e)}var Se=Y||function(){return!1};function ze(e){if(!Oe(e))return!1;var t=ce(e);return t==a||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ae(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function Oe(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Ce(e){return null!=e&&"object"==typeof e}var Pe=b?function(e){return function(t){return e(t)}}(b):function(e){return Ce(e)&&Ae(e.length)&&!!l[ce(e)]};function ke(e){return we(e)?ee(e,!0):le(e)}var Ie,Te=(Ie=function(e,t,r){ue(e,t,r)},ge((function(e,t){var r=-1,n=t.length,i=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(i=Ie.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(e,t,r){if(!Oe(r))return!1;var n=typeof t;return!!("number"==n?we(r)&&he(t,r.length):"string"==n&&t in r)&&_e(r[t],e)}(t[0],t[1],o)&&(i=n<3?void 0:i,n=1),e=Object(e);++r<n;){var a=t[r];a&&Ie(e,a,r,i)}return e})));function Me(e){return e}e.exports=Te}))}}]);