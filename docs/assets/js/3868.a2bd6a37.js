"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3868],{19261:(e,t,s)=>{s.d(t,{d:()=>i});const i={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},66233:(e,t,s)=>{s.r(t),s.d(t,{dyte_plugins_toggle:()=>c});var i=s(42619),n=s(80335),r=s(20975),o=s(52731),a=s(41249);s(19261);const c=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.variant="button",this.iconPack=n.d,this.t=(0,r.u)(),this.pluginsActive=!1}connectedCallback(){this.statesChanged(this.states),(0,o.o)("sidebar",(()=>this.statesChanged()))}statesChanged(e){const t=e||o.s;null!=t&&(this.pluginsActive=!0===t.activeSidebar&&"plugins"===t.sidebar)}togglePlugins(){const e=this.states||o.s;this.pluginsActive=!((null==e?void 0:e.activeSidebar)&&"plugins"===(null==e?void 0:e.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":"none"}),o.s.activeSidebar=this.pluginsActive,o.s.sidebar=this.pluginsActive?"plugins":"none"}render(){var e,t,s,n;const r=this.t("plugins"),o=null===(e=this.meeting)||void 0===e?void 0:e.self.suggestedTheme;if(!o||(0,a.i)(o)||(null===(n=null===(s=null===(t=o)||void 0===t?void 0:t.controlBar)||void 0===s?void 0:s.elements)||void 0===n?void 0:n.plugins))return(0,i.h)(i.H,{title:r},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:r,variant:this.variant}))}static get watchers(){return{states:["statesChanged"]}}};c.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},20975:(e,t,s)=>{s.d(t,{g:()=>n,u:()=>r});var i=s(19261);const n=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},r=(e=i.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},52731:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>a});var i=s(42619);const n=e=>!("isConnected"in e)||e.isConnected,r=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),o=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:a,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{s=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},r=e=>(i.get.forEach((t=>t(e))),s.get(e)),a=(e,n)=>{const r=s.get(e);t(n,r,e)&&(s.set(e,n),i.set.forEach((t=>t(e,n,r))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>r(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(a(t,s),!0)}),l=(e,t)=>(i[e].push(t),()=>{o(i[e],t)});return{state:c,get:r,set:a,on:l,onChange:(t,s)=>{const i=l("set",((e,i)=>{e===t&&s(i)})),n=l("reset",(()=>s(e[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=s.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),r(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),r(e)}}})()),s})({})},41249:(e,t,s)=>{s.d(t,{P:()=>r,a:()=>i,c:()=>o,i:()=>n});const i=e=>"requestProduceVideo"in e,n=e=>!("controlBar"in e);var r;!function(e){e[e.Video=0]="Video",e[e.ScreenShare=1]="ScreenShare"}(r||(r={}));const o=(e,t)=>{switch(e){case r.Video:return"ALLOWED"===(i(t)?t.produceVideo:t.produceVideo.allow);case r.ScreenShare:return"ALLOWED"===(i(t)?t.produceScreenshare:t.produceScreenshare.allow)}}}}]);