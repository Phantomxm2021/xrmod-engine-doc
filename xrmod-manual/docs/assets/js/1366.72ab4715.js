"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1366],{19261:(e,t,i)=>{i.d(t,{d:()=>r});const r={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},81366:(e,t,i)=>{i.r(t),i.d(t,{dyte_waiting_screen:()=>n});var r=i(42619),s=i(20975);i(19261);const n=class{constructor(e){(0,r.r)(this,e),this.t=(0,s.u)()}render(){return(0,r.h)(r.H,null,(0,r.h)("slot",null,(0,r.h)("div",{class:"centered",part:"content"},(0,r.h)("dyte-logo",{config:this.config,part:"logo"}),(0,r.h)("p",null,this.t("waitlist.body_text")))))}};n.style=":host{height:100%;width:100%;font-family:var(--dyte-font-family, sans-serif);display:flex;flex-direction:column;align-items:center;justify-content:center}.centered{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}"},20975:(e,t,i)=>{i.d(t,{g:()=>s,u:()=>n});var r=i(19261);const s=async e=>{if(null==e||"en"===e||""===e.trim())return r.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},r.d,await t.json()):r.d}catch(t){return r.d}},n=(e=r.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}}}]);