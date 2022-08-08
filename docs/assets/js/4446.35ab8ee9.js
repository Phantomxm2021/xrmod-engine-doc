"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4446],{40404:(e,n,t)=>{t.d(n,{a:()=>r,c:()=>i});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};function i(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},19261:(e,n,t)=>{t.d(n,{d:()=>r});const r={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},44446:(e,n,t)=>{t.r(n),t.d(n,{dyte_screen_share_toggle:()=>l});var r=t(42619),i=t(80335),o=t(20975),s=t(28706),a=t(41249);t(19261),t(40404);const c=()=>"undefined"!=typeof navigator&&void 0!==navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices,l=class{constructor(e){(0,r.r)(this,e),this.variant="button",this.iconPack=i.d,this.t=(0,o.u)(),this.maxScreenShareCount=-1,this.screenShareCount=0,this.screenShareEnabled=!1,this.canScreenShare=!1,this.shareScreenPermission="NOT_REQUESTED",this.selfScreenShareListener=({screenShareEnabled:e})=>{this.screenShareEnabled=e},this.screenShareListener=({screenShareEnabled:e})=>{const n=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(n,0)},this.participantLeftListener=({screenShareEnabled:e})=>{e&&(this.screenShareCount=Math.max(this.screenShareCount-1,0))},this.mediaPermissionErrorListener=({kind:e,message:n})=>{"screenshare"===e&&(this.shareScreenPermission=n)},this.reachedMaxScreenShares=()=>this.maxScreenShareCount>0&&this.screenShareCount>=this.maxScreenShareCount,this.toggleScreenShare=()=>{var e;const n=null===(e=this.meeting)||void 0===e?void 0:e.self;null==n||!this.canScreenShare||this.reachedMaxScreenShares()||this.hasPermissionError()||(n.screenShareEnabled?n.disableScreenShare():n.enableScreenShare())}}connectedCallback(){c()||s.l.error("[dyte-screenshare-toggle] Device does not support screensharing."),this.meetingChanged(this.meeting)}disconnectedCallback(){var e,n,t,r;null===(e=this.meeting)||void 0===e||e.participants.joined.removeListener("screenShareUpdate",this.screenShareListener),null===(n=this.meeting)||void 0===n||n.participants.joined.removeListener("participantLeft",this.participantLeftListener),null===(t=this.meeting)||void 0===t||t.self.removeListener("screenShareUpdate",this.selfScreenShareListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("mediaPermissionError",this.mediaPermissionErrorListener)}meetingChanged(e){var n;if(null!=e){const t=e.self;this.canScreenShare=c()&&(0,a.c)(a.P.ScreenShare,t.permissions),this.maxScreenShareCount=(0,a.a)(e.self.permissions)?-1:null!==(n=e.self.permissions.maxScreenShareCount)&&void 0!==n?n:-1,this.screenShareEnabled=t.screenShareEnabled;let r=0;for(const n of e.participants.joined.toArray())n.screenShareEnabled&&r++;this.screenShareCount=r,e.participants.joined.addListener("screenShareUpdate",this.screenShareListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),t.addListener("screenShareUpdate",this.selfScreenShareListener),t.addListener("mediaPermissionError",this.mediaPermissionErrorListener)}}hasPermissionError(){return"SYSTEM_DENIED"===this.shareScreenPermission||"COULD_NOT_START"===this.shareScreenPermission}getState(){let e="",n="",t="",r={};const i=this.hasPermissionError(),o=this.reachedMaxScreenShares();return this.screenShareEnabled&&!i?(n=this.t("share_screen_stop"),t=this.iconPack.share_screen_stop,r["red-icon"]=!0):(n=this.t("share_screen_start"),t=this.iconPack.share_screen_start),"SYSTEM_DENIED"===this.shareScreenPermission?(e=this.t("perm_sys_denied"),r["red-icon"]=!0):e=n,o&&(e=this.t("Maximum screen share limit reached")),{tooltipLabel:e,label:n,icon:t,classList:r,showWarning:i||o}}render(){if(!this.canScreenShare)return null;const{tooltipLabel:e,label:n,icon:t,classList:i,showWarning:o}=this.getState();return(0,r.h)(r.H,{title:n},(0,r.h)("dyte-tooltip",{placement:"top",kind:"block",label:e,delay:600,part:"tooltip"},(0,r.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,variant:this.variant,label:n,icon:t,class:i,onClick:this.toggleScreenShare,disabled:o,showWarning:o})))}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},20975:(e,n,t)=>{t.d(n,{g:()=>i,u:()=>o});var r=t(19261);const i=async e=>{if(null==e||"en"===e||""===e.trim())return r.d;try{const n=await fetch(`http://localhost:5000/${e}.json`);return n.ok?Object.assign({},r.d,await n.json()):r.d}catch(n){return r.d}},o=(e=r.d)=>n=>{var t;return null!==(t=e[n])&&void 0!==t?t:n}},28706:(e,n,t)=>{t.d(n,{l:()=>i});var r=t(40404),i=(0,r.c)((function(e){var n,t;n=r.a,t=function(){var e=function(){},n="undefined",t=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function i(e,n){var t=e[n];if("function"==typeof t.bind)return t.bind(e);try{return Function.prototype.bind.call(t,e)}catch(r){return function(){return Function.prototype.apply.apply(t,[e,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(r){return"debug"===r&&(r="log"),typeof console!==n&&("trace"===r&&t?o:void 0!==console[r]?i(console,r):void 0!==console.log?i(console,"log"):e)}function a(n,t){for(var i=0;i<r.length;i++){var o=r[i];this[o]=i<n?e:this.methodFactory(o,n,t)}this.log=this.debug}function c(e,t,r){return function(){typeof console!==n&&(a.call(this,t,r),this[e].apply(this,arguments))}}function l(e,n,t){return s(e)||c.apply(this,arguments)}function h(e,t,i){var o,s=this;t=null==t?"WARN":t;var c="loglevel";function h(){var e;if(typeof window!==n&&c){try{e=window.localStorage[c]}catch(i){}if(typeof e===n)try{var t=window.document.cookie,r=t.indexOf(encodeURIComponent(c)+"=");-1!==r&&(e=/^([^;]+)/.exec(t.slice(r))[1])}catch(i){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?c+=":"+e:"symbol"==typeof e&&(c=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=i||l,s.getLevel=function(){return o},s.setLevel=function(t,i){if("string"==typeof t&&void 0!==s.levels[t.toUpperCase()]&&(t=s.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(o=t,!1!==i&&function(e){var t=(r[e]||"silent").toUpperCase();if(typeof window!==n&&c){try{return void(window.localStorage[c]=t)}catch(i){}try{window.document.cookie=encodeURIComponent(c)+"="+t+";"}catch(i){}}}(t),a.call(s,t,e),typeof console===n&&t<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){t=e,h()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(t,!1),function(){if(typeof window!==n&&c){try{return void window.localStorage.removeItem(c)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var d=h();null==d&&(d=t),s.setLevel(d,!1)}var d=new h,u={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var n=u[e];return n||(n=u[e]=new h(e,d.getLevel(),d.methodFactory)),n};var p=typeof window!==n?window.log:void 0;return d.noConflict=function(){return typeof window!==n&&window.log===d&&(window.log=p),d},d.getLoggers=function(){return u},d.default=d,d},e.exports?e.exports=t():n.log=t()}));i.enableAll()},41249:(e,n,t)=>{t.d(n,{P:()=>o,a:()=>r,c:()=>s,i:()=>i});const r=e=>"requestProduceVideo"in e,i=e=>!("controlBar"in e);var o;!function(e){e[e.Video=0]="Video",e[e.ScreenShare=1]="ScreenShare"}(o||(o={}));const s=(e,n)=>{switch(e){case o.Video:return"ALLOWED"===(r(n)?n.produceVideo:n.produceVideo.allow);case o.ScreenShare:return"ALLOWED"===(r(n)?n.produceScreenshare:n.produceScreenshare.allow)}}}}]);