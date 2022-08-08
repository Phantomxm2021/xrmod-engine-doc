"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[278],{19261:(e,t,o)=>{o.d(t,{d:()=>i});const i={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},278:(e,t,o)=>{o.r(t),o.d(t,{dyte_settings:()=>c});var i=o(42619),s=o(80335),r=o(20975),a=o(52731),n=o(41249);o(19261);const c=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.keyPressListener=e=>{"Escape"===e.key&&this.close()},this.iconPack=s.d,this.t=(0,r.u)(),this.activeTab="connection",this.isMobileMainVisible=!1,this.networkStatus="good",this.canProduceAudio=!1,this.canProduceVideo=!1}connectedCallback(){document.addEventListener("keydown",this.keyPressListener),this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t;null===(e=this.meeting)||void 0===e||e.self.disablePreview(),this.keyPressListener&&document.removeEventListener("keydown",this.keyPressListener),this.poorConnectionListener&&(null===(t=this.meeting)||void 0===t||t.meta.removeListener("poorConnection",this.poorConnectionListener))}meetingChanged(e){null!=e&&(this.canProduceAudio="ALLOWED"===e.self.permissions.produceAudio,this.canProduceVideo=(0,n.c)(n.P.Video,e.self.permissions),this.canProduceAudio||this.canProduceVideo?this.canProduceAudio?this.activeTab="audio":this.activeTab="video":this.activeTab="connection",this.poorConnectionListener=({score:e})=>{e<7?this.networkStatus="poor":e<4&&(this.networkStatus="poorest"),setTimeout((()=>{this.networkStatus="good"}),5e3)},e.meta.addListener("poorConnection",this.poorConnectionListener))}changeTab(e){this.activeTab=e,"sm"===this.size&&(this.isMobileMainVisible||(this.isMobileMainVisible=!0))}close(){this.stateUpdate.emit({activeSettings:!1}),a.s.activeSettings=!1}render(){if(null==this.meeting)return null;const e={meeting:this.meeting,states:this.states||a.s,iconPack:this.iconPack,t:this.t};return(0,i.h)(i.H,null,(0,i.h)("aside",{class:{hide:this.isMobileMainVisible},part:"menu"},(0,i.h)("header",null,(0,i.h)("h2",null,this.t("settings"))),this.canProduceAudio&&(0,i.h)("button",{type:"button",class:{active:"audio"===this.activeTab},onClick:()=>this.changeTab("audio")},this.t("audio"),(0,i.h)("div",{class:"right"},(0,i.h)("dyte-icon",{icon:this.iconPack.mic_on}),"sm"===this.size&&(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_right}))),this.canProduceVideo&&(0,i.h)("button",{type:"button",class:{active:"video"===this.activeTab},onClick:()=>this.changeTab("video")},this.t("video"),(0,i.h)("div",{class:"right"},(0,i.h)("dyte-icon",{icon:this.iconPack.video_on}),"sm"===this.size&&(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_right}))),(0,i.h)("button",{type:"none",title:`Your network condition is ${this.networkStatus}`},this.t("connection"),(0,i.h)("div",{class:"right"},(0,i.h)("dyte-icon",{icon:this.iconPack.wifi,class:this.networkStatus})))),(0,i.h)("main",{class:{active:this.isMobileMainVisible},part:"main-content"},"sm"===this.size&&(0,i.h)("header",null,(0,i.h)("dyte-button",{kind:"icon",class:"back-btn",onClick:()=>this.isMobileMainVisible=!1},(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_left})),(0,i.h)("h2",null,this.t("audio"===this.activeTab?"audio":"video"))),"audio"===this.activeTab&&(0,i.h)("dyte-settings-audio",Object.assign({},e)),"video"===this.activeTab&&(0,i.h)("dyte-settings-video",Object.assign({},e))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{position:relative;display:flex;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);width:100%;font-family:var(--dyte-font-family, sans-serif);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}button{font-family:var(--dyte-font-family, sans-serif)}.title{font-size:20px;line-height:1}.back-btn,.dismiss-btn{border-radius:var(--dyte-border-radius-sm, 4px);background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.back-btn:hover,.dismiss-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside{box-sizing:border-box;display:flex;min-width:var(--dyte-space-56, 224px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px)}aside button{margin-top:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;width:100%;align-items:center;justify-content:space-between;border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);background-color:transparent;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));cursor:default;font-size:16px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px}aside button .right{display:flex;align-items:center}aside button .right dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}aside button .right dyte-icon:last-child{margin-left:var(--dyte-space-4, 16px)}aside button[type='button']{cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}aside button[type='button']:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside button[type='button']{border-right:var(--dyte-border-width-md, 2px) solid transparent}aside button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}aside button.active:hover{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}dyte-icon.poor{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}dyte-icon.poorest{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.good{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 131 208 23) / var(--tw-text-opacity))}main{display:flex;flex:1 1 0%;align-items:center;justify-content:center;padding-left:var(--dyte-space-6, 24px);padding-right:var(--dyte-space-6, 24px);box-sizing:border-box;width:100%}.dismiss-btn{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']) aside{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}:host([size='sm']) .dismiss-btn{top:var(--dyte-space-5, 20px);right:var(--dyte-space-4, 16px)}:host([size='sm']) aside{width:100%;padding-left:var(--dyte-space-0, 0px)}:host([size='sm']) aside button{border-radius:var(--dyte-border-radius-none, 0)}:host([size='sm']) aside button.active{border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}:host([size='sm']) aside button.active:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) aside.hide{display:none}:host([size='sm']) main{display:none;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) main header{justify-content:center}:host([size='sm']) main header dyte-button{position:absolute;left:var(--dyte-space-4, 16px)}:host([size='sm']) main.active{display:block}"},20975:(e,t,o)=>{o.d(t,{g:()=>s,u:()=>r});var i=o(19261);const s=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},r=(e=i.d)=>t=>{var o;return null!==(o=e[t])&&void 0!==o?o:t}},52731:(e,t,o)=>{o.d(t,{o:()=>c,s:()=>n});var i=o(42619);const s=e=>!("isConnected"in e)||e.isConnected,r=((e,t)=>{let o;return(...i)=>{o&&clearTimeout(o),o=setTimeout((()=>{o=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(s))}),2e3),a=(e,t)=>{const o=e.indexOf(t);o>=0&&(e[o]=e[e.length-1],e.length--)},{state:n,onChange:c}=((e,t)=>{const o=((e,t=((e,t)=>e!==t))=>{let o=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},s=()=>{o=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},r=e=>(i.get.forEach((t=>t(e))),o.get(e)),n=(e,s)=>{const r=o.get(e);t(s,r,e)&&(o.set(e,s),i.set.forEach((t=>t(e,s,r))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>r(t),ownKeys:e=>Array.from(o.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>o.has(t),set:(e,t,o)=>(n(t,o),!0)}),d=(e,t)=>(i[e].push(t),()=>{a(i[e],t)});return{state:c,get:r,set:n,on:d,onChange:(t,o)=>{const i=d("set",((e,i)=>{e===t&&o(i)})),s=d("reset",(()=>o(e[t])));return()=>{i(),s()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),s()},reset:s,forceUpdate:e=>{const t=o.get(e);i.set.forEach((o=>o(e,t,t)))}}})(e,t);return o.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const o=(0,i.a)();o&&((e,t,o)=>{const i=e.get(t);i?i.includes(o)||i.push(o):e.set(t,[o])})(e,t,o)},set:t=>{const o=e.get(t);o&&e.set(t,o.filter(i.f)),r(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),r(e)}}})()),o})({})},41249:(e,t,o)=>{o.d(t,{P:()=>r,a:()=>i,c:()=>a,i:()=>s});const i=e=>"requestProduceVideo"in e,s=e=>!("controlBar"in e);var r;!function(e){e[e.Video=0]="Video",e[e.ScreenShare=1]="ScreenShare"}(r||(r={}));const a=(e,t)=>{switch(e){case r.Video:return"ALLOWED"===(i(t)?t.produceVideo:t.produceVideo.allow);case r.ScreenShare:return"ALLOWED"===(i(t)?t.produceScreenshare:t.produceScreenshare.allow)}}}}]);