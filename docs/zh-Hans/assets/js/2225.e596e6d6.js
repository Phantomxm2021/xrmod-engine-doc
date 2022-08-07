"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2225],{19261:(e,t,s)=>{s.d(t,{d:()=>i});const i={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},12225:(e,t,s)=>{s.r(t),s.d(t,{dyte_camera_toggle:()=>c});var i=s(42619),r=s(80335),o=s(20975),n=s(52731),a=s(41249);s(19261);const c=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.videoUpdateListener=({videoEnabled:e})=>{this.videoEnabled=e},this.mediaPermissionErrorListener=({kind:e,message:t})=>{"video"===e&&(this.cameraPermission=t)},this.variant="button",this.iconPack=r.d,this.t=(0,o.u)(),this.videoEnabled=!1,this.canProduceVideo=!1,this.cameraPermission="NOT_REQUESTED",this.toggleCamera=()=>{var e;if(this.hasPermissionError())return this.stateUpdate.emit({activePermissionsMessage:!0}),n.s.activePermissionsMessage=!0,!1;const t=null===(e=this.meeting)||void 0===e?void 0:e.self;null!=t&&this.canProduceVideo&&(t.videoEnabled?t.disableVideo():t.enableVideo())}}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t;null===(e=this.meeting)||void 0===e||e.self.removeListener("videoUpdate",this.videoUpdateListener),null===(t=this.meeting)||void 0===t||t.self.removeListener("mediaPermissionError",this.mediaPermissionErrorListener)}meetingChanged(e){if(null!=e){const t=e.self;this.canProduceVideo=(0,a.c)(a.P.Video,t.permissions),this.cameraPermission=t.mediaPermissions.video||"NOT_REQUESTED",this.videoEnabled=t.videoEnabled,t.addListener("videoUpdate",this.videoUpdateListener),t.addListener("mediaPermissionError",this.mediaPermissionErrorListener)}}hasPermissionError(){return"NOT_REQUESTED"!==this.cameraPermission&&"ACCEPTED"!==this.cameraPermission}getState(){let e="",t="",s="",i={},r=this.hasPermissionError();return this.videoEnabled&&!r?(t=this.t("video_on"),s=this.iconPack.video_on):(t=this.t("video_off"),s=this.iconPack.video_off,i["red-icon"]=!0),e="COULD_NOT_START"===this.cameraPermission?this.t("Unable to start camera"):"SYSTEM_DENIED"===this.cameraPermission?this.t("perm_sys_denied"):"DENIED"===this.cameraPermission?this.t("perm_browser_denied"):this.videoEnabled?this.t("Disable Camera"):this.t("Enable Camera"),{tooltipLabel:e,label:t,icon:s,classList:i,showWarning:r}}render(){if(!this.canProduceVideo)return null;const{tooltipLabel:e,label:t,icon:s,classList:r,showWarning:o}=this.getState();return(0,i.h)(i.H,{title:t},(0,i.h)("dyte-tooltip",{kind:"block",label:e,part:"tooltip"},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,class:r,variant:this.variant,label:t,icon:s,onClick:this.toggleCamera,showWarning:o,disabled:o})))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},20975:(e,t,s)=>{s.d(t,{g:()=>r,u:()=>o});var i=s(19261);const r=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},o=(e=i.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},52731:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>a});var i=s(42619);const r=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(r))}),2e3),n=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:a,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},r=()=>{s=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},o=e=>(i.get.forEach((t=>t(e))),s.get(e)),a=(e,r)=>{const o=s.get(e);t(r,o,e)&&(s.set(e,r),i.set.forEach((t=>t(e,r,o))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>o(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(a(t,s),!0)}),d=(e,t)=>(i[e].push(t),()=>{n(i[e],t)});return{state:c,get:o,set:a,on:d,onChange:(t,s)=>{const i=d("set",((e,i)=>{e===t&&s(i)})),r=d("reset",(()=>s(e[t])));return()=>{i(),r()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),r()},reset:r,forceUpdate:e=>{const t=s.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),o(e)}}})()),s})({})},41249:(e,t,s)=>{s.d(t,{P:()=>o,a:()=>i,c:()=>n,i:()=>r});const i=e=>"requestProduceVideo"in e,r=e=>!("controlBar"in e);var o;!function(e){e[e.Video=0]="Video",e[e.ScreenShare=1]="ScreenShare"}(o||(o={}));const n=(e,t)=>{switch(e){case o.Video:return"ALLOWED"===(i(t)?t.produceVideo:t.produceVideo.allow);case o.ScreenShare:return"ALLOWED"===(i(t)?t.produceScreenshare:t.produceScreenshare.allow)}}}}]);