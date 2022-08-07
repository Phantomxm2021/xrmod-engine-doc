"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2845],{19261:(i,e,t)=>{t.d(e,{d:()=>n});const n={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},32845:(i,e,t)=>{t.r(e),t.d(e,{dyte_participant:()=>o});var n=t(42619),a=t(80335),s=t(20975),r=t(7743);t(19261);const o=class{constructor(i){(0,n.r)(this,i),this.pinnedListener=({isPinned:i})=>{this.isPinned=i},this.iconPack=a.d,this.t=(0,s.u)(),this.audioEnabled=!1,this.videoEnabled=!1,this.isPinned=!1,this.canDisableParticipantAudio=!1,this.canDisableParticipantVideo=!1,this.canKickParticipant=!1,this.canPinParticipant=!1}connectedCallback(){this.meetingChanged(this.meeting),this.participantChanged(this.participant)}disconnectedCallback(){null!=this.participant&&(this.audioUpdateListener&&this.participant.removeListener("audioUpdate",this.audioUpdateListener),this.videoUpdateListener&&this.participant.removeListener("videoUpdate",this.videoUpdateListener),this.participant.removeListener("pinned",this.pinnedListener),this.participant.removeListener("unpinned",this.pinnedListener))}meetingChanged(i){null!=i&&(this.canDisableParticipantAudio=i.self.permissions.canAllowParticipantAudio,this.canDisableParticipantVideo=i.self.permissions.canAllowParticipantVideo,this.canKickParticipant=i.self.permissions.kickParticipant,this.canPinParticipant=i.self.permissions.pinParticipant)}participantChanged(i){null!=i&&(this.audioEnabled=i.audioEnabled,this.videoEnabled=i.videoEnabled,this.isPinned=i.isPinned,this.audioUpdateListener=({audioEnabled:i})=>{this.audioEnabled=i},this.videoUpdateListener=({videoEnabled:i})=>{this.videoEnabled=i},i.addListener("audioUpdate",this.audioUpdateListener),i.addListener("videoUpdate",this.videoUpdateListener),i.addListener("pinned",this.pinnedListener),i.addListener("unpinned",this.pinnedListener))}render(){var i,e;const t=this.canDisableParticipantAudio||this.canDisableParticipantVideo||this.canKickParticipant,a=(0,r.f)((null===(i=this.participant)||void 0===i?void 0:i.name)||"");return(0,n.h)(n.H,null,(0,n.h)("div",{class:"left"},(0,n.h)("dyte-avatar",{participant:this.participant,size:"sm"}),(0,n.h)("p",{class:"name",title:a},(0,r.s)(a,16)," ",(null===(e=this.meeting)||void 0===e?void 0:e.self.id)===this.participant.id&&this.t("(you)"))),(0,n.h)("div",{class:"right"},(0,n.h)("dyte-icon",{class:{red:!this.audioEnabled},icon:this.audioEnabled?this.iconPack.mic_on:this.iconPack.mic_off}),(0,n.h)("dyte-icon",{class:{red:!this.videoEnabled},icon:this.videoEnabled?this.iconPack.video_on:this.iconPack.video_off}),t&&(0,n.h)("dyte-menu",null,(0,n.h)("dyte-button",{variant:"ghost",kind:"icon",slot:"trigger"},(0,n.h)("dyte-icon",{class:"more",icon:this.iconPack.more_vertical})),(0,n.h)("dyte-menu-list",null,this.canPinParticipant&&(0,n.h)("dyte-menu-item",{onClick:()=>{this.isPinned?this.participant.unpin():this.participant.pin()}},(0,n.h)("dyte-icon",{icon:this.isPinned?this.iconPack.pin_off:this.iconPack.pin,slot:"start"}),this.isPinned?this.t("Unpin"):this.t("Pin")),this.canDisableParticipantAudio&&(0,n.h)("dyte-menu-item",{onClick:()=>{var i,e;null===(i=this.meeting)||void 0===i||i.participants.disableAudio(null===(e=this.participant)||void 0===e?void 0:e.id)}},(0,n.h)("dyte-icon",{icon:this.iconPack.mic_off,slot:"start"}),"Mute"),this.canDisableParticipantAudio&&(0,n.h)("dyte-menu-item",{onClick:()=>{var i,e;null===(i=this.meeting)||void 0===i||i.participants.disableVideo(null===(e=this.participant)||void 0===e?void 0:e.id)}},(0,n.h)("dyte-icon",{icon:this.iconPack.video_off,slot:"start"}),"Turn off Video"),this.canKickParticipant&&(0,n.h)("dyte-menu-item",{class:"red",onClick:()=>{var i,e;null===(i=this.meeting)||void 0===i||i.participants.kick(null===(e=this.participant)||void 0===e?void 0:e.id)}},(0,n.h)("dyte-icon",{icon:this.iconPack.dismiss,slot:"start"}),"Kick")))))}static get watchers(){return{meeting:["meetingChanged"],participant:["participantChanged"]}}};o.style=":host{position:relative;display:flex;height:var(--dyte-space-14, 56px);align-items:center;justify-content:space-between;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.left{display:flex;align-items:center}.left>*{margin-right:var(--dyte-space-2, 8px)}.left>*:last-child{margin-right:var(--dyte-space-0, 0px)}.right{display:flex;align-items:center;justify-content:flex-end}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);font-size:14px}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}dyte-icon.red{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.more{cursor:pointer}"},20975:(i,e,t)=>{t.d(e,{g:()=>a,u:()=>s});var n=t(19261);const a=async i=>{if(null==i||"en"===i||""===i.trim())return n.d;try{const e=await fetch(`http://localhost:5000/${i}.json`);return e.ok?Object.assign({},n.d,await e.json()):n.d}catch(e){return n.d}},s=(i=n.d)=>e=>{var t;return null!==(t=i[e])&&void 0!==t?t:e}},7743:(i,e,t)=>{t.d(e,{a:()=>s,f:()=>r,h:()=>a,s:()=>n});const n=(i,e=20)=>null==i?"":i.length>e?`${i.substring(0,e)}...`:i,a=i=>/^\p{Emoji}+$/u.test(i)&&!/^\d+$/.test(i),s=i=>i.trim().toLowerCase().startsWith("javascript:")?"https://dyte.io":i,r=i=>""===(i=i.trim())?"Participant":i}}]);