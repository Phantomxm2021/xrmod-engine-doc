"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9439],{19261:(t,e,i)=>{i.d(e,{d:()=>o});const o={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},59439:(t,e,i)=>{i.r(e),i.d(e,{dyte_notification:()=>s});var o=i(42619),r=i(80335),a=i(20975);i(19261);const s=class{constructor(t){(0,o.r)(this,t),this.dismiss=(0,o.c)(this,"dyteNotificationDismiss",7),this.iconPack=r.d,this.t=(0,a.u)(),this.imageState="loading"}connectedCallback(){this.notificationChanged(this.notification)}notificationChanged(t){null!=t&&"number"==typeof t.duration&&setTimeout((()=>{this.dismiss.emit(t.id)}),t.duration)}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"ctr"},null!=this.notification.icon&&(0,o.h)("dyte-icon",{class:"icon",icon:this.notification.icon}),null!=this.notification.image&&null==this.notification.icon&&"errored"!==this.imageState&&(0,o.h)("img",{src:this.notification.image,class:{loaded:"loaded"===this.imageState},onLoad:()=>this.imageState="loaded",onError:()=>this.imageState="errored"}),(0,o.h)("p",{class:"message"},this.notification.message),(0,o.h)("div",{class:"right"},null!=this.notification.button&&(0,o.h)("dyte-button",{variant:this.notification.button.variant,onClick:()=>this.notification.button.onClick()},this.notification.button.text),(0,o.h)("dyte-icon",{"aria-label":this.t("dismiss"),class:"dismiss",icon:this.iconPack.dismiss,onClick:()=>this.dismiss.emit(this.notification.id)}))))}static get watchers(){return{notification:["notificationChanged"]}}};s.style=":host{pointer-events:none;z-index:10;display:block;height:var(--dyte-space-10, 40px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));-webkit-animation:show 0.4s ease;animation:show 0.4s ease;transition:0.4s}.ctr{box-sizing:border-box;display:inline-flex;height:100%;min-width:var(--dyte-space-40, 160px);align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto}img{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);border-radius:9999px}img.loaded{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.message{margin-right:var(--dyte-space-3, 12px)}dyte-icon.icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px)}.right{margin-left:auto;display:flex;align-items:center}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}:host(.exit){-webkit-animation:exit 0.4s ease;animation:exit 0.4s ease}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@-webkit-keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}@keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}:host([size='sm']){font-size:14px}"},20975:(t,e,i)=>{i.d(e,{g:()=>r,u:()=>a});var o=i(19261);const r=async t=>{if(null==t||"en"===t||""===t.trim())return o.d;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},o.d,await e.json()):o.d}catch(e){return o.d}},a=(t=o.d)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}}}]);